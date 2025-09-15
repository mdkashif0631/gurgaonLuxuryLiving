import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="cloverdale-hero">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="cloverdale-hero-video">
        <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757097149/pv85vvuh6jxskd2bnd15.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="cloverdale-overlay">
        <div className="cloverdale-hero-content">
          <h1>BE AT THE <br /> CENTRE OF IT ALL</h1>
          <p className="cloverdale-subtitle">ULTRA LUXURIOUS RESIDENCES</p>
          <button className="cloverdale-cta-btn">3 BHK & 4 BHK</button>
        </div>

        <div className="cloverdale-rera">
          RERA REGISTRATION NO.: RC/REP/HARERA/GGM/955/687/2025/58 DATED
          10.06.2025 (WWW.HARYANARERA.GOV.IN)
        </div>
      </div>
    </section>
  );
};

export default Hero;
