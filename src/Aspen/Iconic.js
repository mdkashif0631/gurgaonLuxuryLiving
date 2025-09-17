import { useEffect, useState } from "react";
import axios from "axios";
import ProjectHeader from '../ProjectHeader'
import ProjectSlider from "./Components/Slider";
import ConstructionUpdate from "./Components/ConstructionUpdate";
import Testimonials from "./Components/Testimonials";
import Faqs from "./Components/Faqs";
import ContactSection from "./Components/ContactSection";
import CatalogMagic from "../ContentLoader";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Overview from "./Components/Overview";
import Amenities from "./Components/Amenities";

const Iconic = () => {
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

    if (loading) return <div><CatalogMagic /></div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <ProjectHeader project={project} />
            <Hero videoSrc="https://res.cloudinary.com/daa1hgr9j/video/upload/v1758068870/lzojhq8nqwadxdobinls.mp4" />
            <Features />
            <Overview
                leftImage="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758070137/kht0zrmgedwioqpnjomn.webp"
                logo="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758070137/c42n67ccxvqssalowfds.svg"
                heading="The Tower of Power!"
                text="When at The Aspen Iconic, you get to enjoy the uninterrupted high life to the fullest. A breathtaking 42-storeyed building, The Aspen Iconic is Whiteland’s residential project that invites you to taste the lavish lifestyle."
            />
            <Amenities project = "iconic"/>
            <ProjectSlider project = "iconic"/>
            <ConstructionUpdate project = "https://res.cloudinary.com/daa1hgr9j/video/upload/v1757991479/ljiemtwn3cjnxizdqbdr.mp4" />
            <Testimonials/>
            <Faqs/>
            <ContactSection/>
        </div>
    )
}

export default Iconic
