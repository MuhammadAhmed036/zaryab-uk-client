'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Heading, Card } from '@/components/ui';
import { useCountUp } from '@/hooks/useAnimations';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Artists',
    variant: 'lime',
    mediaType: 'slideshow',
    mediaImages: [
      '/images/artist slideshow/8f9117a26dc60853c8f862ca81ff635a (1).png',
      '/images/artist slideshow/ab6761610000e5eb9eff991f88390d25b5d7c9a9.jpeg',
      '/images/artist slideshow/channels4_profile (2).jpg',
      '/images/artist slideshow/IMG_6629.webp',
      '/images/artist slideshow/karri-kehlani-scaled.jpg',
      '/images/artist slideshow/MK-Neil-Favila-759x500.jpg',
      '/images/artist slideshow/Skye-1-e1764693337176.jpg',
    ],
  },
  {
    value: 130,
    suffix: '+',
    label: 'Campaigns',
    variant: 'lime',
    mediaType: 'video',
    mediaSrc: 'https://player.vimeo.com/video/1053014687?autoplay=1&loop=1&background=1',
  },
  {
    value: 110,
    suffix: 'B+',
    label: 'Views Delivered',
    variant: 'lime',
    mediaType: 'video',
    mediaSrc: 'https://player.vimeo.com/video/1053014597?autoplay=1&loop=1&background=1&muted=1',
  },
  {
    value: 10,
    suffix: 'M+',
    label: 'UGC created',
    variant: 'lime',
    mediaType: 'video',
    mediaSrc: 'https://player.vimeo.com/video/1053014655?autoplay=1&loop=1&background=1&muted=1',
  },
  {
    value: 1,
    suffix: 'B+',
    label: 'Streams Delivered',
    variant: 'magenta',
    mediaType: 'image',
    mediaSrc: '/images/Billboard.avif',
  },
  {
    value: 30,
    suffix: '',
    label: 'TikTok Top 50 entries',
    variant: 'magenta',
    mediaType: 'image',
    mediaSrc: '/images/TikTok Top 50 entries.avif',
  },
];

const StatCard = ({ stat, index }) => {
  const { ref, count } = useCountUp(stat.value, 2.5);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Auto-advance slideshow
  React.useEffect(() => {
    if (stat.mediaType === 'slideshow' && stat.mediaImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % stat.mediaImages.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [stat.mediaType, stat.mediaImages]);

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card variant={stat.variant} className="p-4 sm:p-6 h-full" hover={false} animate={false}>
        {/* Campaign Media */}
        <div className="mb-3 sm:mb-4">
          <div className={`relative aspect-video rounded-lg sm:rounded-xl overflow-hidden ${
            stat.variant === 'lime' 
              ? 'bg-gradient-to-br from-accent-lime/20 to-accent-lime/5' 
              : 'bg-gradient-to-br from-blue-200/30 to-blue-100/20'
          }`}>
            {stat.mediaType === 'video' ? (
              <iframe
                src={stat.mediaSrc}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{ border: 'none' }}
                title={`Campaign video for ${stat.label}`}
              />
            ) : stat.mediaType === 'slideshow' ? (
              <div className="relative w-full h-full">
                {stat.mediaImages.map((imgSrc, idx) => (
                  <motion.img
                    key={imgSrc}
                    src={imgSrc}
                    alt={`${stat.label} ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={stat.mediaSrc}
                alt={stat.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        
        {/* Stat number */}
        <div ref={ref} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dark-900 mb-1 sm:mb-2">
          {count.toLocaleString()}{stat.suffix}
        </div>
        
        {/* Label */}
        <div className="text-dark-600 font-medium text-xs sm:text-sm md:text-base">
          {stat.label}
        </div>
      </Card>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <Section id="stats" background="white" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 px-2"
        >
          <motion.div variants={fadeInUp} className="mb-2 sm:mb-4">
            <span className="text-xs sm:text-sm font-mono text-blue-600 font-medium">2025</span>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading size="lg" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl" animate={false}>
              Our Results
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            <p className="text-dark-600 text-sm sm:text-base md:text-lg">
              We leverage our owned & operated media properties, combined with top influencers 
              to create culturally impactful campaigns that resonate with Gen Z and beyond.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Stats;
