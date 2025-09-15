import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { FaAnglesLeft } from "react-icons/fa6";

const locationData = {
  'MG Road': ["Sector 24", "Sector 25", "Sector 25A", "Sector 26", "Sector 28"],
  'Golf Course Road': ["Sector 26", "Sector 27", "Sector 28", "Sector 42", "Sector 43", "Sector 53", "Sector 54", "Sector 55", "Sector 56"],
  'Golf Course Road Extn': ["Sector 49", "Sector 50", "Sector 56", "Sector 57", "Sector 58"],
  'Sohna Road': ["Sector 32", "Sector 33", "Sector 38", "Sector 47", "Sector 48"],
  'Southern Peripheral Road': ["Sector 48", "Sector 69", "Sector 70", "Sector 70A"],
  'New Gurgaon': ["Sector 81", "Sector 81A", "Sector 82", "Sector 82A", "Sector 83"],
  'Dwarka Expressway': ["Sector 36", "Sector 37A", "Sector 37B", "Sector 37C", "Sector 37D"],
  'NH-48': ["Sector 10", "Sector 10A", "Sector 11", "Sector 11A"],
  'Manesar': ["Sector M1", "Sector M1-A", "Sector M1-B"],
};

const locationImages = {
  'MG Road': "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/neddeee9mqnycslnigdg.jpg",
  'Golf Course Road': 'https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg',
  'Golf Course Road Extn': 'https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg',
  'Sohna Road': 'https://example.com/location-image.jpg',
  'Southern Peripheral Road': 'https://example.com/location-image.jpg',
  'New Gurgaon': 'https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg',
  'Dwarka Expressway': 'https://example.com/location-image.jpg',
  'NH-48': 'https://example.com/location-image.jpg',
  'Manesar': 'https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg',

};

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(Object.keys(locationData)[0]); // default first state
  const [view, setView] = useState("states"); // "states" or "cities"
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => setDropdownVisible(false), 400);
      setView("states");
    } else {
      setDropdownVisible(true);
      setTimeout(() => setMenuOpen(true), 10);
    }
  };

  return (
    <div className="hero-section">
      <a href='/' className={`logo_position ${isFixed ? 'fixed' : ''}`}>
        <img className='logo_box'
          src="/LuxuryAbode_gold.png"
          alt='gll_logo'
          fetchPriority="high"
          decoding="async"
        />
      </a>

      <video autoPlay muted loop playsInline className="hero_video">
        <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757460974/video3_u7mvpg.mp4" type="video/mp4" />
      </video>

      <div className="hero_bg">
        <div className={`hero-content ${menuOpen ? 'move-up' : ''}`}>
          {!dropdownVisible && (
            <div className="fade-content">
              <h1 className='heading_'>WHERE DO YOU WANT TO GO?</h1>
              <p>We are leaders in luxury properties.</p>
            </div>
          )}

          <button
            onClick={handleToggleMenu}
            className={`search-btn ${menuOpen ? 'move-up' : ''}`}
          >
            START YOUR SEARCH {menuOpen ? '▲' : '▼'}
          </button>

          {dropdownVisible && (
            <div className={`search-dropdown ${menuOpen ? 'open' : 'closed'}`}>
              {view === "states" && (
                <div className="states-column">
                  <h2 className='states_heading'>LOCATION</h2>
                  {Object.keys(locationData).map((state) => (
                    <div
                      key={state}
                      className="state"
                      onClick={() => {
                        setSelectedState(state);
                        setView("cities");
                      }}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}

              {view === "cities" && (
                <div className="cities-column">
                  <div className='state_type_heading'>

                    <button
                      className="state_back-btn"
                      onClick={() => setView("states")}
                    >
                      <FaAnglesLeft />
                    </button>
                    <h2 className="state-heading">{selectedState.length >24 ? selectedState.substring(0, 24) + "..." : selectedState}</h2>
                  </div>

                  {/* State name at the top */}
                  
                  {locationData[selectedState].map((city) => (
                    <div key={city} className="city">
                      {city}
                    </div>
                  ))}
                  </div>
              )}


              <div className="location-image">
                <img
                  src={locationImages[selectedState]}
                  alt={`${selectedState} preview`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
