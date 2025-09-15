import React, { useState } from "react";
import "./CloverdaleMap.css";

const CloverdaleMap = () => {
  const [activeTab, setActiveTab] = useState("connectivity");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="cloverdale-map-container">
      {/* Sidebar */}
      <div className={`cloverdale-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="cloverdale-tabs">
          <button
            className={activeTab === "connectivity" ? "active" : ""}
            onClick={() => {
              setActiveTab("connectivity");
              setSidebarOpen(true);
            }}
          >
            Key Connectivity
          </button>
          <button
            className={activeTab === "seamless" ? "active" : ""}
            onClick={() => {
              setActiveTab("seamless");
              setSidebarOpen(true);
            }}
          >
            Seamless Access
          </button>
        </div>

        <div className="cloverdale-sidebar-content">
          {activeTab === "connectivity" && (
            <>
              <h3>SPR METRO:</h3>
              <p>Proposed along SPR, Sector 55/56 to Vatika Chowk.</p>

              <h3>DELHI RRTS:</h3>
              <p>Boosting connectivity across Delhi, UP, Haryana & Rajasthan.</p>

              <h3>MRTS:</h3>
              <p>
                Proposed metro line linking Rajiv Chowk, SPR & Vatika Chowk,
                ending at Manesar.
              </p>

              <h3>JUNGLE SAFARI:</h3>
              <p>Close proximity to Jungle Safari.</p>

              <h3>HELIPORT:</h3>
              <p>10 minutes’ drive to the upcoming futuristic heliport.</p>
            </>
          )}

          {activeTab === "seamless" && (
            <>
              <h3>Multi Utility Corridor:</h3>
              <p>Ensuring fast links across Gurugram.</p>

              <h3>NH-48:</h3>
              <p>Well connected highway for Delhi & Jaipur.</p>

              <h3>Dwarka Expressway:</h3>
              <p>Quick drive to IGI Airport & Aerocity.</p>
            </>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div className={`cloverdale-map ${sidebarOpen ? "shrink" : ""}`}>
        <img
          src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098064/thlb5ktutjceznm1mtz5.webp" // replace with your map image
          alt="Cloverdale Map"
        />

        {/* Slide button */}
        <button
          className="cloverdale-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "❮" : "❯"}
        </button>
      </div>
    </div>
  );
};

export default CloverdaleMap;
