import React from "react";
import "./ConstructionUpdate.css";

export default function ConstructionUpdate({project}) {
  return (
    <div className="aspen_construction-container">
      <h1 className="aspen_construction-title">Construction Update</h1>
      <p className="aspen_construction-subtitle">
        Building dreams, brick by brick - witness The Aspen's transformation.
      </p>

      <div className="aspen_construction-video">
        <video controls autoPlay muted loop>
          <source src={project} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
