'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

/*
type StepCardProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const StepCard = ({ number, title, description, icon, delay }: StepCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-card-bg backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(244, 171, 186, 0.2)' }}
    >
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {number}
      </div>
      <div className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};
*/

const GetStarted = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  /*
  const steps = [
    {
      number: 1,
      title: 'Prepare Wallet',
      description: 'Install MetaMask or other EVM-compatible wallet, and get a small amount of xDai for Gas fees.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M18.75 8.25h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
      ),
    },
    // ... 其他步骤代码
  ];
  */

  return (
    <section id="getting-started" className="py-10 relative" ref={sectionRef}>
      {/* Background accent */}
      {/* <div className="absolute top-1/2 left-1/3 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div> */}

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block gradient-text">Get Started</h2>
          {/* <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From zero to hero: six steps to master Dark Forest and embark on your journey to conquer the cosmos
          </p> */}
        </motion.div>

        {/* YouTube Video */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto aspect-video mb-10 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <iframe
            className="absolute w-full h-full top-0 left-0"
            src="https://www.youtube.com/embed/PTd-gDlQqvo"
            title="Dark Forest Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="#"
            className="bg-secondary hover:bg-secondary-light text-white py-3 px-8 rounded-lg font-medium transition-all shadow-lg shadow-secondary/20 inline-flex items-center"
          >
            Read Full Tutorial
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted; 