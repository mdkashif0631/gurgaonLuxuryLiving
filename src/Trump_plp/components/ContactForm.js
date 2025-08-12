import React, { useState, useEffect } from "react";

const statsData = [
  { value: 35, suffix: "+", label: "LOCATIONS" },
  { value: 100, suffix: "K+", label: "PATRONS" },
  { value: 2, suffix: "K+", label: "AWARDS" },
  { value: 1, prefix: "#", label: "REAL ESTATE" },
];

export default function ContactForm() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const increment = Math.ceil(end / 50); // speed
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, 40);
    });
  }, []); // ✅ safe now, statsData is static

  return (

    <section className="trum-container" id="enquire">
      <h1 className="trum-title">THE WORLD OF TRUMP®</h1>

      <div className="trum-form-section">
        <div className="trum-form-card">
          <h2 className="trum-enquire">Enquire Now</h2>
          <input className="trum-input" placeholder="NAME" />
          <input className="trum-input" placeholder="EMAIL ID" />
          <input className="trum-input" placeholder="CONTACT NO." />
          <label className="trum-checkbox-label">
            <input type="checkbox" className="trum-checkbox" />
            I authorize company representatives to Call, SMS, Email, or WhatsApp me about its products and offers.
          </label>
          <button className="trum-button">SUBMIT NOW</button>
        </div>

        <div className="trum_video_box">
          <video autoPlay muted loop playsInline className="trump_video">
          <source src="https://res.cloudinary.com/dif213nbi/video/upload/v1754908374/Trump_video_jqndud.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>

      <div className="trum-stats">
        {statsData.map((stat, index) => (
          <div key={index} className="trum-stat-item">
            <span className="trum-number">
              {stat.prefix || ""}
              {counts[index]}
              {stat.suffix || ""}
            </span>
            <span className="trum-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
