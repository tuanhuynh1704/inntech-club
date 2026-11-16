import type { CSSProperties } from "react";
import { ArrowUpRight } from "@/components/icons";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import FilterGrid from "@/components/hub/filter-grid";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import {
  achievements,
  challenges,
  departments,
  leaders,
  recruitmentSteps,
} from "@/data/community";
import { facebookUrl, siteEmail } from "@/data/site";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("community")!;

export const metadata = buildHubMetadata({
  title: "Community — Cộng đồng thành viên INNTECH",
  description:
    "Ban chủ nhiệm, 6 ban chuyên môn, hơn 50 thành viên đầu tiên, challenge, thành tích và thông tin tuyển thành viên INNTECH.",
});

const stats: { value: string; label: string }[] = [
  { value: "N4015", label: "I-Star 2026" },
  { value: "7", label: "Dự án hệ sinh thái" },
  { value: "2.100", label: "Giờ mentoring" },
  { value: "500+", label: "Lượt người tham dự" },
];

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
        lead="4 lãnh đạo + 6 ban chuyên môn, hơn 50 thành viên đầu tiên (khuôn khổ GALA NJEC 2025). Tham gia CLB qua fanpage."
        primaryCta={{ label: "Xem thành viên", href: "#thanh-vien" }}
        secondaryCta={{
          label: "Tham gia CLB",
          href: facebookUrl,
          external: true,
        }}
        meta={["50+ thành viên đầu tiên", "4 lãnh đạo", "6 ban"]}
      />
      <SubNav items={hub.sections} />

      <section
        id="thanh-vien"
        className={`${ui.section} ${ui.sectionAnchor}`}
        aria-label="Thành viên"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Ban lãnh đạo"
            title="Thành viên — ban chủ nhiệm và 6 ban"
            description="Ban chủ nhiệm nhiệm kỳ 2025–2026 và 6 ban chuyên môn đồng hành cùng các dự án của CLB."
          />

          <div className={styles.leaderGrid} data-reveal>
            {leaders.map((leader) => (
              <article key={leader.name} className={ui.profileCard}>
                <span className={ui.avatar} aria-hidden="true">
                  {leader.initial}
                </span>
                <div className={styles.profileBody}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <p className={styles.leaderNote}>{leader.note}</p>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.membersNote}>
            <strong>Hơn 50 thành viên đầu tiên</strong> — khuôn khổ GALA NJEC
            2025 (16/11/2025). Nguồn: THONGTIN §2, §6.1; MOTA §Thông tin nhanh.
          </p>

          <div className={styles.departmentGrid} data-reveal>
            {departments.map((department) => (
              <article key={department.number} className={styles.departmentCard}>
                <span className={styles.departmentNumber}>
                  {department.number}
                </span>
                <h3 className={styles.departmentName}>{department.name}</h3>
                <p className={styles.departmentText}>{department.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.activityPanel} data-reveal>
            <span className={styles.activityEyebrow}>
              Hoạt động cộng đồng
            </span>
            <h3 className={styles.activityTitle}>
              Trung thu Sáng tạo 2026
            </h3>
            <p className={styles.activityLead}>
              Chương trình thân thiện, thể hiện giá trị Humanity của INNTECH.
            </p>
            <div className={styles.activityRows}>
              <div className={styles.activityRow}>
                <div>
                  <h4 className={styles.activityPlace}>Mỹ Yên, Tây Ninh</h4>
                  <p className={styles.activityLine}>
                    Trung thu Sáng tạo 2026
                  </p>
                </div>
                <div className={styles.activityStats}>
                  <span>
                    <strong>35</strong> học sinh
                  </span>
                  <span>
                    <strong>800</strong> phần quà
                  </span>
                </div>
              </div>
              <div className={styles.activityRow}>
                <div>
                  <h4 className={styles.activityPlace}>
                    Song Phú, Vĩnh Long
                  </h4>
                  <p className={styles.activityLine}>
                    Trung thu Sáng tạo 2026
                  </p>
                </div>
                <div className={styles.activityStats}>
                  <span>
                    <strong>20</strong> phần quà
                  </span>
                </div>
              </div>
            </div>
            <p className={styles.activitySource}>
              Nguồn: THONGTIN §6.7, §10.
            </p>
          </div>
        </div>
      </section>

      <section
        id="challenge"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
        aria-label="Challenge"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Thử thách cộng đồng"
            title="Challenge — thử thách mẫu (gắn nhãn “Mẫu”)"
            description="Tham gia thử thách cùng cộng đồng — hình thức dự kiến, chưa phải chương trình chính thức của CLB."
          />
          <p className={ui.callout} role="note">
            Các thử thách dưới đây là dữ liệu mẫu để minh hoạ cách thức tham
            gia; chưa phải chương trình đã triển khai.
          </p>
          <FilterGrid
            items={challenges}
            columns={3}
            searchable={false}
            placeholder="Tìm thử thách..."
            emptyLabel="Không tìm thấy thử thách phù hợp."
          />
        </div>
      </section>

      <section
        id="thanh-tich"
        className={`${ui.section} ${ui.sectionAnchor}`}
        aria-label="Thành tích"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Giải thưởng & công bố"
            title="Thành tích — giải thưởng và công bố khoa học"
            description="Giải thưởng và công bố khoa học của thành viên CLB trong năm 2026."
          />

          <div className={ui.statStrip} data-reveal>
            {stats.map((stat) => (
              <div key={stat.label} className={ui.stat}>
                <span className={ui.statValue}>{stat.value}</span>
                <span className={ui.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <ol className={`${ui.timeline} ${styles.plainList}`} data-reveal>
            {achievements.map((item) => (
              <li key={item.id} className={ui.timelineItem}>
                <span className={ui.timelineDate}>{item.year}</span>
                <div className={ui.timelineBody}>
                  <span className={ui.timelineTag}>Thực tế</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="tuyen-thanh-vien"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
        aria-label="Tuyển thành viên"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Tuyển thành viên"
            title="Tuyển thành viên — quy trình 2 vòng"
            description="Năm 2026 tuyển trong hai vòng: nộp hồ sơ trực tuyến và phỏng vấn."
          />

          <div className={styles.stepsGrid} data-reveal>
            {recruitmentSteps.map((step) => (
              <div key={step.number} className={ui.step}>
                <span className={ui.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {step.dateLabel ? (
                  <span className={styles.dateChip}>{step.dateLabel}</span>
                ) : null}
              </div>
            ))}
          </div>

          <p className={ui.callout} role="note">
            Mùa tuyển 2026 đã qua; mùa tiếp theo công bố trên fanpage.
          </p>

          <div className={styles.ctaRow}>
            <a
              className={ui.buttonPrimary}
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Theo dõi fanpage
              <span className={ui.buttonIcon}>
                <ArrowUpRight />
              </span>
            </a>
            <a
              className={`${ui.buttonGhost} ${styles.emailCta}`}
              href={`mailto:${siteEmail}`}
            >
              {siteEmail}
            </a>
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId="community"
        ids={["project-hub", "mentor-hub", "business-connect"]}
        title="Khám phá tiếp"
        description="Cộng đồng là nơi mọi dự án của INNTECH bắt đầu."
      />
    </main>
  );
}
