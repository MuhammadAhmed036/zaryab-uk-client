'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container, Heading, Text, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';
import ImageGallery from './ImageGallery';

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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-light-100 to-accent-cyan/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-magenta/30 to-accent-violet/20 rounded-full blur-3xl"
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
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-violet/20 to-accent-magenta/10 rounded-full blur-3xl"
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
      <motion.div style={{ y }} className="relative z-10">
        <Container className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-magenta/10 to-accent-cyan/10 border border-accent-magenta/20 text-dark-700 text-sm font-medium">
                  <span className="w-2 h-2 bg-accent-magenta rounded-full animate-pulse" />
                  Based in Your City, Heard Worldwide
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div variants={fadeInUp}>
                <Heading
                  as="h1"
                  size="3xl"
                  className="mb-6"
                  animate={false}
                >
                  <span className="block text-dark-400">WE'RE</span>
                  <span className="block bg-gradient-to-r from-accent-magenta via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                    INFLUTIK
                  </span>
                  <span className="block text-dark-400">MEDIA</span>
                </Heading>
              </motion.div>

              {/* Subtext */}
              <motion.div variants={fadeInUp}>
                <Text size="lg" className="mb-8 max-w-xl mx-auto lg:mx-0">
                  The biggest data-driven TikTok marketing agency working across 
                  music and personal branding. Generating <span className="font-bold text-accent-magenta">100B+ views</span> yearly.
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a href="#services">
                  <Button variant="gradient" size="lg">
                    Our Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </a>
                <a href="/team">
                  <Button variant="outline" size="lg">
                    Meet The Team
                  </Button>
                </a>
              </motion.div>

              {/* Stats preview */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                {[
                  { value: '500+', label: 'Artists' },
                  { value: '5B+', label: 'Views' },
                  { value: '100+', label: 'Campaigns' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-accent-magenta to-accent-violet bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-dark-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right content - Image gallery */}
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageGallery />
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-dark-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
