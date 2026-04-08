"use client";
import React, { useState } from "react";
import "../styles/section3.scss";
import catalogData from "../public/catalog.json";

const Section3 = () => {
  const [activeProduct, setActiveProduct] = useState(catalogData.catalog[0]);

  const handleProductHover = (product) => {
    setActiveProduct(product);
  };

  return (
    <section className="section3">
      <div className="section3-container">
        <div className="section3-left">
          <div className="section3-image-container">
            {activeProduct && (
              <img
                src={activeProduct.media[0]}
                alt={activeProduct.name}
                className="section3-product-image"
              />
            )}
          </div>
        </div>
        <div className="section3-right">
          <h2 className="section3-discover-title">
            Explore Machine Protection Systems
          </h2>
          <ul className="section3-product-list">
            {catalogData.catalog.map((product) => (
              <li
                key={product.id}
                className="section3-product-item"
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
