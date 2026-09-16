function Dining() {
  return (
    <section className="dining section" id="dining">
      <div className="page-container">
        <div className="dining__header">
          <div className="dining__label">
            <span>05</span>
            <span>Dining</span>
          </div>

          <div className="dining__heading reveal">
            <p className="eyebrow">From the garden to the table</p>

            <h2>
              Food with
              <br />
              a sense of place.
            </h2>
          </div>
        </div>

        <div className="dining__feature">
          <div className="dining__image media-frame reveal">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
              alt="Elegant dining table prepared for an evening meal"
              loading="lazy"
            />
          </div>

          <div className="dining__content reveal">
            <span className="dining__index">01 / Dining room</span>

            <h3>The Long Table</h3>

            <p>
              Our kitchen follows the rhythm of the seasons.
              Ingredients are sourced from nearby growers and
              transformed into simple, generous dishes designed
              to be shared slowly.
            </p>

            <p>
              Breakfast begins with the first light. Dinner
              stretches into the evening.
            </p>

            <a href="#reserve" className="text-link">
              Discover dining
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="dining__details">
          <div>
            <span>Breakfast</span>
            <strong>07:00 — 10:30</strong>
          </div>

          <div>
            <span>Lunch</span>
            <strong>12:30 — 15:00</strong>
          </div>

          <div>
            <span>Dinner</span>
            <strong>19:00 — 22:30</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dining;