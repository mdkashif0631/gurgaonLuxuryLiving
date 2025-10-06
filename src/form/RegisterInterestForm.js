import { useEffect, useState } from "react";
import axios from "axios";
import "./RegisterInterestForm.css";

const RegisterInterestForm = ({ projectName, closeForm }) => {
  const [property, setProperty] = useState(null); 
  const [formData, setFormData] = useState({
    Project_Name: "",
    fullName: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const BASE_URL = process.env.REACT_APP_API_URL;

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/enquiries`, formData);
      alert(res.data.msg || "Form submitted successfully!");

      setFormData({
        Project_Name: "",
        fullName: "",
        email: "",
        phone_number: "",
        message: "",
      });

      if (typeof closeForm === "function") closeForm();
    } catch (err) {
      console.error("Form submission failed:", err);
      alert("Failed to submit form. Please try again later.");
    }
  };

  // Fetch property matching the projectName
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${BASE_URL}/properties`);
        const data = await res.json();

        // Find the property where Link matches projectName
        const matched = data.find((item) => item.Link === projectName);

        if (matched) {
          setProperty(matched);
          setFormData((prev) => ({ ...prev, Project_Name: matched.Project_Name }));
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperty();
  }, [BASE_URL, projectName]);

  return (
    <section className="all-project-form-container">
      <div className="all-project-form-header">
        <h2>REGISTER YOUR INTEREST</h2>
      </div>

      {property && (
        <div className="all-project-form-image">
          <img src={property.Main_Image} alt={property.Project_Name} />
        </div>
      )}

      <form className="all-project-emperor_form" onSubmit={handleSubmit}>
        <div className="all-project-connect-info">
          <h3>The Luxury Abode</h3>
          <p>📞 800.Properties</p>
          <p className="all-project-connect-mail">✉️ INFO@luxuryabodellp.com</p>
        </div>

        <input
          type="text"
          name="Project_Name"
          placeholder="Project Name*"
          value={formData.Project_Name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
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
          placeholder="Mobile No*"
          value={formData.phone_number}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          required
        />

        <textarea
          name="message"
          placeholder="Write Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit <span>↗</span>
        </button>
      </form>
    </section>
  );
};

export default RegisterInterestForm;
