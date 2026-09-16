function Reservation() {
  return (
    <section className="reservation section" id="reserve">
      <div className="page-container">
        <div className="reservation__frame">
          <div className="reservation__top">
            <p className="eyebrow">Your stay awaits</p>
            <span className="reservation__number">06 / 06</span>
          </div>

          <div className="reservation__main">
            <h2>
              Make some
              <br />
              room for living.
            </h2>

            <p className="reservation__description">
              A few quiet days. A beautiful room. Time that belongs entirely
              to you.
            </p>

            <a className="reservation__button" href="#top">
              <span>Begin your stay</span>
              <span className="reservation__arrow">↗</span>
            </a>
          </div>

          <div className="reservation__bottom">
            <span>Luma Stay</span>
            <span>Reservations · 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
