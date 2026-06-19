"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type ScrollRevealOptions = {
  selector?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
  ease?: string;
};

function markRevealed(elements: Element[]) {
  elements.forEach((el) => {
    el.classList.add("is-revealed");
    gsap.set(el, { clearProps: "transform,opacity", visibility: "visible" });
  });
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);

  const {
    selector = "[data-reveal]",
    y = 44,
    x = 0,
    scale = 1,
    duration = 0.85,
    stagger = 0.1,
    start = "top 88%",
    once = true,
    ease = "power3.out",
  } = options;

  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      const targets = scope.querySelectorAll(selector);
      if (!targets.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        markRevealed(Array.from(targets));
        return;
      }

      gsap.set(targets, {
        opacity: 0,
        y,
        x,
        scale,
        visibility: "hidden",
      });

      ScrollTrigger.batch(targets, {
        onEnter: (batch) => {
          gsap.set(batch, { visibility: "visible" });
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration,
            ease,
            stagger,
            overwrite: "auto",
            onComplete: () => markRevealed(batch),
          });
        },
        start,
        once,
      });
    },
    { scope: containerRef },
  );

  return containerRef;
}
