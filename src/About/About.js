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
          <Seo project="Luxury Abode About"
          desc = "Gurgaon Luxury Living is an independent real estate information and advisory platform. This website is not the official website of any developer. All project-related details."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/jeoy8o6y2svqtxgsnrlq.jpg"
            link= "/about"/>
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
