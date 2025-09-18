import React, { useEffect, useState, useCallback } from "react";
import "./CityListings.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CatalogMagic from "./ContentLoader";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_API_URL;

const CityListings = () => {
  const [activeTab, setActiveTab] = useState("");
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]); // ⭐ store favorite projects
  const navigate = useNavigate();

  // Load favorites from localStorage & remove expired
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const now = Date.now();
    const validFavorites = savedFavorites.filter(
      (fav) => !fav.expiry || fav.expiry > now
    );
    setFavorites(validFavorites);
    localStorage.setItem("favorites", JSON.stringify(validFavorites));

    // Optional: auto-remove expired favorites every minute
    const interval = setInterval(() => {
      const updatedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const now = Date.now();
      const valid = updatedFavorites.filter(
        (fav) => !fav.expiry || fav.expiry > now
      );
      setFavorites(valid);
      localStorage.setItem("favorites", JSON.stringify(valid));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Toggle favorite with 10-minute expiry
  const toggleFavorite = (project) => {
    const exists = favorites.find((fav) => fav.id === project.id);
    if (exists) {
      // Remove if already favorite
      const updated = favorites.filter((fav) => fav.id !== project.id);
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    } else {
      // Add with expiry
      const now = Date.now();
      const expiry = now + 10 * 60 * 1000; // 10 minutes
      const newFav = { ...project, expiry };
      const updated = [...favorites, newFav];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  // Extract bedrooms
  const getBedrooms = (property) => {
    const bhks = [];
    if (property.Beds_bhk) bhks.push(property.Beds_bhk + " BHK");
    if (property.Beds_bhk1) bhks.push(property.Beds_bhk1 + " BHK");
    if (property.Beds_bhk2) bhks.push(property.Beds_bhk2 + " BHK");
    if (property.Beds_bhk3) bhks.push(property.Beds_bhk3 + " BHK");
    if (property.Beds_bhk4) bhks.push(property.Beds_bhk4 + " BHK");
    return bhks.length > 0 ? bhks.join(" | ") : "N/A";
  };

  // Fetch properties
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/properties`)
      .then((res) => res.json())
      .then((properties) => {
        const grouped = properties.reduce((acc, property) => {
          const category = property.Project_category || "Uncategorized";
          if (!acc[category]) acc[category] = [];

          acc[category].push({
            id: property.Project_Name,
            Project_Name: property.Project_Name,
            Locations: `${property.City} ${property.Location || ""}`,
            bedrooms: getBedrooms(property),
            area:
              property.Super_Area_bhk ||
              property.Carpet_Area_bhk ||
              property.Built_Up_Area_bhk ||
              "",
            min_price: property.Start_price
              ? `₹${(property.Start_price/10000000).toFixed(2)} CR* ONWARD`
              : "Price on request",
            Main_Image: property.Main_Image,
            logo: property.Developer_Logo,
            max_price: Number(property.Start_price) || 0,
            link: `/${property.Link}`,
          });

          return acc;
        }, {});

        // Add custom filter "UNDER ₹ 3 CR"
        const under3cr = [];
        Object.values(grouped).forEach((list) => {
          list.forEach((item) => {
            if (item.startPrice > 0 && item.startPrice <= 30000000) {
              under3cr.push(item);
            }
          });
        });
        if (under3cr.length > 0) grouped["UNDER ₹ 3 CR"] = under3cr;

        setData(grouped);
        const firstCategory = Object.keys(grouped)[0] || "";
        setActiveTab(firstCategory);
      })
      .catch((err) => console.error("Error fetching properties:", err))
      .finally(() => setLoading(false));
  }, []);

  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 660) setVisibleCards(1);
      else if (window.innerWidth <= 800) setVisibleCards(2);
      else if (window.innerWidth <= 1100) setVisibleCards(3);
      else setVisibleCards(4);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Reset slide index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto slide
  useEffect(() => {
    if (!activeTab || !data[activeTab]) return;
    const length = data[activeTab].length;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, activeTab, visibleCards, data]);

  // Slider controls
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

  // Visible cards
  const getVisibleCards = () => {
    if (!activeTab || !data[activeTab]) return [];
    const items = data[activeTab];
    let end = currentIndex + visibleCards;
    if (end <= items.length) return items.slice(currentIndex, end);
    return [...items.slice(currentIndex), ...items.slice(0, end - items.length)];
  };

  // Init animations
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, [activeTab]);

  return (
    <div className="city-section">
      <h2>THE NEXT MOVE IS YOURS</h2>

      {loading ? (
        <CatalogMagic row={1} style={{ backgroundColor: "#100b28" }} />
      ) : (
        <>
          {/* Tabs */}
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

          {/* Listings */}
          <div className="listings">
            {getVisibleCards().map((item, index) => (
              <div className="listing-card" key={index} data-aos="fade-up">
                <Link to={item.link}>
                  <img className="main_image" src={item.Main_Image} alt={item.Project_Name} />
                  <div className="listing-info">
                    <img className="dev_logo" src={item.logo} alt={item.Project_Name} />
                    <h3>{item.Project_Name}</h3>
                    <p>{item.Locations}</p>
                    <p>
                      {item.bedrooms} | {item.area} sqft
                    </p>

                    {/* Heart toggle */}
                    <div
                      className="heart-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(item);
                      }}
                    >
                      {favorites.find((fav) => fav.id === item.id) ? (
                        <FaHeart className="filled-heart" />
                      ) : (
                        <CiHeart className="empty-heart" />
                      )}
                    </div>

                    <p className="price">{item.min_price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="control_city_card_left">
            <button onClick={prevSlide}>&#8592;</button>
          </div>
          <div className="control_city_card_right">
            <button onClick={nextSlide}>&#8594;</button>
          </div>

          {/* View All */}
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
