import React, { useState } from "react";
// import Banner from "../img/building_banner.png"

export default function Hero() {
    const [selectedState, setSelectedState] = useState('');
  
  return (
    <section className="trump_hero" id="home">
      <img className="bg_banner"
        src="https://res.cloudinary.com/dif213nbi/image/upload/v1754997129/image_3_orfekh.png"
        alt="banner"
      />
      <img className="bg_banner_left"
        src="https://res.cloudinary.com/dif213nbi/image/upload/v1754998410/image_cqpamu.png"
        alt="banner"
      />
      <h1 className="trum-hero-title">TRUMP<sup>®</sup></h1>
      <p className="trum-hero-subtitle">Back In Gurgaon</p>

      <div className="trum-info-cards">
        <div className="trum-info-card">
          <a className={`trump-label ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">LOCATION</a>
          {/* <span className="trum-label">LOCATION</span> */}
          <span className="trum-value">SECTOR 69, GURGAON</span>
        </div>
        <div className="trum-info-card">
          <a className={`trump-label ${selectedState === 'Floor Plan' ? 'active' : ''}`}
            onClick={() => setSelectedState('Floor Plan')}
            href="#floor">CONFIGURATION</a>
          {/* <span className="trum-label">CONFIGURATION</span> */}
          <span className="trum-value">3, 4 &amp; DOUBLE-HEIGHT 4 BED RESIDENCES</span>
        </div>
        <div className="trum-info-card">
          <a className={`trump-label ${selectedState === 'Price' ? 'active' : ''}`}
            onClick={() => setSelectedState('Price')}
            href="#price">Price</a>
          {/* <span className="trum-label">PRICE STARTING AT</span> */}
          <span className="trum-value">₹ 7.99 Cr*</span>
        </div>
      </div>

      <button className="trum-site-btn">
        <a className={`trum-label_e ${selectedState === 'Enquire' ? 'active' : ''}`}
            onClick={() => setSelectedState('Enquire')}
            href="#enquire">Book Free Site Visit ↗</a>
            </button>
    </section>

  );
}
