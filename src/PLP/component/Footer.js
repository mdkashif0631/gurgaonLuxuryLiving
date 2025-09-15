import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";


const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true }
});

const Footer = () => {
    return (
        <footer className="elan_footer">
            <div className="elan_footer-container">

                <motion.div className="elan_footer-col" {...fadeUp(0.1)}>
                    <h3>OUR PROJECTS</h3>
                    <ul>
                        <li>Residential Projects</li>
                        <li>Commercial Projects</li>
                        <li>Upcoming Projects</li>
                    </ul>
                </motion.div>

                <motion.div className="elan_footer-col" {...fadeUp(0.2)}>
                    <h3>ABOUT US <span className="elan_designline"></span></h3>
                    <ul>
                        <li>About The Company</li>
                        <li>Foundation</li>
                        <li>Elan Care</li>
                        <li>News & Events</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                    </ul>
                </motion.div>

                <motion.div className="elan_footer-col" {...fadeUp(0.3)}>
                    <h3>NEWS & EVENTS</h3>
                    <ul>
                        <li>Awards & Accolades</li>
                        <li>News & Events</li>
                        <li>Media & PR</li>
                    </ul>
                </motion.div>

                <motion.div className="elan_footer-col" {...fadeUp(0.4)}>
                    <h3>CONTACT US</h3>
                    <p>
                        2nd Floor, JMD EMPIRE, Golf Course Rd, Sector 62 , Gurugram
                    </p>
                    <p>Call : +91 9999999999</p>
                    <p>Email : gurgaonluxuryliving12@.com</p>
                </motion.div>
            </div>

            <motion.div className="elan_footer-social" {...fadeUp(0.5)}>
                <a href="/"><FaFacebookF /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaLinkedinIn /></a>
                <a href="/"><FaXTwitter /></a>
                <a href="/"><FaYoutube /></a>
            </motion.div>

            <motion.div className="elan_footer-bottom" {...fadeUp(0.6)}>
                <p>
                    Copyright © 2025 <span>Gurgaon Luxury Living</span> All Rights Reserved
                </p>
                <p>
                    <a href="/">Privacy Policy</a> | <a href="/">Terms & Conditions</a> |{" "}
                    <a href="/">Disclaimer</a>
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
