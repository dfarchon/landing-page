'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import GameOverview from '@/components/sections/GameOverview';
import Roadmap from '@/components/sections/Roadmap';
import Support from '@/components/sections/Community';
// import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import GetStarted from '@/components/sections/GetStarted';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = useMemo(() => ['hero', 'overview', 'roadmap', 'faq', 'support', 'footer'], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.findIndex(section => section === entry.target.id);
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const handleDotClick = (index: number) => {
    const targetSection = document.getElementById(sections[index]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  return (
    <main className="h-screen overflow-y-auto relative scroll-smooth">
      <Navbar />

      {/* Side page indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-300 ${activeSection === index
                ? 'bg-primary scale-125'
                : 'bg-transparent hover:bg-primary/50'
                }`}
              aria-label={`Jump to ${section} section`}
            />
          ))}
        </div>
      </div>

      <div id="hero" className="snap-start h-screen">
        <Hero />
      </div>
      <div id="overview" className="snap-start min-h-[75vh] section-transition scroll-mt-16">
        <GameOverview />
      </div>
      <div id="getstarted" className="snap-start min-h-screen section-transition scroll-mt-16">
        <GetStarted />
      </div>
      <div id="roadmap" className="snap-start min-h-[75vh] section-transition scroll-mt-16">
        <Roadmap />
      </div>
      {/* <div id="faq" className="snap-start min-h-[75vh] section-transition scroll-mt-16">
        <FAQ />
      </div> */}
      <div id="support" className="snap-start min-h-[75vh] section-transition scroll-mt-16">
        <Support />
      </div>

      <div id="footer" className="min-h-[50vh] flex flex-col justify-end">
        <Footer />
      </div>
    </main>
  );
}
