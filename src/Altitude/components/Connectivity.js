import React, { useEffect, useRef, useState } from "react";
import "./Connectivity.css";

const Connectivity = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const currentRef = sectionRef.current; // ✅ copy ref into a variable

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

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) observer.unobserve(currentRef); // ✅ cleanup uses stable ref
  };
}, []);


  return (
    <section className="connectivity_container" ref={sectionRef}>
      <h2 className={`connectivity_title ${isVisible ? "animate" : ""}`}>
        Connectivity
      </h2>

      <div className={`map_wrapper ${isVisible ? "animate" : ""}`}>
        <img src='https://res.cloudinary.com/dif213nbi/image/upload/v1755428303/map-crwn_-_sPwxJwvr7LcT_cp2nr1.jpg' alt="Connectivity Map" className="map_image" />
      </div>

      <div className={`features ${isVisible ? "animate" : ""}`}>
        <div className="feature">Prestigious International Schools</div>
        <div className="feature">World Class Gourmet Dining</div>
        <div className="feature">Haute Couture Boutiques</div>
      </div>
    </section>
  );
};

export default Connectivity;
