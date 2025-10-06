import React from "react";

import { FaFlag } from "react-icons/fa";
import Textbtn from "../../form/TextBtn";

export default function ProjectHighlights() {
  const highlights = [
    "Twin Towers with Interconnected Rooftop Amenities",
    "51-Storey Iconic Elevation with Grand Entrance Lobby",
    "India’s first glass-enclosed, temperature controlled, infinity edge indoor pool",
    "Signature Trump Lifestyle Concierge Services",
    "Doorman, Valet, Chef, Butler, and Nurse on Call",
    "Pet Care, Plant Care, Dry Cleaning, and Lifestyle Services",
    "Expression of Interest (EOI) at ₹50 Lakhs"
  ];

  return (
    <section className="highlights-section" id="highlight">
      <div className="highlights-text">
        <h2 className="highlights-title">
          Project Highlights
        </h2>
        <ul className="highlights-list">
          {highlights.map((item, index) => (
            <li
              key={index}
              className="highlight-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FaFlag className="highlight-icon" />
              {item}
            </li>
          ))}
        </ul>
        {/* <button className="highlights-btn"></button> */}
        <Textbtn nameclass='highlights-btn' projectName='trumptowers' btnText='Enquire Now 📑' />
      </div>

      <div className="highlights-image">
        <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1754906179/trumpresidences-gurgaon-elevation_mtmf5i.jpg" alt="Trump Towers" />
      </div>
    </section>
  );
}
