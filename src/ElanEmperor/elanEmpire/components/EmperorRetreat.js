import React, { useRef, useState, useEffect } from "react";

const EmperorRetreat = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (currentSection) observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection);
        };
    }, []);

    return (
        <section
            className={`personal-retreat ${isVisible ? "visible" : ""}`}
            ref={sectionRef}
        >
            <div className="retreat_text-content">
                <h2 className="retreat_title">YOUR PERSONAL RETREAT</h2>
                <p className="retreat_description">
                    Life at Presidential means a world tucked away in tranquillity,
                    <br/>
                    ensuring that every moment spent here feels like a retreat.
                </p>
                <div className="underline"></div>
            </div>

            <div className="retreat_image-container">
                <video autoPlay muted loop playsInline className="retreat_section_video">
                    <source src="https://res.cloudinary.com/dif213nbi/video/upload/v1754910874/elan_video4_mvz2wc.webm" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default EmperorRetreat;
