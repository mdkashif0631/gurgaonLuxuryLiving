import React, { useState, useEffect, useRef } from "react";


export default function InteriorsCarousel() {
    const images = [
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906173/amenities-img-6_pi1v6j.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906174/interior-img-1_vfmffn.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906179/interior-img-4_yb5jov.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906179/interior-img-2_fdbzcf.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906177/amenities-img-1_cvrj0o.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906176/amenities-img-8_yfskfp.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906176/amenities-img-9_bpsnjp.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906175/interior-img-5_l2mhqv.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906175/amenities-img-7_gue09k.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906174/amenities-img-4_h63gu0.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906174/amenities-img-3_l2iwsx.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906174/amenities-img-5_turclv.jpg",
        "https://res.cloudinary.com/dif213nbi/image/upload/v1754906174/amenities-img-2_qkzyzt.jpg",
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const timerRef = useRef(null);

    const nextSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setFade(false);
        }, 400);
    };

    const prevSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
            );
            setFade(false);
        }, 400);
    };

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(nextSlide, 10000);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line
    }, []);

    const handleNextClick = () => {
        nextSlide();
        resetTimer();
    };

    const handlePrevClick = () => {
        prevSlide();
        resetTimer();
    };

    return (
        <div className="trump_carousel-container" id="gallery">
            <h2 className="trump_carousel-title">STUNNING INTERIORS</h2>
            <p className="trump_carousel-subtitle">
                Stunning interiors that redefine elegance, luxury, comfort, and timeless beauty
            </p>

            <div className="trump_carousel-wrapper">
                <button className="trump_carousel-btn trump_left" onClick={handlePrevClick}>
                    ❮
                </button>

                <div className={`trump_carousel-image-wrapper ${fade ? "trump_fade" : ""}`}>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                </div>

                <button className="trump_carousel-btn trump_right" onClick={handleNextClick}>
                    ❯
                </button>
            </div>
        </div>
    );
}
