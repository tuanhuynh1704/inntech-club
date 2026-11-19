import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo NTTU",
    template: "%s | INNTECH CLUB",
  },
  description:
    "INNTECH CLUB là cộng đồng học thuật – khởi nghiệp của sinh viên Trường Đại học Nguyễn Tất Thành, kết nối công nghệ, tri thức và nguồn lực để thúc đẩy đổi mới sáng tạo.",
  keywords: [
    "INNTECH CLUB",
    "NTTU",
    "câu lạc bộ công nghệ",
    "đổi mới sáng tạo",
    "khởi nghiệp",
    "sinh viên",
    "NIIC",
    "NIIE",
  ],
  authors: [{ name: "INNTECH CLUB" }],
  openGraph: {
    title: "INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo NTTU",
    description:
      "Kết nối sinh viên, tri thức và nguồn lực để thúc đẩy đổi mới sáng tạo. INNOVATE • CONNECT • INSPIRE.",
    type: "website",
    locale: "vi_VN",
    siteName: "INNTECH CLUB",
  },
  twitter: {
    card: "summary_large_image",
    title: "INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo NTTU",
    description:
      "Kết nối sinh viên, tri thức và nguồn lực để thúc đẩy đổi mới sáng tạo. INNOVATE • CONNECT • INSPIRE.",
  },
};

export const viewport: Viewport = {
  themeColor: "#040a26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body id="top">
        <a href="#main" className="skip-link">
          Bỏ qua nội dung
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script id="reveal-failsafe" strategy="beforeInteractive">{`(function(){window.__revealFailsafeTimer=window.setTimeout(function(){if(document.documentElement.dataset.revealActive!=="1"){document.documentElement.classList.add("reveal-fallback")}},3000)})();`}</Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
