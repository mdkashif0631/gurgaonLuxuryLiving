import React, { useRef, useState, useEffect } from "react";
import "./ContentSection.css";

const ContentSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current; // store ref value

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <div
      className={`content-section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      {/* Left Side - Image */}
      <div className="content-image">
        <img
          src="https://res.cloudinary.com/dif213nbi/image/upload/v1754910820/image1_gvupnj.jpg" // Change to your image path
          alt="Elan the Presidential"
        />
      </div>

      {/* Right Side - Text */}
      <div className="content-text">
        <h2 className="content-title">A SYMBOL OF SUPERIORITY</h2>
        <p>
          Step into a world of grandeur as you arrive at Elan the Presidential.
          The majestic entrance, adorned with exquisite landscaping, sets the
          tone for an extraordinary living experience.
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
