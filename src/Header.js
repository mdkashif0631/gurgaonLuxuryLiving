import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import { CiHeart } from 'react-icons/ci';

const Header = () => {
  const [nav_bar, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowMenu(!nav_bar);
  };

  const closeMenu = () => setShowMenu(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // helper function for navigation
  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <header className={`gll_header ${isSticky ? 'sticky' : ''}`}>
      <div className={`gll_header-container_top ${isSticky ? 'sticky' : ''}`}>
        <a className='nav_list account' href="/" onClick={(e) => handleNav(e, "/")}>ACCOUNT</a>
        <a className='nav_list fav' href="/" onClick={(e) => handleNav(e, "/")}><CiHeart style={{ fontSize: '24px', paddingRight: '5px' }} /> <span>FAVORITES</span></a>
      </div>
      <div className="header-container">

        {/* Left */}
        <div className="header-left">
          <FiSearch className="search_icon" />
          <ul className="header-links">
            <li>
              <Link className="nav_list" to="/">Home</Link>
            </li>
            {/* <li>
              <Link className="nav_list" to="/elanpresidential">Elan</Link>
            </li> */}
            <li className="dropdown">
              <span className="nav_list dropdown">Project</span>
              <ul className="dropdown_menu" style={{backgroundColor:'100b28c1'}}>
                <li><Link to="/elanpresidential" onClick={closeMenu}>Elan Presidential</Link></li>
                <li><Link to="/trumptower" onClick={closeMenu}>Trump Tower</Link></li>
              </ul>
            </li>
            {/* <li>
              <Link className="nav_list" to="/trumptower">Trump</Link>
            </li> */}
            <li>
              <Link className="nav_list" to="/buy">BUY</Link>
            </li>
            <li>
              <Link className="nav_list" to="/sell">SELL</Link>
            </li>
            <li>
              <Link className="nav_list" to="/rent">RENT</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <ul className="header-right header-links">
          <li className='nav_list' href="/about" onClick={(e) => handleNav(e, "/about")}>About</li>
          <li className='nav_list phone_number' href="tel:+91xxxxxxxxxx">+91 xxxxxxxxxx</li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu onClick={handleButtonToggle} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className={`menu_list ${isSticky ? 'sticky' : ''}`}>
          <a style={{ paddingTop: '16px' }} href="/" onClick={(e) => handleNav(e, "/")}>HOME</a>
          <a href="/buy" onClick={(e) => handleNav(e, "/buy")}>BUY</a>
          <a href="/trumptower" onClick={(e) => handleNav(e, "/trumptower")}>TRUMP</a>
          <a href="/sell" onClick={(e) => handleNav(e, "/sell")}>SELL</a>
          <a href="/agents" onClick={(e) => handleNav(e, "/agents")}>AGENTS</a>
          <a href="/elanpresidential" onClick={(e) => handleNav(e, "/elanpresidential")}>Elan</a>
          <a href="/about" onClick={(e) => handleNav(e, "/about")}>ABOUT</a>
          <a style={{ paddingBottom: '16px' }} href="/contact" onClick={(e) => handleNav(e, "/contact")}>CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
