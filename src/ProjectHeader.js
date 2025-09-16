import React, { useEffect, useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import "./ProjectHeader.css";

export default function ProjectHeader({ project }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [isSticky, setIsSticky] = useState(false);

    // 🔹 Sticky header scroll effect
    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`project_header ${isSticky ? "sticky" : ""}`}>
            <div className="project_web_header">
                {/* Project Logo */}
                <div className="project_logo">
                    <a href="#home">
                        {project ? (
                            <>
                                <img
                                    className="white_logo"
                                    src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757999948/dh7lk2qmwe9gdukktgt1.svg"
                                    alt="project-logo"
                                />
                                <img
                                    className="color_logo"
                                    src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757999948/dh7lk2qmwe9gdukktgt1.svg"
                                    alt="project-logo"
                                />
                            </>
                        ) : (
                            <span>Loading...</span>
                        )}
                    </a>
                </div>

                {/* Navigation Menu */}
                <nav className={`project_nav ${menuOpen ? "open" : ""}`}>
                    <a
                        className={`project_state ${
                            selectedState === "Description" ? "active" : ""
                        }`}
                        onClick={() => setSelectedState("Description")}
                        href="#description"
                    >
                        Overview
                    </a>
                    <a
                        className={`project_state ${
                            selectedState === "Configuration" ? "active" : ""
                        }`}
                        onClick={() => setSelectedState("Configuration")}
                        href="#floor"
                    >
                        Configuration
                    </a>
                    <a
                        className={`project_state ${
                            selectedState === "Location" ? "active" : ""
                        }`}
                        onClick={() => setSelectedState("Location")}
                        href="#location"
                    >
                        Location
                    </a>
                    <a
                        className={`project_state ${
                            selectedState === "Amenities" ? "active" : ""
                        }`}
                        onClick={() => setSelectedState("Amenities")}
                        href="#amenities"
                    >
                        Amenities
                    </a>
                    <a
                        className={`project_state ${
                            selectedState === "Gallery" ? "active" : ""
                        }`}
                        onClick={() => setSelectedState("Gallery")}
                        href="#gallery"
                    >
                        Gallery
                    </a>
                </nav>

                <div className="la_logo">
                    <a href="#contact" className="gll_phones">
                        <MdOutlinePhoneInTalk /> 9999999999
                    </a>
                    <a href="/" target="_blank" rel="noreferrer">
                        <img
                            className="gold_logo"
                            src="/LuxuryAbode_gold.png"
                            alt="gll-logo"
                        />
                        <img
                            className="la_black_logo"
                            src="/LuxuryAbode_black.png"
                            alt="la_logo"
                        />
                    </a>
                </div>
            </div>

            {/* Mobile Menu Icon */}
            <div
                className="project_menu_icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <RxCrossCircled className="project_close_bar" />
                ) : (
                    <BsMenuButtonWide className="project_memu" />
                )}
            </div>
        </header>
    );
}
