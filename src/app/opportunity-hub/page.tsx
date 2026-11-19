import type { CSSProperties } from "react";
import { ArrowUpRight } from "@/components/icons";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { getHub } from "@/data/hubs";
import {
  competitions,
  events,
  hackathons,
  jobs,
  scholarships,
} from "@/data/opportunity-hub";
import type { OpportunityItem } from "@/data/opportunity-hub";
import { buildHubMetadata } from "@/data/metadata";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("opportunity-hub")!;

const FANPAGE_URL = "https://www.facebook.com/inntechclub";

export const metadata = buildHubMetadata({
  title: "Opportunity Hub — Sự kiện, cuộc thi, học bổng và việc làm",
  description:
    "Sự kiện, cuộc thi, hackathon của INNTECH CLB; học bổng và việc làm cho sinh viên NTTU. Dữ liệu học bổng/việc làm đang ở giai đoạn demo, gắn nhãn Mẫu.",
});

function statusLabel(status: OpportunityItem["status"]): string {
  if (status === "past") return "Đã diễn ra";
  if (status === "upcoming") return "Sắp diễn ra";
  return "Mẫu";
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
        lead="Sự kiện, cuộc thi, hackathon của CLB; học bổng và việc làm (dữ liệu mẫu, theo dõi fanpage để nhận thông báo chính thức)."
        primaryCta={{ label: "Xem sự kiện", href: "#su-kien" }}
        secondaryCta={{
          label: "Theo dõi fanpage",
          href: FANPAGE_URL,
          external: true,
        }}
        meta={["Sự kiện", "Cuộc thi", "Hackathon"]}
      />
      <SubNav items={hub.sections} />

      <div className={styles.disclaimerWrap} role="note" aria-label="Lưu ý về dữ liệu">
        <div className={ui.container}>
          <div className={styles.disclaimer}>
            <svg
              className={styles.disclaimerIcon}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              <strong>Lưu ý: </strong>
              Dữ liệu học bổng/việc làm đang ở giai đoạn demo, gắn nhãn Mẫu. INNTECH
              chưa khẳng định thông tin tuyển học bổng hay tuyển dụng qua các mục này —
              theo dõi{" "}
              <a
                href={FANPAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.disclaimerLink}
              >
                fanpage INNTECH
              </a>{" "}
              để nhận thông báo chính thức.
            </p>
          </div>
        </div>
      </div>

      {/* 7.2 — Sự kiện */}
      <section id="su-kien" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Sự kiện CLB"
            title="Sự kiện — dấu mốc INNTECH"
            description="Các sự kiện thật của CLB đã tổ chức hoặc đồng hành cùng cộng đồng sinh viên NTTU."
          />
          <div className={styles.sectionBody}>
            <div className={ui.timeline} data-reveal-stagger>
              {events.map((event) => (
                <article key={event.id} className={ui.timelineItem}>
                  <div className={ui.timelineDate}>
                    {event.dateLabel ?? event.meta}
                  </div>
                  <div className={ui.timelineBody}>
                    <span className={ui.timelineTag}>
                      {statusLabel(event.status)}
                    </span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {event.result ? (
                      <p className={styles.timelineResult}>
                        <strong>Kết quả: </strong>
                        {event.result}
                      </p>
                    ) : null}
                    {event.chips ? (
                      <div className={`${ui.chips} ${styles.timelineChips}`}>
                        {event.chips.map((chip) => (
                          <span key={chip} className={ui.chip}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {event.href ? (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.textLink}
                      >
                        Xem trên fanpage
                        <ArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <p className={`${ui.note} ${styles.timelineNote}`}>
              Mốc thời gian lấy từ bài đăng chính thức trên fanpage INNTECH CLB; các mục
              có liên kết dẫn trực tiếp đến bài viết gốc.
            </p>
          </div>
        </div>
      </section>

      {/* 7.3 — Cuộc thi */}
      <section
        id="cuoc-thi"
        className={`${ui.section} ${ui.sectionAnchor} ${ui.sectionTint}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Cuộc thi"
            title="Cuộc thi — INNTECH đã đạt"
            description="Các cuộc thi CLB tham gia và kết quả của đội tuyển INNTECH."
          />
          <div className={styles.sectionBody}>
            <div className={ui.gridThree} data-reveal-stagger>
              {competitions.map((item) => (
                <article key={item.id} className={`${ui.card} ${styles.resultCard}`}>
                  <div className={ui.cardTop}>
                    <span className={ui.timelineTag}>{statusLabel(item.status)}</span>
                    {item.dateLabel ? (
                      <span className={styles.yearLabel}>{item.dateLabel}</span>
                    ) : null}
                  </div>
                  <h3 className={ui.cardTitle}>{item.title}</h3>
                  <p className={ui.cardDesc}>{item.description}</p>
                  {item.result ? (
                    <div className={styles.resultBox}>
                      <span className={styles.resultLabel}>Kết quả CLB</span>
                      <span className={styles.resultValue}>{item.result}</span>
                    </div>
                  ) : null}
                  {item.chips ? (
                    <div className={ui.chips}>
                      {item.chips.map((chip) => (
                        <span key={chip} className={ui.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ui.cardAction}
                    >
                      <span>Xem nguồn</span>
                      <ArrowUpRight />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7.4 — Hackathon */}
      <section id="hackathon" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Hackathon"
            title="Hackathon — sân chơi lập trình"
            description="Các hackathon INNTECH tham gia và vị trí tiếp theo đang được cập nhật."
          />
          <div className={styles.sectionBody}>
            <div className={styles.twoColGrid} data-reveal-stagger>
              {hackathons.map((item) => {
                const isSample = item.status === "sample" || item.sample === true;
                return (
                  <article key={item.id} className={`${ui.card} ${styles.resultCard}`}>
                    <div className={ui.cardTop}>
                      {isSample ? (
                        <span className={`${ui.badge} ${ui.badgeSample}`}>
                          {item.badge ?? "Mẫu"}
                        </span>
                      ) : (
                        <span className={ui.timelineTag}>
                          {statusLabel(item.status)}
                        </span>
                      )}
                      {item.dateLabel ? (
                        <span className={styles.yearLabel}>{item.dateLabel}</span>
                      ) : null}
                    </div>
                    <h3 className={ui.cardTitle}>{item.title}</h3>
                    <p className={ui.cardDesc}>{item.description}</p>
                    {item.result ? (
                      <div className={styles.resultBox}>
                        <span className={styles.resultLabel}>Kết quả CLB</span>
                        <span className={styles.resultValue}>{item.result}</span>
                      </div>
                    ) : null}
                    {item.chips ? (
                      <div className={ui.chips}>
                        {item.chips.map((chip) => (
                          <span key={chip} className={ui.chip}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <a
                      href={item.href ?? FANPAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ui.cardAction}
                    >
                      <span>
                        {item.href ? "Xem nguồn chính thức" : "Theo dõi fanpage"}
                      </span>
                      <ArrowUpRight />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 — Học bổng */}
      <section
        id="hoc-bong"
        className={`${ui.section} ${ui.sectionAnchor} ${ui.sectionTint}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Học bổng"
            title="Học bổng — theo dõi fanpage"
            description="Dữ liệu mẫu, không khẳng định thông tin tuyển học bổng thật. Theo dõi fanpage để nhận thông báo khi có chương trình chính thức."
          />
          <div className={styles.sectionBody}>
            <div className={styles.twoColGrid} data-reveal-stagger>
              {scholarships.map((item) => (
                <article
                  key={item.id}
                  className={`${ui.card} ${styles.sampleCard}`}
                >
                  <div className={ui.cardTop}>
                    <span className={`${ui.badge} ${ui.badgeSample}`}>
                      {item.badge ?? "Mẫu"}
                    </span>
                  </div>
                  <h3 className={ui.cardTitle}>{item.title}</h3>
                  <p className={ui.cardDesc}>{item.description}</p>
                  {item.meta ? <div className={ui.cardMeta}>{item.meta}</div> : null}
                  {item.chips ? (
                    <div className={ui.chips}>
                      {item.chips.map((chip) => (
                        <span key={chip} className={ui.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <a
                    href={item.href ?? FANPAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ui.cardAction}
                  >
                    <span>Theo dõi fanpage để nhận thông báo</span>
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
            <a
              href={FANPAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fanpageCta}
            >
              Theo dõi fanpage INNTECH
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* 7.6 — Jobs */}
      <section id="jobs" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Việc làm"
            title="Jobs — theo dõi fanpage"
            description="Dữ liệu mẫu, không dùng tên công ty thật cho tuyển dụng mẫu. Theo dõi fanpage để nhận thông báo khi có vị trí chính thức."
          />
          <div className={styles.sectionBody}>
            <div className={styles.twoColGrid} data-reveal-stagger>
              {jobs.map((item) => (
                <article
                  key={item.id}
                  className={`${ui.card} ${styles.sampleCard}`}
                >
                  <div className={ui.cardTop}>
                    <span className={`${ui.badge} ${ui.badgeSample}`}>
                      {item.badge ?? "Mẫu"}
                    </span>
                  </div>
                  <h3 className={ui.cardTitle}>{item.title}</h3>
                  <p className={ui.cardDesc}>{item.description}</p>
                  {item.meta ? <div className={ui.cardMeta}>{item.meta}</div> : null}
                  {item.chips ? (
                    <div className={ui.chips}>
                      {item.chips.map((chip) => (
                        <span key={chip} className={ui.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <a
                    href={item.href ?? FANPAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ui.cardAction}
                  >
                    <span>Theo dõi fanpage để nhận thông báo</span>
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
            <p className={`${ui.note} ${styles.sampleNote}`}>
              Các vị trí trên là dữ liệu mẫu; tên công ty thật sẽ chỉ xuất hiện khi CLB
              đăng tuyển chính thức trên fanpage.
            </p>
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["project-hub", "mentor-hub", "community"]}
      />
    </main>
  );
}
