export const partnerGroups: {
  id: string;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    id: "to-chuc-doanh-nghiep",
    title: "Tổ chức, hiệp hội, doanh nghiệp",
    description:
      "11 tổ chức, hiệp hội và doanh nghiệp CLB đã kết nối (theo hồ sơ I-Star 2026).",
    items: [
      "Hội Tư vấn, Đầu tư và Phát triển doanh nghiệp nhỏ và vừa TP. Hồ Chí Minh",
      "Hội đồng Tư vấn – Hỗ trợ khởi nghiệp phía Nam",
      "CLB Doanh nghiệp NTTU",
      "Viện Phát triển Kinh tế số Việt Nam",
      "BSA",
      "Felix",
      "Bụi Media",
      "Gia Đình Việt Retail",
      "Như Hồng",
      "Diễn đàn Doanh nghiệp",
      "Titops",
    ],
  },
  {
    id: "mang-luoi-lien-truong",
    title: "Mạng lưới liên trường",
    description:
      "4 trường đại học trong mạng lưới liên trường của CLB (theo hồ sơ I-Star 2026).",
    items: [
      "Trường Đại học Tôn Đức Thắng",
      "Trường Đại học Tài chính – Marketing (UFM)",
      "Trường Đại học Sài Gòn International",
      "Trường Đại học Giao thông Vận tải TP. Hồ Chí Minh (UTH)",
    ],
  },
];

export const services: {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
}[] = [
  {
    id: "dat-hang-cong-nghe",
    title: "Đặt hàng công nghệ",
    description:
      "Thiết kế, phát triển sản phẩm công nghệ theo yêu cầu của doanh nghiệp — từ landing page đến web app / MVP và tích hợp AI vào sản phẩm hiện có.",
    outcomes: [
      "Landing page giới thiệu sản phẩm/dự án",
      "Web app / MVP — ứng dụng web phiên bản đầu tiên",
      "Tích hợp AI vào sản phẩm hiện có",
    ],
  },
  {
    id: "dao-tao-workshop",
    title: "Hợp tác đào tạo & workshop",
    description:
      "Tổ chức workshop kỹ năng cho sinh viên và nhân viên đối tác.",
    outcomes: [
      "Workshop kỹ năng cho sinh viên và nhân viên đối tác",
      "Nội dung trao đổi theo nhu cầu cụ thể của đối tác",
    ],
  },
  {
    id: "tai-tro",
    title: "Tài trợ",
    description: "Tài trợ sự kiện, cuộc thi, hoạt động cộng đồng của CLB.",
    outcomes: [
      "Đồng hành cùng sự kiện, cuộc thi và hoạt động cộng đồng của CLB",
    ],
  },
  {
    id: "tuyen-dung",
    title: "Tuyển dụng",
    description:
      "Kết nối doanh nghiệp với thành viên CLB cho các vị trí việc làm và thực tập.",
    outcomes: [
      "Kết nối doanh nghiệp với thành viên CLB cho vị trí việc làm, thực tập",
      "Liên hệ qua fanpage hoặc email inntechclub@gmail.com",
    ],
  },
];

export const processSteps: {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Gửi yêu cầu",
    description: "Doanh nghiệp điền form liên hệ.",
  },
  {
    number: "02",
    title: "CLB tư vấn",
    description: "CLB trao đổi nhu cầu và đề xuất phương án.",
  },
  {
    number: "03",
    title: "Thỏa thuận",
    description:
      "Cả hai bên đồng ý scope, timeline và hình thức hợp tác.",
  },
  {
    number: "04",
    title: "Thực hiện",
    description: "CLB và đối tác thực hiện dự án/dịch vụ.",
  },
];

export const caseStudies: {
  id: string;
  project: string;
  field: string;
  result: string;
  description: string;
}[] = [
  {
    id: "case-eaagri",
    project: "EaAgri",
    field: "Nông nghiệp thông minh (AI + IoT)",
    result:
      "Á quân NTTU Innovation Startup Challenge 2026; Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12",
    description:
      "Hệ sinh thái nông nghiệp thông minh ứng dụng AI và IoT cho cây sầu riêng Đắk Lắk; có ứng dụng trên CH Play và phiên bản web (eaagri.vn).",
  },
  {
    id: "case-sports-connect",
    project: "Sports Connect",
    field: "Nền tảng cộng đồng thể thao thời gian thực",
    result: "Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026",
    description:
      "Nền tảng thể thao thời gian thực: tìm đối thủ, ghép trận và đặt sân.",
  },
  {
    id: "case-weavecarbon",
    project: "WeaveCarbon",
    field: "Hạ tầng dữ liệu carbon và khí hậu",
    result: "Quý quân NTTU Innovation Startup Challenge 2026",
    description:
      "Hạ tầng dữ liệu carbon và khí hậu cho doanh nghiệp công nghiệp; mã dự án NTT-234.",
  },
];
