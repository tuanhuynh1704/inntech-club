import type { FilterItem } from "./types";

export type OpportunityItem = FilterItem & {
  status: "past" | "upcoming" | "sample";
  dateLabel?: string;
  result?: string;
};

const FANPAGE_URL = "https://www.facebook.com/inntechclub";

export const events: OpportunityItem[] = [
  {
    id: "event-gala-njec-2025",
    title: "GALA NJEC 2025 — Lễ ra mắt CLB",
    description:
      "Lễ ra mắt CLB tại GALA NJEC 2025, hội trường A.803, NTTU. CLB công bố Ban Chủ nhiệm đầu tiên và giới thiệu hơn 50 thành viên đầu tiên.",
    category: "Sự kiện",
    meta: "16/11/2025",
    dateLabel: "16/11/2025",
    result: "Hơn 50 thành viên đầu tiên",
    chips: ["Ra mắt CLB", "NTTU", "GALA NJEC 2025"],
    href: "https://www.facebook.com/inntechclub/posts/122103625425147225",
    external: true,
    status: "past",
  },
  {
    id: "event-nttu-university-meetup-2025",
    title: "NTTU – University Meetup 2025",
    description:
      "Chương trình quy tụ khoảng 200 người tham dự, tạo không gian kết nối giữa sinh viên, giảng viên và các diễn giả, chuyên gia trong lĩnh vực công nghệ, khởi nghiệp.",
    category: "Sự kiện",
    meta: "2025",
    dateLabel: "2025",
    result: "Khoảng 200 người tham dự",
    chips: ["University Meetup", "Kết nối", "NTTU"],
    status: "past",
  },
  {
    id: "event-venture-forum-2026",
    title: "Venture Forum 2026",
    description:
      "CLB tham gia Venture Forum 2026 với chủ đề “Vietnam's M&A Moment – The Unseen Dynamics”, diễn đàn quy tụ hơn 500 lãnh đạo, doanh nhân và chuyên gia về thị trường mua bán – sáp nhập và đầu tư.",
    category: "Sự kiện",
    meta: "12/06/2026",
    dateLabel: "12/06/2026",
    result: "Hơn 500 lãnh đạo, chủ đề M&A",
    chips: ["Venture Forum", "M&A", "TP. Hồ Chí Minh"],
    href: "https://www.facebook.com/inntechclub/posts/122128731711147225",
    external: true,
    status: "past",
  },
  {
    id: "event-university-meetup-1-2026",
    title: "University Meetup #1",
    description:
      "Phòng A801, NTTU — chủ đề “Hiểu Quỹ đầu tư – Nâng cao cơ hội gọi vốn cho Startup trẻ”. Sự kiện giúp sinh viên hiểu cách quỹ đầu tư đánh giá dự án, chuẩn bị hồ sơ gọi vốn và nâng cao khả năng tiếp cận nguồn vốn.",
    category: "Sự kiện",
    meta: "19/07/2026",
    dateLabel: "19/07/2026",
    result: "Hơn 60 lượt đăng ký",
    chips: ["University Meetup", "Gọi vốn", "NTTU"],
    status: "past",
  },
  {
    id: "event-university-meetup-3-2026",
    title: "University Meetup #3",
    description:
      "Phòng D205, NTTU — chủ đề “Từ Web2 đến Web3: Nâng cấp sản phẩm chinh phục Hackathon”. Sự kiện tập trung vào kỹ năng nâng cấp sản phẩm, tư duy Web3 và kinh nghiệm thi hackathon.",
    category: "Sự kiện",
    meta: "27/08/2026",
    dateLabel: "27/08/2026",
    result: "72 lượt đăng ký, hơn 40 người tham dự",
    chips: ["University Meetup", "Web2 đến Web3", "NTTU"],
    status: "past",
  },
  {
    id: "event-ngay-hoi-khoi-nghiep-2026",
    title: "Ngày hội Khởi nghiệp và Tìm kiếm Ý tưởng Sáng tạo lần VII – 2026",
    description:
      "CLB tham gia Ngày hội Khởi nghiệp và Tìm kiếm Ý tưởng Sáng tạo lần VII – 2026 với gian hàng INNTECH, tổ chức minigame và trao quà tặng Canva Pro cho người tham gia.",
    category: "Sự kiện",
    meta: "2026",
    dateLabel: "2026",
    chips: ["Ngày hội Khởi nghiệp", "Gian hàng INNTECH", "NTTU"],
    href: "https://www.facebook.com/inntechclub/posts/122129513385147225",
    external: true,
    status: "past",
  },
  {
    id: "event-trung-thu-sang-tao-2026",
    title: "Trung thu Sáng tạo 2026",
    description:
      "Chương trình cộng đồng do CLB tổ chức: tại Mỹ Yên (Tây Ninh) — 35 học sinh và 800 phần quà; tại Song Phú (Vĩnh Long) — 20 phần quà.",
    category: "Sự kiện",
    meta: "2026",
    dateLabel: "2026",
    result: "35 học sinh, 800 phần quà; 20 phần quà",
    chips: ["Cộng đồng", "Mỹ Yên (Tây Ninh)", "Song Phú (Vĩnh Long)"],
    href: "https://www.facebook.com/inntechclub/posts/122135615889147225",
    external: true,
    status: "past",
  },
];

export const competitions: OpportunityItem[] = [
  {
    id: "competition-nttu-isc-2026",
    title: "NTTU Innovation Startup Challenge 2026",
    description:
      "Cuộc thi khởi nghiệp. EaAgri đạt Á quân; WeaveCarbon đạt Quý quân.",
    category: "Cuộc thi",
    meta: "2026",
    dateLabel: "2026",
    result: "Á quân (EaAgri); Quý quân (WeaveCarbon)",
    chips: ["Khởi nghiệp", "EaAgri", "WeaveCarbon"],
    status: "past",
  },
  {
    id: "competition-i-star-2026",
    title: "I-Star 2026",
    description:
      "CLB là đại diện của NTTU tham gia I-Star 2026 với mã số N4015.",
    category: "Cuộc thi",
    meta: "2026",
    dateLabel: "2026",
    result: "Đại diện NTTU, mã số N4015",
    chips: ["I-Star 2026", "Đại diện NTTU", "N4015"],
    href: "https://www.facebook.com/inntechclub/posts/122144502633147225",
    external: true,
    status: "past",
  },
  {
    id: "competition-khoi-nghiep-xanh-12",
    title: "Khởi nghiệp Xanh lần thứ 12 (2026)",
    description:
      "Cuộc thi khởi nghiệp. EaAgri vào Top chung kết toàn quốc.",
    category: "Cuộc thi",
    meta: "2026",
    dateLabel: "2026",
    result: "Top chung kết toàn quốc (EaAgri)",
    chips: ["Khởi nghiệp Xanh", "EaAgri", "Toàn quốc"],
    status: "past",
  },
  {
    id: "competition-cye-junior-2026",
    title: "CYE Junior Vietnam 2026",
    description:
      "Cuộc thi khởi nghiệp. DIA+ từ Top 30 (từ 80 đội) đạt Top 10.",
    category: "Cuộc thi",
    meta: "2026",
    dateLabel: "2026",
    result: "Top 10 (DIA+)",
    chips: ["CYE Junior", "DIA+", "Khởi nghiệp"],
    href: "https://www.facebook.com/inntechclub/posts/122134204941147225",
    external: true,
    status: "past",
  },
  {
    id: "competition-innostar",
    title: "Innostar",
    description:
      "Cuộc thi khởi nghiệp. RecycleBike góp mặt trong Top 60 vòng bán kết.",
    category: "Cuộc thi",
    meta: "2026",
    dateLabel: "2026",
    result: "Top 60 vòng bán kết (RecycleBike)",
    chips: ["Innostar", "RecycleBike", "Khởi nghiệp"],
    status: "past",
  },
];

export const hackathons: OpportunityItem[] = [
  {
    id: "hackathon-cardano-sea-2026",
    title: "Cardano SEA Hackathon 2026",
    description:
      "Sports Connect đạt Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026.",
    category: "Hackathon",
    meta: "2026",
    dateLabel: "2026",
    result: "Giải Ba hạng mục AI (Sports Connect)",
    chips: ["Cardano SEA", "Sports Connect", "AI"],
    href: "https://tuyensinh.ntt.edu.vn/sinh-vien-niie-dat-giai-ba-tai-cardano-sea-hackathon-2026-voi-du-an-sports-connect-p888.html",
    external: true,
    status: "past",
  },
  {
    id: "hackathon-cong-nghe-sample",
    title: "Hackathon công nghệ (mẫu)",
    description:
      "Thông tin đang cập nhật. Theo dõi fanpage để nhận thông báo chính thức.",
    category: "Hackathon",
    meta: "Thông tin đang cập nhật",
    chips: ["Hackathon", "Đang cập nhật"],
    badge: "Mẫu",
    sample: true,
    status: "sample",
  },
];

export const scholarships: OpportunityItem[] = [
  {
    id: "scholarship-nttu-sample",
    title: "Học bổng học sinh NTTU (mẫu)",
    description:
      "Thông tin đang cập nhật. Theo dõi fanpage để nhận thông báo học bổng chính thức.",
    category: "Học bổng",
    meta: "Thông tin đang cập nhật",
    chips: ["Học bổng", "NTTU"],
    href: FANPAGE_URL,
    external: true,
    badge: "Mẫu",
    sample: true,
    status: "sample",
  },
  {
    id: "scholarship-doanh-nghiep-sample",
    title: "Học bổng doanh nghiệp cộng tác (mẫu)",
    description:
      "Thông tin đang cập nhật. Theo dõi fanpage để nhận thông báo học bổng chính thức.",
    category: "Học bổng",
    meta: "Thông tin đang cập nhật",
    chips: ["Học bổng", "Đang cập nhật"],
    href: FANPAGE_URL,
    external: true,
    badge: "Mẫu",
    sample: true,
    status: "sample",
  },
];

export const jobs: OpportunityItem[] = [
  {
    id: "job-intern-software-sample",
    title: "Vị trí thực tập sinh phát triển phần mềm (mẫu)",
    description:
      "Thông tin đang cập nhật. Theo dõi fanpage để nhận thông báo tuyển dụng chính thức.",
    category: "Việc làm",
    meta: "Thông tin đang cập nhật",
    chips: ["Việc làm", "Phát triển phần mềm"],
    href: FANPAGE_URL,
    external: true,
    badge: "Mẫu",
    sample: true,
    status: "sample",
  },
  {
    id: "job-partnership-product-sample",
    title: "Vị trí Partnership sản phẩm (mẫu)",
    description:
      "Thông tin đang cập nhật. Theo dõi fanpage để nhận thông báo tuyển dụng chính thức.",
    category: "Việc làm",
    meta: "Thông tin đang cập nhật",
    chips: ["Việc làm", "Partnership sản phẩm"],
    href: FANPAGE_URL,
    external: true,
    badge: "Mẫu",
    sample: true,
    status: "sample",
  },
];
