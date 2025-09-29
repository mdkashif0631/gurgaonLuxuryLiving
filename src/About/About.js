import React, { useEffect } from 'react'
import AboutHero from './AboutHero'
import Header from '../Header'
import AboutStats from './AboutStats'
import AboutLeadership from './AboutLeadership'
import QuoteSection from './QuoteSection'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'
import Agent from './Agent'
import JoinForm from './JoinForm'
import { AgentPotential } from './AgentPotential'
import { useLocation } from 'react-router-dom'
import Seo from '../Seo'

export default function About () {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
    return (
        <div>
          <Seo project="About Us | Trusted Real Estate Consultants in Gurgaon – The Luxury Abode"
          desc = "The Luxury Abode is a leading real estate company in Gurgaon, dedicated to helping clients buy, sell, and invest in premium properties with trust and transparency."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg"
            link= "about"/>
            <Header />
            <AboutHero />
            <AboutStats />
            <AboutLeadership />
            <QuoteSection/>
            <Agent />
            <AgentPotential/>
            <JoinForm/>
            <Testimonials />
            <ContactForm/>
        </div>
    )
}
