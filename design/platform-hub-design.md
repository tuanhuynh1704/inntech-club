# Thiết kế giao diện — INNTECH Platform 10 hub (v1)

- **Ngày:** 16/11/2026
- **Phạm vi:** Giao diện web, desktop-first, responsive, dùng CSS Modules
- **Tham chiếu:** ảnh menu 10 hub do Founder cung cấp + landing hiện tại
- **Đặc tả:** [`specs/inntech-platform-v1.md`](../specs/inntech-platform-v1.md)

---

## 1. Nguyên tắc thiết kế

1. **Giữ nhận diện INNTECH:** nền sáng, navy `#040a26` – `#071340`, xanh `#2254e8`/`#2f6bff`, cyan `#35c7f4`, chữ Be Vietnam Pro, bo góc lớn, đổ bóng mềm.
2. **Hub là điểm đến, không phải tab rời:** mỗi hub có màu nhấn riêng, số thứ tự 01–10, nhưng cùng một khung bố cục để người dùng học cách dùng một lần.
3. **Ảnh tối giản, chữ dẫn đường:** chưa có ảnh thật, dùng gradient + monogram/số lớn + pattern lưới. Không dùng ảnh stock giả làm ảnh CLB.
4. **Rõ nguồn và độ tin cậy:** dữ liệu mẫu có badge “Mẫu”; nội dung đang cập nhật ghi rõ.
5. **Một hành động chính mỗi khối:** tham gia, gửi yêu cầu, xem tài liệu, liên hệ.

## 2. Design tokens

Kế thừa từ `globals.css`:

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--navy-950` | `#040a26` | nền tối, text |
| `--blue-600` | `#2254e8` | CTA chính, link |
| `--blue-500` | `#2f6bff` | hover, focus ring |
| `--cyan-400` | `#35c7f4` | gradient, accent |
| `--ink` | `#08122e` | heading |
| `--muted` | `#5b6785` | mô tả |
| `--line` | `#dfe6f5` | viền card |
| `--surface` | `#f5f8ff` | nền section xen kẽ |

Bổ sung (khai báo trong `hub-ui.module.css`):

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--hub-accent` | theo từng hub | viền/tiêu đề/nút phụ |
| `--hub-soft` | trộn accent 8–12% với trắng | nền chip, badge |
| `--hub-ink` | `color-mix(in srgb, var(--hub-accent) 55%, var(--navy-950))` | chữ nhấn |
| `--radius-pill` | `999px` | chip, nút |
| `--shadow-hover` | `0 22px 48px rgba(8,18,46,.12)` | hover card |

Màu nhấn từng hub:

| Hub | Accent | Gradient gợi ý |
|---|---|---|
| Student | `#2254e8` | navy → blue |
| Learning | `#0e7490` | teal → cyan |
| Opportunity | `#b45309` | amber → vàng |
| Project | `#0f766e` | teal → xanh lá |
| Mentor | `#4f46e5` | indigo → violet |
| Marketplace | `#7c3aed` | violet → hồng |
| Community | `#be123c` | rose → cam |
| Business | `#0f766e` | green → teal |
| About | `#071340` | navy → blue |

Mỗi hub dùng `data-accent` trên wrapper hoặc `style={{ "--hub-accent": ... }}`; không hard-code nhiều nơi.

## 3. Typography

- Font: Be Vietnam Pro (đã có).
- H1 hub: `clamp(2.2rem, 5vw, 3.6rem)`, weight 800, letter-spacing `-0.03em`; tên hub tiếng Anh uppercase, có thể xuống dòng theo từ.
- Eyebrow: 12px, weight 700, uppercase, letter-spacing `.18em`, màu accent.
- H2 section: `clamp(1.6rem, 3vw, 2.3rem)`, weight 700.
- Body: 16px/1.65; mô tả card 14.5px, muted.
- Nhãn nhỏ/badge: 11–12px, weight 600, uppercase.
- Số thứ tự hub (01–10): 13px monospace-ish, letter-spacing `.08em`, muted; ở hub hero dùng số lớn mờ 12–18% làm hoạ tiết.

## 4. Layout

- Container: `min(1200px, 100% - 48px)` desktop; gutter 20px mobile.
- Hub hero: nền gradient tối, grid 2 cột (copy 58% / art 42%); mobile 1 cột.
- Hub body: max-width 1200px, section vertical padding `clamp(56px, 7vw, 96px)`.
- Section xen kẽ: trắng / `--surface`.
- Grid card: `repeat(auto-fill, minmax(min(100%, 280px), 1fr))`; gap 20–24px.
- Danh sách hub ở home: 1 cột, mỗi dòng cao ≥ 76px, chia bằng `border-bottom`, hover đổi nền + dấu `→` dịch sang phải.

### 4.1. Breakpoints

| Breakpoint | Thay đổi |
|---|---|
| ≥ 1024px | Header đầy đủ, grid 3 cột, hero 2 cột |
| 768–1023px | Header thu gọn (Hubs dropdown vẫn còn), grid 2 cột |
| < 768px | Drawer menu, hero 1 cột, grid 1 cột, section padding giảm, form 1 cột, bảng chuyển card |

## 5. Thành phần dùng chung

### 5.1. SiteHeader

- Trái: logo (link `/`).
- Giữa: **Hubs ▾** (Student, Learning, Opportunity, Project, Mentor, Marketplace) + Community + Doanh nghiệp + Về CLB.
- Phải: nút tìm kiếm (icon, mở panel), CTA “Tham gia CLB”.
- Dropdown: panel trắng 2 cột (hub + mô tả ngắn), shadow lớn, mở bằng click/Enter, đóng bằng Esc/click ngoài/chọn link; `aria-expanded`, `aria-controls`, `role="menu"` cho items.
- Mobile: hamburger mở drawer toàn màn hình; danh sách 01–10 theo đúng thứ tự ảnh; CTA cuối; khóa scroll body khi mở; Esc đóng.
- Scroll progress bar giữ nguyên.

### 5.2. HubHero

```
[breadcrumb: Trang chủ / 02 Student Hub]
[eyebrow: HUB 02 · STUDENT]
[H1: STUDENT HUB]
[tagline: Bộ công cụ giúp việc học nhẹ hơn.]
[lead 1–2 câu]
[CTA chính] [CTA phụ]   [meta chips: số mục, cập nhật]
[art: số 02 lớn, pattern, 3 chip nổi]
```
- Nền tối, có 2 vòng sáng mờ (glow) như hero hiện tại.
- Art bên phải là khối gradient + số hub; không dùng ảnh.

### 5.3. SubNav (chip)

- Sticky dưới header ở desktop (`top: 72px`), nền trắng mờ + blur, scroll ngang trên mobile, ẩn scrollbar.
- Chip active theo section đang xem (IntersectionObserver — tùy chọn, có thể chỉ hover/focus ở v1).
- Mỗi chip là anchor `#id`, không dùng JS bắt buộc.

### 5.4. SectionHeading

- Eyebrow nhỏ, H2, mô tả, link “Xem tất cả” bên phải (nếu có).
- Căn trái; không căn giữa để dễ đọc.

### 5.5. Card

- Nền trắng, viền `--line`, radius 22px, padding 22–24px.
- Hover: dịch lên 3px, shadow, viền accent 1px; chỉ khi `hover: hover`.
- Cấu trúc: icon/monogram → title + badge → mô tả → meta chips → action.
- Badge “Mẫu”: vàng nhạt `#fff7e6`, chữ `#92400e`, viền `#fcd34d`.
- Badge “Sắp cập nhật”: xám nhạt.

### 5.6. FilterGrid

- Hàng chip lọc (Tất cả + danh mục), chip active nền navy, chữ trắng.
- Ô tìm nhanh (tùy chọn): input có icon kính lúp, placeholder “Lọc trong hub…”.
- Đếm kết quả: “12 mục · 3 danh mục”.
- Trạng thái rỗng: minh hoạ nhỏ bằng CSS + “Không tìm thấy mục phù hợp” + nút “Xóa bộ lọc”.
- Không có layout shift khi lọc; card giữ chiều cao tối thiểu.

### 5.7. SearchPanel (home)

- Khối lớn trên nền `--surface`, radius 28px, viền, padding 28–36px.
- Input cao 56px, icon kính lúp, phím tắt gợi ý `⌘K` / `Ctrl K`.
- Khi có từ khóa: panel kết quả nổi bên dưới input, tối đa 420px cao, scroll; nhóm theo hub với tiêu đề nhỏ + số kết quả.
- Mỗi kết quả: icon loại, title, mô tả 1 dòng, mũi tên; hover/focus nền xanh nhạt.
- Footer panel: “Enter để mở kết quả đầu tiên · Esc để đóng”.
- Click ngoài đóng panel nhưng giữ từ khóa; nút X xóa.
- Mobile: panel chiếm toàn bộ chiều rộng, kết quả cuộn trong trang nếu cần.

### 5.8. RequestForm

- 2 cột desktop, 1 cột mobile; label trên field, dấu `*` cho bắt buộc.
- Field: input/textarea/select, radius 12px, viền `--line`, focus ring xanh.
- Lỗi: viền đỏ + text 12px dưới field; `aria-invalid`, `aria-describedby`.
- Nút chính “Mở email gửi yêu cầu” + ghi chú “Biểu mẫu không lưu dữ liệu; email sẽ mở trong ứng dụng mail của bạn.”
- Sau khi validate thành công: hiển thị dòng xác nhận “Đã tạo email. Nếu ứng dụng mail không mở, hãy gửi tới inntechclub@gmail.com.”
- Không dùng `alert()`.

### 5.9. PromptCard / CopyButton

- Prompt trong khối `pre` nền navy nhạt, chữ sáng, font mono, wrap.
- Nút “Sao chép” góc trên phải; sau khi copy đổi thành “Đã sao chép” 2 giây; có `aria-live="polite"`.

### 5.10. Footer

- Giữ footer hiện tại, cập nhật cột “Khám phá” thành 2 nhóm: **Hubs** (6 hub) và **Cộng đồng** (Community, Doanh nghiệp, Về CLB), thêm địa chỉ/liên hệ như cũ.
- Thêm dòng “10 hub · I-Star 2026 N4015”.

## 6. Thiết kế trang chủ (01 HOME)

Thứ tự:

1. Header (mới).
2. Hero hiện tại — chỉ đổi CTA chính thành “Khám phá 10 hub” trỏ `#hubs`; giữ CTA fanpage.
3. **Hub Directory + Search** (`id="hubs"`):
   - Tiêu đề: eyebrow “Hệ sinh thái INNTECH”, H2 “10 hub, một nền tảng cho sinh viên.”, mô tả ngắn.
   - Search panel.
   - Danh sách 10 hub: số, tên, mô tả, arrow; hover/focus; mỗi dòng là link.
   - Ghi chú nhỏ: “Một số nội dung đang ở giai đoạn demo, được gắn nhãn Mẫu.”
4. Stats, About, Values, Activities, Projects, Events, Org, Community, Contact — giữ nguyên nội dung hiện tại, chỉ cập nhật anchor/footer nếu cần.
5. Footer mới.

Không đổi thứ tự các section cũ để tránh ảnh hưởng nhận diện.

## 7. Thiết kế trang hub (02–10)

Cấu trúc chung:

```
Header
HubHero (breadcrumb, số, tên, tagline, CTA, art)
SubNav (chip anchor)
Section 1..n (mỗi section có SectionHeading + nội dung riêng)
CrossHubCTA (2–3 hub liên quan)
Footer
```

### 7.1. Student Hub

- Hero art: số 02 + chip “AI Tools”, “CV”, “Prompt”.
- Section AI Tools: FilterGrid 3 cột, 12 item.
- Section Study Tools: grid 4 cột (desktop) 2 (mobile), card gọn hơn.
- Section CV: 2 cột — checklist bên trái, template cards bên phải.
- Section Prompt: FilterGrid dạng list 2 cột, mỗi prompt là card có nút copy.
- Section Templates: 3 card ngang.

### 7.2. Learning Hub

- Hero art: số 03 + chip “Documents”, “Paths”.
- Tài liệu: FilterGrid, chip lọc theo loại/cấp độ, card có source + duration.
- Slide: 4 card workshop (2 thật từ CLB, 2 template), trạng thái file.
- Video: grid 4 cột, card thumbnail gradient + play icon (không nhúng iframe để tránh chậm).
- Skills: 6 card, mỗi card 3 bước đánh số.
- Learning Paths: 4 card lớn, timeline chặng dọc, CTA “Bắt đầu”.

### 7.3. Opportunity Hub

- Hero art: số 04 + chip “Event”, “Hackathon”, “Job”.
- Sự kiện: timeline 2 cột desktop (giống section sự kiện hiện tại nhưng gọn hơn).
- Cuộc thi/Hackathon: bảng card có cột trạng thái + kết quả CLB.
- Học bổng/Jobs: 2 cột, badge Mẫu rõ; banner nhắc theo dõi fanpage.
- Bộ lọc theo loại + trạng thái dùng FilterGrid.

### 7.4. Project Hub

- Hero art: số 05 + chip “7 dự án”.
- Dự án: grid 2 cột, card lớn có monogram gradient, field, award, team, needs.
- Team: 3–4 card hồ sơ đội ngũ (tên thật từ nguồn), avatar chữ cái, dự án, ban.
- Thành tích: timeline/bảng.
- Tìm cộng sự: 3 card vị trí mẫu + CTA mailto.

### 7.5. Mentor Hub

- Hero art: số 06 + chip “Mentoring”.
- Mentor: grid 3 cột, card có avatar chữ cái, tên, lĩnh vực, dự án đồng hành; ghi chú hồ sơ đang cập nhật.
- Quy trình: 4 bước ngang (mobile dọc).
- Form yêu cầu mentoring: form 2 cột + cột thông tin bên cạnh (thời gian phản hồi dự kiến, lưu ý).

### 7.6. Tech Marketplace

- Hero art: số 07 + chip “Apps”, “Games”.
- Showcase: 4 sản phẩm thật + 4 mẫu; card lớn có mockup gradient (không dùng ảnh chụp giả).
- Tools/App/Game: FilterGrid.
- Đặt hàng: form + 3 gói dịch vụ (không giá).
- Disclaimer rõ ở đầu section showcase.

### 7.7. Community

- Hero art: số 08 + chip “50+ members”.
- Thành viên: leadership 4 card + 6 ban.
- Challenge: 3 card mẫu có tiến độ/giải thưởng (mẫu).
- Thành tích: stat strip + danh sách.
- Tuyển thành viên: timeline 2 vòng + CTA; banner “Mùa tiếp theo”.

### 7.8. Business Connect

- Hero art: số 09 + chip “Partners”.
- Đối tác: 2 nhóm, pill/card; không logo giả.
- Dịch vụ: 3–4 card.
- Quy trình: 4 bước.
- Case study: 3 dự án + giải thưởng.
- Form liên hệ: 2 cột.

### 7.9. About

- Hero art: logo memory / số 10.
- Giới thiệu, sứ mệnh/tầm nhìn (2 card), giá trị 7 card, timeline, org, partners, contact.
- Có thể tái sử dụng nội dung landing; giữ nhịp dài hơn các hub khác.

## 8. Motion

- Chỉ dùng scroll reveal hiện có (`data-reveal`) + transition hover/focus.
- Không parallax, không auto-carousel, không animation quá 300ms cho tương tác.
- Tôn trọng `prefers-reduced-motion` (đã có trong globals).
- Search panel: fade/translate 120ms; dropdown header: 140ms.

## 9. Accessibility

- Mỗi trang 1 H1; heading tuần tự.
- Link “bỏ qua nội dung” (skip link) ở đầu trang.
- Icon trang trí `aria-hidden`; nút icon có `aria-label`.
- Mọi thành phần tương tác bằng bàn phím; focus rõ ràng.
- Search panel dùng `role="dialog"` hoặc combobox pattern; thông báo số kết quả qua `aria-live="polite"`.
- Form có `label` thật, không placeholder thay label; thông báo lỗi gắn với field.
- Màu không phải phương tiện duy nhất (trạng thái có text).
- Contrast kiểm tra: chữ trắng trên navy, chữ navy trên trắng, badge vàng đậm trên nền vàng nhạt.

## 10. Nội dung và giọng điệu

- Tiếng Việt tự nhiên, ngắn, hướng hành động; tên hub giữ tiếng Anh theo ảnh.
- Xưng “bạn”, gọi CLB là “INNTECH” hoặc “CLB”.
- Tránh từ ngữ marketing rỗng; ưu tiên lợi ích cụ thể.
- Số liệu và tên riêng phải khớp `MOTA.md` / `THONGTIN.md`.
- Dữ liệu mẫu: ghi “Mẫu” ngay trên badge, không chỉ ở ghi chú cuối.

## 11. Checklist visual QA

- [ ] 10 hub hiển thị đúng thứ tự 01–10 trên home và mobile drawer.
- [ ] Header không tràn ở 768px; dropdown đóng đúng khi click ngoài/Esc.
- [ ] Hero hub không bị cắt số/heading ở 360px.
- [ ] Grid card không so le lệch hàng; card cùng hàng cao bằng nhau.
- [ ] Sticky sub-nav không che heading khi nhảy anchor (`scroll-margin-top`).
- [ ] Search panel không tràn viewport, kết quả cuộn được, focus ring rõ.
- [ ] Form lỗi hiển thị đúng, mailto đúng subject/body.
- [ ] Nút copy có phản hồi; không lỗi khi Clipboard bị chặn.
- [ ] Không có link 404 nội bộ; external link mở tab mới.
- [ ] Ảnh/logo không méo; favicon giữ nguyên.
