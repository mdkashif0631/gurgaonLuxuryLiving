import React, { useEffect, useState, useCallback, useRef } from "react";
import "./ProjectDescription.css";

const images = [
  "https://res.cloudinary.com/dif213nbi/image/upload/v1755428326/Artboard_1-3_-_ETYKrMHhNWZl_mkthpx.jpg",
  "https://res.cloudinary.com/dif213nbi/image/upload/v1755428326/Artboard_1__2__-_abTOS7mR3ztB_df6fqx.jpg",
  "https://res.cloudinary.com/dif213nbi/image/upload/v1755428334/Artboard_1-4_-_sw90j1NEpwUg_nohr3n.jpg",
  "https://res.cloudinary.com/dif213nbi/image/upload/v1755428316/premier_offering__1__-_dET6MkLWQlfT_ls8cqj.jpg"
];

const ProjectDescription = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalTime = 10000; // 10 seconds
  const timerRef = useRef(null); // ✅ keeps value across renders

  const nextSlide = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 500); // fade duration
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, intervalTime);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrent(index);
      setFade(false);
    }, 500);
  };

  return (
    <section className="project_description_container">
      <div className="altitude-info-container">
        {/* Title */}
        <h1 className="altitude-title">M3M Altitude</h1>
        <h3 className="altitude-subtitle">
          Golf Course Road Extn., Sector 65, Gurugram
        </h3>

        {/* Description */}
        <p className="altitude-description">
          Designed by the award-winning UHA London, M3M Altitude is a stunning
          masterpiece inspired by nature’s elegance. Soaring high, this
          architectural marvel offers a breathtaking sky experience. The unique
          Air Lounge features a first-of-its-kind glass Air Bridge, delivering
          panoramic views. Impeccably curated residences, with two master bedrooms
          and wrap-around decks, offer the perfect blend of luxury and comfort.
          Nestled within the prestigious M3M Golfestate, M3M Altitude stands
          proudly in Sector 65, Gurugram’s most affluent enclave.
        </p>

        {/* Features */}
        <div className="altitude-features">
          <div className="altitude-feature-item">
            <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428347/waterfall_-_aIKeDaATjEP0_-_byRxsJCwPprt_-_Spm9G0PoTtvx_-_tTaV7Wp9UDQR_-_VJbC6xnuYI7s_yacmrm.png" alt="Waterfall" />
            <p>A Unique Air Lounge Experience with a Massive 60 ft Waterfall</p>
          </div>
          <div className="altitude-feature-item">
            <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428334/three_-_L3eyfFrhEuXq_hwoaz0.png" alt="Panoramic Views" />
            <p>Panoramic Views from Wrap-Around Decks</p>
          </div>
          <div className="altitude-feature-item">
            <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428334/two_-_zGXp1WTzwJM8_jsbfrp.png" alt="Golfestate" />
            <p>Part of Iconic M3M Golfestate</p>
          </div>
          <div className="altitude-feature-item">
            <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428334/one_-_2hQzwJ9DXv70_cgsyeb.png" alt="Glass Air Bridge" />
            <p>A Spectacular Glass Air Bridge</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="altitude-buttons">
          <button className="altitude-btn altitude-enquire">Enquire Now →</button>
          <button className="altitude-btn altitude-brochure">Download Brochure →</button>
        </div>
      </div>

      <div className="altitude-carousel-container">
        <div className={`altitude-carousel-image ${fade ? "altitude-fade" : ""}`}>
          <img src={images[current]} alt={`slide-${current}`} />
        </div>
        <div className="altitude-carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`altitude-dot ${index === current ? "altitude-active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
