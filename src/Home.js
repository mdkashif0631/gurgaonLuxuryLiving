import React from 'react'
import HeroSection from './HeroSection';
import FeaturedProjectsCarousel from "./PropertyCard/FeaturedProjectsCarousel";
import CityListings from './CityListings';
import Carousel from './Carousel';
import PropertySlider from './PropertyCard/PropertySlider';
import Header from './Header';
import ContactForm from './About/ContactForm';
import Seo from './Seo';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
            <Seo project = "Luxury Abode"
            desc = "Gurgaon Luxury Living is an independent real estate information and advisory platform. This website is not the official website of any developer. All project-related details."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg"
            link= "/"
            />
            <HeroSection />
            <Header />
            <PropertySlider />
            <FeaturedProjectsCarousel />
            <CityListings />
            <Carousel />
            <ContactForm/>
        </div>
    )
}

export default Home
