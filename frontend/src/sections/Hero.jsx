function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
          alt="Warmly lit luxury interior with contemporary architecture"
        />
      </div>

      <div className="hero__overlay"></div>

      <div className="hero__content page-container">
        <p className="hero__eyebrow">
          A quiet place · Somewhere considered
        </p>

        <h1 id="hero-title">
          Stay
          <br />
          beautifully.
        </h1>

        <div className="hero__bottom">
          <p>
            A private retreat shaped by architecture,
            nature, and the art of slowing down.
          </p>

          <a href="#rooms" className="hero__link">
            Explore the stay
            <span>↘</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to discover</span>
        <span className="hero__scroll-line"></span>
      </div>
    </section>
  );
}

export default Hero;