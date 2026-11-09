import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo NTTU",
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
      <body>{children}</body>
    </html>
  );
}
