import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import PriceSection from "./components/PriceSection";
import FloorPlan from "./components/FloorPlan";
import Amenities from "./components/Amenities";
import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
import Footer from '../Footer.js';
import "./Trump.css";
import ProjectDescription from "./components/ProjectDescription";
import ProjectHighlights from "./components/ProjectHighlights";
import InteriorsCarousel from "./components/InteriorsCarousel";
import TrumpBookingForm from "./components/TrumpBookingForm";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Trump() {
  return (
    <div className="site-root">
      <Header />
      <Hero />
      <ContactForm />
      <ProjectDescription/>
      <ProjectHighlights/>
      <FloorPlan />
      <Amenities />
      <InteriorsCarousel/>
      {/* <PriceSection /> */}
      <TrumpBookingForm/>
      {/* <Footer /> */}
      <Footer/>
      <div className="enqurie_popup">
        <SlEnvolopeLetter />
      </div>
    </div>
  );
}
