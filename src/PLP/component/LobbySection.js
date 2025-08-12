import React from "react";
import { motion } from "framer-motion";
import "./LobbySection.css";

const LobbySection = () => {
  return (
    <section className="lobby-section">
      {/* Left Large Image */}
      <motion.div
        className="lobby-image-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-presidential/imag3"
          alt="Lobby"
          className="lobby-image"
        />
      </motion.div>

      {/* Right Text + Small Image */}
      <motion.div
        className="lobby-text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lobby-title">EXQUISITE LOBBY</h2>
        <div className="lobby-divider"></div>
        <p className="lobby-description">
          The lobby combines contemporary aesthetics with timeless elegance,
          complete with a warm & inviting ambience.
        </p>

        <motion.img
          src="https://res.cloudinary.com/diwgt4zc8/image/upload/f_auto,q_auto/v1/elan-presidential/imag3"
          alt="Lobby Small"
          className="lobby-small-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default LobbySection;
