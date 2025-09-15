import React, { useEffect, useState, useCallback } from "react";
import "./Glimpses.css";

const Glimpses = () => {
  const slides = [
    {
      img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428317/Artboard_1_-_VLQ68SSCGUyS_rstct7.jpg",
      title: "Where You Arrive & Never Want to Leave",
      desc: "Embrace Grandeur From The First Step, With Seamless Drop-offs And Exclusive Services.",
    },
    {
      img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428317/Artboard_4_-_5l0NJWX8jvXS_cg3mpw.jpg",
      title: "Wait for No One, When You Can Have It All",
      desc: "Experience Twice The Grandeur With Double-Height Lobby Spaces At The Ground Level.",
    },
    {
      img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428317/Altitude_glimpeses_-_BMdiDd66Ej3P_tmfvje.jpg",
      title: "Unmatched Luxury Awaits You",
      desc: "Step into a realm of comfort and elegance with world-class amenities.",
    },
    {
      img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755428317/altitude_-_PIHuXo8sa16t_v8cnza.jpg",
      title: "Your Everyday Escape",
      desc: "Enjoy lush greenery and modern architecture at your doorstep.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(
    window.innerWidth < 768 ? 1 : 1 // 1 on mobile, 2 on desktop
  );

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Always move index by 1
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    setResetTimer(true);
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    setResetTimer(true);
  }, [slides.length]);

  // Autoplay
  useEffect(() => {
    if (resetTimer) setResetTimer(false);

    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10s autoplay

    return () => clearInterval(interval);
  }, [handleNext, resetTimer]);

  return (
    <div className="altitude_glimpses_container">
      <h1>Glimpses of Masterpiece</h1>

      <button
        className="altitude_glimpses_button altitude_glimpses_button_left"
        onClick={handlePrev}
      >
        &#10094;
      </button>

      <div className="altitude_glimpses_slider">
        <div
          className="altitude_glimpses_slides"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="altitude_glimpses_slide"
              key={index}
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <img src={slide.img} alt={`Slide ${index}`} />
              <div className="glimpses_info">
                <h6>{slide.title}</h6>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="altitude_glimpses_button altitude_glimpses_button_right"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Glimpses;
