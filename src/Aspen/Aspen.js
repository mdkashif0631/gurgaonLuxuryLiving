import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectHeader from "../ProjectHeader";
import CatalogMagic from "../ContentLoader";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Overview from "./Components/Overview";
import Amenities from "./Components/Amenities";
import FloorPlans from "./Components/FloorPlan";
import ProjectSlider from "./Components/Slider";
import ConstructionUpdate from "./Components/ConstructionUpdate";
import Testimonials from "./Components/Testimonials";
import Faqs from "./Components/Faqs";
import ContactSection from "./Components/ContactSection";
import Seo from "../Seo";

const Aspen = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/properties`);
        const aspenProject = res.data.find(
          (proj) => proj.Project_Name?.toLowerCase() !== "the trump residences"
        );

        if (aspenProject) {
          setProject(aspenProject);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [BASE_URL]);

  if (loading) return <div><CatalogMagic/></div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Seo project = "aspen"
      desc = "For the redefined sense of living, The Aspen offers luxury 3/4 BHK residences and duplex penthouses, with state-of-the-art amenities for an exceptional living experience. Nestled in the most promising sector of Gurugram, Sector-76, Whiteland’s residential project offers a lifestyle that is unheard of & truly inspiring."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg"
            link= "/aspen"
      />
      <ProjectHeader project={project} />
      <Hero videoSrc="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757983390/fnvg5kicehthp39z36cz.mp4"/>
      <Features/>
      <Overview
                leftImage="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984788/foxjilqgkzzjqejsvxlk.jpg"
                logo="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757984787/wrumsxae9fx1oxervctw.svg"
                heading="A place where one's aspirations, pleasure, and lifestyle find their perfect home!"
                text="For the redefined sense of living, The Aspen offers luxury 3/4 BHK residences
          and duplex penthouses, with state-of-the-art amenities for an exceptional living
          experience. Nestled in the most promising sector of Gurugram, Sector-76,
          Whiteland’s residential project offers a lifestyle that is unheard of & truly
          inspiring."
            />
      <Amenities project = "aspen"/>
      <FloorPlans dataset="aspen"/>
      <ProjectSlider project = "aspen"/>
      <ConstructionUpdate project = "https://res.cloudinary.com/daa1hgr9j/video/upload/v1757991479/ljiemtwn3cjnxizdqbdr.mp4" />
      <Testimonials/>
      <Faqs/>
      <ContactSection/>
    </div>
  );
};

export default Aspen;
