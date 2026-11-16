import Link from "next/link";
import type { FilterItem } from "@/data/types";
import { ArrowUpRight } from "@/components/icons";
import styles from "./hub-ui.module.css";

type HubCardProps = {
  item: FilterItem;
  compact?: boolean;
};

export default function HubCard({ item, compact = false }: HubCardProps) {
  const href = item.href;
  const isExternal = href ? /^https?:\/\//i.test(href) : false;
  const actionLabel = isExternal ? "Mở công cụ" : "Xem chi tiết";

  const chips = [...new Set([item.category, ...(item.chips ?? [])])];

  const hasTopRow = Boolean(item.kicker) || Boolean(item.sample) || Boolean(item.badge);

  return (
    <article className={styles.card} data-compact={compact ? "true" : undefined}>
      {hasTopRow && (
        <div className={styles.cardTop}>
          {item.kicker && (
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              {item.kicker}
            </span>
          )}
          {item.sample && <span className={styles.badgeSample}>Mẫu</span>}
          {item.badge && <span className={styles.badge}>{item.badge}</span>}
        </div>
      )}

      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDesc}>{item.description}</p>
      {item.meta && <span className={styles.cardMeta}>{item.meta}</span>}

      <div className={styles.chips}>
        {chips.map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </div>

      {href &&
        (isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardAction}
          >
            <span>{actionLabel}</span>
            <ArrowUpRight />
          </a>
        ) : (
          <Link href={href} className={styles.cardAction}>
            <span>{actionLabel}</span>
            <ArrowUpRight />
          </Link>
        ))}
    </article>
  );
}
