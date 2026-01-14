'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container, Heading, Text, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';
import ImageGallery from './ImageGallery';
import MediaGrid from './MediaGrid';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth parallax effect without blur/fade
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen max-h-screen overflow-hidden bg-gradient-to-br from-white via-light-100 to-accent-cyan/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-blue-700/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-accent-cyan/30 to-accent-lime/20 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Floating music notes/symbols */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {['♪', '♫', '♬', '🎵', '🎶', '🎤'][i]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y }} className="relative z-10 h-full flex items-center">
        <Container className="py-4 px-3 sm:px-4 md:py-6 lg:py-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-accent-cyan/10 border border-blue-500/20 text-dark-700 text-[10px] xs:text-xs sm:text-sm font-medium">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse" />
                  London or Toronto
                </span>
              </div>

              {/* Main heading */}
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  className="mb-2 sm:mb-3 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  animate={false}
                >
                  <span className="block text-dark-400">WE'RE</span>
                  <span className="block bg-gradient-to-r from-blue-500 via-blue-700 to-accent-cyan bg-clip-text text-transparent">
                    INFLUTIK
                  </span>
                  <span className="block text-dark-400">MEDIA</span>
                </Heading>
              </div>

              {/* Subtext */}
              <div>
                <Text size="sm" className="mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0 text-xs xs:text-sm sm:text-base">
                  The biggest data-driven TikTok marketing agency / Music label working across music. Generating <span className="font-bold text-blue-600">110B+ views</span> yearly.
                </Text>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start items-center">
                <a href="#services">
                  <Button variant="gradient" size="sm" className="text-xs sm:text-sm px-4 sm:px-6 !py-2 sm:!py-2.5">
                    Our Services
                  </Button>
                </a>
                <a href="/case-studies">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm px-4 sm:px-6 !py-2 sm:!py-2.5">
                    Case Studies
                  </Button>
                </a>
              </div>

              {/* Stats preview */}
              <div className="mt-3 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { value: '150+', label: 'Artists' },
                  { value: '110B+', label: 'Views' },
                  { value: '130+', label: 'Campaigns' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] xs:text-xs text-dark-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right content - Media gallery */}
            <div className="order-1 lg:order-2 w-full">
              <MediaGrid />
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1 text-dark-400">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
