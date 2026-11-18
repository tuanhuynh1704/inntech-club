import type { Hub } from "./types";

export const hubs: Hub[] = [
  {
    id: "home",
    number: "01",
    name: "Home",
    shortName: "Home",
    tagline: "Trang chủ, tìm kiếm, nội dung nổi bật",
    description:
      "Trang chủ INNTECH với tìm kiếm toàn nền tảng, danh sách 10 hub và các nội dung nổi bật của CLB.",
    href: "/",
    accent: "#071340",
    icon: "home",
    sections: [
      { id: "hubs", label: "Trang chủ" },
      { id: "gioi-thieu", label: "Giới thiệu" },
      { id: "gia-tri", label: "Giá trị" },
      { id: "hoat-dong", label: "Hoạt động" },
      { id: "du-an", label: "Dự án" },
      { id: "su-kien", label: "Sự kiện" },
      { id: "lien-he", label: "Liên hệ" },
    ],
  },
  {
    id: "student-hub",
    number: "02",
    name: "Student Hub",
    shortName: "Student Hub",
    tagline: "Bộ công cụ giúp việc học nhẹ hơn.",
    description:
      "Công cụ AI, công cụ học tập, mẫu CV, thư viện prompt và template dành cho sinh viên.",
    href: "/student-hub",
    accent: "#2254e8",
    icon: "student",
    sections: [
      { id: "ai-tools", label: "AI Tools" },
      { id: "study-tools", label: "Study Tools" },
      { id: "cv", label: "CV" },
      { id: "prompt", label: "Prompt" },
      { id: "templates", label: "Templates" },
    ],
  },
  {
    id: "learning-hub",
    number: "03",
    name: "Learning Hub",
    shortName: "Learning Hub",
    tagline: "Kho học liệu và lộ trình cho sinh viên.",
    description:
      "Tài liệu, slide, video, nhóm kỹ năng và lộ trình học từ các nguồn uy tín.",
    href: "/learning-hub",
    accent: "#0e7490",
    icon: "learning",
    sections: [
      { id: "tai-lieu", label: "Tài liệu" },
      { id: "slide", label: "Slide" },
      { id: "video", label: "Video" },
      { id: "skills", label: "Skills" },
      { id: "lo-trinh", label: "Lộ trình" },
    ],
  },
  {
    id: "opportunity-hub",
    number: "04",
    name: "Opportunity Hub",
    shortName: "Opportunity",
    tagline: "Cơ hội cho sinh viên NTTU.",
    description:
      "Sự kiện, cuộc thi, hackathon, học bổng và việc làm — cơ hội dành cho sinh viên NTTU.",
    href: "/opportunity-hub",
    accent: "#b45309",
    icon: "opportunity",
    sections: [
      { id: "su-kien", label: "Sự kiện" },
      { id: "cuoc-thi", label: "Cuộc thi" },
      { id: "hackathon", label: "Hackathon" },
      { id: "hoc-bong", label: "Học bổng" },
      { id: "jobs", label: "Jobs" },
    ],
  },
  {
    id: "project-hub",
    number: "05",
    name: "Project Hub",
    shortName: "Project Hub",
    tagline: "Không gian dự án của INNTECH.",
    description:
      "7 dự án hệ sinh thái của CLB, đội ngũ, thành tích và bản tin tìm cộng sự.",
    href: "/project-hub",
    accent: "#0f766e",
    icon: "project",
    sections: [
      { id: "du-an", label: "Dự án" },
      { id: "doi-ngu", label: "Đội ngũ" },
      { id: "thanh-tich", label: "Thành tích" },
      { id: "cong-su", label: "Tìm cộng sự" },
    ],
  },
  {
    id: "mentor-hub",
    number: "06",
    name: "Mentor Hub",
    shortName: "Mentor Hub",
    tagline: "Mạng lưới mentor đồng hành dự án.",
    description:
      "Kết nối sinh viên với mentor đồng hành dự án — hồ sơ, quy trình và form yêu cầu mentoring.",
    href: "/mentor-hub",
    accent: "#4f46e5",
    icon: "mentor",
    sections: [
      { id: "mentors", label: "Mentor" },
      { id: "quy-trinh", label: "Quy trình" },
      { id: "yeu-cau", label: "Gửi yêu cầu" },
    ],
  },
  {
    id: "marketplace",
    number: "07",
    name: "Tech Marketplace",
    shortName: "Marketplace",
    tagline: "Chợ sản phẩm công nghệ của sinh viên.",
    description:
      "Trưng bày sản phẩm thật của hệ sinh thái INNTECH và sản phẩm mẫu của sinh viên, kèm dịch vụ đặt hàng phát triển.",
    href: "/marketplace",
    accent: "#7c3aed",
    icon: "marketplace",
    sections: [
      { id: "showcase", label: "Showcase" },
      { id: "tools", label: "Tools" },
      { id: "app", label: "App" },
      { id: "game", label: "Game" },
      { id: "dat-hang", label: "Đặt hàng" },
    ],
  },
  {
    id: "community",
    number: "08",
    name: "Community",
    shortName: "Community",
    tagline: "Cộng đồng thành viên INNTECH.",
    description:
      "Ban chủ nhiệm, 6 ban chuyên môn, challenge, thành tích và thông tin tuyển thành viên.",
    href: "/community",
    accent: "#be123c",
    icon: "community",
    sections: [
      { id: "thanh-vien", label: "Thành viên" },
      { id: "challenge", label: "Challenge" },
      { id: "thanh-tich", label: "Thành tích" },
      { id: "tuyen-thanh-vien", label: "Tuyển thành viên" },
    ],
  },
  {
    id: "business-connect",
    number: "09",
    name: "Business Connect",
    shortName: "Business Connect",
    tagline: "Kết nối doanh nghiệp với INNTECH.",
    description:
      "Kết nối doanh nghiệp và trường đối tác với CLB để đặt hàng công nghệ, hợp tác và tài trợ.",
    href: "/business-connect",
    accent: "#0f766e",
    icon: "business",
    sections: [
      { id: "doi-tac", label: "Đối tác" },
      { id: "dich-vu", label: "Dịch vụ" },
      { id: "quy-trinh", label: "Quy trình" },
      { id: "lien-he", label: "Liên hệ" },
    ],
  },
  {
    id: "about",
    number: "10",
    name: "About Inntech",
    shortName: "About",
    tagline: "Giới thiệu câu lạc bộ INNTECH.",
    description:
      "Sứ mệnh, tầm nhìn, giá trị I-N-N-T-E-C-H, tổ chức, đối tác và thông tin liên hệ của CLB.",
    href: "/about",
    accent: "#071340",
    icon: "about",
    sections: [
      { id: "gioi-thieu", label: "Giới thiệu" },
      { id: "gia-tri", label: "Giá trị" },
      { id: "to-chuc", label: "Tổ chức" },
      { id: "doi-tac", label: "Đối tác" },
      { id: "lien-he", label: "Liên hệ" },
    ],
  },
] satisfies Hub[];

export function getHub(id: string): Hub | undefined {
  return hubs.find((hub) => hub.id === id);
}

export const hubByHref: Readonly<Record<string, Hub>> = Object.fromEntries(
  hubs.map((hub) => [hub.href, hub]),
);
