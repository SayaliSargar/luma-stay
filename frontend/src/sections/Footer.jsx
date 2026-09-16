function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="site-footer__top">
          <a className="site-footer__brand" href="#top" aria-label="Luma Stay home">
            <span>LUMA</span>
            <small>STAY</small>
          </a>

          <p className="site-footer__statement">
            A slower way
            <br />
            to stay.
          </p>
        </div>

        <div className="site-footer__grid">
          <div>
            <p className="site-footer__label">Explore</p>
            <a href="#rooms">Rooms</a>
            <a href="#experiences">Experiences</a>
            <a href="#dining">Dining</a>
            <a href="#location">Location</a>
          </div>

          <div>
            <p className="site-footer__label">Contact</p>
            <a href="mailto:stay@lumastay.example">stay@lumastay.example</a>
            <span>+00 123 456 789</span>
          </div>

          <div>
            <p className="site-footer__label">Follow</p>
            <a href="#top">Instagram ↗</a>
            <a href="#top">Journal ↗</a>
          </div>

          <div className="site-footer__back">
            <a href="#top" aria-label="Back to top">
              ↑
            </a>
            <span>Back to top</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Luma Stay</span>
          <span>Designed as a UI showcase</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
