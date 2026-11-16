import type { FilterItem } from "./types";

export const leaders: {
  name: string;
  role: string;
  note: string;
  initial: string;
}[] = [
  {
    name: "Nguyễn Lâm Chí Hải",
    role: "Chủ nhiệm",
    note: "Nhân sự NIIC; đầu mối liên hệ của CLB; email nlchai@ntt.edu.vn",
    initial: "H",
  },
  {
    name: "Võ Văn Hải Long",
    role: "Phó Chủ nhiệm",
    note: "Gắn với mảng dự án – công nghệ; thành viên dự án Sports Connect",
    initial: "L",
  },
  {
    name: "Nguyễn Hoàng Yến",
    role: "Ủy viên",
    note: "Nhiệm kỳ 2025–2026",
    initial: "Y",
  },
  {
    name: "Nguyễn Nhật An",
    role: "Ủy viên",
    note: "Nhiệm kỳ 2025–2026",
    initial: "A",
  },
];

export const departments: {
  number: string;
  name: string;
  text: string;
}[] = [
  {
    number: "01",
    name: "Ban Dự án & Công nghệ",
    text: "Đồng hành dự án, phát triển sản phẩm, các vấn đề kỹ thuật và công nghệ",
  },
  {
    number: "02",
    name: "Ban Đối nội",
    text: "Kết nối thành viên, vận hành nội bộ, xây dựng văn hóa CLB",
  },
  {
    number: "03",
    name: "Ban Đối ngoại",
    text: "Quan hệ đối tác, doanh nghiệp, trường bạn, nhà tài trợ",
  },
  {
    number: "04",
    name: "Ban Nhân lực",
    text: "Tuyển dụng, đào tạo, phát triển thành viên",
  },
  {
    number: "05",
    name: "Ban Sáng tạo",
    text: "Ý tưởng, nghiên cứu, sáng kiến đổi mới",
  },
  {
    number: "06",
    name: "Ban Truyền thông",
    text: "Nội dung, fanpage, hình ảnh, truyền thông sự kiện",
  },
];

export const challenges: FilterItem[] = [
  {
    id: "challenge-30-ngay-code",
    title: "30 ngày code",
    description: "Viết code mỗi ngày trong 30 ngày, công khai tiến độ.",
    category: "Code",
    meta: "30 ngày",
    chips: ["Giải thưởng: chứng nhận tham gia (mẫu)"],
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "challenge-design-sprint",
    title: "Design sprint",
    description: "Thiết kế nguyên mẫu sản phẩm trong 5 ngày.",
    category: "Design",
    meta: "5 ngày",
    chips: ["Giải thưởng: phản hồi từ mentor (mẫu)"],
    badge: "Mẫu",
    sample: true,
  },
  {
    id: "challenge-startup-pitch",
    title: "Startup pitch",
    description: "Trình bày ý tưởng khởi nghiệp trong 3 phút.",
    category: "Pitch",
    meta: "3 phút",
    chips: ["Giải thưởng: cơ hội trực tiếp với doanh nghiệp (mẫu)"],
    badge: "Mẫu",
    sample: true,
  },
];

export const achievements: {
  id: string;
  title: string;
  detail: string;
  year: string;
}[] = [
  {
    id: "nttu-eaagri-a-quan",
    title: "Á quân NTTU Innovation Startup Challenge 2026",
    detail: "Dự án EaAgri",
    year: "2026",
  },
  {
    id: "khoi-nghiep-xanh-12",
    title: "Top chung kết toàn quốc Khởi nghiệp Xanh lần thứ 12",
    detail: "Dự án EaAgri",
    year: "2026",
  },
  {
    id: "nttu-weavecarbon-quy-quan",
    title: "Quý quân NTTU Innovation Startup Challenge 2026",
    detail: "Dự án WeaveCarbon",
    year: "2026",
  },
  {
    id: "cardano-sports-connect",
    title: "Giải Ba hạng mục AI tại Cardano SEA Hackathon 2026",
    detail: "Dự án Sports Connect",
    year: "2026",
  },
  {
    id: "cye-dia-plus",
    title: "Top 10 CYE Junior Vietnam 2026",
    detail: "Dự án DIA+",
    year: "2026",
  },
  {
    id: "innostar-recyclebike",
    title: "Top 60 vòng bán kết Innostar",
    detail: "Dự án RecycleBike",
    year: "2026",
  },
  {
    id: "istar-n4015",
    title: "I-Star 2026 — mã số N4015",
    detail: "CLB là đại diện của NTTU tham gia I-Star 2026",
    year: "2026",
  },
  {
    id: "siev2026-2-papers",
    title: "2 bài báo tại hội nghị SIEV2026",
    detail: "Công bố khoa học của thành viên CLB",
    year: "2026",
  },
  {
    id: "aiia2026-1-paper",
    title: "1 bài báo tại hội nghị AIIA 2026",
    detail: "Công bố khoa học của thành viên CLB",
    year: "2026",
  },
];

export const recruitmentSteps: {
  number: string;
  title: string;
  description: string;
  dateLabel?: string;
}[] = [
  {
    number: "01",
    title: "Nộp hồ sơ trực tuyến",
    description:
      "Nộp hồ sơ trực tuyến trong đợt tuyển thành viên năm 2026. Mùa tuyển năm 2026 đã qua.",
    dateLabel: "27/05/2026 – 03/06/2026",
  },
  {
    number: "02",
    title: "Phỏng vấn",
    description:
      "Phỏng vấn sau vòng nộp hồ sơ. Mùa tuyển năm 2026 đã qua.",
    dateLabel: "Sau vòng nộp hồ sơ",
  },
  {
    number: "03",
    title: "Mùa tuyển tiếp theo",
    description:
      "Mùa tuyển tiếp theo sẽ được công bố trên fanpage của CLB.",
    dateLabel: "Đang cập nhật",
  },
];
