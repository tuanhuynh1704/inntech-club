import { cacheLife, cacheTag } from "next/cache";

import {
  docTypeFromMime,
  parseFolderName,
  type LibraryDoc,
  type LibraryDocType,
  type LibraryFolder,
  type LibrarySnapshot,
} from "@/data/library";

/**
 * Server-only Google Drive reader.
 *
 * - Không bao giờ throw: mọi lỗi được chuyển thành `status: "error"`.
 * - API key chỉ đọc trong file này, không log URL, không lộ ID thư mục.
 * - Chỉ ĐỌC Drive (files.list). Không upload/ghi/xoá.
 */

const DRIVE_FILES_ENDPOINT = "https://www.googleapis.com/drive/v3/files";
const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";
const SHORTCUT_MIME_TYPE = "application/vnd.google-apps.shortcut";

const FOLDER_ID_PATTERN = /^[A-Za-z0-9_-]{10,}$/;

const MAX_FOLDERS = 30;
const MAX_FILES_PER_FOLDER = 300;
const MAX_DOCS = 600;
const PAGE_SIZE = 200;
const MAX_PAGES = 3;
const REQUEST_TIMEOUT_MS = 8000;
const FOLDER_CONCURRENCY = 6;
const MAX_RETRIES = 2;

/**
 * Cache ~5 phút với stale-while-revalidate:
 * stale 300s (client dùng cache ngay), revalidate 300s (nền làm mới),
 * expire 3600s. Trạng thái lỗi/chưa cấu hình dùng preset "minutes"
 * (revalidate 60s) để tự phục hồi nhanh khi Drive/env được sửa.
 */
const LIBRARY_CACHE_LIFE = { stale: 300, revalidate: 300, expire: 3600 };

const UNCONFIGURED_MESSAGE =
  "Kho tài liệu chưa được cấu hình. Quản trị viên cần thêm GOOGLE_DRIVE_API_KEY và GOOGLE_DRIVE_FOLDER_ID vào biến môi trường của website để kết nối Google Drive.";
const ERROR_MESSAGE =
  "Chưa tải được danh sách tài liệu từ Google Drive. Vui lòng thử lại sau ít phút hoặc mở thư mục Drive trực tiếp.";
const ROOT_FOLDER_LABEL = "Chưa phân loại";

const DATE_TIME_FORMAT = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const DATE_FORMAT = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

type DriveFile = {
  id?: string;
  name?: string;
  mimeType?: string;
  size?: string;
  modifiedTime?: string;
  webViewLink?: string;
};

type DriveListResponse = {
  files?: DriveFile[];
  nextPageToken?: string;
};

type FolderEntry = { id: string; name: string };

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const isFolder = (file: DriveFile): boolean =>
  file.mimeType === FOLDER_MIME_TYPE;

const isReadableFile = (file: DriveFile): boolean =>
  Boolean(file.id) &&
  Boolean(file.name) &&
  !isFolder(file) &&
  file.mimeType !== SHORTCUT_MIME_TYPE;

function emptySnapshot(
  status: LibrarySnapshot["status"],
  message: string,
): LibrarySnapshot {
  return {
    status,
    folders: [],
    docs: [],
    totalDocs: 0,
    truncated: false,
    failedFolders: 0,
    fetchedAtLabel: "",
    message,
  };
}

function formatBytes(size: string | undefined): {
  sizeBytes: number | null;
  sizeLabel: string;
} {
  if (!size) return { sizeBytes: null, sizeLabel: "—" };
  const bytes = Number(size);
  if (!Number.isFinite(bytes) || bytes < 0) {
    return { sizeBytes: null, sizeLabel: "—" };
  }
  if (bytes < 1024) return { sizeBytes: bytes, sizeLabel: `${bytes} B` };

  const units = ["KB", "MB", "GB", "TB"];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  const digits = value >= 10 ? 0 : 1;
  const label = `${value.toFixed(digits).replace(".", ",")} ${units[unit]}`;
  return { sizeBytes: bytes, sizeLabel: label };
}

function formatDate(value: string | undefined): string {
  if (!value) return "Không rõ";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Không rõ";
  return DATE_FORMAT.format(date);
}

function previewUrlFor(id: string, type: LibraryDocType): string {
  switch (type) {
    case "doc":
      return `https://docs.google.com/document/d/${id}/preview`;
    case "slide":
      return `https://docs.google.com/presentation/d/${id}/preview`;
    case "sheet":
      return `https://docs.google.com/spreadsheets/d/${id}/preview`;
    default:
      return `https://drive.google.com/file/d/${id}/preview`;
  }
}

/**
 * Link tải xuống:
 * - Google-native (Docs/Slides/Sheets) → endpoint export tương ứng.
 * - File nhị phân (PDF/Office/video/ảnh/khác) → usercontent + confirm=t để
 *   xử lý trang interstitial cảnh báo virus của file lớn.
 */
function downloadUrlFor(id: string, mimeType: string): string {
  switch (mimeType.trim().toLowerCase()) {
    case "application/vnd.google-apps.document":
      return `https://docs.google.com/document/d/${id}/export?format=docx`;
    case "application/vnd.google-apps.presentation":
      return `https://docs.google.com/presentation/d/${id}/export/pptx`;
    case "application/vnd.google-apps.spreadsheet":
      return `https://docs.google.com/spreadsheets/d/${id}/export?format=xlsx`;
    default:
      return `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
  }
}

const driveUrlFor = (id: string): string =>
  `https://drive.google.com/file/d/${id}/view`;

const thumbnailUrlFor = (
  id: string,
  type: LibraryDocType,
): string | null =>
  type === "video"
    ? `https://drive.google.com/thumbnail?id=${id}&sz=w800`
    : null;

const stripExtension = (name: string): string =>
  name.replace(/\.[A-Za-z0-9]{1,8}$/, "").trim() || name;

/** fetch có retry cho 429/403 với exponential backoff + jitter. */
async function fetchWithRetry(url: string): Promise<Response> {
  for (let attempt = 0; ; attempt += 1) {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: { Accept: "application/json" },
    });

    if (response.status !== 429 && response.status !== 403) return response;
    if (attempt >= MAX_RETRIES) return response;

    await sleep(350 * 2 ** attempt + Math.floor(Math.random() * 250));
  }
}

type DriveListResult = { items: DriveFile[]; hasMore: boolean };

/** Liệt kê con trực tiếp của một thư mục Drive (tối đa MAX_PAGES trang). */
async function listChildren(
  parentId: string,
  apiKey: string,
): Promise<DriveListResult> {
  const items: DriveFile[] = [];
  let pageToken: string | undefined;

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const url = new URL(DRIVE_FILES_ENDPOINT);
    url.searchParams.set("q", `'${parentId}' in parents and trashed = false`);
    url.searchParams.set(
      "fields",
      "nextPageToken,files(id,name,mimeType,size,modifiedTime,webViewLink)",
    );
    url.searchParams.set("orderBy", "folder,name_natural");
    url.searchParams.set("pageSize", String(PAGE_SIZE));
    url.searchParams.set("supportsAllDrives", "true");
    url.searchParams.set("includeItemsFromAllDrives", "true");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const response = await fetchWithRetry(url.toString());
    if (!response.ok) {
      // Không đưa body/URL (chứa key) vào thông báo lỗi.
      throw new Error("Drive request failed");
    }

    const data = (await response.json()) as DriveListResponse;
    items.push(...(data.files ?? []));
    pageToken = data.nextPageToken;
    if (!pageToken) break;
  }

  // Còn nextPageToken sau MAX_PAGES → còn item chưa đọc: báo truncated để
  // không âm thầm mất dữ liệu.
  return { items, hasMore: Boolean(pageToken) };
}

/** Chạy fn trên items với tối đa `limit` tác vụ song song. */
async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;

  const workers = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        results[index] = await fn(items[index]);
      }
    },
  );

  await Promise.all(workers);
  return results;
}

function toLibraryDoc(
  file: DriveFile,
  folder: LibraryFolder,
): LibraryDoc | null {
  if (!file.id || !file.name) return null;

  const type = docTypeFromMime(file.mimeType ?? "");
  const { sizeBytes, sizeLabel } = formatBytes(file.size);

  return {
    id: file.id,
    name: file.name,
    title: stripExtension(file.name),
    type,
    mimeType: file.mimeType ?? "application/octet-stream",
    folderId: folder.id,
    folderName: folder.name,
    semester: folder.semester,
    subject: folder.subject,
    sizeBytes,
    sizeLabel,
    modifiedLabel: formatDate(file.modifiedTime),
    previewUrl: previewUrlFor(file.id, type),
    downloadUrl: downloadUrlFor(file.id, file.mimeType ?? ""),
    driveUrl: file.webViewLink ?? driveUrlFor(file.id),
    thumbnailUrl: thumbnailUrlFor(file.id, type),
  };
}

async function loadLibrary(
  apiKey: string,
  rootFolderId: string,
): Promise<LibrarySnapshot> {
  try {
    const rootResult = await listChildren(rootFolderId, apiKey);
    const rootItems = rootResult.items;

    const allFolders = rootItems.filter(isFolder);
    const readableRootFiles = rootItems.filter(isReadableFile);

    const folderEntries: FolderEntry[] = allFolders
      .filter((file): file is DriveFile & { id: string; name: string } =>
        Boolean(file.id && file.name),
      )
      .slice(0, MAX_FOLDERS)
      .map((file) => ({ id: file.id, name: file.name }));

    const rootFiles = readableRootFiles.slice(0, MAX_FILES_PER_FOLDER);

    // `truncated` chỉ phản ánh giới hạn số lượng/phân trang.
    let truncated =
      rootResult.hasMore ||
      allFolders.length > MAX_FOLDERS ||
      readableRootFiles.length > MAX_FILES_PER_FOLDER;
    // `failedFolders` phản ánh lỗi quyền/network — nguyên nhân khác hẳn.
    let failedFolders = 0;

    const folderResults = await mapLimit(
      folderEntries,
      FOLDER_CONCURRENCY,
      async (entry) => {
        try {
          const result = await listChildren(entry.id, apiKey);
          const files = result.items.filter(isReadableFile);
          return {
            entry,
            files: files.slice(0, MAX_FILES_PER_FOLDER),
            truncated: result.hasMore || files.length > MAX_FILES_PER_FOLDER,
            failed: false,
          };
        } catch {
          // Một thư mục lỗi quyền không nên làm hỏng cả kho.
          return {
            entry,
            files: [] as DriveFile[],
            truncated: false,
            failed: true,
          };
        }
      },
    );

    const folders: LibraryFolder[] = [];
    const docs: LibraryDoc[] = [];

    const registerFolder = (
      id: string,
      name: string,
      files: DriveFile[],
    ): void => {
      if (files.length === 0) return;

      const meta = parseFolderName(name);
      const folder: LibraryFolder = {
        id,
        name: name || ROOT_FOLDER_LABEL,
        semester: meta.semester,
        subject: meta.subject,
        docCount: files.length,
      };

      const folderDocs: LibraryDoc[] = [];
      for (const file of files) {
        if (docs.length + folderDocs.length >= MAX_DOCS) {
          truncated = true;
          break;
        }
        const doc = toLibraryDoc(file, folder);
        if (doc) folderDocs.push(doc);
      }

      if (folderDocs.length === 0) return;

      folder.docCount = folderDocs.length;
      folders.push(folder);
      docs.push(...folderDocs);
    };

    registerFolder("root", ROOT_FOLDER_LABEL, rootFiles);

    for (const result of folderResults) {
      if (result.truncated) truncated = true;
      if (result.failed) failedFolders += 1;
      registerFolder(result.entry.id, result.entry.name, result.files);
    }

    folders.sort(
      (a, b) =>
        a.semester.localeCompare(b.semester, "vi") ||
        a.subject.localeCompare(b.subject, "vi"),
    );

    return {
      status: "ok",
      folders,
      docs,
      totalDocs: docs.length,
      truncated,
      failedFolders,
      fetchedAtLabel: DATE_TIME_FORMAT.format(new Date()),
      message:
        docs.length === 0
          ? "Thư mục Google Drive đã kết nối nhưng chưa có tài liệu nào được chia sẻ."
          : null,
    };
  } catch {
    return emptySnapshot("error", ERROR_MESSAGE);
  }
}

/**
 * Server Component dùng hàm này để lấy snapshot tài liệu.
 * Không bao giờ throw — kể cả khi thiếu env hoặc Drive lỗi.
 */
export async function getLibrarySnapshot(): Promise<LibrarySnapshot> {
  "use cache";
  cacheTag("drive-library");

  const apiKey = process.env.GOOGLE_DRIVE_API_KEY?.trim() ?? "";
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim() ?? "";

  if (!apiKey || !FOLDER_ID_PATTERN.test(folderId)) {
    cacheLife("minutes");
    return emptySnapshot("unconfigured", UNCONFIGURED_MESSAGE);
  }

  const snapshot = await loadLibrary(apiKey, folderId);

  if (snapshot.status === "ok") {
    cacheLife(LIBRARY_CACHE_LIFE);
  } else {
    cacheLife("minutes");
  }

  return snapshot;
}
