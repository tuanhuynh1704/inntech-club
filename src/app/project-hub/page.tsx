import type { CSSProperties } from "react";

import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { ArrowUpRight } from "@/components/icons";
import { awards, openRoles, projects, teams } from "@/data/project-hub";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import { siteEmail } from "@/data/site";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("project-hub")!;

const roleApplyHref = `mailto:${siteEmail}?subject=${encodeURIComponent(
  "[Project Hub] Đăng ký tìm cộng sự",
)}`;

export const metadata = buildHubMetadata({
  title: "Project Hub — Không gian dự án INNTECH",
  description:
    "PROJECT HUB — 7 dự án hệ sinh thái INNTECH, hồ sơ đội ngũ, thành tích 2026 và bảng tìm cộng sự (mẫu).",
});

function teamMonogram(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const first = words[0] ? words[0].charAt(0) : "";
    const second = words[1] ? words[1].charAt(0) : "";
    return (first + second).toUpperCase();
  }
  return name
    .replace(/[^A-Za-zÀ-ỹ]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

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
        lead="7 dự án được CLB hỗ trợ, hơn 2.100 giờ mentoring và 35 triệu đồng hỗ trợ (dữ liệu theo hồ sơ I-Star 2026)."
        primaryCta={{ label: "Xem 7 dự án", href: "#du-an" }}
        secondaryCta={{ label: "Tìm cộng sự", href: "#cong-su" }}
        meta={["7 dự án", "2.100 giờ mentoring", "35 triệu đồng"]}
      />
      <SubNav items={hub.sections} />

      <section id="du-an" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Hệ sinh thái dự án"
            title="Dự án — 7 dự án INNTECH hỗ trợ"
            description="Các dự án trong hệ sinh thái CLB, theo hồ sơ dự án THONGTIN (§7) và MOTA (dấu ấn nổi bật). Nhu cầu cộng sự là thông tin mẫu, đang được cập nhật."
          />
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article
                key={project.id}
                className={styles.projectCard}
                data-reveal
              >
                <div
                  className={styles.projectArt}
                  style={{ background: project.gradient }}
                >
                  <div className={styles.projectArtTop}>
                    <span className={styles.artTag}>{project.tag}</span>
                    <span className={styles.artBadge}>
                      {project.kind === "award" ? "Đạt giải" : "Đồng hành"}
                    </span>
                  </div>
                  <span className={styles.projectMonogram} aria-hidden="true">
                    {project.monogram}
                  </span>
                </div>
                <div className={styles.projectBody}>
                  <div>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectField}>{project.field}</p>
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectAward}>
                    <span className={ui.timelineTag}>{project.awardLabel}</span>
                    {project.award !== project.awardLabel ? (
                      <p className={styles.projectAwardDetail}>
                        {project.award}
                      </p>
                    ) : null}
                  </div>
                  <div className={styles.projectMeta}>
                    {project.team && project.team.length > 0 ? (
                      <div className={styles.projectMetaBlock}>
                        <span className={styles.projectMetaLabel}>Đội ngũ</span>
                        <ul className={styles.memberList}>
                          {project.team.map((member) => (
                            <li key={member}>{member}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {project.needs && project.needs.length > 0 ? (
                      <div className={styles.projectMetaBlock}>
                        <span className={styles.projectMetaLabel}>
                          Cần cộng sự (mẫu)
                        </span>
                        <div className={ui.chips}>
                          {project.needs.map((need) =>
                            need === "Đang cập nhật" ? (
                              <span key={need} className={styles.chipMuted}>
                                {need}
                              </span>
                            ) : (
                              <span key={need} className={ui.chip}>
                                {need}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="doi-ngu"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Đội ngũ dự án"
            title="Team Profile"
            description="Hồ sơ công khai của các đội dự án, theo THONGTIN §7. Thành viên chưa được công khai được ghi “Đang cập nhật”."
          />
          <div className={styles.teamGrid}>
            {teams.map((team) => (
              <article key={team.id} className={styles.teamCard} data-reveal>
                <div className={styles.teamHead}>
                  <span className={ui.avatar} aria-hidden="true">
                    {teamMonogram(team.project)}
                  </span>
                  <div>
                    <h3 className={styles.teamName}>{team.name}</h3>
                    <p className={styles.teamProject}>Dự án: {team.project}</p>
                  </div>
                </div>
                {team.members.length > 0 ? (
                  <ul className={styles.memberList}>
                    {team.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                ) : (
                  <span className={`${ui.badge} ${ui.badgeUpdating}`}>
                    Đang cập nhật
                  </span>
                )}
                {team.note ? <p className={ui.note}>{team.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="thanh-tich" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Giải thưởng"
            title="Thành tích — bảng giải thưởng 2026"
            description="Theo THONGTIN §8 và MOTA §Dấu ấn nổi bật."
          />
          <div className={styles.timelineWrap}>
            <div className={ui.timeline}>
              {awards.map((award) => (
                <div key={award.id} className={ui.timelineItem}>
                  <span className={ui.timelineDate}>{award.year}</span>
                  <div className={ui.timelineBody}>
                    <span className={ui.timelineTag}>{award.project}</span>
                    <h3>{award.title}</h3>
                    <p>{award.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="cong-su"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Cần cộng sự"
            title="Tìm cộng sự — vị trí mở (mẫu)"
            description="Board vị trí đang mở trong hệ sinh thái INNTECH. Gửi email tới CLB để đăng ký — dữ liệu vị trí là mẫu."
          />
          <div className={styles.roleGrid}>
            {openRoles.map((role) => (
              <article key={role.id} className={ui.card} data-reveal>
                <div className={ui.cardTop}>
                  <span className={styles.roleCategory}>{role.category}</span>
                  <span className={`${ui.badge} ${ui.badgeSample}`}>
                    {role.badge ?? "Mẫu"}
                  </span>
                </div>
                <h3 className={ui.cardTitle}>{role.title}</h3>
                <p className={ui.cardDesc}>{role.description}</p>
                {role.chips && role.chips.length > 0 ? (
                  <div className={ui.chips}>
                    {role.chips.map((chip) => (
                      <span key={chip} className={ui.chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
                {role.meta ? (
                  <div className={ui.cardMeta}>
                    <span>{role.meta}</span>
                  </div>
                ) : null}
                <a className={ui.cardAction} href={roleApplyHref}>
                  Đăng ký tìm cộng sự
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
          <p className={`${ui.note} ${styles.blockNote}`}>
            Dữ liệu vị trí đang mở là mẫu, chưa phải thông tin tuyển chính
            thức. Nội dung này đang ở giai đoạn demo giao diện và đang được
            cập nhật. Email gửi tới {siteEmail}.
          </p>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["mentor-hub", "opportunity-hub", "community"]}
      />
    </main>
  );
}
