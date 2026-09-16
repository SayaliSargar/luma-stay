const suites = [
  {
    number: '01',
    name: 'The Courtyard Suite',
    description:
      'A calm interior opening onto a private garden, designed around morning light and quiet afternoons.',
    details: 'King bed · Private courtyard · 58 m²',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85'
  },
  {
    number: '02',
    name: 'The Garden Room',
    description:
      'A generous room where natural textures, soft light, and views of the surrounding landscape create an intimate retreat.',
    details: 'King bed · Garden view · 46 m²',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85'
  },
  {
    number: '03',
    name: 'The Luma Residence',
    description:
      'Our most expansive stay, combining generous living spaces with a private terrace and uninterrupted views.',
    details: 'King bed · Private terrace · 82 m²',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85'
  }
];

function SignatureSuites() {
  return (
    <section className="suites section" id="rooms">
      <div className="page-container">
        <div className="suites__header">
          <div className="suites__label">
            <span>02</span>
            <span>The rooms</span>
          </div>

          <div>
            <p className="eyebrow">Stay a little longer</p>

            <h2>
              Spaces made
              <br />
              for stillness.
            </h2>
          </div>
        </div>

        <div className="suites__list">
          {suites.map((suite) => (
            <article className="suite" key={suite.number}>
              <div className="suite__number">
                {suite.number}
              </div>

              <div className="suite__image media-frame">
                <img
                  src={suite.image}
                  alt={suite.name}
                  loading="lazy"
                />
              </div>

              <div className="suite__content">
                <h3>{suite.name}</h3>

                <p className="suite__description">
                  {suite.description}
                </p>

                <p className="suite__details">
                  {suite.details}
                </p>

                <a href="#reserve" className="text-link">
                  View room
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureSuites;