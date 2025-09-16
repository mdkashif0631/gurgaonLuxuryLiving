import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Slider.css";

const slides = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/wawfi3ysrbe8lnshknef.webp",
    text: "8 MAJESTIC TOWERS - 8.4 Hectares of sustainable living and 9,290 Sq. M. of world-class clubhouses",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/de1taahhiv9liofonvfo.webp",
    text: "LUXURY LIVING - Experience modern architecture and spacious interiors",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/segnwn4gqu8h6dslt1b6.webp",
    text: "GREEN SPACES - Beautiful landscaped gardens and open areas",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/zc9f4suwnnnoud3yxptd.webp",
    text: "WORLD-CLASS AMENITIES - Clubhouse, swimming pool, gym & more",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/gguqh78lmeixcmgjwf7t.jpg",
    text: "PANORAMIC VIEWS - Stunning cityscape and skyline views",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/hxspel5uupm6o0gk1zla.webp",
    text: "SECURE LIVING - 24x7 security with advanced surveillance",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/scb3hsubjfc7dqjhqka3.webp",
    text: "FAMILY FRIENDLY - Play zones, parks, and recreational areas",
  },
];

export default function AspenSlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const stopAutoSlide = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  }, [stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const goToSlide = (index) => {
    setCurrent(index);
    startAutoSlide(); // reset timer
  };

  return (
    <div className="aspen-slider-container">
      {/* Title & Subtitle */}
      <h1 className="aspen-slider-title">Gallery</h1>
      <p className="aspen-slider-subtitle">
        Explore The Aspen - captured moments of luxury living.
      </p>

      {/* Slider */}
      <div className="aspen-slider">
        <div
          className="aspen-slider-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="aspen-slide" key={index}>
              <img src={slide.image} alt={`slide-${index}`} />
              <div className="aspen-slide-text">{slide.text}</div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="aspen-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`aspen-dot ${current === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
