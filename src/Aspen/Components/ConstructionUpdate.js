import React from "react";
import "./ConstructionUpdate.css";

export default function ConstructionUpdate() {
  return (
    <div className="aspen_construction-container">
      <h1 className="aspen_construction-title">Construction Update</h1>
      <p className="aspen_construction-subtitle">
        Building dreams, brick by brick - witness The Aspen's transformation.
      </p>

      <div className="aspen_construction-video">
        <video controls autoPlay muted loop>
          <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757991479/ljiemtwn3cjnxizdqbdr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
