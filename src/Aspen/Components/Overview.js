import React from "react";
import "./Overview.css";
import Textbtn from "../../form/TextBtn";

const Overview = ({ leftImage, logo, heading, text, form }) => {
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
          <Textbtn nameclass='aspen-btn-outline' projectName={form} btnText='DOWNLOAD BROCHURE ↓' />
          <Textbtn nameclass='aspen-btn-filled' projectName={form} btnText=' KNOW MORE →' />
        </div>
      </div>
    </section>
  );
};

export default Overview;
