import React, { useRef, useEffect, useState } from "react";
import "./ProjectConfiguration.css";
import Textbtn from "../../form/TextBtn";


const ProjectConfiguration = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

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
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const images = [
    "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755501920/rymttyb2inqnhdtcvpup.jpg",
    "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755501920/rymttyb2inqnhdtcvpup.jpg",
    "https://res.cloudinary.com/daa1hgr9j/image/upload/v1755501920/rymttyb2inqnhdtcvpup.jpg",
  ];

  return (
    <section ref={sectionRef} className="project-section">
      <h2 className="project-title">Project Configuration</h2>
      <div className={`project-grid ${isVisible ? "animate" : ""}`}>
        {images.map((img, index) => (
          <div key={index} className="project-card">
            <div className="floorplan_blur">
            <img src={img} alt={`Floor ${index + 1}`} />
            
            </div>
          </div>
        ))}
      </div>
      <Textbtn nameclass='view-btn' projectName='m3maltitude' btnText='Enquire Now →' />
    </section>
  );
};

export default ProjectConfiguration;
