import React from "react";
import { FaConciergeBell, FaSwimmer, FaWifi } from "react-icons/fa";
import { GiBiceps, GiCctvCamera, GiHomeGarage, GiVikingLonghouse } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const amenities = [
  { icon: <MdOutlineSecurity />, label: "24*7 SECURITY" },
  { icon: <FaWifi />, label: "WIFI" },
  { icon: <FaSwimmer />, label: "SWIMMING" },
  { icon: <GiHomeGarage />, label: "PARKING" },
  { icon: <FaConciergeBell />, label: "BANQUET HALL" },
  { icon: <GiCctvCamera />, label: "CCTV" },
  { icon: <GiVikingLonghouse />, label: "CLUB HOUSE" },
  { icon: <GiBiceps />, label: "GYM" },
];

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="trump_amenities_container">
        <h3 className="trump_amenities_subtitle">WORLD-CLASS</h3>
        <h1 className="trump_amenities_title">AMENITIES</h1>

        <div className="trump_amenities_grid">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="trump_amenities_card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="trump_amenities_icon">{item.icon}</div>
              <p className="trump_amenities_label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
