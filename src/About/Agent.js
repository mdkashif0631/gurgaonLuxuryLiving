import React, { useEffect, useRef, useState } from "react";

const Agent = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    

    useEffect(() => {
        const currentSection = sectionRef.current; // store ref safely
        if (!currentSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(currentSection);

        return () => {
            observer.unobserve(currentSection); // cleanup correctly
        };
    }, []);


    return (
        <section ref={sectionRef} className="about_hero_section" id="agent">
            <video autoPlay muted loop playsInline className="about_hero_video">
                <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757942311/r70cg8nna5cchds4q3wv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`about_hero_content ${isVisible ? "animate" : ""}`}>
                <p className="about_hero_subtitle">JOIN AS AN AGENT</p>
                <h1 className="about_hero_title">
                    YOUR FUTURE STARTS HERE
                </h1>
                <div className="about_scroll-indicator">
                    <span></span>
                </div>
                <p className="about_direct">SCROLL TO DISCOVER</p>
            </div>
        </section>
    );
};

export default Agent;
