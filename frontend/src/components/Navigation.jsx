import { useState } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Rooms', href: '#rooms' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'Location', href: '#location' }
  ];

  return (
    <header className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
      <a className="site-nav__brand" href="#top" aria-label="Luma Stay home">
        <span>LUMA</span>
        <small>STAY</small>
      </a>

      <nav className="site-nav__links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="site-nav__reserve" href="#reserve">
        Reserve
      </a>

      <button
        className="site-nav__menu-button"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav__mobile" aria-label="Mobile navigation">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a href="#reserve" onClick={() => setMenuOpen(false)}>
          Reserve
        </a>
      </nav>
    </header>
  );
}

export default Navigation;