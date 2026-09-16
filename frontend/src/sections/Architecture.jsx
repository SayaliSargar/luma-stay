function Architecture() {
  return (
    <section className="architecture section" id="architecture">
      <div className="page-container">
        <div className="architecture__intro">
          <div className="architecture__label">
            <span>03</span>
            <span>Architecture & place</span>
          </div>

          <div className="architecture__statement reveal">
            <p className="eyebrow">Built around the landscape</p>

            <h2>
              Architecture
              <br />
              that breathes.
            </h2>
          </div>
        </div>

        <div className="architecture__hero media-frame reveal">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
            alt="Contemporary architecture surrounded by natural light"
            loading="lazy"
          />

          <div className="architecture__caption">
            <span>South courtyard</span>
            <span>01 / 04</span>
          </div>
        </div>

        <div className="architecture__story">
          <div className="architecture__story-image media-frame reveal">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
              alt="Quiet architectural interior with natural materials"
              loading="lazy"
            />
          </div>

          <div className="architecture__story-content reveal">
            <p className="eyebrow">Material / Light / Space</p>

            <p>
              Luma was conceived as a sequence of quiet moments.
              Walls frame the landscape, natural materials soften
              the architecture, and changing light becomes part of
              the experience throughout the day.
            </p>

            <p>
              Nothing competes with the place itself. The architecture
              simply creates room to notice it.
            </p>

            <a href="#experiences" className="text-link">
              Explore the surroundings
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;