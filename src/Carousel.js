import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carousel.css';

const cards = [
  { img: '/img/img2.jpg', title: 'Modern Villa' },
  { img: '/img/img1.jpg', title: 'City Apartment' },
  { img: '/img/img3.jpg', title: 'Cozy Cottage' },
  { img: '/img/img1.jpg', title: 'Luxury Condo' },
  { img: '/img/img3.jpg', title: 'Urban Flat' },
  { img: '/img/img2.jpg', title: 'Beach House' },
  { img: '/img/img2.jpg', title: 'Modern Villa' },
  { img: '/img/img1.jpg', title: 'City Apartment' },
  { img: '/img/img3.jpg', title: 'Cozy Cottage' },
  { img: '/img/img1.jpg', title: 'Luxury Condo' },
  { img: '/img/img3.jpg', title: 'Urban Flat' },
  { img: '/img/img2.jpg', title: 'Beach House' },
];

const chunkSize = 3;
const chunkedCards = [];
for (let i = 0; i < cards.length; i += chunkSize) {
  chunkedCards.push(cards.slice(i, i + chunkSize));
}

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = chunkedCards.length;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const moveLeft = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const moveRight = () => {
    if (current < totalSlides - 1) setCurrent((prev) => prev + 1);
  };

  return (
    <div className="carousel-container" data-aos="fade-up">
      <h2 className="carousel-title">
        ON THE MOVE WITH <span className="handle">Gurgaon Luxury Living</span>
      </h2>

      <button className="nav-btn left" onClick={moveLeft}>
        <FaChevronLeft />
      </button>
      <button className="nav-btn right" onClick={moveRight}>
        <FaChevronRight />
      </button>

      <div className="carousel-wrapper">
        <div className="carousel-slider">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {chunkedCards.map((group, index) => (
              <div
                key={index}
                className="carousel-slide"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="card-grid">
                  {group.map((card, i) => (
                    <div
                      className="card"
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
    </div>
  );
};

export default Carousel;
