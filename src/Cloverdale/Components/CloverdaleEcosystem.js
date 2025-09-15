import React from "react";
import { motion } from "framer-motion";
import "./CloverdaleEcosystem.css";

const CloverdaleEcosystem = () => {
  return (
    <section id="ecosystem" className="cloverdale-eco-container">
      {/* LEFT CONTENT */}
      <motion.div
        className="cloverdale-eco-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          A COMPLETE <br /> ECOSYSTEM THAT <br /> ELEVATES CONVENIENCE <br /> AND
          LIFESTYLE
        </h2>
        <p>
          Cloverdale SPR integrates retail, offices, and recreational spaces to
          elevate daily living. Discover convenience at your doorstep with
          curated shopping zones, workspaces, cafés, and more — all within the
          same address. This thoughtfully planned ecosystem offers a vibrant
          lifestyle that complements the modern urban pace. Precertified as IGBC
          Platinum and rated EDGE Advanced, Cloverdale SPR reflects a strong
          commitment to sustainable, environmentally responsible development
          alongside luxurious urban living.
        </p>

        <div className="cloverdale-eco-links">
          <span>RESIDENTIAL</span> | <span>RETAIL</span> | <span>OFFICES</span>{" "}
          | <span>LIFESTYLE</span>
        </div>

        <div className="cloverdale-eco-logos">
          <img src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098045/vmanmqbz9emdia0uidml.svg" alt="Edge Logo" />
          <img src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098045/rbhk3yi59nkbu8nj5l2n.png" alt="IGBC Logo" />
        </div>
      </motion.div>

      {/* RIGHT CONTENT - ONLY ONE IMAGE */}
      <motion.div
        className="cloverdale-eco-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="cloverdale-eco-img"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757104221/ydqulfo6jpge4mmvvtxn.webp" alt="Cloverdale Ecosystem" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CloverdaleEcosystem;
