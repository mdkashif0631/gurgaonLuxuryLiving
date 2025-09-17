import React, { useEffect, useState, useCallback } from "react";
import "./CityListings.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CatalogMagic from "./ContentLoader";

const BASE_URL = process.env.REACT_APP_API_URL; 

const CityListings = () => {
  const [activeTab, setActiveTab] = useState("");
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //  Extract bedrooms
  const getBedrooms = (property) => {
    const bhks = [];
    if (property.Beds_bhk) bhks.push(property.Beds_bhk + " BHK");
    if (property.Beds_bhk1) bhks.push(property.Beds_bhk1 + " BHK");
    if (property.Beds_bhk2) bhks.push(property.Beds_bhk2 + " BHK");
    if (property.Beds_bhk3) bhks.push(property.Beds_bhk3 + " BHK");
    if (property.Beds_bhk4) bhks.push(property.Beds_bhk4 + " BHK");
    return bhks.length > 0 ? bhks.join(" | ") : "N/A";
  };

  //  Fetch properties
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/properties`)
      .then((res) => res.json())
      .then((properties) => {
        const grouped = properties.reduce((acc, property) => {
          const category = property.Project_category || "Uncategorized";
          if (!acc[category]) acc[category] = [];

          acc[category].push({
            city: property.Project_Name,
            address: `${property.City} ${property.Location || ""}`,
            bedrooms: getBedrooms(property),
            area:
              property.Super_Area_bhk ||
              property.Carpet_Area_bhk ||
              property.Built_Up_Area_bhk ||
              "",
            price: property.Start_price
              ? `₹${property.Start_price} CR* ONWARD`
              : "Price on request",
            image: property.Main_Image,
            logo: property.Developer_Logo,
            startPrice: Number(property.Start_price) || 0,
            link: `/${property.Link}`,
          });

          return acc;
        }, {});

        //  Add custom filter "UNDER ₹ 3 CR"
        const under3cr = [];
        Object.values(grouped).forEach((list) => {
          list.forEach((item) => {
            if (item.startPrice > 0 && item.startPrice <= 30000000) {
              under3cr.push(item);
            }
          });
        });

        if (under3cr.length > 0) {
          grouped["UNDER ₹ 3 CR"] = under3cr;
        }

        setData(grouped);

        //  Default tab → first category
        const firstCategory = Object.keys(grouped)[0] || "";
        setActiveTab(firstCategory);
      })
      .catch((err) => console.error("Error fetching properties:", err))
      .finally(() => setLoading(false)); // stop loader
  }, []);

  //  Handle card count responsive
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 660) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 800) {
        setVisibleCards(2);
      } else if (window.innerWidth <= 1100) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  //  Reset slide index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  //  Auto slide
  useEffect(() => {
    if (!activeTab || !data[activeTab]) return;
    const length = data[activeTab].length;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, activeTab, visibleCards, data]);

  //  Slider controls
  const nextSlide = useCallback(() => {
    if (!activeTab || !data[activeTab]) return;
    const length = data[activeTab].length;
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [activeTab, data]);

  const prevSlide = useCallback(() => {
    if (!activeTab || !data[activeTab]) return;
    const length = data[activeTab].length;
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [activeTab, data]);

  //  Visible cards
  const getVisibleCards = () => {
    if (!activeTab || !data[activeTab]) return [];
    const items = data[activeTab];
    let end = currentIndex + visibleCards;
    if (end <= items.length) {
      return items.slice(currentIndex, end);
    }
    return [...items.slice(currentIndex), ...items.slice(0, end - items.length)];
  };

  //  Init animations
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, [activeTab]);

  return (
    <div className="city-section">
      <h2>THE NEXT MOVE IS YOURS</h2>

      {/* Loader */}
      {loading ? (
        <CatalogMagic row={1} style={{ backgroundColor: "#100b28"}}/> // show skeleton loader
      ) : (
        <>
          {/*  Tabs from DB categories */}
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
            {getVisibleCards().map((item, index) => (
              <div className="listing-card" key={index} data-aos="fade-up">
                <Link to={item.link}>
                  <img className="main_image" src={item.image} alt={item.city} />
                  <div className="listing-info">
                  <img className="dev_logo" src={item.logo} alt={item.city} />
                    <h3>{item.city}</h3>
                    <p>{item.address}</p>
                    <p>
                      {item.bedrooms} | {item.area} sqft
                    </p>
                    <p className="price">{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="control_city_card_left">
            <button onClick={prevSlide}>&#8592;</button>
          </div>
          <div className="control_city_card_right">
            <button onClick={nextSlide}>&#8594;</button>
          </div>

          <div className="view-all-container">
            <button
              className="view-all-button"
              data-aos="zoom-in-up"
              onClick={() =>
                navigate("/projects", { state: { category: activeTab } })
              }
            >
              VIEW ALL LISTINGS
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CityListings;
