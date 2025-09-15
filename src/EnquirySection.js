import React, { useState, useEffect } from "react";
import "./EnquirySection.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ConnectForm from "./About/ConnectForm";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const EnquirySection = () => {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone_number: "",
  });

  const [consentGiven, setConsentGiven] = useState(true); // Consent checkbox
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // backend form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentGiven) {
      alert("Please provide your consent before submitting.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/enquiries`, {
        ...formData,
        consent: consentGiven, // send to backend
      });
      alert(res.data.msg || "Message sent successfully!");
      setFormData({ fullName: "", email: "", phone_number: "" });
      setConsentGiven(false); // reset checkbox
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "918744966999";
    const message = "Hello, I’d like to enquire about some property.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Call click handler
  const handleCallClick = () => {
    const phoneNumber = "8744966999";
    window.location.href = `tel:${phoneNumber}`;
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>

    <div
      className={`bottom_enquiry-wrapper ${isVisible ? "visible" : "hidden"}`}
      >
      {/* Desktop / Tablet Version */}
      <form className="bottom_enquiry-form desktop-only" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Name*"
          value={formData.fullName}
          onChange={handleChange}
          required
          />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          />
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number*"
          value={formData.phone_number}
          onChange={handleChange}
          required
          />

        {/* Consent Checkbox */}
        <label className="consent-checkbox">
          <input
            type="checkbox"
            checked={consentGiven}
            onChange={() => setConsentGiven(!consentGiven)}
            />
          I authorize <strong>Gurgaon Luxury Living</strong> to contact me via Call,
          SMS, Email or WhatsApp about its products and offers. This consent overrides
          DNC/NDNC.
        </label>

        <button type="submit" disabled={loading || !consentGiven}>
          {loading ? <span className="loader"></span> : "Submit"}
        </button>
      </form>

      {/* Mobile Version */}
      <div className="bottom_contact-options mobile-only">
        <div className="bottom_contact-item">
          <FaEnvelope className="bottom_contact-icon" />
          <span onClick={() => setShowForm(true)}>ENQUIRE</span>
        </div>

        <div className="bottom_contact-center">
          <div className="bottom_call-circle" onClick={handleCallClick}>
            <FaPhoneAlt />
          </div>
        </div>

        <div className="bottom_contact-item" onClick={handleWhatsAppClick}>
          <FaWhatsapp className="bottom_contact-icon whatsapp" />
          <span>ASK ME</span>
        </div>
      </div>

      {/* Popup Form (mobile enquire) */}
    </div>
      <ConnectForm show={showForm} onClose={() => setShowForm(false)} />
            </section>
  );
};

export default EnquirySection;
