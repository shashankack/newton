"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap } from "@/lib/gsap";
import catalogData from "../public/catalog.json";
import "../styles/section3.scss";

const Section3 = () => {
  const sectionRef = useScrollReveal({ y: 56, stagger: 0.08 });
  const imageRef = useRef(null);
  const activeProduct = useRef(catalogData.catalog[0]);
  const productIdRef = useRef(catalogData.catalog[0].id);

  const handleProductHover = (product) => {
    if (productIdRef.current === product.id) return;
    productIdRef.current = product.id;
    activeProduct.current = product;

    const img = imageRef.current;
    if (!img) return;

    gsap.to(img, {
      opacity: 0,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        img.src = product.media[0];
        img.alt = product.name;
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
        );
      },
    });
  };

  useEffect(() => {
    const img = imageRef.current;
    if (img) gsap.set(img, { opacity: 1, scale: 1 });
  }, []);

  return (
    <section className="section3" ref={sectionRef}>
      <div className="section3-container">
        <div className="section3-left">
          <div className="section3-image-container" data-reveal>
            <img
              ref={imageRef}
              src={activeProduct.current.media[0]}
              alt={activeProduct.current.name}
              className="section3-product-image"
            />
          </div>
        </div>
        <div className="section3-right">
          <h2 className="section3-discover-title" data-reveal>
            Explore Machine Protection Systems
          </h2>
          <ul className="section3-product-list">
            {catalogData.catalog.map((product) => (
              <li
                key={product.id}
                className="section3-product-item"
                data-reveal
                onMouseEnter={() => handleProductHover(product)}
              >
                <a href={`/store/product/${product.id}`}>{product.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section3;
