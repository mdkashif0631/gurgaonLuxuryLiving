import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDescription() {
  return (
    <section className="project-description-section" id="description">
      <div className="project-description-text">
        <h2 className="project-description-title">
          Project <br /> description
        </h2>
        <p className="project-description-paragraph">
          For over three decades, The Trump Organization has reshaped the
          landscape of luxury, creating timeless masterpieces in the world's
          most coveted addresses. Each project is a sublime fusion of visionary
          design and impeccable craftsmanship. With an unwavering dedication to
          perfection, Trump properties offer a rarefied experience. An exclusive
          sanctuary where elegance, innovation and meticulous attention to
          detail converge for those who demand nothing less than the
          extraordinary.
        </p>
        <p className="project-description-code">
          (RC/REP/HARERA/GGM/925/657/2025/28)
        </p>

        <button className="project-description-btn">
          Book Free Site Visit <FaExternalLinkAlt />
        </button>
      </div>

      <div className="project-description-map" id="location">
        <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1754999993/right_map.e2c9d682e1dc677f2786_tj7s1w.png" alt="Map" />
      </div>
    </section>
  );
}
