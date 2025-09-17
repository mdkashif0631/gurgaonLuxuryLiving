import './Hero.css';

const Hero = ({ videoSrc }) => {
  return (
    <div className='aspen_hero'>
      <video autoPlay muted loop playsInline className="aspen_hero_video">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero
