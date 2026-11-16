# Nội dung bản đồ nền tảng — INNTECH Platform v1 (10 hub)

**Mục đích:** Tài liệu làm việc trực tiếp cho lập trình viên — cung cấp copy (nội dung viết) và dữ liệu thiết lập cho tất cả 10 hub. Copy bằng tiếng Việt; tên sản phẩm, công cụ, hub giữ tiếng Anh. Không edit code sản phẩm.

**Trạng thái:** Bản đầu (draft) — chờ Founder duyệt.

**Nguồn dữ liệu club (chính thức, không bịa thêm):**
- `MOTA.md` — mô tả tổng quan, sứ mệnh, tầm nhìn, giá trị, hoạt động, số liệu, dự án, sự kiện.
- `THONGTIN.md` — fact sheet chi tiết (dự án, mentor, giải thưởng, đối tác, sự kiện, liên hệ, nguồn).

**Quy trích dẫn:** Mỗi khối dữ liệu club được gắn nguồn ngay dưới, ví dụ `(Nguồn: THONGTIN §7.1)` hoặc `(Nguồn: MOTA §Dấu ấn nổi bật)`. Các ngày tháng, tên người, tên dự án, tên đối tác, giải thưởng, số liệu chỉ được lấy từ hai file này.

**URL bên ngoài:** Chỉ dùng trang chủ / kênh YouTube chính thức của nhà sản xuất. Không tạo liên kết sâu (deep link) có thể 404. Mỗi URL ghi rõ loại: trang chủ, sản phẩm, hoặc kênh YouTube.

---

## 1. Cách dùng tài liệu này

| Thành phần | Ý nghĩa cho implementer |
|---|---|
| Hero copy | eyebrow, H1, tagline (1 dòng), lead (1–2 câu), 2 nhãn CTA, 3 chip meta — đặt vào `HubHero` của từng trang hub. |
| Section copy | section eyebrow, H2, đoạn giới thiệu (nếu có), danh sách thẻ/card với các trường UI cần thiết (title, description, metadata, tags, status). |
| Sample data register | Bảng tất cả mẫu/hạp, lý do gắn mẫu và nhãn UI đề xuất ("Mẫu" / "Đang cập nhật"). |
| Hồ sơ mentor | Chỉ 5 tên có trong `THONGTIN.md`; trường thiếu ghi "Đang cập nhật", không bịa chức danh/công ty/năm kinh nghiệm/ảnh. |
| URL ngoài | Danh sách công cụ/tài liệu/video chính thức, kèm loại liên kết. |
| Tự kiểm tra cuối | Xác nhận trích dẫn, URL chính thức, nhãn mẫu, số lượng tối thiểu theo spec. |

---

## 2. Giọng điệu và thuật ngữ

- Ngôn ngữ trang: tiếng Việt. Tên hub giữ tiếng Anh theo hình thiết kế: **HOME, STUDENT HUB, LEARNING HUB, OPPORTUNITY HUB, PROJECT HUB, MENTOR HUB, TECH MARKETPLACE, COMMUNITY, BUSINESS CONNECT, ABOUT INNTECH**.
- Xưng hô: "bạn"; gọi CLB là "INNTECH" hoặc "CLB".
- Ngắn gọn, hướng hành động, ưu tiên lợi ích cụ thể; tránh từ marketing rỗng ("tối ưu nhất", "không thể cưỡng lại"…).
- Số liệu và tên riêng phải khớp `MOTA.md` / `THONGTIN.md`.
- Dữ liệu mẫu: ghi nhãn "Mẫu" ngay trên badge, không chỉ ở ghi chú cuối.
- Cách nói disclaimer dữ liệu mẫu: "Nội dung này đang ở giai đoạn demo giao diện và đang được cập nhật." / "Dữ liệu mẫu, chưa phải thông tin chính thức."
- Hạn chế dùng: tên công ty/người thật cho việc làm hay học bổng mẫu; ngày hết hạn mà không có nguồn; ảnh stock giả làm ảnh CLB/mentor.

---

## 3. Tổng quan 10 hub

| # | Hub | Route | Mô tả ngắn (tagline hero) | Màu nhấn (accent) | Sections chính |
|---|-----|-------|---------------------------|-------------------|----------------|
| 01 | HOME | `/` | Trang chủ, tìm kiếm, nội dung nổi bật | `#071340` (navy) | Hero, Hub Directory + Search, Stats, Giới thiệu, Giá trị, Hoạt động, Dự án, Sự kiện, Tổ chức, Cộng đồng, Liên hệ |
| 02 | STUDENT HUB | `/student-hub` | Bộ công cụ giúp việc học nhẹ hơn. | `#2254e8` | AI Tools, Study Tools, CV, Prompt Library, Templates |
| 03 | LEARNING HUB | `/learning-hub` | Kho học liệu và lộ trình cho sinh viên. | `#0e7490` | Tài liệu, Slide, Video, Skills, Learning Paths |
| 04 | OPPORTUNITY HUB | `/opportunity-hub` | Cơ hội cho sinh viên NTTU. | `#b45309` | Sự kiện, Cuộc thi, Hackathon, Học bổng, Jobs |
| 05 | PROJECT HUB | `/project-hub` | Không gian dự án của INNTECH. | `#0f766e` | Dự án, Team Profile, Thành tích, Tìm cộng sự |
| 06 | MENTOR HUB | `/mentor-hub` | Mạng lưới mentor đồng hành dự án. | `#4f46e5` | Mentor, Quy trình, Yêu cầu mentoring |
| 07 | TECH MARKETPLACE | `/marketplace` | Chợ sản phẩm công nghệ của sinh viên. | `#7c3aed` | Product Showcase, Tools/App/Game, Đặt hàng phát triển |
| 08 | COMMUNITY | `/community` | Cộng đồng thành viên INNTECH. | `#be123c` | Thành viên, Challenge, Thành tích, Tuyển thành viên |
| 09 | BUSINESS CONNECT | `/business-connect` | Kết nối doanh nghiệp với INNTECH. | `#0f766e` | Đối tác, Dịch vụ, Quy trình, Liên hệ doanh nghiệp |
| 10 | ABOUT INNTECH | `/about` | Giới thiệu câu lạc bộ INNTECH. | `#071340` | Giới thiệu, Sứ mệnh/Tầm nhìn, Giá trị, Tổ chức, Đối tác, Liên hệ |

**Breadcrumb trang hub:** `Trang chủ / <Tên Hub>` (ví dụ: `Trang chủ / STUDENT HUB`).
**Sub-nav:** chip anchor tới các section trong trang (ví dụ `#ai-tools`, `#study-tools`…).

---

## 4. HOME (/)

### 4.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | Câu lạc bộ Công nghệ và Sáng tạo · NTTU |
| H1 | Nơi sinh viên biến ý tưởng công nghệ thành dự án thật. |
| Tagline | Kết nối sinh viên, tri thức và nguồn lực để kiến tạo sản phẩm có giá trị. |
| Lead | INNTECH CLUB là cộng đồng học thuật – khởi nghiệp của sinh viên Trường Đại học Nguyễn Tất Thành, hoạt động dưới sự quản lý và định hướng của NIIC và NIIE. (Nguồn: MOTA §Thông tin nhanh) |
| CTA chính | "Khám phá 10 hub" → `#hubs` |
| CTA phụ | "Fanpage INNTECH" → `https://www.facebook.com/inntechclub` (mở tab mới) |
| Chip meta (3) | NIIC × NIIE · EST. 2025 · I-STAR 2026 N4015 |

### 4.2 Hub Directory + Search (id="hubs")

- Section eyebrow: Hệ sinh thái INNTECH
- H2: 10 hub, một nền tảng cho sinh viên.
- Giới thiệu: Tìm hub, công cụ, tài liệu, cơ hội, dự án, mentor, sản phẩm trong một lần tìm kiếm.
- Ô tìm kiếm: placeholder "Tìm hub, công cụ, tài liệu, cơ hội…", phím `/` hoặc `Ctrl/Cmd+K` mở, `Esc` đóng/xóa, Enter mở kết quả đầu tiên.
- Danh sách 10 hub (số 01–10, tên tiếng Anh, mô tả tiếng Việt, mũi tên, link route) — theo bảng phần 3.
- Ghi chú nhỏ: "Một số nội dung đang ở giai đoạn demo, được gắn nhãn Mẫu."
- Kết quả tìm kiếm nhóm theo hub, tối đa 5 mỗi nhóm, có nút "Xem tất cả trong hub"; trạng thái rỗng hiện thông điệp + gợi ý 4 hub phổ biến.

---

## 5. STUDENT HUB (/student-hub)

### 5.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 02 · STUDENT |
| H1 | STUDENT HUB |
| Tagline | Bộ công cụ giúp việc học nhẹ hơn. |
| Lead | Tập hợp công cụ AI, công cụ học tập, mẫu CV, thư viện prompt và template để sinh viên NTTU học tập và làm dự án hiệu quả hơn. |
| CTA chính | "Xem tất cả công cụ" → `#ai-tools` |
| CTA phụ | "Tải mẫu CV" → `#cv` |
| Chip meta (3) | 12 AI Tools · 8 Study Tools · 8 Prompt |

### 5.2 AI Tools (≥ 10 công cụ thật)

Section eyebrow: Trí tuệ nhân tạo
H2: AI Tools — hỗ trợ học tập và sáng tạo
Giới thiệu: Các công cụ AI phổ biến, dùng thử ngay trên trang chủ của nhà phát triển. Mức giá chỉ mang tham chiếu (Free / Freemium / Trả phí), xem chi tiết tại trang liên kết.

Danh sách thẻ (trường: title, description, category, pricing, href, tags, status):

1. **ChatGPT** — Trợ lý AI hội thoại, viết nội dung, giải quyết bài tập, lập trình. | Thể loại: Trợ lý AI | Mức giá: Free / Trả phí | Nguồn: chat.openai.com (trang chủ) | Tags: AI, viết, code | Status: Thực tế
2. **Claude** — Trợ lý AI của Anthropic, khả năng xử lý văn bản dài và lập trình. | Thể loại: Trợ lý AI | Mức giá: Free / Trả phí | Nguồn: claude.ai (trang chủ) | Tags: AI, viết | Status: Thực tế
3. **Gemini** — Trợ lý AI của Google, tích hợp với hệ sinh thái Google. | Thể loại: Trợ lý AI | Mức giá: Free / Trả phí | Nguồn: gemini.google.com (trang chủ) | Tags: AI, tìm kiếm | Status: Thực tế
4. **NotebookLM** — Công cụ ghi chú nghiên cứu của Google, tóm tắt tài liệu bạn upload. | Thể loại: Nghiên cứu | Mức giá: Free | Nguồn: notebooklm.google.com (trang chủ) | Tags: AI, tài liệu | Status: Thực tế
5. **Perplexity** — Công cụ tìm kiếm AI trích dẫn nguồn rõ ràng. | Thể loại: Tìm kiếm | Mức giá: Free / Trả phí | Nguồn: perplexity.ai (trang chủ) | Tags: AI, nghiên cứu | Status: Thực tế
6. **GitHub Copilot** — Trợ tác lập trình AI trong trình chỉnh sửa mã. | Thể loại: Lập trình | Mức giá: Trả phí (có gói miễn phí cho sinh viên) | Nguồn: github.com/features/copilot (trang sản phẩm) | Tags: AI, code | Status: Thực tế
7. **Canva AI** — Thiết kế bài giảng, slide, mạng xã hội bằng AI. | Thể loại: Thiết kế | Mức giá: Free / Freemium | Nguồn: canva.com (trang chủ) | Tags: AI, thiết kế | Status: Thực tế
8. **Figma AI** — Tính năng AI trong công cụ thiết kế giao diện Figma. | Thể loại: Thiết kế | Mức giá: Free / Freemium | Nguồn: figma.com (trang chủ) | Tags: AI, UI/UX | Status: Thực tế
9. **Grammarly** — Kiểm tra chính tả, ngữ pháp và phong cách viết tiếng Anh. | Thể loại: Viết | Mức giá: Free / Freemium | Nguồn: grammarly.com (trang chủ) | Tags: AI, viết | Status: Thực tế
10. **QuillBot** — Dùng lại câu (paraphrase) và tóm tắt văn bản. | Thể loại: Viết | Mức giá: Free / Freemium | Nguồn: quillbot.com (trang chủ) | Tags: AI, viết | Status: Thực tế

### 5.3 Study Tools (≥ 8 công cụ)

Section eyebrow: Công cụ học tập
H2: Study Tools — quản lý kiến thức và công việc
Giới thiệu: Công cụ lưu trữ, lên lịch, trích dẫn và thiết kế cho việc học hàng ngày.

Danh sách thẻ (title, description, category, pricing, href, tags, status):

1. **Notion** — Ghi chú, quản lý công việc, cơ sở dữ liệu cá nhân. | Thể loại: Ghi chú | Mức giá: Free / Freemium | Nguồn: notion.so (trang chủ) | Tags: ghi chú, quản lý | Status: Thực tế
2. **Trello** — Bảng Kanban quản lý dự án nhóm. | Thể loại: Quản lý dự án | Mức giá: Free / Freemium | Nguồn: trello.com (trang chủ) | Tags: quản lý, nhóm | Status: Thực tế
3. **Google Workspace** — Dokument, bảng tính, trình trình diễn, email học tập. | Thể loại: Văn phòng | Mức giá: Free (dành cho giáo dục) / Trả phí | Nguồn: workspace.google.com (trang chủ) | Tags: văn phòng, đám mây | Status: Thực tế
4. **Zotero** — Quản lý tài liệu tham khảo và trích dẫn nghiên cứu. | Thể loại: Nghiên cứu | Mức giá: Free | Nguồn: zotero.org (trang chủ) | Tags: trích dẫn, nghiên cứu | Status: Thực tế
5. **Miro** — Bảng trắng trực tuyến triển khai ý tưởng, tư duy thiết kế. | Thể loại: Tư duy thiết kế | Mức giá: Free / Freemium | Nguồn: miro.com (trang chủ) | Tags: bảng trắng, thiết kế | Status: Thực tế
6. **Overleaf** — Trình chỉnh sửa LaTeX cộng tác viết bài khoa học. | Thể loại: Viết khoa học | Mức giá: Free / Freemium | Nguồn: overleaf.com (trang chủ) | Tags: LaTeX, khoa học | Status: Thực tế
7. **Obsidian** — Ghi chú liên kếtKnowledge base cục bộ. | Thể loại: Ghi chú | Mức giá: Free (cá nhân) | Nguồn: obsidian.md (trang chủ) | Tags: ghi notas, liên kết | Status: Thực tế
8. **Anki** — Thẻ ôn tập theo khoảng cách lặp (spaced repetition). | Thể loại: Ôn tập | Mức giá: Free | Nguồn: ankiweb.net (trang chủ) | Tags: ôn tập, ghi nhớ | Status: Thực tế

### 5.4 CV

Section eyebrow: Hồ sơ ứng tuyển
H2: CV — checklist và mẫu hồ sơ
Giới thiệu: Danh sách kiểm tra trước khi gửi CV và liên kết tới thư viện mẫu bên ngoài. Hãy cá nhân hóa mẫu trước khi dùng.

Checklist CV (8–10 mục):
- Thông tin liên hệ rõ ràng (họ tên, email, điện thoại, liên kết portfolio/GitHub).
- Mục tiêu nghề nghiệp ngắn gọn, phù hợp vị trí ứng tuyển.
- Học vấn: trường, ngành, thời gian, điểm tốt nghiệp (nếu cao).
- Kỹ năng kỹ thuật và kỹ năng mềm, phân loại rõ.
- Dự án: tên, vai trò, công nghệ, kết quả (nếu có).
- Kinh nghiệm làm việc / thực tập (nếu có).
- Giải thưởng, chứng chỉ, học bổng.
- Hoạt động ngoài giờ học, tình nguyện.
- Kiểm tra chính tả và ngữ pháp trước khi gửi.
- Lưu dưới dạng PDF, đặt tên file rõ ràng.

Mẫu CV / portfolio (3–4 mẫu, liên kết thư viện bên ngoài, gắn nhãn "Mẫu"):
- Mẫu CV đơn giản cho sinh viên mới — Canva template library (canva.com, trang chủ) | Status: Mẫu
- Mẫu portfolio thiết kế — Figma community (figma.com, trang chủ) | Status: Mẫu
- Mẫu CV kỹ thuật / lập trình — GitHub template repository (github.com, trang chủ) | Status: Mẫu
- Mẫu báo cáo Practicum / áp dụng — Notion template gallery (notion.so, trang chủ) | Status: Mẫu

### 5.5 Prompt Library (≥ 8 prompt thật)

Section eyebrow: Thư viện lệnh
H2: Prompt Library — sao chép và dùng ngay
Giới thiệu: Prompt mẫu chia theo nhóm. Nhấn "Sao chép" để lấy nội dung, sau đó dán vào công cụ AI bạn dùng.

Danh sách prompt (title, nội dung prompt, nhóm, tags, status):

1. **Giải thích khái niệm như người mới** — "Giải thích khái niệm [chủ đề] như thể tôi là người mới bắt đầu, kèm ví dụ thực tế và một bài tập nhỏ để kiểm tra 이해." | Nhóm: Học tập | Tags: giải thích, học tập | Status: Mẫu nội dung (dùng được)
2. **Tóm tắt tài liệu** — "Tóm tắt tài liệu sau thành các điểm chính và tạo danh sách thẻ ôn tập Anki: [dán nội dung]." | Nhóm: Học tập | Tags: tóm tắt, ôn tập | Status: Mẫu nội dung
3. **Viết lại văn phong học thuật** — "Viết lại đoạn văn này theo phong cách học thuật, giữ nguyên ý nghĩa và trích dẫn nguồn: [dán đoạn văn]." | Nhóm: Viết | Tags: viết, học thuật | Status: Mẫu nội dung
4. **Dàn ý báo cáo khoa học** — "Tạo dàn ý báo cáo khoa học về [chủ đề] bao gồm: phần mở đầu, phương pháp, kết quả, kết luận và tài liệu tham khảo." | Nhóm: Viết | Tags: báo cáo, dàn ý | Status: Mẫu nội dung
5. **Viết hàm xử lý lỗi** — "Viết hàm [mô tả chức năng] bằng [ngôn ngữ], thêm chú thích tiếng Việt và xử lý lỗi cơ bản." | Nhóm: Code | Tags: lập trình, hàm | Status: Mẫu nội dung
6. **Giải thích lỗi lập trình** — "Giải thích lỗi sau đây và đưa ra cách sửa từng bước: [dán thông báo lỗi]." | Nhóm: Code | Tags: debug, lập trình | Status: Mẫu nội dung
7. **So sánh phương pháp nghiên cứu** — "So sánh [phương pháp A] và [phương pháp B] về [chủ đề] theo bảng: ưu điểm, nhược điểm, trường hợp sử dụng." | Nhóm: Nghiên cứu | Tags: nghiên cứu, so sánh | Status: Mẫu nội dung
8. **Tóm tắt tài liệu tham khảo** — "Tìm 5 tài liệu tham khảo uy tín về [chủ đề] và tóm tắt các điểm chính của mỗi tài liệu." | Nhóm: Nghiên cứu | Tags: nghiên cứu, tài liệu | Status: Mẫu nội dung
9. **Tóm tắt hồ sơ CV** — "Viết phần tóm tắt hồ sơ (CV summary) cho vị trí [trình vị], nhấn mạnh kỹ năng [kỹ năng]." | Nhóm: CV | Tags: CV, ứng tuyển | Status: Mẫu nội dung
10. **Diễn đạt kinh nghiệm làm việc** — "Diễn dịch kinh nghiệm làm việc tại [công ty/dự án] thành các bullet point mạnh mẽ, định lượng thành quả: [dán mô tả thô]." | Nhóm: CV | Tags: CV, ứng tuyển | Status: Mẫu nội dung

### 5.6 Templates

Section eyebrow: Mẫu bản thiết kế
H2: Templates — slide, báo cáo, project brief
Giới thiệu: Mẫu slide trình bày, báo cáo và bref dự án. Ưu tiên liên kết tới thư viện bên ngoài ổn định; nếu chưa có file thì ghi "Sắp cập nhật", không tạo liên kết file giả.

Danh sách mẫu (title, loại, mô tả, href, status):
- Mẫu slide workshop AI cơ bản — Slide | Mẫu slide cho workshop nội bộ | Liên kết thư viện bên ngoài (canva.com / figma.com/learn, trang chủ) | Status: Sắp cập nhật
- Mẫu báo cáo dự án — Báo cáo | Cấu trúc báo cáo tiến độ dự án CLB | Tệp nội bộ, đang chuẩn hóa | Status: Sắp cập nhật
- Mẫu project brief — Project brief | Bref ngắn gọn ý tưởng dự án trước khi phát triển | Liên kết Notion template (notion.so, trang chủ) | Status: Mẫu

---

## 6. LEARNING HUB (/learning-hub)

### 6.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 03 · LEARNING |
| H1 | LEARNING HUB |
| Tagline | Kho học liệu và lộ trình cho sinh viên. |
| Lead | Học liệu, slide, video, nhóm kỹ năng và lộ trình học từ MDN, freeCodeCamp, roadmap.sh, Google AI, Coursera, Figma Learn, Harvard CS50 và nhiều nguồn khác. |
| CTA chính | "Bắt đầu tài liệu" → `#tai-lieu` |
| CTA phụ | "Xem lộ trình" → `#lo-trinh` |
| Chip meta (3) | ≥10 tài liệu · ≥8 kênh video · 4 lộ trình học |

### 6.2 Tài liệu (≥ 10 học liệu thật)

Section eyebrow: Tài liệu học tập
H2: Tài liệu — học liệu trực tuyến
Giới thiệu: Học liệu trực tuyến từ các nguồn chính thức. Mỗi item có chủ đề, loại, cấp độ, thời lượng ước tính và nguồn.

Danh sách tài liệu (title, description, topic, type, level, duration, source, href, status):

1. **MDN Web Docs** — Học liệu phát triển web chuẩn (HTML, CSS, JavaScript). | Chủ đề: Web development | Loại: Tài liệu tham khảo | Cấp độ: Tất cả | Thời lượng: Tự học | Nguồn: developer.mozilla.org (trang chủ) | Status: Thực tế
2. **freeCodeCamp** — Khoá học lập trình miễn phí, dự án thực hành và chứng chỉ. | Chủ đề: Lập trình | Loại: Khoá học tương tác | Cấp độ: Người mới | Thời lượng: 300+ giờ | Nguồn: freecodecamp.org (trang chủ) | Status: Thực tế
3. **roadmap.sh** — Lộ trình học phát triển web, giao diện, máy chủ, đường dẫn nghề. | Chủ đề: Lộ trình nghề | Loại: Lộ trình trực quan | Cấp độ: Người mới | Thời lượng: Tùy lộ trình | Nguồn: roadmap.sh (trang chủ) | Status: Thực tế
4. **Kaggle** — Bộ dữ liệu, notebook và cộng đồng khoa học dữ liệu. | Chủ đề: Data science | Loại: Nền tảng dữ liệu | Cấp độ: Tất cả | Thời lượng: Tự học | Nguồn: kaggle.com (trang chủ) | Status: Thực tế
5. **Google AI** — Học liệu và công cụ AI của Google (Gemini, máy học). | Chủ đề: AI / Máy học | Loại: Học liệu AI | Cấp độ: Tất cả | Thời lượng: Tự học | Nguồn: ai.google (trang chủ) | Status: Thực tế
6. **Coursera** — Khoá học trực tuyến từ trường đại học và doanh nghiệp. | Chủ đề: Đa lĩnh vực | Loại: Khoá học trực tuyến | Cấp độ: Tất cả | Thời lượng: 4–12 tuần/khoá | Nguồn: coursera.org (trang chủ) | Status: Thực tế
7. **Figma Learn** — Học thiết kế giao diện và tạo mẫu trong Figma. | Chủ đề: UI/UX design | Loại: Học liệu thiết kế | Cấp độ: Người mới | Thời lượng: Tự học | Nguồn: figma.com/learn (trang sản phẩm) | Status: Thực tế
8. **Harvard CS50** — Khoá học lập trình mở của Đại học Harvard. | Chủ đề: Khoa học máy tính | Loại: Khoá học mở | Cấp độ: Người mới | Thời lượng: 11 tuần | Nguồn: cs50.harvard.edu (trang chủ) | Status: Thực tế
9. **TypeScript Handbook** — Hướng dẫn chính thức về TypeScript. | Chủ đề: Lập trình | Loại: Tài liệu tham khảo | Cấp độ: Trung cấp | Thời lượng: Tự học | Nguồn: typescriptlang.org (trang chủ) | Status: Thực tế
10. **React.dev** — Tài liệu chính thức của React (React 19+). | Chủ đề: Lập trình giao diện | Loại: Tài liệu tham khảo | Cấp độ: Trung cấp | Thời lượng: Tự học | Nguồn: react.dev (trang chủ) | Status: Thực tế

### 6.3 Slide

Section eyebrow: Bản trình bày
H2: Slide — workshop của CLB và mẫu slide
Giới thiệu: Chủ đề workshop đã tổ chức của CLB và mẫu slide trình bày. Nếu chưa có file tải về thì ghi "Sắp cập nhật", không tạo liên kết file giả.

Danh sách slide (title, chủ đề, nguồn, trạng thái file, status):

1. **AI cơ bản — Workshop CLB** | Chủ đề: AI cơ bản | Nguồn: Workshop nội bộ INNTECH | Trạng thái: Sắp cập nhật | Status: Sắp cập nhật
2. **Web2 → Web3 — Workshop CLB** | Chủ đề: Web3 / Hackathon | Nguồn: University Meetup #3 (27/08/2026) | Trạng thái: Sắp cập nhật | Status: Sắp cập nhật
3. **Gọi vốn cho startup — Workshop CLB** | Chủ đề: Gọi vốn | Nguồn: University Meetup #1 (19/07/2026) | Trạng thái: Sắp cập nhật | Status: Sắp cập nhật
4. **Kỹ năng thuyết trình — Workshop CLB** | Chủ đề: Truyền thông | Nguồn: Đào tạo nội bộ INNTECH | Trạng thái: Sắp cập nhật | Status: Sắp cập nhật
5. **Mẫu slide trình bày chung** | Chủ đề: Mẫu thiết kế | Nguồn: Thư viện mẫu bên ngoài (figma.com/learn / canva.com, trang chủ) | Trạng thái: Liên kết ngoài | Status: Mẫu

### 6.4 Video (≥ 8 kênh/playlist thật)

Section eyebrow: Video học tập
H2: Video — kênh và playlist học trực tuyến
Giới thiệu: Kênh YouTube chính thức để học lập trình, thiết kế và khoa học dữ liệu. Thẻ hiển thị ảnh gradient + biểu tượng phát, không nhúng iframe để tránh chậm trang.

Danh sách video (title, loại, channel, href, status):

1. **freeCodeCamp** — Kênh hướng dẫn lập trình miễn phí. | Loại: Kênh YouTube | Nguồn: youtube.com/@freecodecamp (kênh) | Status: Thực tế
2. **Fireship** — Code nhanh, công nghệ mới trong 100 giây. | Loại: Kênh YouTube | Nguồn: youtube.com/@Fireship (kênh) | Status: Thực tế
3. **Google Cloud Tech** — Học điện toán đám mây và AI của Google. | Loại: Kênh YouTube | Nguồn: youtube.com/@GoogleCloudTech (kênh) | Status: Thực tế
4. **Figma** — Hướng dẫn thiết kế giao diện từ chính Figma. | Loại: Kênh YouTube | Nguồn: youtube.com/@Figma (kênh) | Status: Thực tế
5. **3Blue1Brown** — Giải thích toán học và máy học bằng hình ảnh. | Loại: Kênh YouTube | Nguồn: youtube.com/@3blue1brown (kênh) | Status: Thực tế
6. **CrashCourse** — Khoá học ngắn gọn đa chủ đề (khoa học, kỹ thuật…). | Loại: Kênh YouTube | Nguồn: youtube.com/@crashcourse (kênh) | Status: Thực tế
7. **Google Developers** — Kênh chính thức cho nhà phát triển Google. | Loại: Kênh YouTube | Nguồn: youtube.com/@GoogleDevelopers (kênh) | Status: Thực tế
8. **Traversy Media** — Hướng dẫn phát triển web thực tế. | Loại: Kênh YouTube | Nguồn: youtube.com/@TraversyMedia (kênh) | Status: Thực tế

### 6.5 Skills

Section eyebrow: Nhóm kỹ năng
H2: Skills — 6 nhóm kỹ năng, mỗi nhóm 3 bước

Danh sách kỹ năng (group, bước 1, bước 2, bước 3, status):

1. **AI / Machine Learning** — Học Python → Học thư viện máy học → Xây dựng mô hình đơn giản. | Status: Thực tế
2. **Web Development** — HTML/CSS → JavaScript → Framework React/Next.js. | Status: Thực tế
3. **Data Analysis** — Excel/SQL → Trực quan hóa dữ liệu → Suy luận thống kê. | Status: Thực tế
4. **Product & Startup** — Nghiên cứu người dùng → Xây dựng MVP → Kiểm thử thị trường. | Status: Thực tế
5. **Design (UI/UX)** — Nguyên tắc thiết kế → Công cụ Figma → Kiểm thử dùng thử. | Status: Thực tế
6. **Soft Skills** — Truyền đạt thuyết trình → Làm việc nhóm → Quản lý thời gian. | Status: Thực tế

### 6.6 Learning Paths (4 lộ trình)

Section eyebrow: Lộ trình học
H2: Learning Paths — 4 lộ trình chính

Danh sách lộ trình (name, stages, thời lượng ước tính, đầu ra, status):

1. **AI Explorer** — 5 chặng: Python cơ bản → Dữ liệu → Máy học giám sát → Mô hình ngôn ngữ → Dự án AI nhỏ. | Thời lượng: 8–12 tuần | Đầu ra: Xây dựng được ứng dụng AI đơn giản. | Status: Thực tế
2. **Web Builder** — 4 chặng: HTML/CSS → JavaScript → React → Next.js và triển khai. | Thời lượng: 10–14 tuần | Đầu ra: Có trang web/công web cá nhân. | Status: Thực tế
3. **Product & Startup** — 4 chặng: Ý tưởng → Nghiên cứu người dùng → MVP → Gọi vốn/phiên bản đầu. | Thời lượng: 8–12 tuần | Đầu ra: Có bref và MVP khởi nghiệp. | Status: Thực tế
4. **Data Analyst** — 4 chặng: Excel/SQL → Trực quan hóa → Thống kê → Báo cáo dữ liệu. | Thời lượng: 8–10 tuần | Đầu ra: Có bảng điều khiển dữ liệu đầu tiên. | Status: Thực tế

---

## 7. OPPORTUNITY HUB (/opportunity-hub)

### 7.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 04 · OPPORTUNITY |
| H1 | OPPORTUNITY HUB |
| Tagline | Cơ hội cho sinh viên NTTU. |
| Lead | Sự kiện, cuộc thi, hackathon của CLB; học bổng và việc làm (dữ liệu mẫu, theo dõi fanpage để nhận thông báo chính thức). |
| CTA chính | "Xem sự kiện" → `#su-kien` |
| CTA phụ | "Theo dõi fanpage" → `https://www.facebook.com/inntechclub` |
| Chip meta (3) | Sự kiện · Cuộc thi · Hackathon |

### 7.2 Sự kiện (thực tế, trạng thái: Đã diễn ra)

Section eyebrow: Sự kiện CLB
H2: Sự kiện — dấu mốc INNTECH
Giới thiệu: Các sự kiện thật của CLB đã tổ chức hoặc đồng hành, theo `THONGTIN §6` và `MOTA §Sự kiện tiêu biểu`.

Danh sách sự kiện (title, ngày, địa điểm, quy mô/ghi chú, trạng thái):

1. **GALA NJEC 2025 — Lễ ra mắt CLB** | 16/11/2025 | Hội trường A.803, NTTU | Hơn 50 thành viên đầu tiên | Đã diễn ra
2. **NTTU – University Meetup 2025** | 2025 | NTTU | Khoảng 200 người tham dự | Đã diễn ra
3. **Venture Forum 2026** | 12/06/2026 | TP. Hồ Chí Minh | Hơn 500 lãnh đạo, chủ đề M&A | Đã diễn ra
4. **University Meetup #1** | 19/07/2026 | Phòng A801, NTTU | "Hiểu Quỹ đầu tư – Nâng cao cơ hội gọi vốn cho Startup trẻ", hơn 60 lượt đăng ký | Đã diễn ra
5. **University Meetup #3** | 27/08/2026 | Phòng D205, NTTU | "Từ Web2 đến Web3", 72 lượt đăng ký, hơn 40 người tham dự | Đã diễn ra
6. **Ngày hội Khởi nghiệp và Tìm kiếm Ý tưởng Sáng tạo lần VII – 2026** | 2026 | NTTU | Gian hàng INNTECH, minigame, quà tặng Canva Pro | Đã diễn ra
7. **Trung thu Sáng tạo 2026** | 2026 | Mỹ Yên (Tây Ninh), Song Phú (Vĩnh Long) | 35 học sinh, 800 phần quà; 20 phần quà | Đã diễn ra

### 7.3 Cuộc thi (thực tế, kèm kết quả CLB)

Section eyebrow: Cuộc thi
H2: Cuộc thi — INNTECH đã đạt

Danh sách cuộc thi (title, loại, kết quả CLB, trạng thái):

1. **NTTU Innovation Startup Challenge 2026** | Cuộc thi khởi nghiệp | Á quân (EaAgri); Quý quân (WeaveCarbon) | 2026
2. **I-Star 2026** | Cuộc thi CLB/sinh viên | Đại diện NTTU, mã số N4015 | 2026
3. **Khởi nghiệp Xanh lần thứ 12 (2026)** | Cuộc thi khởi nghiệp | Top chung kết toàn quốc (EaAgri) | 2026
4. **CYE Junior Vietnam 2026** | Cuộc thi khởi nghiệp | Top 10 (DIA+) | 2026
5. **Innostar** | Cuộc thi khởi nghiệp | Top 60 vòng bán kết (RecycleBike) | 2026

(Nguồn: THONGTIN §8; MOTA §Dấu ấn nổi bật)

### 7.4 Hackathon

Section eyebrow: Hackathon
H2: Hackathon — sân chơi lập trình

Danh sách hackathon (tên, năm, kết quả CLB, status):

1. **Cardano SEA Hackathon 2026** | Giải Ba hạng mục AI (Sports Connect) | 2026 | Status: Thực tế

(Nguồn: THONGTIN §7.2, §8)

### 7.5 Học bổng (dữ liệu mẫu)

Section eyebrow: Học bổng
H2: Học bổng — theo dõi fanpage
Giới thiệu: Dữ liệu mẫu, không khẳng định thông tin tuyển học bổng thật. CTA: "Theo dõi fanpage để nhận thông báo".

Danh sách mẫu (title, loại, mô tả, status, nhãn UI):

1. **Học bổng học sinh NTTU (mẫu)** | Học bổng | Thông tin đang cập nhật | Status: Sample | Nhãn: "Mẫu"
2. **Học bổng doanh nghiệp cộng tác (mẫu)** | Học bổng | Thông tin đang cập nhật | Status: Sample | Nhãn: "Mẫu"

### 7.6 Jobs (dữ liệu mẫu)

Section eyebrow: Việc làm
H2: Jobs — theo dõi fanpage
Giới thiệu: Dữ liệu mẫu, không dùng tên công ty thật cho tuyển dụng mẫu. CTA: "Theo dõi fanpage để nhận thông báo".

Danh sách mẫu (title, loại, mô tả, status, nhãn UI):

1. **Vị trí thực sinh phát triển phần mềm (mẫu)** | Job | Thông tin đang cập nhật | Status: Sample | Nhãn: "Mẫu"
2. **Vị trí phầnnership sản phẩm (mẫu)** | Job | Thông tin đang cập nhật | Status: Sample | Nhãn: "Mẫu"

---

## 8. PROJECT HUB (/project-hub)

### 8.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 05 · PROJECT |
| H1 | PROJECT HUB |
| Tagline | Không gian dự án của INNTECH. |
| Lead | 7 dự án được CLB hỗ trợ, hơn 2.100 giờ mentoring và 35 triệu đồng hỗ trợ (dữ liệu theo hồ sơ I-Star 2026). |
| CTA chính | "Xem 7 dự án" → `#du-an` |
| CTA phụ | "Tìm cộng sự" → `#cong-su` |
| Chip meta (3) | 7 dự án · 2.100 giờ mentoring · 35 triệu đồng |

### 8.2 Dự án (7 dự án thật)

Section eyebrow: Hệ sinh thái dự án
H2: Dự án — 7 dự án INNTECH hỗ trợ
Giới thiệu: Các dự án trong hệ sinh thái CLB, theo `THONGTIN §7` và `MOTA §Dấu ấn nổi bật`.

Danh sách dự án (title, field/lĩnh vực, description, award/thành tích, team/đội ngũ, needs/nhu cầu cộng sự, status):

1. **EaAgri** | Nông nghiệp thông minh, AI và IoT | Hệ sinh thái nông nghiệp thông minh cho cây sầu riêng tại Đắk Lắk; ứng dụng CH Play và web (eaagri.vn, crm.eaagri.vn); 143 người dùng, 7 giao dịch, doanh thu 1.003.000 đồng. | Á quân NTTU Innovation Startup Challenge 2026; Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12 (2026) | Đội: Phan Đăng Huy (nhóm trưởng), Đặng Văn Chung, Nguyễn Anh Giảng, Huỳnh Anh Tuấn | Nhu cầu cộng sự: phát triển ứng dụng, kiểm thử (mẫu) | Status: Thực tế (Nguồn: THONGTIN §7.1)
2. **Sports Connect** | Nền tảng thể thao thời gian thực | Nền tảng cộng đồng thể thao, tìm đối thủ, ghép trận, đặt sân. | Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026 | Đội: Võ Văn Hải Long, Bùi Nguyễn Phượng Uyên (NIIE, 25BITT01, Ban Dự án & Công nghệ) | Nhu cầu cộng sự: phát triển nền tảng (mẫu) | Status: Thực tế (Nguồn: THONGTIN §7.2)
3. **DIA+** | Hệ sinh thái quản lý tiểu đường, AI và OCR | Quản lý tiểu đường ứng dụng AI và OCR, đồng hành người bệnh. | Top 10 CYE Junior Vietnam 2026 (vào Top 30 từ 80 đội) | Đội: Nguyễn Trà Âu, Nguyễn Lê Hồng Quý, Lê Minh Khôi (NIIE), Nguyễn Huỳnh Như Ý (ĐH Ngân hàng TP.HCM) | Nhu cầu cộng sự: phát triển OCR (mẫu) | Status: Thực tế (Nguồn: THONGTIN §7.3)
4. **WeaveCarbon** | Hạ tầng dữ liệu carbon và khí hậu | Hạ tầng dữ liệu carbon cho doanh nghiệp công nghiệp; mã dự án NTT-234. | Quý quân NTTU Innovation Startup Challenge 2026 | Đội: Viện Đào tạo Song ngữ NTT + INNTECH CLUB, sinh viên UFM, Greenwich Vietnam, UIT | Nhu cầu cộng sự: xử lý dữ liệu carbon (mẫu) | Status: Thực tế (Nguồn: THONGTIN §7.4)
5. **RecycleBike** | Dự án thuộc hệ sinh thái CLB | Dự án được CLB hỗ trợ, đồng hành. | Top 60 vòng bán kết 1 cuộc thi Innostar | — | Nhu cầu cộng sự: đang cập nhật | Status: Thực tế (Nguồn: THONGTIN §7.5)
6. **VietFarm Go** | Dự án thuộc hệ sinh thái CLB | Được CLB hỗ trợ, đồng hành. | — | — | Nhu cầu cộng sự: đang cập nhật | Status: Thực tế (Nguồn: THONGTIN §7.6)
7. **IPUni Market** | Dự án thuộc hệ sinh thái CLB | Được CLB hỗ trợ, đồng hành. | — | — | Nhu cầu cộng sự: đang cập nhật | Status: Thực tế (Nguồn: THONGTIN §7.7)

### 8.3 Team Profile

Section eyebrow: Đội ngũ dự án
H2: Team Profile

Danh sách hồ sơ đội (project, thành viên công khai, vai trò, status):

1. **EaAgri** | Phan Đăng Huy (nhóm trưởng), Đặng Văn Chung, Nguyễn Anh Giảng, Huỳnh Anh Tuấn | Mentor: Nguyễn Huỳnh Thông, Phạm Đình Tài, Hoàng Thịnh Nhân | Status: Thực tế (Nguồn: THONGTIN §7.1)
2. **Sports Connect** | Võ Văn Hải Long (Phó Chủ nhiệm CLB), Bùi Nguyễn Phượng Uyên | Cả hai sinh viên NIIE, lớp 25BITT01, gắn Ban Dự án & Công nghệ | Status: Thực tế (Nguồn: THONGTIN §7.2)
3. **DIA+** | Nguyễn Trà Âu, Nguyễn Lê Hồng Quý, Lê Minh Khôi (NIIE), Nguyễn Huỳnh Như Ý (ĐH Ngân hàng TP.HCM) | Mentor: ThS. Lưu Thị Mỹ Ngọc, ThS. Cao Quản Huân | Status: Thực tế (Nguồn: THONGTIN §7.3)
4. **WeaveCarbon** | Thành viên từ Viện Đào tạo Song ngữ NTT và INNTECH CLUB; sinh viên UFM, Greenwich Vietnam, UIT | Thành phần đa trường | Status: Đang cập nhật (mô tả thành phần từ THONGTIN §7.4)
5. **RecycleBike** | — | Chưa có thông tin công khai chi tiết | Status: Đang cập nhật (Nguồn: THONGTIN §7.5)
6. **VietFarm Go** | — | Chưa có thông tin công khai chi tiết | Status: Đang cập nhật (Nguồn: THONGTIN §7.6)
7. **IPUni Market** | — | Chưa có thông tin công khai chi tiết | Status: Đang cập nhật (Nguồn: THONGTIN §7.7)

### 8.4 Thành tích

Section eyebrow: Giải thưởng
H2: Thành tích — bảng giải thưởng 2026

Danh sách giải (dự án, giải thưởng, năm):

1. EaAgri — Á quân NTTU Innovation Startup Challenge 2026 — 2026
2. EaAgri — Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12 — 2026
3. WeaveCarbon — Quý quân NTTU Innovation Startup Challenge 2026 — 2026
4. Sports Connect — Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026 — 2026
5. DIA+ — Top 10 CYE Junior Vietnam 2026 — 2026
6. RecycleBike — Top 60 vòng bán kết Innostar — 2026
(Nguồn: THONGTIN §8; MOTA §Dấu ấn nổi bật)

### 8.5 Tìm cộng sự (dữ liệu mẫu)

Section eyebrow: Cần cộng sự
H2: Tìm cộng sự — vị trí mở (mẫu)
Giới thiệu: Board vị trí đang mở, dữ liệu mẫu. CTA gửi email tới CLB (`mailto:inntechclub@gmail.com`).

Danh sách vị trí mẫu (title, dự án, mô tả, status, nhãn UI):

1. **Phát triển ứng dụng EaAgri (mẫu)** | EaAgri | Tham gia phát triển ứng dụng nông nghiệp thông minh | Status: Sample | Nhãn: "Mẫu"
2. **Thiết kế giao diện DIA+ (mẫu)** | DIA+ | Thiết kế trải nghiệm người dùng cho ứng dụng y tế số | Status: Sample | Nhãn: "Mẫu"
3. **Xử lý dữ liệu WeaveCarbon (mẫu)** | WeaveCarbon | Xây dựng hệ thống dữ liệu carbon và khí hậu | Status: Sample | Nhãn: "Mẫu"

---

## 9. MENTOR HUB (/mentor-hub)

### 9.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 06 · MENTOR |
| H1 | MENTOR HUB |
| Tagline | Mạng lưới mentor đồng hành dự án. |
| Lead | Kết nối sinh viên với giảng viên, chuyên gia và doanh nhân đồng hành dự án. Chỉ hiển thị thông tin có nguồn trong `THONGTIN.md`; trường thiếu ghi "Đang cập nhật". |
| CTA chính | "Xem mentor" → `#mentors` |
| CTA phụ | "Gửi yêu cầu mentoring" → `#yeu-cau` |
| Chip meta (3) | 5 mentor · 4 bước quy trình · mailto: inntechclub@gmail.com |

### 9.2 Hồ sơ mentor (chỉ 5 tên có nguồn)

Section eyebrow: Chuyên gia đồng hành
H2: Mentor Profile
Giới thiệu: 5 mentor được nêu trong hồ sơ dự án `THONGTIN.md` (§7.1 và §7.3). Chỉ hiển thị dự án đồng hành và vai trò "Mentor dự án". Không bịa chức danh, công ty, số năm kinh nghiệm, ảnh.

Danh sách mentor (name, dự án đồng hành, vai trò, title, công ty, số năm kinh nghiệm, ảnh, status):

1. **Nguyễn Huỳnh Thông** | EaAgri | Mentor dự án | Title: Đang cập nhật | Công ty: Đang cập nhật | Số năm kinh nghiệm: Đang cập nhật | Ảnh: Đang cập nhật | Status: Thực tế (tên + dự án từ THONGTIN §7.1)
2. **Phạm Đình Tài** | EaAgri | Mentor dự án | Title: Đang cập nhật | Công ty: Đang cập nhật | Số năm kinh nghiệm: Đang cập nhật | Ảnh: Đang cập nhật | Status: Thực tế (tên + dự án từ THONGTIN §7.1)
3. **Hoàng Thịnh Nhân** | EaAgri | Mentor dự án | Title: Đang cập nhật | Công ty: Đang cập nhật | Số năm kinh nghiệm: Đang cập nhật | Ảnh: Đang cập nhật | Status: Thực tế (tên + dự án từ THONGTIN §7.1)
4. **ThS. Lưu Thị Mỹ Ngọc** | DIA+ | Mentor dự án | Title: Đang cập nhật | Công ty: Đang cập nhật | Số năm kinh nghiệm: Đang cập nhật | Ảnh: Đang cập nhật | Status: Thực tế (tên + dự án từ THONGTIN §7.3)
5. **ThS. Cao Quản Huân** | DIA+ | Mentor dự án | Title: Đang cập nhật | Công ty: Đang cập nhật | Số năm kinh nghiệm: Đang cập nhật | Ảnh: Đang cập nhật | Status: Thực tế (tên + dự án từ THONGTIN §7.3)

### 9.3 Quy trình mentoring

Section eyebrow: Cách hoạt động
H2: Quy trình — 4 bước

Danh sách bước (step, mô tả, status):

1. **Gửi yêu cầu** — Sinh viên điền form yêu cầu mentoring. | Status: Thực tế
2. **Phân loại** — CLB phân loại theo chủ đề dự án và gán mentor phù hợp. | Status: Thực tế
3. **Kết nối** — CLB kết nối sinh viên với mentor. | Status: Thực tế
4. **Theo dõi** — Theo dõi tiến độ và hiệu quả mentoring. | Status: Thực tế

### 9.4 Mentoring Request (form)

Section eyebrow: Yêu cầu mentoring
H2: Yêu cầu mentoring
Giới thiệu: Form phía khách (client-side) gồm họ tên, email, dự án/chủ đề, mục tiêu, thời gian mong muốn. Validate bắt đầu; nút mở email soạn sẵn (`mailto:inntechclub@gmail.com`). Thông báo: dữ liệu không được lưu.

Trường form (tên, bắt buộc, mô tả, status):
- Họ tên — Bắt đầu — Tên người gửi | Status: Thực tế
- Email — Bắt đầu — Địa chỉ email liên hệ | Status: Thực tế
- Dự án / chủ đề — Bắt đầu — Dự án hoặc chủ đề muốn được mentor | Status: Thực tế
- Mục tiêu — Bắt đầu — Mục tiêu muốn đạt được sau mentoring | Status: Thực tế
- Thời gian mong muốn — Không bắt đầu — Thời gian mong muốn tham gia | Status: Thực tế

CTA: "Trở thành mentor" → `mailto:inntechclub@gmail.com`.

---

## 10. TECH MARKETPLACE (/marketplace)

### 10.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 07 · MARKETPLACE |
| H1 | TECH MARKETPLACE |
| Tagline | Chợ sản phẩm công nghệ của sinh viên. |
| Lead | Trưng bày sản phẩm thật của hệ sinh thái INNTECH và sản phẩm mẫu của sinh viên. Dịch vụ đặt hàng phát triển: liên hệ báo giá, không công bố giá trước. |
| CTA chính | "Xem sản phẩm" → `#showcase` |
| CTA phụ | "Đặt hàng phát triển" → `#dat-hang` |
| Chip meta (3) | Sản phẩm thật · Sản phẩm mẫu · Dịch vụ đặt hàng |

### 10.2 Product Showcase

Section eyebrow: Trưng bày sản phẩm
H2: Product Showcase — sản phẩm hệ sinh thái + mẫu sinh viên

Danh sách sản phẩm (name, kind, description, platform, tags, href, status):

Sản phẩm thật:
1. **EaAgri** | App / Web | Ứng dụng nông nghiệp thông minh cho cây sầu riêng Đắk Lắk. | CH Play, web (eaagri.vn) | Tags: agritech, AI, IoT | Status: Thực tế (Nguồn: THONGTIN §7.1)
2. **Sports Connect** | App | Nền tảng thể thao thời gian thực. | Nền tảng web/mobile | Tags: thể thao, real-time | Status: Thực tế (Nguồn: THONGTIN §7.2)
3. **DIA+** | App | Hệ sinh thái quản lý tiểu đường AI và OCR. | Ứng dụng di động | Tags: healthtech, AI, OCR | Status: Thực tế (Nguồn: THONGTIN §7.3)
4. **WeaveCarbon** | Tool | Hạ tầng dữ liệu carbon và khí hậu. | Web | Tags: climate tech, dữ liệu | Status: Thực tế (Nguồn: THONGTIN §7.4)

Sản phẩm mẫu (gắn badge "Mẫu"):
5. **Ứng dụng quản lý học tập sinh viên (mẫu)** | App | Quản lý lịch học và bài tập cho sinh viên. | Mobile | Tags: giáo dục, mẫu | Status: Mẫu
6. **Trang web portfolio cá nhân (mẫu)** | Web | Trang web portfolio cho sinh viên kỹ thuật. | Web | Tags: portfolio, mẫu | Status: Mẫu
7. **Trò chơi đố vui công nghệ (mẫu)** | Game | Trò chơi đố vui về kiến thức công nghệ. | Web/mobile | Tags: game, giáo dục, mẫu | Status: Mẫu
8. **Ứng dụng ghi nhớ từ vựng (mẫu)** | App | Ứng dụng học từ vựng ngoài ngữ mẹ. | Mobile | Tags: ngôn ngữ, mẫu | Status: Mẫu

### 10.3 Tools / App / Game

Section eyebrow: Phân loại sản phẩm
H2: Tools / App / Game
Giới thiệu: Lọc theo loại (tool / app / game). Game và một số app là dữ liệu mẫu, ghi rõ.

Danh sách (name, kind, platform, tags, status):

1. **EaAgri** | App | CH Play, web | agritech | Thực tế
2. **Sports Connect** | App | Mobile/web | thể thao | Thực tế
3. **DIA+** | App | Mobile | healthtech | Thực tế
4. **WeaveCarbon** | Tool | Web | climate tech | Thực tế
5. **Ứng dụng quản lý học tập (mẫu)** | App | Mobile | giáo dục | Mẫu
6. **Trò chơi đố vui công nghệ (mẫu)** | Game | Web/mobile | game | Mẫu
7. **Ứng dụng ghi nhớ từ vựng (mẫu)** | App | Mobile | ngôn ngữ | Mẫu

### 10.4 Request Development (form)

Section eyebrow: Đặt hàng phát triển
H2: Request Development — yêu cầu phát triển sản phẩm
Giới thiệu: Form mô tả yêu cầu (tên, email, loại sản phẩm, ngân sách dự kiến, mô tả) → gửi mail `mailto:inntechclub@gmail.com`. Quy trình nhận yêu cầu 4 bước. Gói dịch vụ ghi "Liên hệ báo giá", không bịa giá.

Trường form (tên, bắt buộc, mô tả, status):
- Tên công ty / cá nhân — Bắt đầu — Người đặt hàng | Status: Thực tế
- Email — Bắt đầu — Địa chỉ email liên hệ | Status: Thực tế
- Loại sản phẩm — Bắt đầu — Landing page / Web app / MVP / Tích hợp AI | Status: Thực tế
- Ngân sách dự kiến — Không bắt đầu — Mức ngân sách dự kiến | Status: Thực tế
- Mô tả yêu cầu — Bắt đầu — Chi tiết yêu cầu phát triển | Status: Thực tế

Danh sách gói dịch vụ (name, mô tả, giá, status):
- **Landing page** — Trang giới thiệu sản phẩm/dự án | Liên hệ báo giá | Status: Không công bố giá
- **Web app / MVP** — Ứng dụng web phiên bản đầu tiên | Liên hệ báo giá | Status: Không công bố giá
- **Tích hợp AI** — Tính năng AI vào sản phẩm hiện có | Liên hệ báo giá | Status: Không công bố giá

Quy trình 4 bước (step, mô tả, status):
1. **Gửi yêu cầu** — Điền form trên trang. | Thực tế
2. **CLB xem xét** — CLB đánh giá yêu cầu và liên hệ lại. | Thực tế
3. **Thỏa thuận** — Đối phương đồng ýscope và timeline. | Thực tế
4. **Phát triển** — Đội dự án CLB thực hiện và bàn giao. | Thực tế

Disclaimer (hiển thị rõ ở đầu section showcase): "Marketplace đang ở giai đoạn demo giao diện; các sản phẩm gắn nhãn Mẫu chưa phải sản phẩm chính thức."

---

## 11. COMMUNITY (/community)

### 11.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 08 · COMMUNITY |
| H1 | COMMUNITY |
| Tagline | Cộng đồng thành viên INNTECH. |
| Lead | 4 lãnh đạo + 6 ban chuyên môn, hơn 50 thành viên đầu tiên (khuôn khổ GALA NJEC 2025). Tham gia CLB qua fanpage. |
| CTA chính | "Xem thành viên" → `#thanh-vien` |
| CTA phụ | "Tham gia CLB" → `https://www.facebook.com/inntechclub` |
| Chip meta (3) | 50+ thành viên đầu tiên · 4 lãnh đạo · 6 ban |

### 11.2 Thành viên

Section eyebrow: Ban lãnh đạo
H2: Thành viên — ban chủ nhiệm và 6 ban

Danh sách lãnh đạo (4 thực tế) (name, role, note, status):

1. **Nguyễn Lâm Chí Hải** | Chủ nhiệm | Nhân sự NIIC; đầu mối liên hệ của CLB; email nlchai@ntt.edu.vn | Status: Thực tế (Nguồn: THONGTIN §3)
2. **Võ Văn Hải Long** | Phó Chủ nhiệm | Gắn với mảng dự án – công nghệ; thành viên dự án Sports Connect | Status: Thực tế (Nguồn: THONGTIN §3)
3. **Nguyễn Hoàng Yến** | Ủy viên | Nhiệm kỳ 2025–2026 | Status: Thực tế (Nguồn: THONGTIN §3)
4. **Nguyễn Nhật An** | Ủy viên | Nhiệm kỳ 2025–2026 | Status: Thực tế (Nguồn: THONGTIN §3)

Danh sách 6 ban (ban, phụ trách chính, status):

1. **Ban Dự án & Công nghệ** | Đồng hành dự án, phát triển sản phẩm, các vấn đề kỹ thuật và công nghệ | Status: Thực tế (Nguồn: THONGTIN §4.1)
2. **Ban Đối nội** | Kết nối thành viên, vận hành nội bộ, xây dựng văn hóa CLB | Status: Thực tế (Nguồn: THONGTIN §4.1)
3. **Ban Đối ngoại** | Quan hệ đối tác, doanh nghiệp, trường bạn, nhà tài trợ | Status: Thực tế (Nguồn: THONGTIN §4.1)
4. **Ban Nhân lực** | Tuyển dụng, đào tạo, phát triển thành viên | Status: Thực tế (Nguồn: THONGTIN §4.1)
5. **Ban Sáng tạo** | Ý tưởng, nghiên cứu, sáng kiến đổi mới | Status: Thực tế (Nguồn: THONGTIN §4.1)
6. **Ban Truyền thông** | Nội dung, fanpage, hình ảnh, truyền thông sự kiện | Status: Thực tế (Nguồn: THONGTIN §4.1)

Số liệu: hơn 50 thành viên đầu tiên (khuôn khổ GALA NJEC 2025, 16/11/2025). (Nguồn: THONGTIN §2, §6.1; MOTA §Thông tin nhanh) Không bịa tên thành viên khác ngoài 4 lãnh đạo trên.

### 11.3 Challenge (dữ liệu mẫu)

Section eyebrow: Thử thách cộng đồng
H2: Challenge — thử thách mẫu (gắn nhãn "Mẫu")

Danh sách challenge mẫu (name, mô tả, giải thưởng, status, nhãn UI):

1. **30 ngày code (mẫu)** | Viết code mỗi ngày trong 30 ngày, công khai tiến độ. | Giải thưởng: chứng nhận tham gia (mẫu) | Status: Sample | Nhãn: "Mẫu"
2. **Design sprint (mẫu)** | Thiết kế nguyên mẫu sản phẩm trong 5 ngày. | Giải thưởng: phản hồi từ mentor (mẫu) | Status: Sample | Nhãn: "Mẫu"
3. **Startup pitch (mẫu)** | Trình bày ý tưởng khởi nghiệp trong 3 phút. | Giải thưởng: cơ hội trực tiếp với doanh nghiệp (mẫu) | Status: Sample | Nhãn: "Mẫu"

### 11.4 Thành tích

Section eyebrow: Giải thưởng & công bố
H2: Thành tích — giải thưởng và công bố khoa học

Danh sách thành tích (item, nội dung, năm, status):

1. **Á quân NTTU Innovation Startup Challenge 2026** | Dự án EaAgri | 2026 | Thực tế (Nguồn: THONGTIN §8)
2. **Quý quân NTTU Innovation Startup Challenge 2026** | Dự án WeaveCarbon | 2026 | Thực tế (Nguồn: THONGTIN §8)
3. **Giải Ba AI — Cardano SEA Hackathon 2026** | Dự án Sports Connect | 2026 | Thực tế (Nguồn: THONGTIN §8)
4. **Top 10 CYE Junior Vietnam 2026** | Dự án DIA+ | 2026 | Thực tế (Nguồn: THONGTIN §8)
5. **Top 60 vòng bán kết Innostar** | Dự án RecycleBike | 2026 | Thực tế (Nguồn: THONGTIN §8)
6. **I-Star 2026 — mã số N4015** | CLB đại diện NTTU | 2026 | Thực tế (Nguồn: THONGTIN §13)
7. **2 bài báo tại SIEV2026** | Công bố khoa học của thành viên CLB | 2026 | Thực tế (Nguồn: THONGTIN §9)
8. **1 bài báo tại AIIA 2026** | Công bố khoa học của thành viên CLB | 2026 | Thực tế (Nguồn: THONGTIN §9)

### 11.5 Tuyển thành viên

Section eyebrow: Tuyển membres
H2: Tuyển thành viên — quy trình 2 vòng
Giới thiệu: Năm 2026 tuyển trong hai vòng: nộp hồ sơ trực tuyến và phỏng vấn. Thời gian nhận hồ sơ từ 27/05/2026 đến 03/06/2026 (đã qua). CTA fanpage. Ghi: "Mùa tuyển tiếp theo sẽ được công bố trên fanpage."

Danh sách mốc (mốc, ngày, ghi chú, status):

1. **Nộp hồ sơ trực tuyến** | 27/05/2026 – 03/06/2026 | Đã qua | Status: Thực tế (Nguồn: THONGTIN §5.4; MOTA §Tuyển thành viên)
2. **Phỏng vấn** | Sau vòng nộp hồ sơ | Đã qua | Status: Thực tế
3. **Mùa tuyển tiếp theo** | — | Công bố trên fanpage | Status: Đang cập nhật

### 11.6 Hoạt động cộng đồng

Section eyebrow: Cộng đồng
H2: Hoạt động cộng đồng — Trung thu Sáng tạo 2026
Giới thiệu: Chương trình thân nguyện, thể hiện giá trị Humanity của INNTECH.

Danh sách hoạt động (tên, địa điểm, quy mô, status):

1. **Trung thu Sáng tạo 2026 — Mỹ Yên, Tây Ninh** | 35 học sinh, 800 phần quà | Status: Thực tế (Nguồn: THONGTIN §6.7, §10)
2. **Trung thu Sáng tạo 2026 — Song Phú, Vĩnh Long** | 20 phần quà | Status: Thực tế (Nguồn: THONGTIN §6.7, §10)

---

## 12. BUSINESS CONNECT (/business-connect)

### 12.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 09 · BUSINESS |
| H1 | BUSINESS CONNECT |
| Tagline | Kết nối doanh nghiệp với INNTECH. |
| Lead | Doanh nghiệp, nhà tài trợ và trường đối tác kết nối với CLB để đặt hàng công nghệ, hợp tác đào tạo, tài trợ và tuyển dụng. |
| CTA chính | "Xem đối tác" → `#doi-tac` |
| CTA phụ | "Gửi yêu cầu đặt hàng" → `#lien-he` |
| Chip meta (3) | 11 đối tác · 4 trường đối tác · 4 bước quy trình |

### 12.2 Đối tác

Section eyebrow: Mạng lưới đối tác
H2: Đối tác — doanh nghiệp và trường đại học
Giới thiệu: Danh sách thật trong `THONGTIN §11`, phân nhóm. Không dùng logo giả.

Nhóm 1: Tổ chức, hiệp hội, doanh nghiệp (11) — status: Thực tế (Nguồn: THONGTIN §11):
1. Hội Tư vấn, Đầu tư và Phát triển doanh nghiệp nhỏ và vừa TP. Hồ Chí Minh
2. Hội đồng Tư vấn – Hỗ trợ khởi nghiệp phía Nam
3. CLB Doanh nghiệp NTTU
4. Viện Phát triển Kinh tế số Việt Nam
5. BSA
6. Felix
7. Bụi Media
8. Gia Đình Việt Retail
9. Như Hồng
10. Diễn đàn Doanh nghiệp
11. Titops

Nhóm 2: Mạng lưới liên trường (4) — status: Thực tế (Nguồn: THONGTIN §11):
1. Trường Đại học Tôn Đức Thắng
2. Trường Đại học Tài chính – Marketing (UFM)
3. Trường Đại học Sài Gòn International
4. Trường Đại học Giao thông Vận tải TP. Hồ Chí Minh (UTH)

### 12.3 Dịch vụ

Section eyebrow: Dịch vụ doanh nghiệp
H2: Dịch vụ — đặt hàng và hợp tác

Danh sách dịch vụ (name, mô tả, hình thức liên hệ, status):

1. **Landing page** — Thiết kế và phát triển trang giới thiệu sản phẩm/dự án. | Liên hệ để trao đổi | Status: Thực tế (dịch vụ mô tả, không giá)
2. **Web app / MVP** — Xây dựng ứng dụng web phiên bản đầu tiên. | Liên hệ để trao đổi | Status: Thực tế
3. **Tích hợp AI** — Tính năng trí tuệ nhân tạo vào sản phẩm hiện có. | Liên hệ để trao đổi | Status: Thực tế
4. **Đào tạo / workshop** — Tổ chức workshop kỹ năng cho sinh viên và nhân viên đối tác. | Liên hệ để trao đổi | Status: Thực tế
5. **Tài trợ** — Tài trợ sự kiện, cuộc thi, hoạt động cộng đồng của CLB. | Liên hệ để trao đổi | Status: Thực tế
6. **Tuyển dụng** — Kết nối doanh nghiệp với thành viên CLB cho việc làm, thực tập. | Liên hệ để trao đổi | Status: Thực tế

### 12.4 Quy trình

Section eyebrow: Cách hợp tác
H2: Quy trình — 4 bước

Danh sách bước (step, mô tả, status):

1. **Gửi yêu cầu** — Doanh nghiệp điền form liên hệ. | Thực tế
2. **CLB tư vấn** — CLB trao đổi nhu cầu và đề xuất phương án. | Thực tế
3. **Thỏa thuận** — Cả hai bên đồng ý scope, timeline, hình thức hợp tác. | Thực tế
4. **Thực hiện** — CLB và đối tác thực hiện dự án/dịch vụ. | Thực tế

### 12.5 Form liên hệ doanh nghiệp

Section eyebrow: Liên hệ
H2: Form liên hệ doanh nghiệp
Giới thiệu: Form phía khách gồm công ty, người liên hệ, email, nhu cầu → `mailto:inntechclub@gmail.com`. Dữ liệu không lưu.

Trường form (tên, bắt buộc, mô tả, status):
- Tên công ty — Bắt đầu — Tên tổ chức/doanh nghiệp | Status: Thực tế
- Người liên hệ — Bắt đầu — Họ tên người đại diện | Status: Thực tế
- Email — Bắt đầu — Địa chỉ email | Status: Thực tế
- Nhu cầu — Bắt đầu — Mô tả nhu cầu hợp tác / đặt hàng | Status: Thực tế

### 12.6 Case study

Section eyebrow: Dự án tiêu biểu
H2: Case study — dự án tiêu biểu + giải thưởng

Danh sách case study (name, mô tả, thành tựu, status):

1. **EaAgri** — Nông nghiệp thông minh AI + IoT, cây sầu riêng Đắk Lắk. | Á quân NTTU Innovation Startup Challenge 2026; Top chung kết Khởi nghiệp Xanh lần thứ 12. | Status: Thực tế (Nguồn: THONGTIN §7.1, §8)
2. **Sports Connect** — Nền tảng thể thao thời gian thực. | Giải Ba AI tại Cardano SEA Hackathon 2026. | Status: Thực tế (Nguồn: THONGTIN §7.2, §8)
3. **WeaveCarbon** — Hạ tầng dữ liệu carbon và khí hậu (mã NTT-234). | Quý quân NTTU Innovation Startup Challenge 2026. | Status: Thực tế (Nguồn: THONGTIN §7.4, §8)

---

## 13. ABOUT INNTECH (/about)

### 13.1 Hero copy

| Trường | Nội dung |
|---|---|
| Eyebrow | HUB 10 · ABOUT |
| H1 | ABOUT INNTECH |
| Tagline | Giới thiệu câu lạc bộ INNTECH. |
| Lead | INNTECH CLUB — Câu lạc bộ Công nghệ và Sáng tạo của Trường Đại học Nguyễn Tất Thành, hoạt động dưới sự quản lý của NIIC và NIIE, từ 2025. |
| CTA chính | "Tham gia CLB" → `https://www.facebook.com/inntechclub` |
| CTA phụ | "Gửi email" → `mailto:inntechclub@gmail.com` |
| Chip meta (3) | NIIC × NIIE · EST. 2025 · I-Star 2026 N4015 |

### 13.2 Giới thiệu

Section eyebrow: Về CLB
H2: Giới thiệu — sứ mệnh, tầm nhìn, lịch sử

Nội dung (source: MOTA §Sứ mệnh — Tầm nhìn; MOTA §Thông tin nhanh; THONGTIN §1, §2):

- **Sứ mệnh:** Tạo môi trường học tập, trải nghiệm và phát triển dành cho sinh viên NTTU thông qua công nghệ và đổi mới sáng tạo; kết nối sinh viên với chuyên gia, doanh nghiệp, nhà đầu tư và các nguồn lực trong hệ sinh thái khởi nghiệp; đồng hành để các ý tưởng, dự án của sinh viên có cơ hội được nuôi dưỡng, kiểm chứng và phát triển thành sản phẩm có giá trị.
- **Tầm nhìn:** Trở thành cộng đồng đổi mới sáng tạo sinh viên tiêu biểu của Trường Đại học Nguyễn Tất Thành và khu vực phía Nam; là cầu nối hiệu quả giữa nhà trường, doanh nghiệp và hệ sinh thái khởi nghiệp; góp phần hình thành thế hệ sinh viên có năng lực công nghệ, tư duy khởi nghiệp và trách nhiệm xã hội.
- **Lịch sử / mốc thời gian:** Thành lập theo fanpage 15/10/2025; Quyết định thành lập số 2583/QĐ-NTT ngày 28/10/2025; Lễ ra mắt 16/11/2025 tại GALA NJEC 2025. (Nguồn: THONGTIN §1, §2)

### 13.3 Giá trị I-N-N-T-E-C-H

Section eyebrow: Giá trị cốt lõi
H2: Giá trị I-N-N-T-E-C-H

Bảng 7 giá trị (chữ, giá trị, ý nghĩa):

| Chữ | Giá trị | Ý nghĩa |
|---|---|---|
| I | Innovation — Đổi mới sáng tạo | Khuyến khích ý tưởng mới, tinh thần thử nghiệm và cải tiến không ngừng. |
| N | Networking — Kết nối | Mở rộng quan hệ giữa sinh viên với chuyên gia, doanh nghiệp, nhà đầu tư và các trường bạn. |
| N | Nurturing — Nuôi dưỡng | Đồng hành, mentoring và tạo điều kiện để thành viên phát triển năng lực dài hạn. |
| T | Technology — Công nghệ | Ứng dụng AI, IoT, dữ liệu và chuyển đổi số vào học tập, nghiên cứu và sản phẩm. |
| E | Entrepreneurship — Khởi nghiệp | Bồi dưỡng tư duy kinh doanh, thương mại hóa và tinh thần dấn thân. |
| C | Collaboration — Hợp tác | Đề cao làm việc nhóm, liên ngành và hợp tác giữa các trường, đơn vị. |
| H | Humanity — Nhân văn | Hướng đến giá trị tích cực cho cộng đồng, phát triển bền vững và trách nhiệm xã hội. |

(Nguồn: MOTA §Giá trị cốt lõi: I-N-N-T-E-C-H)

### 13.4 Tổ chức

Section eyebrow: Ban chủ nhiệm & 6 ban
H2: Tổ chức — ban chủ nhiệm 2025–2026 và các ban

Bảng ban chủ nhiệm (4 người, thực tế):

| Họ và tên | Chức vụ | Thông tin liên quan |
|---|---|---|
| Nguyễn Lâm Chí Hải | Chủ nhiệm | Nhân sự NIIC; đầu mối liên hệ của CLB; email nlchai@ntt.edu.vn |
| Võ Văn Hải Long | Phó Chủ nhiệm | Gắn với mảng dự án – công nghệ; thành viên dự án Sports Connect |
| Nguyễn Hoàng Yến | Ủy viên | — |
| Nguyễn Nhật An | Ủy viên | — |

(Nguồn: THONGTIN §3; MOTA §Cơ cấu tổ chức)

Bảng 6 ban chuyên môn:

| Ban | Phụ trách chính |
|---|---|
| Ban Dự án & Công nghệ | Đồng hành dự án, phát triển sản phẩm, các vấn đề kỹ thuật và công nghệ |
| Ban Đối nội | Kết nối thành viên, vận hành nội bộ, xây dựng văn hóa CLB |
| Ban Đối ngoại | Quan hệ đối tác, doanh nghiệp, trường bạn, nhà tài trợ |
| Ban Nhân lực | Tuyển dụng, đào tạo, phát triển thành viên |
| Ban Sáng tạo | Ý tưởng, nghiên cứu, sáng kiến đổi mới |
| Ban Truyền thông | Nội dung, fanpage, hình ảnh, truyền thông sự kiện |

(Nguồn: THONGTIN §4.1; MOTA §Cơ cấu tổ chức)

### 13.5 Đối tác

Section eyebrow: Mạng lưới đối tác
H2: Đối tác — danh sách như mục 12.2 (11 tổ chức + 4 trường). (Nguồn: THONGTIN §11)

### 13.6 Liên hệ

Section eyebrow: Liên hệ
H2: Liên hệ — thông tin CLB

Bảng liên hệ (kênh, thông tin, status):

| Kênh | Thông tin | Status |
|---|---|---|
| Địa chỉ | 298A Nguyễn Tất Thành, Phường Xóm Chiếu, TP. Hồ Chí Minh | Thực tế |
| Hotline | 0963 360 450 | Thực tế |
| Email | inntechclub@gmail.com | Thực tế |
| Chủ nhiệm | Nguyễn Lâm Chí Hải (nlchai@ntt.edu.vn) | Thực tế |
| Fanpage | https://www.facebook.com/inntechclub | Thực tế |

(Nguồn: THONGTIN §14; MOTA §Liên hệ)

---

## 14. SAMPLE DATA REGISTER — TẤT CẢ MẪU / HẠP

| # | Hub | Tên mục | Lý do gắn mẫu | Nhãn UI đề xuất |
|---|-----|---------|---------------|-----------------|
| 1 | OPPORTUNITY HUB | Học bổng học sinh NTTU (mẫu) | Không có nguồn học bổng thật; tránh khẳng định thông tin tuyển học bổng. | "Mẫu" |
| 2 | OPPORTUNITY HUB | Học bổng doanh nghiệp cộng tác (mẫu) | Không có nguồn học bổng thật. | "Mẫu" |
| 3 | OPPORTUNITY HUB | Vị trí thực sinh phát triển phần mềm (mẫu) | Không dùng tên công ty thật cho việc làm mẫu. | "Mẫu" |
| 4 | OPPORTUNITY HUB | Vị trí phầnnership sản phẩm (mẫu) | Không dùng tên công ty thật. | "Mẫu" |
| 5 | PROJECT HUB | Nhu cầu cộng sự (tất cả vị trí trong mục Tìm cộng sự) | Vị trí mở chưa được công bố chi tiết; chỉ dùng để minh họa board. | "Mẫu" |
| 6 | TECH MARKETPLACE | Ứng dụng quản lý học tập sinh viên (mẫu) | Sản phẩm sinh viên chưa có trong hệ sinh thái thật. | "Mẫu" |
| 7 | TECH MARKETPLACE | Trang web portfolio cá nhân (mẫu) | Sản phẩm mẫu sinh viên. | "Mẫu" |
| 8 | TECH MARKETPLACE | Trò chơi đố vui công nghệ (mẫu) | Game mẫu, chưa có sản phẩm thật. | "Mẫu" |
| 9 | TECH MARKETPLACE | Ứng dụng ghi nhớ từ vựng (mẫu) | App mẫu sinh viên. | "Mẫu" |
| 10 | TECH MARKETPLACE | Gói dịch vụ Landing page / Web app / MVP / Tích hợp AI | Không công bố giá; chỉ ghi "Liên hệ báo giá". | Không gán giá (đặt nhãn "Liên hệ báo giá") |
| 11 | COMMUNITY | 3 challenge mẫu (30 ngày code, design sprint, startup pitch) | Thử thách nội dung mẫu, có thể chuyển thành thật sau. | "Mẫu" |
| 12 | STUDENT HUB | Mẫu CV / portfolio (4 mẫu liên kết thư viện bên ngoài) | Liên kết mẫu bên ngoài, cần cá nhân hóa; đánh dấu là mẫu nội dung. | "Mẫu nội dung (dùng được)" |
| 13 | STUDENT HUB | Prompt Library (10 prompt mẫu) | Nội dung prompt viết chung, không gắn người/công cụ cụ thể. | "Mẫu nội dung (dùng được)" |
| 14 | MENTOR HUB | Trường title, công ty, số năm kinh nghiệm, ảnh của 5 mentor | Không có thông tin công khai ngoài tên và dự án đồng hành. | "Đang cập nhật" |
| 15 | PROJECT HUB | Thông tin đội ngũ RecycleBike, VietFarm Go, IPUni Market | Không có mô tả công khai trong nguồn. | "Đang cập nhật" |
| 16 | LEARNING HUB | Slide workshop (AI cơ bản, Web2→Web3, gọi vốn, thuyết trình) | Chưa có file tải về; ghi "Sắp cập nhật", không tạo liên kết file giả. | "Sắp cập nhật" |

**Quy tắc nhãn:** Badge "Mẫu" dùng nền vàng nhạt `#fff7e6`, chữ `#92400e`, viền `#fcd34d` (theo thiết kế). Badge "Sắp cập nhật" dùng xám nhạt. Không dùng tên công ty/người thật cho job hay học bổng mẫu.

---

## 15. DANH SÁCH URL NGOÀI THẨM (CHÍNH THỨC, ỔN ĐỊNH)

Tất cả là trang chủ / sản phẩm / kênh YouTube chính thức. Không có liên kết sâu có thể 404. Loại liên kết ghi rõ: **trang chủ**, **sản phẩm**, hoặc **kênh YouTube**.

| Tên | URL | Loại | Ghi chú |
|---|---|---|---|
| ChatGPT | https://chat.openai.com | Sản phẩm | Trang chủ sản phẩm OpenAI |
| Claude | https://claude.ai | Sản phẩm | Trang chủ Claude (Anthropic) |
| Gemini | https://gemini.google.com | Sản phẩm | Trang chủ Gemini (Google) |
| NotebookLM | https://notebooklm.google.com | Sản phẩm | Trang chủ NotebookLM (Google) |
| Perplexity | https://perplexity.ai | Sản phẩm | Trang chủ Perplexity |
| GitHub Copilot | https://github.com/features/copilot | Sản phẩm | Trang tính năng Copilot |
| Canva | https://www.canva.com | Trang chủ | Trang chủ Canva |
| Figma | https://www.figma.com | Trang chủ | Trang chủ Figma |
| Figma Learn | https://www.figma.com/learn | Sản phẩm | Trung tâm học thiết kế Figma |
| Grammarly | https://www.grammarly.com | Trang chủ | Trang chủ Grammarly |
| QuillBot | https://quillbot.com | Trang chủ | Trang chủ QuillBot |
| Notion | https://www.notion.so | Trang chủ | Trang chủ Notion |
| Trello | https://trello.com | Trang chủ | Trang chủ Trello |
| Zotero | https://www.zotero.org | Trang chủ | Trang chủ Zotero |
| Miro | https://miro.com | Trang chủ | Trang chủ Miro |
| Overleaf | https://www.overleaf.com | Trang chủ | Trang chủ Overleaf |
| Obsidian | https://obsidian.md | Trang chủ | Trang chủ Obsidian |
| AnkiWeb | https://ankiweb.net | Trang chủ | Trang chủ AnkiWeb |
| MDN Web Docs | https://developer.mozilla.org | Trang chủ | Tài liệu phát triển web (Mozilla) |
| freeCodeCamp | https://www.freecodecamp.org | Trang chủ | Trang chủ freeCodeCamp |
| roadmap.sh | https://roadmap.sh | Trang chủ | Trang chủ lộ trình học |
| Kaggle | https://www.kaggle.com | Trang chủ | Trang chủ Kaggle |
| Google AI | https://ai.google | Trang chủ | Trang chủ Google AI |
| Coursera | https://www.coursera.org | Trang chủ | Trang chủ Coursera |
| Harvard CS50 | https://cs50.harvard.edu | Trang chủ | Trang chủ khóa CS50 |
| TypeScript | https://www.typescriptlang.org | Trang chủ | Trang chủ TypeScript |
| React | https://react.dev | Trang chủ | Tài liệu chính thức React |
| YouTube – freeCodeCamp | https://www.youtube.com/@freecodecamp | Kênh YouTube | Kênh (không phải deep link video) |
| YouTube – Fireship | https://www.youtube.com/@Fireship | Kênh YouTube | Kênh |
| YouTube – Google Cloud Tech | https://www.youtube.com/@GoogleCloudTech | Kênh YouTube | Kênh |
| YouTube – Figma | https://www.youtube.com/@Figma | Kênh YouTube | Kênh |
| YouTube – 3Blue1Brown | https://www.youtube.com/@3blue1brown | Kênh YouTube | Kênh |
| YouTube – CrashCourse | https://www.youtube.com/@crashcourse | Kênh YouTube | Kênh |
| YouTube – Google Developers | https://www.youtube.com/@GoogleDevelopers | Kênh YouTube | Kênh |
| YouTube – Traversy Media | https://www.youtube.com/@TraversyMedia | Kênh YouTube | Kênh |
| Fanpage INNTECH CLUB | https://www.facebook.com/inntechclub | Trang fanpage | Fanpage chính thức CLB (nguồn MOTA/THONGTIN) |

Lưu ý: Tất cả liên kết ngoài trong sản phẩm phải có `target="_blank"` và `rel="noopener noreferrer"`.

---

## 16. TỰ KIỂM TRA CUỐI (SELF-CHECK)

| Yêu cầu | Trạng thái | Ràng buộc / bằng chứng |
|---|---|---|
| Mọi sự kiện club có trích dẫn nguồn | Đã làm | Mỗi sự kiện trong mục 7.2 có `(Nguồn: THONGTIN §6 / MOTA §Sự kiện tiêu biểu)` |
| Mọi dự án club có trích dẫn nguồn | Đã làm | 7 dự án trích `THONGTIN §7.1–7.7` |
| Mọi mentor chỉ dùng 5 tên có nguồn, không bịa thông tin | Đã làm | 5 mentor theo `THONGTIN §7.1, §7.3`; trường thiếu ghi "Đang cập nhật" |
| Mọi đối tác là danh sách thật trong THONGTIN | Đã làm | 11 tổ chức + 4 trường theo `THONGTIN §11` |
| Mọi số liệu club khớp nguồn | Đã làm | 7 dự án, 2.100h, 35 triệu, 500+ theo `MOTA §Dấu ấn nổi bật` / `THONGTIN §5.2` |
| Mọi URL ngoài là trang chủ / kênh chính thức, không deep link | Đã làm | Xem mục 15; ghi rõ loại liên kết |
| AI Tools ≥ 10 | Đã làm | 10 công cụ (mục 5.2) |
| Study Tools ≥ 8 | Đã làm | 8 công cụ (mục 5.3) |
| Prompts ≥ 8 | Đã làm | 10 prompt (mục 5.5) |
| Tài liệu học tập ≥ 10 | Đã làm | 10 học liệu (mục 6.2) |
| Video / kênh ≥ 8 | Đã làm | 8 kênh YouTube (mục 6.4) |
| Skills 6 nhóm × 3 bước | Đã làm | 6 nhóm (mục 6.5) |
| Learning Paths 4 lộ trình × 4–5 chặng | Đã làm | 4 lộ trình (mục 6.6) |
| Sự kiện CLB (7 mục, trạng thái Đã diễn ra) | Đã làm | Mục 7.2 |
| Cuộc thi / hackathon có kết quả CLB | Đã làm | Mục 7.3, 7.4 |
| Mẫu học bổng / jobs gắn nhãn "Mẫu", không tên công ty thật | Đã làm | Mục 7.5, 7.6; mục 14 |
| Slide ghi "Sắp cập nhật", không liên kết file giả | Đã làm | Mục 6.3 |
| Mentee form, yêu cầu phát triển, liên hệ doanh nghiệp dùng mailto | Đã làm | `mailto:inntechclub@gmail.com` |
| Tất cả mục sample có nhãn trong Sample Data Register | Đã làm | Mục 14 (16 dòng) |
| Hero copy đủ 6 trường cho 10 hub | Đã làm | Mục 4.1–13.1 |
| Section copy đủ eyebrow/H2/intro/danh sách trường UI | Đã làm | Mục 4–13 |

**Chưa thỏa mãn / cần Founder quyết định:**
1. MOTA §13 câu hỏi 1: Có giữ số liệu "2.100 giờ mentoring", "35 triệu đồng" trên hero không? — Bản này đã giữ theo spec v1.
2. MOTA §13 câu hỏi 2: Ảnh thật của mentor/sự kiện/dự án thay cho card gradient? — Bản v1 dùng gradient + số lớn (theo thiết kế).
3. MOTA §13 câu hỏi 3: Toàn bộ nội dung tiếng Anh hay chỉ tên hub? — Bản v1: tiếng Việt, tên hub tiếng Anh.
4. MOTA §13 câu hỏi 4: Ưu tiên lưu form nào trước khi có backend? — Chưa có backend; tất cả form dùng mailto.
5. MOTA §13 câu hỏi 5: Mục đăng nhập trong v2? — Ngoài phạm vi v1.

---

## Kết luận

Tài liệu `docs/content-map-platform.md` đã được tạo, bao gồm:
- Copy hero (eyebrow, H1, tagline, lead, 2 CTA, 3 chip meta) cho tất cả 10 hub.
- Copy section-by-section (eyebrow, H2, intro, danh sách thẻ với trường title/description/metadata/tags/status) cho mọi section theo spec mục 6.
- Dữ liệu club chỉ lấy từ `MOTA.md` / `THONGTIN.md` và có trích dẫn nguồn cạnh mỗi khối.
- Danh sách URL công cụ/tài liệu/video chính thức (trang chủ / kênh YouTube), không deep link 404.
- Sample Data Register với 16 mục và nhãn UI đề xuất ("Mẫu" / "Đang cập nhật").
- Hồ sơ 5 mentor chỉ nêu tên và dự án đồng hành; trường thiếu ghi "Đang cập nhật".
- Phần giọng điệu và thuật ngữ, và bảng tự kiểm tra cuối xác nhận số lượng tối thiểu (AI tools 10, study tools 8, prompts 10, tài liệu 10, video 8, v.v.).

**Gaps cần theo dõi:** 5 câu hỏi mở của Founder trong `MOTA.md §13` chưa có quyết định; các con số fanpage (351 người theo dõi) là ảnh chụp 09/11/2026 và có thể thay đổi.
