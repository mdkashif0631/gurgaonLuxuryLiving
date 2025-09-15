import React from "react";
import './CloverFloorPlan.css';
import { FaArrowRight } from "react-icons/fa";


const plans = [
  {
    id: 1,
    title: "3 BHK",
    size: "3100 Sq.Ft.",

  },
  {
    id: 2,
    title: "4 BHK",
    size: "4000 Sq.Ft.",
  
  },
  {
    id: 3,
    title: "4 BHK Double Height",
    size: "5000 Sq.Ft.",
  
  },
];

export default function CloverFloorplan() {
  return (
    <section className="clover-floorplans-container" id="floor">
      <h2 className="clover-floorplans-title">Floor Plans</h2>
      <div className="clover-floorplans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="clover-floorplans-card">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754908551/house_qhfvsv.png"
              alt={plan.title}
              className="clover-floorplans-icon"
            />
            <h3 style={{color:'white'}} className="clover-floorplans-subtitle">{plan.title}</h3>
            <p style={{color:'white'}} className="clover-floorplans-size">{plan.size}</p>
            <button className="clover-floorplans-btn">
              Price Breakup <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
