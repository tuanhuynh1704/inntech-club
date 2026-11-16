"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logo_inntech_transparent.png";
import { hubs } from "@/data/hubs";
import { facebookUrl } from "@/data/site";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "./icons";
import styles from "./site-header.module.css";

const productHubIds = [
  "student-hub",
  "learning-hub",
  "opportunity-hub",
  "project-hub",
  "mentor-hub",
  "marketplace",
];

const productHubs = hubs.filter((hub) => productHubIds.includes(hub.id));

const directLinks = [
  { label: "Community", href: "/community" },
  { label: "Doanh nghiệp", href: "/business-connect" },
  { label: "Về CLB", href: "/about" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus whenever the route changes (adjust state during render).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setDrawerOpen(false);
    setDropdownOpen(false);
  }

  const progressRef = useRef<HTMLSpanElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasDrawerOpenRef = useRef(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        progressRef.current?.style.setProperty(
          "transform",
          `scaleX(${progress})`,
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the drawer and/or the dropdown.
  useEffect(() => {
    if (!drawerOpen && !dropdownOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen, dropdownOpen]);

  // Clicking outside the dropdown closes it.
  useEffect(() => {
    if (!dropdownOpen) return;

    const onMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [dropdownOpen]);

  // Move focus into the drawer when it opens, and back to the menu
  // button when it closes (DOM focus only, no state).
  useEffect(() => {
    if (drawerOpen === wasDrawerOpenRef.current) return;
    wasDrawerOpenRef.current = drawerOpen;
    if (drawerOpen) {
      drawerRef.current?.querySelector<HTMLElement>("a")?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [drawerOpen]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  const productHubActive = productHubs.some((hub) => pathname === hub.href);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="INNTECH CLUB — về trang chủ"
            onClick={() => setDrawerOpen(false)}
          >
            <Image
              src={logo}
              alt="INNTECH CLUB"
              className={styles.logo}
              preload
            />
          </Link>

          <nav className={styles.nav} aria-label="Điều hướng chính">
            <div className={styles.navItem} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.navLink} ${
                  productHubActive ? styles.active : ""
                }`}
                aria-expanded={dropdownOpen}
                aria-controls="hubs-dropdown"
                onClick={() => setDropdownOpen((value) => !value)}
              >
                Hubs
                <ChevronDown
                  className={`${styles.chevron} ${
                    dropdownOpen ? styles.chevronOpen : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div
                  id="hubs-dropdown"
                  className={styles.dropdown}
                  aria-label="Các hub sản phẩm"
                >
                  {productHubs.map((hub) => {
                    const active = pathname === hub.href;
                    return (
                      <Link
                        key={hub.id}
                        href={hub.href}
                        className={`${styles.hubItem} ${
                          active ? styles.active : ""
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className={styles.hubNumber}>{hub.number}</span>
                        <span className={styles.hubText}>
                          <span className={styles.hubName}>{hub.name}</span>
                          <span className={styles.hubTagline}>{hub.tagline}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {directLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${active ? styles.active : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link
              className={styles.iconButton}
              href="/#hubs"
              aria-label="Tìm hub"
            >
              <Search className={styles.iconButtonIcon} />
            </Link>

            <a
              className={styles.cta}
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tham gia CLB
              <ArrowUpRight className={styles.ctaIcon} />
            </a>

            <button
              type="button"
              ref={menuButtonRef}
              className={styles.menuButton}
              aria-label={drawerOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation"
              onClick={() => setDrawerOpen((value) => !value)}
            >
              {drawerOpen ? (
                <X className={styles.menuIcon} />
              ) : (
                <Menu className={styles.menuIcon} />
              )}
            </button>
          </div>
        </div>

        <span
          ref={progressRef}
          className={styles.progress}
          aria-hidden="true"
        />
      </header>

      {/* The drawer lives outside <header>: the header uses backdrop-filter,
          which makes it the containing block for fixed-position descendants
          and would collapse the drawer to a sliver. */}
      {drawerOpen && (
        <div id="mobile-navigation" className={styles.drawer} ref={drawerRef}>
          <nav className={styles.drawerNav} aria-label="Điều hướng di động">
            {hubs.map((hub) => {
              const active = pathname === hub.href;
              return (
                <Link
                  key={hub.id}
                  href={hub.href}
                  className={`${styles.drawerLink} ${
                    active ? styles.active : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setDrawerOpen(false)}
                >
                  <span className={styles.drawerNumber}>{hub.number}</span>
                  <span className={styles.drawerText}>
                    <span className={styles.drawerName}>{hub.name}</span>
                    <span className={styles.drawerTagline}>{hub.tagline}</span>
                  </span>
                </Link>
              );
            })}
          </nav>
          <a
            className={styles.mobileCta}
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerOpen(false)}
          >
            Tham gia CLB
            <ArrowUpRight />
          </a>
        </div>
      )}
    </>
  );
}
