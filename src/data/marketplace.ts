import type { FilterItem } from "./types";

export type ProductItem = FilterItem & {
  productKind: "tool" | "app" | "game";
  platform: string;
};

export const showcaseProducts: ProductItem[] = [
  {
    id: "eaagri",
    title: "EaAgri",
    description:
      "Hệ sinh thái nông nghiệp thông minh ứng dụng AI và IoT, tập trung vào cây sầu riêng tại Đắk Lắk.",
    category: "Agritech",
    productKind: "app",
    platform: "CH Play, web",
    chips: ["agritech", "AI", "IoT"],
    href: "https://eaagri.vn",
    external: true,
  },
  {
    id: "sports-connect",
    title: "Sports Connect",
    description:
      "Nền tảng cộng đồng thể thao thời gian thực, hỗ trợ tìm đối thủ, ghép trận và đặt sân.",
    category: "Thể thao",
    productKind: "app",
    platform: "Web / mobile",
    chips: ["thể thao", "real-time"],
  },
  {
    id: "dia-plus",
    title: "DIA+",
    description: "Hệ sinh thái quản lý tiểu đường ứng dụng AI và OCR.",
    category: "Healthtech",
    productKind: "app",
    platform: "Ứng dụng di động",
    chips: ["healthtech", "AI", "OCR"],
  },
  {
    id: "weavecarbon",
    title: "WeaveCarbon",
    description:
      "Hạ tầng dữ liệu carbon và khí hậu cho doanh nghiệp công nghiệp (mã dự án NTT-234).",
    category: "Climate tech",
    productKind: "tool",
    platform: "Web",
    chips: ["climate tech", "dữ liệu"],
  },
];

export const marketplaceProducts: ProductItem[] = [
  {
    id: "student-quan-ly-hoc-tap",
    title: "Ứng dụng quản lý học tập sinh viên",
    description: "Quản lý lịch học và bài tập cho sinh viên.",
    category: "Giáo dục",
    productKind: "app",
    platform: "Mobile",
    chips: ["giáo dục", "mẫu"],
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "student-ghi-nho-tu-vung",
    title: "Ứng dụng ghi nhớ từ vựng",
    description: "Ứng dụng học từ vựng cho sinh viên.",
    category: "Ngôn ngữ",
    productKind: "app",
    platform: "Mobile",
    chips: ["ngôn ngữ", "mẫu"],
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "student-portfolio-ca-nhan",
    title: "Trang web portfolio cá nhân",
    description: "Trang web portfolio cho sinh viên kỹ thuật.",
    category: "Portfolio",
    productKind: "tool",
    platform: "Web",
    chips: ["portfolio", "mẫu"],
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "game-do-vui-cong-nghe",
    title: "Trò chơi đố vui công nghệ",
    description: "Trò chơi đố vui về kiến thức công nghệ.",
    category: "Game · Giáo dục",
    productKind: "game",
    platform: "Web / mobile",
    chips: ["game", "giáo dục", "mẫu"],
    badge: "Mẫu",
    sample: true,
  },
];

export const serviceTiers: {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  priceNote: string;
}[] = [
  {
    id: "landing-page",
    title: "Landing page",
    description: "Trang giới thiệu sản phẩm/dự án.",
    deliverables: [
      "Thiết kế và phát triển trang giới thiệu sản phẩm/dự án",
      "Hiển thị tốt trên mobile và desktop",
      "Bàn giao và hướng dẫn sử dụng",
    ],
    priceNote: "Liên hệ báo giá",
  },
  {
    id: "web-app-mvp",
    title: "Web app / MVP",
    description: "Ứng dụng web phiên bản đầu tiên.",
    deliverables: [
      "Xây dựng ứng dụng web phiên bản đầu tiên",
      "Các tính năng cốt lõi theo phạm vi đã thỏa thuận",
      "Bàn giao và hướng dẫn vận hành",
    ],
    priceNote: "Liên hệ báo giá",
  },
  {
    id: "tich-hop-ai",
    title: "Tích hợp AI",
    description: "Tính năng trí tuệ nhân tạo vào sản phẩm hiện có.",
    deliverables: [
      "Tích hợp tính năng AI vào sản phẩm hiện có",
      "Tư vấn phương án và phạm vi tích hợp",
      "Bàn giao và hướng dẫn sử dụng",
    ],
    priceNote: "Liên hệ báo giá",
  },
];

export const requestSteps: {
  number: string;
  title: string;
  description: string;
}[] = [
  { number: "01", title: "Gửi yêu cầu", description: "Điền form trên trang." },
  {
    number: "02",
    title: "CLB xem xét",
    description: "CLB đánh giá yêu cầu và liên hệ lại.",
  },
  {
    number: "03",
    title: "Thỏa thuận",
    description: "Hai bên thống nhất phạm vi (scope) và timeline.",
  },
  {
    number: "04",
    title: "Phát triển",
    description: "Đội dự án CLB thực hiện và bàn giao.",
  },
];
