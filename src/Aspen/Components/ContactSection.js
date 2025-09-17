import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div id="location" className="aspen-contact-section">
      <h1 className="aspen-contact-title">LET'S TALK</h1>
      <div className="aspen-contact-container">
        {/* Google Map */}
        <div className="aspen-map-container">
          <iframe
            title="aspen-location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.162285548839!2d76.98188207547654!3d28.624922684312144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a9079471a5%3A0x13e75f3b97c83c38!2sWhiteland%20The%20Aspen!5e0!3m2!1sen!2sin!4v1694695400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="aspen-form-container">
          <form className="aspen-contact-form">
            <input type="text" placeholder="Name*" required />
            <input type="tel" placeholder="Mobile No*" required />
            <input type="email" placeholder="Email ID*" required />
            <select>
              <option value="">Preferred Call Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            <button type="submit">SUBMIT →</button>
          </form>
        </div>
      </div>

      {/* Footer note */}
      <p className="aspen-legal-text">
        HARERA No. 7 of 2023 Dated: 12.01.2023 | License No. 91 & 92 of 2022.
      </p>
      <div className="aspen-mortgage-note">
        Project is mortgaged with and Funded by Bajaj Housing Finance Ltd. No
        objection certificate/permission to mortgage from Bajaj Housing Finance
        Ltd will be provided for sale of flats.
      </div>
    </div>
  );
}
