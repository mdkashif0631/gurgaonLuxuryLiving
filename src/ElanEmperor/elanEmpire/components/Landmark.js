import React from "react";

const Landmark = () => {
    return (
        <section className="land_mark-container">
            <img className="land_mark_bg_img" src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1755120900/kmlrayiefz8huxg7shnr.webp" alt="land_mark_bg_img" />
            <h1 className="land_mark-title" style={{color:'#b08968'}}>
                LANDMARK FOR THE WORLD. <br /> HOME FOR A FEW.
            </h1>
            <div className="land_mark-underline" style={{backgroundColor:'#b08968'}}></div>
            <p className="land_mark-description">
                Elan Group’s Signature Residential Masterpiece "Elan The Emperor" rises at the most coveted address—Sector 106, Dwarka Expressway, Gurugram— offering a world of exclusivity and prestige, tucked away from the city's never ending bustle.
            </p>
        </section>
    );
};

export default Landmark;