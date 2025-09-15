import React from "react";
import { motion } from "framer-motion";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="cloverdale-contact-container">
      <motion.div
        className="cloverdale-contact-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2>CONTACT US</h2>
        <p>
          We’re here to guide you every step of the way, whether it's a query or
          a site visit. Reach out to our sales experts and experience the next
          chapter of urban luxury. Cloverdale SPR isn’t just a residence; it’s
          your future landmark.
        </p>

        <div className="cloverdale-office">
          <h3>REGISTERED OFFICE</h3>
          <p>📞 +91 11 4928 1700</p>
          <p>
            📍 13th Floor, Dr. Gopal Das Bhawan, 28 Barakhamba Road, Connaught
            Place, New Delhi 110 001, India
          </p>
        </div>

        <div className="cloverdale-office">
          <h3>CORPORATE OFFICE</h3>
          <p>📞 +91 124 4398 011</p>
          <p>
            📍 Unit No.101, Ground Floor, Tower-A, Signature Tower South City-1,
            Gurugram, Haryana 122 001, India
          </p>
        </div>
      </motion.div>

      <motion.div
        className="cloverdale-contact-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <form className="cloverdale-contact-form">
          <input type="text" placeholder="NAME" required />
          <input type="tel" placeholder="PHONE NUMBER" required />
          <input type="email" placeholder="EMAIL" required />
          <textarea placeholder="MESSAGE"></textarea>

          <div className="cloverdale-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I ACCEPT THE PRIVACY POLICY AND TERMS OF USE
            </label>
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
