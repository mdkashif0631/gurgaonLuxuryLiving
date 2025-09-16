import React from "react";
import "./Features.css";

const features = [
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984036/zqx2yeioajqiexqiatpq.svg", // replace with your img path
    title: "8.4 HECTARES OF",
    subtitle: "SUSTAINABLE LIVING",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984036/v3qs7zbutsrv80oyz7cc.svg",
    title: "8 MAJESTIC",
    subtitle: "TOWERS",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984036/arfw5aasnc7znerlbvuk.svg",
    title: "9,290 (APPROX) SQ. M. OF",
    subtitle: "WORLD-CLASS CLUBHOUSES",
  },
  {
    icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984036/au3v2oadhxnifgg8ll37.svg",
    title: "UNHINDERED VIEW OF THE",
    subtitle: "ARAVALLIS & CITYSCAPE",
  },
];

const Features = () => {
  return (
    <section className="aspen-features">
      {features.map((item, index) => (
        <div className="aspen-feature-card" key={index}>
          <img src={item.icon} alt={item.title} className="aspen-feature-icon" />
          <h3 className="aspen-feature-title">{item.title}</h3>
          <p className="aspen-feature-subtitle">{item.subtitle}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
