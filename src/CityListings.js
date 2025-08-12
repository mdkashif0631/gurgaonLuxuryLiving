import React, { useEffect, useState } from "react";
import "./CityListings.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = {
    "CITY SKYLINES": [
        { city: "New York", bedrooms: 3, bathrooms: 4, halfBathrooms: 1, price: "₹34,750,000", image: './img/img1.jpg' },
        { city: "Brooklyn", bedrooms: 3, bathrooms: 2, halfBathrooms: 1, price: "₹3,495,000", image: './img/img2.jpg' },
        { city: "Miami", bedrooms: 3, bathrooms: 3, halfBathrooms: 0, price: "₹3,050,000", image: './img/img1.jpg' },
        { city: "Los Angeles", bedrooms: 3, bathrooms: 5, halfBathrooms: 1, price: "₹11,900,000", image: './img/img2.jpg' },
    ],
    "LUXURY VILLA": [
        { city: "Miami Beach", bedrooms: 15, bathrooms: 17, halfBathrooms: 5, price: "₹99,000,000", image: './img/img1.jpg' },
        { city: "Newport Beach", bedrooms: 6, bathrooms: 6, halfBathrooms: 3, price: "₹49,998,000", image: './img/img2.jpg' },
        { city: "Laguna Beach", bedrooms: 5, bathrooms: 5, halfBathrooms: 2, price: "₹44,995,000", image: './img/img1.jpg' },
        { city: "Sunny Isles Beach", bedrooms: 6, bathrooms: 8, halfBathrooms: 1, price: "₹41,500,000", image: './img/img2.jpg' },
    ],
    "LUXURY FLOORS": [
        { city: "Austin Ranch", bedrooms: 7, bathrooms: 9, halfBathrooms: 2, price: "₹22,000,000", image: './img/img1.jpg' },
        { city: "Dallas Farm", bedrooms: 5, bathrooms: 4, halfBathrooms: 1, price: "₹8,500,000", image: './img/img2.jpg' },
        { city: "Texas Hill", bedrooms: 6, bathrooms: 7, halfBathrooms: 2, price: "₹17,000,000", image: './img/img1.jpg' },
        { city: "Houston Estate", bedrooms: 10, bathrooms: 12, halfBathrooms: 3, price: "₹35,000,000", image: './img/img2.jpg' },
    ],
    "FARM HOUSES": [
        { city: "Chicago", bedrooms: 4, bathrooms: 5, halfBathrooms: 1, price: "₹5,000,000", image: './img/img1.jpg' },
        { city: "Boston", bedrooms: 3, bathrooms: 4, halfBathrooms: 0, price: "₹4,500,000", image: './img/img2.jpg' },
        { city: "Seattle", bedrooms: 5, bathrooms: 6, halfBathrooms: 2, price: "₹7,300,000", image: './img/img1.jpg' },
        { city: "San Diego", bedrooms: 4, bathrooms: 4, halfBathrooms: 1, price: "₹5,700,000", image: './img/img2.jpg' },
    ],
    "UNDER ₹ 3.5 CR": [
        { city: "Orlando", bedrooms: 3, bathrooms: 3, halfBathrooms: 1, price: "₹1,800,000", image: './img/img1.jpg' },
        { city: "Phoenix", bedrooms: 4, bathrooms: 4, halfBathrooms: 1, price: "₹1,950,000", image: './img/img2.jpg' },
        { city: "Atlanta", bedrooms: 4, bathrooms: 3, halfBathrooms: 1, price: "₹1,600,000", image: './img/img1.jpg' },
        { city: "Denver", bedrooms: 3, bathrooms: 3, halfBathrooms: 0, price: "₹1,750,000", image: './img/img2.jpg' },
    ],
};

const CityListings = () => {
    const [activeTab, setActiveTab] = useState("CITY SKYLINES");

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, [activeTab]); // Re-run AOS when tab changes to re-animate

    return (
        <div className="city-section">
            <h1>THE NEXT MOVE IS YOURS</h1>
            <nav className="navbar">
                {Object.keys(data).map((tab) => (
                    <span
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </nav>

            <div className="listings">
                {data[activeTab]?.map((item, index) => (
                    <div className="listing-card" key={index} data-aos="fade-up">
                        <img src={item.image} alt={item.city} />
                        <div className="listing-info">
                            <h3>{item.city}</h3>
                            <p>
                                {item.bedrooms} BR | {item.bathrooms} BA
                                {item.halfBathrooms ? `, ${item.halfBathrooms} HALF BA` : ""}
                            </p>
                            <p className="price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-all-container">
                <button className="view-all-button" data-aos="zoom-in-up">VIEW ALL LISTINGS</button>
            </div>
        </div>
    );
};

export default CityListings;
