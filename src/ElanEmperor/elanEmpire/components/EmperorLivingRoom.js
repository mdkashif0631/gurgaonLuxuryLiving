import React from "react";
import { motion } from "framer-motion";

const EmperorLivingRoom = () => {
  return (
    <section className="lobby-section" style={{backgroundColor:'#050e1d'}}>
      {/* Left Large Image */}
      <motion.div
        className="lobby-image-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="https://res.cloudinary.com/dif213nbi/image/upload/v1755345978/Emperor_image15_dzrhzg.jpg"
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
        <h2 className="lobby-title" style={{color:'#b08968'}}>EXQUISITE LOBBY</h2>
        <div className="lobby-divider" style={{backgroundColor:'#b08968'}}></div>
        <p className="lobby-description" style={{color:'white'}}>
          The lobby combines contemporary aesthetics with timeless elegance,
          complete with a warm & inviting ambience.
        </p>

        <motion.img
          src="https://res.cloudinary.com/dif213nbi/image/upload/v1755345978/Emperor_image15_dzrhzg.jpg"
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

export default EmperorLivingRoom;
