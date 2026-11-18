/**
 * Kho tài liệu — pure data types & helpers.
 *
 * Dùng được ở cả server (src/lib/drive.ts) và client (library-browser.tsx):
 * không import `next/*`, không gọi `fetch`, không đọc env.
 */

export type LibraryDocType =
  | "pdf"
  | "doc"
  | "slide"
  | "sheet"
  | "video"
  | "image"
  | "other";

export type LibraryDoc = {
  id: string;
  /** Tên file đầy đủ trên Drive, kèm phần mở rộng nếu có. */
  name: string;
  /** Tên file đã bỏ phần mở rộng, dùng làm tiêu đề card. */
  title: string;
  type: LibraryDocType;
  mimeType: string;
  folderId: string;
  folderName: string;
  semester: string;
  subject: string;
  sizeBytes: number | null;
  sizeLabel: string;
  modifiedLabel: string;
  /** URL iframe xem trước (Google Docs viewer / Drive preview). */
  previewUrl: string;
  downloadUrl: string;
  /** Link mở file trong Google Drive. */
  driveUrl: string;
  /** Chỉ video mới có thumbnail; tài liệu khác dùng tile typographic. */
  thumbnailUrl: string | null;
};

export type LibraryFolder = {
  id: string;
  name: string;
  semester: string;
  subject: string;
  docCount: number;
};

export type LibraryStatus = "ok" | "unconfigured" | "error";

export type LibrarySnapshot = {
  status: LibraryStatus;
  folders: LibraryFolder[];
  docs: LibraryDoc[];
  totalDocs: number;
  /** Chỉ báo giới hạn số lượng/phân trang (không phải lỗi quyền). */
  truncated: boolean;
  /** Số thư mục con không đọc được (quyền chia sẻ/network); 0 nếu đọc đủ. */
  failedFolders: number;
  /** Đã format theo Asia/Ho_Chi_Minh; rỗng khi chưa có dữ liệu. */
  fetchedAtLabel: string;
  /** Thông báo tiếng Việt an toàn cho người đọc (không chứa ID/khoá). */
  message: string | null;
};

export const DOC_TYPE_LABELS: Record<LibraryDocType, string> = {
  pdf: "PDF",
  doc: "Tài liệu",
  slide: "Slide",
  sheet: "Bảng tính",
  video: "Video",
  image: "Hình ảnh",
  other: "Khác",
};

/** Nhãn ngắn hiển thị trên tile typographic. */
export const DOC_TYPE_TILE_LABELS: Record<LibraryDocType, string> = {
  pdf: "PDF",
  doc: "DOC",
  slide: "PPT",
  sheet: "SHEET",
  video: "VIDEO",
  image: "IMG",
  other: "FILE",
};

/** Thứ tự chip lọc loại tài liệu. */
export const LIBRARY_DOC_TYPE_ORDER: LibraryDocType[] = [
  "pdf",
  "doc",
  "slide",
  "sheet",
  "video",
  "image",
  "other",
];

/**
 * Quy tắc chuẩn hoá tên thư mục Drive thành môn học.
 * Khoá là tên thư mục (không phân biệt hoa/thường, không phân biệt dấu).
 * Học kỳ để trống ở đây vì được suy ra từ tên thư mục (HK1, HK2, 2025-2026…).
 */
export const LIBRARY_FOLDER_RULES: Record<
  string,
  { semester: string; subject: string }
> = {
  cnpm: { semester: "", subject: "Công nghệ phần mềm" },
  "cong nghe phan mem": { semester: "", subject: "Công nghệ phần mềm" },
  "công nghệ phần mềm": { semester: "", subject: "Công nghệ phần mềm" },
  csdl: { semester: "", subject: "Cơ sở dữ liệu" },
  "co so du lieu": { semester: "", subject: "Cơ sở dữ liệu" },
  "cơ sở dữ liệu": { semester: "", subject: "Cơ sở dữ liệu" },
  ttnt: { semester: "", subject: "Trí tuệ nhân tạo" },
  "tri tue nhan tao": { semester: "", subject: "Trí tuệ nhân tạo" },
  "trí tuệ nhân tạo": { semester: "", subject: "Trí tuệ nhân tạo" },
  web: { semester: "", subject: "Lập trình web" },
  "lap trinh web": { semester: "", subject: "Lập trình web" },
  "lập trình web": { semester: "", subject: "Lập trình web" },
  mmt: { semester: "", subject: "Mạng máy tính" },
  "mang may tinh": { semester: "", subject: "Mạng máy tính" },
  "mạng máy tính": { semester: "", subject: "Mạng máy tính" },
  ktmt: { semester: "", subject: "Kiến trúc máy tính" },
  "kien truc may tinh": { semester: "", subject: "Kiến trúc máy tính" },
  "kiến trúc máy tính": { semester: "", subject: "Kiến trúc máy tính" },
  "lap trinh": { semester: "", subject: "Lập trình" },
  "lập trình": { semester: "", subject: "Lập trình" },
  toan: { semester: "", subject: "Toán" },
  "toán": { semester: "", subject: "Toán" },
  "tieng anh": { semester: "", subject: "Tiếng Anh" },
  "tiếng anh": { semester: "", subject: "Tiếng Anh" },
  "do an": { semester: "", subject: "Đồ án" },
  "đồ án": { semester: "", subject: "Đồ án" },
  "de cuong": { semester: "", subject: "Đề cương" },
  "đề cương": { semester: "", subject: "Đề cương" },
  slide: { semester: "", subject: "Slide" },
  "tai lieu chung": { semester: "", subject: "Tài liệu chung" },
  "tài liệu chung": { semester: "", subject: "Tài liệu chung" },
};

export const LIBRARY_FALLBACK_SUBJECT = "Chưa phân loại";

const SEMESTER_RE =
  /(?:HK|Học\s*kỳ|Hoc\s*ky|Kỳ|Ky|Semester|Term)\s*[._-]?\s*([1-9])/i;
const YEAR_RE = /(20\d{2})\s*[-–—]\s*(20\d{2})/;

const stripDiacritics = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

const RULE_INDEX = new Map<string, { semester: string; subject: string }>();
for (const [key, value] of Object.entries(LIBRARY_FOLDER_RULES)) {
  RULE_INDEX.set(stripDiacritics(key).toLowerCase(), value);
}

/**
 * Suy ra học kỳ + môn học từ tên thư mục Drive.
 * Không bao giờ throw; tên không khớp quy tắc nào → subject "Chưa phân loại".
 */
export function parseFolderName(name: string): {
  semester: string;
  subject: string;
} {
  const raw = name.replace(/\s+/g, " ").trim();
  if (!raw) {
    return { semester: "", subject: LIBRARY_FALLBACK_SUBJECT };
  }

  const semesterMatch = SEMESTER_RE.exec(raw);
  const yearMatch = YEAR_RE.exec(raw);
  const semesterParts: string[] = [];
  if (semesterMatch) semesterParts.push(`HK${semesterMatch[1]}`);
  if (yearMatch) semesterParts.push(`${yearMatch[1]}-${yearMatch[2]}`);

  // Tách HK/năm (và ngoặc ghi chú) TRƯỚC khi tra quy tắc, để các tên như
  // "HK1 - CNPM" hoặc "Cơ sở dữ liệu - HK2 2025-2026" vẫn khớp đúng môn.
  const subjectRaw = raw
    .replace(/\[[^\]]*\]|\([^)]*\)/g, " ")
    .replace(SEMESTER_RE, " ")
    .replace(YEAR_RE, " ")
    .replace(/[·•|/\\–—:_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const rule =
    RULE_INDEX.get(stripDiacritics(subjectRaw).toLowerCase()) ??
    RULE_INDEX.get(stripDiacritics(raw).toLowerCase());

  return {
    semester: semesterParts.join(" · "),
    subject: rule?.subject ?? (subjectRaw || LIBRARY_FALLBACK_SUBJECT),
  };
}

const MIME_TYPE_MAP: Record<string, LibraryDocType> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "doc",
  "application/vnd.google-apps.document": "doc",
  "application/vnd.ms-powerpoint": "slide",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "slide",
  "application/vnd.google-apps.presentation": "slide",
  "application/vnd.ms-excel": "sheet",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "sheet",
  "application/vnd.google-apps.spreadsheet": "sheet",
  "text/csv": "sheet",
  "application/vnd.google-apps.video": "video",
};

/** Map mimeType của Drive sang loại tài liệu hiển thị. */
export function docTypeFromMime(mimeType: string): LibraryDocType {
  // Drive có thể trả mimeType khác hoa/thường ("Video/mp4"); chuẩn hoá cả
  // map lẫn startsWith để không rơi nhầm vào "other".
  const normalized = mimeType.trim().toLowerCase();
  const direct = MIME_TYPE_MAP[normalized];
  if (direct) return direct;
  if (normalized.startsWith("video/")) return "video";
  if (normalized.startsWith("image/")) return "image";
  return "other";
}
