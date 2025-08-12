import React, { useEffect, useState } from 'react';
import './HeroSection.css';
// import Header from './Header';

const locationData = {
  'MG Road': ["Sector 24", "Sector 25", "Sector 25A", "Sector 26", "Sector 28"
  ],
  'Golf Course Road': ["Sector 26", "Sector 27", "Sector 28", "Sector 42", "Sector 43", "Sector 53", "Sector 54", "Sector 55", "Sector 56"
  ],
  'Golf Course Road Extn': ["Sector 49", "Sector 50", "Sector 56", "Sector 57", "Sector 58", "Sector 59", "Sector 60", "Sector 61", "Sector 62", "Sector 63", "Sector 64", "Sector 65", "Sector 66", "Sector 67", "Sector 68", "Sector 69"
  ],
  'Sohna Road': ["Sector 32", "Sector 33", "Sector 38", "Sector 47", "Sector 48", "Sector 49", "Sector 66", "Sector 67", "Sector 67A", "Sector 68", "Sector 69"
  ],
  'Southern Peripheral Road': ["Sector 48", "Sector 69", "Sector 70", "Sector 70A", "Sector 71","Sector 72","Sector 72-A","Sector 73","Sector 74","Sector 74-A","Sector 75","Sector 75-A",

  ],
  'New Gurgaon': ["Sector 81", "Sector 81A", "Sector 82", "Sector 82A","Sector 83","Sector 84","Sector 85","Sector 86","Sector 87","Sector 88","Sector 89","Sector 90","Sector 91","Sector 92","Sector 93","Sector 94","Sector 95",

  ],
  'Dwarka Expressway': ["Sector 36", "Sector 37A", "Sector 37B", "Sector 37C","Sector 37D", "Sector 83", "Sector 84", "Sector 88", "Sector 99", "Sector 100",
"Sector 101", "Sector 102", "Sector 103", "Sector 104", "Sector 105", "Sector 106", "Sector 107", "Sector 108", "Sector 109", "Sector 110", "Sector 111", "Sector 112", "Sector 113", "Sector 114", "Sector 115",

],
  'NH-48': [
    "Sector 10", "Sector 10A", "Sector 11", "Sector 11A", "Sector 14", "Sector 15", "Ssector 16", "Sector 17", "Sector 18",
    "Sector 19", "Sector 20", "Sector 21", "Sector 22", "Sector 25", "Sector 25A", "Sector 29", "Sector 30", "Sector 31",
    "Sector 32", "Sector 33", "Sector 34", "Sector 35", "Sector 36", "Sector 37", "Sector 38", "Sector 74A", "Sector 75A",
    "Sector 76", "Sector 77", "Sector 78", "Sector 79", "Sector 80", "Sector 81", "Sector 81A", "Sector 82", "Sector 82A", "Sector 83"
  ],
  'Manesar': ["Sector M1", "Sector M1-A", "Sector M1-B", "Sector M1-C", "Sector M1-D","Sector M2","Sector M3","Sector M3-A","Sector M4","Sector M5", "Sector M6", "Sector M6-A", "Sector M7","Sector M8","Sector M9","Sector M10","Sector M11","Sector M12","Sector M13","Sector M14","Sector M15","Sector M16",
],
  'Nirvana Country': ["Sector 50", "Sector 51"],
  'Iffco Chowk': ["Sector 25",
"Sector 25-A",
"Sector 28",
"Sector 27",
"Sector 29",
"Sector 30",
"Sector 17",
"Sector 18",
],
  'DLF Phase - III': ["Sector 24"],
  'DLF Phase - IV': ["Sector 28"],
  'DLF Phase - V': ["Sector 43", "Sector 53", "Sector 54"],
  'DLF Phase - VI': ["Sector 76", "Sector 77", "Sector 78"],
  'Sushant Lok - I': ["Sector 27", "Sector 28"],
  'Sushant Lok - II': ["Sector 55"],
  'Sushant Lok - III': ["Sector 57"],
  'Malibu Town': ["Sector 47"],
  'Astaire Garden': ["Sector 70A"],
  'Amstoria': ["Sector 102"]
};

const locationImages = {
  'MG Road': './img/img1.jpg',
  'Golf Course Road': './img/img2.jpg',
  'Golf Course Road Extn': 'https://example.com/location-image.jpg',
  'Sohna Road': 'https://example.com/location-image.jpg',
  'Southern Peripheral Road': 'https://example.com/location-image.jpg',
  'New Gurgaon': 'https://example.com/location-image.jpg',
  'Dwarka Expressway': 'https://example.com/location-image.jpg',
  'NH-48': 'https://example.com/location-image.jpg',
  'Manesar': 'https://example.com/location-image.jpg',
  'Nirvana Country': 'https://example.com/location-image.jpg',
  'DLF Phase - III': 'https://example.com/location-image.jpg',
  'DLF Phase - IV': 'https://example.com/location-image.jpg',
  'DLF Phase - V': 'https://example.com/location-image.jpg',
  'DLF Phase - VI': 'https://example.com/location-image.jpg',
  'Sushant Lok - I': 'https://example.com/location-image.jpg',
  'Sushant Lok - II': 'https://example.com/location-image.jpg',
  'Sushant Lok - III': 'https://example.com/location-image.jpg',
  'Malibu Town': 'https://example.com/location-image.jpg',
  'Astaire Garden': 'https://example.com/location-image.jpg',
  'Amstoria': 'https://example.com/location-image.jpg'
};

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('MG Road');
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => setDropdownVisible(false), 400);
    } else {
      setDropdownVisible(true);
      setTimeout(() => setMenuOpen(true), 10);
    }
  };

  return (
    <>
      <div className="hero-section">
        <a href='/' className={`logo_position ${isFixed ? 'fixed' : ''}`}>
          <img className='logo_box' src="./img/Gll_Logo.png" alt='gll_logo' />
        </a>
        <video autoPlay muted loop playsInline className="hero_video">
          <source src="../img/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
                <div className="states-column">
                  {Object.keys(locationData).map((state) => (
                    <div key={state} style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                      <div
                        className={`state ${selectedState === state ? 'active' : ''}`}
                        onClick={() => setSelectedState(state)}
                      >
                        {state}
                      </div>
                      <span style={{ paddingRight: '10px',color:'white' }}>{">"}</span>
                    </div>
                  ))}
                </div>

                <div className="cities-column">
                  {locationData[selectedState].map((city) => (
                    <div key={city} className="city">{city}</div>
                  ))}
                </div>

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
        {/* <Header /> */}
      </div>
    </>
  );
};

export default HeroSection;
