import React from "react";
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

export default function FloorPlan() {
  return (
    <section className="trump-floorplans-container" id="floor">
      <h2 className="trump-floorplans-title">Floor Plans</h2>
      <div className="trump-floorplans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="trump-floorplans-card">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754908551/house_qhfvsv.png"
              alt={plan.title}
              className="trump-floorplans-icon"
            />
            <h3 className="trump-floorplans-subtitle">{plan.title}</h3>
            <p className="trump-floorplans-size">{plan.size}</p>
            <button className="trump-floorplans-btn">
              Price Breakup <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
