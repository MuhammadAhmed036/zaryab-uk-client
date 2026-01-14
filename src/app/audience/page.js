'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const audienceStats = [
  { label: 'TikTok Followers', value: '1B+', color: 'blue' },
  { label: 'Creators', value: '7000+', color: 'cyan' },
  { label: 'Daily spend on creators', value: '5000$', color: 'lime' },
  { label: 'Yearly views', value: '110B+', color: 'violet' },
];



export default function AudiencePage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section background="gradient" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="3xl" animate={false}>
                OUR REACH
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-3xl mx-auto">
              <Text size="xl" animate={false}>
                We've built one of the largest Gen Z media networks across social platforms, 
                reaching millions of engaged fans every day.
              </Text>
            </motion.div>
          </motion.div>

          {/* Audience Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {audienceStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card
                  variant={stat.color}
                  className="p-6 text-center h-full"
                  hover={false}
                  animate={false}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-600 font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
