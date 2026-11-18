# INNTECH Platform — Build & QA Verification

Ngày: 2026-11-17 (cập nhật cho `/kho-tai-lieu`)
Phạm vi: 10 hub (`/`, `/student-hub`, `/learning-hub`, `/opportunity-hub`, `/project-hub`, `/mentor-hub`, `/marketplace`, `/community`, `/business-connect`, `/about`) + route tiện ích `/kho-tai-lieu` (không thêm hub thứ 11 vào `src/data/hubs.ts`)

## 1. Kết quả kiểm tra tĩnh

| Lệnh | Kết quả |
| --- | --- |
| `npx next typegen` | Types generated successfully |
| `npx tsc --noEmit` | exit 0, không lỗi |
| `npm run build` | exit 0, Next.js 16.4.3 (Turbopack), 15/15 static pages |
| `npm run lint` | exit 0, 0 error, 0 warning |
| `node tests/verify-platform.js` | 38 check pass, "No problems found." |
| `node tests/verify-library.js` | 20+ check pass, "No problems found." (gồm behavior test `parseFolderName` / `docTypeFromMime`) |
| `npm run verify` | chạy tuần tự 3 script trên, tất cả pass |

Route table (rút gọn, tất cả `○ Static`):

```
/  /about  /business-connect  /community  /kho-tai-lieu  /learning-hub
/marketplace  /mentor-hub  /opportunity-hub  /project-hub  /student-hub
```

Ghi chú `/kho-tai-lieu`: build không env prerender trạng thái "chưa cấu hình"; build với env giả (Key/ID sai) prerender trạng thái "Tạm thời gián đoạn" và không crash. Anchor `id="xem-truoc"` luôn có trong HTML prerender ở mọi trạng thái.

## 2. Visual QA

- Công cụ: headless Chrome qua CDP (`Emulation.setDeviceMetricsOverride`), server `next start`.
- Ma trận 10 trang × 4 viewport (1440 / 1024 / 768 / 360) = **40/40 pass**:
  - HTTP 200
  - đúng 1 `<h1>`
  - không tràn ngang
  - không ảnh hỏng
  - 0 console error
- Lưu ý: `overflow-x: clip` trong `globals.css` che tràn, nên đã soát ảnh full-page thủ công thay vì chỉ dựa vào `scrollWidth`.

### Lỗi hiển thị đã tìm và sửa

| # | Vị trí | Lỗi | Sửa |
| --- | --- | --- | --- |
| 1 | Header ≤768 | Drawer mobile cao 41px do `position: fixed` bị `backdrop-filter` của header tạo containing block | Đưa drawer ra ngoài `<header>` |
| 2 | Header 1024/900 | Dropdown hub tràn màn hình, 3/6 mục không bấm được | `.inner` relative, dropdown canh giữa, `width: min(640px, calc(100% - 32px))` |
| 3 | Community | Nút email trắng trên nền `#f5f8ff` (1.06:1) | `.emailCta` viền `--blue-700`, 9.07:1 |
| 4 | Home | 3 nhãn phụ 1.87–2.96:1 | Chuyển sang `--muted` (5.72:1) |
| 5 | Business Connect | Eyebrow teal trên navy 3.56:1 | `color-mix` accent 45% với trắng, 9.8:1 |

## 3. Tương tác đã kiểm

| Tương tác | Kết quả |
| --- | --- |
| Home `#hubs` search "mentor" | 19 kết quả, Escape xoá và khôi phục danh sách 10 hub |
| Dropdown desktop | Mở bằng chuột và Enter, 6 mục, điều hướng đúng |
| Drawer mobile 360 | 10/10 hub trong panel, khoá scroll, đóng đúng |
| SubNav anchor | Section top 304px, header bottom 77px — không bị che |
| Form Mentor / Marketplace | Submit rỗng bị chặn + `aria-invalid`, mailto đúng người nhận và subject |
| Copy prompt | Nút đổi "Đã sao chép", clipboard đọc lại đúng nội dung |

## 4. Review findings đã xử lý

- `<Image priority>` → `preload` (Next 16 deprecation).
- Nhãn fact "2.100 giờ mentoring" khôi phục đúng nghĩa.
- ARIA combobox không đầy đủ trong `hub-directory` → hạ về searchbox + danh sách kết quả hợp lệ.
- Focus management cho drawer mobile.
- Case-study trỏ đúng `#lien-he`.
- Bỏ domain chưa xác nhận `inntechclub.com` khỏi body mailto.
- Study tool trùng "Canva" → "Google Workspace" theo content map.
- `aria-current="page"` cho breadcrumb; `role="status"` cho copy button; đồng nhất `rel="noopener noreferrer"`.

## 5. Giới hạn đã biết

- Chỉ kiểm trên Chrome; chưa có Safari/Firefox.
- Trạng thái `ok` của `/kho-tai-lieu` (dữ liệu Drive thật) **chưa smoke-test vì thiếu API key thật** — mới xác nhận `unconfigured`/`error` qua prerender và UI bằng snapshot mock.
- Mailto và clipboard được xác nhận ở mức href/state, không có mail client thật trong headless.
- Hai điểm contrast dưới 4.5:1 được giữ có chủ đích: nhãn award trên project card (màu accent theo dự án) và nút fanpage Facebook (màu thương hiệu).
- Còn 18 class CSS không dùng (footer cũ trong `page.module.css`, một số class trong `hub-ui.module.css`) — nợ kỹ thuật, không ảnh hưởng build.
