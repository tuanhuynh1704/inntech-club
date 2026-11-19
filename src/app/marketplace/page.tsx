import type { CSSProperties } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import CrossHubCta from "@/components/hub/cross-hub-cta";
import FilterGrid from "@/components/hub/filter-grid";
import HubHero from "@/components/hub/hub-hero";
import HubCard from "@/components/hub/hub-card";
import RequestForm from "@/components/hub/request-form";
import SectionHeading from "@/components/hub/section-heading";
import SubNav from "@/components/hub/sub-nav";
import { getHub } from "@/data/hubs";
import { buildHubMetadata } from "@/data/metadata";
import {
  marketplaceProducts,
  requestSteps,
  serviceTiers,
  showcaseProducts,
} from "@/data/marketplace";
import { siteEmail } from "@/data/site";
import type { FormField } from "@/data/types";
import ui from "@/components/hub/hub-ui.module.css";
import styles from "./page.module.css";

const hub = getHub("marketplace")!;

export const metadata = buildHubMetadata({
  title: "Tech Marketplace — Sản phẩm công nghệ sinh viên",
  description:
    "Trưng bày sản phẩm thật của hệ sinh thái INNTECH và sản phẩm mẫu của sinh viên. Dịch vụ đặt hàng phát triển: liên hệ báo giá, không công bố giá trước.",
});

const cleanProducts = marketplaceProducts.map((item) =>
  item.sample && item.badge === "Mẫu" ? { ...item, badge: undefined } : item
);
const allProducts = [...showcaseProducts, ...cleanProducts];
const toolProducts = allProducts.filter((item) => item.productKind === "tool");
const appProducts = allProducts.filter((item) => item.productKind === "app");
const gameProducts = allProducts.filter((item) => item.productKind === "game");

const productArt: Record<string, string> = {
  eaagri:
    "linear-gradient(140deg, #052e1f 0%, #065f46 48%, #34d399 100%)",
  "sports-connect":
    "linear-gradient(140deg, #082f49 0%, #0369a1 48%, #38bdf8 100%)",
  "dia-plus":
    "linear-gradient(140deg, #4c0519 0%, #be123c 52%, #fb7185 100%)",
  weavecarbon:
    "linear-gradient(140deg, #052e16 0%, #15803d 55%, #a3e635 100%)",
};

const artFallback =
  "linear-gradient(140deg, #071340 0%, #1e3a8a 60%, #38bdf8 100%)";

const requestFields: FormField[] = [
  { name: "name", label: "Họ và tên", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "productType",
    label: "Loại sản phẩm",
    type: "select",
    required: true,
    options: ["Landing page", "Web app / MVP", "Tích hợp AI", "Khác"],
  },
  {
    name: "budget",
    label: "Ngân sách dự kiến",
    type: "select",
    options: ["Chưa xác định", "Dưới 5 triệu", "5–15 triệu", "Trên 15 triệu"],
  },
  {
    name: "description",
    label: "Mô tả yêu cầu",
    type: "textarea",
    required: true,
    placeholder: "Mục tiêu, tính năng, thời hạn...",
  },
];

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
        lead="Trưng bày sản phẩm thật của hệ sinh thái INNTECH và sản phẩm mẫu của sinh viên. Dịch vụ đặt hàng phát triển: liên hệ báo giá, không công bố giá trước."
        primaryCta={{ label: "Xem sản phẩm", href: "#showcase" }}
        secondaryCta={{ label: "Đặt hàng phát triển", href: "#dat-hang" }}
        meta={["Sản phẩm thật", "Sản phẩm mẫu", "Dịch vụ đặt hàng"]}
      />
      <SubNav items={hub.sections} />

      <section
        id="showcase"
        className={`${ui.section} ${ui.sectionAnchor}`}
        aria-label="Trưng bày sản phẩm"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Trưng bày sản phẩm"
            title="Product Showcase — sản phẩm hệ sinh thái + mẫu sinh viên"
            description="Các sản phẩm thật đang được phát triển trong hệ sinh thái INNTECH, phía dưới là nhóm sản phẩm mẫu của sinh viên."
          />
          <p className={ui.callout} role="note">
            Marketplace đang ở giai đoạn demo giao diện; các sản phẩm gắn nhãn
            Mẫu chưa phải sản phẩm chính thức.
          </p>

          <div className={styles.showcaseGrid} data-reveal-stagger>
            {showcaseProducts.map((product) => (
              <article key={product.id} className={styles.showcaseCard}>
                <div
                  className={styles.showcaseArt}
                  style={{ background: productArt[product.id] ?? artFallback }}
                  aria-hidden="true"
                >
                  <span className={styles.showcaseArtTag}>
                    {product.category}
                  </span>
                  <span className={styles.showcaseArtTitle}>{product.title}</span>
                </div>
                <div className={styles.showcaseBody}>
                  <h3 className={styles.showcaseTitle}>{product.title}</h3>
                  <p className={styles.showcaseDesc}>{product.description}</p>
                  <div className={ui.chips}>
                    <span className={styles.platformChip}>{product.platform}</span>
                    {(product.chips ?? []).map((chip) => (
                      <span key={chip} className={ui.chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  {product.href ? (
                    <a
                      className={ui.cardAction}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>eaagri.vn</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <h3 className={styles.sampleHeading}>
            Sản phẩm mẫu của sinh viên
            <span className={ui.badgeSample}>Mẫu</span>
          </h3>
          <div className={styles.sampleGrid} data-reveal-stagger>
            {cleanProducts.map((product) => (
              <HubCard key={product.id} item={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="tools"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
        aria-label="Tools"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Phân loại sản phẩm"
            title="Tools — công cụ"
            description="Lọc theo loại sản phẩm (tool / app / game). Một số mục là dữ liệu mẫu và được gắn nhãn Mẫu."
          />
          <FilterGrid
            items={toolProducts}
            columns={3}
            placeholder="Tìm tool..."
            emptyLabel="Không tìm thấy tool phù hợp."
          />
        </div>
      </section>

      <section
        id="app"
        className={`${ui.section} ${ui.sectionAnchor}`}
        aria-label="App"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Phân loại sản phẩm"
            title="App — ứng dụng"
            description="EaAgri, Sports Connect, DIA+ là sản phẩm thực tế; các ứng dụng còn lại là dữ liệu mẫu, gắn nhãn Mẫu."
          />
          <FilterGrid
            items={appProducts}
            columns={3}
            placeholder="Tìm app..."
            emptyLabel="Không tìm thấy app phù hợp."
          />
        </div>
      </section>

      <section
        id="game"
        className={`${ui.section} ${ui.sectionTint} ${ui.sectionAnchor}`}
        aria-label="Game"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Phân loại sản phẩm"
            title="Game — trò chơi"
            description="Danh mục game hiện là dữ liệu mẫu, được gắn nhãn Mẫu."
          />
          <FilterGrid
            items={gameProducts}
            columns={3}
            placeholder="Tìm game..."
            emptyLabel="Không tìm thấy game phù hợp."
          />
        </div>
      </section>

      <section
        id="dat-hang"
        className={`${ui.section} ${ui.sectionAnchor}`}
        aria-label="Đặt hàng phát triển"
      >
        <div className={ui.container}>
          <SectionHeading
            eyebrow="Đặt hàng phát triển"
            title="Request Development — yêu cầu phát triển sản phẩm"
            description="Gói dịch vụ ghi “Liên hệ báo giá” — CLB không công bố giá trước. Mô tả yêu cầu qua biểu mẫu, đội dự án CLB sẽ xem xét và liên hệ lại."
          />

          <div className={styles.tierGrid} data-reveal-stagger>
            {serviceTiers.map((tier) => (
              <article key={tier.id} className={styles.tierCard}>
                <h3 className={styles.tierTitle}>{tier.title}</h3>
                <p className={styles.tierDesc}>{tier.description}</p>
                <ul className={styles.deliverables}>
                  {tier.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className={styles.priceNote}>{tier.priceNote}</span>
              </article>
            ))}
          </div>

          <div className={styles.stepsBlock}>
            <h3 className={styles.stepsTitle}>Quy trình tiếp nhận yêu cầu</h3>
            <div className={styles.stepsGrid} data-reveal-stagger>
              {requestSteps.map((step) => (
                <div key={step.number} className={ui.step}>
                  <span className={ui.stepNumber}>{step.number}</span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formBlock}>
            <RequestForm
              fields={requestFields}
              to={siteEmail}
              subject="[Marketplace] Yêu cầu phát triển sản phẩm"
              successMessage="Cảm ơn bạn! Yêu cầu của bạn đã được chuyển qua ứng dụng email. CLB sẽ xem xét và liên hệ lại trong thời gian sớm nhất."
              note="Biểu mẫu không lưu trữ dữ liệu trên máy chủ; nội dung được gửi trực tiếp qua ứng dụng email của bạn đến inntechclub@gmail.com."
            />
          </div>
        </div>
      </section>

      <CrossHubCta
        currentId="marketplace"
        ids={["student-hub", "project-hub", "business-connect"]}
        title="Khám phá tiếp"
        description="Marketplace kết nối mật thiết với các hub còn lại của INNTECH."
      />
    </main>
  );
}
