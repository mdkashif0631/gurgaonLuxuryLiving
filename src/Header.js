import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CiHeart, CiUser } from "react-icons/ci";
import "./Header.css";
import { FaHandPointRight } from "react-icons/fa6";

const Header = () => {
  const [nav_bar, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // 👇 track nested dropdown states
  const [openDropdown, setOpenDropdown] = useState(null);         //=============== for 'Projects'=============
  const [openDeveloper, setOpenDeveloper] = useState(null);       //============== for 'developer' ============

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonToggle = () => {
    setShowMenu(!nav_bar);
  };

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 600);
        setShowTopBar(window.scrollY > 600);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsSticky(true);
      setShowTopBar(true);
    }
  }, [location.pathname]);

  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Data structure for developers and projects
  const developers = {
    ELAN: [
      { name: "ELAN PRESIDENTIAL", path: "/elanpresidential" },
      { name: "ELAN EMPEROR", path: "/elanemperor" },
      { name: "ELAN EMPEROR 3", path: "/elanemperor3" },
    ],
    TRUMP: [
      { name: "TRUMP TOWER", path: "/trumptower" },
      { name: "TRUMP RESIDENCES", path: "/trumpresidences" },
    ],
    M3M: [
      { name: "M3M ALTITUDE", path: "/m3maltitude" },
      { name: "M3M PROJECT 2", path: "/m3m2" },
    ],
    AIPL: [
      { name: "Peacefull Home", path: "/aiplpeacefullhome"},
    ],
    "SIGNATURE GLOBAL": [
      { name: "CLOVERDALE", path: "/cloverdale" },
      { name: "CLOVERDALE 2", path: "/cloverdale2" },
    ],
  };

  return (
    <header className={`gll_header ${isSticky ? "sticky" : ""}`}>
      {/* Top bar */}
      {showTopBar && (
        <div
          className={`gll_header-container_top ${isSticky ? "sticky" : ""}`}
        >
          <a
            className="nav_list fav"
            href="/"
            onClick={(e) => handleNav(e, "/")}
          >
            <CiHeart
              style={{ fontSize: "clamp(20px, 2vw, 24px)", paddingRight: "5px" }}
            />
            <span style={{ fontSize: "clamp(8px, 1vw, 12px)" }}>FAVORITES</span>
          </a>
          <a
            className="nav_list account"
            href="/"
            onClick={(e) => handleNav(e, "/")}
          >
            <CiUser
              style={{ fontSize: "clamp(20px, 2vw, 24px)", paddingRight: "5px" }}
            />
            <span style={{ fontSize: "clamp(8px, 1vw, 12px)" }}>ACCOUNT</span>
          </a>
        </div>
      )}

      {/* Main header */}
      <div className="header-container">
        <div className="header-left">
          {/* Search Section */}
          <div className="search-wrapper">
            <FiSearch
              className="search_icon"
              onClick={() => setShowSearch(!showSearch)}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`search-input ${showSearch ? "active" : ""}`}
            />
          </div>

          <ul className="header-links">
            <li>
              <Link
                className={`nav_list ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                to="/projects"
              >
                BUY
              </Link>
            </li>
            <li>
              <Link
                className={`nav_list ${
                  location.pathname === "/sell" ? "active" : ""
                }`}
                to="/sell"
              >
                SELL
              </Link>
            </li>
            <li className="dropdown">
              <span className="nav_list dropdown">PROJECT</span>
              <ul className="dropdown_menu">
                {Object.keys(developers).map((dev) => (
                  <React.Fragment key={dev}>
                    <span className="nav_list popleft">{dev}</span>
                    <ul className="popleft_menu">
                      {developers[dev].map((project, idx) => (
                        <li key={idx}>
                          <Link to={project.path} onClick={closeMenu}>
                            {project.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            </li>
            <li>
              <Link
                className={`nav_list ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
                onClick={(e) => handleNav(e, "/about")}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <ul className="header-right header-links">
          <li>
            <Link
              className={`nav_list ${
                location.pathname === "/blogs" ? "active" : ""
              }`}
              to="/blogs"
              onClick={(e) => handleNav(e, "/blogs")}
            >
              BLOG
            </Link>
          </li>
          <li
            className="nav_list phone_number"
            style={{ height: "40px" }}
            href="tel:+918744966999"
          >
            +91 8744966999
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          ref={buttonRef}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu style={{color:'#edcd7b'}}  onClick={handleButtonToggle} />}
        </button>
      </div>

      {/* Logos */}
      <a href="/" className="main_logo_gll gll_logo1">
        <img
          className="logo_box"
          src="/LuxuryAbode_gold.png"
          alt="gll_logo"
        />
      </a>
      <a href="/" className="main_logo_gll gll_logo2">
        <img
          className="logo_box"
          src="/LuxuryAbode_black.png"
          alt="gll_logo"
        />
      </a>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className={`menu_list ${isSticky ? "sticky" : ""}`}>
        <a href="/" className="mob_logo_gll ">
        <img
          className="logo_box"
          src="/LuxuryAbode_black.png"
          alt="gll_logo"
        />
      </a>
          <a style={{ paddingTop: "16px" }} href="/" onClick={(e) => handleNav(e, "/")}>
            HOME
          </a>
          <a href="/projects" onClick={(e) => handleNav(e, "/projects")}>BUY</a>
          <a href="/sell" onClick={(e) => handleNav(e, "/sell")}>SELL</a>

          {/* Nested Accordion Menu for Projects */}
          <div className="mobile_dropdown">
            <button
              className="mobile_section"
              onClick={() =>
                setOpenDropdown(openDropdown === "PROJECTS" ? null : "PROJECTS")
              }
            >
              PROJECTS {openDropdown === "PROJECTS" ? "▲" : "▼"}
            </button>
            {openDropdown === "PROJECTS" && (
              <div className="mobile_submenu">
                {Object.keys(developers).map((dev) => (
                  <div key={dev}>
                    <button
                      className="mobile_dev"
                      onClick={() =>
                        setOpenDeveloper(openDeveloper === dev ? null : dev)
                      }
                    >
                      {dev} {openDeveloper === dev ? "▲" : "▼"}
                    </button>
                    {openDeveloper === dev && (
                      <ul className="mobile_project_list">
                        {developers[dev].map((project, idx) => (
                          <li key={idx}>
                            <a
                              href={project.path}
                              onClick={(e) => handleNav(e, project.path)}
                            >
                              <FaHandPointRight /> {project.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="/blogs" onClick={(e) => handleNav(e, "/blogs")}>BLOGS</a>
          <a href="/about" onClick={(e) => handleNav(e, "/about")}>ABOUT</a>
          <a
            style={{ paddingBottom: "16px" }}
            href="/contact"
            onClick={(e) => handleNav(e, "/contact")}
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
