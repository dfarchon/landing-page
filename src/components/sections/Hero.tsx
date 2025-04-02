'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAtTop, setIsAtTop] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      try {
        setMousePosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      } catch (error) {
        console.error("Mouse move handler error:", error);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Handle scroll for showing/hiding scroll indicator
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      try {
        if (window.scrollY < 50) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      } catch (error) {
        console.error("Scroll handler error:", error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // 处理视频加载错误
  const handleVideoError = () => {
    console.warn("Video failed to load, showing fallback background");
    setVideoError(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            onError={handleVideoError}
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <source src="/df.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute w-full h-full bg-gradient-to-br from-background to-gray-900"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
        )}
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Distant nebula/galaxy effect - keep for additional atmosphere */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(244, 171, 186, 0.5), transparent 35%), radial-gradient(circle at 70% 60%, rgba(157, 141, 241, 0.4), transparent 30%)',
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Welcome to Dark Forest
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            A Decentralized Journey to Conquer the Cosmos — A real‑time strategy game built on EVM using zkSNARKs technology
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="bg-primary hover:bg-primary-light text-black py-3 px-8 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#overview"
                className="bg-secondary hover:bg-secondary-light text-white py-3 px-8 rounded-lg font-medium transition-all inline-block"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - only visible at top of page */}
      <AnimatePresence>
        {isAtTop && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                animate={{ 
                  y: [0, 16, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero; 