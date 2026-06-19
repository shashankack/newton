"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import "../styles/hero.scss";

const MEDIA = [
  { url: "/hero/1.png", alt: "Signage Products", type: "image" },
  { url: "/hero/2.png", alt: "Signage Products", type: "image" },
  { url: "/hero/3.png", alt: "Signage Products", type: "image" },
  { url: "/hero/4.png", alt: "Signage Products", type: "image" },
  { url: "/hero/5.png", alt: "Signage Products", type: "image" },
  { url: "/hero/6.png", alt: "Signage Products", type: "image" },
  { url: "/hero/7.png", alt: "Signage Products", type: "image" },
  {
    url: "/hero/hero.mp4",
    alt: "Signage Satellite View",
    type: "video",
    poster: "/hero/1.png",
  },
  {
    url: "/hero/hero_1.mp4",
    alt: "Signage Products",
    type: "video",
    poster: "/hero/1.png",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlideRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef(null);
  const heroRef = useRef(null);

  const heroImagesRef = useRef([]);
  const heroTextRefs = useRef([]);
  const carouselInterval = useRef(null);

  const isVideoItem = useCallback((item) => {
    if (!item) return false;
    if (item.type === "video") return true;
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(item.url || "");
  }, []);

  const startInterval = useCallback(() => {
    clearInterval(carouselInterval.current);
    const currentIsVideo = isVideoItem(MEDIA[currentSlide]);
    if (currentIsVideo) return;
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MEDIA.length);
    }, 5000);
  }, [currentSlide, isVideoItem]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimatingRef.current) return;
      setCurrentSlide(index);
      startInterval();
    },
    [startInterval],
  );

  const setHeroTextRef = (el, index) => {
    heroTextRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const textNodes = heroTextRefs.current.filter(Boolean);
      const firstImage = heroImagesRef.current[0];
      if (!firstImage || !textNodes.length) return;

      gsap.set(firstImage, { opacity: 1, scale: 1 });
      gsap.set(textNodes, { opacity: 0, y: 46 });

      gsap
        .timeline()
        .from(firstImage, {
          scale: 1.15,
          opacity: 0,
          duration: 1.6,
          ease: "power3.out",
        })
        .to(
          textNodes,
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.95",
        );
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      const prevSlide = prevSlideRef.current;
      if (prevSlide === currentSlide || isAnimatingRef.current) return;

      const currentImage = heroImagesRef.current[currentSlide];
      const prevImage = heroImagesRef.current[prevSlide];
      if (!currentImage || !prevImage) return;

      isAnimatingRef.current = true;

      gsap
        .timeline({
          onComplete: () => {
            prevSlideRef.current = currentSlide;
            isAnimatingRef.current = false;
          },
        })
        .to(
          prevImage,
          {
            opacity: 0,
            scale: 1.05,
            duration: 0.9,
            ease: "power2.inOut",
          },
          0,
        )
        .fromTo(
          currentImage,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" },
          0.4,
        );
    },
    { scope: heroRef, dependencies: [currentSlide], revertOnUpdate: false },
  );

  useEffect(() => {
    startInterval();
    return () => clearInterval(carouselInterval.current);
  }, [startInterval]);

  useEffect(() => {
    heroImagesRef.current.forEach((container, idx) => {
      if (!container) return;
      const vid = container.querySelector?.("video");
      if (!vid) return;

      if (idx === currentSlide) {
        try {
          vid.muted = true;
          const p = vid.play();
          if (p?.then) p.catch(() => {});
          clearInterval(carouselInterval.current);
          const onEnded = () => goToSlide((currentSlide + 1) % MEDIA.length);
          vid.__onHeroEnded = onEnded;
          vid.addEventListener("ended", onEnded);
        } catch {
          /* autoplay may be blocked */
        }
      } else {
        try {
          if (vid.__onHeroEnded) {
            vid.removeEventListener("ended", vid.__onHeroEnded);
            delete vid.__onHeroEnded;
          }
          vid.pause();
          vid.currentTime = 0;
        } catch {
          /* ignore playback errors */
        }
      }
    });

    if (!isVideoItem(MEDIA[currentSlide])) startInterval();

    return () => {
      heroImagesRef.current.forEach((container) => {
        if (!container) return;
        const v = container.querySelector?.("video");
        if (!v) return;
        try {
          if (v.__onHeroEnded) {
            v.removeEventListener("ended", v.__onHeroEnded);
            delete v.__onHeroEnded;
          }
          v.pause();
        } catch {
          /* ignore */
        }
      });
    };
  }, [currentSlide, goToSlide, isVideoItem, startInterval]);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearInterval(carouselInterval.current);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(startInterval, 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [startInterval]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        goToSlide((currentSlide - 1 + MEDIA.length) % MEDIA.length);
      if (e.key === "ArrowRight") goToSlide((currentSlide + 1) % MEDIA.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, goToSlide]);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const delta = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0
        ? goToSlide((currentSlide + 1) % MEDIA.length)
        : goToSlide((currentSlide - 1 + MEDIA.length) % MEDIA.length);
    }
    touchStartRef.current = null;
  };

  return (
    <div className="lightship-container" ref={heroRef}>
      <section
        className="hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-carousel">
          {MEDIA.map((item, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentSlide ? "active" : ""}`}
              ref={(el) => {
                heroImagesRef.current[index] = el;
              }}
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              {isVideoItem(item) ? (
                <video
                  src={item.url}
                  poster={item.poster}
                  muted
                  playsInline
                  autoPlay
                  preload="metadata"
                  controls
                />
              ) : (
                <img src={item.url} alt={item.alt} />
              )}
            </div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero-text" ref={(el) => setHeroTextRef(el, 0)}>
            Machine Protection Systems for the Global Machine Tool Industry
          </h1>

          <h6 className="hero-text-tag" ref={(el) => setHeroTextRef(el, 1)}>
            Telescopic Way Covers, Roll-Up Covers, Apron Covers, and CNC Machine
            Enclosures.
          </h6>

          <p className="hero-text-des" ref={(el) => setHeroTextRef(el, 2)}>
            35 plus years experience | OEM focused manufacturing | Custom
            engineering | Made in India
          </p>

          <p className="hero-text-des" ref={(el) => setHeroTextRef(el, 3)}>
            Specialists in machine tool protection systems for CNC and
            industrial machinery, built for long-term performance in demanding
            shop floor environments.
          </p>
        </div>

        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() =>
            goToSlide((currentSlide - 1 + MEDIA.length) % MEDIA.length)
          }
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => goToSlide((currentSlide + 1) % MEDIA.length)}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        <div className="carousel-indicators">
          {MEDIA.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="scroll-indicator" type="button">
          <span>↓</span>
          <span>Scroll to Explore</span>
        </button>
      </section>
    </div>
  );
};

export default Hero;
