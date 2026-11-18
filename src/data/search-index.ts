import type { SearchEntry } from "./types";
import { hubs } from "./hubs";
import {
  aiTools,
  studyTools,
  cvChecklist,
  cvTemplates,
  prompts,
  templates,
} from "./student-hub";
import {
  documents,
  slides,
  videos,
  skillGroups,
  learningPaths,
} from "./learning-hub";
import {
  events,
  competitions,
  hackathons,
  scholarships,
  jobs,
} from "./opportunity-hub";
import { projects, teams, awards, openRoles } from "./project-hub";
import { mentors, mentoringSteps } from "./mentor-hub";
import {
  showcaseProducts,
  marketplaceProducts,
  serviceTiers,
  requestSteps,
} from "./marketplace";
import {
  leaders,
  departments,
  challenges,
  achievements,
  recruitmentSteps,
} from "./community";
import {
  partnerGroups,
  services,
  processSteps,
  caseStudies,
} from "./business-connect";
import { values, timeline, publications, aboutStats } from "./about";

export function normalizeVietnamese(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

const truncate = (value: string, max = 160): string =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;

const stripPrefix = (id: string, ...prefixes: string[]): string => {
  for (const prefix of prefixes) {
    if (id.startsWith(prefix)) return id.slice(prefix.length);
  }
  return id;
};

const SPLIT_RE = /[\s/,.()+–—:;"'“”‘’[\]{}]+/;

const uniq = (list: string[]): string[] =>
  Array.from(
    new Set(list.map((item) => item.trim()).filter((item) => item.length > 0)),
  );

const keywordList = (
  ...parts: Array<string | string[] | undefined>
): string[] => {
  const out: string[] = [];
  const push = (value?: string): void => {
    if (!value) return;
    const trimmed = value.trim();
    if (!trimmed) return;
    out.push(trimmed);
    for (const word of trimmed.split(SPLIT_RE)) {
      if (word.length > 1) out.push(word);
    }
  };
  for (const part of parts) {
    if (!part) continue;
    if (Array.isArray(part)) {
      for (const item of part) push(item);
    } else {
      push(part);
    }
  }
  return uniq(out);
};

const entries: SearchEntry[] = [];
const add = (entry: SearchEntry): void => {
  entries.push({ ...entry, keywords: uniq(entry.keywords) });
};

const hubName = (id: string): string =>
  hubs.find((hub) => hub.id === id)?.name ?? id;

const STUDENT = hubName("student-hub");
const LEARNING = hubName("learning-hub");
const OPPORTUNITY = hubName("opportunity-hub");
const PROJECT = hubName("project-hub");
const MENTOR = hubName("mentor-hub");
const MARKETPLACE = hubName("marketplace");
const COMMUNITY = hubName("community");
const BUSINESS = hubName("business-connect");
const ABOUT = hubName("about");

const productKindAnchor = (kind: "tool" | "app" | "game"): string =>
  kind === "tool" ? "tools" : kind;

// --- 10 hubs ---
for (const hub of hubs) {
  add({
    id: `hub-${hub.id}`,
    title: hub.name,
    description: hub.tagline,
    href: hub.href,
    hub: hub.name,
    kind: "Hub",
    keywords: keywordList(
      hub.shortName,
      hub.tagline,
      hub.number,
      hub.name,
      "hub",
      "inntech",
    ),
  });
}

// --- Student Hub ---
for (const tool of aiTools) {
  add({
    id: `ai-tool-${tool.id}`,
    title: tool.title,
    description: truncate(tool.description),
    href: "/student-hub#ai-tools",
    hub: STUDENT,
    kind: "Công cụ",
    keywords: keywordList(
      tool.title,
      tool.chips,
      tool.category,
      tool.meta,
      "AI",
      "công cụ AI",
      "AI tool",
      "trí tuệ nhân tạo",
      "trợ lý AI",
    ),
  });
}
for (const tool of studyTools) {
  add({
    id: `study-tool-${tool.id}`,
    title: tool.title,
    description: truncate(tool.description),
    href: "/student-hub#study-tools",
    hub: STUDENT,
    kind: "Công cụ",
    keywords: keywordList(
      tool.title,
      tool.chips,
      tool.category,
      tool.meta,
      "học tập",
      "study",
      "công cụ học",
      "ghi chú",
      "quản lý học tập",
    ),
  });
}
add({
  id: "cv-checklist",
  title: "CV Checklist — các mục cần có trong hồ sơ",
  description: truncate(cvChecklist.join(" ")),
  href: "/student-hub#cv",
  hub: STUDENT,
  kind: "Checklist",
  keywords: keywordList(
    "CV Checklist",
    cvChecklist,
    "CV",
    "hồ sơ xin việc",
    "resume",
    "sơ yếu lý lịch",
    "mẫu CV",
  ),
});
for (const template of cvTemplates) {
  add({
    id: `cv-${stripPrefix(template.id, "cv-")}`,
    title: template.title,
    description: truncate(template.description),
    href: "/student-hub#cv",
    hub: STUDENT,
    kind: "Mẫu",
    keywords: keywordList(
      template.title,
      template.chips,
      template.category,
      template.meta,
      "CV",
      "mẫu CV",
      "resume",
      "portfolio",
      "hồ sơ",
      "sơ yếu lý lịch",
    ),
  });
}
for (const prompt of prompts) {
  add({
    id: `prompt-${stripPrefix(prompt.id, "prompt-")}`,
    title: prompt.title,
    description: truncate(prompt.text),
    href: "/student-hub#prompt",
    hub: STUDENT,
    kind: "Prompt",
    keywords: keywordList(
      prompt.title,
      truncate(prompt.text, 160),
      prompt.tags,
      prompt.group,
      "prompt",
      "câu lệnh",
      "AI",
      "thư viện prompt",
    ),
  });
}
for (const template of templates) {
  add({
    id: `template-${stripPrefix(template.id, "template-")}`,
    title: template.title,
    description: truncate(template.description),
    href: "/student-hub#templates",
    hub: STUDENT,
    kind: "Mẫu",
    keywords: keywordList(
      template.title,
      template.chips,
      template.category,
      template.meta,
      "template",
      "mẫu",
      "project brief",
      "báo cáo",
    ),
  });
}

// --- Learning Hub ---
for (const doc of documents) {
  add({
    id: `document-${doc.id}`,
    title: doc.title,
    description: truncate(doc.description),
    href: "/learning-hub#tai-lieu",
    hub: LEARNING,
    kind: "Tài liệu",
    keywords: keywordList(
      doc.title,
      doc.chips,
      doc.category,
      doc.meta,
      "tài liệu",
      "tai lieu",
      "học liệu",
      "document",
      "khóa học",
      "tự học",
    ),
  });
}
for (const slide of slides) {
  add({
    id: `slide-${stripPrefix(slide.id, "slide-")}`,
    title: slide.title,
    description: truncate(slide.description),
    href: "/learning-hub#slide",
    hub: LEARNING,
    kind: "Slide",
    keywords: keywordList(
      slide.title,
      slide.chips,
      slide.category,
      slide.meta,
      "slide",
      "thuyết trình",
      "presentation",
      "workshop",
      "AI",
    ),
  });
}
for (const video of videos) {
  add({
    id: `video-${video.id}`,
    title: video.title,
    description: truncate(video.description),
    href: "/learning-hub#video",
    hub: LEARNING,
    kind: "Video",
    keywords: keywordList(
      video.title,
      video.chips,
      video.category,
      video.meta,
      "video",
      "youtube",
      "kênh",
      "học qua video",
    ),
  });
}
for (const group of skillGroups) {
  add({
    id: `skill-${group.id}`,
    title: group.title,
    description: truncate(group.description),
    href: "/learning-hub#skills",
    hub: LEARNING,
    kind: "Kỹ năng",
    keywords: keywordList(
      group.title,
      group.steps,
      "kỹ năng",
      "ky nang",
      "skill",
      "nhóm kỹ năng",
      group.id === "ai-ml" ? ["AI", "machine learning", "máy học"] : undefined,
    ),
  });
}
for (const path of learningPaths) {
  add({
    id: `path-${path.id}`,
    title: path.title,
    description: truncate(path.description),
    href: "/learning-hub#lo-trinh",
    hub: LEARNING,
    kind: "Lộ trình",
    keywords: keywordList(
      path.title,
      path.stages.map((stage) => stage.title),
      path.outcome,
      path.duration,
      "lộ trình",
      "lo trinh",
      "learning path",
      "học tập",
      path.id.includes("ai") ? ["AI", "machine learning"] : undefined,
    ),
  });
}

// --- Kho tài liệu (Google Drive) ---
add({
  id: "kho-tai-lieu",
  title: "Kho tài liệu học tập — Google Drive",
  description:
    "Tài liệu, slide, đề cương và video học tập của CLB được đồng bộ từ Google Drive — duyệt theo môn, tìm kiếm, xem trước và tải về.",
  href: "/kho-tai-lieu",
  hub: LEARNING,
  kind: "Tài liệu",
  keywords: [
    "kho tài liệu",
    "thư viện",
    "google drive",
    "pdf",
    "slide",
    "giáo trình",
    "đề cương",
    "tài liệu học tập",
    "tai lieu",
  ],
});

// --- Opportunity Hub ---
for (const event of events) {
  add({
    id: `event-${stripPrefix(event.id, "event-")}`,
    title: event.title,
    description: truncate(event.result ? `${event.description} Kết quả: ${event.result}.` : event.description),
    href: "/opportunity-hub#su-kien",
    hub: OPPORTUNITY,
    kind: "Cơ hội",
    keywords: keywordList(
      event.title,
      event.chips,
      event.category,
      event.dateLabel ?? event.meta,
      event.result,
      "sự kiện",
      "su kien",
      "event",
      "meetup",
      "hội thảo",
    ),
  });
}
for (const competition of competitions) {
  add({
    id: `competition-${stripPrefix(competition.id, "competition-")}`,
    title: competition.title,
    description: truncate(
      competition.result
        ? `${competition.description} Kết quả: ${competition.result}.`
        : competition.description,
    ),
    href: "/opportunity-hub#cuoc-thi",
    hub: OPPORTUNITY,
    kind: "Cơ hội",
    keywords: keywordList(
      competition.title,
      competition.chips,
      competition.category,
      competition.result,
      "cuộc thi",
      "cuoc thi",
      "competition",
      "khởi nghiệp",
      "startup",
      "EaAgri",
    ),
  });
}
for (const hackathon of hackathons) {
  add({
    id: `hackathon-${stripPrefix(hackathon.id, "hackathon-")}`,
    title: hackathon.title,
    description: truncate(
      hackathon.result
        ? `${hackathon.description} Kết quả: ${hackathon.result}.`
        : hackathon.description,
    ),
    href: "/opportunity-hub#hackathon",
    hub: OPPORTUNITY,
    kind: "Cơ hội",
    keywords: keywordList(
      hackathon.title,
      hackathon.chips,
      hackathon.category,
      hackathon.result,
      "hackathon",
      "thi đấu",
      "AI",
    ),
  });
}
for (const scholarship of scholarships) {
  add({
    id: `scholarship-${stripPrefix(scholarship.id, "scholarship-")}`,
    title: scholarship.title,
    description: truncate(scholarship.description),
    href: "/opportunity-hub#hoc-bong",
    hub: OPPORTUNITY,
    kind: "Cơ hội",
    keywords: keywordList(
      scholarship.title,
      scholarship.chips,
      scholarship.category,
      "học bổng",
      "hoc bong",
      "scholarship",
      "hỗ trợ sinh viên",
    ),
  });
}
for (const job of jobs) {
  add({
    id: `job-${stripPrefix(job.id, "job-")}`,
    title: job.title,
    description: truncate(job.description),
    href: "/opportunity-hub#jobs",
    hub: OPPORTUNITY,
    kind: "Cơ hội",
    keywords: keywordList(
      job.title,
      job.chips,
      job.category,
      "việc làm",
      "viec lam",
      "thực tập",
      "intern",
      "job",
      "tuyển dụng",
    ),
  });
}

// --- Project Hub ---
for (const project of projects) {
  add({
    id: `project-${project.id}`,
    title: project.name,
    description: truncate(project.description),
    href: "/project-hub#du-an",
    hub: PROJECT,
    kind: "Dự án",
    keywords: keywordList(
      project.name,
      project.field,
      project.tag,
      project.awardLabel,
      project.award,
      project.needs,
      "dự án",
      "du an",
      "project",
      project.id === "eaagri" ? "eaagri" : undefined,
      project.tag.toLowerCase().includes("ai") ? "AI" : undefined,
    ),
  });
}
for (const team of teams) {
  add({
    id: `team-${stripPrefix(team.id, "team-")}`,
    title: team.name,
    description: truncate(team.note ?? team.members.join(", ")),
    href: "/project-hub#doi-ngu",
    hub: PROJECT,
    kind: "Đội ngũ",
    keywords: keywordList(
      team.name,
      team.project,
      team.members,
      team.note,
      "đội ngũ",
      "doi ngu",
      "team",
      "thành viên dự án",
      team.project.toLowerCase().includes("eaagri") ? "eaagri" : undefined,
    ),
  });
}
for (const award of awards) {
  add({
    id: `award-${stripPrefix(award.id, "award-")}`,
    title: `${award.title} — ${award.project}`,
    description: truncate(`${award.year}: ${award.result} — dự án ${award.project}`),
    href: "/project-hub#thanh-tich",
    hub: PROJECT,
    kind: "Thành tích",
    keywords: keywordList(
      award.title,
      award.project,
      award.result,
      award.year,
      "giải thưởng",
      "thành tích",
      "award",
      "EaAgri",
    ),
  });
}
for (const role of openRoles) {
  add({
    id: `role-${stripPrefix(role.id, "role-")}`,
    title: role.title,
    description: truncate(role.description),
    href: "/project-hub#cong-su",
    hub: PROJECT,
    kind: "Cơ hội",
    keywords: keywordList(
      role.title,
      role.chips,
      role.category,
      role.meta,
      "cộng sự",
      "cong su",
      "tuyển",
      "tham gia dự án",
      "vai trò mở",
    ),
  });
}

// --- Mentor Hub ---
for (const mentor of mentors) {
  add({
    id: `mentor-${stripPrefix(mentor.id, "mentor-")}`,
    title: mentor.title ? `${mentor.title} ${mentor.name}` : mentor.name,
    description: truncate(mentor.note),
    href: "/mentor-hub#mentors",
    hub: MENTOR,
    kind: "Mentor",
    keywords: keywordList(
      mentor.name,
      mentor.title,
      mentor.areas,
      mentor.projects,
      mentor.initials,
      "mentor",
      "cố vấn",
      "mentoring",
      "hướng dẫn",
      "EaAgri",
    ),
  });
}
for (const step of mentoringSteps) {
  add({
    id: `mentor-step-${step.number}`,
    title: `Quy trình mentoring — Bước ${step.number}: ${step.title}`,
    description: truncate(step.description),
    href: "/mentor-hub#quy-trinh",
    hub: MENTOR,
    kind: "Quy trình",
    keywords: keywordList(
      step.title,
      step.description,
      "quy trình",
      "mentoring",
      "mentor",
      "cố vấn",
    ),
  });
}

// --- Marketplace ---
for (const product of showcaseProducts) {
  add({
    id: `showcase-${product.id}`,
    title: product.title,
    description: truncate(product.description),
    href: `/marketplace#${productKindAnchor(product.productKind)}`,
    hub: MARKETPLACE,
    kind: "Sản phẩm",
    keywords: keywordList(
      product.title,
      product.chips,
      product.category,
      product.platform,
      product.productKind,
      "sản phẩm",
      "san pham",
      "product",
      "showcase",
      product.productKind === "game" ? "game" : undefined,
      product.id === "eaagri" ? "eaagri" : undefined,
      product.chips?.includes("AI") ? "AI" : undefined,
    ),
  });
}
for (const product of marketplaceProducts) {
  add({
    id: `product-${product.id}`,
    title: product.title,
    description: truncate(product.description),
    href: `/marketplace#${productKindAnchor(product.productKind)}`,
    hub: MARKETPLACE,
    kind: "Sản phẩm",
    keywords: keywordList(
      product.title,
      product.chips,
      product.category,
      product.platform,
      product.productKind,
      "sản phẩm",
      "san pham",
      "marketplace",
      "chợ sản phẩm",
      product.productKind === "game" ? "game" : undefined,
    ),
  });
}
for (const tier of serviceTiers) {
  add({
    id: `service-tier-${tier.id}`,
    title: tier.title,
    description: truncate(tier.description),
    href: "/marketplace#dat-hang",
    hub: MARKETPLACE,
    kind: "Dịch vụ",
    keywords: keywordList(
      tier.title,
      tier.deliverables,
      tier.priceNote,
      "đặt hàng",
      "dat hang",
      "dịch vụ",
      "service",
      "phát triển phần mềm",
      tier.id === "tich-hop-ai" ? "AI" : undefined,
    ),
  });
}
for (const step of requestSteps) {
  add({
    id: `request-step-${step.number}`,
    title: `Đặt hàng phát triển — Bước ${step.number}: ${step.title}`,
    description: truncate(step.description),
    href: "/marketplace#dat-hang",
    hub: MARKETPLACE,
    kind: "Quy trình",
    keywords: keywordList(
      step.title,
      step.description,
      "đặt hàng",
      "dat hang",
      "yêu cầu",
      "quy trình",
      "phát triển",
    ),
  });
}

// --- Community ---
leaders.forEach((leader, index) => {
  add({
    id: `leader-${index + 1}`,
    title: leader.name,
    description: truncate(leader.note),
    href: "/community#thanh-vien",
    hub: COMMUNITY,
    kind: "Thành viên",
    keywords: keywordList(
      leader.name,
      leader.role,
      leader.note,
      "ban chủ nhiệm",
      "ban chu nhiem",
      "leader",
      "lãnh đạo",
      "thành viên",
      "chủ nhiệm",
    ),
  });
});
for (const department of departments) {
  add({
    id: `department-${department.number}`,
    title: department.name,
    description: truncate(department.text),
    href: "/community#thanh-vien",
    hub: COMMUNITY,
    kind: "Ban chuyên môn",
    keywords: keywordList(
      department.name,
      department.text,
      "ban chuyên môn",
      "phòng ban",
      "department",
      "thành viên",
      "CLB",
    ),
  });
}
for (const challenge of challenges) {
  add({
    id: `challenge-${stripPrefix(challenge.id, "challenge-")}`,
    title: challenge.title,
    description: truncate(challenge.description),
    href: "/community#challenge",
    hub: COMMUNITY,
    kind: "Challenge",
    keywords: keywordList(
      challenge.title,
      challenge.chips,
      challenge.category,
      challenge.meta,
      "challenge",
      "thử thách",
      "thu thach",
      "code",
      "design",
    ),
  });
}
for (const achievement of achievements) {
  add({
    id: `achievement-${achievement.id}`,
    title: achievement.title,
    description: truncate(`${achievement.detail} · ${achievement.year}`),
    href: "/community#thanh-tich",
    hub: COMMUNITY,
    kind: "Thành tích",
    keywords: keywordList(
      achievement.title,
      achievement.detail,
      achievement.year,
      "thành tích",
      "giải thưởng",
      "achievement",
      "EaAgri",
      "eaagri",
    ),
  });
}
for (const step of recruitmentSteps) {
  add({
    id: `recruit-step-${step.number}`,
    title: `Tuyển thành viên — Bước ${step.number}: ${step.title}`,
    description: truncate(
      step.dateLabel ? `${step.description} (${step.dateLabel})` : step.description,
    ),
    href: "/community#tuyen-thanh-vien",
    hub: COMMUNITY,
    kind: "Tuyển thành viên",
    keywords: keywordList(
      step.title,
      step.description,
      step.dateLabel,
      "tuyển thành viên",
      "tuyển dụng",
      "recruitment",
      "phỏng vấn",
      "hồ sơ",
    ),
  });
}

// --- Business Connect ---
for (const group of partnerGroups) {
  add({
    id: `partner-${group.id}`,
    title: group.title,
    description: truncate(group.description),
    href: "/business-connect#doi-tac",
    hub: BUSINESS,
    kind: "Đối tác",
    keywords: keywordList(
      group.title,
      group.items,
      group.description,
      "doanh nghiệp",
      "doanh nghiep",
      "đối tác",
      "doi tac",
      "partner",
      "hợp tác",
      "liên trường",
    ),
  });
}
for (const service of services) {
  add({
    id: `service-${service.id}`,
    title: service.title,
    description: truncate(service.description),
    href: "/business-connect#dich-vu",
    hub: BUSINESS,
    kind: "Dịch vụ",
    keywords: keywordList(
      service.title,
      service.outcomes,
      "doanh nghiệp",
      "doanh nghiep",
      "dịch vụ",
      "dich vu",
      "hợp tác",
      "service",
      "đặt hàng công nghệ",
      service.id === "dat-hang-cong-nghe" ? "AI" : undefined,
    ),
  });
}
for (const step of processSteps) {
  add({
    id: `business-step-${step.number}`,
    title: `Hợp tác doanh nghiệp — Bước ${step.number}: ${step.title}`,
    description: truncate(step.description),
    href: "/business-connect#quy-trinh",
    hub: BUSINESS,
    kind: "Quy trình",
    keywords: keywordList(
      step.title,
      step.description,
      "doanh nghiệp",
      "doanh nghiep",
      "quy trình",
      "hợp tác",
      "liên hệ",
    ),
  });
}
for (const study of caseStudies) {
  add({
    id: `case-${stripPrefix(study.id, "case-")}`,
    title: `Case study: ${study.project}`,
    description: truncate(study.description),
    href: "/business-connect#lien-he",
    hub: BUSINESS,
    kind: "Case study",
    keywords: keywordList(
      study.project,
      study.field,
      study.result,
      study.description,
      "case study",
      "doanh nghiệp",
      "doanh nghiep",
      "đối tác",
      "hợp tác",
      "AI",
      study.project.toLowerCase().includes("eaagri") ? "eaagri" : undefined,
    ),
  });
}

// --- About ---
values.forEach((value) => {
  add({
    id: `value-${value.name.toLowerCase()}`,
    title: `${value.letter} — ${value.name} (${value.vi})`,
    description: truncate(value.text),
    href: "/about#gia-tri",
    hub: ABOUT,
    kind: "Giá trị",
    keywords: keywordList(
      value.name,
      value.vi,
      value.text,
      value.letter,
      "giá trị",
      "gia tri",
      "value",
      "I-N-N-T-E-C-H",
      "INNTECH",
    ),
  });
});
timeline.forEach((item, index) => {
  add({
    id: `timeline-${index + 1}`,
    title: item.title,
    description: truncate(item.text),
    href: "/about#gioi-thieu",
    hub: ABOUT,
    kind: "Cột mốc",
    keywords: keywordList(
      item.title,
      item.text,
      item.date,
      "timeline",
      "cột mốc",
      "lịch sử",
      "giới thiệu",
      "INNTECH",
    ),
  });
});
publications.forEach((publication, index) => {
  add({
    id: `publication-${index + 1}`,
    title: publication,
    description: truncate(publication),
    href: "/about#gioi-thieu",
    hub: ABOUT,
    kind: "Công bố khoa học",
    keywords: keywordList(
      publication,
      "bài báo",
      "bai bao",
      "công bố khoa học",
      "công bố",
      "paper",
      "publication",
      "SIEV2026",
      "AIIA 2026",
    ),
  });
});
aboutStats.forEach((stat, index) => {
  add({
    id: `about-stat-${index + 1}`,
    title: `${stat.value} ${stat.label}`,
    description: truncate(stat.note),
    href: "/about#gioi-thieu",
    hub: ABOUT,
    kind: "Thông tin",
    keywords: keywordList(
      stat.label,
      stat.note,
      stat.value,
      "thống kê",
      "con số",
      "giới thiệu",
      "INNTECH",
      "mentoring",
    ),
  });
});

const seen = new Set<string>();
export const searchEntries: SearchEntry[] = entries.filter((entry) => {
  if (seen.has(entry.id)) return false;
  seen.add(entry.id);
  return true;
});
