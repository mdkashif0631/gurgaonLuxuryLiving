import React from "react";
import "./PartnersSection.css";

// Import your logo images here
import uhaLogo from "../img/uha.png";
import wetLogo from "../img/wet.png";
import cdmLogo from "../img/cdm.png";
import swaLogo from "../img/swa.png";
import leightonLogo from "../img/leighton.png";

const PartnersSection = () => {
  const partners = [
    { img: uhaLogo, alt: "UHA" },
    { img: wetLogo, alt: "WET" },
    { img: cdmLogo, alt: "CD+M" },
    { img: swaLogo, alt: "SWA" },
    { img: leightonLogo, alt: "Leighton" },
  ];

  return (
    <section className="partners-section">
      <p className="partners-subtitle">PARTNERS & ASSOCIATES</p>
      <h2 className="partners-title">
        To Deliver the Best We Have <br />
        Onboarded Leading Names in the Industry
      </h2>

      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.img} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
