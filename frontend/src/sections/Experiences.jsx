import { useState } from 'react';

const experiences = [
  {
    number: '01',
    title: 'Morning Rituals',
    category: 'Slow mornings',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '02',
    title: 'Into the Wild',
    category: 'Nature & discovery',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '03',
    title: 'The Long Table',
    category: 'Food & gathering',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '04',
    title: 'After Hours',
    category: 'Wellness & rest',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85'
  }
];

function Experiences() {
  const [activeImage, setActiveImage] = useState(experiences[0].image);

  return (
    <section className="experiences section" id="experiences">
      <div className="page-container">
        <div className="experiences__header">
          <div className="experiences__label">
            <span>04</span>
            <span>Experiences</span>
          </div>

          <div className="experiences__heading">
            <p className="eyebrow">Take your time</p>

            <h2>
              Days worth
              <br />
              remembering.
            </h2>
          </div>
        </div>

        <div className="experiences__layout">
          <div className="experiences__image media-frame">
            <img
              src={activeImage}
              alt="Luma Stay experience"
            />
          </div>

          <div className="experiences__list">
            {experiences.map((experience) => (
              <a
                href="#experience-detail"
                className="experience"
                key={experience.number}
                onMouseEnter={() => setActiveImage(experience.image)}
                onFocus={() => setActiveImage(experience.image)}
              >
                <span className="experience__number">
                  {experience.number}
                </span>

                <span className="experience__main">
                  <span className="experience__title">
                    {experience.title}
                  </span>

                  <span className="experience__category">
                    {experience.category}
                  </span>
                </span>

                <span className="experience__arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;