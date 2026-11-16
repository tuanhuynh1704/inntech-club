# Đặc tả sản phẩm — INNTECH Platform v1 (10 hub)

- **Trạng thái:** Approved for build (Founder đã chốt hướng triển khai)
- **Ngày:** 16/11/2026
- **Phạm vi:** Giao diện đầy đủ 10 hub + dữ liệu mẫu/tĩnh, không CSDL, không đăng nhập
- **Người phụ trách:** Coordinator (spec), inkling (build), minimax (visual QA), glm (review)

---

## 1. Bối cảnh

Website hiện tại là một trang giới thiệu (landing page) của INNTECH CLUB với các khối: hero, thống kê, giới thiệu, giá trị I-N-N-T-E-C-H, hoạt động, dự án, sự kiện, ban chuyên môn, cộng đồng, đối tác, liên hệ.

Ảnh thiết kế mới mô tả một **nền tảng sinh viên** gồm 10 khu vực:

| # | Hub | Mô tả ngắn | Nội dung con |
|---|-----|-----------|--------------|
| 01 | HOME | Trang chủ, tìm kiếm, nội dung nổi bật | Tìm kiếm toàn nền tảng, hub directory, nội dung nổi bật |
| 02 | STUDENT HUB | Bộ công cụ cho sinh viên | AI Tools, Study Tools, CV, Prompt, Templates |
| 03 | LEARNING HUB | Kho học liệu và lộ trình | Tài liệu, Slide, Video, Skills, Learning Paths |
| 04 | OPPORTUNITY HUB | Cơ hội cho sinh viên | Sự kiện, Cuộc thi, Hackathon, Học bổng, Jobs |
| 05 | PROJECT HUB | Không gian dự án | Dự án, Team Profile, Thành tích, Tìm cộng sự |
| 06 | MENTOR HUB | Mạng lưới mentor | Chuyên gia, Mentor Profile, Mentoring Request |
| 07 | TECH MARKETPLACE | Chợ sản phẩm công nghệ | Tools, App, Game, Product Showcase, Request Development |
| 08 | COMMUNITY | Cộng đồng thành viên | Thành viên, Challenge, Thành tích, Tuyển thành viên |
| 09 | BUSINESS CONNECT | Kết nối doanh nghiệp | Doanh nghiệp, Đặt hàng công nghệ, Hợp tác |
| 10 | ABOUT INNTECH | Giới thiệu CLB | Giới thiệu, Đối tác, Liên hệ |

## 2. Mục tiêu

1. Chuyển website từ landing page một trang thành **nền tảng 10 hub có điều hướng rõ ràng**, giữ nguyên nhận diện INNTECH hiện tại.
2. Mỗi hub có nội dung thật (từ `MOTA.md`, `THONGTIN.md`) và các mục dữ liệu mẫu được dán nhãn rõ ràng.
3. Người dùng tìm được hub, công cụ, tài liệu, cơ hội, dự án, mentor, sản phẩm trong **một lần tìm kiếm** ở trang chủ.
4. Các hành động quan trọng (gửi mentoring request, đặt hàng công nghệ, liên hệ, tham gia CLB) **có thể thực hiện ngay** dù chưa có backend: form soạn sẵn email qua `mailto:`, liên kết fanpage.
5. Giữ chất lượng kỹ thuật hiện có: TypeScript, CSS Modules, responsive, accessible, không thêm dependency nếu không cần.

## 3. Không nằm trong phạm vi (v1)

- Đăng nhập, phân quyền, hồ sơ người dùng, dashboard cá nhân.
- Cơ sở dữ liệu, API ghi dữ liệu, upload file, lưu form submission.
- Gửi email tự động qua dịch vụ (chỉ mở `mailto:`).
- Thanh toán, đặt cọc, giỏ hàng.
- CMS/admin để tự thêm nội dung.
- Tìm kiếm phía server, full-text index, analytics.
- Đa ngôn ngữ (site tiếng Việt, tên hub giữ tiếng Anh theo ảnh).
- Xác thực thông tin mentor/doanh nghiệp ngoài các nguồn đã có; không công bố thông tin cá nhân ngoài phạm vi `THONGTIN.md`.

## 4. Người dùng và nhu cầu

| Persona | Nhu cầu chính | Hub liên quan |
|---|---|---|
| Sinh viên NTTU mới | Tìm công cụ học tập, tài liệu, lộ trình | Student, Learning |
| Sinh viên muốn tham gia CLB | Hiểu CLB, xem hoạt động, cách ứng tuyển | Home, Community, About |
| Thành viên dự án | Tìm cộng sự, mentor, cơ hội thi | Project, Mentor, Opportunity |
| Sinh viên có sản phẩm | Trưng bày sản phẩm, nhận yêu cầu phát triển | Marketplace, Business Connect |
| Doanh nghiệp/đối tác | Tìm hiểu CLB, đặt hàng công nghệ, hợp tác | Business Connect, About |
| Mentor/chuyên gia | Xem cách tham gia mạng lưới mentor | Mentor Hub, About |

## 5. Kiến trúc thông tin và route

| Route | Hub | Ghi chú |
|---|---|---|
| `/` | 01 HOME | Landing hiện tại + tìm kiếm + lưới 10 hub |
| `/student-hub` | 02 | |
| `/learning-hub` | 03 | |
| `/opportunity-hub` | 04 | |
| `/project-hub` | 05 | |
| `/mentor-hub` | 06 | |
| `/marketplace` | 07 | Tên route ngắn, tiêu đề "Tech Marketplace" |
| `/community` | 08 | |
| `/business-connect` | 09 | |
| `/about` | 10 | |

Mọi hub dùng chung `SiteHeader` và `SiteFooter`. Trang chủ giữ các section hiện có; chèn khối **Hub Directory + Search** ngay sau hero, trước stats.

### 5.1. Điều hướng toàn cục

- Desktop: logo, dropdown **Hubs** (Student, Learning, Opportunity, Project, Mentor, Marketplace), link **Community**, **Doanh nghiệp**, **Về CLB**, nút **Tham gia CLB**, nút tìm kiếm (mở panel tìm kiếm).
- Mobile: drawer liệt kê đủ 10 hub theo thứ tự 01–10, sau đó CTA tham gia.
- Trang hub: breadcrumb `Trang chủ / <Hub>`, sub-nav dạng chip tới các section trong trang.
- Active state theo `pathname`.

## 6. Yêu cầu chức năng theo hub

### 01 HOME (/)

- Giữ nguyên hero, stats, giới thiệu, giá trị, hoạt động, dự án, sự kiện, ban chuyên môn, cộng đồng, liên hệ.
- Thêm section **“10 hub trong hệ sinh thái INNTECH”**:
  - Ô tìm kiếm lớn, placeholder “Tìm hub, công cụ, tài liệu, cơ hội…”, có gợi ý nhanh.
  - Danh sách 10 hub đúng thứ tự và mô tả như ảnh; mỗi dòng: số 01–10, tên tiếng Anh, mô tả tiếng Việt, mũi tên, link tới route.
  - Khi gõ từ khóa: lọc danh sách hub **và** hiển thị kết quả nội dung (công cụ, tài liệu, cơ hội, dự án, mentor, sản phẩm) nhóm theo hub, có link tới `route#anchor`. Có trạng thái rỗng và nút xóa.
  - Hỗ trợ bàn phím: `/` hoặc `Ctrl/Cmd+K` mở tìm kiếm; `Esc` đóng/clear; Enter mở kết quả đầu tiên.
- CTA hero đổi thành “Khám phá 10 hub” trỏ `#hubs`.

### 02 STUDENT HUB (/student-hub)

Các section (có anchor): `#ai-tools`, `#study-tools`, `#cv`, `#prompt`, `#templates`.

- **AI Tools:** ≥ 10 công cụ thật (ChatGPT, Claude, Gemini, NotebookLM, Perplexity, GitHub Copilot, Canva AI, Figma AI, Grammarly, QuillBot…). Mỗi card: tên, mô tả 1–2 câu, tag loại, mức giá (Free/Freemium/Trả phí), liên kết ngoài (mở tab mới, `rel="noopener noreferrer"`).
- **Study Tools:** ≥ 8 công cụ (Notion, Trello, Google Workspace, Zotero, Miro, Overleaf, Obsidian, Anki…).
- **CV:** checklist 8–10 mục; 3–4 mẫu CV/portfolio (liên kết tới thư viện template bên ngoài); lưu ý cá nhân hóa.
- **Prompt Library:** ≥ 8 prompt thật dùng được, phân nhóm Học tập/Viết/Code/Nghiên cứu/CV; nút **Sao chép** hoạt động, có phản hồi “Đã sao chép”.
- **Templates:** slide, báo cáo, project brief; ưu tiên liên kết ngoài ổn định.
- Bộ lọc client-side theo danh mục và tìm kiếm nhanh trong hub (tùy chọn, nếu dùng chung `FilterGrid`).

### 03 LEARNING HUB (/learning-hub)

Anchor: `#tai-lieu`, `#slide`, `#video`, `#skills`, `#lo-trinh`.

- **Tài liệu:** ≥ 10 học liệu thật (MDN, freeCodeCamp, roadmap.sh, Kaggle, Google AI, Coursera, Figma Learn, Harvard CS50…), mỗi item có chủ đề, loại, cấp độ, thời lượng ước tính, nguồn.
- **Slide:** chủ đề workshop của CLB (AI cơ bản, Web2 → Web3, gọi vốn, thuyết trình) + template slide; nếu chưa có file thì ghi “Sắp cập nhật”, **không** tạo link file giả.
- **Video:** ≥ 8 kênh/playlist thật (freeCodeCamp, Fireship, Google Cloud Tech, Figma, 3Blue1Brown, CrashCourse…).
- **Skills:** 6 nhóm kỹ năng (AI/ML, Web, Data, Product, Design, Soft skills), mỗi nhóm 3 bước.
- **Learning Paths:** 4 lộ trình (AI Explorer, Web Builder, Product & Startup, Data Analyst), mỗi lộ trình 4–5 chặng, tổng thời lượng ước tính, đầu ra.
- Bộ lọc theo chủ đề/cấp độ/loại.

### 04 OPPORTUNITY HUB (/opportunity-hub)

Anchor: `#su-kien`, `#cuoc-thi`, `#hackathon`, `#hoc-bong`, `#jobs`.

- **Sự kiện:** các sự kiện thật của CLB (GALA NJEC 2025, University Meetup 2025, Venture Forum 2026, Meetup #1, #3, Ngày hội Khởi nghiệp VII, Trung thu 2026) với trạng thái Đã diễn ra.
- **Cuộc thi:** NTTU Innovation Startup Challenge, I-Star, Khởi nghiệp Xanh, CYE Junior, Innostar — kèm kết quả CLB đã đạt.
- **Hackathon:** Cardano SEA Hackathon 2026 và các sân chơi liên quan; ghi rõ kết quả.
- **Học bổng / Jobs:** dữ liệu **mẫu** (gắn badge “Mẫu”), không khẳng định thông tin tuyển dụng thật; CTA “Theo dõi fanpage để nhận thông báo”.
- Bộ lọc theo loại/trạng thái; deadline dạng nhãn; item sắp diễn ra (nếu có) nổi bật.

### 05 PROJECT HUB (/project-hub)

Anchor: `#du-an`, `#doi-ngu`, `#thanh-tich`, `#cong-su`.

- **Dự án:** 7 dự án thật (EaAgri, Sports Connect, DIA+, WeaveCarbon, RecycleBike, VietFarm Go, IPUni Market), card gồm lĩnh vực, mô tả, thành tích, trạng thái, đội ngũ (nếu có nguồn), nhu cầu cộng sự (mẫu, gắn nhãn).
- **Team Profile:** đội ngũ EaAgri, Sports Connect, DIA+ (thông tin công khai trong `THONGTIN.md`); WeaveCarbon mô tả thành phần; các dự án còn lại ghi “Đang cập nhật”.
- **Thành tích:** bảng/timeline giải thưởng 2026.
- **Tìm cộng sự:** board vị trí đang mở (mẫu), CTA gửi email tới CLB.
- Bộ lọc theo lĩnh vực.

### 06 MENTOR HUB (/mentor-hub)

Anchor: `#mentors`, `#quy-trinh`, `#yeu-cau`.

- **Mentor Profile:** 5 mentor có tên trong nguồn (Nguyễn Huỳnh Thông, Phạm Đình Tài, Hoàng Thịnh Nhân — mentor EaAgri; ThS. Lưu Thị Mỹ Ngọc, ThS. Cao Quản Huân — mentor DIA+). Chỉ hiển thị thông tin suy ra từ dự án đã đồng hành: lĩnh vực, dự án, vai trò “Mentor dự án”. **Không** bịa chức danh, công ty, số năm kinh nghiệm, ảnh.
- **Quy trình:** 4 bước (gửi yêu cầu → phân loại → kết nối → theo dõi).
- **Mentoring Request:** form client-side gồm họ tên, email, dự án/chủ đề, mục tiêu, thời gian mong muốn; validate bắt buộc; nút mở email soạn sẵn (`mailto:inntechclub@gmail.com`); có thông báo rằng dữ liệu không được lưu.
- CTA “Trở thành mentor” (mailto).

### 07 TECH MARKETPLACE (/marketplace)

Anchor: `#showcase`, `#tools`, `#app`, `#game`, `#dat-hang`.

- **Product Showcase:** sản phẩm thật của hệ sinh thái (EaAgri app/web, Sports Connect, DIA+, WeaveCarbon) + sản phẩm **mẫu** của sinh viên (gắn badge “Mẫu”).
- **Tools/App/Game:** lọc theo loại; game và một số app là dữ liệu mẫu, ghi rõ.
- **Request Development:** form mô tả yêu cầu (tên, email, loại sản phẩm, ngân sách dự kiến, mô tả) → mailto; quy trình nhận yêu cầu 4 bước; gói dịch vụ (Landing page, MVP, AI integration) ghi “Liên hệ báo giá”, không bịa giá.
- Disclaimer: “Marketplace đang ở giai đoạn demo giao diện; các sản phẩm gắn nhãn Mẫu chưa phải sản phẩm chính thức.”

### 08 COMMUNITY (/community)

Anchor: `#thanh-vien`, `#challenge`, `#thanh-tich`, `#tuyen-thanh-vien`.

- **Thành viên:** 4 lãnh đạo thật + 6 ban; số liệu 50+ thành viên đầu tiên; không bịa tên thành viên.
- **Challenge:** 3 challenge mẫu (30 ngày code, design sprint, startup pitch) gắn badge “Mẫu”, có thể chuyển thành nội dung thật sau.
- **Thành tích:** giải thưởng CLB/dự án, I-Star 2026 N4015, công bố khoa học SIEV2026/AIIA 2026.
- **Tuyển thành viên:** quy trình 2 vòng, mốc 2026 (đã qua) + CTA fanpage; ghi “Mùa tuyển tiếp theo sẽ được công bố trên fanpage”.
- **Hoạt động cộng đồng:** Trung thu Sáng tạo 2026.

### 09 BUSINESS CONNECT (/business-connect)

Anchor: `#doi-tac`, `#dich-vu`, `#quy-trinh`, `#lien-he`.

- **Đối tác:** danh sách thật trong `THONGTIN.md` (11 tổ chức/doanh nghiệp + 4 trường), phân nhóm.
- **Dịch vụ:** đặt hàng công nghệ (landing page, web app, MVP, tích hợp AI), hợp tác đào tạo/workshop, tài trợ, tuyển dụng – ghi “Liên hệ để trao đổi”.
- **Quy trình:** 4 bước.
- **Form liên hệ doanh nghiệp:** công ty, người liên hệ, email, nhu cầu → mailto.
- **Case study:** dự án tiêu biểu + giải thưởng.

### 10 ABOUT INNTECH (/about)

Anchor: `#gioi-thieu`, `#gia-tri`, `#to-chuc`, `#doi-tac`, `#lien-he`.

- Sứ mệnh, tầm nhìn, giá trị I-N-N-T-E-C-H, lịch sử/mốc thời gian, ban chủ nhiệm + 6 ban, mạng lưới đối tác, I-Star 2026, công bố khoa học, thông tin liên hệ.
- Nội dung lấy từ `MOTA.md` / `THONGTIN.md`; không thêm số liệu mới.

## 7. Mô hình dữ liệu tĩnh (v1)

Không có CSDL. Dữ liệu nằm trong `src/data/*.ts`, có type rõ ràng:

```ts
type Fake = { sample?: boolean }; // true => hiển thị badge "Mẫu"

type Hub = {
  id: string;          // "student-hub"
  number: string;      // "02"
  name: string;        // "STUDENT HUB"
  tagline: string;     // mô tả tiếng Việt
  href: string;        // "/student-hub"
  sections: { id: string; label: string }[];
  icon: HubIconKey;    // key tra cứu icon, không truyền component qua boundary
};

type Tool = Fake & { name; description; category; pricing; href; tags };
type Resource = Fake & { title; description; type: "doc"|"slide"|"video"; topic; level; duration; source; href? };
type Opportunity = Fake & { title; kind: "event"|"competition"|"hackathon"|"scholarship"|"job"; status: "past"|"upcoming"|"sample"; dateLabel; description; highlight?; href? };
type Project = { slug; name; tag; field; description; award; kind: "award"|"support"; team?: string[]; needs?: string[] };
type Mentor = { name; title?; areas: string[]; projects: string[]; note };
type Product = Fake & { name; description; kind: "tool"|"app"|"game"; platform; tags; href? };
type SearchEntry = { title; description; href; hub: string; keywords: string[]; kind: string };
```

Quy tắc nội dung:
- Thông tin CLB/dự án/giải thưởng: chỉ lấy từ `MOTA.md` / `THONGTIN.md`.
- Dữ liệu chưa kiểm chứng: `sample: true` và UI hiển thị badge **Mẫu**; không dùng tên công ty/người thật cho job/scholarship mẫu.
- Link ngoài: chỉ dùng URL thật, ổn định; không tạo link file nội bộ giả.

## 8. Tìm kiếm

- Index tĩnh gồm: 10 hub, công cụ, học liệu, cơ hội, dự án, mentor, sản phẩm, challenge, dịch vụ.
- Chuẩn hóa tiếng Việt: bỏ dấu, không phân biệt hoa thường, khớp trên title/description/keywords/tags.
- Kết quả nhóm theo hub, tối đa 5 mỗi nhóm + “Xem tất cả trong hub”.
- Không có kết quả: thông điệp + gợi ý 4 hub phổ biến.
- Kết quả là link tới `href` (có thể kèm `#anchor`).
- Không gọi API; chạy hoàn toàn client-side.

## 9. Form và CTA

- Tất cả form dùng `mailto:inntechclub@gmail.com`, subject theo ngữ cảnh, body chứa dữ liệu đã nhập.
- Validate: trường bắt buộc, email đúng định dạng; hiển thị lỗi cạnh trường; không chặn nếu người dùng chưa chọn mục không bắt buộc.
- Không lưu dữ liệu, không gửi ngầm; có ghi chú rõ.
- Nút “Tham gia CLB” trỏ fanpage; “Gửi email” mở mailto.
- Copy prompt/template dùng Clipboard API, có fallback và phản hồi trạng thái.

## 10. Yêu cầu phi chức năng

- **Hiệu năng:** không thêm thư viện UI/animation; trang tĩnh; ảnh hiện có dùng `next/image`; tương tác client gói gọn trong component nhỏ.
- **Responsive:** 360px, 768px, 1024px, 1440px; không tràn ngang; header mobile drawer; grid 1/2/3 cột.
- **Accessibility:** semantic landmarks, heading đúng cấp, focus-visible, aria cho menu/drawer/search/form, keyboard đầy đủ, màu tương phản ≥ 4.5:1 cho text thường, tôn trọng `prefers-reduced-motion`.
- **SEO:** mỗi route có `metadata` riêng (title, description, canonical path); Open Graph; breadcrumb; `lang="vi"`; heading H1 duy nhất mỗi trang.
- **Next.js 16:** đọc tài liệu trong `node_modules/next/dist/docs/` trước khi code; giữ `cacheComponents`, `partialPrefetching`, `reactCompiler`; dùng đúng convention App Router hiện hành.
- **Chất lượng:** `npm run lint` và `npm run build` pass; không lỗi TypeScript; không hydration warning.

## 11. Tiêu chí nghiệm thu

1. Đủ 10 route, truy cập được từ header, footer và lưới hub ở trang chủ; active state đúng.
2. Lưới hub ở `/` hiển thị đúng 01–10, đúng tên/mô tả theo ảnh, responsive.
3. Tìm kiếm trả kết quả đúng cho ít nhất các từ khóa: “AI”, “CV”, “học bổng”, “mentor”, “EaAgri”, “game”, “doanh nghiệp”.
4. Mỗi hub có đủ section con như mục 6, có dữ liệu thật hoặc badge Mẫu.
5. Copy prompt hoạt động; 3 form chính (mentoring, yêu cầu phát triển, liên hệ doanh nghiệp) tạo được mailto hợp lệ.
6. Không có link nội bộ 404; link ngoài mở tab mới an toàn.
7. `npm run lint` + `npm run build` pass; kiểm tra hình ảnh desktop/mobile bởi minimax.
8. Không thay đổi nội dung/sự kiện/dự án đã có trên trang chủ ngoài việc thêm khối hub và điều hướng.

## 12. Rủi ro và cách xử lý

| Rủi ro | Xử lý |
|---|---|
| Bịa thông tin mentor/doanh nghiệp | Chỉ dùng nguồn trong `THONGTIN.md`; ghi “đang cập nhật” khi thiếu |
| Dữ liệu mẫu bị hiểu là thật | Badge **Mẫu** + disclaimer ở Opportunity/Marketplace/Community |
| 10 mục nav quá tải trên desktop | Dropdown “Hubs” + mobile drawer đủ 10 |
| Trang quá dài, nội dung trùng lặp | Hub page chỉ giữ nội dung thuộc hub; About giữ phần giới thiệu; home giữ landing hiện tại |
| Form mailto bị chặn ở một số trình duyệt | Giữ CTA email/fanpage dự phòng; ghi chú rõ |
| Next.js 16 khác bản cũ | Đọc docs trong `node_modules/next/dist/docs/`; build sớm |

## 13. Câu hỏi mở cho Founder

1. Có cần giữ chính xác các số liệu “2.100 giờ mentoring”, “35 triệu đồng” trên hero không? (giữ nguyên trong v1)
2. Có muốn bổ sung ảnh thật của mentor/sự kiện/dự án thay cho card gradient không? (v1 dùng gradient + monogram)
3. Có cần tiếng Anh cho toàn bộ nội dung hay chỉ tên hub? (v1: tiếng Việt, tên hub tiếng Anh)
4. Khi có backend, ưu tiên lưu form nào trước? (mentoring request / business request / đăng dự án)
5. Có cần mục “đăng nhập” cho thành viên trong v2 không?
