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
    <header className={`elan_header ${isSticky ? 'sticky' : ''}`}>
      <div className="elan_web_header">
        <div className="elan_logo">
          <a href="#home">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754982828/ELAN_LOGO_2_okfhcj.png"
              alt="elanlogo"
            />
          </a>
        </div>
        <nav className={`elan_nav ${menuOpen ? 'open' : ''}`}>
          <a className={`elan_state ${selectedState === 'Description' ? 'active' : ''}`}
            onClick={() => setSelectedState('Description')}
            href="#description">Over view</a>
          <a className={`elan_state ${selectedState === 'Configuration' ? 'active' : ''}`}
            onClick={() => setSelectedState('Configuration')}
            href="#floor">Configuration</a>
          <a className={`trum-state ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">Location</a>
          <a className={`elan_state ${selectedState === 'Amenities' ? 'active' : ''}`}
            onClick={() => setSelectedState('Amenities')}
            href="#amenities">Amenities</a>
          <a className={`elan_state ${selectedState === 'Gallery' ? 'active' : ''}`}
            onClick={() => setSelectedState('Gallery')}
            href="#gallery">Gallery</a>
        </nav>
        <div className="elan_gll_logo">
          <a href="#contact" className="elan_gll_phone"><MdOutlinePhoneInTalk /> 9999999999</a>
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dif213nbi/image/upload/v1754908550/Gll_Logo_itu1og.png"
              alt="elan_gll-logo"
            />
          </a>
        </div>
      </div>

      {/* <div className="elan_menu_icon"> */}
      <div className="elan_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCrossCircled className="elan_close_bar" /> :
          <BsMenuButtonWide className="elan_memu" />
        }
      </div>
      {/* </div> */}
    </header>
  );
}
