import { ArrowUpRight } from "@/components/icons";

import SmartLink from "./smart-link";
import styles from "./hub-ui.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  id,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHead} id={id} data-reveal>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.h2}>{title}</h2>
      {description ? <p className={styles.lead}>{description}</p> : null}
      {href ? (
        <SmartLink href={href} className={styles.sectionLink}>
          {linkLabel ?? "Xem thêm"}
          <span className={styles.buttonIcon}>
            <ArrowUpRight />
          </span>
        </SmartLink>
      ) : null}
    </div>
  );
}
