import React, { useEffect, useRef, useState } from "react";
import "./AboutStats.css";

const statsData = [
  { value: 36.4, suffix: "B", label: "IN SALES", decimals: 1 },
  { value: 87, suffix: "B", label: "IN NEW DEVELOPMENT", decimals: 0 },
  { value: 6.6, suffix: "K", label: "AGENTS IN KEY LUXURY MARKETS", decimals: 1 },
];

const AboutStats = () => {
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
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <p className="stats-subtitle">
        Our legacy is built on a proven track record of exceptional service and unmatched global reach.
      </p>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-value">
              {isVisible ? (
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Animated number component
const AnimatedNumber = ({ value, suffix, decimals }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(parseFloat(start.toFixed(decimals)));
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, decimals]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default AboutStats;
