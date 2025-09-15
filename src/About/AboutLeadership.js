import React, { useEffect, useRef, useState } from "react";
import "./AboutLeadership.css";

const AboutLeadership = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // re-trigger animation each time
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
    id="leadership"
      ref={sectionRef}
      className={`leadership-section ${isVisible ? "animate" : ""}`}
    >
      <div className="leadership-content">
        <h2 className="leadership-title">
          WE ARE GUIDED BY A LEGACY OF THOUGHT LEADERS
        </h2>
        <p className="leadership-subtitle">
          Their voices mentor and support the next generation of trailblazers
          and culture makers.
        </p>
        <button className="leadership-btn">MEET OUR LEADERSHIP</button>
      </div>

      <div className="leadership-image-container">
        <img
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1755518328/ncya260csnx3b3z4bjps.png" 
          alt="Leadership"
          className="leadership-image"
        />
        <p className="leadership-caption">
          MICHAEL S. LIEBOWITZ, PRESIDENT AND CHIEF EXECUTIVE OFFICER,
          DOUGLAS ELLIMAN INC.
        </p>
      </div>
    </section>
  );
};

export default AboutLeadership;
