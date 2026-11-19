"use client";

import { useEffect } from "react";

const SELECTOR =
  "[data-reveal], [data-reveal-mobile], [data-reveal-stagger]";
const SCOPE_SELECTOR = "[data-reveal-scope]";

/**
 * Reveals every reveal target once it enters the viewport.
 *
 * The hidden state lives behind `@media (scripting: enabled)` in globals.css,
 * so the page stays fully readable without JavaScript. A 3s inline failsafe
 * (layout.tsx) covers the case where this effect never mounts.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Handshake first, before any early return: a healthy script disables the
    // inline failsafe and restores animations if it had already fired.
    const revealWindow = window as Window & {
      __revealFailsafeTimer?: number;
    };
    if (revealWindow.__revealFailsafeTimer) {
      clearTimeout(revealWindow.__revealFailsafeTimer);
      revealWindow.__revealFailsafeTimer = undefined;
    }
    document.documentElement.dataset.revealActive = "1";
    document.documentElement.classList.remove("reveal-fallback");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR),
    );

    if (targets.length === 0) return;

    const reveal = (element: Element): void => {
      element.classList.add("is-revealed");
    };

    const revealInstant = (element: Element): void => {
      element.classList.add("is-revealed", "is-instant");
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    // Safari < 14 only exposes the deprecated addListener API.
    const mobileViewport = window.matchMedia("(max-width: 760px)");
    const revealedScopes = new WeakSet<Element>();
    let observer: IntersectionObserver | null = null;

    const revealScope = (scope: Element): void => {
      revealedScopes.add(scope);
      if (scope.matches(SELECTOR)) reveal(scope);
      scope.querySelectorAll(SELECTOR).forEach(reveal);
    };

    // Reveal every reveal ancestor (e.g. a form or stagger grid) instantly.
    const revealAncestors = (element: Element): void => {
      let ancestor = element.parentElement?.closest(SELECTOR) ?? null;
      while (ancestor) {
        revealInstant(ancestor);
        ancestor = ancestor.parentElement?.closest(SELECTOR) ?? null;
      }
    };

    const observeTargets = (): void => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const target = entry.target;
            if (target.matches(SCOPE_SELECTOR)) {
              revealScope(target);
            } else {
              reveal(target);
            }
            observer?.unobserve(target);
          }
        },
        {
          threshold: 0,
          rootMargin: mobileViewport.matches
            ? "0px 0px -18% 0px"
            : "0px 0px -8% 0px",
        },
      );

      for (const element of targets) {
        if (element.classList.contains("is-revealed")) continue;

        // Group animation: observe the scope once instead of each child.
        const scope = element.closest(SCOPE_SELECTOR);
        if (scope) {
          if (!revealedScopes.has(scope)) observer.observe(scope);
          continue;
        }

        observer.observe(element);
      }
    };

    // Deep links must show the target immediately, including nested blocks.
    const revealDeepLink = (): void => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;

      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep the raw hash when it is not valid percent-encoding.
      }

      const target = document.getElementById(id);
      if (!target) return;

      revealInstant(target);
      target.querySelectorAll(SELECTOR).forEach(revealInstant);
      revealAncestors(target);
    };

    // Keyboard focus can move into a still-hidden block: reveal it instantly.
    const handleFocusIn = (event: FocusEvent): void => {
      const node = event.target;
      if (!(node instanceof Element)) return;

      const target = node.closest<HTMLElement>(SELECTOR);
      if (!target) return;

      revealInstant(target);
      revealAncestors(target);
    };

    const handleVisibilityChange = (): void => {
      if (document.visibilityState === "visible") observeTargets();
    };

    const handleViewportChange = (): void => {
      observeTargets();
    };

    observeTargets();
    revealDeepLink();

    document.addEventListener("focusin", handleFocusIn);
    window.addEventListener("hashchange", revealDeepLink);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (typeof mobileViewport.addEventListener === "function") {
      mobileViewport.addEventListener("change", handleViewportChange);
    } else {
      mobileViewport.addListener(handleViewportChange);
    }

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("hashchange", revealDeepLink);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      if (typeof mobileViewport.removeEventListener === "function") {
        mobileViewport.removeEventListener("change", handleViewportChange);
      } else {
        mobileViewport.removeListener(handleViewportChange);
      }

      observer?.disconnect();
    };
  }, []);

  return null;
}
