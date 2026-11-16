import type { FilterItem } from "./types";

export const documents: FilterItem[] = [
  {
    id: "mdn-web-docs",
    title: "MDN Web Docs",
    description: "Học liệu phát triển web chuẩn (HTML, CSS, JavaScript) từ Mozilla.",
    category: "Tài liệu tham khảo",
    meta: "Tất cả cấp độ · Tự học",
    chips: ["MDN", "Web development"],
    href: "https://developer.mozilla.org",
    external: true,
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description: "Khóa học lập trình miễn phí, dự án thực hành và chứng chỉ.",
    category: "Khóa học",
    meta: "Người mới · 300+ giờ",
    chips: ["freeCodeCamp", "Lập trình"],
    href: "https://www.freecodecamp.org",
    external: true,
  },
  {
    id: "roadmap-sh",
    title: "roadmap.sh",
    description: "Lộ trình học trực quan cho frontend, backend, DevOps và nhiều vai trò nghề nghiệp khác.",
    category: "Lộ trình",
    meta: "Người mới · Tùy lộ trình",
    chips: ["roadmap.sh", "Lộ trình nghề"],
    href: "https://roadmap.sh",
    external: true,
  },
  {
    id: "kaggle",
    title: "Kaggle",
    description: "Bộ dữ liệu, notebook và cộng đồng khoa học dữ liệu để thực hành.",
    category: "Nền tảng",
    meta: "Tất cả cấp độ · Tự học",
    chips: ["Kaggle", "Data science"],
    href: "https://www.kaggle.com",
    external: true,
  },
  {
    id: "google-ai",
    title: "Google AI",
    description: "Học liệu và công cụ AI của Google (Gemini, máy học).",
    category: "Nền tảng",
    meta: "Tất cả cấp độ · Tự học",
    chips: ["Google AI", "AI / Máy học"],
    href: "https://ai.google",
    external: true,
  },
  {
    id: "coursera",
    title: "Coursera",
    description: "Khóa học trực tuyến từ các trường đại học và doanh nghiệp hàng đầu.",
    category: "Khóa học",
    meta: "Tất cả cấp độ · 4–12 tuần/khóa",
    chips: ["Coursera", "Đa lĩnh vực"],
    href: "https://www.coursera.org",
    external: true,
  },
  {
    id: "figma-learn",
    title: "Figma Learn",
    description: "Trung tâm học thiết kế giao diện và tạo mẫu trong Figma.",
    category: "Khóa học",
    meta: "Người mới · Tự học",
    chips: ["Figma", "UI/UX design"],
    href: "https://www.figma.com/learn",
    external: true,
  },
  {
    id: "harvard-cs50",
    title: "Harvard CS50",
    description: "Khóa học khoa học máy tính mở của Đại học Harvard, miễn phí cho tất cả mọi người.",
    category: "Khóa học",
    meta: "Người mới · 11 tuần",
    chips: ["Harvard CS50", "Khoa học máy tính"],
    href: "https://cs50.harvard.edu",
    external: true,
  },
  {
    id: "typescript-handbook",
    title: "TypeScript Handbook",
    description: "Hướng dẫn chính thức về ngôn ngữ TypeScript từ đội ngũ phát triển.",
    category: "Tài liệu tham khảo",
    meta: "Trung cấp · Tự học",
    chips: ["TypeScript", "Lập trình"],
    href: "https://www.typescriptlang.org",
    external: true,
  },
  {
    id: "react-dev",
    title: "React.dev",
    description: "Tài liệu chính thức của React (React 19+), kèm hướng dẫn từng bước cho người mới.",
    category: "Tài liệu tham khảo",
    meta: "Trung cấp · Tự học",
    chips: ["React", "Giao diện"],
    href: "https://react.dev",
    external: true,
  },
];

export const slides: FilterItem[] = [
  {
    id: "slide-ai-co-ban",
    title: "AI cơ bản — Workshop CLB",
    description: "Chủ đề AI cơ bản, trình bày tại workshop nội bộ INNTECH. File slide đang được chuẩn hóa.",
    category: "Slide",
    meta: "Workshop · INNTECH",
    chips: ["AI", "Workshop"],
    badge: "Sắp cập nhật",
  },
  {
    id: "slide-web2-web3",
    title: "Web2 → Web3 — Workshop CLB",
    description: "Chủ đề Web3 / Hackathon, trình bày tại University Meetup #3 (27/08/2026). File slide đang được chuẩn hóa.",
    category: "Slide",
    meta: "Meetup · University Meetup #3",
    chips: ["Web3", "Workshop"],
    badge: "Sắp cập nhật",
  },
  {
    id: "slide-canva",
    title: "Mẫu slide Canva",
    description: "Thư viện mẫu slide của Canva: chọn mẫu phù hợp, tùy chỉnh màu sắc và nội dung.",
    category: "Slide",
    meta: "Canva · Thư viện mẫu",
    chips: ["Canva", "Mẫu slide"],
    href: "https://www.canva.com",
    external: true,
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "slide-figma-learn",
    title: "Mẫu slide Figma Learn",
    description: "Tài nguyên và hướng dẫn thiết kế slide, prototype trong Figma Learn.",
    category: "Slide",
    meta: "Figma Learn · Thư viện mẫu",
    chips: ["Figma", "Mẫu slide"],
    href: "https://www.figma.com/learn",
    external: true,
    badge: "Mẫu",
    sample: true,
  },
];

export const videos: FilterItem[] = [
  {
    id: "yt-freecodecamp",
    title: "freeCodeCamp",
    description: "Kênh hướng dẫn lập trình miễn phí từ cơ bản đến nâng cao.",
    category: "Lập trình",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Lập trình"],
    href: "https://www.youtube.com/@freecodecamp",
    external: true,
  },
  {
    id: "yt-fireship",
    title: "Fireship",
    description: "Code nhanh và cập nhật công nghệ mới trong 100 giây.",
    category: "Lập trình",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Lập trình"],
    href: "https://www.youtube.com/@Fireship",
    external: true,
  },
  {
    id: "yt-google-cloud-tech",
    title: "Google Cloud Tech",
    description: "Học điện toán đám mây và AI của Google từ kênh chính thức.",
    category: "Cloud & AI",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Cloud", "AI"],
    href: "https://www.youtube.com/@GoogleCloudTech",
    external: true,
  },
  {
    id: "yt-figma",
    title: "Figma",
    description: "Hướng dẫn thiết kế giao diện và tạo mẫu chính thức từ Figma.",
    category: "Thiết kế",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Thiết kế"],
    href: "https://www.youtube.com/@Figma",
    external: true,
  },
  {
    id: "yt-3blue1brown",
    title: "3Blue1Brown",
    description: "Giải thích toán học và máy học bằng hình ảnh trực quan sinh động.",
    category: "Toán & AI",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Toán học", "AI"],
    href: "https://www.youtube.com/@3blue1brown",
    external: true,
  },
  {
    id: "yt-crashcourse",
    title: "CrashCourse",
    description: "Khóa học ngắn gọn đa chủ đề (khoa học, kỹ thuật và nhiều lĩnh vực khác).",
    category: "Khoa học",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Khoa học"],
    href: "https://www.youtube.com/@crashcourse",
    external: true,
  },
  {
    id: "yt-google-developers",
    title: "Google Developers",
    description: "Kênh chính thức dành cho nhà phát triển của Google.",
    category: "Lập trình",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Lập trình"],
    href: "https://www.youtube.com/@GoogleDevelopers",
    external: true,
  },
  {
    id: "yt-traversy-media",
    title: "Traversy Media",
    description: "Hướng dẫn phát triển web thực tế theo dự án.",
    category: "Lập trình Web",
    meta: "Kênh YouTube",
    chips: ["YouTube", "Web"],
    href: "https://www.youtube.com/@TraversyMedia",
    external: true,
  },
];

export const skillGroups: {
  id: string;
  title: string;
  description: string;
  steps: string[];
}[] = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    description: "Nền tảng AI/Machine Learning từ con số không đến mô hình đơn giản.",
    steps: [
      "Học Python cơ bản",
      "Học thư viện máy học (NumPy, pandas, scikit-learn)",
      "Xây dựng mô hình đơn giản và đánh giá kết quả",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Từ nền tảng web cơ bản đến ứng dụng React/Next.js hoàn chỉnh.",
    steps: [
      "HTML/CSS",
      "JavaScript",
      "Framework React/Next.js",
    ],
  },
  {
    id: "data",
    title: "Data Analysis",
    description: "Phân tích dữ liệu từ bảng tính đến thống kê và trực quan hóa.",
    steps: [
      "Excel/SQL",
      "Trực quan hóa dữ liệu",
      "Suy luận thống kê",
    ],
  },
  {
    id: "product",
    title: "Product & Startup",
    description: "Từ ý tưởng đến sản phẩm khả dụng và kiểm thử thị trường.",
    steps: [
      "Nghiên cứu người dùng",
      "Xây dựng MVP",
      "Kiểm thử thị trường",
    ],
  },
  {
    id: "design",
    title: "Design (UI/UX)",
    description: "Từ nguyên tắc thiết kế đến kiểm thử khả dụng sản phẩm.",
    steps: [
      "Nguyên tắc thiết kế",
      "Công cụ Figma",
      "Kiểm thử khả dụng (usability testing)",
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Kỹ năng giao tiếp và làm việc nhóm cho môi trường câu lạc bộ và doanh nghiệp.",
    steps: [
      "Truyền đạt và thuyết trình",
      "Làm việc nhóm",
      "Quản lý thời gian",
    ],
  },
];

export const learningPaths: {
  id: string;
  title: string;
  description: string;
  duration: string;
  outcome: string;
  stages: { title: string; description: string }[];
}[] = [
  {
    id: "ai-explorer",
    title: "AI Explorer",
    description: "Lộ trình nhập môn AI/Machine Learning dành cho sinh viên biết lập trình cơ bản.",
    duration: "8–12 tuần",
    outcome: "Xây dựng được ứng dụng AI đơn giản.",
    stages: [
      {
        title: "Python cơ bản",
        description: "Cú pháp, kiểu dữ liệu, hàm, module và môi trường làm việc Python.",
      },
      {
        title: "Dữ liệu",
        description: "Xử lý và khám phá dữ liệu với NumPy và pandas.",
      },
      {
        title: "Máy học giám sát",
        description: "Hồi quy, phân loại và đánh giá mô hình với scikit-learn.",
      },
      {
        title: "Mô hình ngôn ngữ",
        description: "Làm quen với mô hình ngôn ngữ lớn (LLM), prompt và API.",
      },
      {
        title: "Dự án AI nhỏ",
        description: "Xây dựng và giới thiệu một ứng dụng AI đơn giản hoàn chỉnh.",
      },
    ],
  },
  {
    id: "web-builder",
    title: "Web Builder",
    description: "Lộ trình xây dựng trang web hiện đại từ nền tảng đến triển khai thực tế.",
    duration: "10–14 tuần",
    outcome: "Có trang web cá nhân hoàn chỉnh và triển khai trực tuyến.",
    stages: [
      {
        title: "HTML/CSS",
        description: "Cấu trúc trang, bố cục responsive và phong cách hiển thị.",
      },
      {
        title: "JavaScript",
        description: "Ngôn ngữ, DOM và tương tác trên trang web.",
      },
      {
        title: "React",
        description: "Component, state, props và xây dựng giao diện theo mô hình component.",
      },
      {
        title: "Next.js và triển khai",
        description: "Routing, rendering, tối ưu hiệu năng và deploy lên môi trường thật.",
      },
    ],
  },
  {
    id: "product-startup",
    title: "Product & Startup",
    description: "Lộ trình biến ý tưởng thành sản phẩm khả dụng và kiểm chứng với thị trường.",
    duration: "8–12 tuần",
    outcome: "Có project brief và MVP khởi nghiệp.",
    stages: [
      {
        title: "Ý tưởng",
        description: "Xác định vấn đề, đối tượng người dùng và đề xuất giải pháp.",
      },
      {
        title: "Nghiên cứu người dùng",
        description: "Phỏng vấn, khảo sát và tổng hợp insight của người dùng mục tiêu.",
      },
      {
        title: "MVP",
        description: "Xây dựng phiên bản khả dụng tối thiểu để kiểm chứng giả thuyết.",
      },
      {
        title: "Gọi vốn / phiên bản đầu",
        description: "Chuẩn bị project brief, gọi vốn và ra mắt phiên bản đầu tiên.",
      },
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Lộ trình phân tích dữ liệu từ công cụ cơ bản đến báo cáo hoàn chỉnh.",
    duration: "8–10 tuần",
    outcome: "Có bảng điều khiển dữ liệu đầu tiên.",
    stages: [
      {
        title: "Excel/SQL",
        description: "Xử lý bảng tính, truy vấn và chuẩn hóa dữ liệu.",
      },
      {
        title: "Trực quan hóa dữ liệu",
        description: "Biểu đồ, dashboard và kể chuyện bằng dữ liệu.",
      },
      {
        title: "Thống kê",
        description: "Thống kê mô tả và suy luận thống kê cho quyết định.",
      },
      {
        title: "Báo cáo dữ liệu",
        description: "Tổng hợp kết quả thành báo cáo dữ liệu trình bày được cho bên liên quan.",
      },
    ],
  },
];
