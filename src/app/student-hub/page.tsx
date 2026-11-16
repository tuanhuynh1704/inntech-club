import type { CSSProperties } from "react";
import Link from "next/link";

import CrossHubCta from "@/components/hub/cross-hub-cta";
import FilterGrid from "@/components/hub/filter-grid";
import HubHero from "@/components/hub/hub-hero";
import PromptCard from "@/components/hub/prompt-card";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowUpRight, Check } from "@/components/icons";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import type { FilterItem } from "@/data/types";
import {
  aiTools,
  cvChecklist,
  cvTemplates,
  prompts,
  studyTools,
  templates,
} from "@/data/student-hub";

import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("student-hub")!;

export const metadata = buildHubMetadata({
  title: "Student Hub — Bộ công cụ cho sinh viên",
  description:
    "AI tools, study tools, mẫu CV, thư viện prompt và template dành cho sinh viên NTTU.",
});

function badgeClass(badge: string): string {
  return badge === "Mẫu" ? ui.badgeSample : ui.badgeUpdating;
}

function ExternalCard({
  item,
  cardClass,
  actionLabel,
}: {
  item: FilterItem;
  cardClass: string;
  actionLabel: string;
}) {
  const href = item.href;
  const isExternal = href ? /^https?:\/\//i.test(href) : false;

  return (
    <article className={`${ui.card} ${cardClass}`}>
      {item.badge ? (
        <div className={ui.cardTop}>
          <span className={`${ui.badge} ${badgeClass(item.badge)}`}>
            {item.badge}
          </span>
        </div>
      ) : null}
      <h3 className={ui.cardTitle}>{item.title}</h3>
      <p className={ui.cardDesc}>{item.description}</p>
      {item.meta ? <span className={ui.cardMeta}>{item.meta}</span> : null}
      {item.chips && item.chips.length > 0 ? (
        <div className={ui.chips}>
          {item.chips.map((chip) => (
            <span key={chip} className={ui.chip}>
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      {href ? (
        isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={ui.cardAction}
          >
            <span>{actionLabel}</span>
            <ArrowUpRight />
          </a>
        ) : (
          <Link href={href} className={ui.cardAction}>
            <span>{actionLabel}</span>
            <ArrowUpRight />
          </Link>
        )
      ) : null}
    </article>
  );
}

export default function StudentHubPage() {
  return (
    <main
      id="main"
      className={ui.hubPage}
      style={{ "--hub-accent": hub.accent } as CSSProperties}
    >
      <ScrollReveal />
      <HubHero
        hub={hub}
        lead="Tập hợp công cụ AI, công cụ học tập, mẫu CV, thư viện prompt và template để sinh viên NTTU học tập và làm dự án hiệu quả hơn."
        primaryCta={{ label: "Xem tất cả công cụ", href: "#ai-tools" }}
        secondaryCta={{ label: "Xem mẫu CV", href: "#cv" }}
        meta={["10 AI Tools", "8 Study Tools", "10 Prompt"]}
      />
      <SubNav items={hub.sections} />

      <section id="ai-tools" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Trí tuệ nhân tạo"
            title="AI Tools — hỗ trợ học tập và sáng tạo"
            description="Các công cụ AI phổ biến, dùng thử ngay trên trang chủ của nhà phát triển. Mức giá chỉ mang tính tham khảo (Free / Freemium / Trả phí); xem chi tiết tại trang liên kết."
          />
          <FilterGrid
            items={aiTools}
            columns={3}
            searchable
            placeholder="Tìm công cụ AI..."
          />
        </div>
      </section>

      <section
        id="study-tools"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Công cụ học tập"
            title="Study Tools — quản lý kiến thức và công việc"
            description="Các công cụ ghi chú, quản lý dự án, nghiên cứu và thiết kế hỗ trợ việc học hàng ngày."
          />
          <FilterGrid items={studyTools} columns={4} searchable={false} />
        </div>
      </section>

      <section id="cv" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Hồ sơ ứng tuyển"
            title="CV — checklist và mẫu hồ sơ"
            description="Danh sách kiểm tra trước khi gửi CV và liên kết tới thư viện mẫu bên ngoài."
          />
          <div className={ui.split}>
            <div className={ui.panel}>
              <h3 className={ui.cardTitle}>Checklist trước khi gửi CV</h3>
              <ul className={styles.checklist}>
                {cvChecklist.map((item) => (
                  <li key={item}>
                    <Check className={styles.checklistIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={ui.stack}>
              {cvTemplates.map((item) => (
                <ExternalCard
                  key={item.id}
                  item={item}
                  cardClass={styles.cvCard}
                  actionLabel="Mở mẫu"
                />
              ))}
              <p className={ui.note}>Hãy cá nhân hóa mẫu trước khi dùng.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prompt"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Thư viện lệnh"
            title="Prompt Library — sao chép và dùng ngay"
            description="Prompt mẫu chia theo nhóm: Học tập, Viết, Code, Nghiên cứu và CV."
          />
          <div className={styles.promptGrid}>
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
          <p className={ui.note} style={{ marginTop: 18 }}>
            Nhấn Sao chép rồi dán vào công cụ AI bạn dùng.
          </p>
        </div>
      </section>

      <section id="templates" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Mẫu bản thiết kế"
            title="Templates — slide, báo cáo, project brief"
            description="Mẫu slide trình bày, báo cáo và brief dự án. Nếu chưa có file chính thức, thẻ sẽ ghi “Sắp cập nhật” thay vì liên kết giả."
          />
          <div className={ui.gridThree}>
            {templates.map((item) => (
              <ExternalCard
                key={item.id}
                item={item}
                cardClass={styles.templateCard}
                actionLabel="Mở mẫu"
              />
            ))}
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["learning-hub", "project-hub", "opportunity-hub"]}
      />
    </main>
  );
}
