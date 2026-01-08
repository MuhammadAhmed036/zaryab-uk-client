'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function TechPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section background="gradient" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-80 h-80 bg-accent-magenta/20 rounded-full blur-3xl"
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
                OUR TECH
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-3xl mx-auto">
              <Text size="xl" animate={false}>
                Cutting-edge technology powering our social media campaigns and content creation.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack Section */}
      <Section background="white" className="py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="2xl" animate={false}>
                Our Technology Stack
              </Heading>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant={item.variant} className="p-6 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <Heading size="sm" className="mb-3" animate={false}>
                    {item.title}
                  </Heading>
                  <Text animate={false}>
                    {item.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="2xl" animate={false}>
                Ready to Leverage Our Tech?
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-2xl mx-auto">
              <Text size="lg" animate={false}>
                Let's discuss how our technology can amplify your brand's social media presence.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-full font-medium text-lg hover:bg-dark-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

const techItems = [
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced algorithms to track and predict viral trends, optimize content performance, and measure campaign ROI in real-time.',
    icon: '🤖',
    variant: 'magenta',
  },
  {
    title: 'Content Management Platform',
    description: 'Proprietary CMS for seamless content creation, scheduling, and distribution across all major social platforms.',
    icon: '📱',
    variant: 'cyan',
  },
  {
    title: 'Influencer Network',
    description: 'Custom-built platform to match brands with the perfect creators based on audience demographics and engagement metrics.',
    icon: '🌟',
    variant: 'lime',
  },
  {
    title: 'Video Editing Suite',
    description: 'Professional-grade editing tools optimized for short-form content creation with trend-aware templates and effects.',
    icon: '🎬',
    variant: 'violet',
  },
  {
    title: 'Performance Dashboard',
    description: 'Real-time analytics dashboard showing engagement metrics, audience insights, and campaign performance across platforms.',
    icon: '📊',
    variant: 'magenta',
  },
  {
    title: 'Automation Tools',
    description: 'Smart automation for posting schedules, responses, and community management to maximize efficiency and engagement.',
    icon: '⚡',
    variant: 'cyan',
  },
];
