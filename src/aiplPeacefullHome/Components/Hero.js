import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <img src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757765699/cash4u4c7euiirheqpts.jpg" alt="Hero Background" className="hero-img" />

      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="hero-title">THE PEACEFUL HOMES</h1>
        <p className="hero-subtitle">Gurugram</p>
      </div>
    </section>
  );
};

export default HeroSection;
