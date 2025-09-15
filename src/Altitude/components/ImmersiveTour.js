// ImmersiveTour.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ImmersiveTour.css";

const ImmersiveTour = () => {
  const [activeTab, setActiveTab] = useState("virtual");

  return (
    <div className="immersive-container">
      <motion.h2
        className="immersive-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Immersive Tour
      </motion.h2>

      {/* Tab Buttons */}
      <motion.div
        className="tab-buttons"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button
          className={`tab-btn ${activeTab === "virtual" ? "active" : ""}`}
          onClick={() => setActiveTab("virtual")}
        >
          Virtual Tour
        </button>
        <button
          className={`tab-btn ${activeTab === "update" ? "active" : ""}`}
          onClick={() => setActiveTab("update")}
        >
          Construction Update
        </button>
        <button
          className={`tab-btn ${activeTab === "milestone" ? "active" : ""}`}
          onClick={() => setActiveTab("milestone")}
        >
          Construction Milestone
        </button>
      </motion.div>

      {/* Content Area */}
      <motion.div
        key={activeTab} // triggers animation on change
        className="video-thumbnail"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {activeTab === "virtual" && (
          <video autoPlay muted loop playsInline className="video-img">
            <source
              src="https://res.cloudinary.com/dif213nbi/video/upload/v1755458650/WhatsApp_Video_2025-08-14_at_12.06.46_12ce1d65_r2b3pa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {activeTab === "update" && (
          <video autoPlay muted loop playsInline className="video-img">
            <source
              src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1755501053/fmcxovmz4rncit9fzedd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {activeTab === "milestone" && (
          <img
            src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1755501108/ckvnbxun6ttsgqrtsjcu.webp"
            alt="Construction Milestone"
            className="video-img"
          />
        )}
      </motion.div>
    </div>
  );
};

export default ImmersiveTour;
