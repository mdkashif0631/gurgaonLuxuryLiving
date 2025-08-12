import React, { useState } from "react";

const TrumpBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="trump_booking_container" id="enquire_b">
      <div className="trump_booking_title">
        <div className="d_line"></div>
        <h1>
          <span className="trump_booking_large">Book Your Trump</span>
          <br />
          <span className="trump_booking_large">Experience</span>
        </h1>
      </div>

      <form className="trump_booking_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          className="trump_input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL ID"
          value={formData.email}
          onChange={handleChange}
          className="trump_input"
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="CONTACT NO."
          value={formData.contact}
          onChange={handleChange}
          className="trump_input"
          required
        />
        <label className="trump_checkbox_label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="trump_checkbox"
          />
          <span>
            I authorize company representatives to Call, SMS, Email, or WhatsApp me about its
            products and offers.
          </span>
        </label>
        <button type="submit" className="trump_submit_btn">
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default TrumpBookingForm;
