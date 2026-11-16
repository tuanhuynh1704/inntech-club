import type { HubSection } from "@/data/types";

import styles from "./hub-ui.module.css";

type SubNavProps = {
  items: HubSection[];
};

export default function SubNav({ items }: SubNavProps) {
  return (
    <nav className={styles.subNav} aria-label="Mục lục trang">
      <div className={styles.subNavInner}>
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={styles.subNavLink}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
