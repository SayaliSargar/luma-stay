import { useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import HotelIntroduction from './sections/HotelIntroduction';
import SignatureSuites from './sections/SignatureSuites';
import Architecture from './sections/Architecture';
import Experiences from './sections/Experiences';
import Dining from './sections/Dining';
import Gallery from './sections/Gallery';
import Location from './sections/Location';
import Reservation from './sections/Reservation';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="app" id="top">
      <Navigation />
      <Hero />
      <HotelIntroduction />
      <SignatureSuites />
      <Architecture />
      <Experiences />
      <Dining />
      <Gallery />
      <Location />
      <Reservation />
      <Footer />
    </main>
  );
}

export default App;
