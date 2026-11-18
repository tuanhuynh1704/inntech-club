import { Suspense } from "react";
import type { CSSProperties } from "react";

import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import RequestForm from "@/components/hub/request-form";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { buildHubMetadata } from "@/data/metadata";
import { siteEmail } from "@/data/site";
import type { FormField, Hub } from "@/data/types";
import { getLibrarySnapshot } from "@/lib/drive";

import LibraryBrowser from "./library-browser";
import styles from "./page.module.css";
import ui from "@/components/hub/hub-ui.module.css";

/**
 * Hub cục bộ cho trang Kho tài liệu.
 * Cố ý KHÔNG thêm vào src/data/hubs.ts: nền tảng giữ đúng 10 hub.
 */
const libraryHub: Hub = {
  id: "kho-tai-lieu",
  number: "11",
  name: "KHO TÀI LIỆU",
  shortName: "Kho tài liệu",
  tagline: "Tài liệu học tập của CLB, đồng bộ từ Google Drive.",
  description:
    "Kho tài liệu học tập kết nối Google Drive: duyệt theo môn học, tìm kiếm, xem trước và tải tài liệu ngay trên website.",
  href: "/kho-tai-lieu",
  accent: "#0e7490",
  sections: [
    { id: "thu-vien", label: "Thư viện" },
    { id: "xem-truoc", label: "Xem trước" },
    { id: "de-xuat", label: "Đề xuất" },
  ],
};

const requestFields: FormField[] = [
  {
    name: "hoTen",
    label: "Họ và tên",
    type: "text",
    required: true,
    placeholder: "Nguyễn Văn A",
  },
  {
    name: "email",
    label: "Email liên hệ",
    type: "email",
    required: true,
    placeholder: "ban@ntt.edu.vn",
  },
  {
    name: "monHoc",
    label: "Môn học / chủ đề",
    type: "text",
    required: true,
    placeholder: "Ví dụ: Cơ sở dữ liệu",
  },
  {
    name: "hocKy",
    label: "Học kỳ",
    type: "select",
    required: true,
    placeholder: "Chọn học kỳ",
    options: ["HK1", "HK2", "HK3", "Học kỳ hè"],
  },
  {
    name: "link",
    label: "Link tài liệu (Google Drive)",
    type: "text",
    required: true,
    placeholder: "https://drive.google.com/…",
  },
  {
    name: "ghiChu",
    label: "Ghi chú",
    type: "textarea",
    placeholder: "Loại tài liệu, người biên soạn, lý do đề xuất…",
  },
];

export const metadata = buildHubMetadata({
  title: "Kho tài liệu học tập — Google Drive",
  description:
    "Kho tài liệu học tập của INNTECH CLUB kết nối Google Drive: duyệt theo môn học và học kỳ, tìm kiếm tài liệu, xem trước PDF/slide/tài liệu/video ngay trên web, tải xuống hoặc mở trong Drive.",
});

async function LibraryData() {
  const snapshot = await getLibrarySnapshot();
  return <LibraryBrowser snapshot={snapshot} />;
}

function LibrarySkeleton() {
  return (
    <div className={styles.skeleton} role="status" aria-live="polite">
      <span className={ui.srOnly}>Đang tải kho tài liệu…</span>
      <div className={styles.skeletonToolbar} aria-hidden="true">
        <span className={styles.skeletonSearch} />
        <span className={styles.skeletonPill} />
        <span className={styles.skeletonPill} />
      </div>
      <div className={styles.skeletonLayout} aria-hidden="true">
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={styles.skeletonCard}>
              <span className={styles.skeletonTile} />
              <span className={styles.skeletonLine} />
              <span className={styles.skeletonLineShort} />
            </div>
          ))}
        </div>
        <div className={styles.skeletonPanel} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main
      id="main"
      className={ui.hubPage}
      style={{ "--hub-accent": libraryHub.accent } as CSSProperties}
    >
      <ScrollReveal />
      <HubHero
        hub={libraryHub}
        lead="Tài liệu, slide, đề cương và video học tập của CLB được đồng bộ từ một thư mục Google Drive được chia sẻ công khai. Duyệt theo môn, tìm kiếm, xem trước và tải về ngay tại đây."
        primaryCta={{ label: "Mở thư viện", href: "#thu-vien" }}
        secondaryCta={{ label: "Đề xuất tài liệu", href: "#de-xuat" }}
        meta={["Kết nối Google Drive", "Xem trước trực tiếp", "Cập nhật mỗi 5 phút"]}
      />
      <SubNav items={libraryHub.sections} />

      <section id="thu-vien" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Thư viện tài liệu"
            title="Tài liệu — duyệt theo môn và thư mục"
            description="Mỗi thư mục trên Drive trở thành một nhóm tài liệu theo môn học. Tìm không dấu, lọc theo môn/loại/học kỳ và mở bản xem trước ngay trong trang."
          />
          <div
            id="xem-truoc"
            className={`${styles.sectionBody} ${styles.libraryAnchor}`}
          >
            <Suspense fallback={<LibrarySkeleton />}>
              <LibraryData />
            </Suspense>
          </div>
        </div>
      </section>

      <section
        id="de-xuat"
        className={`${ui.section} ${ui.sectionAnchor} ${ui.sectionTint}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Đề xuất tài liệu"
            title="Gửi tài liệu bạn muốn bổ sung vào kho"
            description="Nếu bạn có tài liệu học tập hữu ích, hãy gửi link Google Drive cho ban quản trị. Chỉ chủ sở hữu Drive của CLB đưa tài liệu lên kho; website chỉ đọc dữ liệu."
          />
          <div className={styles.formPanel}>
            <RequestForm
              fields={requestFields}
              to={siteEmail}
              subject="Đề xuất tài liệu — Kho tài liệu INNTECH"
              successMessage="Đã mở ứng dụng email với nội dung đề xuất. Cảm ơn bạn đã đóng góp cho kho tài liệu của CLB!"
              submitLabel="Gửi đề xuất"
              note="Biểu mẫu mở ứng dụng email của bạn và gửi tới hộp thư CLB. Website không lưu dữ liệu biểu mẫu."
              aside={
                <div className={styles.formAside}>
                  <h3 className={styles.formAsideTitle}>Trước khi gửi</h3>
                  <ul className={styles.formAsideList}>
                    <li>Đặt quyền xem cho link: “Bất kỳ ai có liên kết”.</li>
                    <li>Ghi rõ môn học và học kỳ trong nội dung email.</li>
                    <li>
                      Ưu tiên PDF, slide hoặc Google Docs thay vì file nén.
                    </li>
                    <li>
                      Ban quản trị sẽ kiểm tra bản quyền và sắp xếp tài liệu vào
                      đúng thư mục trên Drive.
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId="kho-tai-lieu"
        ids={["learning-hub", "student-hub", "project-hub"]}
        title="Học tiếp cùng các hub khác"
        description="Kho tài liệu là nguồn học liệu thô; Learning Hub gợi ý lộ trình, Student Hub trang bị công cụ và Project Hub là nơi áp dụng."
      />
    </main>
  );
}
