"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FilterItem } from "@/data/types";
import HubCard from "./hub-card";
import styles from "./hub-ui.module.css";

type FilterGridProps = {
  items: FilterItem[];
  categories?: string[];
  placeholder?: string;
  emptyLabel?: string;
  columns?: 2 | 3 | 4;
  searchable?: boolean;
};

const ALL_CATEGORY = "Tất cả";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[́-ͯ]/g, "")
    .replace(/đ/g, "d");
}

export default function FilterGrid({
  items,
  categories,
  placeholder = "Tìm kiếm trong hub...",
  emptyLabel = "Không tìm thấy mục nào phù hợp.",
  columns = 3,
  searchable = true,
}: FilterGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);
  const [query, setQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);
  const lastFilterRef = useRef(`${ALL_CATEGORY}|`);

  /* Filtered results are dynamic content: after the first filter/search
     interaction the grid keeps `is-instant`, so remounted cards are visible
     immediately instead of replaying the reveal animation. The signature
     guard keeps the initial mount untouched, so the scroll entrance still
     runs normally. */
  useEffect(() => {
    const signature = `${activeCategory}|${query}`;
    if (lastFilterRef.current === signature) return;
    lastFilterRef.current = signature;
    gridRef.current?.classList.add("is-instant");
  }, [activeCategory, query]);

  const categoryOptions = useMemo(() => {
    if (categories && categories.length > 0) {
      return [ALL_CATEGORY, ...new Set(categories)];
    }
    const unique = [...new Set(items.map((item) => item.category))];
    return [ALL_CATEGORY, ...unique];
  }, [categories, items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return items.filter((item) => {
      if (activeCategory !== ALL_CATEGORY && item.category !== activeCategory) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const haystack = normalize(
        [
          item.title,
          item.description,
          item.category,
          item.meta ?? "",
          ...(item.chips ?? []),
        ].join(" ")
      );
      return haystack.includes(normalizedQuery);
    });
  }, [items, activeCategory, query]);

  const gridClass =
    columns === 2 ? styles.gridTwo : columns === 4 ? styles.gridFour : styles.gridThree;

  const handleReset = () => {
    setActiveCategory(ALL_CATEGORY);
    setQuery("");
  };

  return (
    <div>
      <div className={styles.filterBar} data-reveal>
        <div className={styles.filterChips} role="group" aria-label="Lọc theo danh mục">
          {categoryOptions.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                className={isActive ? styles.filterChipActive : styles.filterChip}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {searchable && (
          <div className={styles.filterSearch}>
            <input
              type="search"
              className={styles.filterInput}
              aria-label="Lọc trong hub"
              placeholder={placeholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        )}
      </div>

      <p className={styles.filterCount} aria-live="polite">
        {filteredItems.length} mục
      </p>

      {/* Keep the grid mounted so a filter change never remounts a hidden
          reveal container (new cards must be visible immediately). */}
      <div ref={gridRef} className={gridClass} data-reveal-stagger>
        {filteredItems.map((item) => (
          <HubCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className={styles.emptyState}>
          <p>{emptyLabel}</p>
          <button type="button" onClick={handleReset}>
            Xóa bộ lọc
          </button>
        </div>
      ) : null}
    </div>
  );
}
