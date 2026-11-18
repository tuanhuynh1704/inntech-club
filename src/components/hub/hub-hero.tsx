import Link from "next/link";
import type { CSSProperties } from "react";

import type { Hub } from "@/data/types";
import { ArrowUpRight } from "@/components/icons";

import SmartLink from "./smart-link";
import styles from "./hub-ui.module.css";

type Cta = { label: string; href: string; external?: boolean };
type HubHeroProps = {
  hub: Hub;
  lead: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  meta?: string[];
};

export default function HubHero({
  hub,
  lead,
  primaryCta,
  secondaryCta,
  meta,
}: HubHeroProps) {
  return (
    <section
      className={styles.hubHero}
      style={{ "--hub-accent": hub.accent } as CSSProperties}
    >
      <span className={styles.heroGlowA} aria-hidden="true" />
      <span className={styles.heroGlowB} aria-hidden="true" />
      <span className={styles.heroGridPattern} aria-hidden="true" />
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{hub.name}</span>
          </nav>
          <span className={styles.eyebrow}>
            {hub.shortName.toUpperCase()}
          </span>
          <h1 className={styles.heroTitle}>{hub.name}</h1>
          <p className={styles.heroTagline}>{hub.tagline}</p>
          <p className={styles.heroLead}>{lead}</p>
          <div className={styles.heroActions}>
            <SmartLink
              href={primaryCta.href}
              external={primaryCta.external}
              className={styles.buttonPrimary}
            >
              {primaryCta.label}
              <span className={styles.buttonIcon}>
                <ArrowUpRight />
              </span>
            </SmartLink>
            {secondaryCta ? (
              <SmartLink
                href={secondaryCta.href}
                external={secondaryCta.external}
                className={styles.buttonGhost}
              >
                {secondaryCta.label}
              </SmartLink>
            ) : null}
          </div>
          {meta && meta.length > 0 ? (
            <div className={styles.metaRow}>
              {meta.map((item) => (
                <span key={item} className={styles.metaChip}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <span className={styles.metaChip}>INNTECH</span>
          <span className={styles.metaChip}>{hub.shortName}</span>
        </div>
      </div>
    </section>
  );
}
