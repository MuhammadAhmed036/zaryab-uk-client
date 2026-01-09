'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Section, Container, Heading, Badge, Card } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const pressItems = [
  {
    source: 'Business Insider',
    quote: 'A TikTok Empire.',
    color: 'lime',
  },
  {
    source: 'Distractify',
    quote: 'A viral sensation.',
    color: 'magenta',
  },
  {
    source: 'Shorty Awards',
    quote: 'Gold Honor - TikTok Presence (2021)',
    color: 'cyan',
  },
  {
    source: 'Fast Company',
    quote: '"Brands That Matter" Honoree (2023)',
    color: 'magenta',
  },
  {
    source: 'The New Yorker',
    quote: 'An intuitive understanding of its audience.',
    color: 'cyan',
  },
  {
    source: 'Adweek',
    quote: 'The media company that has become synonymous with Gen Z itself.',
    color: 'lime',
  },
  {
    source: 'Medium',
    quote: 'A deep understanding of what makes TikTok, well, Tik.',
    color: 'magenta',
  },
  {
    source: 'Rolling Stone',
    quote: 'The premier content brand for Generation Z.',
    color: 'cyan',
  },
  {
    source: 'Forbes',
    quote: 'A new age MTV.',
    color: 'lime',
  },
];

const PressCard = ({ item, index }) => {
  const colorClasses = {
    lime: 'bg-accent-lime/20 border-accent-lime/30 hover:bg-accent-lime/30',
    magenta: 'bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30',
    cyan: 'bg-accent-cyan/20 border-accent-cyan/30 hover:bg-accent-cyan/30',
  };

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${colorClasses[item.color]}`}
    >
      {/* Source badge */}
      <div className="mb-4">
        <span className="text-xs font-bold text-dark-900 uppercase tracking-wider">
          {item.source}
        </span>
      </div>

      {/* Quote */}
      <div className="relative">
        <span className="text-3xl text-dark-400/30 absolute -top-2 -left-1">"</span>
        <p className="text-dark-800 font-medium pl-4">
          {item.quote}
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
        <div className={`absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8 ${
          item.color === 'lime' ? 'bg-accent-lime/40' :
          item.color === 'magenta' ? 'bg-blue-500/40' :
          'bg-accent-cyan/40'
        }`} />
      </div>
    </motion.div>
  );
};

const Press = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    axis: 'x',
  });

  return (
    <Section id="press" background="white" className="py-24">
      <Container>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Heading size="lg" animate={false}>
              HOT OFF THE PRESS
            </Heading>
          </motion.div>

          {/* Navigation arrows */}
          <motion.div variants={fadeInUp} className="flex gap-3 mt-4 md:mt-0">
            <button className="w-12 h-12 rounded-full border-2 border-dark-300 flex items-center justify-center hover:bg-dark-900 hover:text-white hover:border-dark-900 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-dark-300 flex items-center justify-center hover:bg-dark-900 hover:text-white hover:border-dark-900 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Scrollable Press Cards */}
        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pressItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-72 snap-start relative">
              <PressCard item={item} index={index} />
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Press;
