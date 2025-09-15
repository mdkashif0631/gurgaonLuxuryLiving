import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ProjectOverview.css";

const images = [
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769952/cxwk7lekou0np1vpjz1j.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769943/ydh2bl0bm9p4l1ci4kx2.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769943/lzx3fcxruf5zcksudsyk.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769934/jc3xequns5iwvqaux4tt.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769957/xw9d1axgvwrii5um0fqp.jpg",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769170/hxhzsmfyfu39hby0ovci.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769953/nziyuavu9d2w3qam2x4w.webp",
  "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769952/cxwk7lekou0np1vpjz1j.webp",
];

const features = [
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769673/z4cts8w72nfzimtpog2m.png",
    title: "LOBBY",
    text: "Grand Entrance Lobby",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769893/eksn74t6poddfztldx8t.png",
    title: "CLUB HOUSE",
    text: "Club House Spanning across 2 floors measuring approx. 14000 sq.ft.",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769894/n0qx769ykzuyrwr4e6pf.png",
    title: "RESIDENCY",
    text: "Luxury residential living spaces",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769894/ffvhqipy2cgdmmni8a8n.png",
    title: "FINE DINING RESTAURANT",
    text: "Fine Dining Restaurant within the complex",
  },
];

const ProjectOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // stop auto-slide
  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // start auto-slide
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // every 4 seconds
  }, [stopAutoSlide]);

  // initialize auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  // manual navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide(); // reset timer
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoSlide(); // reset timer
  };

  return (
    <section className="aipl-overview">
      <div className="aipl-overview-container">
        {/* Left - Image Slider */}
        <div className="aipl-slider">
          <img
            src={images[currentIndex]}
            alt={`Building ${currentIndex + 1}`}
            className="aipl-slide-img"
          />
          <button className="aipl-arrow left" onClick={handlePrev}>
            ❮
          </button>
          <button className="aipl-arrow right" onClick={handleNext}>
            ❯
          </button>
        </div>

        {/* Right - Content */}
        <div className="aipl-content">
          <h2 className="aipl-heading">PROJECT OVERVIEW</h2>
          <p className="aipl-text">
            Set against the majestic backdrop of the Aravallis, The Peaceful
            Homes are nothing short of a work of art. Well connected to NH 8 and
            Golf Course Roadkind in close proximity to Southern Periphery Road
            (SPR), these residences give you immediate access to the best
            Gurgaon has to offer. From the best options in retail and commercial
            developments to schools, a bustling office hub, hospitals, colleges
            and world-class recreational facilities.
          </p>

          <div className="aipl-features">
            {features.map((item, idx) => (
              <div key={idx} className="aipl-feature">
                <img src={item.icon} alt={item.title} className="aipl-icon" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
