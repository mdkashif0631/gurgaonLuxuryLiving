import React from "react";
import { motion } from "framer-motion";
import "./Residences.css";

const Residences = () => {
  return (
    <section className="residences-section">
      <motion.div
        className="residences-text-content"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="residences-title">RESIDENCES</h2>
        <div className="residences-divider"></div>
        <p className="residences-description">
          Each Residence is impeccably designed for magnificent living, tucked
          away from the hustle bustle of city life.
        </p>
      </motion.div>

      <motion.div
        className="residences-image-container"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img
          src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-presidential/image4"
          alt="Residences"
          className="residences-image"
        />
      </motion.div>
    </section>
  );
};

export default Residences;
