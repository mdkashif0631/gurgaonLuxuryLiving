import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Slider.css";

// Dataset 1 (Aspen)
const aspenSlides = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/wawfi3ysrbe8lnshknef.webp",
    text: "8 MAJESTIC TOWERS",
    text1: "8.4 Hectares of sustainable living and 9,290 Sq. M. of world-class clubhouses",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/de1taahhiv9liofonvfo.webp",
    text: "LUXURY LIVING",
    text1: "Experience modern architecture and spacious interiors",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/segnwn4gqu8h6dslt1b6.webp",
    text: "GREEN SPACES",
    text1: "Beautiful landscaped gardens and open areas",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/zc9f4suwnnnoud3yxptd.webp",
    text: "WORLD-CLASS AMENITIES",
    text1: "Clubhouse, swimming pool, gym & more",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/gguqh78lmeixcmgjwf7t.jpg",
    text: "PANORAMIC VIEWS",
    text1: "Stunning cityscape and skyline views",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/hxspel5uupm6o0gk1zla.webp",
    text: "SECURE LIVING",
    text1: "24x7 security with advanced surveillance",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/scb3hsubjfc7dqjhqka3.webp",
    text: "FAMILY FRIENDLY",
    text1: "Play zones, parks, and recreational areas",
  },
];

// Dataset 2 (Iconic)
const iconicSlides = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072065/byfipyen3sptaspadpv3.webp",
    text: "270 degree WRAP AROUND PATIO",
    text1: "Enjoy Panoramic views of the Aravallis range and the city",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072065/mfcblymtkfhpetvicv35.webp",
    text: "BATHROOM",
    text1: "Designed just for you in every details",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072065/yxlh9hf7oxasd8esq3lz.webp",
    text: "MASTER BEDROOM",
    text1: "Create a home thet truly resonates you",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/zc9f4suwnnnoud3yxptd.webp",
    text: "WORLD-CLASS AMENITIES",
    text1: "Clubhouse, swimming pool, gym & more",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/gguqh78lmeixcmgjwf7t.jpg",
    text: "PANORAMIC VIEWS",
    text1: "Stunning cityscape and skyline views",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/hxspel5uupm6o0gk1zla.webp",
    text: "SECURE LIVING",
    text1: "24x7 security with advanced surveillance",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/scb3hsubjfc7dqjhqka3.webp",
    text: "FAMILY FRIENDLY",
    text1: "Play zones, parks, and recreational areas",
  },
];

// Dataset 3 (XYZ)
const xyzSlides = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/wawfi3ysrbe8lnshknef.webp",
    text: "8 MAJESTIC TOWERS",
    text1: "8.4 Hectares of sustainable living and 9,290 Sq. M. of world-class clubhouses",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/de1taahhiv9liofonvfo.webp",
    text: "LUXURY LIVING",
    text1: "Experience modern architecture and spacious interiors",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990395/segnwn4gqu8h6dslt1b6.webp",
    text: "GREEN SPACES",
    text1: "Beautiful landscaped gardens and open areas",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/zc9f4suwnnnoud3yxptd.webp",
    text: "WORLD-CLASS AMENITIES",
    text1: "Clubhouse, swimming pool, gym & more",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/gguqh78lmeixcmgjwf7t.jpg",
    text: "PANORAMIC VIEWS",
    text1: "Stunning cityscape and skyline views",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990393/hxspel5uupm6o0gk1zla.webp",
    text: "SECURE LIVING",
    text1: "24x7 security with advanced surveillance",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/scb3hsubjfc7dqjhqka3.webp",
    text: "FAMILY FRIENDLY",
    text1: "Play zones, parks, and recreational areas",
  },
];

export default function ProjectSlider({ project }) {
  const getSlidesByProject = () => {
    switch (project?.toLowerCase()) {
      case "aspen":
        return aspenSlides;
      case "iconic":
        return iconicSlides;
      case "xyz":
        return xyzSlides;
      default:
        return [];
    }
  };

  const slides = getSlidesByProject();
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const stopAutoSlide = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    if (slides.length > 0) {
      slideInterval.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
  }, [stopAutoSlide, slides.length]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const goToSlide = (index) => {
    setCurrent(index);
    startAutoSlide(); // reset timer
  };

  if (slides.length === 0) {
    return <p>No gallery available for this project.</p>;
  }

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
