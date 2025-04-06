'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type SupporterLogoProps = {
  name: string;
  logo: React.ReactNode;
  link: string;
  delay: number;
};

const SupporterLogo = ({ name, logo, link, delay }: SupporterLogoProps) => {
  return (
    <motion.div
      className="p-6 bg-card-bg rounded-lg shadow-lg border border-primary/20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(244, 171, 186, 0.2)' }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center text-primary mb-3">
          {logo}
        </div>
        <span className="text-white font-medium text-sm">{name}</span>
      </Link>
    </motion.div>
  );
};

const SocialLink = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 py-3 px-6 bg-card-bg rounded-lg hover:bg-primary/20 transition-colors text-white border border-primary/10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-accent-light">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

const Support = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block gradient-text">Support</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            This project is entirely funded by donations and grants. We are grateful for donations and donation commitments from all values-aligned organizations and individuals, which make our development and operations possible.
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">Major Donors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <SupporterLogo
              name="0xPARC"
              link="https://0xparc.org"
              delay={0.5}
              logo={
                <Image
                  src="/0xparc.png"
                  alt="0xPARC Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />
            <SupporterLogo
              name="Optimism"
              link="https://optimism.io"
              delay={0.5}
              logo={
                <Image
                  src="/op.png"
                  alt="Optimism Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />

            <SupporterLogo
              name="Mask Network"
              link="https://mask.io"
              delay={0.5}
              logo={
                <Image
                  src="/mask.svg"
                  alt="Mask Network Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />

              }
            />

            <SupporterLogo
              name="AGLD DAO"
              link="https://adventuregold.org"
              delay={0.5}
              logo={
                <Image
                  src="/AGLDDAO.png"
                  alt="AGLD DAO Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />

            <SupporterLogo
              name="Player donations"
              link=""
              delay={3}
              logo={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              }
            />


          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">Infra Supporters</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            <SupporterLogo
              name="Base"
              link="https://www.base.org/"
              delay={0.5}
              logo={
                <Image
                  src="/base.png"
                  alt="Base Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />

            <SupporterLogo
              name="MUD Engine"
              link="https://mud.dev/"
              delay={0.5}
              logo={
                <Image
                  src="/Mud.png"
                  alt="Mud Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />


            <SupporterLogo
              name="Redstone L2"
              link="https://redstone.xyz/"
              delay={0.5}
              logo={
                <Image
                  src="/Redstone.png"
                  alt="Redstone L2 Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />

              }
            />

            <SupporterLogo
              name="AltLayer"
              link="https://www.altlayer.io/"
              delay={0.5}
              logo={
                <Image
                  src="/altlayer.png"
                  alt="AltLayer Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              }
            />




          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">Join Our Community</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <SocialLink
              href="https://x.com/darkforest_mud"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="X (Twitter)"
            />
            <SocialLink
              href="https://discord.gg/kH725yZPVQ"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              }
              label="Discord"
            />
            <SocialLink
              href="https://github.com/dfarchon"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              }
              label="GitHub"
            />
            <SocialLink
              href="https://mirror.xyz/dfarchon.eth"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>
              }
              label="Mirror Blog"
            />
            <SocialLink
              href="https://dfares.notion.site/DFArchon-One-Pager-TBD-1a7a4dc234338049903fc2568e5ec4fc"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              }
              label="Tutorial"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support; 