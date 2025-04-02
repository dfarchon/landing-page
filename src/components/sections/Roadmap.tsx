'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Roadmap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const roadmapData = [
    {
      version: 'Ares v0.1.1-v0.1.2',
      date: '2023',
      title: 'New Artifacts & Gameplay',
      description: 'Introduced artifacts like Fire/Ice Links, Stellar Shield, and the Pink Bomb. Enhanced ZK circuit and implemented artifact purchasing system with cooldown mechanics.'
    },
    {
      version: 'Ares v0.1.3-v0.1.4',
      date: 'Q2-Q3 2024',
      title: 'Economy & Collaboration',
      description: 'Introduced the Kardashev Artifact for resource transfers, implemented economic features including planet purchases, and developed the Union System for player alliances.'
    },
    {
      version: 'MUD v0.1.1-v0.1.2',
      date: 'Q4 2024',
      title: 'Engine Migration & AI',
      description: 'Migrated to the MUD engine with dynamic tick rate system, optimized artifact integration, and introduced Guild System, account delegation, and Sophon AI integration.'
    }
  ];

  return (
    <section id="roadmap" className="py-24 relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block gradient-text">Version Evolution</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            Dark Forest has evolved from testing phase to mature version, with each step optimizing performance and gameplay.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-10 h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
              {/* v0.1-v0.5 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">v0.1-v0.5</h3>
                <p className="text-sm text-white/70">2020</p>
                <p className="text-xs text-white/60">Foundation</p>
              </div>
              
              {/* v0.6 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-violet-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">v0.6</h3>
                <p className="text-sm text-white/70">2021-2022</p>
                <p className="text-xs text-white/60">Expanded Rounds</p>
              </div>
              
              {/* Ares v0.1.1-v0.1.2 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">Ares v0.1.1-v0.1.2</h3>
                <p className="text-sm text-white/70">2023</p>
                <p className="text-xs text-white/60">New Artifacts</p>
              </div>
              
              {/* Ares v0.1.3-v0.1.4 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-cyan-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">Ares v0.1.3-v0.1.4</h3>
                <p className="text-sm text-white/70">2024 (Q2-Q3)</p>
                <p className="text-xs text-white/60">Economy & Unions</p>
              </div>
              
              {/* MUD v0.1.1 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">MUD v0.1.1</h3>
                <p className="text-sm text-white/70">2024 (Oct)</p>
                <p className="text-xs text-white/60">MUD Migration</p>
              </div>
              
              {/* MUD v0.1.2 */}
              <div className="text-center pt-16 relative">
                <div className="absolute left-1/2 top-9 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2"></div>
                <h3 className="font-bold text-lg">MUD v0.1.2</h3>
                <p className="text-sm text-white/70">2024 (Nov)</p>
                <p className="text-xs text-white/60">Guilds & AI</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmapData.map((item, i) => (
              <motion.div
                key={i}
                className="bg-dark-blue/30 backdrop-blur-sm p-6 rounded-xl border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold">{item.version}</span>
                  <span className="text-white/60 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-white/70 italic">
            Follow our <a href="#" className="text-accent-light hover:text-accent underline">changelog</a> for the latest version updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 