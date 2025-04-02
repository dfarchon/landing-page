'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import GameOverview from '@/components/sections/GameOverview';
import Roadmap from '@/components/sections/Roadmap';
import Support from '@/components/sections/Community';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import GetStarted from '@/components/sections/GetStarted';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'overview', 'getstarted', 'roadmap', 'faq', 'support'];

  useEffect(() => {
    // 保护性检查，确保代码只在浏览器环境中运行
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      try {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        const newActiveSection = Math.floor(scrollPosition / windowHeight);
        if (newActiveSection !== activeSection && newActiveSection < sections.length) {
          setActiveSection(newActiveSection);
        }
      } catch (error) {
        console.error("Scroll handler error:", error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      // 保护性检查，确保清理函数在组件卸载时正确执行
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection, sections.length]);

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto relative">
      <Navbar />
      
      {/* 侧边页面指示器 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full border-2 border-primary transition-all ${
                activeSection === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-transparent hover:scale-110'
              }`}
              aria-label={`跳到${section}部分`}
            />
          ))}
        </div>
      </div>

      <div id="hero" className="snap-start h-screen">
        <Hero />
      </div>
      <div id="overview" className="snap-start min-h-screen section-transition">
        <GameOverview />
      </div>
      <div id="getstarted" className="snap-start min-h-screen section-transition">
        <GetStarted />
      </div>
      <div id="roadmap" className="snap-start min-h-screen section-transition">
        <Roadmap />
      </div>
      <div id="faq" className="snap-start min-h-screen section-transition">
        <FAQ />
      </div>
      <div id="support" className="snap-start min-h-screen section-transition">
        <Support />
      </div>
      <Footer />
    </main>
  );
}
