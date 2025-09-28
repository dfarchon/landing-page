'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center bg-card-bg backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(244, 171, 186, 0.2)' }}
    >
      <div className="bg-primary/20 p-4 rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const GameOverview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="min-h-screen py-8 relative flex items-center">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4" ref={sectionRef}>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block gradient-text"> Dark Forest Punk Key Highlights </h2>


        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            title="Fog of War via zkSNARKs"
            description="The Fog of War is implemented using zkSNARKs on a public blockchain. ZK allows for the verification of move operations between planets without revealing their coordinates."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.05 11a9 9 0 1 1 .5 4m-.5-4v-1a1 1 0 0 1 1-1h1m-2 5h2m-2 3h2" opacity="0.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 12v.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12v.01" />
              </svg>
            }
            delay={1}
          />

          <FeatureCard
            title="Onchain Procedural Generation"
            description="Onchain procedural generation creates an infinite, uniquely populated universe directly on the blockchain. Every planet, resource, and spatial feature is algorithmically generated without centralized servers."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c1.88 2.17 2.77 5.01 2.5 7.84m-5 0C9.23 8.01 10.12 5.17 12 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c-2.17 1.88-5.01 2.77-7.84 2.5m0-5C15.99 9.23 18.83 10.12 21 12" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c2.17-1.88 5.01-2.77 7.84-2.5m0 5C8.01 14.77 5.17 13.88 3 12" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-1.88-2.17-2.77-5.01-2.5-7.84m5 0c.27 2.83-.62 5.67-2.5 7.84" />
                <circle cx="17" cy="7" r="1" />
                <circle cx="7" cy="7" r="1" />
                <circle cx="17" cy="17" r="1" />
                <circle cx="7" cy="17" r="1" />
              </svg>
            }
            delay={2}
          />

          <FeatureCard
            title="decentralized Game"
            description="All game content is controlled by smart contracts, and every player action interacts directly with the contracts, ensuring fairness and immutability."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7V5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12H3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12h-2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.05 7.05l1.41 1.41" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.54 15.54l1.41 1.41" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.05 16.95l1.41-1.41" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.54 8.46l1.41-1.41" />
              </svg>
            }
            delay={3}
          />
          <FeatureCard
            title="Community-driven Development"
            description="Since Q1 2022, the official team has not released any new game versions. All updates and version iterations have been driven by the community. The game code is fully open source, allowing community members to develop, fix, and improve based on the open-source code."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            delay={1}
          />

          <FeatureCard
            title="MMO RTS"
            description="As an MMORTS game, players need to devise sound strategies, manage planetary resources, and defend or conquer other planets. Players can engage in large-scale space battles, ultimately striving for galactic supremacy."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="8" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7l2-2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15l-2 2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17l2-2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7L5 5" />
                <circle cx="12" cy="12" r="2" strokeWidth={2} />
              </svg>
            }
            delay={2}
          />

          <FeatureCard
            title="Free For All"
            description="All players directly compete with each other, with no teams or alliances restricting them. Alliances and diplomatic relationships may arise, but overall, everyone competes in an open and chaotic universe."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            delay={1}
          />
        </div>
      </div>
    </section>
  );
};

export default GameOverview; 