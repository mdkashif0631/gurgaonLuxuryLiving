import React from "react";
import { motion } from "framer-motion";
import "./PenthouseShowcase.css";

const PenthouseShowcase = () => {
  return (
    <section className="penthouse-section">
      {/* Left Large Image */}
      <motion.div
        className="penthouse-image-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-presidential/image5"
          alt="Penthouse"
          className="penthouse-image"
        />
      </motion.div>

      {/* Right Text + Small Image */}
      <motion.div
        className="penthouse-text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >

        <motion.img
          src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-presidential/image5"
          alt="Penthouse Small"
          className="penthouse-small-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        />
        <h2 className="penthouse-title">EXQUISITE PENTHOUSE</h2>
        <div className="penthouse-divider"></div>
        <p className="penthouse-description">
          Indulge in opulence with our exclusive penthouses, where every detail offers a tryst with a luxurious lifestyle. Enjoy panoramic views from your personal oasis of luxury.
        </p>
      </motion.div>
    </section>
  );
};

export default PenthouseShowcase;
