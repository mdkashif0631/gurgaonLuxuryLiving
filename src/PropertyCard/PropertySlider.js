import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PropertySlider.css";

const properties = [
  {
    title: "LIVE BEAUTIFULLY IN SANDS POINT",
    location: "SANDS POINT",
    bedrooms: 6,
    bathrooms: 8,
    halfBaths: 4,
    price: "$9,100,000",
    video: "/img/video1.mp4",
  },
  {
    title: "EXQUISITE MANOR IN BEVERLY HILLS",
    location: "BEVERLY HILLS",
    bedrooms: 7,
    bathrooms: 9,
    halfBaths: 2,
    price: "$14,500,000",
    video: "/img/video2.mp4",
  },
  {
    title: "MODERN ESCAPE IN MIAMI",
    location: "MIAMI BEACH",
    bedrooms: 5,
    bathrooms: 6,
    halfBaths: 2,
    price: "$6,300,000",
    video: "/img/video3.mp4",
  },
  {
    title: "FRENCH VILLA IN MALIBU",
    location: "MALIBU",
    bedrooms: 6,
    bathrooms: 7,
    halfBaths: 3,
    price: "$11,900,000",
    video: "/img/video1.mp4",
  },
  {
    title: "URBAN LUXURY IN NYC",
    location: "NEW YORK CITY",
    bedrooms: 4,
    bathrooms: 5,
    halfBaths: 1,
    price: "$8,750,000",
    video: "/img/video2.mp4",
  },
  {
    title: "ESTATE IN NAPA VALLEY",
    location: "NAPA VALLEY",
    bedrooms: 6,
    bathrooms: 8,
    halfBaths: 2,
    price: "$10,400,000",
    video: "/img/video3.mp4",
  },
];


const PropertySlider = () => {
  const [index, setIndex] = useState(0);
  const slideIntervalRef = useRef(10000);

  // Start or restart the auto-slide timer
  const startAutoSlide = () => {
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % properties.length);
    }, 10000);
  };

  // Start auto slide on mount
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + properties.length) % properties.length);
    startAutoSlide(); // reset timer on click
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % properties.length);
    startAutoSlide(); // reset timer on click
  };

  const property = properties[index];

  return (
    <div className="slider-container">
      <video
        key={property.video}
        className="background-video"
        src={property.video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {property.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {property.location} | {property.bedrooms} BR | {property.bathrooms} BA,{" "}
              {property.halfBaths} HALF BA | {property.price}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="controls">
          <button onClick={goToPrev}>&#8592;</button>
          <button onClick={goToNext}>&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;
