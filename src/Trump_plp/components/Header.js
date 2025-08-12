import React, { useEffect, useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

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
    <header className={`trump_header ${isSticky ? 'sticky' : ''}`}>
      <div className="trump_web_header">
        <div className="trump_logo">
          <a href="#home">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754908552/logo-1_q7fuuo.png"
              alt="trumplogo"
            />
          </a>
        </div>
        <nav className={`trump_nav ${menuOpen ? 'open' : ''}`}>
          
          <a className={`trump_state ${selectedState === 'Description' ? 'active' : ''}`}
            onClick={() => setSelectedState('Description')}
            href="#description">Over view</a>
          <a className={`trump_state ${selectedState === 'Configuration' ? 'active' : ''}`}
            onClick={() => setSelectedState('Configuration')}
            href="#floor">Configuration</a>
          <a className={`trum-state ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">Location</a>
          <a className={`trump_state ${selectedState === 'Amenities' ? 'active' : ''}`}
            onClick={() => setSelectedState('Amenities')}
            href="#amenities">Amenities</a>
          <a className={`trump_state ${selectedState === 'Gallery' ? 'active' : ''}`}
            onClick={() => setSelectedState('Gallery')}
            href="#gallery">Gallery</a>
        </nav>
        <div className="gll_logo">
          <a href="#contact" className="gll_phone"><MdOutlinePhoneInTalk /> 9999999999</a>
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754908550/Gll_Logo_itu1og.png"
              alt="gll-logo"
            />
          </a>
        </div>
      </div>

      {/* <div className="trump_menu_icon"> */}
      <div className="trump_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCrossCircled className="trump_close_bar" /> :
          <BsMenuButtonWide className="trump_memu" />
        }
      </div>
      {/* </div> */}
    </header>
  );
}
