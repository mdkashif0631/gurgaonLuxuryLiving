import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamsDetail = [
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755875360/dkqfk0fkw0h2t9tlvkyi.jpg",
    title: "DISCOVER YOUR ULTIMATE POTENTIAL",
    description: "We believe in ownership and partnership. You will be supported and mentored by the most experienced minds in the industry.",
    meetbtn: "Meet OUR LEADERSHIP",
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755875360/tvnlzljhqmdsbxgxoixz.jpg",
    title: "Building and Scaling Your Brand",
    description: "",
    meetbtn: "",
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755875360/nwhz2lfwfxpqjmionlzs.jpg",
    title: "Evolving Your Brand",
    description: "",
    meetbtn: "",
  },
  {
    img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755875360/iqncely4ynylz3pwtv13.jpg",
    title: "Coaching and Development",
    description: "",
    meetbtn: "",
  },

];


export const AgentPotential = () => {

     const [index, setIndex] = useState(0);
      const slideIntervalRef = useRef(60000);
    
      // Start or restart the auto-slide timer
      const startAutoSlide = () => {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = setInterval(() => {
          setIndex((prev) => (prev + 1) % teamsDetail.length);
        }, 60000);
      };
    
      // Start auto slide on mount
      useEffect(() => {
        startAutoSlide();
        return () => clearInterval(slideIntervalRef.current);
      }, []);
    
      const goToPrev = () => {
        setIndex((prev) => (prev - 1 + teamsDetail.length) % teamsDetail.length);
        startAutoSlide(); // reset timer on click
      };
    
      const goToNext = () => {
        setIndex((prev) => (prev + 1) % teamsDetail.length);
        startAutoSlide(); // reset timer on click
      };
        const property = teamsDetail[index];

  return (
    <section className="slider-container" >
      <img
        key={property.img}
        className="background-video"
        src={property.img}
        alt='teams_image'
      />
      <div className="overlay" style={{ justifyContent:"center"}}>
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
            style={{fontSize:"clamp(14px, 4vw, 36px)"}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {property.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {property.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {property.meetbtn}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="controls">
          <button onClick={goToPrev}>&#8592;</button>
          <button onClick={goToNext}>&#8594;</button>
        </div>
      </div>
    </section>
  )
}
