import React, { useState } from "react";
import "./Amenities.css";

// Dataset 1 (Aspen)
const aspenAmenities = [
  { name: "VIP LOUNGE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/qzxg36gp7iq3s4nk4ade.webp" },
  { name: "BANQUET HALL", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/b5lr9bewph1rzuzncmf2.webp" },
  { name: "SQUASH COURT", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/a1gvcfvaeo3iekbd9jw6.webp" },
  { name: "PRIVATE THEATER", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985344/gdqryh7xmkfpf6rypf4p.webp" },
  { name: "CYCLING TRACK", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/ulxjnhfhgahtbnovoa4v.webp" },
  { name: "BUSINESS CENTRE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757985345/i6wiw9ugynplulskwypb.webp" },
];

// Dataset 2 (Iconic)
const iconicAmenities = [
  { name: "VIP LOUNGE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071443/luuysjmsuf7ekmllxw99.webp" },
  { name: "ZEN GARDEN", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071444/midpf7kht702waomovyp.webp" },
  { name: "PRIVATE JACUZZI", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071443/x38uzbnns5huws7naktn.webp" },
  { name: "SPA & SAUNA", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071449/j8iis2tv4qle7qzp8ybl.webp" },
  { name: "STARGAZING DECK", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071444/fjhz0ortkltdvqyzx8ev.webp" },
  { name: "POOL SIDE CAFE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758071443/l5bdbvjlpbgzlxruoxxv.webp" },
];

// Dataset 3 (XYZ)
const xyzAmenities = [
  { name: "ROOFTOP CAFE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757986101/cafe.webp" },
  { name: "LIBRARY", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757986101/library.webp" },
  { name: "MEDITATION ZONE", img: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757986101/meditation.webp" },
];

const Amenities = ({ project }) => {
  // Decide which dataset to use
  const getAmenitiesByProject = () => {
    switch (project?.toLowerCase()) {
      case "aspen":
        return aspenAmenities;
      case "iconic":
        return iconicAmenities;
      case "xyz":
        return xyzAmenities;
      default:
        return [];
    }
  };

  const amenities = getAmenitiesByProject();
  const [activeImage, setActiveImage] = useState(
    amenities.length > 0 ? amenities[0].img : ""
  );

  if (amenities.length === 0) {
    return <p>No amenities available for this project.</p>;
  }

  return (
    <section className="aspen_amenities-container">
      <div className="aspen_amenities-left">
        <h2 className="aspen_amenities-title">AMENITIES</h2>
        <p className="aspen_amenities-subtitle">
          Each project brings you world-class amenities designed for comfort,
          luxury, and lifestyle.
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

        <button className="aspen_amenities-explore-btn">
          EXPLORE MORE →
        </button>
      </div>

      <div className="aspen_amenities-right">
        <img
          src={activeImage}
          alt="Amenity"
          className="aspen_amenities-image"
        />
        <span className="aspen_amenities-caption">
          Artistic Impression
        </span>
      </div>
    </section>
  );
};

export default Amenities;
