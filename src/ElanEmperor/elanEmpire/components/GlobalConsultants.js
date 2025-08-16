import React, { useCallback, useEffect, useRef, useState } from "react";

export const GlobalConsultants = () => {
  const consultants = [
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/qnasmjhxilrt4sdd48k4.jpg",
      name: "DHAVAL BARBHAYA",
      designation: "LANDSCAPE ARCHITECT",
      location: "TEXAS, U.S.",
    },
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/v5mkgiso6idmep3u4oi7.jpg",
      name: "DAVID DONWORTH",
      designation: "PROJECT CONTRACTOR",
      location: "SYDNEY, AUSTRALIA",
    },
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/gfw01tojnaqagmknwkgf.jpg",
      name: "TIM HUNTER",
      designation: "WATER FEATURES CONSULTANT",
      location: "CALIFORNIA, U.S.",
    },
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/vtyincgntfcehm8qp4qn.jpg",
      name: "WALEED FAKOUSA",
      designation: "LIGHTING CONSULTANT",
      location: "DUBAI, U.A.E.",
    },
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/llxa9jcpo5la9ek3n0tr.jpg",
      name: "JOHN DOE",
      designation: "DESIGN CONSULTANT",
      location: "LONDON, U.K.",
    },
    {
      img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755177521/x1kdiaisgiff2wxb114f.jpg",
      name: "JANE SMITH",
      designation: "STRUCTURAL ENGINEER",
      location: "TORONTO, CANADA",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const intervalRef = useRef(null); 
  const updateCardsPerView = () => {
    if (window.innerWidth < 600) {
      setCardsPerView(1);
    } else if (window.innerWidth < 800) {
      setCardsPerView(2);
    } else if (window.innerWidth < 1200) {
      setCardsPerView(3);
    } else {
      setCardsPerView(4);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % consultants.length);
  }, [consultants.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + consultants.length) % consultants.length);
  }, [consultants.length]);


  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 8000);
  }, [nextSlide]);


  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);


  const handleNext = () => {
    nextSlide();
    startAutoSlide();
  };

  const handlePrev = () => {
    prevSlide();
    startAutoSlide();
  };


  const getVisibleCards = () => {
    return Array.from({ length: cardsPerView }, (_, i) => {
      return consultants[(currentIndex + i) % consultants.length];
    });
  };

  return (
    <section className="global-consultants">
      <div className="consultant-heading">
        <h1 style={{color:'#b08968'}}>GLOBAL CONSULTANTS</h1>
        <p>
          For the First Time in Real Estate History, Elan Group Brings Together
          Industry-Leading Global Consultants to Create an Extraordinary
          Masterpiece in the Residential World.
        </p>
      </div>

      <div className="consultants-carousel">
        <button className="consultant-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="carousel-track">
          {getVisibleCards().map((consultant, idx) => (
            <div className="consultant-card" key={idx}>
              <div className="consultant_img-container">
                <img src={consultant.img} alt={consultant.name} />
              </div>
              <h3 style={{color:'#b08968'}}>{consultant.name}</h3>
              <p className="designation">{consultant.designation}</p>
              <p className="location">{consultant.location}</p>
            </div>
          ))}
        </div>

        <button className="consultant-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};
