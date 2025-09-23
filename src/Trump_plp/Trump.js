import React, { useState } from "react";
import "./Trump.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloorPlan from "./components/FloorPlan";
import Amenities from "./components/Amenities";
import ContactForm from "./components/ContactForm";
import ProjectDescription from "./components/ProjectDescription";
import ProjectHighlights from "./components/ProjectHighlights";
import InteriorsCarousel from "./components/InteriorsCarousel";
import TrumpBookingForm from "./components/TrumpBookingForm";
import { SlEnvolopeLetter } from "react-icons/sl";
import RegisterInterestForm from "../ElanEmperor/elanEmpire/components/RegisterInterestForm";
import Seo from "../Seo";

export default function Trump() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="site-root">
      <Seo project = "trumptower"/>
      <Header />
      <Hero />
      <ContactForm />
      <ProjectDescription/>
      <ProjectHighlights/>
      <FloorPlan />
      <Amenities />
      <InteriorsCarousel/>
      <TrumpBookingForm/>
      <div className={`side-popup ${showForm ? "open" : ""}`}>
        <span className="popup-close" onClick={() => setShowForm(false)}>
          &times;
        </span>
        <RegisterInterestForm closeForm={() => setShowForm(false)} />
      </div>

      {/* Button to open popup */}
      <div
        className="enqurie_popup"
        onClick={() => setShowForm(true)}
        title="Register Your Interest"
      >
        <SlEnvolopeLetter />
      </div>
    </div>
  );
}
