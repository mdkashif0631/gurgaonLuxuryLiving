import React, { useEffect, useState } from "react";
import './Hero.css'

const Hero = () => {
    const [isSticky, setIsSticky] = useState(false);
        useEffect(() => {
          const handleScroll = () => {
            setIsSticky(window.scrollY > 60);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <section className={`altitude_hero ${isSticky ? 'sticky' : ''}`} id="home">
            <video autoPlay muted loop playsInline className="altitude_hero_section_video">
                <source src="https://res.cloudinary.com/dif213nbi/video/upload/v1755428359/ssvid.net--M3M-Altitude_1080p_slj2d2.mp4" type="video/mp4" />
                Your browser does not support the video tag.s
            </video>
            <div className="altitude_overlay">
                <img
                src="https://res.cloudinary.com/dif213nbi/image/upload/v1755428335/logo__1__-_FE2Q8M30MNwZ_napfgy.png"
                alt="altitude logo"
                />
                <h1 className="altitude_hero_title">A Life Above Everything Else</h1>
            </div>
        </section>
    );
};

export default Hero;