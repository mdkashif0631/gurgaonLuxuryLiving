import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./ListedProjects.css";
import Header from "./Header";
import { FaFilter } from "react-icons/fa6";
// import Loader from "./Loader";
import CatalogMagic from "./ContentLoader";
import Seo from "./Seo";

const BASE_URL = process.env.REACT_APP_API_URL;

const ListedProjects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // if category is passed → show that one, else default to "ALL"
  const selectedCategory = location.state?.category || "ALL";

  useEffect(() => {
    fetch(`${BASE_URL}/properties`)
      .then((res) => res.json())
      .then((properties) => {
        // Group projects by category
        const grouped = properties.reduce((acc, property) => {
          const category = property.Project_category || "Uncategorized";
          if (!acc[category]) acc[category] = [];

          acc[category].push({
            city: property.Project_Name,
            link: `/${property.Link}`, // dynamic route for details
            address: `${property.City} ${property.Location || ""}`,
          bedrooms: getBedrooms(property),
          logo: property.Developer_Logo,
            area:
              property.Super_Area_bhk ||
              property.Carpet_Area_bhk ||
              property.Built_Up_Area_bhk ||
              "",
            price: property.Start_price
              ? `₹${(property.Start_price / 10000000).toFixed(2)} CR* ONWARD`
              : "Price on request",
            startPrice: Number(property.Start_price) || 0, // for filtering
            image: property.Main_Image,
          });

          return acc;
        }, {});

        //Extra filter: UNDER ₹ 3 CR
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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setLoading(false);
      });
  }, []);

  const getBedrooms = (property) => {
    const bhks = [];
    if (property.Beds_bhk) bhks.push(property.Beds_bhk + " BHK");
    if (property.Beds_bhk1) bhks.push(property.Beds_bhk1 + " BHK");
    if (property.Beds_bhk2) bhks.push(property.Beds_bhk2 + " BHK");
    if (property.Beds_bhk3) bhks.push(property.Beds_bhk3 + " BHK");
    if (property.Beds_bhk4) bhks.push(property.Beds_bhk4 + " BHK");
    return bhks.length > 0 ? bhks.join(" | ") : "N/A";
  };

  if (loading) {
    return <div className="loading"><CatalogMagic style={{ backgroundColor: "#100b28"}}/></div>;
  }

  // Flatten all projects if ALL
  const allProjects = Object.values(data).flat();
  const projects =
    selectedCategory === "ALL" ? allProjects : data[selectedCategory] || [];

  return (
    <section className="listed_project_container">
      <Seo
      project = "The Luxury Abode"
            desc = "The Luxury Abode is an independent real estate information and advisory platform. This website is not the official website of any developer. All project-related details."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg"
            link= "/project"
      />
      <a href="/" className="logo_position fixed">
        <img
          className="logo_box"
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1755514395/tu9ltsfqdjmxdz9uekoo.png"
          alt="gll_logo"
        />
      </a>
      <Header />
      <div className="listed_projects">
        <h2>
          {selectedCategory === "ALL"
            ? "All Projects"
            : `${selectedCategory} Projects`}
        </h2>

        {/* Navbar */}
        <nav className="listed_project_navbar">
          <span
            className={selectedCategory === "ALL" ? "active" : ""}
            onClick={() => navigate("/projects", { state: { category: "ALL" } })}
          >
            ALL
          </span>
          {Object.keys(data).map((cat) => (
            <span
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => navigate("/projects", { state: { category: cat } })}
            >
              {cat}
            </span>
          ))}
          <span onClick={() => navigate("/filter")}>
            <FaFilter className="project_filter" />
          </span>
        </nav>

        {/* Project List */}
        <div className="listed_project-grid">
          {projects.length > 0 ? (
            projects.map((item, index) => (
              <div className="listed_project-card" key={index}>
                <Link to={item.link}>
                  <img src={item.image} alt={item.city} />
                  <div className="listed_detail">
                    <div className="dev_logo">
                    <img  src={item.logo} alt={item.city} />
                    </div>
                    <h3>{item.city}</h3>
                    <p>{item.address}</p>
                    <p>
                      {item.bedrooms} | {item.area} sqft
                    </p>
                    <p className="listed_price">{item.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No projects found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListedProjects;
