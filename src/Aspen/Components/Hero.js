import './Hero.css';

const Hero = () => {
  return (
    <div className='aspen_hero'>
      <video autoPlay muted loop playsInline className="aspen_hero_video">
        <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757983390/fnvg5kicehthp39z36cz.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero
