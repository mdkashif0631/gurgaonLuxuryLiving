import React from 'react';
import './Certificate.css'; // Import the styles

const Certificate = () => {
  return (
    <div className="certificate">
      <div className="header">
        <img src="./img/TrumpLogo.jpg" alt="Badge" className="badge_certificate" />
        <div className="date-time">
          <p>Registration Date: 01/01/2000</p>
          <p>Registration Time: 12 : 00</p>
        </div>
      </div>

      <h1 className="main-title">CERTIFICATE</h1>
      <h2 className="subtitle">STAR REGISTRATION</h2>

      <div className="divider"></div>

      <p className="intro">THIS CERTIFICATE IS PROUDLY CERTIFY THAT</p>
      <h3 className="name">JULIANA SILVA</h3>

      <div className="gold-line"></div>

      <p className="subtext">HAS OFFICIALLY REGISTERED A STAR IN THE SKY.</p>
      <p className="wish">May Your Star Shine Forever Among The Cosmos.</p>

      <div className="details">
        <div>
          <p><strong>Official Star Name:</strong></p>
          <p><strong>Custom Star Name:</strong></p>
        </div>
        <div>
            <img src="./img/TrumpLogo.jpg" alt="Badge" className="badge_certificate" />
        </div>
        <div>
          <p><strong>Issued By:</strong> Starry Delights</p>
          <p><strong>Certificate ID:</strong> xxxx xxxx xxxx</p>
        </div>
      </div>

      <div className="footer">
        <p><strong>Website:</strong> https://starrydelights.com</p>
        <p><strong>Contact:</strong> contact@starrydelights.com</p>
      </div>
    </div>
  );
};

export default Certificate;
