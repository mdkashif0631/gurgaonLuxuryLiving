// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="./img/Gll_Logo.png" alt="Gurgaon Luxury" />
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Leadership</li>
            <li>Join as an Agent</li>
            <li>Careers</li>
            <li>Investors Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>LISTED PROJECT</h3>
          <ul>
            <li>Trump Residence, Sector 65</li>
            <li>Trump Tower Delhi NCR, Sector 79</li>
            <li>Altitude, Sector 65</li>
            <li>Golf Hills, Sector 79</li>
            <li>Antalya Floors, Sector 79</li>
            <li>M3M Mansion, Sector 113</li>
            <li>Edition, Sector 65</li>
            <li>The Experon, Sector 106</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>BRAND PORTFOLIO</h3>
          <ul>
            <li>New Development</li>
            <li>Commercial</li>
            <li>Relocation</li>
            <li>Property Management</li>
            <li>Sports & Entertainment</li>
            <li>Farm & Ranch</li>
            <li>Building Broker Specialists</li>
            <li>Title Services</li>
            <li>Master Trust & Probate</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
             © 2025 Gurgaon Luxury Living. All rights reserved.
            </div>
    </footer>
  );
};

export default Footer;
