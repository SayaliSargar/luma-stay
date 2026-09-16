const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    alt: 'Warm contemporary hotel interior',
    className: 'gallery__item gallery__item--large'
  },
  {
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    alt: 'Minimal hotel bedroom',
    className: 'gallery__item gallery__item--small'
  },
  {
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85',
    alt: 'Forest surrounding the retreat',
    className: 'gallery__item gallery__item--medium'
  },
  {
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    alt: 'Natural material interior detail',
    className: 'gallery__item gallery__item--medium gallery__item--offset'
  }
];

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="page-container">
        <div className="gallery__header">
          <p className="eyebrow">A collection of moments</p>

          <h2>
            Luma,
            <br />
            in detail.
          </h2>

          <p className="gallery__intro">
            Light changes. Seasons move. The experience is
            never quite the same twice.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <figure
              className={`${item.className} reveal`}
              key={item.image}
            >
              <div className="media-frame">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>

              <figcaption>
                0{index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;