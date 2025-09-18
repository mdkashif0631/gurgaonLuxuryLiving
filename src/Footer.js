import React, { useState, useEffect } from 'react';
import './Footer.css';
import ConnectForm from './About/ConnectForm';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Blogfooter from './Blogfooter';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/LuxuryAbode_gold.png" alt="Gurgaon Luxury" />
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><Link to="/about#about">About Us</Link></li>
            <li><Link to="/about#leadership">Leadership</Link></li>
            <li><Link to="/about#agent">Join as an Agent</Link></li>
            <li><Link to="/about#testimonial">Investors Testimonials</Link></li>
            <li onClick={() => setShowForm(true)}>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>TRENDING PROJECT</h3>
          <ul>
            <li>Trump Tower Delhi NCR, Sector 79</li>
            <li>Altitude, Sector 65</li>
            <li>Antalya Floors, Sector 79</li>
            <li>M3M Mansion, Sector 113</li>
            <li>The Experon, Sector 106</li>
          </ul>
        </div>

        <div className="footer-column blog_footer">
          <Blogfooter/>
        </div>
      </div>

      <div className='website_policy'>
        <h3>Our Website Policy...</h3>
        <h4>Disclaimer :
          <span> Luxury Abode is an independent real estate information and advisory platform. This website is not the official website of any developer. All project-related details, including but not limited to floor plans, specifications, prices, images, and availability, are shared based on publicly available sources and our understanding at the time of publishing. While we strive for accuracy, we do not claim or guarantee that the information provided is exhaustive, error-free, or up to date.
            Visitors are strongly advised to verify all project details directly with the concerned developer before making any purchase decision.</span></h4>
        <h4>Privacy Policy :
          <span> We respect your privacy and are committed to safeguarding your personal information.
            Any details shared by visitors (such as name, contact number, or email ID) through inquiry forms or communication channels are used only to respond to project-related queries.
            We do not sell, trade, or rent user data to any third party.
            By submitting your contact details on this website, you consent to receiving communication (via call, SMS, WhatsApp, or email) related to real estate projects from our team or our authorized partners.
          </span></h4>
        <h4>Terms of Use :
          <span> By using this website, you acknowledge and agree that the information is for general guidance only.
            Luxury Abode shall not be held responsible for any loss, damage, or consequences arising from reliance on the information provided herein.
            All logos, project names, and images are the property of their respective developers and are used here only for representational and informational purposes.
            Unauthorized use, reproduction, or distribution of any content from this website without prior written consent is prohibited.</span></h4>
        <div className="footer-social">
                <a href="https://www.instagram.com/kashif_743?igsh=MTZiNm9ld2psbHJkYw==" ><FaFacebookF /></a>
                <a href="https://www.instagram.com/kashif_743?igsh=MTZiNm9ld2psbHJkYw==" ><FaInstagram /></a>
                <a href="https://www.instagram.com/kashif_743?igsh=MTZiNm9ld2psbHJkYw==" ><FaYoutube /></a>
                <a href="https://www.instagram.com/kashif_743?igsh=MTZiNm9ld2psbHJkYw==" ><FaTwitter /></a>
            </div>
        <div className="footer-bottom">
          © 2025 Luxury Abode. All rights reserved.
        </div>
      </div>

      {/* Connect Form appears automatically + can be closed */}
      <ConnectForm show={showForm} onClose={() => setShowForm(false)} />
    </footer>
  );
};

export default Footer;
