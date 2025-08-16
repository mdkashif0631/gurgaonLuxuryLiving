import React, { useEffect, useState } from "react";

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
        <section className={`emperor_hero ${isSticky ? 'sticky' : ''}`} id="home">
            <video autoPlay muted loop playsInline className="emperor_hero_section_video">
                <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1755118072/takszyefwvgmgi3tmuip.webm" type="video/mp4" />
                Your browser does not support the video tag.s
            </video>
            <div className="emperor_overlay">
                <p className="emperor_hero_subtitle">Landmark For The World, Home For A Few.</p>
                <h1 className="emperor_hero_title">Elan The Emperor</h1>
                <p className="emperoe_hero_location">SECTOR 106, GURGAON</p>
            </div>
        </section>
    );
};

export default HeroSection;