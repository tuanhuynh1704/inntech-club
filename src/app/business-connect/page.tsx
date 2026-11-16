import type { CSSProperties } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import HubHero from "@/components/hub/hub-hero";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import RequestForm from "@/components/hub/request-form";
import { ArrowUpRight } from "@/components/icons";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import { facebookUrl, siteAddress, siteEmail, sitePhone } from "@/data/site";
import {
  caseStudies,
  partnerGroups,
  processSteps,
  services,
} from "@/data/business-connect";
import type { FormField } from "@/data/types";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("business-connect")!;

export const metadata = buildHubMetadata({
  title: "Business Connect — Kết nối doanh nghiệp",
  description:
    "Doanh nghiệp, nhà tài trợ và trường đối tác kết nối với CLB để đặt hàng công nghệ, hợp tác đào tạo, tài trợ và tuyển dụng.",
});

const businessFields: FormField[] = [
  { name: "company", label: "Tên doanh nghiệp / tổ chức", type: "text", required: true },
  { name: "contactName", label: "Người liên hệ", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "need",
    label: "Nhu cầu hợp tác",
    type: "select",
    required: true,
    options: [
      "Đặt hàng công nghệ",
      "Hợp tác đào tạo / workshop",
      "Tài trợ",
      "Tuyển dụng",
      "Khác",
    ],
  },
  {
    name: "message",
    label: "Mô tả chi tiết",
    type: "textarea",
    required: true,
    placeholder: "Mục tiêu, phạm vi, thời gian dự kiến...",
  },
];

const contactAside = (
  <>
    <h3 className={styles.asideTitle}>Thông tin liên hệ</h3>
    <ul className={styles.asideList}>
      <li className={styles.asideItem}>
        <span className={styles.asideLabel}>Email</span>
        <a className={styles.asideValue} href={`mailto:${siteEmail}`}>
          {siteEmail}
        </a>
      </li>
      <li className={styles.asideItem}>
        <span className={styles.asideLabel}>Hotline</span>
        <a
          className={styles.asideValue}
          href={`tel:${sitePhone.replace(/\s/g, "")}`}
        >
          {sitePhone}
        </a>
      </li>
      <li className={styles.asideItem}>
        <span className={styles.asideLabel}>Địa chỉ</span>
        <span className={styles.asideValue}>{siteAddress}</span>
      </li>
      <li className={styles.asideItem}>
        <span className={styles.asideLabel}>Fanpage</span>
        <a
          className={styles.asideValue}
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/inntechclub
        </a>
      </li>
    </ul>
    <p className={styles.asideNote}>
      Thông tin của bạn chỉ dùng để CLB phản hồi yêu cầu hợp tác.
    </p>
  </>
);

export default function Page() {
  return (
    <main
      id="main"
      className={ui.hubPage}
      style={{ "--hub-accent": hub.accent } as CSSProperties}
    >
      <ScrollReveal />
      <HubHero
        hub={hub}
        lead="Doanh nghiệp, nhà tài trợ và trường đối tác kết nối với CLB để đặt hàng công nghệ, hợp tác đào tạo, tài trợ và tuyển dụng."
        primaryCta={{ label: "Xem đối tác", href: "#doi-tac" }}
        secondaryCta={{ label: "Gửi yêu cầu đặt hàng", href: "#lien-he" }}
        meta={["11 đối tác", "4 trường đối tác", "4 bước quy trình"]}
      />
      <SubNav items={hub.sections} />

      <section
        id="doi-tac"
        aria-label="Đối tác"
        className={`${ui.section} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Mạng lưới đối tác"
            title="Đối tác — doanh nghiệp và trường đại học"
            description="Danh sách thật theo hồ sơ I-Star 2026, phân nhóm. CLB không sử dụng logo giả."
          />
          <div className={styles.partnerGrid}>
            {partnerGroups.map((group) => (
              <article key={group.id} className={`${ui.card} ${styles.partnerCard}`}>
                <div className={styles.partnerHead}>
                  <h3 className={ui.cardTitle}>{group.title}</h3>
                  <span className={styles.countBadge}>{group.items.length}</span>
                </div>
                <p className={ui.cardDesc}>{group.description}</p>
                <ul className={`${ui.chips} ${styles.pillList}`} aria-label={group.title}>
                  {group.items.map((item) => (
                    <li key={item} className={ui.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="dich-vu"
        aria-label="Dịch vụ doanh nghiệp"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Dịch vụ doanh nghiệp"
            title="Dịch vụ — đặt hàng và hợp tác"
            description="Liên hệ để trao đổi; CLB tư vấn phương án phù hợp với nhu cầu của từng đối tác."
          />
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.id} className={ui.card}>
                <h3 className={ui.cardTitle}>{service.title}</h3>
                <p className={ui.cardDesc}>{service.description}</p>
                <ul className={styles.outcomeList}>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className={styles.outcomeItem}>
                      {outcome}
                    </li>
                  ))}
                </ul>
                <a href="#lien-he" className={ui.cardAction}>
                  Trao đổi với CLB
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quy-trinh"
        aria-label="Quy trình hợp tác"
        className={`${ui.section} ${ui.sectionDark} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Cách hợp tác"
            title="Quy trình — 4 bước"
            description="Từ yêu cầu ban đầu đến khi triển khai, mọi bước đều có đầu mối rõ ràng từ CLB."
          />
          <ol className={styles.steps}>
            {processSteps.map((step) => (
              <li key={step.number} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="lien-he"
        aria-label="Liên hệ doanh nghiệp"
        className={`${ui.section} ${ui.sectionAnchor}`}
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Liên hệ"
            title="Dự án tiêu biểu & form liên hệ doanh nghiệp"
            description="Chiêm nghiệm năng lực triển khai của CLB qua các case study, sau đó gửi yêu cầu hợp tác — dữ liệu không được lưu trên website."
          />
          <div className={styles.caseGrid}>
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className={`${ui.card} ${styles.caseCard}`}>
                <span className={styles.caseField}>{caseStudy.field}</span>
                <h3 className={styles.caseProject}>{caseStudy.project}</h3>
                <p className={ui.cardDesc}>{caseStudy.description}</p>
                <p className={styles.caseResult}>
                  <span className={styles.caseResultLabel}>Thành tựu</span>
                  {caseStudy.result}
                </p>
              </article>
            ))}
          </div>
          <div className={styles.formBlock}>
            <RequestForm
              fields={businessFields}
              to={siteEmail}
              subject="[Business Connect] Yêu cầu hợp tác"
              successMessage="Yêu cầu của bạn đã sẵn sàng gửi qua email. Cảm ơn bạn đã quan tâm hợp tác với INNTECH CLUB — CLB sẽ phản hồi trong thời gian sớm nhất."
              submitLabel="Gửi yêu cầu hợp tác"
              note="Dữ liệu không được lưu trên website — thông tin được gửi qua email và chỉ dùng để phản hồi yêu cầu của bạn."
              aside={contactAside}
            />
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId={hub.id}
        ids={["marketplace", "about", "community"]}
      />
    </main>
  );
}
