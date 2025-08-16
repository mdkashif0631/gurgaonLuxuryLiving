import React from "react";
import { motion } from "framer-motion";

const EmperorResidence = () => {
  return (
    <section className="residences-section">
      <motion.div
        className="residences-text-content"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="residences-title" style={{color:'#b08968'}}>RESIDENCES</h2>
        <div className="residences-divider"></div>
        <p className="residences-description" style={{color:'white'}}>
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
          src="https://res.cloudinary.com/dif213nbi/image/upload/v1755345977/emperor_image11_oa4vat.jpg"
          alt="Residences"
          className="residences-image"
        />
      </motion.div>
    </section>
  );
};

export default EmperorResidence;
