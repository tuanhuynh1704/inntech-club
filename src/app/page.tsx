import Image from "next/image";
import type { CSSProperties } from "react";
import logo from "@/assets/images/logo_inntech_transparent.png";
import ScrollReveal from "@/components/scroll-reveal";
import SiteHeader from "@/components/site-header";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Eye,
  Facebook,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "@/components/icons";
import styles from "./page.module.css";

const facebookUrl = "https://www.facebook.com/inntechclub";
const email = "inntechclub@gmail.com";
const phone = "0963 360 450";

const stats = [
  {
    value: "7",
    label: "dự án được đồng hành",
    note: "Từ nông nghiệp đến y tế số",
  },
  {
    value: "2.100",
    label: "giờ mentoring",
    note: "Hơn 300 giờ mỗi dự án",
  },
  {
    value: "35 triệu",
    label: "đồng hỗ trợ",
    note: "Đầu tư và hoạt động ý tưởng",
  },
  {
    value: "500+",
    label: "lượt người tham dự",
    note: "Các chương trình, sự kiện",
  },
];

const values = [
  {
    letter: "I",
    name: "Innovation",
    vi: "Đổi mới sáng tạo",
    text: "Khuyến khích ý tưởng mới, tinh thần thử nghiệm và cải tiến không ngừng.",
    tone: "navy",
  },
  {
    letter: "N",
    name: "Networking",
    vi: "Kết nối",
    text: "Mở rộng quan hệ với chuyên gia, doanh nghiệp, nhà đầu tư và các trường bạn.",
    tone: "blue",
  },
  {
    letter: "N",
    name: "Nurturing",
    vi: "Nuôi dưỡng",
    text: "Đồng hành, mentoring và tạo điều kiện để thành viên phát triển dài hạn.",
    tone: "cyan",
  },
  {
    letter: "T",
    name: "Technology",
    vi: "Công nghệ",
    text: "Ứng dụng AI, IoT, dữ liệu và chuyển đổi số vào học tập, nghiên cứu và sản phẩm.",
    tone: "violet",
  },
  {
    letter: "E",
    name: "Entrepreneurship",
    vi: "Khởi nghiệp",
    text: "Bồi dưỡng tư duy kinh doanh, thương mại hóa và tinh thần dấn thân.",
    tone: "blue",
  },
  {
    letter: "C",
    name: "Collaboration",
    vi: "Hợp tác",
    text: "Đề cao làm việc nhóm, liên ngành và hợp tác giữa các trường, đơn vị.",
    tone: "cyan",
  },
  {
    letter: "H",
    name: "Humanity",
    vi: "Nhân văn",
    text: "Hướng đến giá trị tích cực cho cộng đồng, phát triển bền vững và trách nhiệm xã hội.",
    tone: "violet",
  },
];

const pillars = [
  {
    icon: GraduationCap,
    index: "01",
    title: "Đào tạo & năng lực",
    text: "AI, công nghệ số, nghiên cứu thị trường, marketing, quản lý dự án, quản lý tài chính, thuyết trình và xây dựng CV/portfolio.",
  },
  {
    icon: Rocket,
    index: "02",
    title: "Ươm tạo dự án",
    text: "Kết nối mentor, hỗ trợ kỹ thuật và đồng hành cùng các nhóm dự án từ ý tưởng đến sản phẩm.",
  },
  {
    icon: CalendarDays,
    index: "03",
    title: "Sự kiện & kết nối",
    text: "University Meetup, Venture Forum, Ngày hội Khởi nghiệp – nơi sinh viên gặp gỡ doanh nghiệp và chuyên gia.",
  },
  {
    icon: Trophy,
    index: "04",
    title: "Cuộc thi & nghiên cứu",
    text: "Đồng hành cùng thành viên tại các cuộc thi khởi nghiệp, hackathon và hội nghị khoa học như SIEV2026, AIIA 2026.",
  },
  {
    icon: HeartHandshake,
    index: "05",
    title: "Cộng đồng & nhân văn",
    text: "Các chương trình thiện nguyện, chăm lo học sinh và lan tỏa giá trị tích cực đến cộng đồng.",
  },
];

type Project = {
  name: string;
  monogram: string;
  tag: string;
  description: string;
  award: string;
  kind: "award" | "support";
  gradient: string;
  accent: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "EaAgri",
    monogram: "EA",
    tag: "AI + IoT",
    description:
      "Hệ sinh thái nông nghiệp thông minh cho cây sầu riêng tại Đắk Lắk. Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12.",
    award: "Á quân NTTU Innovation Startup Challenge 2026",
    kind: "award",
    gradient:
      "linear-gradient(120deg, #04241c 0%, #0f6b4f 52%, #34d399 100%)",
    accent: "#0f766e",
    featured: true,
  },
  {
    name: "Sports Connect",
    monogram: "SC",
    tag: "Real-time",
    description:
      "Nền tảng cộng đồng thể thao thời gian thực, giúp tìm đối thủ, ghép trận và đặt sân.",
    award: "Giải Ba AI — Cardano SEA Hackathon 2026",
    kind: "award",
    gradient:
      "linear-gradient(120deg, #071340 0%, #1d4ed8 55%, #38bdf8 100%)",
    accent: "#1d4ed8",
  },
  {
    name: "DIA+",
    monogram: "D+",
    tag: "Healthtech",
    description:
      "Hệ sinh thái quản lý tiểu đường ứng dụng AI và OCR, đồng hành cùng người bệnh trong theo dõi và chăm sóc sức khỏe.",
    award: "Top 10 CYE Junior Vietnam 2026",
    kind: "award",
    gradient:
      "linear-gradient(120deg, #062a4a 0%, #0e7490 52%, #22d3ee 100%)",
    accent: "#0e7490",
  },
  {
    name: "WeaveCarbon",
    monogram: "WC",
    tag: "Climate tech",
    description:
      "Hạ tầng dữ liệu carbon và khí hậu cho doanh nghiệp công nghiệp, hướng đến phát triển bền vững.",
    award: "Quý quân NTTU Innovation Startup Challenge 2026",
    kind: "award",
    gradient:
      "linear-gradient(120deg, #042f2e 0%, #0d9488 55%, #5eead4 100%)",
    accent: "#0d9488",
  },
  {
    name: "RecycleBike",
    monogram: "RB",
    tag: "Circular",
    description:
      "Dự án thuộc hệ sinh thái INNTECH, góp mặt trong Top 60 vòng bán kết 1 cuộc thi Innostar.",
    award: "Top 60 vòng bán kết 1 Innostar",
    kind: "award",
    gradient:
      "linear-gradient(120deg, #0b2e1a 0%, #16a34a 55%, #86efac 100%)",
    accent: "#16a34a",
  },
  {
    name: "VietFarm Go",
    monogram: "VF",
    tag: "Agritech",
    description:
      "Dự án được CLB hỗ trợ, đồng hành trong quá trình phát triển sản phẩm và kiểm chứng thị trường.",
    award: "Dự án đồng hành cùng CLB",
    kind: "support",
    gradient:
      "linear-gradient(120deg, #14532d 0%, #65a30d 55%, #d9f99d 100%)",
    accent: "#4d7c0f",
  },
  {
    name: "IPUni Market",
    monogram: "IP",
    tag: "Marketplace",
    description:
      "Dự án được CLB hỗ trợ, đồng hành trong quá trình phát triển sản phẩm và kiểm chứng thị trường.",
    award: "Dự án đồng hành cùng CLB",
    kind: "support",
    gradient:
      "linear-gradient(120deg, #1e1b4b 0%, #4f46e5 55%, #a5b4fc 100%)",
    accent: "#4f46e5",
  },
];

const events = [
  {
    date: "16.11.2025",
    tag: "Khởi đầu",
    title: "GALA NJEC 2025",
    text: "Lễ ra mắt CLB tại hội trường A.803 với hơn 50 thành viên đầu tiên.",
  },
  {
    date: "2025",
    tag: "Kết nối",
    title: "NTTU – University Meetup 2025",
    text: "Chương trình quy tụ khoảng 200 người tham dự, kết nối sinh viên, giảng viên và chuyên gia.",
  },
  {
    date: "12.06.2026",
    tag: "Kết nối",
    title: "Venture Forum 2026",
    text: "Tham gia diễn đàn “Vietnam's M&A Moment – The Unseen Dynamics” với hơn 500 lãnh đạo.",
  },
  {
    date: "19.07.2026",
    tag: "Gọi vốn",
    title: "University Meetup #1",
    text: "“Hiểu Quỹ đầu tư – Nâng cao cơ hội gọi vốn cho Startup trẻ”, tại phòng A801.",
  },
  {
    date: "27.08.2026",
    tag: "Công nghệ",
    title: "University Meetup #3",
    text: "“Từ Web2 đến Web3: Nâng cấp sản phẩm chinh phục Hackathon” với 72 lượt đăng ký và hơn 40 người tham dự.",
  },
  {
    date: "2026",
    tag: "Cộng đồng",
    title: "Ngày hội Khởi nghiệp lần VII",
    text: "Gian hàng INNTECH, minigame và quà tặng Canva Pro tại Ngày hội Khởi nghiệp và Tìm kiếm Ý tưởng Sáng tạo.",
  },
  {
    date: "2026",
    tag: "Nhân văn",
    title: "Trung thu Sáng tạo 2026",
    text: "35 học sinh và 800 phần quà tại Mỹ Yên, Tây Ninh; 20 phần quà tại Song Phú, Vĩnh Long.",
  },
];

const leaders = [
  {
    initial: "H",
    name: "Nguyễn Lâm Chí Hải",
    role: "Chủ nhiệm",
    note: "Nhân sự NIIC, đầu mối liên hệ của CLB.",
  },
  {
    initial: "L",
    name: "Võ Văn Hải Long",
    role: "Phó Chủ nhiệm",
    note: "Phụ trách mảng dự án – công nghệ.",
  },
  {
    initial: "Y",
    name: "Nguyễn Hoàng Yến",
    role: "Ủy viên",
    note: "Nhiệm kỳ 2025–2026.",
  },
  {
    initial: "A",
    name: "Nguyễn Nhật An",
    role: "Ủy viên",
    note: "Nhiệm kỳ 2025–2026.",
  },
];

const departments = [
  {
    number: "01",
    name: "Dự án & Công nghệ",
    text: "Đồng hành dự án, phát triển sản phẩm và các vấn đề kỹ thuật.",
  },
  {
    number: "02",
    name: "Đối nội",
    text: "Kết nối thành viên, vận hành và xây dựng văn hóa nội bộ.",
  },
  {
    number: "03",
    name: "Đối ngoại",
    text: "Quan hệ đối tác, doanh nghiệp, trường bạn và nhà tài trợ.",
  },
  {
    number: "04",
    name: "Nhân lực",
    text: "Tuyển dụng, đào tạo và phát triển thành viên.",
  },
  {
    number: "05",
    name: "Sáng tạo",
    text: "Ý tưởng, nghiên cứu và các sáng kiến đổi mới.",
  },
  {
    number: "06",
    name: "Truyền thông",
    text: "Nội dung, fanpage, hình ảnh và truyền thông sự kiện.",
  },
];

const partners = [
  "Hội Tư vấn, Đầu tư và Phát triển doanh nghiệp nhỏ và vừa TP.HCM",
  "Hội đồng Tư vấn – Hỗ trợ khởi nghiệp phía Nam",
  "CLB Doanh nghiệp NTTU",
  "Viện Phát triển Kinh tế số Việt Nam",
  "BSA",
  "Felix",
  "Bụi Media",
  "Gia Đình Việt Retail",
  "Như Hồng",
  "Diễn đàn Doanh nghiệp",
  "Titops",
  "ĐH Tôn Đức Thắng",
  "UFM",
  "Sài Gòn International",
  "UTH",
];

const revealDelay = (index: number): CSSProperties =>
  ({ "--reveal-delay": `${Math.min(index, 6) * 70}ms` }) as CSSProperties;

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <SiteHeader />
      <ScrollReveal />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlowA} aria-hidden="true" />
          <div className={styles.heroGlowB} aria-hidden="true" />
          <div className={styles.heroGridPattern} aria-hidden="true" />

          <div className={`${styles.container} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <div className={styles.heroEyebrow}>
                <span className={styles.pulseDot} aria-hidden="true" />
                Câu lạc bộ Công nghệ và Sáng tạo · NTTU
              </div>

              <h1 className={styles.heroTitle}>
                Nơi sinh viên biến ý tưởng công nghệ thành{" "}
                <span className={styles.gradientText}>dự án thật.</span>
              </h1>

              <p className={styles.heroLead}>
                INNTECH CLUB là cộng đồng học thuật – khởi nghiệp của sinh viên
                Trường Đại học Nguyễn Tất Thành, kết nối công nghệ, tri thức và
                nguồn lực để cùng kiến tạo những sản phẩm có giá trị.
              </p>

              <div className={styles.heroActions}>
                <a className={styles.buttonPrimary} href="#gioi-thieu">
                  Khám phá câu lạc bộ
                  <ArrowDown className={styles.buttonIcon} />
                </a>
                <a
                  className={styles.buttonGhost}
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fanpage INNTECH
                  <ArrowUpRight className={styles.buttonIcon} />
                </a>
              </div>

              <div className={styles.heroBadges}>
                <span>NIIC × NIIE</span>
                <span>EST. 2025</span>
                <span>I-STAR 2026 · N4015</span>
              </div>
            </div>

            <div className={styles.heroVisual} data-reveal-mobile>
              <div className={styles.orbitOne} aria-hidden="true" />
              <div className={styles.orbitTwo} aria-hidden="true" />

              <div className={styles.logoCard}>
                <div className={styles.logoCardTop}>
                  <span>Cộng đồng đổi mới sáng tạo</span>
                  <Sparkles className={styles.logoCardIcon} />
                </div>
                <Image
                  src={logo}
                  alt="Logo INNTECH CLUB"
                  className={styles.heroLogo}
                  priority
                />
                <div className={styles.logoCardBottom}>
                  <span>TP. Hồ Chí Minh</span>
                  <span>Từ 2025</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.floatCardTop}`}>
                <span className={styles.floatIcon}>
                  <Rocket />
                </span>
                <div>
                  <strong>7 dự án</strong>
                  <span>được ươm tạo</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.floatCardBottom}`}>
                <span className={styles.floatIcon}>
                  <Users />
                </span>
                <div>
                  <strong>2.100 giờ</strong>
                  <span>mentoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection} aria-label="Thống kê nổi bật">
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className={styles.statCard}
                  data-reveal
                  style={revealDelay(index)}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statNote}>{stat.note}</span>
                </article>
              ))}
            </div>
            <p className={styles.statsNote}>
              Số liệu theo hồ sơ I-Star 2026 của câu lạc bộ.
            </p>
          </div>
        </section>

        <section id="gioi-thieu" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCopy} data-reveal="left">
                <span className={styles.eyebrow}>Về chúng tôi</span>
                <h2 className={styles.h2}>
                  Một cộng đồng học thuật – khởi nghiệp của sinh viên NTTU.
                </h2>
                <p className={styles.lead}>
                  INNTECH CLUB (Câu lạc bộ Công nghệ và Sáng tạo – NGUYEN TAT
                  THANH UNIVERSITY INNOVATION &amp; TECHNOLOGY CLUB) hoạt động
                  dưới sự quản lý và định hướng chuyên môn của NIIC và NIIE.
                </p>
                <p>
                  CLB ra đời với mục tiêu kết nối sinh viên, tri thức và nguồn
                  lực; tạo môi trường để sinh viên thử nghiệm ý tưởng, xây dựng
                  sản phẩm, tham gia cuộc thi và bước đầu tiếp cận hệ sinh thái
                  doanh nghiệp – đầu tư.
                </p>

                <div className={styles.aboutMeta}>
                  <div>
                    <span>Trực thuộc</span>
                    <strong>Trường ĐH Nguyễn Tất Thành</strong>
                  </div>
                  <div>
                    <span>Đơn vị quản lý</span>
                    <strong>NIIC &amp; NIIE</strong>
                  </div>
                  <div>
                    <span>Trụ sở</span>
                    <strong>298A Nguyễn Tất Thành, TP.HCM</strong>
                  </div>
                </div>
              </div>

              <div className={styles.aboutCards}>
                <article className={styles.aboutCard} data-reveal="right">
                  <span className={styles.aboutCardIcon}>
                    <Target />
                  </span>
                  <span className={styles.aboutCardLabel}>Sứ mệnh</span>
                  <h3>Tạo môi trường để ý tưởng được nuôi dưỡng.</h3>
                  <p>
                    Kết nối sinh viên với chuyên gia, doanh nghiệp, nhà đầu tư
                    và nguồn lực; đồng hành để các ý tưởng công nghệ có cơ hội
                    được kiểm chứng và phát triển thành sản phẩm có giá trị.
                  </p>
                </article>

                <article
                  className={`${styles.aboutCard} ${styles.aboutCardDark}`}
                  data-reveal="right"
                  style={revealDelay(1)}
                >
                  <span className={styles.aboutCardIcon}>
                    <Eye />
                  </span>
                  <span className={styles.aboutCardLabel}>Tầm nhìn</span>
                  <h3>Trở thành cộng đồng đổi mới sáng tạo tiêu biểu.</h3>
                  <p>
                    Là cầu nối hiệu quả giữa nhà trường, doanh nghiệp và hệ
                    sinh thái khởi nghiệp; góp phần hình thành thế hệ sinh viên
                    có năng lực công nghệ, tư duy khởi nghiệp và trách nhiệm xã
                    hội.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="gia-tri" className={`${styles.section} ${styles.sectionTint}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.eyebrow}>Giá trị cốt lõi</span>
              <h2 className={styles.h2}>
                <span className={styles.h2Accent}>I-N-N-T-E-C-H.</span> Bảy chữ
                cái, một cách chúng tôi làm việc.
              </h2>
              <p>
                Mỗi giá trị là một cam kết về cách INNTECH học hỏi, hợp tác và
                tạo ra tác động tích cực.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <article
                  key={value.name}
                  className={styles.valueCard}
                  data-tone={value.tone}
                  data-reveal
                  style={revealDelay(index)}
                >
                  <span className={styles.valueLetter}>{value.letter}</span>
                  <div className={styles.valueBody}>
                    <h3>{value.name}</h3>
                    <span className={styles.valueVi}>{value.vi}</span>
                    <p>{value.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hoat-dong" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeadRow} data-reveal>
              <div>
                <span className={styles.eyebrow}>Hoạt động</span>
                <h2 className={styles.h2}>
                  Năm trụ cột, một hành trình phát triển.
                </h2>
              </div>
              <p className={styles.sectionLead}>
                Từ đào tạo năng lực đến ươm tạo dự án, INNTECH tạo ra một lộ
                trình liên tục để sinh viên học, thử và trưởng thành.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className={styles.pillarCard}
                    data-reveal
                    style={revealDelay(index)}
                  >
                    <div className={styles.pillarTop}>
                      <span className={styles.pillarIcon}>
                        <Icon />
                      </span>
                      <span className={styles.pillarIndex}>{pillar.index}</span>
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="du-an" className={`${styles.section} ${styles.sectionTint}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeadRow} data-reveal>
              <div>
                <span className={styles.eyebrow}>Hệ sinh thái dự án</span>
                <h2 className={styles.h2}>
                  7 dự án. 2.100 giờ đồng hành. Những kết quả thật.
                </h2>
              </div>
              <p className={styles.sectionLead}>
                Từ nông nghiệp thông minh đến y tế số, thể thao và dữ liệu
                carbon – các dự án của INNTECH đang giải những bài toán cụ thể.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className={`${styles.projectCard} ${
                    project.featured ? styles.projectFeatured : ""
                  }`}
                  data-reveal
                  style={
                    {
                      ...revealDelay(index),
                      "--project-accent": project.accent,
                    } as CSSProperties
                  }
                >
                  <div
                    className={styles.projectVisual}
                    style={{ background: project.gradient }}
                  >
                    <span
                      className={styles.projectGridPattern}
                      aria-hidden="true"
                    />
                    <span className={styles.projectMonogram} aria-hidden="true">
                      {project.monogram}
                    </span>

                    <div className={styles.projectVisualTop}>
                      <span className={styles.projectTag}>{project.tag}</span>
                      <span className={styles.projectNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className={styles.projectVisualTitle}>
                      <span className={styles.projectLabel}>Dự án</span>
                      <h3>{project.name}</h3>
                    </div>
                  </div>

                  <div className={styles.projectBody}>
                    <p>{project.description}</p>
                    <div
                      className={`${styles.projectAward} ${
                        project.kind === "support"
                          ? styles.projectAwardSupport
                          : ""
                      }`}
                    >
                      {project.kind === "award" ? <Trophy /> : <Sparkles />}
                      <span>{project.award}</span>
                    </div>
                  </div>
                </article>
              ))}

              <a
                className={styles.projectJoin}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={revealDelay(1)}
              >
                <span className={styles.projectJoinIcon}>
                  <ArrowUpRight />
                </span>
                <div>
                  <h3>Dự án tiếp theo có thể là của bạn.</h3>
                  <p>Tham gia INNTECH để bắt đầu hành trình.</p>
                </div>
              </a>
            </div>

            <div className={styles.projectFooter} data-reveal>
              <span className={styles.projectFooterLabel}>
                <Trophy />
                Giải thưởng 2026
              </span>
              <div className={styles.awardPills}>
                <span>Á quân NTTU Innovation Startup Challenge</span>
                <span>Giải Ba AI · Cardano SEA Hackathon</span>
                <span>Top 10 CYE Junior Vietnam</span>
                <span>Quý quân NTTU Innovation Startup Challenge</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="su-kien"
          className={`${styles.section} ${styles.lazySection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.eyebrow}>Dấu mốc &amp; sự kiện</span>
              <h2 className={styles.h2}>Những khoảnh khắc làm nên INNTECH.</h2>
              <p>
                Từ lễ ra mắt đến các meetup chuyên đề, mỗi sự kiện là một cơ
                hội để sinh viên gặp gỡ, học hỏi và kết nối.
              </p>
            </div>

            <div className={styles.timeline}>
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className={styles.timelineItem}
                  data-reveal
                  style={revealDelay(index)}
                >
                  <div className={styles.timelineDate}>{event.date}</div>
                  <div className={styles.timelineBody}>
                    <span className={styles.timelineTag}>{event.tag}</span>
                    <h3>{event.title}</h3>
                    <p>{event.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.sectionDark} ${styles.lazySection}`}
        >
          <div className={styles.container}>
            <div className={styles.orgGrid}>
              <div data-reveal="left">
                <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                  Con người
                </span>
                <h2 className={`${styles.h2} ${styles.h2Light}`}>
                  Ban Chủ nhiệm &amp; 6 ban chuyên môn.
                </h2>
                <p className={styles.leadLight}>
                  Nhiệm kỳ 2025–2026, cùng một tinh thần: học hỏi, hợp tác và
                  kiến tạo.
                </p>

                <div className={styles.leaderList}>
                  {leaders.map((leader) => (
                    <article key={leader.name} className={styles.leaderCard}>
                      <span className={styles.leaderAvatar}>
                        {leader.initial}
                      </span>
                      <div>
                        <h3>{leader.name}</h3>
                        <span>{leader.role}</span>
                        <p>{leader.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.departmentsWrap} data-reveal="right">
                <div className={styles.departmentsHead}>
                  <span>
                    <Users />
                    06 ban
                  </span>
                  <span>Cùng một tinh thần</span>
                </div>

                <div className={styles.departmentsGrid}>
                  {departments.map((department) => (
                    <article
                      key={department.name}
                      className={styles.departmentCard}
                    >
                      <span className={styles.departmentNumber}>
                        {department.number}
                      </span>
                      <h3>{department.name}</h3>
                      <p>{department.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lazySection}`}>
          <div className={styles.container}>
            <div className={styles.communityCard} data-reveal>
              <div className={styles.communityCopy}>
                <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                  Cộng đồng
                </span>
                <h2 className={styles.h2Light}>
                  Công nghệ chỉ có ý nghĩa khi mang lại giá trị.
                </h2>
                <p>
                  Trung thu Sáng tạo 2026 là một trong những hoạt động thể hiện
                  giá trị Humanity của INNTECH – đến với học sinh tại Mỹ Yên,
                  Tây Ninh và Song Phú, Vĩnh Long.
                </p>
                <a
                  className={styles.communityLink}
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Xem hoạt động trên fanpage
                  <ArrowUpRight />
                </a>
              </div>

              <div className={styles.communityStats}>
                <div>
                  <strong>800</strong>
                  <span>phần quà</span>
                </div>
                <div>
                  <strong>35</strong>
                  <span>học sinh</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>điểm trường</span>
                </div>
              </div>
            </div>

            <div className={styles.partners} data-reveal>
              <div className={styles.partnersHead}>
                <div>
                  <span className={styles.eyebrow}>Mạng lưới</span>
                  <h2 className={styles.h2Small}>
                    Đồng hành cùng hệ sinh thái.
                  </h2>
                </div>
                <p>
                  Kết nối với doanh nghiệp, hiệp hội, quỹ đầu tư và các trường
                  đại học để mở rộng cơ hội cho sinh viên.
                </p>
              </div>

              <div className={styles.marquee}>
                <div className={styles.marqueeTrack}>
                  {[...partners, ...partners].map((partner, index) => (
                    <span
                      key={`${partner}-${index}`}
                      className={styles.partnerPill}
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="lien-he"
          className={`${styles.ctaSection} ${styles.lazySection}`}
        >
          <div className={styles.container}>
            <div className={styles.ctaCard} data-reveal="scale">
              <div className={styles.ctaCopy}>
                <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                  Gia nhập INNTECH
                </span>
                <h2 className={styles.h2Light}>
                  Bạn sẵn sàng kiến tạo điều tiếp theo?
                </h2>
                <p>
                  Dù bạn đến từ công nghệ, kinh doanh hay truyền thông – INNTECH
                  có một vị trí cho bạn. Hãy bắt đầu bằng một cuộc trò chuyện.
                </p>
                <div className={styles.ctaActions}>
                  <a
                    className={styles.buttonPrimary}
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tham gia CLB
                    <ArrowUpRight className={styles.buttonIcon} />
                  </a>
                  <a className={styles.buttonGhost} href={`mailto:${email}`}>
                    Gửi email
                    <Mail className={styles.buttonIcon} />
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <MapPin />
                  </span>
                  <div>
                    <span>Trụ sở</span>
                    <strong>
                      298A Nguyễn Tất Thành, P. Xóm Chiếu, TP. Hồ Chí Minh
                    </strong>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Phone />
                  </span>
                  <div>
                    <span>Hotline</span>
                    <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Mail />
                  </span>
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Facebook />
                  </span>
                  <div>
                    <span>Fanpage</span>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/inntechclub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <a className={styles.footerLogoLink} href="#top">
                <Image
                  src={logo}
                  alt="INNTECH CLUB"
                  className={styles.footerLogo}
                  loading="lazy"
                />
              </a>
              <p>
                Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất
                Thành. Kết nối sinh viên, tri thức và nguồn lực để thúc đẩy đổi
                mới sáng tạo.
              </p>
              <span className={styles.footerSlogan}>
                INNOVATE • CONNECT • INSPIRE
              </span>
            </div>

            <div className={styles.footerColumn}>
              <h3>Khám phá</h3>
              <a href="#gioi-thieu">Giới thiệu</a>
              <a href="#gia-tri">Giá trị cốt lõi</a>
              <a href="#du-an">Dự án</a>
              <a href="#su-kien">Sự kiện</a>
            </div>

            <div className={styles.footerColumn}>
              <h3>Liên hệ</h3>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              <span>298A Nguyễn Tất Thành, TP.HCM</span>
            </div>

            <div className={styles.footerColumn}>
              <h3>Kết nối</h3>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocial}
              >
                <Facebook />
                Facebook
              </a>
              <span>I-Star 2026 · N4015</span>
              <span>Nhiệm kỳ 2025–2026</span>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>© 2026 INNTECH CLUB. All rights reserved.</span>
            <span>Made with curiosity &amp; collaboration.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
