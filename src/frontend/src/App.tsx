import { useEffect, useRef } from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ClientResultsSection from './components/sections/ClientResultsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader sectionsRef={sectionsRef} />
      
      <main>
        <section
          id="home"
          ref={(el) => {
            sectionsRef.current['home'] = el;
          }}
        >
          <HeroSection />
        </section>

        <section
          id="about"
          ref={(el) => {
            sectionsRef.current['about'] = el;
          }}
        >
          <AboutSection />
        </section>

        <section
          id="services"
          ref={(el) => {
            sectionsRef.current['services'] = el;
          }}
        >
          <ServicesSection />
        </section>

        <section
          id="portfolio"
          ref={(el) => {
            sectionsRef.current['portfolio'] = el;
          }}
        >
          <PortfolioSection />
        </section>

        <section
          id="client-results"
          ref={(el) => {
            sectionsRef.current['client-results'] = el;
          }}
        >
          <ClientResultsSection />
        </section>

        <section
          id="testimonials"
          ref={(el) => {
            sectionsRef.current['testimonials'] = el;
          }}
        >
          <TestimonialsSection />
        </section>

        <section
          id="contact"
          ref={(el) => {
            sectionsRef.current['contact'] = el;
          }}
        >
          <ContactSection />
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
