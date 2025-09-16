import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectHeader from "../ProjectHeader";
import CatalogMagic from "../ContentLoader";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Overview from "./Components/Overview";
import Amenities from "./Components/Amenities";
import FloorPlans from "./Components/FloorPlan";
import AspenSlider from "./Components/Slider";
import ConstructionUpdate from "./Components/ConstructionUpdate";
import Testimonials from "./Components/Testimonials";
import Faqs from "./Components/Faqs";
import ContactSection from "./Components/ContactSection";

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
          (proj) => proj.Project_Name?.toLowerCase() === "the trump residences"
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
      <ProjectHeader project={project} />
      <Hero/>
      <Features/>
      <Overview/>
      <Amenities/>
      <FloorPlans/>
      <AspenSlider/>
      <ConstructionUpdate/>
      <Testimonials/>
      <Faqs/>
      <ContactSection/>
    </div>
  );
};

export default Aspen;
