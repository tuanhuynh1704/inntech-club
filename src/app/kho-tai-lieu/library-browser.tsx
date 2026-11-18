"use client";

import { useMemo, useRef, useState } from "react";

import { BookOpen, ExternalLink } from "@/components/icons";
import {
  DOC_TYPE_LABELS,
  DOC_TYPE_TILE_LABELS,
  LIBRARY_DOC_TYPE_ORDER,
  type LibraryDoc,
  type LibraryDocType,
  type LibrarySnapshot,
} from "@/data/library";

import styles from "./page.module.css";
import ui from "@/components/hub/hub-ui.module.css";

const ALL = "all";
const PAGE_STEP = 12;

/** Chuẩn hoá tiếng Việt cục bộ (không kéo search-index vào bundle client). */
function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function DocTile({ doc }: { doc: LibraryDoc }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showThumbnail =
    doc.type === "video" && Boolean(doc.thumbnailUrl) && !imageFailed;

  return (
    <span
      className={`${styles.fileTile} ${
        showThumbnail ? styles.fileTileVideo : ""
      }`}
      data-type={doc.type}
      aria-hidden="true"
    >
      {showThumbnail ? (
        // Ảnh thumbnail Drive đi kèm fallback tile khi lỗi; next/image cần
        // remotePatterns nên dùng <img> để không phải sửa next.config.ts.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.tileImage}
          src={doc.thumbnailUrl ?? ""}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
        />
      ) : null}
      <span className={styles.tileLabel}>
        {DOC_TYPE_TILE_LABELS[doc.type]}
      </span>
    </span>
  );
}

export default function LibraryBrowser({
  snapshot,
}: {
  snapshot: LibrarySnapshot;
}) {
  const [query, setQuery] = useState("");
  const [folder, setFolder] = useState(ALL);
  const [type, setType] = useState<LibraryDocType | typeof ALL>(ALL);
  const [semester, setSemester] = useState(ALL);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_STEP);
  const previewRef = useRef<HTMLElement | null>(null);

  const semesters = useMemo(
    () =>
      Array.from(
        new Set(
          snapshot.docs
            .map((doc) => doc.semester)
            .filter((value): value is string => value.length > 0),
        ),
      ).sort((a, b) => a.localeCompare(b, "vi")),
    [snapshot.docs],
  );

  const types = useMemo(() => {
    const present = new Set(snapshot.docs.map((doc) => doc.type));
    return LIBRARY_DOC_TYPE_ORDER.filter((value) => present.has(value));
  }, [snapshot.docs]);

  const filteredDocs = useMemo(() => {
    const needle = normalize(query);
    return snapshot.docs.filter((doc) => {
      if (folder !== ALL && doc.folderId !== folder) return false;
      if (type !== ALL && doc.type !== type) return false;
      if (semester !== ALL && doc.semester !== semester) return false;
      if (!needle) return true;
      const haystack = normalize(
        [
          doc.name,
          doc.title,
          doc.subject,
          doc.folderName,
          doc.semester,
          DOC_TYPE_LABELS[doc.type],
        ].join(" "),
      );
      return haystack.includes(needle);
    });
  }, [snapshot.docs, query, folder, type, semester]);

  const activeDoc = useMemo(
    () => snapshot.docs.find((doc) => doc.id === activeDocId) ?? null,
    [snapshot.docs, activeDocId],
  );

  const visibleDocs = filteredDocs.slice(0, visibleCount);
  const hasMore = filteredDocs.length > visibleDocs.length;

  const resetVisible = () => setVisibleCount(PAGE_STEP);

  const clearFilters = () => {
    setQuery("");
    setFolder(ALL);
    setType(ALL);
    setSemester(ALL);
    resetVisible();
  };

  const openDoc = (doc: LibraryDoc) => {
    setActiveDocId(doc.id);
    if (typeof window === "undefined") return;
    window.requestAnimationFrame(() => {
      if (!window.matchMedia("(max-width: 1023px)").matches) return;
      // Tôn trọng prefers-reduced-motion: nhảy thẳng thay vì cuộn mượt.
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      previewRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  if (snapshot.status !== "ok") {
    const unconfigured = snapshot.status === "unconfigured";
    return (
      <div className={styles.shell}>
        <div className={`${ui.panel} ${styles.statusPanel}`}>
          <span className={styles.statusEyebrow}>
            {unconfigured ? "Chưa cấu hình" : "Tạm thời gián đoạn"}
          </span>
          <h2 className={styles.statusTitle}>
            {unconfigured
              ? "Kho tài liệu đang chờ kết nối Google Drive"
              : "Chưa tải được kho tài liệu"}
          </h2>
          <p className={styles.statusText}>{snapshot.message}</p>
          {unconfigured ? (
            <ul className={styles.statusSteps}>
              <li>Bật Google Drive API cho project trên Google Cloud.</li>
              <li>Tạo API key giới hạn cho Drive API (chỉ đọc).</li>
              <li>
                Đặt <code>GOOGLE_DRIVE_API_KEY</code> và{" "}
                <code>GOOGLE_DRIVE_FOLDER_ID</code> trong biến môi trường
                server.
              </li>
              <li>Chia sẻ thư mục Drive ở chế độ công khai chỉ xem.</li>
            </ul>
          ) : (
            <p className={styles.statusText}>
              Hệ thống sẽ tự thử lại sau ít phút. Trong lúc chờ, bạn có thể gửi
              đề xuất tài liệu ở mục bên dưới.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      {/* Thông báo cho screen reader khi vùng preview đổi tài liệu. */}
      <p className={ui.srOnly} role="status">
        {activeDoc ? `Đang xem trước: ${activeDoc.title}` : ""}
      </p>
      <div className={styles.toolbar}>
        <div className={styles.toolbarTop}>
          <div className={styles.searchWrap}>
            <label className={ui.srOnly} htmlFor="library-search">
              Tìm tài liệu theo tên, môn học hoặc thư mục
            </label>
            <input
              id="library-search"
              className={ui.filterInput}
              type="search"
              value={query}
              placeholder="Tìm tài liệu, môn học, thư mục…"
              onChange={(event) => {
                setQuery(event.target.value);
                resetVisible();
              }}
            />
          </div>

          <div className={styles.selects}>
            {/* Mobile dùng select này; desktop (≥1024) ẩn và dùng folder rail. */}
            <div className={styles.folderSelect}>
              <label className={ui.srOnly} htmlFor="library-folder-mobile">
                Lọc theo thư mục
              </label>
              <select
                id="library-folder-mobile"
                className={`${ui.select} ${styles.select}`}
                value={folder}
                onChange={(event) => {
                  setFolder(event.target.value);
                  resetVisible();
                }}
              >
                <option value={ALL}>Tất cả thư mục</option>
                {snapshot.folders.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.docCount})
                  </option>
                ))}
              </select>
            </div>

            <label className={ui.srOnly} htmlFor="library-semester">
              Lọc theo học kỳ
            </label>
            <select
              id="library-semester"
              className={`${ui.select} ${styles.select}`}
              value={semester}
              onChange={(event) => {
                setSemester(event.target.value);
                resetVisible();
              }}
            >
              <option value={ALL}>Tất cả học kỳ</option>
              {semesters.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.chipRow}>
          <span className={styles.chipLabel}>Loại</span>
          <div className={ui.filterChips} role="group" aria-label="Lọc theo loại tài liệu">
            <button
              type="button"
              className={`${ui.filterChip} ${
                type === ALL ? ui.filterChipActive : ""
              }`}
              aria-pressed={type === ALL}
              onClick={() => {
                setType(ALL);
                resetVisible();
              }}
            >
              Tất cả
            </button>
            {types.map((value) => (
              <button
                key={value}
                type="button"
                className={`${ui.filterChip} ${
                  type === value ? ui.filterChipActive : ""
                }`}
                aria-pressed={type === value}
                onClick={() => {
                  setType(value);
                  resetVisible();
                }}
              >
                {DOC_TYPE_LABELS[value]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.toolbarFoot}>
          <p className={styles.count} aria-live="polite">
            {filteredDocs.length} / {snapshot.totalDocs} tài liệu
            {snapshot.fetchedAtLabel
              ? ` · cập nhật ${snapshot.fetchedAtLabel}`
              : ""}
          </p>
          {snapshot.truncated ? (
            <span className={styles.truncated}>
              Đang hiển thị một phần kho tài liệu do giới hạn số lượng.
            </span>
          ) : null}
          {snapshot.failedFolders > 0 ? (
            <span className={`${styles.truncated} ${styles.partialError}`}>
              {snapshot.failedFolders} thư mục chưa truy cập được — kiểm tra
              quyền chia sẻ trên Drive.
            </span>
          ) : null}
        </div>
      </div>

      <div className={styles.layout}>
        <nav className={styles.folderRail} aria-label="Thư mục tài liệu">
            <button
              type="button"
              className={`${styles.folderButton} ${
                folder === ALL ? styles.folderButtonActive : ""
              }`}
              aria-pressed={folder === ALL}
              onClick={() => {
                setFolder(ALL);
                resetVisible();
              }}
            >
              <span className={styles.folderName}>Tất cả thư mục</span>
              <span className={styles.folderCount}>{snapshot.totalDocs}</span>
            </button>
            {snapshot.folders.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.folderButton} ${
                  folder === item.id ? styles.folderButtonActive : ""
                }`}
                aria-pressed={folder === item.id}
                onClick={() => {
                  setFolder(item.id);
                  resetVisible();
                }}
              >
                <span className={styles.folderName}>{item.name}</span>
                <span className={styles.folderCount}>{item.docCount}</span>
              </button>
            ))}
          </nav>

        <div className={styles.browse}>
          {visibleDocs.length > 0 ? (
            <>
              <div className={styles.grid}>
                {visibleDocs.map((doc) => {
                  const active = doc.id === activeDocId;
                  return (
                    <article
                      key={doc.id}
                      className={`${styles.docCard} ${
                        active ? styles.docCardActive : ""
                      }`}
                    >
                      <div className={styles.docMain}>
                        <DocTile doc={doc} />
                        <div className={styles.docInfo}>
                          <h3 className={styles.docName}>
                            <button
                              type="button"
                              className={styles.docTitleButton}
                              aria-pressed={active}
                              onClick={() => openDoc(doc)}
                            >
                              {doc.title}
                            </button>
                          </h3>
                          <p className={styles.docMeta}>
                            <span>
                              {DOC_TYPE_LABELS[doc.type]} · {doc.sizeLabel}
                            </span>
                            <span>{doc.modifiedLabel}</span>
                          </p>
                          <div className={styles.docTags}>
                            <span className={styles.docTag}>
                              {doc.folderName}
                            </span>
                            {doc.semester ? (
                              <span className={styles.docTag}>
                                {doc.semester}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className={styles.docActions}>
                        <button
                          type="button"
                          className={styles.previewButton}
                          aria-pressed={active}
                          onClick={() => openDoc(doc)}
                        >
                          {active ? "Đang xem" : "Xem trước"}
                        </button>
                        <a
                          className={styles.docLink}
                          href={doc.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Tải xuống ${doc.name}`}
                        >
                          Tải xuống
                        </a>
                        <a
                          className={styles.iconAction}
                          href={doc.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Mở ${doc.name} trong Google Drive`}
                        >
                          <ExternalLink />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              {hasMore ? (
                <div className={styles.loadMoreWrap}>
                  <button
                    type="button"
                    className={styles.loadMore}
                    onClick={() =>
                      setVisibleCount((count) => count + PAGE_STEP)
                    }
                  >
                    Tải thêm tài liệu
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className={ui.emptyState}>
              <strong>Không có tài liệu nào khớp bộ lọc.</strong>
              <span>
                Thử từ khoá khác, hoặc xoá bộ lọc để xem toàn bộ kho tài liệu.
              </span>
              <button
                type="button"
                className={styles.resetButton}
                onClick={clearFilters}
              >
                Xoá bộ lọc
              </button>
            </div>
          )}
        </div>

        <aside
          ref={previewRef}
          className={styles.previewCol}
          aria-label="Xem trước tài liệu"
        >
          <div className={`${ui.panel} ${styles.previewCard}`}>
            {activeDoc ? (
              <>
                <div className={styles.previewHead}>
                  <span
                    className={styles.previewBadge}
                    data-type={activeDoc.type}
                  >
                    {DOC_TYPE_LABELS[activeDoc.type]}
                  </span>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setActiveDocId(null)}
                    aria-label="Đóng xem trước"
                  >
                    Đóng
                  </button>
                </div>
                <h3 className={styles.previewTitle}>{activeDoc.title}</h3>
                <p className={styles.previewMeta}>
                  {activeDoc.folderName} · {activeDoc.modifiedLabel} ·{" "}
                  {activeDoc.sizeLabel}
                </p>

                <div className={styles.previewFrameWrap}>
                  <iframe
                    key={activeDoc.id}
                    className={styles.previewFrame}
                    src={activeDoc.previewUrl}
                    title={`Xem trước ${activeDoc.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                  />
                </div>

                <p className={styles.previewHint}>
                  Nếu khung xem trước bị trình duyệt chặn, hãy mở tài liệu
                  trong tab mới hoặc trong Google Drive.
                </p>

                <div className={styles.previewActions}>
                  <a
                    className={styles.previewPrimary}
                    href={activeDoc.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mở tab mới
                  </a>
                  <a
                    className={styles.previewSecondary}
                    href={activeDoc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tải xuống
                  </a>
                  <a
                    className={styles.previewSecondary}
                    href={activeDoc.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mở trong Drive
                  </a>
                </div>
              </>
            ) : (
              <div className={styles.previewEmpty}>
                <span className={styles.previewGlyph} aria-hidden="true">
                  <BookOpen />
                </span>
                <p className={styles.previewEmptyTitle}>
                  Chọn một tài liệu để xem trước
                </p>
                <p className={styles.previewEmptyText}>
                  PDF, slide, tài liệu, bảng tính và video được mở ngay tại
                  đây, không cần rời trang.
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
