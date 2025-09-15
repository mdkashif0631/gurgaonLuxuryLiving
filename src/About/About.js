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
