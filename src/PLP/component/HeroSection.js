import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const [isSticky, setIsSticky] = useState(false);
        useEffect(() => {
          const handleScroll = () => {
            setIsSticky(window.scrollY > 60);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <section className={`elan_hero ${isSticky ? 'sticky' : ''}`} id="home">
            <video autoPlay muted loop playsInline className="elan_hero_section_video">
                <source src="https://res.cloudinary.com/dif213nbi/video/upload/v1754910659/banner_lfl0iy.webm" type="video/mp4" />
                Your browser does not support the video tag.s
            </video>
            <div className="elan_overlay">
                <p className="elan_hero_subtitle">A NEW DEFINITION OF LUXURY LIVING</p>
                <h1 className="elan_hero_title">ELAN THE PRESIDENTIAL</h1>
                <p className="elan_hero_location">SECTOR 106, GURGAON</p>
            </div>
        </section>
    );
};

export default HeroSection;
