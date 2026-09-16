function HotelIntroduction() {
  return (
    <section className="introduction section" id="about">
      <div className="page-container">
        <div className="introduction__grid">
          <div className="introduction__label">
            <span>01</span>
            <span>The stay</span>
          </div>

          <div className="introduction__content reveal">
            <p className="eyebrow">
              Designed for stillness
            </p>

            <h2>
              A slower way
              <br />
              to stay.
            </h2>

            <p className="introduction__description">
              Luma is a quiet retreat where architecture,
              landscape, and hospitality exist in balance.
              Every detail has been considered to create
              space for the things that matter: time,
              light, conversation, and rest.
            </p>

            <a href="#rooms" className="text-link">
              Discover Luma
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="introduction__image media-frame reveal">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
            alt="Minimal luxury hotel interior with natural materials"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default HotelIntroduction;