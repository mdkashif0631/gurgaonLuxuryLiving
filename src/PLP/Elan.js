import React from 'react'
import Header from './component/Header';
import ExceptionalConcept from './component/ExceptionalConcept';
import ContentSection from './component/ContentSection';
import PersonalRetreat from './component/PersonalRetreat';
import ConceptSection from './component/ConceptSection';
import LocationAdvantages from './component/LocationAdvantages';
import ProjectVideo from './component/ProjectVideo';
import Residences from './component/Residences';
import ProjectImage from './component/ProjectImage';
import LobbySection from './component/LobbySection';
import PenthouseShowcase from './component/PenthouseShowcase';
import Footer from '../Footer.js';
import Disclaimer from './component/Disclaimer.js';
import PartnersSection from './component/PartnersSection.js';
import HeroSection from './component/HeroSection.js';

const Elan = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ExceptionalConcept/>
      <ContentSection/>
      <PersonalRetreat/>
      <ConceptSection/>
      <LocationAdvantages/>
      <ProjectVideo/>
      <Residences/>
      <ProjectImage/>
      <LobbySection/>
      <PenthouseShowcase/>
      <ProjectVideo/>
      <PersonalRetreat/>
      <Residences/>
      <PartnersSection/>
      <Disclaimer/>
      <Footer/>
    </div>
  )
}

export default Elan;
