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

const Support = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="min-h-screen pt-3 pb-3 relative flex items-center" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 mt-20">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block gradient-text">Support</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            This project is entirely funded by donations and grants. We are grateful for donations and donation commitments from all values-aligned organizations and individuals, which make our development and operations possible.
          </p>

          <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
            If you would like to support our activities, please contact <a href="https://t.me/cherryblue1024" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@cherryblue1024</a>
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://t.me/cherryblue1024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-light text-white py-4 px-8 rounded-lg font-medium text-lg transition-all shadow-lg shadow-secondary/20 inline-flex items-center"
            >
              Reach out to cherryblue
            </a>
          </div>
        </motion.div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-white mb-4">Major Donors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-white mb-4">Infra Supporters</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

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
      </div>
    </section>
  );
};

export default Support; 