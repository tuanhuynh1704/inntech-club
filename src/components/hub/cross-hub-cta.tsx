import type { Hub } from "@/data/types";
import { getHub } from "@/data/hubs";
import { ArrowUpRight } from "@/components/icons";

import SmartLink from "./smart-link";
import styles from "./hub-ui.module.css";

type CrossHubCtaProps = {
  currentId: string;
  ids: string[];
  title?: string;
  description?: string;
};

export default function CrossHubCta({
  currentId,
  ids,
  title,
  description,
}: CrossHubCtaProps) {
  const relatedHubs = ids
    .filter((id) => id !== currentId)
    .map((id) => getHub(id))
    .filter((hub): hub is Hub => hub !== undefined);

  if (relatedHubs.length === 0) {
    return null;
  }

  return (
    <section className={styles.crossHub} data-reveal>
      <span className={styles.eyebrow}>Khám phá tiếp</span>
      <h2 className={styles.h2}>{title ?? "Các hub liên quan"}</h2>
      {description ? <p className={styles.lead}>{description}</p> : null}
      <div className={styles.crossHubGrid}>
        {relatedHubs.map((hub) => (
          <SmartLink
            key={hub.id}
            href={hub.href}
            className={styles.crossHubCard}
          >
            <span className={styles.h2}>{hub.name}</span>
            <span className={styles.lead}>{hub.tagline}</span>
            <span className={styles.buttonIcon}>
              <ArrowUpRight />
            </span>
          </SmartLink>
        ))}
      </div>
    </section>
  );
}
