function Location() {
  return (
    <section className="location section" id="location">
      <div className="page-container">
        <div className="location__intro">
          <p className="eyebrow">The setting</p>

          <h2>
            Close to everything.
            <br />
            Away from it all.
          </h2>
        </div>

        <div className="location__layout">
          <div className="location__image media-frame reveal">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=85"
              alt="Quiet natural landscape surrounding Luma Stay"
              loading="lazy"
            />
          </div>

          <div className="location__content">
            <div className="location__coordinates">
              <span>Coordinates</span>
              <strong>18° 31′ N</strong>
              <strong>73° 51′ E</strong>
            </div>

            <div className="location__copy">
              <p>
                Luma sits quietly between the rhythm of the city and the
                stillness of the landscape. Designed as a place to slow down,
                it is close enough to explore and secluded enough to disappear.
              </p>

              <p>
                Arrive without hurry. Leave with a little more space in your
                thoughts.
              </p>
            </div>

            <div className="location__details">
              <div>
                <span>From the city</span>
                <strong>25 min</strong>
              </div>

              <div>
                <span>From the airport</span>
                <strong>45 min</strong>
              </div>

              <div>
                <span>Nearest trail</span>
                <strong>8 min</strong>
              </div>
            </div>

            <a className="text-link" href="#reserve">
              Plan your arrival <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
