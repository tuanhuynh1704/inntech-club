import type { FilterItem } from "./types";

export type ProjectItem = {
  id: string;
  name: string;
  monogram: string;
  field: string;
  tag: string;
  description: string;
  award: string;
  awardLabel: string;
  kind: "award" | "support";
  team?: string[];
  needs?: string[];
  gradient: string;
};

export const projects: ProjectItem[] = [
  {
    id: "eaagri",
    name: "EaAgri",
    monogram: "EA",
    field: "Nông nghiệp thông minh, AI và IoT",
    tag: "AI + IoT",
    description:
      "Hệ sinh thái nông nghiệp thông minh cho cây sầu riêng tại Đắk Lắk; ứng dụng trên CH Play và phiên bản web (eaagri.vn, crm.eaagri.vn); 143 người dùng, 7 giao dịch, doanh thu 1.003.000 đồng.",
    award:
      "Á quân NTTU Innovation Startup Challenge 2026; Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12 (2026)",
    awardLabel: "Á quân NTTU 2026",
    kind: "award",
    team: [
      "Phan Đăng Huy (nhóm trưởng)",
      "Đặng Văn Chung",
      "Nguyễn Anh Giảng",
      "Huỳnh Anh Tuấn",
    ],
    needs: ["Phát triển ứng dụng", "Kiểm thử"],
    gradient:
      "linear-gradient(120deg, #04241c 0%, #0f6b4f 52%, #34d399 100%)",
  },
  {
    id: "sports-connect",
    name: "Sports Connect",
    monogram: "SC",
    field: "Nền tảng thể thao thời gian thực",
    tag: "Real-time",
    description:
      "Nền tảng cộng đồng thể thao thời gian thực, hỗ trợ tìm đối thủ, ghép trận và đặt sân.",
    award: "Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026",
    awardLabel: "Giải Ba Cardano SEA Hackathon 2026",
    kind: "award",
    team: ["Võ Văn Hải Long", "Bùi Nguyễn Phượng Uyên"],
    needs: ["Phát triển nền tảng"],
    gradient:
      "linear-gradient(120deg, #071340 0%, #1d4ed8 55%, #38bdf8 100%)",
  },
  {
    id: "dia-plus",
    name: "DIA+",
    monogram: "D+",
    field: "Hệ sinh thái quản lý tiểu đường, AI và OCR",
    tag: "Healthtech",
    description:
      "Hệ sinh thái quản lý tiểu đường ứng dụng AI và OCR, đồng hành người bệnh trong theo dõi và chăm sóc sức khỏe.",
    award: "Top 10 CYE Junior Vietnam 2026 (từ 80 đội; vào Top 30 trước đó)",
    awardLabel: "Top 10 CYE Junior Vietnam 2026",
    kind: "award",
    team: [
      "Nguyễn Trà Âu",
      "Nguyễn Lê Hồng Quý",
      "Lê Minh Khôi (NIIE)",
      "Nguyễn Huỳnh Như Ý (ĐH Ngân hàng TP.HCM)",
    ],
    needs: ["Phát triển OCR"],
    gradient:
      "linear-gradient(120deg, #062a4a 0%, #0e7490 52%, #22d3ee 100%)",
  },
  {
    id: "weavecarbon",
    name: "WeaveCarbon",
    monogram: "WC",
    field: "Hạ tầng dữ liệu carbon và khí hậu",
    tag: "Climate tech",
    description:
      "Hạ tầng dữ liệu carbon và khí hậu cho doanh nghiệp công nghiệp; mã dự án NTT-234.",
    award: "Quý quân NTTU Innovation Startup Challenge 2026",
    awardLabel: "Quý quân NTTU 2026",
    kind: "award",
    team: [
      "Thành viên Viện Đào tạo Song ngữ NTT và INNTECH CLUB",
      "Sinh viên UFM, Greenwich Vietnam và UIT",
    ],
    needs: ["Xử lý dữ liệu carbon"],
    gradient:
      "linear-gradient(120deg, #042f2e 0%, #0d9488 55%, #5eead4 100%)",
  },
  {
    id: "recyclebike",
    name: "RecycleBike",
    monogram: "RB",
    field: "Dự án thuộc hệ sinh thái CLB",
    tag: "Circular",
    description:
      "Dự án thuộc hệ sinh thái CLB, được CLB hỗ trợ và đồng hành.",
    award: "Top 60 vòng bán kết 1 cuộc thi Innostar",
    awardLabel: "Top 60 Innostar",
    kind: "award",
    needs: ["Đang cập nhật"],
    gradient:
      "linear-gradient(120deg, #0b2e1a 0%, #16a34a 55%, #86efac 100%)",
  },
  {
    id: "vietfarm-go",
    name: "VietFarm Go",
    monogram: "VF",
    field: "Dự án thuộc hệ sinh thái CLB",
    tag: "Agritech",
    description:
      "Dự án được CLB hỗ trợ, đồng hành trong quá trình phát triển sản phẩm.",
    award: "Dự án đồng hành cùng CLB",
    awardLabel: "Đồng hành cùng CLB",
    kind: "support",
    needs: ["Đang cập nhật"],
    gradient:
      "linear-gradient(120deg, #14532d 0%, #65a30d 55%, #d9f99d 100%)",
  },
  {
    id: "ipuni-market",
    name: "IPUni Market",
    monogram: "IP",
    field: "Dự án thuộc hệ sinh thái CLB",
    tag: "Marketplace",
    description:
      "Dự án được CLB hỗ trợ, đồng hành trong quá trình phát triển sản phẩm.",
    award: "Dự án đồng hành cùng CLB",
    awardLabel: "Đồng hành cùng CLB",
    kind: "support",
    needs: ["Đang cập nhật"],
    gradient:
      "linear-gradient(120deg, #1e1b4b 0%, #4f46e5 55%, #a5b4fc 100%)",
  },
];

export const teams: {
  id: string;
  name: string;
  project: string;
  members: string[];
  note?: string;
}[] = [
  {
    id: "team-eaagri",
    name: "Đội EaAgri",
    project: "EaAgri",
    members: [
      "Phan Đăng Huy (nhóm trưởng)",
      "Đặng Văn Chung",
      "Nguyễn Anh Giảng",
      "Huỳnh Anh Tuấn",
    ],
    note: "Mentor: Nguyễn Huỳnh Thông, Phạm Đình Tài, Hoàng Thịnh Nhân",
  },
  {
    id: "team-sports-connect",
    name: "Đội Sports Connect",
    project: "Sports Connect",
    members: ["Võ Văn Hải Long (Phó Chủ nhiệm CLB)", "Bùi Nguyễn Phượng Uyên"],
    note: "Cả hai sinh viên NIIE, lớp 25BITT01; gắn Ban Dự án & Công nghệ của INNTECH CLUB",
  },
  {
    id: "team-dia-plus",
    name: "Đội DIA+",
    project: "DIA+",
    members: [
      "Nguyễn Trà Âu",
      "Nguyễn Lê Hồng Quý",
      "Lê Minh Khôi (NIIE)",
      "Nguyễn Huỳnh Như Ý (ĐH Ngân hàng TP.HCM)",
    ],
    note: "Mentor: ThS. Lưu Thị Mỹ Ngọc, ThS. Cao Quản Huân",
  },
  {
    id: "team-weavecarbon",
    name: "Đội WeaveCarbon",
    project: "WeaveCarbon",
    members: [],
    note: "Thành phần đa trường: thành viên Viện Đào tạo Song ngữ NTT và INNTECH CLUB; sinh viên UFM, Greenwich Vietnam và UIT. Thông tin đội ngũ đang được cập nhật.",
  },
];

export const awards: {
  id: string;
  title: string;
  project: string;
  result: string;
  year: string;
}[] = [
  {
    id: "award-eaagri-nttu-isc-2026",
    title: "NTTU Innovation Startup Challenge 2026",
    project: "EaAgri",
    result: "Á quân",
    year: "2026",
  },
  {
    id: "award-eaagri-khoi-nghiep-xanh-12",
    title: "Khởi nghiệp Xanh lần thứ 12",
    project: "EaAgri",
    result: "Top chung kết toàn quốc",
    year: "2026",
  },
  {
    id: "award-weavecarbon-nttu-isc-2026",
    title: "NTTU Innovation Startup Challenge 2026",
    project: "WeaveCarbon",
    result: "Quý quân",
    year: "2026",
  },
  {
    id: "award-sports-connect-cardano-sea-2026",
    title: "Cardano SEA Hackathon 2026",
    project: "Sports Connect",
    result: "Giải Ba hạng mục AI",
    year: "2026",
  },
  {
    id: "award-dia-plus-cye-junior-2026",
    title: "CYE Junior Vietnam 2026",
    project: "DIA+",
    result: "Top 10",
    year: "2026",
  },
  {
    id: "award-recyclebike-innostar",
    title: "Innostar",
    project: "RecycleBike",
    result: "Top 60 vòng bán kết",
    year: "2026",
  },
];

export const openRoles: FilterItem[] = [
  {
    id: "role-open-eaagri-app",
    title: "Phát triển ứng dụng EaAgri (mẫu)",
    description:
      "Tham gia phát triển ứng dụng nông nghiệp thông minh.",
    category: "Phát triển phần mềm",
    meta: "EaAgri",
    chips: ["Theo dự án", "Phát triển ứng dụng"],
    href: "mailto:inntechclub@gmail.com",
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "role-open-dia-plus-design",
    title: "Thiết kế giao diện DIA+ (mẫu)",
    description:
      "Thiết kế trải nghiệm người dùng cho ứng dụng y tế số.",
    category: "Thiết kế",
    meta: "DIA+",
    chips: ["Theo dự án", "UI/UX"],
    href: "mailto:inntechclub@gmail.com",
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "role-open-weavecarbon-data",
    title: "Xử lý dữ liệu WeaveCarbon (mẫu)",
    description:
      "Xây dựng hệ thống dữ liệu carbon và khí hậu.",
    category: "Dữ liệu",
    meta: "WeaveCarbon",
    chips: ["Theo dự án", "Dữ liệu carbon"],
    href: "mailto:inntechclub@gmail.com",
    badge: "Mẫu",
    sample: true,
  },
];
