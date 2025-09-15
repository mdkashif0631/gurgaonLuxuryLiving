import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PropertySlider.css";

const properties = [
  {
    project: "M3M ALTITUDE",
    title: "GET READY TO LIVE ABOVE THE CLOUDS",
    location: "SECTOR 65",
    bedrooms: "4 BHK + LAUNGE + STUDY",
    price: "INR 9.28 CR* ONWARD",
    video: "https://res.cloudinary.com/dif213nbi/video/upload/v1755458650/WhatsApp_Video_2025-08-14_at_12.06.46_12ce1d65_r2b3pa.mp4",
  },
  {
    project: "GOLF HILLS",
    title: "EXPERIENCE GOLF LIVING AT IT's FINEST",
    location: "SECTOR 79",
    bedrooms: "2.5 BHK | 3.5 BHK | 3.5 BHK + Servent Room | 4 BHK",
    price: "INR 1.99 CR* ONWARD",
    video: "https://res.cloudinary.com/daa1hgr9j/video/upload/v1755505890/sozkmfslb7bmzesqisjw.mp4",
  },
  {
    project: "GODREJ MIRAYA",
    title: "A SYMPHONY OF LUXURY LIVING.",
    location: "SECTOR 43",
    bedrooms: "3 BHK | 4 BHK",
    price: "INR 9.49 CR* ONWARD",
    video: "https://res.cloudinary.com/daa1hgr9j/video/upload/v1755509959/nzm9apgbrw5mdjygemjg.mp4",
  },
  {
    project: "GODREJ ASTRA",
    title: "LUXURY THAT SPEAKS, LIFESTYLE THAT SHINES",
    location: "SECTOR 54",
    bedrooms: "3 BHK | 4 BHK",
    price: "INR 10.34 CR ONWARD",
    video: "https://res.cloudinary.com/daa1hgr9j/video/upload/v1755505866/mfmg81kl5wehlrqd77ty.mp4",
  },
  {
    project: "EMAAR AMARIS",
    title: "A MORDEN ICON OF GURGAON",
    location: "SECTOR 62,",
    bedrooms: "2 BHK | 3 BHK | 4 BHK",
    price: "INR 3.25 CR ONWARD",
    video: "https://res.cloudinary.com/daa1hgr9j/video/upload/v1755506008/cbfmf7o105vm7nygjmag.mp4",
  },
  {
    project: "ELAN THE PRESIDENTIAL",
    title: "THE NEW LANDMARK OF MORDEN LIVING",
    location: "SECTOR 106",
    bedrooms: "3 BHK | 4 BHK | 5BHK",
    price: "INR 4.44 CR* ONWARD",
    video: "https://res.cloudinary.com/dif213nbi/video/upload/v1754910659/banner_lfl0iy.webm",
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {property.project}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {property.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {property.location} | {property.bedrooms} | {property.price}
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
