export const mentors: {
  id: string;
  name: string;
  initials: string;
  title?: string;
  areas: string[];
  projects: string[];
  note: string;
}[] = [
  {
    id: "mentor-nguyen-huynh-thong",
    name: "Nguyễn Huỳnh Thông",
    initials: "NHT",
    areas: ["AI & IoT", "Nông nghiệp thông minh"],
    projects: ["EaAgri"],
    note: "Hồ sơ đang được cập nhật.",
  },
  {
    id: "mentor-pham-dinh-tai",
    name: "Phạm Đình Tài",
    initials: "PĐT",
    areas: ["AI & IoT", "Nông nghiệp thông minh"],
    projects: ["EaAgri"],
    note: "Hồ sơ đang được cập nhật.",
  },
  {
    id: "mentor-hoang-thinh-nhan",
    name: "Hoàng Thịnh Nhân",
    initials: "HTN",
    areas: ["AI & IoT", "Nông nghiệp thông minh"],
    projects: ["EaAgri"],
    note: "Hồ sơ đang được cập nhật.",
  },
  {
    id: "mentor-luu-thi-my-ngoc",
    name: "Lưu Thị Mỹ Ngọc",
    initials: "LTMN",
    title: "ThS.",
    areas: ["Healthtech", "AI & OCR"],
    projects: ["DIA+"],
    note: "Hồ sơ đang được cập nhật.",
  },
  {
    id: "mentor-cao-quan-huan",
    name: "Cao Quản Huân",
    initials: "CQH",
    title: "ThS.",
    areas: ["Healthtech", "AI & OCR"],
    projects: ["DIA+"],
    note: "Hồ sơ đang được cập nhật.",
  },
];

export const mentoringSteps: {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Gửi yêu cầu",
    description: "Sinh viên điền form yêu cầu mentoring.",
  },
  {
    number: "02",
    title: "Phân loại",
    description:
      "CLB phân loại theo chủ đề dự án và gán mentor phù hợp.",
  },
  {
    number: "03",
    title: "Kết nối",
    description: "CLB kết nối sinh viên với mentor.",
  },
  {
    number: "04",
    title: "Theo dõi",
    description: "Theo dõi tiến độ và hiệu quả mentoring.",
  },
];
