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
import Seo from "../Seo";
import InterestPopup from "../form/InterestPopup";

export default function Trump() {

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
      <InterestPopup projectName='trumptowers'/>
      
    </div>
  );
}
