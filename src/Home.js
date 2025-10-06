import React from 'react'
import HeroSection from './HeroSection';
import FeaturedProjectsCarousel from "./PropertyCard/FeaturedProjectsCarousel";
import CityListings from './CityListings';
import Carousel from './Carousel';
import PropertySlider from './PropertyCard/PropertySlider';
import Header from './Header';
import ContactForm from './About/ContactForm';
import ProjectConnectDrawer from './ProjectConnectDrawer';
// import Seo from './Seo';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
            {/* <Seo project = "Buy, Sell & Rent Properties in Gurgaon | The Luxury Abode Real Estate"
            desc = "Find the best residential, commercial, and plot properties in Gurgaon with The Luxury Abode. Explore verified listings, new projects, and investment opportunities today."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg"
            link= ""
            /> */}
            <HeroSection />
            <Header />
            <PropertySlider />
            <FeaturedProjectsCarousel />
            <CityListings />
            <Carousel />
            <ContactForm/>
            <ProjectConnectDrawer/>
        </div>
    )
}

export default Home
