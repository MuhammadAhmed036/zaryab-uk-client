'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Container } from '@/components/ui';

// Brand logos - using actual client logos from public/images/client logos
const brandsRow1 = [
  { name: 'Sony Music', logo: '/images/client logos/Sony music.png' },
  { name: 'Warner Music Group', logo: '/images/client logos/warner-music-group-logo-png-transparent.png' },
  { name: 'Columbia Records', logo: '/images/client logos/Columbia_Records_Colored_Logo.svg.png' },
  { name: 'The Orchard', logo: '/images/client logos/The_Orchard_Logo..png' },
  { name: 'Create Music Group', logo: '/images/client logos/Create_Music_Group_Logo.png' },
  { name: 'AAO Records', logo: '/images/client logos/AAO Records.webp' },
];

const brandsRow2 = [
  { name: 'Isakai Records', logo: '/images/client logos/Isakai records.avif' },
  { name: 'QIA', logo: '/images/client logos/QIA logo.jpg' },
  { name: 'Robots + Humans', logo: '/images/client logos/Robots + Humans logo.jpg' },
  { name: 'SoundOn', logo: '/images/client logos/soundon logo.webp' },
  { name: 'The Other Songs', logo: '/images/client logos/The Other Songs logo.png' },
];

const BrandLogo = ({ brand, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center px-4 sm:px-8 md:px-12 py-2 sm:py-4 flex-shrink-0 group cursor-pointer"
      whileHover={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-accent-cyan/20 to-blue-700/20 rounded-2xl blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
        transition={{ duration: 0.3 }}
      />
      
      {brand.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[180px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
        />
      ) : (
        <span className="text-white/60 font-display font-bold text-sm sm:text-lg md:text-2xl whitespace-nowrap group-hover:text-white transition-all duration-300 relative z-10">
          {brand.name}
        </span>
      )}
    </motion.div>
  );
};

const Brands = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects for decorative elements
  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Triple the brands arrays for seamless infinite scroll
  const duplicatedRow1 = [...brandsRow1, ...brandsRow1, ...brandsRow1];
  const duplicatedRow2 = [...brandsRow2, ...brandsRow2, ...brandsRow2];

  return (
    <section 
      ref={sectionRef}
      id="brands" 
      className="relative py-12 sm:py-16 md:py-32 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          style={{ y: decorY }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: decorY, rotate: decorRotate }}
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-accent-cyan/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Section Header */}
      <Container className="relative z-10 mb-8 sm:mb-12 md:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            className="inline-block text-blue-500 font-mono text-xs sm:text-sm tracking-widest mb-2 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            TRUSTED BY THE BEST
          </motion.span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-6">
            OUR <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-accent-cyan bg-clip-text text-transparent">CLIENTS</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We've partnered with world-leading brands and record labels to create viral moments.
          </p>
        </motion.div>
      </Container>

      {/* Animated Logo Marquee Container */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        <div ref={containerRef} className="relative rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-dark-800/50 backdrop-blur-sm overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-32 bg-gradient-to-r from-dark-800 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-32 bg-gradient-to-l from-dark-800 to-transparent z-10 pointer-events-none" />
          
          {/* First row - scrolling right to left */}
          <div className="py-3 sm:py-4 md:py-6">
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -100 * brandsRow1.length],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedRow1.map((brand, index) => (
                <BrandLogo key={`row1-${brand.name}-${index}`} brand={brand} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Center decorative line */}
          <div className="relative h-px mx-2 sm:mx-4 md:mx-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
        </div>

        {/* Second row - scrolling left to right */}
        <div className="py-3 sm:py-4 md:py-6">
          <motion.div
            className="flex items-center"
            animate={{
              x: [-100 * brandsRow2.length, 0],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedRow2.map((brand, index) => (
              <BrandLogo key={`row2-${brand.name}-${index}`} brand={brand} index={index} />
            ))}
          </motion.div>
        </div>
        </div>
      </div>

      {/* Bottom stats */}
      <Container className="relative z-10 mt-8 sm:mt-12 md:mt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16"
        >
          {[
            { value: '7800+', label: 'Creators' },
            { value: '10M$+', label: 'Spent on creators' },
            { value: '50+', label: 'Record Labels' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-blue-500 to-accent-cyan bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs sm:text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Brands;
