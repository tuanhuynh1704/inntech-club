import type { CSSProperties } from "react";

import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import RequestForm from "@/components/hub/request-form";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { ArrowUpRight } from "@/components/icons";
import { mentors, mentoringSteps } from "@/data/mentor-hub";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import { siteEmail } from "@/data/site";
import type { FormField } from "@/data/types";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("mentor-hub")!;

const mentorFields: FormField[] = [
  { name: "name", label: "Họ và tên", type: "text", required: true, placeholder: "Nguyễn Văn A" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "ban@email.com" },
  { name: "project", label: "Dự án / chủ đề", type: "text", required: true, placeholder: "Ví dụ: EaAgri, DIA+..." },
  { name: "goals", label: "Mục tiêu cần mentor hỗ trợ", type: "textarea", required: true, placeholder: "Bạn đang ở giai đoạn nào và cần gì?" },
  { name: "time", label: "Thời gian mong muốn", type: "text", placeholder: "Ví dụ: tối thứ 3, cuối tuần..." },
];

const becomeMentorHref = `mailto:${siteEmail}?subject=${encodeURIComponent(
  "[Mentor Hub] Trở thành mentor",
)}`;

export const metadata = buildHubMetadata({
  title: "Mentor Hub — Mạng lưới mentor INNTECH",
  description:
    "MENTOR HUB — kết nối sinh viên với mentor đồng hành dự án: hồ sơ 5 mentor, quy trình mentoring 4 bước và form yêu cầu mentoring.",
});

export default function Page() {
  return (
    <main
      id="main"
      className={ui.hubPage}
      style={{ "--hub-accent": hub.accent } as CSSProperties}
    >
      <ScrollReveal />
      <HubHero
        hub={hub}
        lead="Kết nối sinh viên với giảng viên, chuyên gia và doanh nhân đồng hành dự án. Chỉ hiển thị thông tin có nguồn; trường thiếu được ghi “Đang cập nhật”."
        primaryCta={{ label: "Xem mentor", href: "#mentors" }}
        secondaryCta={{ label: "Gửi yêu cầu mentoring", href: "#yeu-cau" }}
        meta={["5 mentor", "4 bước quy trình", "mailto: inntechclub@gmail.com"]}
      />
      <SubNav items={hub.sections} />

      <section id="mentors" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Chuyên gia đồng hành"
            title="Mentor Profile"
            description="5 mentor đồng hành cùng các dự án EaAgri và DIA+ (theo THONGTIN §7.1, §7.3). Chỉ hiển thị dự án đồng hành và vai trò “Mentor dự án”; không hiển thị chức danh, công ty hay ảnh khi chưa có nguồn."
          />
          <div className={styles.mentorGrid} data-reveal-stagger>
            {mentors.map((mentor) => (
              <article key={mentor.id} className={styles.mentorCard}>
                <div className={styles.mentorHead}>
                  <span className={ui.avatar} aria-hidden="true">
                    {mentor.initials}
                  </span>
                  <div>
                    <h3 className={styles.mentorName}>
                      {mentor.title
                        ? `${mentor.title} ${mentor.name}`
                        : mentor.name}
                    </h3>
                    <p className={styles.mentorRole}>Mentor dự án</p>
                  </div>
                </div>
                <div className={styles.mentorBlock}>
                  <span className={styles.mentorLabel}>Lĩnh vực</span>
                  <div className={ui.chips}>
                    {mentor.areas.map((area) => (
                      <span key={area} className={ui.chip}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.mentorBlock}>
                  <span className={styles.mentorLabel}>Dự án đồng hành</span>
                  <div className={ui.chips}>
                    {mentor.projects.map((project) => (
                      <span key={project} className={ui.chip}>
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.mentorNote}>{mentor.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quy-trinh"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Cách hoạt động"
            title="Quy trình — 4 bước"
            description="Từ yêu cầu ban đầu tới kết nối mentor và theo dõi tiến độ."
          />
          <div className={styles.stepsWrap}>
            <div className={ui.steps} data-reveal-stagger>
              {mentoringSteps.map((step) => (
                <div key={step.number} className={ui.step}>
                  <span className={ui.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="yeu-cau" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Yêu cầu mentoring"
            title="Yêu cầu mentoring"
            description="Điền form để CLB nắm được nhu cầu của bạn. Email sẽ được soạn sẵn và mở trong ứng dụng mail; biểu mẫu không lưu dữ liệu."
          />
          <div className={styles.formWrap}>
            <RequestForm
              fields={mentorFields}
              to={siteEmail}
              subject="[Mentor Hub] Yêu cầu mentoring"
              successMessage="Đã tạo email yêu cầu mentoring. Nếu ứng dụng mail không mở, hãy gửi tới inntechclub@gmail.com."
              submitLabel="Mở email gửi yêu cầu"
              note="Biểu mẫu không lưu dữ liệu; email sẽ mở trong ứng dụng mail của bạn."
              aside={
                <div className={ui.asideCard}>
                  <h3 className={styles.asideTitle}>Quy trình phản hồi</h3>
                  <ol className={styles.asideList}>
                    <li>CLB nhận yêu cầu qua email và xác nhận qua địa chỉ email của bạn.</li>
                    <li>Phân loại theo chủ đề dự án và gán mentor phù hợp.</li>
                    <li>CLB kết nối bạn với mentor và thống nhất lịch làm việc.</li>
                    <li>Theo dõi tiến độ và hiệu quả mentoring.</li>
                  </ol>
                  <h3 className={styles.asideTitle}>Lưu ý</h3>
                  <ul className={styles.asideList}>
                    <li>
                      Hồ sơ mentor chỉ gồm tên, dự án đồng hành và vai trò
                      “Mentor dự án”; trường thiếu ghi “Đang cập nhật”.
                    </li>
                    <li>
                      Thông tin mentor chưa có nguồn không được hiển thị trên
                      trang.
                    </li>
                    <li>
                      Form không lưu dữ liệu; email được soạn sẵn và mở trong
                      ứng dụng mail của bạn.
                    </li>
                  </ul>
                  <a className={ui.cardAction} href={becomeMentorHref}>
                    Trở thành mentor
                    <ArrowUpRight />
                  </a>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["project-hub", "opportunity-hub", "about"]}
      />
    </main>
  );
}
