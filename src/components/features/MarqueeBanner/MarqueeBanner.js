'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MarqueeBanner = ({ text = "WHAT THE F#@K IS SOUNDWAVE MEDIA?", speed = 25 }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  return (
    <section ref={containerRef} className="relative py-8 overflow-hidden">
      {/* Holographic/gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 via-accent-magenta/20 to-accent-violet/20">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer bg-[length:200%_100%]" />
      </div>

      {/* First marquee row */}
      <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="text-2xl md:text-4xl font-display font-bold text-dark-900/80">
              {text}
            </span>
            <span className="text-accent-magenta text-3xl">✦</span>
          </div>
        ))}
      </motion.div>

      {/* Second marquee row (reverse direction) */}
      <motion.div style={{ x: x2 }} className="flex whitespace-nowrap mt-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="text-xl md:text-3xl font-display font-bold text-dark-700/60">
              {text}
            </span>
            <span className="text-accent-cyan text-2xl">★</span>
          </div>
        ))}
      </motion.div>

      {/* Decorative gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
};

export default MarqueeBanner;
