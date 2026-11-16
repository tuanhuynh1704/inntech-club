import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo_inntech_transparent.png";
import { hubs } from "@/data/hubs";
import { facebookUrl, siteAddress, siteEmail, sitePhone } from "@/data/site";
import { Facebook } from "./icons";
import styles from "./site-footer.module.css";

const productHubIds = [
  "student-hub",
  "learning-hub",
  "opportunity-hub",
  "project-hub",
  "mentor-hub",
  "marketplace",
];

const productHubs = hubs.filter((hub) => productHubIds.includes(hub.id));

const communityLinks = [
  { label: "Community", href: "/community" },
  { label: "Doanh nghiệp", href: "/business-connect" },
  { label: "Về CLB", href: "/about" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link
              className={styles.footerLogoLink}
              href="/"
              aria-label="INNTECH CLUB — về trang chủ"
            >
              <Image
                src={logo}
                alt="INNTECH CLUB"
                className={styles.footerLogo}
                loading="lazy"
              />
            </Link>
            <p>
              Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất
              Thành. Kết nối sinh viên, tri thức và nguồn lực để thúc đẩy đổi
              mới sáng tạo.
            </p>
            <span className={styles.footerSlogan}>
              INNOVATE • CONNECT • INSPIRE
            </span>
          </div>

          <nav className={styles.footerColumn} aria-label="Hubs">
            <h3>Hubs</h3>
            {productHubs.map((hub) => (
              <Link key={hub.id} href={hub.href}>
                {hub.shortName}
              </Link>
            ))}
          </nav>

          <nav className={styles.footerColumn} aria-label="Cộng đồng">
            <h3>Cộng đồng</h3>
            {communityLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

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
            <a href={`mailto:${siteEmail}`}>{siteEmail}</a>
            <a href={`tel:${sitePhone.replace(/\s/g, "")}`}>{sitePhone}</a>
            <span>{siteAddress}</span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 INNTECH CLUB. All rights reserved.</span>
          <span>10 hub · I-Star 2026 N4015</span>
        </div>
      </div>
    </footer>
  );
}
