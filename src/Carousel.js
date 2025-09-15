import React, { useState, useEffect, useRef, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Carousel.css";

const cards = [
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/neddeee9mqnycslnigdg.jpg", title: "Modern Villa" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg", title: "City Apartment" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg", title: "Cozy Cottage" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/neddeee9mqnycslnigdg.jpg", title: "Luxury Condo" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg", title: "Urban Flat" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg", title: "Beach House" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/neddeee9mqnycslnigdg.jpg", title: "Modern Villa" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg", title: "Urban Flat" },
  { img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg", title: "City Apartment" },
];



const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const timerRef = useRef(null);

  // update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 710) {
        setCardsPerSlide(1);
      } else if (window.innerWidth <= 1100) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // regroup cards dynamically
  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += cardsPerSlide) {
    chunkedCards.push(cards.slice(i, i + cardsPerSlide));
  }
  const totalSlides = chunkedCards.length;

  // helper to start/reset interval
  const startAutoSlide = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 10000);
  }, [totalSlides]);

  // start timer on mount + when totalSlides changes
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, [startAutoSlide]);

  // manual controls with reset
  const moveLeft = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoSlide(); // reset timer
  }, [totalSlides, startAutoSlide]);

  const moveRight = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
    startAutoSlide(); // reset timer
  }, [totalSlides, startAutoSlide]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <div className="tp_carousel-container" data-aos="fade-up">
      <h2 className="tp_carousel-title">
        ON THE MOVE WITH <span className="handle">Luxury Abode</span>
      </h2>

      <button className="tp_nav-btn left" onClick={moveLeft}>
        &#8592;
      </button>
      <button className="tp_nav-btn right" onClick={moveRight}>
        &#8594;
      </button>

      <div className="tp_carousel-wrapper">
        <div
          className="type_of_prop_gll"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {chunkedCards.map((group, index) => (
            <div
              key={index}
              className="tp_carousel-slide"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="tp_card-grid">
                {group.map((card, i) => (
                  <div
                    className="tp_card"
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    data-aos-duration="800"
                  >
                    <img src={card.img} alt={card.title} />
                    {/* <p>{card.title}</p> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
