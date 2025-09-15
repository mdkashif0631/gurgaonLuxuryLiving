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
    <header className={`cloverdale_header ${isSticky ? 'sticky' : ''}`}>
      <div className="cloverdale_web_header">
        <div className="cloverdale_logo">
          <a href="#home">
            <img className="white_logo"
              src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757093742/zr2ewggck9smjiraflmq.svg"
              alt="cloverdalelogo"
            />
            <img className="color_logo"
              src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757093742/mor0g4ebjtgkbc64mxtj.svg"
              alt="cloverdalelogo"
            />
          </a>
        </div>
        <nav className={`cloverdale_nav ${menuOpen ? 'open' : ''}`}>
          
          <a className={`cloverdale_state ${selectedState === 'Description' ? 'active' : ''}`}
            onClick={() => setSelectedState('Description')}
            href="#description">Over view</a>
          <a className={`cloverdale_state ${selectedState === 'Configuration' ? 'active' : ''}`}
            onClick={() => setSelectedState('Configuration')}
            href="#floor">Configuration</a>
          <a className={`trum-state ${selectedState === 'Location' ? 'active' : ''}`}
            onClick={() => setSelectedState('Location')}
            href="#location">Location</a>
          <a className={`cloverdale_state ${selectedState === 'Amenities' ? 'active' : ''}`}
            onClick={() => setSelectedState('Amenities')}
            href="#amenities">Amenities</a>
          <a className={`cloverdale_state ${selectedState === 'Gallery' ? 'active' : ''}`}
            onClick={() => setSelectedState('Gallery')}
            href="#gallery">Gallery</a>
        </nav>
        <div className="gll_logo">
          <a href="#contact" className="gll_phones"><MdOutlinePhoneInTalk /> 9999999999</a>
          <a href="/" target="_blank">
            <img
              src="/LuxuryAbode_gold.png"
              alt="gll-logo"
            />
          </a>
        </div>
      </div>

      {/* <div className="cloverdale_menu_icon"> */}
      <div className="cloverdale_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCrossCircled className="cloverdale_close_bar" /> :
          <BsMenuButtonWide className="cloverdale_memu" />
        }
      </div>
      {/* </div> */}
    </header>
  );
}
