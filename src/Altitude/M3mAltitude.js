import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectDescription from './components/ProjectDescription'
import Glimpses from './components/Glimpses'
import ImmersiveTour from './components/ImmersiveTour'
import Premier from './components/Premier'
import Connectivity from './components/Connectivity.js'
import ProjectConfiguration from './components/ProjectConfiguration.js'
import InterestPopup from '../form/InterestPopup.js'

const M3mAltitude = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectDescription />
      <Glimpses />
      <ImmersiveTour />
      <Premier />
      <Connectivity />
      <ProjectConfiguration />
      <InterestPopup projectName='m3maltitude' />

    </div>
  )
}

export default M3mAltitude
