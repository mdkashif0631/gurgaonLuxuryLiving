import React from "react";

import "./LocationAdvantages.css";
import Check from '../img/check.png';

const points = [
  "Located in Sector 106, Dwarka Expressway, Gurugram",
  "Seamlessly Connected with NH-8 & Delhi",
  "Just 15 Mins Away from IGI Airport",
  "Connects to Main Landmarks of Gurugram",
];

const LocationAdvantages = () => {
  return (
    <section className="location-section">
      <div className="location_image">
        <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1754911184/locationmap_xe4qg2.jpg" alt="Location Map" />
      </div>
      <div className="location-content">
        <p className="location_subtitle">LOCATION ADVANTAGES</p>
        <h2 className="location_main-title">
          With Elan the Presidential, luxury living now has a new address.
        </h2>
        <ul className="location-points">
          {points.map((point, index) => (
            <li key={index}>
              <img src={Check} alt="check_icon"  className="icon"/>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocationAdvantages;
