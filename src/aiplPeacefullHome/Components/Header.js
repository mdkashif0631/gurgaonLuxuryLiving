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
    <header className={`aipl_header ${isSticky ? 'sticky' : ''}`}>
      <div className="aipl_web_header">
        <div className="aipl_logo">
          <a href="#home">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754982828/ELAN_LOGO_2_okfhcj.png"
              alt="aipllogo"
            />
          </a>
        </div>
        <nav className={`aipl_nav ${menuOpen ? 'open' : ''}`}>
          <a className={`aipl_state ${selectedState === 'Description' ? 'active' : ''}`}
            onClick={() => setSelectedState('Description')}
            href="#description">Overview</a>
          <a className={`aipl_state ${selectedState === 'Configuration' ? 'active' : ''}`}
            onClick={() => setSelectedState('Configuration')}
            href="#floor">Configuration</a>
          <a className={`trum-state ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">Location</a>
          <a className={`aipl_state ${selectedState === 'Amenities' ? 'active' : ''}`}
            onClick={() => setSelectedState('Amenities')}
            href="#amenities">Amenities</a>
          <a className={`aipl_state ${selectedState === 'Gallery' ? 'active' : ''}`}
            onClick={() => setSelectedState('Gallery')}
            href="#gallery">Gallery</a>
        </nav>
        <div className="aipl_gll_logo">
          <a href="#contact" className="aipl_gll_phone"><MdOutlinePhoneInTalk /> 9999999999</a>
          <a href="/" target="_blank">
            <img
              src="/LuxuryAbode_gold.png"
              alt="aipl_gll-logo"
            />
          </a>
        </div>
      </div>

      {/* <div className="aipl_menu_icon"> */}
      <div className="aipl_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCrossCircled className="aipl_close_bar" /> :
          <BsMenuButtonWide className="aipl_memu" />
        }
      </div>
      {/* </div> */}
    </header>
  );
}
