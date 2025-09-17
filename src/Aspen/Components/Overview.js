import React from "react";
import "./Overview.css";

const Overview = ({ leftImage, logo, heading, text }) => {
  return (
    <section id="overview" className="aspen-overview">
      <div className="aspen-overview-left">
        <img
          src={leftImage}
          alt="Overview Left"
          className="aspen-overview-img"
        />
        <p className="aspen-overview-note">Artistic Impression</p>
      </div>

      <div className="aspen-overview-right">
        <img src={logo} alt="Overview Logo" className="aspen-overview-logo" />
        <h1 className="aspen-overview-heading">{heading}</h1>
        <p className="aspen-overview-text">{text}</p>

        <div className="aspen-overview-buttons">
          <a href="/" className="aspen-btn-outline">
            DOWNLOAD BROCHURE ↓
          </a>
          <a href="/" className="aspen-btn-filled">
            KNOW MORE →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
