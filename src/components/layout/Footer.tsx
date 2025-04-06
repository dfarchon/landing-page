'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-10 bg-dark-blue/80">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/icon.svg"
                  alt="DF Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                  priority
                />
              </motion.div>
              <span className="text-2xl font-bold text-white">Dark Forest MUD</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              A decentralized MMO space conquest game built on EVM chains. Explore infinite procedurally
              generated universe and expand your territory.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/darkforestmud" className="text-white/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
              <Link href="https://discord.gg/darkforest" className="text-white/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </Link>
              <Link href="https://github.com/darkforest-eth" className="text-white/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-4">Game</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-colors">
                  Start Game
                </Link>
              </li>
              <li>
                <Link href="#overview" className="text-white/70 hover:text-primary transition-colors">
                  Game Overview
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-white/70 hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#getting-started" className="text-white/70 hover:text-primary transition-colors">
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://discord.gg/darkforest" className="text-white/70 hover:text-primary transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://x.com/darkforestmud" className="text-white/70 hover:text-primary transition-colors">
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link href="https://github.com/darkforest-eth" className="text-white/70 hover:text-primary transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://mirror.xyz/darkforest" className="text-white/70 hover:text-primary transition-colors">
                  Mirror Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#faq" className="text-white/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="https://docs.darkforest.mud" className="text-white/70 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.darkforest.mud"
                  className="bg-secondary text-white py-1 px-3 rounded-md hover:bg-secondary-light transition-colors inline-block"
                >
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="mailto:support@darkforest.mud" className="text-white/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} DFArchon. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-white/50 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-white/50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 