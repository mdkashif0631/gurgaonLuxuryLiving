import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutaipl">
      <div className="aboutaipl-project">
        <div className="aboutaipl-left">
          <div className="aboutaipl-logo">
            <img src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769345/etjyw9sqk1dmowdqwe1f.webp" alt="The Peaceful Homes" /> {/* replace with actual logo */}
          </div>
          <h2 className="aboutaipl-heading">About The Project</h2>
          <p className="aboutaipl-text">
            In the thriving city of Gurugram, the demand for luxury apartments
            has soared alongside the exponential growth of MNCs and IT parks. As
            developers work tirelessly to enhance the city’s skyline, Gurugram
            offers a host of lifestyle benefits and the best housing projects
            with excellent transportation options, a booming economy, and
            abundant amenities for all. Gurugram emerges as a prime real estate
            hotspot.
            <br />
            <br />
            Among the many options, The Peaceful Homes by AIPL in Sector 70-A
            stand out as top-notch Luxury 2 and 3 BHK flats for sale in
            Gurugram. Spanning 11.58 acres of low-density group housing, this
            premium project offers a serene lifestyle amidst landscaped greens.
            Residents enjoy access to a fully-equipped clubhouse, sports
            facilities, and a plethora of amenities for an unparalleled living
            experience.
            <br />
            <br />
            When seeking the perfect apartment in Gurugram, The Peaceful Homes
            present a truly exceptional choice.
          </p>

          <p className="aboutaipl-rera">
            <strong>RERA Registration No.</strong> GGM/369/101/2019/63
          </p>

          <button className="aboutaipl-btn">ENQUIRE NOW</button>
        </div>

        <div className="aboutaipl-right">
          <img
            src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769170/hxhzsmfyfu39hby0ovci.webp"
            alt="The Peaceful Homes"
            className="aboutaipl-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
