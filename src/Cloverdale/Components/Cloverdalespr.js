import React, { useEffect, useRef, useState } from "react";
import "./Cloverdalespr.css";

const Cloverdalespr = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // reset so animation plays again
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current; // ✅ store current ref

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // ✅ cleanup uses stored ref
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`clover_spr ${isVisible ? "animate" : ""}`}
    >
      <div className="clover_spr-image">
        <img
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098077/ccgwg29cuszr1gfgntri.webp"
          alt="Cloverdale lifestyle"
        />
      </div>

      <div className="clover_spr-text">
        <h2>
          LIVE THE ICONIC LIFE <br /> THAT TAKES LUXURY <br /> EVEN FURTHER
        </h2>
        <p>
          Cloverdale SPR is an ultra-luxury residential enclave crafted for those who
          seek iconic living in the heart of Gurugram. It offers a complete ecosystem
          of residences, retail, and lifestyle. With premium specifications and
          world-class design, Cloverdale SPR is a landmark where convenience and
          luxury converge.
        </p>
      </div>
    </section>
  );
};

export default Cloverdalespr;
