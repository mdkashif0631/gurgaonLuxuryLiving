import React, { useEffect, useRef, useState } from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const currentSection = sectionRef.current; 
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  if (currentSection) {
    observer.observe(currentSection);
  }

  return () => {
    if (currentSection) {
      observer.unobserve(currentSection);
    }
  };
}, []);


  return (
    <section ref={sectionRef} className={`quote-section ${isVisible ? "animate" : ""}`}>
      <img className="gll_bg_icon"
      src="/loadericon.png"
      alt="bg_logo_icon"
      />
      <div className="quote-box">
        <p className="quote-text">
          <span className="quote-mark">“</span>
          We are number one in the luxury markets we serve because we understand
          the high-net-worth mindset and we are where our clients want to be.
          <span className="quote-mark">”</span>
        </p>
        <h4 className="author">MICHAEL S. LIEBOWITZ</h4>
        <p className="designation">
          President and Chief Executive Officer, Douglas Elliman Inc.
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
