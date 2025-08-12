import React from 'react';
import properties from '../data/properties.json';
import { Carousel, Button } from 'react-bootstrap';
import { FaBed } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedProjectsCarousel.css';

function Price({ max_price, min_price }) {
    const price = max_price;

    return (
        <h2 className="fw" style={{ color: "#EFD7A1" }}>
            {price === "Onwards"
                ? `₹ ${min_price} ${price}`
                : `₹ ${min_price} - ₹ ${price}`}
        </h2>
    );
}


const FeaturedProjectsCarousel = () => {
    return (
        <div className='FeaturedProjectsContainer '>
            <div className="featureBox ">
                <div className='headingandName'>
                    <h1>
                        <span>FEATURED&nbsp;</span> PROJECT
                    </h1>
                    <p className="textFeartureProject">
                        Our projects are unique because they are opportunities specially created for Investment
                    </p>
                </div>
                <Carousel interval={null} className='feartureCard'>
                    {properties.map((proj, index) => (
                        <Carousel.Item key={index} className='featureCarditem'>
                            <div className="featuredProjtDetail">
                                <div className='featureimage'>
                                    <img className='logoimage'
                                        src={proj.logoimg}
                                        alt="logo"
                                    />
                                    <img
                                        className="d-block projectimg rounded"
                                        src={proj.image}
                                        alt={proj.name}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <p className='reranumber'>RERA No. : RC/REP/HARERA/GGM/925/657/2025/28</p>
                                </div>
                                <div className='featuredDetailcontainer'>
                                    <div className='projectNameContainer'>
                                        <div className="projectName">
                                            <h1>
                                                {proj.name}
                                            </h1>
                                            <h5>
                                                {proj.location},&nbsp;
                                                {/* {proj.locality},&nbsp;
                                                {proj.city} */}

                                            </h5>
                                        </div>
                                    </div>
                                    <Price min_price={proj.start_price} max_price={proj.end_price} />
                                    <p className="text_justify">
                                        {proj.description.length > 300 ? proj.description.substring(0, 300) + '...' : proj.description}
                                    </p>
                                    <div className='moredetail'>
                                        <div className='LeftDetail'>
                                            <p> <FaBed className='uniticon' /> Unit Type : 4 BHK, 5BHK & Penthouse</p>
                                            <p> <BiSolidArea className='uniticon' /> Project Size : 05 Acre</p>
                                            <p> <MdPhotoSizeSelectSmall className='uniticon' /> Unit Size : 3100 - 8000 sq ft</p>
                                        </div>
                                        <div className='rightDetail'>
                                            <p> <FaCar className='uniticon' /> Parking : 3 Level Basement</p>
                                            <p> <SlGraph className='uniticon' /> Current Status : New launche</p>
                                            <p> <FaHome className='uniticon' /> Possession : Oct 2029</p>
                                        </div>

                                    </div>
                                    <div className='readmorebutton'>
                                        <Button >
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>READ MORE</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
export default FeaturedProjectsCarousel;
