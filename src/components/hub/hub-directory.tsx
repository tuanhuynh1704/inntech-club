import Link from "next/link";
import type { Hub } from "@/data/types";
import { ArrowUpRight } from "@/components/icons";

import styles from "./hub-directory.module.css";

type HubDirectoryProps = {
  hubs: Hub[];
};

export default function HubDirectory({ hubs }: HubDirectoryProps) {
  return (
    <div className={styles.grid}>
      {hubs.map((hub) => {
        return (
          <Link
            key={hub.id}
            href={hub.href}
            className={styles.card}
          >
            <span className={styles.name}>{hub.name}</span>
            <span className={styles.description}>{hub.description}</span>
            <span className={styles.cardBottom}>
              Khám phá hub
              <ArrowUpRight className={styles.arrow} aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
