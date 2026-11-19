import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import FilterGrid from "@/components/hub/filter-grid";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { getHub } from "@/data/hubs";
import {
  documents,
  learningPaths,
  skillGroups,
  slides,
  videos,
} from "@/data/learning-hub";
import { buildHubMetadata } from "@/data/metadata";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("learning-hub")!;

export const metadata = buildHubMetadata({
  title: "Learning Hub — Kho học liệu và lộ trình",
  description:
    "Kho học liệu trực tuyến, slide workshop, kênh video, 6 nhóm kỹ năng và 4 lộ trình học cho sinh viên INNTECH CLB — từ MDN, freeCodeCamp, roadmap.sh, Google AI, Coursera, Figma Learn, Harvard CS50.",
});

function hostnameOf(url?: string): string {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
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
        lead="Học liệu, slide, video, nhóm kỹ năng và lộ trình học từ MDN, freeCodeCamp, roadmap.sh, Google AI, Coursera, Figma Learn, Harvard CS50 và nhiều nguồn khác."
        primaryCta={{ label: "Bắt đầu tài liệu", href: "#tai-lieu" }}
        secondaryCta={{ label: "Xem lộ trình", href: "#lo-trinh" }}
        meta={["10 tài liệu", "8 kênh video", "4 lộ trình học"]}
      />
      <SubNav items={hub.sections} />

      {/* 6.2 — Tài liệu */}
      <section id="tai-lieu" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Tài liệu học tập"
            title="Tài liệu — học liệu trực tuyến"
            description="Học liệu trực tuyến từ các nguồn chính thức. Mỗi item có chủ đề, loại, cấp độ, thời lượng ước tính và nguồn."
          />
          <div className={styles.sectionBody}>
            <FilterGrid
              items={documents}
              columns={3}
              searchable
              placeholder="Tìm tài liệu, chủ đề..."
            />
            <Link href="/kho-tai-lieu" className={styles.pathCta}>
              Mở kho tài liệu trên Google Drive
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 6.3 — Slide */}
      <section
        id="slide"
        className={`${ui.section} ${ui.sectionAnchor} ${ui.sectionTint}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Bản trình bày"
            title="Slide — workshop của CLB và mẫu slide"
            description="Các slide workshop đã được tổ chức và mẫu slide trình bày. File chưa được chuẩn hóa sẽ ghi «Sắp cập nhật» thay vì tạo liên kết file giả."
          />
          <div className={styles.sectionBody}>
            <div className={styles.slideGrid} data-reveal-stagger>
              {slides.map((slide) => (
                <article key={slide.id} className={`${ui.card} ${styles.slideCard}`}>
                  {slide.badge ? (
                    <div className={ui.cardTop}>
                      <span
                        className={`${ui.badge} ${
                          slide.badge === "Mẫu" ? ui.badgeSample : ui.badgeUpdating
                        }`}
                      >
                        {slide.badge}
                      </span>
                    </div>
                  ) : null}
                  <h3 className={ui.cardTitle}>{slide.title}</h3>
                  <p className={ui.cardDesc}>{slide.description}</p>
                  {slide.chips ? (
                    <div className={ui.chips}>
                      {slide.chips.map((chip) => (
                        <span key={chip} className={ui.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {slide.meta ? <div className={ui.cardMeta}>{slide.meta}</div> : null}
                  {slide.href ? (
                    <a
                      href={slide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ui.cardAction}
                    >
                      <span>Mở thư viện mẫu</span>
                      <ArrowUpRight />
                    </a>
                  ) : (
                    <p className={ui.note}>File slide đang được chuẩn hóa, chưa có liên kết tải về.</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 — Video */}
      <section id="video" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Video học tập"
            title="Video — kênh và playlist học trực tuyến"
            description="Kênh YouTube chính thức để học lập trình, thiết kế và khoa học dữ liệu. Thẻ hiển thị ảnh gradient + biểu tượng phát, không nhúng iframe để tránh chậm trang."
          />
          <div className={styles.sectionBody}>
            <div className={styles.videoGrid} data-reveal-stagger>
              {videos.map((video) => (
                <article key={video.id} className={styles.videoCard}>
                  <div className={styles.videoArt} aria-hidden="true">
                    <span className={styles.videoTopic}>{video.category}</span>
                    <span className={styles.playButton}>
                      <span className={styles.playGlyph} />
                    </span>
                  </div>
                  <div className={styles.videoBody}>
                    <h3 className={ui.cardTitle}>{video.title}</h3>
                    <p className={ui.cardDesc}>{video.description}</p>
                    <div className={styles.videoFoot}>
                      <span className={styles.videoSource}>
                        {hostnameOf(video.href) || video.meta}
                      </span>
                      {video.href ? (
                        <a
                          href={video.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.videoLink}
                        >
                          Mở kênh
                          <ArrowUpRight />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 — Skills */}
      <section
        id="skills"
        className={`${ui.section} ${ui.sectionAnchor} ${ui.sectionTint}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Nhóm kỹ năng"
            title="Skills — 6 nhóm kỹ năng, mỗi nhóm 3 bước"
            description="Sáu nhóm kỹ năng cốt lõi, mỗi nhóm đi theo 3 bước từ nhập môn đến thực hành."
          />
          <div className={styles.sectionBody}>
            <div className={ui.gridThree} data-reveal-stagger>
              {skillGroups.map((group) => (
                <article key={group.id} className={ui.card}>
                  <h3 className={ui.cardTitle}>{group.title}</h3>
                  <p className={ui.cardDesc}>{group.description}</p>
                  <ol className={styles.skillSteps}>
                    {group.steps.map((step, index) => (
                      <li key={step} className={styles.skillStep}>
                        <span className={ui.stepNumber}>{index + 1}</span>
                        <span className={styles.skillStepText}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 — Learning Paths */}
      <section id="lo-trinh" className={`${ui.section} ${ui.sectionAnchor}`}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Lộ trình học"
            title="Learning Paths — 4 lộ trình chính"
            description="Mỗi lộ trình gồm 4–5 chặng, đi từ nền tảng đến một dự án hoàn chỉnh. Thời lượng là ước tính, có thể điều chỉnh theo nhịp học của bạn."
          />
          <div className={styles.sectionBody}>
            <div className={styles.pathGrid} data-reveal-stagger>
              {learningPaths.map((path) => (
                <article key={path.id} className={`${ui.card} ${styles.pathCard}`}>
                  <div className={styles.pathHead}>
                    <h3 className={ui.cardTitle}>{path.title}</h3>
                    <span className={styles.pathDuration}>{path.duration}</span>
                  </div>
                  <p className={ui.cardDesc}>{path.description}</p>
                  <ol className={styles.pathStages}>
                    {path.stages.map((stage, index) => (
                      <li key={stage.title} className={styles.pathStage}>
                        <span className={styles.pathStageNo}>{index + 1}</span>
                        <span className={styles.pathStageBody}>
                          <strong>{stage.title}</strong>
                          <span>{stage.description}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className={styles.pathOutcome}>
                    <strong>Đầu ra: </strong>
                    {path.outcome}
                  </p>
                </article>
              ))}
            </div>
            <a href="#tai-lieu" className={styles.pathCta}>
              Bắt đầu với tài liệu
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["student-hub", "opportunity-hub", "project-hub"]}
      />
    </main>
  );
}
