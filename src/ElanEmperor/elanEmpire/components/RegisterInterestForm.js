import { useState } from "react";
import axios from "axios";
import './ElanEmperor.css';
import './RegisterInterestForm.css'
const RegisterInterestForm = ( {closeForm } ) => {
  const [formData, setFormData] = useState({
    Project_Name: "",
    fullName: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const BASE_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

      // Close the popup after submission
      if (closeForm) closeForm();
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    }
  };

  return (
    <section className="form-container">
      <div className="form-header">
        <h2>REGISTER YOUR INTEREST</h2>
      </div>
      <div>
        <img
        src="https://res.cloudinary.com/dif213nbi/image/upload/v1754906179/trumpresidences-gurgaon-elevation_mtmf5i.jpg"
        alt="main_img"
        />
      </div>
      <form className="emperor_from" onSubmit={handleSubmit}>
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
          required
        />

        <textarea
          name="message"
          placeholder="Write Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ color: "black" }}
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit <span>↗</span>
        </button>
      </form>
    </section>
  );
};

export default RegisterInterestForm;
