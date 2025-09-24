import { useEffect, useState } from "react";
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

const Blissville = () => {
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

    if (loading) return <div><CatalogMagic /></div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <Seo project="aspen"
                desc="Whiteland Blissville has set a new standard for low-rise luxury floors. This Whiteland residential project is an ideal one to spend quality time with your family while enjoying the various spaces like the gymnasium, indoor badminton court, library, and more! The luxury low-rise floors at Blissville are homes that you have always aspired to live in."
                img="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120524/htbawvrjaotrd5oircdo.jpg"
                link="/blissville"
            />
            <ProjectHeader project={project} />
            <Hero videoSrc="https://res.cloudinary.com/daa1hgr9j/video/upload/v1758120155/mffp8djebo49nv5nkolb.mp4" />
            <Features />
            <Overview
                leftImage="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120524/htbawvrjaotrd5oircdo.jpg"
                logo="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120523/bolwj9hyetcx5epmydja.svg"
                heading="Bliss awaits you in your new abode!"
                text="Whiteland Blissville has set a new standard for low-rise luxury floors. This Whiteland residential project is an ideal one to spend quality time with your family while enjoying the various spaces like the gymnasium, indoor badminton court, library, and more! The luxury low-rise floors at Blissville are homes that you have always aspired to live in."
            />
            <Amenities project="blissville" />
            <FloorPlans dataset="blissville" />
            <ProjectSlider project="blissville" />
            <ConstructionUpdate project="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757991479/ljiemtwn3cjnxizdqbdr.mp4" />
            <Testimonials />
            <Faqs />
            <ContactSection />
        </div>
    )
}

export default Blissville
