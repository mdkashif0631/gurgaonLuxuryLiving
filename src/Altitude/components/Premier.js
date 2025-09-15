import React, { useEffect, useState, useCallback } from "react";
import "./Premier.css";

const Premier = () => {
  const slides = [
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428302/img-3_-_iMWIqMKLeXM0_vvzspo.jpg", title: "Cloud Yoga" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428302/img-4_-_rUc4Xdq1tI2B_x4soos.jpg", title: "Sauna" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428302/img-5_-_QyVj0d6vtLsQ_oe5yup.jpg", title: "Climbing Wall" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428302/img-3_-_5e8lpLUH4809_tpfodg.jpg", title: "Beach Pool" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428301/img-1_-_hvgdkrLpVwQg_r7jpqw.jpg", title: "Fitness Gym" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 500) {
        setItemsPerView(1);
      } else if (window.innerWidth < 960) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView(); // initial check
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - itemsPerView : prev - 1
    );
    setResetTimer(true);
  }, [slides.length, itemsPerView]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= slides.length - itemsPerView ? 0 : prev + 1
    );
    setResetTimer(true);
  }, [slides.length, itemsPerView]);

  // Autoplay
  useEffect(() => {
    if (resetTimer) setResetTimer(false);

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext, resetTimer]);

  return (
    <div className="premier_container">
      <h1 className="premier_title">Premier Offerings</h1>

      <button className="premier_button left" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="premier_wrapper">
        <div
          className="premier_inner"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="premier_slide"
              key={index}
              style={{ flex: `0 0 calc(100% / ${itemsPerView})` }}
            >
              <img src={slide.img} alt={slide.title} />
              <div className="premier_slide_info">{slide.title}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="premier_button right" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Premier;
