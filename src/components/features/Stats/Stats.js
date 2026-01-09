'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Card, ImagePlaceholder } from '@/components/ui';
import { useCountUp } from '@/hooks/useAnimations';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const stats = [
  {
    value: 865,
    suffix: '',
    label: 'Artists',
    variant: 'lime',
  },
  {
    value: 1261,
    suffix: '',
    label: 'Campaigns',
    variant: 'lime',
  },
  {
    value: 9,
    suffix: 'B',
    label: 'Views Delivered',
    variant: 'lime',
  },
  {
    value: 102,
    suffix: 'M',
    label: 'UGC pieces created',
    variant: 'lime',
  },
  {
    value: 178,
    suffix: '',
    label: 'Billboard Hot 100™ entries',
    variant: 'magenta',
  },
  {
    value: 71,
    suffix: '',
    label: 'TikTok Top 50 entries',
    variant: 'magenta',
  },
];

const StatCard = ({ stat, index }) => {
  const { ref, count } = useCountUp(stat.value, 2.5);

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card variant={stat.variant} className="p-4 sm:p-6 h-full" hover={false} animate={false}>
        {/* Image placeholder */}
        <div className="mb-3 sm:mb-4">
          <ImagePlaceholder
            aspectRatio="video"
            variant={stat.variant}
            label="Campaign Image"
            rounded="rounded-lg sm:rounded-xl"
            animate={false}
          />
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
            <span className="text-xs sm:text-sm font-mono text-blue-600 font-medium">2023 & 2024</span>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Heading size="lg" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl" animate={false}>
              BY THE NUMBERS
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
