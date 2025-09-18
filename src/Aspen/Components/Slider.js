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
    text: "270° WRAP AROUND PATIO",
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
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072069/vanqg1gkyenowyjrdbyk.webp",
    text: "BUSINESS CENTRE",
    text1: "Endless recreation offerings - all right at home",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072070/snxalxzqc4o9emxrmvu5.webp",
    text: "DINNING AREA",
    text1: "Most sumptuous place to unwind and socialise",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072070/i8embti5grho2msxrwi9.webp",
    text: "ENTERANCE LOBBY",
    text1: "Ahome for higher aspiraton, pleasure and lifestyle",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072065/beimkzntodrbnnbyl3is.webp",
    text: "GYMNASIUM",
    text1: "For you, health & fitness is a way of life",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757990394/scb3hsubjfc7dqjhqka3.webp",
    text: "LIVING AREA",
    text1: "Choose the finer details of your living area",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072074/iftcsopo4cv5uz1uy5hp.webp",
    text: "PRIVATE JACUZZI",
    text1: "Make your day feel more rejuvenating",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072075/hn0yl2gnthlbhyfg1qgb.webp",
    text: "SWIMMING POOL",
    text1: "Find infinite choices to spend your days bissfully",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758072075/ebrx1lulbheeb90b0cre.webp",
    text: "AURORA CLUBHOUSE",
    text1: "Varied facilities, unmatched magnifience",
  },
];

// Dataset 3 (XYZ)
const xyzSlides = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133501/h9wndug1gwjzkkozu5nj.webp",
    text: "STATE OF THE-ART CLUBHOUSE",
    text1: "Designed to satiate different tastes and meet everyone's needs",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133501/pvdmhk5ylgugrgmx9fmq.webp",
    text: "MASTER BEDROOM",
    text1: "Experience the comforts of life in a grand way",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133501/rpqilk7xaaierxk02qyv.webp",
    text: "MULTI-CUISINE RESTAURANT",
    text1: "Dining out with friend and family is now easier than ever",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133501/gkueaw7j9huogc4zyx1h.webp",
    text: "ENTRANCE",
    text1: "The gateway to Bliss",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133502/gxnqepxi354p7bymdbus.webp",
    text: "GRAND ENTERANCE LOBBY",
    text1: "Luxury low-rise floors for happy and wholesome living",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133502/f7gxrkci1ocptkxvadn2.webp",
    text: "GYMNASIUM",
    text1: "A gymnasium with top-of-the-line equipment is always ready and waiting for you",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133502/eciap9jccjgzumcx2nto.webp",
    text: "A FULLY LOADED MODULAR KITCHEN",
    text1: "Elevate your culinary experience with our state-of-the-art modular kitchens",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133502/ibxlcxccdf5ds8pzhdrl.webp",
    text: "LUSH GREEN BELTS",
    text1: "Dwell in the hues of nature and serentiy",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133508/btlfvz4c2wgzkxx4eqsj.webp",
    text: "SWIMMING POOL",
    text1: "aAleisurely swim is all you need to rejuvenate your body, mind, and soul after a tiring day",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758133508/l91amblyyy2anwx3ruxh.webp",
    text: "INDOOR BADMINTON COURT",
    text1: "Unleash your thounder at indoor badminton court which enables years-round active living",
  },
];

const westin = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758154696/q3bw1n35bvpmx3fchtav.jpg",
    text: "MAJESTIC TOWERS",
    text1: "8.4 Hectares of sustainable living and 9,290 Sq. M. of world-class clubhouses",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758155145/cb5vkygzlcdx1qwninpk.webp",
    text: "LUXURY LIVING",
    text1: "Experience modern architecture and spacious interiors",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758155022/mxwa1awzfw1mmshcf5ir.webp",
    text: "GREEN SPACES",
    text1: "Beautiful landscaped gardens and open areas",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758155070/ntlzhlqti5ujelvhecea.webp",
    text: "WORLD-CLASS AMENITIES",
    text1: "Clubhouse, swimming pool, gym & more",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758154901/kqb8tykgn5wsuhrufcm7.webp",
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
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758155196/ez5bmcz5ru2upyoqlo9x.webp",
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
      case "blissville":
        return xyzSlides;
      case "westin":
        return westin;
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
    startAutoSlide(); 
  };

  if (slides.length === 0) {
    return <p>No gallery available for this project.</p>;
  }

  return (
    <div id="gallery" className="aspen-slider-container">
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
              <div className="aspen-slide-text">
                <h3>{slide.text}</h3>
                <p>{slide.text1}</p>
              </div>
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
