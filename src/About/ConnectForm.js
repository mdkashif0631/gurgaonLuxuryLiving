import React, { useState } from "react";
import axios from "axios";
import "./ConnectForm.css";

const ConnectForm = ({ show, onClose }) => {
  const BASE_URL = process.env.REACT_APP_API_URL;


  const [formData, setFormData] = useState({
    Project_Name: "",
    fullName: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/enquiries`, formData);
      alert(res.data.msg || "Message sent successfully!");
      
      setFormData({
        Project_Name: "",
        fullName: "",
        email: "",
        phone_number: "",
        message: "",
      });
      
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={`drawer-overlay ${show ? "show" : ""}`}>
      <div className={`drawer ${show ? "open" : ""}`}>
      <div className= 'connect_drawer'>
        <div className="connect-header">
          <h2>CONNECT</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="connect-info">
          <h3>The Luxury Abode</h3>
          <p>📞 800.Properties</p>
          <p className="mail_info">✉️ INFO@luxuryabodellp.com</p>
        </div>

        <h3 className="message-title">Send a message</h3>
        <form className="connect-form" onSubmit={handleSubmit}>
          <input type="text" name="Project_Name" placeholder="Project Name*" value={formData.Project_Name} onChange={handleChange} required />
          <input type="text" name="fullName" placeholder="Full Name*" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone_number" placeholder="Mobile No*" value={formData.phone_number} onChange={handleChange} required />
          <textarea name="message" placeholder="Write Your Message*" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ConnectForm;
