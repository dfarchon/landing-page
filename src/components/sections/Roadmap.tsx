'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Roadmap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const roadmapData = [
    {
      version: 'DF v0.3-v0.5',
      date: '2020',
      title: 'Foundation',
      team: 'Dark Forest Official Team',
      description: 'A cutting-edge experimental application combining zkSNARKs with blockchain, where all in-game actions are fully onchain. The game also supports a plugin system, allowing for development based on open APIs on the frontend. Established the foundation for future versions.'
    },
    {
      version: 'DF v0.6.1 - v0.6.5',
      date: '2021-2022 Q1',
      title: 'The Seekers\' Journey',
      team: 'Dark Forest Official Team',
      description: 'Dark Forest official team introduced different types of space types, planet types, and artifacts with various functions, greatly enriching the game\'s content.Each round also features new game mechanics and updates, while third - party developer tools are continuously being optimized.In v0.6.5, the game was migrated to the Diamonds standard(ERC2535).'
    },
    {
      version: 'DF-ARES v0.1.1-v0.1.2',
      date: '2023',
      title: 'New Artifacts & Gameplay',
      team: 'DFArchon Team',
      description: 'Introduced artifacts like Fire/Ice Links, Stellar Shield, and the Pink Bomb. Enhanced ZK circuit and implemented artifact purchasing system with cooldown mechanics.'
    },
    {
      version: 'DF-ARES v0.1.3-v0.1.4',
      date: '2024 Q1 - Q2',
      title: 'Economy & Collaboration',
      team: 'DFArchon Team',
      description: 'Introduced the Kardashev Artifact for resource transfers, implemented economic features including planet purchases, and developed the Union System for player alliances.'
    },
    {
      version: 'DF-MUD v0.1.1',
      date: '2024 Q3',
      title: 'Engine Migration & Tick Rate System',
      team: 'DFArchon Team',
      description: 'The core gameplay, including space types, planet types, and silver mining, has been migrated to the MUD engine, with the introduction of a dynamic Tick Rate System for enhanced flexibility and strategy.'
    },
    {
      version: 'DF-MUD v0.1.2',
      date: '2024 Q4',
      title: 'Guilds & Delegation & Artifacts',
      team: 'DFArchon Team',
      description: 'Introduced a guild system with account delegation functionality, and developed modules for rapid development and integration of artifacts, enabling key artifacts.'
    },
    {
      version: 'DF-MUD v0.1.3',
      date: '2025 Q1',
      title: 'Not yet released',
      team: 'DFArchon Team',
      description: 'Not yet released'
    },
    {
      version: 'DF-MUD Ultimate',
      date: 'The Final Frontier',
      title: 'The Infinite Universe',
      team: 'Community Driven',
      description: 'Introducing the Onchain Reality Universe (ORU) - a fully decentralized, infinitely expanding digital world. People can build their own civilizations, form alliances, engage in interstellar politics, and shape the future of this ever-evolving universe.'
    }
  ];

  return (
    <section className="min-h-screen py-8 relative flex items-center" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block gradient-text">Version Evolution</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Dark Forest has evolved from testing phase to mature version, with each step optimizing performance and gameplay.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500"></div>

          {/* Timeline items */}
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-dark-blue"
                style={{
                  background: index === 0 ? '#9333ea' : // purple-600
                    index === 1 ? '#8b5cf6' : // violet-500
                      index === 2 ? '#3b82f6' : // blue-500
                        index === 3 ? '#06b6d4' : // cyan-500
                          index === 4 ? '#14b8a6' : // teal-500
                            '#10b981' // emerald-500
                }}
              ></div>

              {/* Content */}
              <div className={`w-6/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-dark-blue/30 backdrop-blur-sm p-3 rounded-xl border border-primary/20 transition-all hover:border-primary/40">
                  <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-primary font-bold text-sm">{item.version}</span>
                    <span className="text-white/60 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <div className={`flex items-center gap-1 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {item.team}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-6/12"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/70 italic">
            Follow our <a href="https://dfares.notion.site/Dev-Versions-Overview-1ada4dc2343380ada5b1c28ea74ead48" className="text-accent-light hover:text-accent underline">changelog</a> for the latest version updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 