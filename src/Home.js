import React from 'react'
import HeroSection from './HeroSection';
import FeaturedProjectsCarousel from "./PropertyCard/FeaturedProjectsCarousel";
import CityListings from './CityListings';
import Carousel from './Carousel';
import Footer from './Footer';
import PropertySlider from './PropertyCard/PropertySlider';
import Header from './Header';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
            <HeroSection />
            <Header />
            <PropertySlider />
            <FeaturedProjectsCarousel />
            <CityListings />
            <Carousel />
            <Footer />
        </div>
    )
}

export default Home
