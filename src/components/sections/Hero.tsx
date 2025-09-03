'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// Add a global type declaration for our test function
declare global {
  interface Window {
    setCountdownTest: ((seconds: number) => void) | null;
  }
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAtTop, setIsAtTop] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  console.log(countdown);
  console.log(timeElapsed);

  const videoRef = useRef<HTMLVideoElement>(null);
  const targetDateRef = useRef<Date>(new Date("2025-07-04T13:00:00Z")); // Store target date in a ref

  // Countdown timer
  useEffect(() => {
    // For testing: create a function to set the countdown to a specific time
    window.setCountdownTest = (seconds: number) => {
      console.log(`Setting countdown to ${seconds} seconds remaining...`);
      targetDateRef.current = new Date(new Date().getTime() + seconds * 1000);
      console.log(`Countdown will end in ${seconds} seconds.`);
    };

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDateRef.current.getTime() - now.getTime();

      if (difference > 0) {
        // Still counting down
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
        setCountdownEnded(false);
      } else {
        // Countdown has ended, switch to counting up
        setCountdownEnded(true);
        const elapsedDifference = Math.abs(difference);

        const days = Math.floor(elapsedDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedDifference % (1000 * 60)) / 1000);

        setTimeElapsed({ days, hours, minutes, seconds });
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial update
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
      // Also remove the test function when component unmounts
      if (typeof window !== 'undefined') {
        window.setCountdownTest = null;
      }
    };
  }, []);

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

    // Initial state based on scroll position
    if (window.scrollY > 0) {
      setIsAtTop(false);
    }

    let hasScrolled = false;

    const handleScroll = () => {
      try {
        // If we've already scrolled once, never show the indicator again
        if (hasScrolled) return;

        if (window.scrollY > 0) {
          setIsAtTop(false);
          hasScrolled = true; // Remember that user has scrolled
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
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
      <div className="container mx-auto px-4 z-10 -mt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
            Dark Forest MUD
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-5 max-w-3xl mx-auto">
            A space-themed decentralized RTS game built on EVM with zkSNARKs  the prototype of onchain reality universe
          </h2>


          {/* <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4 text-white/90 drop-shadow-lg">
              {countdownEnded ? 'Game Started' : 'New Round Countdown'}
            </h3>
            <motion.div
              key={countdownEnded ? timeElapsed.seconds : countdown.seconds}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 0.3,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }}
              className="flex justify-center gap-6 text-white"
            >
              <div className="text-center">
                <div className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {countdownEnded
                    ? String(timeElapsed.days).padStart(2, '0')
                    : String(countdown.days).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80 drop-shadow-lg">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {countdownEnded
                    ? String(timeElapsed.hours).padStart(2, '0')
                    : String(countdown.hours).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80 drop-shadow-lg">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {countdownEnded
                    ? String(timeElapsed.minutes).padStart(2, '0')
                    : String(countdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80 drop-shadow-lg">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {countdownEnded
                    ? String(timeElapsed.seconds).padStart(2, '0')
                    : String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-80 drop-shadow-lg">Seconds</div>
              </div>
            </motion.div>
          </div> */}

          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-red-500">
              Dark Forest MUD v0.1.5 is expected to be held on Optimism Mainnet in Q4 2025
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <div
                className="bg-primary hover:bg-primary-light text-black py-6 px-16 rounded-2xl font-bold text-2xl md:text-3xl transition-all shadow-xl shadow-primary/30 inline-block w-full sm:w-auto text-center min-w-[280px] cursor-pointer"
                onClick={() => {
                  if (countdownEnded) {
                    window.open('https://r4-pyrope.dfmud.xyz', '_blank');
                  } else {
                    window.open('https://twitter.com/intent/follow?screen_name=darkforest_mud', '_blank');
                  }
                }}
              >
                {countdownEnded ? (
                  <div className="flex flex-col items-center justify-center">
                    <span>Enter the Universe</span>
                    <div className="text-sm mt-1">
                      <span>dfmud v0.1.4</span>
                      <span> on Testnet</span>
                    </div>
                    {/* <Image src="/base.png" alt="Base" width={24} height={24} /> */}
                  </div>
                ) : 'Follow us on X'}
              </div>
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