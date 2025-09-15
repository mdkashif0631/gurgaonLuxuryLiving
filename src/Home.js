import React from 'react'
import HeroSection from './HeroSection';
import FeaturedProjectsCarousel from "./PropertyCard/FeaturedProjectsCarousel";
import CityListings from './CityListings';
import Carousel from './Carousel';
import PropertySlider from './PropertyCard/PropertySlider';
import Header from './Header';
import ContactForm from './About/ContactForm';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
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
