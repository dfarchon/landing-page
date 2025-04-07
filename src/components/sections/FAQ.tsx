'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
};

const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      className="border-b border-primary/10 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-medium text-white">{question}</h3>
        <svg
          className={`w-6 h-6 text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-4 text-white/70">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: 'What are zkSNARKs?',
      answer: 'zkSNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) is a cryptographic technology that allows one party to prove possession of certain information without revealing the information itself. In Dark Forest, this technology is used to implement the fog of war mechanism, allowing players to verify their moves are valid without revealing their positions.'
    },
    {
      question: 'How is the game priced?',
      answer: 'The basic Dark Forest experience is free, but on-chain operations require a small Gas fee. We chose to deploy on Gnosis Chain to reduce these fees and make the game more accessible. Some advanced features may require additional fees, but the core game experience always remains accessible.'
    },
    {
      question: 'Which networks are supported?',
      answer: 'Dark Forest is currently deployed on Gnosis Chain (formerly xDai), which is an Ethereum-compatible sidechain offering low transaction fees and fast confirmation times. We plan to support more EVM-compatible chains in the future, such as Arbitrum, Optimism, and Base.'
    },
    {
      question: 'How do I start playing?',
      answer: 'To start playing, you need an EVM-compatible wallet (such as MetaMask) and a small amount of xDai tokens for Gas fees. Visit our official website, connect your wallet, and follow the guided process to create your first planet. We provide detailed tutorials to help you familiarize yourself with the game mechanics.'
    },
    {
      question: 'Where is game data stored?',
      answer: 'All critical game data is stored on the blockchain, ensuring fairness and transparency. This means your assets and game progress are truly owned by you and do not depend on centralized servers. Some non-critical data may be stored locally or using decentralized storage solutions to optimize performance.'
    },
    {
      question: 'What strategies can I use?',
      answer: 'Dark Forest encourages various strategies, from expansionism to defensive development, from diplomacy to trade. The game design allows players to customize strategies according to their own style. The community has developed many plugins and tools that can help players implement complex strategies and automate common tasks.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen py-8 relative flex items-center" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block gradient-text">Frequently Asked Questions</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Learn more about Dark Forest before exploring the endless universe
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-card-bg backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 italic">
            More questions? Visit our <a href="https://dfares.notion.site/Dark-Forest-MUD-v0-1-3-player-guide-1cea4dc2343380feb449c3b621fd5640" className="text-accent-light hover:text-accent underline">
              complete docs
            </a> or join <a href="https://discord.gg/kH725yZPVQ" className="text-accent-light hover:text-accent underline">
              community discord</a> to get answers
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 