import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ API Base URL from env
  const BASE_URL = process.env.REACT_APP_API_URL;

  // ✅ Form State
  const [formData, setFormData] = useState({
    Project_Name: "",
    fullName: "",
    email: "",
    phone_number: "",
    message: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Submit (send to backend)
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
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  // ✅ Intersection Observer for animation
  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1500);
        }
      },
      { threshold: 0.3 }
    );
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about_contact-section ${isVisible ? "animate" : ""}`}
    >
      <h2 className="about_form-title">MAKE YOUR NEXT MOVE</h2>
      <p className="about_form-subtitle">
        800.Properties •{" "}
        <a href="mailto:global@elliman.com">www.luxuryabode.in</a>
      </p>

      <form className="about_form" onSubmit={handleSubmit}>
        <div className="about_form-row">
          <input
            type="text"
            name="Project_Name"
            value={formData.Project_Name}
            onChange={handleChange}
            placeholder="Project Name"
            required
          />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="about_form-row">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone (optional)"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (optional)"
          rows="3"
        ></textarea>

        <button type="submit" className="about_submit-btn">
          CONNECT NOW
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
