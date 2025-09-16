import React, { useState } from "react";
import "./Amenities.css";

const amenities = [
  { name: "VIP LOUNGE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/qzxg36gp7iq3s4nk4ade.webp" },
  { name: "BANQUET HALL", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/b5lr9bewph1rzuzncmf2.webp" },
  { name: "SQUASH COURT", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/a1gvcfvaeo3iekbd9jw6.webp" },
  { name: "PRIVATE THEATER", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985344/gdqryh7xmkfpf6rypf4p.webp" },
  { name: "CYCLING TRACK", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/ulxjnhfhgahtbnovoa4v.webp" },
  { name: "BUSINESS CENTRE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/i6wiw9ugynplulskwypb.webp" },
];

const Amenities = () => {
  const [activeImage, setActiveImage] = useState(amenities[0].img);

  return (
    <section className="aspen_amenities-container">
      <div className="aspen_amenities-left">
        <h2 className="aspen_amenities-title">AMENITIES</h2>
        <p className="aspen_amenities-subtitle">
          For you, it presents two world-class club facilities that define
          affluence and lifestyle. Aurora; with a sunken pool it sets the stage
          for unparalleled pampering. Sol; extending its aura and charm via its
          curated services & gastronomical delight.
        </p>

        <ul className="aspen_amenities-list">
          {amenities.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveImage(item.img)}
              className="aspen_amenities-item"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <button className="aspen_amenities-explore-btn">EXPLORE MORE →</button>
      </div>

      <div className="aspen_amenities-right">
        <img
          src={activeImage}
          alt="Amenity"
          className="aspen_amenities-image"
        />
        <span className="aspen_amenities-caption">Artistic Impression</span>
      </div>
    </section>
  );
};

export default Amenities;
