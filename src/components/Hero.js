import React from "react";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>Hello — I’m Mahmoud Hassan</h1>
        <p className="lead">Ethical Hacking · Programming fundamentals</p>
        <p>
          I design and develop secure, efficient, and scalable digital systems. I enjoy transforming complex technical challenges into practical cybersecurity and software solutions that make systems safer and smarter.        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn outline" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-card">
          <img src="/images/profile.jpg" alt="Your Name" />
          <div className="profile-info">
            <h3>Mahmoud Hassan</h3>
            <p>Cairo, Egypt · Open to work</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;