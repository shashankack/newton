"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export interface ProductImageSliderProps {
  /** Array of image src paths to display */
  images: string[];
  /** Alt text prefix — each slide appends its index */
  alt: string;
  /** Enable automatic slide advance (auto-scroll). Defaults to true. */
  autoScroll?: boolean;
  /** Auto-scroll interval in ms. Defaults to 4500. */
  autoScrollIntervalMs?: number;
}

export default function ProductImageSlider({
  images,
  alt,
  autoScroll = true,
  autoScrollIntervalMs = 4500,
}: ProductImageSliderProps) {
  const imageCount = images?.length ?? 0;
  const hasMany = imageCount > 1;

  // Prefer respecting user accessibility settings.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const update = () => setPrefersReducedMotion(mq.matches);
    update();

    // Safari < 14 uses addListener/removeListener
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    // eslint-disable-next-line deprecation/deprecation
    mq.addListener(update);
    // eslint-disable-next-line deprecation/deprecation
    return () => mq.removeListener(update);
  }, []);

  // To get seamless looping, we render clones at each end:
  // [last, ...images, first]
  const slides = useMemo(() => {
    if (!hasMany) return images;
    return [images[imageCount - 1], ...images, images[0]];
  }, [hasMany, images, imageCount]);
  const slideCount = slides.length;

  // `index` is the position inside `slides`.
  // When `hasMany`, start at 1 to show the first "real" image.
  const [index, setIndex] = useState(() => (hasMany ? 1 : 0));
  const realIndex = hasMany ? (index - 1 + imageCount) % imageCount : 0;

  // Drag state (pointer-based so it works for mouse + touch).
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const lastPointerId = useRef<number | null>(null);

  // Autoplay state (user can pause).
  const [isPlaying, setIsPlaying] = useState(autoScroll);
  useEffect(() => setIsPlaying(autoScroll), [autoScroll]);

  // Hover/focus pauses autoplay to avoid fighting the user.
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Used to disable transition for the single "jump" frame
  // after we animate into a clone.
  const [instantJump, setInstantJump] = useState(false);
  useEffect(() => {
    if (!instantJump) return;
    const id = window.requestAnimationFrame(() => setInstantJump(false));
    return () => window.cancelAnimationFrame(id);
  }, [instantJump]);

  // Reset when images change (e.g. route change).
  useEffect(() => {
    setDragOffset(0);
    setIsDragging(false);
    dragStartX.current = null;
    lastPointerId.current = null;
    setInstantJump(false);
    setIndex(imageCount > 1 ? 1 : 0);
  }, [imageCount, slides]);

  const goTo = useCallback(
    (nextRealIndex: number) => {
      if (!hasMany) return;
      const clamped = Math.max(0, Math.min(nextRealIndex, imageCount - 1));
      setIndex(clamped + 1);
    },
    [hasMany, imageCount],
  );

  const goPrev = useCallback(() => {
    if (!hasMany) return;
    setIndex((i) => i - 1);
  }, [hasMany]);

  const goNext = useCallback(() => {
    if (!hasMany) return;
    setIndex((i) => i + 1);
  }, [hasMany]);

  const shouldAutoScroll =
    hasMany &&
    isPlaying &&
    !prefersReducedMotion &&
    !isHovering &&
    !isFocused &&
    !isDragging;

  // Auto-scroll: re-schedules after every *real* slide change, so manual
  // navigation naturally "resets" the timer while seamless-loop jumps
  // (clone -> real) do not.
  useEffect(() => {
    if (!shouldAutoScroll) return;
    const id = window.setTimeout(() => {
      goNext();
    }, autoScrollIntervalMs);
    return () => window.clearTimeout(id);
  }, [shouldAutoScroll, autoScrollIntervalMs, goNext, realIndex]);

  const handleWrapperTransitionEnd = useCallback(() => {
    if (!hasMany) return;

    // If we're on a clone, jump instantly to the matching real slide.
    if (index === 0) {
      setInstantJump(true);
      setIndex(imageCount);
      return;
    }
    if (index === imageCount + 1) {
      setInstantJump(true);
      setIndex(1);
    }
  }, [hasMany, index, imageCount]);

  const isEventFromInteractive = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return false;
    return Boolean(
      target.closest(
        "button, a, input, textarea, select, label, summary, [role='button']",
      ),
    );
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!hasMany) return;
    if (isEventFromInteractive(e.target)) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    dragStartX.current = e.clientX;
    lastPointerId.current = e.pointerId;
    setIsDragging(true);
    setDragOffset(0);

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!hasMany) return;
    if (!isDragging || dragStartX.current === null) return;
    if (lastPointerId.current !== null && e.pointerId !== lastPointerId.current)
      return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const endDrag = (deltaX: number) => {
    const threshold = 55;
    if (Math.abs(deltaX) >= threshold) {
      deltaX < 0 ? goNext() : goPrev();
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
    lastPointerId.current = null;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!hasMany) return;
    if (!isDragging || dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    endDrag(deltaX);
  };

  const handlePointerCancel = () => {
    if (!hasMany) return;
    if (!isDragging || dragStartX.current === null) return;
    endDrag(0);
  };

  const handleBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goPrev();
        break;
      case "ArrowRight":
        e.preventDefault();
        goNext();
        break;
      case "Home":
        e.preventDefault();
        goTo(0);
        break;
      case "End":
        e.preventDefault();
        goTo(imageCount - 1);
        break;
      case " ":
      case "Spacebar":
        e.preventDefault();
        setIsPlaying((p) => !p);
        break;
    }
  };

  // Keep the active thumbnail in view (helps when auto-scrolling).
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    if (!hasMany) return;
    const el = thumbRefs.current[realIndex];
    el?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [hasMany, realIndex]);

  if (imageCount === 0) {
    return (
      <div className="w-full select-none">
        <div
          className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-[#f8f9fa]"
          style={{ aspectRatio: "16 / 10" }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">
              No image
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${alt} images`}
    >
      {/* ── Main viewer ── */}
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm cursor-grab active:cursor-grabbing touch-pan-y focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9acd32]/40"
        style={{ aspectRatio: "16 / 10" }}
        tabIndex={hasMany ? 0 : -1}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerCancel}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={handleBlurCapture}
      >
        {/* Sliding strip */}
        <div
          className="flex h-full"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(calc(${-index * 100}% / ${slideCount} + ${dragOffset}px))`,
            transition:
              isDragging || instantJump
                ? "none"
                : "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
          }}
          onTransitionEnd={handleWrapperTransitionEnd}
        >
          {slides.map((src, slideIdx) => {
            const slideRealIndex = hasMany
              ? (slideIdx - 1 + imageCount) % imageCount
              : 0;
            return (
              <div
                key={`${src}-${slideIdx}`}
                className="flex h-full shrink-0 items-center justify-center bg-[#f8f9fa] p-4 sm:p-6"
                style={{ width: `${100 / slideCount}%` }}
                aria-hidden={hasMany ? slideRealIndex !== realIndex : false}
              >
                <img
                  src={src}
                  alt={`${alt} — view ${slideRealIndex + 1}`}
                  className="h-full w-full object-contain"
                  draggable={false}
                  loading={slideRealIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        {hasMany && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9acd32]/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9acd32]/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronRight size={19} />
            </button>

            {/* Play / Pause */}
            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={
                  isPlaying ? "Pause auto-scroll" : "Play auto-scroll"
                }
                className="absolute bottom-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9acd32]/50"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            )}

            {/* Counter badge */}
            <span className="absolute bottom-2.5 right-2.5 rounded-full border border-slate-200 bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
              {realIndex + 1} / {imageCount}
            </span>

            {/* Autoplay progress */}
            {shouldAutoScroll && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-slate-200/70">
                <div
                  key={`progress-${realIndex}-${autoScrollIntervalMs}`}
                  className="slider-progress-fill h-full origin-left bg-[#9acd32]"
                  style={{
                    animationDuration: `${autoScrollIntervalMs}ms`,
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {hasMany && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
          <div className="relative">
            <div className="flex gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory">
              {images.map((src, i) => {
                const isActive = realIndex === i;
                return (
                  <button
                    key={`${src}-${i}`}
                    ref={(el) => {
                      thumbRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-current={isActive}
                    className={`h-16 w-16 shrink-0 snap-start overflow-hidden rounded-lg bg-white ring-1 ring-slate-200 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9acd32]/60 sm:h-20 sm:w-20 ${
                      isActive
                        ? "opacity-100 ring-2 ring-[#9acd32]"
                        : "opacity-70 hover:opacity-100 hover:shadow-sm"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                );
              })}
            </div>

            {/* Subtle fades to hint the strip is scrollable */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes sliderProgressFill {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .slider-progress-fill {
          animation-name: sliderProgressFill;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
