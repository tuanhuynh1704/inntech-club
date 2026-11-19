# INNTECH CLUB — Nền Tảng Website Đa Hub

Nền tảng website chính thức của **INNTECH CLUB** (Câu lạc bộ Công nghệ và Sáng tạo — Trường Đại học Nguyễn Tất Thành), gồm **10 hub** cho sinh viên, dự án, mentor, doanh nghiệp và cộng đồng, cùng route tiện ích **Kho tài liệu** kết nối Google Drive.

🌐 **Demo**: [https://inntech-club.vercel.app/](https://inntech-club.vercel.app/) (Vercel)  
📁 **Source**: [`src/app/`](src/app/) — nền tảng nhiều route, nội dung từ [`src/data/`](src/data/)

---

## ✨ Tính Năng Nổi Bật

| Tính năng | Mô tả |
|-----------|-------|
| **Nền tảng 10 hub** | Home (`/`), Student Hub (`/student-hub`), Learning Hub (`/learning-hub`), Opportunity Hub (`/opportunity-hub`), Project Hub (`/project-hub`), Mentor Hub (`/mentor-hub`), Tech Marketplace (`/marketplace`), Community (`/community`), Business Connect (`/business-connect`), About Inntech (`/about`) |
| **Kho tài liệu (Google Drive)** | `/kho-tai-lieu` đọc **read-only** từ một thư mục Drive được chia sẻ công khai: duyệt theo môn/học kỳ, tìm kiếm **không dấu**, lọc theo loại, tải thêm theo trang, xem trước PDF/Docs/Slides/Sheets/video và tải xuống. Ba trạng thái `ok` / `unconfigured` / `error`; cache khoảng 5 phút |
| **Kiến trúc tĩnh, không backend** | Không có `src/app/api`, database hay auth. Toàn bộ nội dung là static TypeScript trong `src/data/*.ts`; form gửi qua `mailto:` |
| **Design system dùng chung** | `HubHero`, `SectionHeading`, `SubNav`, `CrossHubCta`, `RequestForm`… trong `src/components/hub/` giữ giao diện nhất quán giữa các hub |
| **Màu thương hiệu từ logo** | Navy `#040a26`, Blue `#2f6bff`, Cyan `#35c7f4`, Violet `#7c86e8`, nền sáng `#f5f8ff` |
| **Scrollbar tùy chỉnh** | Gradient thumb (blue → cyan), track nhẹ, hỗ trợ Firefox |
| **Header Sticky + Blur** | `backdrop-filter: blur(22px) saturate(180%)`, trạng thái scrolled nâng opacity/shadow, **thanh tiến độ cuộn** gradient ở đáy header |
| **Reveal Animation** | `IntersectionObserver` + `data-reveal` (left/right/scale), stagger 70ms qua `--reveal-stagger` và `@keyframes` (`animation-delay`, cap 420ms), tôn trọng `prefers-reduced-motion` |
| **Lazy Loading** | `content-visibility: auto` cho section dài, `loading="lazy"` cho ảnh footer |
| **Responsive** | Breakpoints thực tế trong CSS Modules: 1280 / 1100 / 1024 / 1023 / 900 / 800 / 769 / 768 / 760 / 700 / 640 / 600 / 560 / 360px (mỗi hub có breakpoint riêng, không dùng chung một bộ) |
| **Font** | `Be Vietnam Pro` (Google Fonts, `next/font`) |
| **Favicon/Apple Icon** | Tự sinh từ logo trong `src/app/icon.png`, `src/app/apple-icon.png` |
| **Analytics** | Vercel Analytics + Speed Insights (`src/app/layout.tsx`) |

---

## 🛠 Tech Stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | **Next.js 16.4.3** (App Router, Turbopack) — bật `cacheComponents`, `partialPrefetching`, `reactCompiler` trong `next.config.ts` |
| Language | **TypeScript 5** (`strict`), React 19.3 |
| Styling | **CSS Modules** + CSS Variables (`globals.css`), không dùng UI library |
| Font | `next/font/google` → Be Vietnam Pro |
| Images | `next/image` (`preload` cho logo hero, `loading="lazy"` cho footer) |
| Data | Static TypeScript trong `src/data/*.ts`; Google Drive read-only qua `src/lib/drive.ts` (`use cache`, `cacheTag`, `cacheLife`) |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Lint/Test | ESLint (Next.js core-web-vitals); `npm run verify` chạy 4 script Node tự viết trong `tests/` |
| Deploy | Vercel — demo: [https://inntech-club.vercel.app/](https://inntech-club.vercel.app/) — **không** dùng `output: 'export'` hay `standalone` |

---

## 📂 Cấu Trúc Quan Trọng

```
inntech-club/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Home (/)
│   │   ├── layout.tsx                # Metadata, font, header/footer, Analytics
│   │   ├── globals.css               # Reset, CSS variables, scrollbar, reveal base
│   │   ├── page.module.css
│   │   ├── student-hub/              # 9 hub còn lại, mỗi hub: page.tsx + page.module.css
│   │   ├── learning-hub/
│   │   ├── opportunity-hub/
│   │   ├── project-hub/
│   │   ├── mentor-hub/
│   │   ├── marketplace/
│   │   ├── community/
│   │   ├── business-connect/
│   │   ├── about/
│   │   └── kho-tai-lieu/             # page.tsx (Server) + library-browser.tsx (Client)
│   ├── components/
│   │   ├── site-header.tsx           # Client: sticky header, dropdown Hubs, mobile drawer, progress bar
│   │   ├── site-footer.tsx
│   │   ├── scroll-reveal.tsx         # Client: IntersectionObserver reveal
│   │   ├── icons.tsx                 # Bộ SVG icon
│   │   └── hub/                      # HubHero, SectionHeading, SubNav, CrossHubCta, RequestForm…
│   ├── data/
│   │   ├── hubs.ts                   # Nguồn sự thật cho 10 hub (tên, href, sections)
│   │   ├── site.ts                   # Email, hotline, fanpage, địa chỉ
│   │   ├── metadata.ts               # Helper build metadata cho từng hub
│   │   ├── types.ts
│   │   ├── library.ts                # Kiểu dữ liệu + parse tên thư mục Drive
│   │   ├── search-index.ts           # Search index toàn nền tảng (~1.000 dòng, chưa nối vào UI)
│   │   └── *-hub.ts / about.ts …     # Nội dung từng hub
│   ├── lib/
│   │   └── drive.ts                  # Google Drive read-only: list, cache, 3 trạng thái
│   └── assets/images/                # Logo
├── tests/
│   ├── verify-platform.js            # CSS module, anchor, route, form, a11y tĩnh
│   ├── verify-exports.js
│   ├── verify-library.js
│   └── verify-reveal.js              # Reveal toàn trang: token, IO, hero, failsafe
├── specs/inntech-platform-v1.md      # Đặc tả sản phẩm v1 (10 hub)
├── design/platform-hub-design.md     # Thiết kế giao diện
├── docs/
│   ├── build-verification.md         # Kết quả build & QA
│   └── content-map-platform.md       # Bản đồ nội dung
├── MOTA.md                           # Tài liệu mô tả CLB (nguồn gốc)
├── THONGTIN.md                       # Fact sheet chi tiết (nguồn gốc)
├── .env.example                      # Mẫu cấu hình Google Drive
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

# Kiểm chứng tĩnh (4 script Node: platform, exports, library, reveal)
npm run verify
```

**Yêu cầu**: Node.js ≥ 20.9, npm ≥ 10 (repo không khai báo `engines` trong `package.json`).

### Cấu hình Kho tài liệu (Google Drive)

Kho tài liệu cần **2 biến môi trường chỉ dùng server-side** — tuyệt đối không thêm tiền tố `NEXT_PUBLIC_` (sẽ đưa API key vào bundle trình duyệt):

```bash
# Tạo file .env.local từ mẫu
cp .env.example .env.local
```

```dotenv
GOOGLE_DRIVE_API_KEY=
GOOGLE_DRIVE_FOLDER_ID=
```

- `GOOGLE_DRIVE_API_KEY`: API key đã bật **Google Drive API**, chỉ quyền đọc; không dùng HTTP referrer restriction (request server-side không gửi `Referer`).
- `GOOGLE_DRIVE_FOLDER_ID`: ID thư mục Drive đặt quyền **“Bất kỳ ai có liên kết — Người xem”**.
- Website **chỉ đọc** Drive (`files.list`), không upload/ghi/xoá.
- Thiếu hoặc sai cấu hình → trang hiển thị trạng thái `unconfigured` kèm hướng dẫn, không crash.

> Lưu ý: `.env.example` hiện đang bị `.gitignore`, nên bản clone mới có thể không có file này — khi đó tạo `.env.local` với đúng 2 biến ở trên.

---

## Trạng Thái & Lộ Trình

**Hiện tại**

- **Demo trên Vercel**: [https://inntech-club.vercel.app/](https://inntech-club.vercel.app/) (repo không chứa cấu hình Vercel: không có `vercel.json` / `.vercel/project.json`).
- **Chưa có backend/API/DB/auth**: toàn bộ nội dung tĩnh trong `src/data/*.ts`; form dùng `mailto:`. Hiện chưa kết nối được database.
- **Kho tài liệu** đã triển khai đầy đủ về code nhưng chưa có credentials Drive thật, nên đang ở trạng thái `unconfigured`.
- **Điều hướng**: ưu tiên phương án tốt nhất cho UI/UX; hiện Kho tài liệu là link **top-level** trong header (và mục nổi bật trong mobile drawer).

**P0 — làm trước**

1. **Khôi phục tìm kiếm toàn nền tảng** (phím tắt `Ctrl/Cmd+K`). `src/data/search-index.ts` đã tồn tại nhưng **chưa được nối vào UI**.
2. **Lịch cơ hội** cho Opportunity Hub: mục “Sắp diễn ra”, đếm ngược và nút “Thêm vào lịch” (`.ics`).
3. **SEO pack**: sitemap, robots, canonical, Open Graph, JSON-LD, trang 404 — **phụ thuộc việc chốt domain production**.

**Production**

- Tính năng production đầu tiên dự kiến: **Kho lưu trữ tài liệu** (`/kho-tai-lieu`).
- **Chưa có thời hạn cụ thể** cho việc cung cấp credentials Google Drive và triển khai production.

---

## 🎨 Palette & Design Tokens (`src/app/globals.css`)

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

## 🧩 Các Section & Anchor — Trang Home (`/`)

| Section | ID | Mô tả |
|---------|-----|-------|
| Danh sách hub | `#hubs` | Lưới 10 hub (`HubDirectory`) |
| Hero | — | Logo, slogan, CTA |
| Stats | — | 4 chỉ số nổi bật |
| Giới thiệu | `#gioi-thieu` | Sứ mệnh, tầm nhìn, meta |
| Giá trị cốt lõi | `#gia-tri` | 7 chữ I-N-N-T-E-C-H |
| Hoạt động | `#hoat-dong` | 5 trụ cột (đào tạo, ươm tạo, sự kiện, cuộc thi, cộng đồng) |
| Dự án | `#du-an` | 7 dự án + card "Dự án tiếp theo" |
| Sự kiện | `#su-kien` | Timeline sự kiện |
| Tổ chức | — | Ban chủ nhiệm + 6 ban |
| Cộng đồng/Đối tác | — | Hoạt động nhân văn + marquee đối tác |
| CTA/Liên hệ | `#lien-he` | Form liên hệ, thông tin |

Các hub khác có `SubNav` riêng; danh sách anchor của từng hub được khai báo trong `src/data/hubs.ts` và kiểm chứng bởi `tests/verify-platform.js`.

---

## ♿ Truy Cập & Hiệu Năng

- **Semantic HTML**: `header`, `main`, `section`, `article`, `footer`, `nav`
- **Focus-visible**: outline rõ ràng cho keyboard navigation
- **Skip link**: `#main` cho keyboard/screen reader
- **Reduced motion**: tắt toàn bộ animation/transition khi user bật `prefers-reduced-motion`
- **Scroll padding**: `scroll-padding-top: calc(var(--header-h) + 88px)` (≈164px desktop, ≈156px khi `--header-h: 68px` ở mobile) tránh header che anchor
- **Images**: `preload` cho logo hero, `loading="lazy"` cho footer logo, `alt` đầy đủ
- **Rendering**: các hub render tĩnh tại build time; `/kho-tai-lieu` dùng Server Component + `use cache` (`cacheTag`/`cacheLife`, ~5 phút) để tránh gọi Drive mỗi request

---

## 📝 Nguồn Nội Dung

| File | Vai trò |
|------|---------|
| `src/data/*.ts` | **Nguồn nội dung thực tế** đang render (hub, dự án, mentor, tài liệu…) |
| `MOTA.md` | Tài liệu mô tả gốc: tổng quan CLB, sứ mệnh, tầm nhìn, hoạt động (tham khảo) |
| `THONGTIN.md` | Fact sheet gốc: stats, dự án, sự kiện, tổ chức, đối tác (tham khảo) |

> Website **không** yêu cầu đăng nhập Facebook — toàn bộ dữ liệu nhúng tĩnh tại build time; Kho tài liệu đọc Drive read-only phía server.

---

## 🔧 Tuỳ Chỉnh Nhanh

| Muốn đổi | File |
|----------|------|
| Màu chủ đạo / design tokens | `src/app/globals.css` |
| Danh sách hub, href, anchor | `src/data/hubs.ts` |
| Nội dung từng hub | `src/data/<ten-hub>.ts` |
| Search index toàn nền tảng | `src/data/search-index.ts` |
| Kho tài liệu (UI + logic) | `src/app/kho-tai-lieu/*`, `src/lib/drive.ts` |
| Icon SVG | `src/components/icons.tsx` |
| Header/Menu mobile | `src/components/site-header.tsx` + `.module.css` |
| Reveal timing | `globals.css` (token `--reveal-*`, stagger qua `--reveal-stagger` + `@keyframes`) + `src/components/scroll-reveal.tsx` |
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
