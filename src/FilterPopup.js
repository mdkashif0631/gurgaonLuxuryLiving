import { useNavigate } from "react-router-dom";
import "./FilterPopup.css";
import { useState } from "react";

const FilterPopup = () => {
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(10000000); // 1 Cr
  const [maxPrice, setMaxPrice] = useState(200000000); // 20 Cr

  const formatPrice = (value) => {
    return (value / 10000000).toFixed(1) + " Cr";
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 5000000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 5000000);
    setMaxPrice(value);
  };

  const sliderStyle = {
    background: `linear-gradient(to right, 
      #d3d3d3 ${(minPrice - 10000000) / 190000000 * 100}%, 
      #100b28c1 ${(minPrice - 10000000) / 190000000 * 100}%, 
      #100b28c1 ${(maxPrice - 10000000) / 190000000 * 100}%, 
      #d3d3d3 ${(maxPrice - 10000000) / 190000000 * 100}%)`
  };

  return (
    <div>
      <div className="filter-overlay">
        <div className="filter-container">
          <div className="filter-header">
            <button className="filter_back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <h2>Filter Properties</h2>
          </div>

          <div className="filter-grid">
            <div className="filter-field">
              <label>Project Type</label>
              <select>
                <option value="">Select Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="filter-field">
              <label>Location</label>
              <input type="text" placeholder="Enter location" />
            </div>

            <div className="filter-field">
              <label>Developer</label>
              <input type="text" placeholder="Enter developer" />
            </div>

            <div className="filter-field">
              <label>Status</label>
              <select>
                <option value="">Select Status</option>
                <option value="ready">Ready to Move</option>
                <option value="under">Under Construction</option>
                <option value="new">New Launch</option>
              </select>
            </div>

            <div className="filter-field">
              <label>BHK Configuration</label>
              <select>
                <option value="">Select BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>
            </div>

            <div className="filter-field_price">
              <label>
                Price Range: {formatPrice(minPrice)} - {formatPrice(maxPrice)}
              </label>

              <div className="range-slider">
                <div className="slider-track" style={sliderStyle}></div>

                <input
                  type="range"
                  min="10000000"
                  max="200000000"
                  step="5000000"
                  value={minPrice}
                  onChange={handleMinChange}
                  
                />

                <input
                  type="range"
                  min="10000000"
                  max="200000000"
                  step="5000000"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  
                />
              </div>

              <div className="filter_price-labels">
                <span>1 Cr</span>
                <span>20 Cr</span>
              </div>
            </div>
          </div>

          <div className="filter-footer">
            <button className="filter_search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
