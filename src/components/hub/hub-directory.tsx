"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Hub, SearchEntry } from "@/data/types";
import { ArrowUpRight, Search, X } from "@/components/icons";

import shared from "./hub-ui.module.css";
import styles from "./hub-directory.module.css";

type HubDirectoryProps = {
  hubs: Hub[];
  entries: SearchEntry[];
};

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/\s+/g, " ")
    .trim();

const QUICK_CHIPS = ["AI", "CV", "Học bổng", "Mentor", "EaAgri"] as const;
const MAX_PER_GROUP = 5;
const POPULAR_HUB_IDS = ["student", "learning", "opportunity", "project"] as const;

const subscribeNoop = () => () => {};
const getIsMacSnapshot = () =>
  /mac|iphone|ipad|ipod/i.test(window.navigator.platform);
const getIsMacServerSnapshot = () => false;

export default function HubDirectory({ hubs, entries }: HubDirectoryProps) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const isMac = useSyncExternalStore(
    subscribeNoop,
    getIsMacSnapshot,
    getIsMacServerSnapshot
  );

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = query.trim();
  const normalizedQuery = normalize(trimmedQuery);
  const isSearching = normalizedQuery !== "";
  const showResults = open && isSearching;

  const matchedHubs = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }
    return hubs.filter((hub) =>
      [hub.name, hub.tagline, hub.description].some((field) =>
        normalize(field).includes(normalizedQuery)
      )
    );
  }, [hubs, normalizedQuery]);

  const matchedEntries = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }
    return entries.filter((entry) =>
      [entry.title, entry.description, entry.hub, entry.kind, ...entry.keywords].some(
        (field) => normalize(field).includes(normalizedQuery)
      )
    );
  }, [entries, normalizedQuery]);

  const groups = useMemo(() => {
    const byHub = new Map<string, SearchEntry[]>();
    for (const entry of matchedEntries) {
      const list = byHub.get(entry.hub);
      if (list) {
        list.push(entry);
      } else {
        byHub.set(entry.hub, [entry]);
      }
    }
    return Array.from(byHub.entries()).map(([key, list]) => ({
      key,
      hub:
        hubs.find(
          (hub) => hub.id === key || hub.name === key || hub.shortName === key
        ) ?? null,
      items: list.slice(0, MAX_PER_GROUP),
    }));
  }, [matchedEntries, hubs]);

  const totalResults = matchedEntries.length + matchedHubs.length;
  const firstResultHref =
    groups.flatMap((group) => group.items)[0]?.href ?? matchedHubs[0]?.href;

  const popularHubs = useMemo(() => {
    const picked = POPULAR_HUB_IDS.map((id) => hubs.find((hub) => hub.id === id)).filter(
      (hub): hub is Hub => hub !== undefined
    );
    return picked.length > 0 ? picked : hubs.slice(0, 4);
  }, [hubs]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: globalThis.KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      const isEditable =
        target?.isContentEditable === true ||
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT";
      const withModifier = event.metaKey || event.ctrlKey;

      if (withModifier && (event.key === "k" || event.key === "K")) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
        return;
      }

      if (
        event.key === "/" &&
        !withModifier &&
        !event.altKey &&
        !event.shiftKey &&
        !isEditable
      ) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  const clearQuery = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const applyChip = (chip: string) => {
    setQuery(chip);
    setOpen(true);
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setQuery("");
      setOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (firstResultHref) {
        router.push(firstResultHref);
      }
    }
  };

  return (
    <div ref={panelRef} className={styles.panel} role="search" aria-label="Tìm kiếm trong nền tảng">
      <div className={styles.searchRow}>
        <Search className={styles.searchIcon} />
        <input
          ref={inputRef}
          id="hub-search"
          type="search"
          className={styles.searchInput}
          placeholder="Tìm hub, công cụ, tài liệu, cơ hội…"
          aria-label="Tìm kiếm trong nền tảng"
          autoComplete="off"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleInputKeyDown}
        />
        {trimmedQuery ? (
          <button
            type="button"
            className={styles.clearButton}
            aria-label="Xoá tìm kiếm"
            onClick={clearQuery}
          >
            <X />
          </button>
        ) : (
          <span className={styles.kbdHint} aria-hidden="true">
            <kbd className={styles.kbd}>{isMac ? "⌘" : "Ctrl"}</kbd>
            <kbd className={styles.kbd}>K</kbd>
          </span>
        )}
      </div>

      {showResults ? (
        <div className={styles.results}>
          <p className={styles.resultCount} aria-live="polite">
            {totalResults} kết quả cho “{trimmedQuery}”
          </p>

          {matchedHubs.length > 0 ? (
            <div className={styles.group} role="group" aria-label="Hubs">
              <div className={styles.groupHeader}>
                <span className={styles.groupTitle}>Hubs</span>
              </div>
              <ul className={styles.resultList}>
                {matchedHubs.map((hub) => (
                  <li key={hub.id}>
                    <Link href={hub.href} className={styles.resultItem}>
                      <span className={styles.resultText}>
                        <span className={styles.resultTitle}>{hub.name}</span>
                        <span className={styles.resultDescription}>{hub.tagline}</span>
                      </span>
                      <span className={`${shared.badge} ${styles.resultBadge}`}>Hub</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {groups.map((group) => (
            <div
              key={group.key}
              className={styles.group}
              role="group"
              aria-label={group.hub?.name ?? group.key}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupTitle}>{group.hub?.name ?? group.key}</span>
                {group.hub ? (
                  <Link href={group.hub.href} className={styles.groupAll}>
                    Xem tất cả trong hub
                    <ArrowUpRight className={styles.groupAllIcon} />
                  </Link>
                ) : null}
              </div>
              <ul className={styles.resultList}>
                {group.items.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={entry.href}
                      className={styles.resultItem}
                    >
                      <span className={styles.resultText}>
                        <span className={styles.resultTitle}>{entry.title}</span>
                        <span className={styles.resultDescription}>{entry.description}</span>
                      </span>
                      <span className={`${shared.badge} ${styles.resultBadge}`}>{entry.kind}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {totalResults === 0 ? (
            <div className={shared.emptyState}>
              <p className={styles.emptyTitle}>Không tìm thấy kết quả cho “{trimmedQuery}”.</p>
              <p className={styles.emptyHint}>Thử từ khoá ngắn hơn, không dấu, hoặc khám phá các hub phổ biến:</p>
              <div className={shared.chips}>
                {popularHubs.map((hub) => (
                  <Link key={hub.id} href={hub.href} className={shared.chip}>
                    {hub.shortName || hub.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={styles.browse}>
          <div className={shared.chips}>
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={shared.chip}
                onClick={() => applyChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <ol className={styles.hubList}>
            {hubs.map((hub) => (
              <li key={hub.id}>
                <Link href={hub.href} className={styles.hubRow}>
                  <span className={styles.hubNumber}>{hub.number}</span>
                  <span className={styles.hubText}>
                    <span className={styles.hubName}>{hub.name}</span>
                    <span className={styles.hubTagline}>{hub.tagline}</span>
                  </span>
                  <ArrowUpRight className={styles.hubArrow} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
