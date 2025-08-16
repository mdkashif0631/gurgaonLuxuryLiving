import React from "react";
import { FaArrowRight } from "react-icons/fa";
import './FloorPlan.css';


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
    <section className="elan-floorplans-container" id="floor">
      <h2 className="elan-floorplans-title">Floor Plans</h2>
      <div className="elan-floorplans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="elan-floorplans-card">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1755377563/house_qhfvsv_sezsmb.jpg"
              alt={plan.title}
              className="elan-floorplans-icon"
            />
            <h3 className="elan-floorplans-subtitle">{plan.title}</h3>
            <p className="elan-floorplans-size">{plan.size}</p>
            <button className="elan-floorplans-btn">
              Price Breakup <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
