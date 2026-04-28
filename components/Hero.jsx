"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import "../styles/hero.scss";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlideRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef(null);

  const heroImagesRef = useRef([]);
  const heroTextRefs = useRef([]);
  const carouselInterval = useRef(null);

  const media = [
    { url: "/hero/hero1.png", alt: "Signage Products", type: "image" },
    { url: "/hero/hero2.png", alt: "Signage Products", type: "image" },
    {
      url: "/hero/hero.mp4",
      alt: "Signage Satellite View",
      type: "video",
      poster: "/hero/hero1.png",
    },
  ];

  const isVideoItem = useCallback((item) => {
    if (!item) return false;
    if (item.type === "video") return true;
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(item.url || "");
  }, []);

  const startInterval = useCallback(() => {
    clearInterval(carouselInterval.current);
    const currentIsVideo = isVideoItem(media[currentSlide]);
    if (currentIsVideo) return; // let video control advancement
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % media.length);
    }, 5000);
  }, [media.length, currentSlide, isVideoItem]);

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

  // Initial entry animation
  useEffect(() => {
    const textNodes = heroTextRefs.current.filter(Boolean);

    gsap.set(heroImagesRef.current[0], { opacity: 1, scale: 1 });
    gsap.set(textNodes, { opacity: 0, y: 46 });

    const tl = gsap.timeline();
    tl.from(heroImagesRef.current[0], {
      scale: 1.15,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
    }).to(
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
  }, []);

  // Start autoplay
  useEffect(() => {
    startInterval();
    return () => clearInterval(carouselInterval.current);
  }, [startInterval]);

  // Slide transition — runs for every slide change including wrap-around
  useEffect(() => {
    const prevSlide = prevSlideRef.current;
    if (prevSlide === currentSlide || isAnimatingRef.current) return;

    const currentImage = heroImagesRef.current[currentSlide];
    const prevImage = heroImagesRef.current[prevSlide];
    if (!currentImage || !prevImage) return;

    isAnimatingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        prevSlideRef.current = currentSlide;
        isAnimatingRef.current = false;
      },
    });

    tl.to(
      prevImage,
      {
        opacity: 0,
        scale: 1.05,
        duration: 0.9,
        ease: "power2.inOut",
      },
      0,
    ).fromTo(
      currentImage,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" },
      0.4,
    );
  }, [currentSlide]);

  // Play/pause videos when their slide becomes active. Ensures autoplay doesn't get stuck on videos.
  useEffect(() => {
    heroImagesRef.current.forEach((container, idx) => {
      if (!container) return;
      const vid = container.querySelector && container.querySelector("video");
      if (!vid) return;

      if (idx === currentSlide) {
        try {
          vid.muted = true;
          const p = vid.play();
          if (p && typeof p.then === "function") p.catch(() => {});
          // clear interval while video plays
          clearInterval(carouselInterval.current);
          const onEnded = () => goToSlide((currentSlide + 1) % media.length);
          // store listener so we can remove it later
          vid.__onHeroEnded = onEnded;
          vid.addEventListener("ended", onEnded);
        } catch (e) {}
      } else {
        try {
          if (vid.__onHeroEnded) {
            vid.removeEventListener("ended", vid.__onHeroEnded);
            delete vid.__onHeroEnded;
          }
        } catch (e) {}
        try {
          vid.pause();
          vid.currentTime = 0;
        } catch (e) {}
      }
    });

    if (!isVideoItem(media[currentSlide])) startInterval();

    return () => {
      heroImagesRef.current.forEach((container) => {
        if (!container) return;
        const v = container.querySelector && container.querySelector("video");
        if (!v) return;
        try {
          if (v.__onHeroEnded) {
            v.removeEventListener("ended", v.__onHeroEnded);
            delete v.__onHeroEnded;
          }
          v.pause();
        } catch (e) {}
      });
    };
  }, [currentSlide, goToSlide, isVideoItem, media, startInterval]);

  // Pause on scroll, resume after
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

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        goToSlide((currentSlide - 1 + media.length) % media.length);
      if (e.key === "ArrowRight") goToSlide((currentSlide + 1) % media.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, media.length, goToSlide]);

  // Touch / swipe support
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const delta = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0
        ? goToSlide((currentSlide + 1) % media.length)
        : goToSlide((currentSlide - 1 + media.length) % media.length);
    }
    touchStartRef.current = null;
  };

  return (
    <div className="lightship-container">
      {/* Hero Section */}
      <section
        className="hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-carousel">
          {media.map((item, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentSlide ? "active" : ""}`}
              ref={(el) => (heroImagesRef.current[index] = el)}
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

        {/* Prev / Next Arrows */}
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() =>
            goToSlide((currentSlide - 1 + media.length) % media.length)
          }
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => goToSlide((currentSlide + 1) % media.length)}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        <div className="carousel-indicators">
          {media.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="scroll-indicator">
          <span>↓</span>
          <span>Scroll to Explore</span>
        </button>
      </section>
    </div>
  );
};

export default Hero;
