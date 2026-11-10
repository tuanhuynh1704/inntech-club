"use client";

import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element once it enters the viewport.
 * The hidden state lives behind `@media (scripting: enabled)` in globals.css,
 * so the page stays fully readable without JavaScript.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-mobile]",
      ),
    );

    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    // Mobile screens are tall and narrow, so blocks enter the viewport much
    // earlier. Wait until they are properly in view before revealing them.
    const mobileViewport = window.matchMedia("(max-width: 760px)");
    let observer: IntersectionObserver | null = null;

    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        },
        {
          threshold: 0.12,
          rootMargin: mobileViewport.matches
            ? "0px 0px -18% 0px"
            : "0px 0px -6% 0px",
        },
      );

      for (const element of elements) {
        if (!element.classList.contains("is-revealed")) {
          observer.observe(element);
        }
      }
    };

    observe();
    mobileViewport.addEventListener("change", observe);

    return () => {
      mobileViewport.removeEventListener("change", observe);
      observer?.disconnect();
    };
  }, []);

  return null;
}
