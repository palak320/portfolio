import "./Hero.css";
import profile from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Palak Yadav</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about building beautiful and functional web applications.
            Let's create something amazing together!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <a href="#projects">View My Work</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#contact">Get In Touch</a>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Palak Yadav" />
        </div>
      </div>
    </section>
  );
}
export default Hero;