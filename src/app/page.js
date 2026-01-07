'use client';

import { motion } from 'framer-motion';
import {
  Hero,
  Services,
  Stats,
  Brands,
  Press,
  Contact,
} from '@/components/features';
import { Section, Container, Heading, Text, Card, ImagePlaceholder } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// About Section Component
const AboutSection = () => {
  return (
    <Section id="about" background="white" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-accent-magenta/20 to-accent-cyan/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Heading size="2xl" className="mb-6" animate={false}>
                WE'RE A<br />
                <span className="bg-gradient-to-r from-accent-magenta via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  GEN Z...
                </span>
              </Heading>
            </motion.div>
          </motion.div>

          {/* Right content - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card variant="magenta" className="p-4 relative overflow-visible">
              <ImagePlaceholder
                aspectRatio="video"
                variant="magenta"
                label="Team Photo"
                className="!border-none"
                animate={false}
              />
              {/* Decorative star */}
              <motion.div
                className="absolute -top-6 -left-6 text-5xl"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.div>
              {/* Corner fold effect */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-accent-cyan/40 to-accent-magenta/40 rotate-45 transform origin-bottom-left" />
            </Card>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <Card variant="elevated" className="p-8 md:p-10 relative overflow-hidden">
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent-lime/30 rounded-full text-sm font-medium text-dark-800">
                  Full Service Social Agency
                </span>
                <span className="px-4 py-2 bg-accent-magenta/20 rounded-full text-sm font-medium text-dark-800">
                  Influencer Marketing
                </span>
                <span className="px-4 py-2 bg-accent-cyan/20 rounded-full text-sm font-medium text-dark-800">
                  Social Content Creation
                </span>
                <span className="px-4 py-2 bg-accent-violet/20 rounded-full text-sm font-medium text-dark-800">
                  & More
                </span>
              </div>

              <Text size="lg" className="text-dark-700 font-medium" animate={false}>
                <span className="text-accent-magenta font-bold">WE WERE ON TIKTOK BEFORE TIKTOK WAS EVEN TIKTOK.</span>
              </Text>
              <Text className="mt-4" animate={false}>
                As the first to run an influencer campaign on the platform, and as one of its largest 
                presences, we've established ourselves as the go-to place for connecting brands with Gen Z.
              </Text>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href="/audience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-dark-900 rounded-full font-medium hover:bg-dark-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Audience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-dark-900 rounded-full font-medium hover:bg-dark-900 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

// Main Home Page
export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <AboutSection />
      <Services />
      <Stats />
      <Press />
      <Contact />
    </>
  );
}
