import React from "react";

const points = [
  "Located in Sector 106, Dwarka Expressway, Gurugram",
  "Seamlessly Connected with NH-8 & Delhi",
  "Just 15 Mins Away from IGI Airport",
  "Connects to Main Landmarks of Gurugram",
];

const LocationEmperor = () => {
  return (
    <section className="location-section" style={{backgroundColor:'#050e1d'}}>
      <div className="location_image" style={{borderRadius:'0px'}}>
        <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755344413/location_emperor_asjkyk.webp" style={{width:'100%'}} alt="Location Map" />
      </div>
      <div className="location-content" >
        <p className="location_subtitle" style={{color:'white'}}>LOCATION ADVANTAGES</p>
        <h2 className="location_main-title" style={{color:'white'}}>
          With Elan the Presidential, luxury living now has a new address.
        </h2>
        <ul className="location-points" >
          {points.map((point, index) => (
            <li key={index} style={{color:'white'}}>
              <img src="https://res.cloudinary.com/dif213nbi/image/upload/v1755344258/check_emgw0m.png" alt="check_icon"  className="icon"/>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocationEmperor;
