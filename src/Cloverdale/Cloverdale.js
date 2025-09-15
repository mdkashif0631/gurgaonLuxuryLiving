import CloverdaleEcosystem from './Components/CloverdaleEcosystem.js'
import CloverdaleMap from './Components/Cloverdalemap.js'
import Cloverdalespr from './Components/Cloverdalespr.js'
import CloverFloorplan from './Components/CloverFloorpaln.js'
import Clovervideo from './Components/Colvervideo.js'
import Connectivity from './Components/Connectivity.js'
import ContactSection from './Components/ContactSection.js'
import Header from './Components/Header'
import Hero from './Components/Hero'

const Cloverdale = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cloverdalespr/>
      <Connectivity/>
      <CloverdaleMap/>
      <CloverFloorplan/>
      <CloverdaleEcosystem/>
      <Clovervideo/>
      <ContactSection/>
      
    </div>
  )
}

export default Cloverdale
