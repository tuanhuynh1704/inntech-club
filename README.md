# INNTECH CLUB — Website Giới Thiệu

Website landing page chính thức của **INNTECH CLUB** (Câu lạc bộ Công nghệ và Sáng tạo — Trường Đại học Nguyễn Tất Thành).

🌐 **Live**: [http://localhost:3000](http://localhost:3000) (dev)  
📁 **Source**: [`src/app/page.tsx`](src/app/page.tsx) — single-page layout, nội dung từ `MOTA.md` & `THONGTIN.md`

---

## ✨ Tính Năng Nổi Bật

| Tính năng | Mô tả |
|-----------|-------|
| **Thiết kế một trang (Landing Page)** | Hero, Stats, Giới thiệu, Giá trị I-N-N-T-E-C-H, 5 Trụ cột hoạt động, Hệ sinh thái 7 dự án, Timeline sự kiện, Tổ chức, Cộng đồng/Đối tác, CTA, Footer |
| **Màu thương hiệu từ logo** | Navy `#040a26`, Blue `#2f6bff`, Cyan `#35c7f4`, Violet `#7c86e8`, nền sáng `#f5f8ff` |
| **Scrollbar tùy chỉnh** | Gradient thumb (blue → cyan), track nhẹ, hỗ trợ Firefox |
| **Header Sticky + Blur** | `backdrop-filter: blur(22px) saturate(180%)`, trạng thái scrolled nâng opacity/shadow, **thanh tiến độ cuộn** gradient ở đáy header |
| **Reveal Animation** | `IntersectionObserver` + `data-reveal` (left/right/scale), stagger qua `--reveal-delay`, tận trọng `prefers-reduced-motion` |
| **Lazy Loading** | `content-visibility: auto` cho section dài, `loading="lazy"` cho ảnh footer |
| **Card Giá trị I-N-N-T-E-C-H** | 7 card, mỗi tone màu riêng (blue/cyan/violet xen kẽ), card Innovation nổi bật nền tối |
| **Card Dự án** | Tên dự án hiển thị rõ trong vùng gradient, monogram làm watermark, gradient lấy cảm hứng từ logo từng dự án (EaAgri, Sports Connect, DIA+, WeaveCarbon, RecycleBike, VietFarm Go, IPUni Market) |
| **Responsive** | Breakpoints: 1440 / 1100 / 760 / 560px |
| **Font** | `Be Vietnam Pro` (Google Fonts, `next/font`) |
| **Favicon/Apple Icon** | Tự sinh từ logo trong `src/app/icon.png`, `src/app/apple-icon.png` |

---

## 🛠 Tech Stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | **Next.js 16 (App Router, Turbopack)** |
| Language | **TypeScript 5**, React 19 |
| Styling | **CSS Modules** + CSS Variables (`globals.css`) |
| Font | `next/font/google` → Be Vietnam Pro |
| Images | `next/image` (priority hero, lazy footer) |
| Lint/Format | ESLint (Next.js core-web-vitals) |
| Build | Static export (prerender), `output: 'standalone'` ready |

---

## 📂 Cấu Trúc Quan Trọng

```
inntech-club/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page (Server Component)
│   │   ├── page.module.css       # Styles chính (responsive, animation, cards)
│   │   ├── globals.css           # Reset, CSS variables, scrollbar, reveal base
│   │   ├── layout.tsx            # Metadata, font, viewport
│   │   ├── icon.png              # Favicon 32x32 (từ logo)
│   │   └── apple-icon.png        # Apple touch icon 180x180
│   ├── components/
│   │   ├── site-header.tsx       # Client Component: sticky header, mobile menu, progress bar
│   │   ├── site-header.module.css
│   │   ├── scroll-reveal.tsx     # Client Component: IntersectionObserver reveal
│   │   └── icons.tsx             # Bộ SVG icon (lucide-style)
│   └── assets/images/
│       ├── logo_inntech_transparent.png   # Logo hero/header/footer
│       └── logo_inntech.png               # Logo gốc có nền
├── MOTA.md                       # Nguồn nội dung mô tả CLB
├── THONGTIN.md                   # Fact sheet chi tiết (dự án, giải thưởng, đối tác)
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Chạy Dự Án

```bash
# Cài đặt dependencies
npm install

# Dev server (Turbopack)
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Chạy production build
npm start

# Lint
npm run lint
```

**Yêu cầu**: Node.js ≥ 20, npm ≥ 10.

---

## 🎨 Palette & Design Tokens (`globals.css:1-26`)

```css
:root {
  --navy-950: #040a26;
  --navy-900: #071340;
  --navy-800: #0b1e63;
  --blue-700: #1638a8;
  --blue-600: #2254e8;
  --blue-500: #2f6bff;      /* Primary */
  --cyan-400: #35c7f4;      /* Secondary */
  --cyan-300: #7fe0ff;
  --violet-400: #7c86e8;    /* Accent */
  --ink: #08122e;
  --muted: #5b6785;
  --line: #dfe6f5;
  --surface: #f5f8ff;
  --surface-strong: #eef3ff;
  --white: #ffffff;
  --shadow-sm: 0 10px 30px rgba(8,18,46,0.06);
  --shadow-md: 0 24px 60px rgba(8,18,46,0.1);
  --radius-xl: 36px;
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
  --max-width: 1200px;
}
```

---

## 🧩 Các Section & Anchor

| Section | ID | Mô tả |
|---------|-----|-------|
| Hero | — | Logo, slogan, CTA |
| Stats | — | 4 chỉ số nổi bật |
| Giới thiệu | `#gioi-thieu` | Sứ mệnh, tầm nhìn, meta |
| Giá trị cốt lõi | `#gia-tri` | 7 chữ I-N-N-T-E-C-H |
| Hoạt động | `#hoat-dong` | 5 trụ cột (đào tạo, ươm tạo, sự kiện, cuộc thi, cộng đồng) |
| Dự án | `#du-an` | 7 dự án + card "Dự án tiếp theo" |
| Sự kiện | `#su-kien` | Timeline 8 mốc |
| Tổ chức | — | Ban chủ nhiệm + 6 ban |
| Cộng đồng/Đối tác | — | Hoạt động nhân văn + marquee đối tác |
| CTA/Liên hệ | `#lien-he` | Form liên hệ, thông tin |

---

## ♿ Truy Cập & Hiệu Năng

- **Semantic HTML**: `header`, `main`, `section`, `article`, `footer`, `nav`
- **Focus-visible**: outline rõ ràng cho keyboard navigation
- **Reduced motion**: tắt toàn bộ animation/transition khi user bật `prefers-reduced-motion`
- **Scroll padding**: `scroll-padding-top: 96px` tránh header che anchor
- **Images**: `priority` hero logo, `loading="lazy"` footer logo, `alt` đầy đủ
- **Static prerender**: route `/` tĩnh, TTFB cực thấp

---

## 📝 Nguồn Nội Dung

| File | Vai trò |
|------|---------|
| `MOTA.md` | Mô tả tổng quan CLB, sứ mệnh, tầm nhìn, hoạt động |
| `THONGTIN.md` | Fact sheet chi tiết: stats, dự án (mô tả, giải thưởng, tag), sự kiện, tổ chức, đối tác |

> Website **không** yêu cầu đăng nhập Facebook — toàn bộ dữ liệu nhúng tĩnh tại build time.

---

## 🔧 Tuỳ Chỉnh Nhanh

| Muốn đổi | File |
|----------|------|
| Màu chủ đạo | `globals.css:4-13` (CSS variables) |
| Nội dung hero/stats/values/projects/events | `page.tsx` (constants ở đầu file) |
| Icon SVG | `components/icons.tsx` |
| Header/Menu mobile | `components/site-header.tsx` + `.module.css` |
| Reveal timing | `globals.css` (`transition-delay` qua `--reveal-delay`) |
| Scrollbar style | `globals.css` (`::-webkit-scrollbar-*`, `scrollbar-*`) |

---

## 📄 License

Internal project — INNTECH CLUB, NTTU.  
© 2026 INNTECH CLUB. All rights reserved.

---

## 🤝 Đóng Góp

1. Fork repo
2. Tạo branch: `git checkout -b feature/ten-tinh-nang`
3. Commit: `git commit -m "feat: mô tả ngắn gọn"`
4. Push & mở Pull Request

---

> **Made with curiosity & collaboration.** 🚀