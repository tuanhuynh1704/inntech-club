import type { CSSProperties } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import { facebookUrl, siteAddress, siteEmail, sitePhone } from "@/data/site";
import {
  aboutStats,
  publications,
  timeline,
  values,
} from "@/data/about";
import { departments, leaders } from "@/data/community";
import { partnerGroups } from "@/data/business-connect";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("about")!;

export const metadata = buildHubMetadata({
  title: "About INNTECH — Giới thiệu câu lạc bộ",
  description:
    "INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất Thành, hoạt động dưới sự quản lý của NIIC và NIIE, từ 2025.",
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
        lead="INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất Thành, hoạt động dưới sự quản lý của NIIC và NIIE, từ 2025."
        primaryCta={{
          label: "Tham gia CLB",
          href: facebookUrl,
          external: true,
        }}
        secondaryCta={{ label: "Gửi email", href: `mailto:${siteEmail}` }}
        meta={["NIIC × NIIE", "EST. 2025", "I-Star 2026 N4015"]}
      />
      <SubNav items={hub.sections} />

      <section
        id="gioi-thieu"
        aria-label="Giới thiệu"
        className={`${ui.section} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Về CLB"
            title="Giới thiệu — sứ mệnh, tầm nhìn, lịch sử"
            description="Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất Thành, hoạt động dưới sự quản lý của NIIC và NIIE từ năm 2025."
          />
          <div className={styles.introProse} data-reveal>
            <p>
              INNTECH CLUB là câu lạc bộ Công nghệ và Sáng tạo của Trường Đại
              học Nguyễn Tất Thành (NTTU), hoạt động dưới sự quản lý của NIIC
              và NIIE, ra đời từ năm 2025. CLB hướng tới việc xây dựng một cộng
              đồng đổi mới sáng tạo sinh viên, nơi công nghệ được ứng dụng vào
              học tập, nghiên cứu và các sản phẩm thực tiễn.
            </p>
            <p>
              Thành lập theo fanpage ngày 15/10/2025; Quyết định thành lập số
              2583/QĐ-NTT ban hành ngày 28/10/2025; Lễ ra mắt diễn ra ngày
              16/11/2025 tại GALA NJEC 2025.
            </p>
          </div>

          <div className={styles.missionVision} data-reveal-stagger>
            <article className={styles.mvCard}>
              <span className={styles.mvLabel}>Sứ mệnh</span>
              <p className={styles.mvText}>
                Tạo môi trường học tập, trải nghiệm và phát triển dành cho sinh
                viên NTTU thông qua công nghệ và đổi mới sáng tạo; kết nối sinh
                viên với chuyên gia, doanh nghiệp, nhà đầu tư và các nguồn lực
                trong hệ sinh thái khởi nghiệp; đồng hành để các ý tưởng, dự án
                của sinh viên có cơ hội được nuôi dưỡng, kiểm chứng và phát
                triển thành sản phẩm có giá trị.
              </p>
            </article>
            <article className={styles.mvCard}>
              <span className={styles.mvLabel}>Tầm nhìn</span>
              <p className={styles.mvText}>
                Trở thành cộng đồng đổi mới sáng tạo sinh viên tiêu biểu của
                Trường Đại học Nguyễn Tất Thành và khu vực phía Nam; là cầu nối
                hiệu quả giữa nhà trường, doanh nghiệp và hệ sinh thái khởi
                nghiệp; góp phần hình thành thế hệ sinh viên có năng lực công
                nghệ, tư duy khởi nghiệp và trách nhiệm xã hội.
              </p>
            </article>
          </div>

          <dl className={styles.stats} data-reveal-stagger>
            {aboutStats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
                <dd className={styles.statNote}>{stat.note}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.timelineBlock}>
            <h3 className={styles.timelineHeading}>Mốc thời gian</h3>
            <ol className={styles.timeline} data-reveal-stagger>
              {timeline.map((item) => (
                <li key={`${item.date}-${item.title}`} className={styles.timelineItem}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <div className={styles.timelineBody}>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="gia-tri"
        aria-label="Giá trị I-N-N-T-E-C-H"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Giá trị cốt lõi"
            title="Giá trị I-N-N-T-E-C-H"
            description="7 chữ cái định hình văn hóa và cách INNTECH hoạt động."
          />
          <ul className={styles.valuesGrid} data-reveal-stagger>
            {values.map((value) => (
              <li
                key={`${value.letter}-${value.name}`}
                className={styles.valueCard}
                data-tone={value.tone}
              >
                <span className={styles.valueLetter} aria-hidden="true">
                  {value.letter}
                </span>
                <h3 className={styles.valueName}>
                  {value.name}
                  <span className={styles.valueVi}>{value.vi}</span>
                </h3>
                <p className={styles.valueText}>{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="to-chuc"
        aria-label="Tổ chức"
        className={`${ui.section} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Ban chủ nhiệm & 6 ban"
            title="Tổ chức — ban chủ nhiệm 2025–2026 và các ban"
            description="Ban Chủ nhiệm nhiệm kỳ 2025–2026 và 6 ban chuyên môn phụ trách các mảng hoạt động của CLB."
          />
          <ul className={styles.leaderGrid} data-reveal-stagger>
            {leaders.map((leader) => (
              <li key={leader.name} className={styles.leaderCard}>
                <span className={styles.avatar} aria-hidden="true">
                  {leader.initial}
                </span>
                <div className={styles.leaderBody}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <p className={styles.leaderNote}>{leader.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className={styles.deptHeading}>6 ban chuyên môn</h3>
          <ul className={styles.deptGrid} data-reveal-stagger>
            {departments.map((department) => (
              <li key={department.number} className={styles.deptCard}>
                <span className={styles.deptNumber} aria-hidden="true">
                  {department.number}
                </span>
                <h4 className={styles.deptName}>{department.name}</h4>
                <p className={styles.deptText}>{department.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="doi-tac"
        aria-label="Đối tác"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Mạng lưới đối tác"
            title="Đối tác — doanh nghiệp và trường đại học"
            description="Danh sách thật theo hồ sơ I-Star 2026, phân nhóm. CLB không sử dụng logo giả."
          />
          <div className={styles.partnerGrid} data-reveal-stagger>
            {partnerGroups.map((group) => (
              <article key={group.id} className={`${ui.card} ${styles.partnerCard}`}>
                <div className={styles.partnerHead}>
                  <h3 className={ui.cardTitle}>{group.title}</h3>
                  <span className={styles.countBadge}>{group.items.length}</span>
                </div>
                <p className={ui.cardDesc}>{group.description}</p>
                <ul className={`${ui.chips} ${styles.pillList}`} aria-label={group.title}>
                  {group.items.map((item) => (
                    <li key={item} className={ui.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="lien-he"
        aria-label="Liên hệ"
        className={`${ui.section} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Liên hệ"
            title="Liên hệ — thông tin CLB"
            description="Mọi thông tin chính thức của INNTECH CLUB đều được cập nhật trên fanpage Facebook."
          />
          <div className={styles.contactGrid} data-reveal-stagger>
            <article className={styles.contactCard}>
              <span className={styles.istarBadge}>I-Star 2026 · Mã số N4015</span>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Địa chỉ</span>
                  <span className={styles.contactValue}>{siteAddress}</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Hotline</span>
                  <a
                    className={styles.contactLink}
                    href={`tel:${sitePhone.replace(/\s/g, "")}`}
                  >
                    {sitePhone}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a className={styles.contactLink} href={`mailto:${siteEmail}`}>
                    {siteEmail}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Chủ nhiệm</span>
                  <span className={styles.contactValue}>
                    Nguyễn Lâm Chí Hải —{" "}
                    <a
                      className={styles.contactLink}
                      href="mailto:nlchai@ntt.edu.vn"
                    >
                      nlchai@ntt.edu.vn
                    </a>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Fanpage</span>
                  <a
                    className={styles.contactLink}
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/inntechclub
                  </a>
                </li>
              </ul>
              <a
                className={styles.fanpageCta}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Theo dõi fanpage INNTECH CLUB
              </a>
            </article>

            <div className={styles.sideStack}>
              <article className={styles.pubCard}>
                <span className={styles.pubLabel}>Ấn phẩm khoa học</span>
                <ul className={styles.pubList}>
                  {publications.map((publication) => (
                    <li key={publication} className={styles.pubItem}>
                      {publication}
                    </li>
                  ))}
                </ul>
              </article>
              <article className={styles.pubCard}>
                <span className={styles.pubLabel}>I-Star 2026</span>
                <p className={styles.pubText}>
                  INNTECH CLUB là đại diện của Trường Đại học Nguyễn Tất Thành
                  tham gia I-Star 2026 với mã số N4015; fanpage đã phát động
                  bình chọn ngày 02/11/2026.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["community", "mentor-hub", "business-connect"]}
      />
    </main>
  );
}
