import React, { useEffect, useRef, useState } from "react";

import "./ConceptSection.css";
import Residences from '../img/residence.png';
import Club from '../img/club.png';
import Arrival from '../img/arrival.png';
import Recreation from '../img/recreational.png';
import Nature from '../img/nature.png';
import Amenities from '../img/amenities.png';

const features = [
  {
    icon: Residences,
    title: "Residences",
    description:
      "With a commanding presence on Dwarka Expressway, these residences beckon you to experience unparalleled luxury and sophistication.",
  },
  {
    icon: Club,
    title: "Club House",
    description:
      "Unveil a new definition of luxury in the Clubhouse, where extravagant amenities blend seamlessly with sophisticated style.",
  },
  {
    icon: Amenities,
    title: "Amenities",
    description:
      "Watch luxury get a new definition through never seen before amenities, exclusive spaces, ideas and imaginations.",
  },
  {
    icon: Arrival,
    title: "Magnificent Arrival",
    description:
      "As you enter the extravagant arrival, the breathtaking nature and water elements captivate your senses, enveloping you in tranquil serenity.",
  },
  {
    icon: Nature,
    title: "Pristine Natural Elements",
    description:
      "Beautifully landscaped green spaces invite you to unwind and reconnect, providing you endless moments of quiet reflection in the lap of nature.",
  },
  {
    icon: Recreation,
    title: "Recreation & Wellness",
    description:
      "Features exclusive open spaces, perfect especially for kids and senior citizens, and a state-of-the-art swimming pool for relaxation and rejuvenation.",
  },
];

const ConceptSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`concept-section ${isVisible ? "visible" : ""}`}
      id="description"
      ref={sectionRef}
    >
      <p className="subtitle">THE CONCEPT BEHIND IT</p>
      <h2 className="main-title">
        Elan the Presidential will be one of the most ambitious and grandest
        projects in the history of residential concepts.
      </h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div
            className="feature-card"
            key={index}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* <div className="feature-icon">{item.icon}</div> */}
            <img className="feature-icon" src={item.icon} alt=""/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConceptSection;
