"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logo_inntech_transparent.png";
import { ArrowUpRight, Menu, X } from "./icons";
import styles from "./site-header.module.css";

const navItems = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Giá trị", href: "#gia-tri" },
  { label: "Hoạt động", href: "#hoat-dong" },
  { label: "Dự án", href: "#du-an" },
  { label: "Sự kiện", href: "#su-kien" },
  { label: "Liên hệ", href: "#lien-he" },
];

const facebookUrl = "https://www.facebook.com/inntechclub";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="INNTECH CLUB — về đầu trang"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt="INNTECH CLUB"
            className={styles.logo}
            priority
          />
        </a>

        <nav className={styles.nav} aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
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
            className={styles.menuButton}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className={styles.mobileNav}>
          <nav aria-label="Điều hướng di động">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ArrowUpRight className={styles.mobileLinkIcon} />
              </a>
            ))}
          </nav>
          <a
            className={styles.mobileCta}
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Tham gia CLB
            <ArrowUpRight />
          </a>
        </div>
      )}

      <span
        ref={progressRef}
        className={styles.progress}
        aria-hidden="true"
      />
    </header>
  );
}
