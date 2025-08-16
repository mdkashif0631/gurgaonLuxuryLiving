import React, { useState } from "react";

const RegisterInterestForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        countryCode: "+91",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted!");
    };

    return (
            <section className="form-container">
                <div className="form-header">
                    <h2>REGISTER YOUR INTEREST</h2>
                </div>

                <form onSubmit={handleSubmit}>
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

                    <div className="phone-group">
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                        >
                            <option value="+91">India (+91)</option>
                            <option value="+1">USA (+1)</option>
                            <option value="+44">UK (+44)</option>
                        </select>

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile No*"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

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
