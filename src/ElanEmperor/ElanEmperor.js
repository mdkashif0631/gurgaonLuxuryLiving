import React, { useState } from 'react';
import './ElanEmperor.css';
// import Elanempire from './elanEmpire/Elanempire';
import Header from './elanEmpire/components/Header';
import HeroSection from './elanEmpire/components/HeroSection';
import Landmark from './elanEmpire/components/Landmark';
import ConceptSection from './elanEmpire/components/ConceptSection';
import RegisterInterestForm from './elanEmpire/components/RegisterInterestForm';
import { SlEnvolopeLetter } from 'react-icons/sl';
import Illustrious from './elanEmpire/components/Illustrious';
import { ResortLiving } from './elanEmpire/components/ResortLiving';
import { GlobalConsultants } from './elanEmpire/components/GlobalConsultants';
import LifeStyle from './elanEmpire/components/LifestyleSection';
import Footer from '../Footer';
import LocationEmperor from './elanEmpire/components/LocationEmperor';
import EmperorVideo from './elanEmpire/components/EmperorVideo';
import EmperorResidence from './elanEmpire/components/EmperorResidence';
import EmperorImage from './elanEmpire/components/EmperorImage';
import EmperorLivingRoom from './elanEmpire/components/EmperorLivingRoom';
import EmperorVideo2 from './elanEmpire/components/EmperorVideo2';
import EmperorRetreat from './elanEmpire/components/EmperorRetreat';
import EmperorPartner from './elanEmpire/components/EmperorPartner';
// import Life_style from './elanEmpire/components/LifeStyle';

function App() {
    const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Landmark/>
      <Illustrious/>
      <ResortLiving/>
      <GlobalConsultants/>
      <LifeStyle/>
      {/* <Life_style/> */}
      <ConceptSection/>
      <LocationEmperor/>
      <EmperorVideo/>
      <EmperorResidence/>
      <EmperorImage/>
      <EmperorLivingRoom/>
      <EmperorVideo2/>
      <EmperorRetreat/>
      <EmperorPartner/>
      <div className={`side-popup ${showForm ? "open" : ""}`}>
        <span className="popup-close" onClick={() => setShowForm(false)}>
          &times;
        </span>
        <RegisterInterestForm />
      </div>
      <div
        className="enqurie_popup"
        onClick={() => setShowForm(true)}
        title="Register Your Interest"
      >
        <SlEnvolopeLetter />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
