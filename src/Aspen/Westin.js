import { useEffect, useState } from "react";
import axios from "axios";
import Hero from './Components/Hero'
import CatalogMagic from '../ContentLoader';
import ProjectHeader from "../ProjectHeader";
import Features from "./Components/Features";
import Overview from "./Components/Overview";
import Amenities from "./Components/Amenities";
import FloorPlans from "./Components/FloorPlan";
import ProjectSlider from "./Components/Slider";
import Testimonials from "./Components/Testimonials";
import Faqs from "./Components/Faqs";
import ContactSection from "./Components/ContactSection";
import Seo from "../Seo";

const Westin = () => {
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
            <Seo project="westin"
                desc="Whiteland Westin Residences Gurgaon is a prestigious residential project in Gurugram, India, developed by Whiteland Corporation in collaboration with Marriott International. It stands out as the largest branded residence and the first standalone residential property in India under the renowned Westin brand."
                img="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758152237/ap1paikujszapdngbtak.webp"
                link="/westin"
            />
            <ProjectHeader project={project} />
            <Hero videoSrc="https://res.cloudinary.com/daa1hgr9j/video/upload/v1758150373/gk1orp7zhmcheopco0ul.mp4" />
            <Features />
            <Overview
                leftImage="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758152237/ap1paikujszapdngbtak.webp"
                logo="https://res.cloudinary.com/daa1hgr9j/image/upload/v1758152236/swxjl9to5iw7ga0wfop0.png"
                heading="India’s Most Iconic Residences"
                text="Whiteland Westin Residences Gurgaon is a prestigious residential project in Gurugram, India, developed by Whiteland Corporation in collaboration with Marriott International. It stands out as the largest branded residence and the first standalone residential property in India under the renowned Westin brand. The project offers an exceptional living experience, combining the best of both worlds - the tranquility of a residential space and the opulence of a five-star hotel."
            />
            <FloorPlans dataset="westin" />
            <Amenities project="westin" />
            <ProjectSlider project="westin" />
            <Testimonials />
            <Faqs />
            <ContactSection />
        </div>
    )
}

export default Westin
