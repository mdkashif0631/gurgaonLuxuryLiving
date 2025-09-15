import React, { useEffect, useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`altitude_header ${isSticky ? 'sticky' : ''}`}>
      <div className="altitude_web_header">
        <div className="altitude_logo">
          <a href="#home">
            <img className="white_logo"
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428353/logo_ixmolw.webp"
              alt="altitudelogo"
            />
            <img className="color_logo"
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428303/m3m-logo_yuxfe0.png"
              alt="altitudelogo"
            />
          </a>
        </div>
        <nav className={`altitude_nav ${menuOpen ? 'open' : ''}`}>
          
          <a className={`altitude_state ${selectedState === 'Description' ? 'active' : ''}`}
            onClick={() => setSelectedState('Description')}
            href="#description">Over view</a>
          <a className={`altitude_state ${selectedState === 'Configuration' ? 'active' : ''}`}
            onClick={() => setSelectedState('Configuration')}
            href="#floor">Configuration</a>
          <a className={`trum-state ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">Location</a>
          <a className={`altitude_state ${selectedState === 'Amenities' ? 'active' : ''}`}
            onClick={() => setSelectedState('Amenities')}
            href="#amenities">Amenities</a>
          <a className={`altitude_state ${selectedState === 'Gallery' ? 'active' : ''}`}
            onClick={() => setSelectedState('Gallery')}
            href="#gallery">Gallery</a>
        </nav>
        <div className="la_logo">
          <a href="#contact" className="gll_phones"><MdOutlinePhoneInTalk /> 9999999999</a>
          <a href="/" target="_blank">
            <img className="gold_logo"
              src="/LuxuryAbode_gold.png"
              alt="gll-logo"
            />
            <img className="la_black_logo"
              src="/LuxuryAbode_black.png"
              alt="la_logo"
            />
          </a>
        </div>
      </div>

      {/* <div className="altitude_menu_icon"> */}
      <div className="altitude_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCrossCircled className="altitude_close_bar" /> :
          <BsMenuButtonWide className="altitude_memu" />
        }
      </div>
      {/* </div> */}
    </header>
  );
}
