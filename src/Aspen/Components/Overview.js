import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <section className="aspen-overview">
      <div className="aspen-overview-left">
        <img
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984788/foxjilqgkzzjqejsvxlk.jpg" 
          alt="The Aspen Building"
          className="aspen-overview-img"
        />
        <p className="aspen-overview-note">Artistic Impression</p>
      </div>

      <div className="aspen-overview-right">
        <img
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984787/wrumsxae9fx1oxervctw.svg" 
          alt="The Aspen Logo"
          className="aspen-overview-logo"
        />
        <h2 className="aspen-overview-subtitle">Above It All</h2>
        <h1 className="aspen-overview-heading">
          A place where one's aspirations, pleasure, and lifestyle find their perfect home!
        </h1>
        <p className="aspen-overview-text">
          For the redefined sense of living, The Aspen offers luxury 3/4 BHK residences
          and duplex penthouses, with state-of-the-art amenities for an exceptional living
          experience. Nestled in the most promising sector of Gurugram, Sector-76,
          Whiteland’s residential project offers a lifestyle that is unheard of & truly
          inspiring.
        </p>

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
