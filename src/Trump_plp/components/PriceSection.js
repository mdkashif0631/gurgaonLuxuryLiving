import React, { useState } from "react";

const priceData = [
  { title: "3 BHK", area: "3600 Sq.Ft. (Super)", price: "₹12 Cr*" },
  { title: "4 BHK", area: "4600 Sq.Ft. (Super)", price: "₹16 Cr*" },
  { title: "4 BHK Double Height", area: "6200 Sq.Ft. (Super)", price: "₹21 Cr*" }
];

export default function PriceSection() {
    const [selectedState, setSelectedState] = useState('');
  
  return (
    <section className="prices" id="price">
      <h2>Price</h2>
      <div className="price-grid">
        {priceData.map((item, i) => (
          <div className="price-card" key={i}>
            <h3>{item.title}</h3>
            <p className="area">{item.area}</p>
            <h4 className="amount">From {item.price}</h4>
            <button className="btn">
              <a className={`enquire_btn ${selectedState === 'Enquire' ? 'active' : ''}`}
            onClick={() => setSelectedState('Enquire')}
            href="#enquire_b">Enquire Now</a>
              </button>
          </div>
        ))}
      </div>
    </section>
  );
}
