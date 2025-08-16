import React, { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755265956/jwa8yyrzxzorhke6mk0y.jpg",
    title: "INNOVATION IN CONSTRUCTION BY MERO GERMANY",
    desc1:
      "Their approach to engineering isn’t about what’s possible, but what hasn’t even been imagined yet.",
    desc2:
      "With every project, they turn radical concepts into tangible realities, setting new standards for the industry."
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755265957/jmcfqctfe0ruqtvduyro.jpg",
    title: "INNOVATION IN CONSTRUCTION BY MERO GERMANY",
    desc1:
      "Their approach to engineering isn’t about what’s possible, but what hasn’t even been imagined yet.",
    desc2:
      "With every project, they turn radical concepts into tangible realities, setting new standards for the industry."
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755265957/g8d5medqrlboudc2zfss.jpg",
    title: "MODERN ARCHITECTURE DESIGN",
    desc1: "Pushing the boundaries of creativity in design and execution.",
    desc2: "Every detail is crafted with precision."
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755265958/o8tgfm7xmganqirgpbki.jpg",
    title: "FUTURE OF ENGINEERING",
    desc1: "Blending innovation with sustainability.",
    desc2: "Leading the path for next-generation construction."
  }
];

export default function LifeStyle () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 10000);
  }, [nextSlide]);

  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(slideInterval.current);
  }, [resetTimer]);

  return (
    <div className="life_style">
      <div
        className="life_style-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="life_style-item"
            key={index}
          >
            <img className="life_style_bg"
            src={slide.img}
            alt="life"
            />
            {/* <div className="life_style-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc1}</p>
              <p>{slide.desc2}</p>
            </div> */}
          </div>
        ))}
      </div>
      <button className="life_style-btn left" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="life_style-btn right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
}
