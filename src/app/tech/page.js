'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Button } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function TechPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section background="gradient" className="py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="3xl" animate={false}>
                OUR TECH
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text size="xl" className="mt-6" animate={false}>
                Cutting-edge technology powering viral campaigns. Our proprietary tools and platforms 
                help you manage creators, track performance, and scale your music marketing.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 1: Social TikTok */}
      <Section background="white" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content - Left Side */}
            <motion.div variants={fadeInUp}>
              <Heading size="xl" className="mb-6" animate={false}>
                Internal Database of 10,000+ creators updated every single day.
              </Heading>
              <div className="space-y-4 text-dark-600">
                <Text size="base" animate={false}>
                  Our internal tool Z-engine allows us to track performance of 10,000+ creators which enables us to 
                  collaborate with the best performing and cost efficient creators in our network
                </Text>
              </div>
            </motion.div>

            {/* Video - Right Side */}
            <motion.div variants={fadeInUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://player.vimeo.com/video/1154403206?quality=1080p&autoplay=1&muted=1&loop=1&background=1"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  style={{ border: 'none' }}
                  title="Z-engine Database Demo"
                />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 2: Tracking */}
      <Section background="light" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Video - Left Side */}
            <motion.div variants={fadeInUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://player.vimeo.com/video/1154405421?quality=1080p&autoplay=1&muted=1&loop=1&background=1"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  style={{ border: 'none' }}
                  title="Creator Scraping Demo"
                />
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div variants={fadeInUp}>
              <Heading size="xl" className="mb-6" animate={false}>
                We are able to scrape creators under hashtags or sound ids at scale.
              </Heading>
              <div className="space-y-4 text-dark-600">
                <Text size="base" animate={false}>
                  Our tool enable us to scrape creators under sounds or hashtags/topics, and filter based off 
                  average views performance across latest videos while automating outreach.
                </Text>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 3: Social Add Influencers (Outreach) */}
      <Section background="white" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content - Left Side */}
            <motion.div variants={fadeInUp}>
              <Heading size="xl" className="mb-6" animate={false}>
                Automated Influencers Outreach
              </Heading>
              <div className="space-y-4 text-dark-600">
                <Text size="base" animate={false}>
                  Our internally built tool allows us to outreach creators at scale using automated bulk emails 
                  and AI, and filter creators based on price, average views, and more.
                </Text>
              </div>
            </motion.div>

            {/* Video - Right Side */}
            <motion.div variants={fadeInUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://player.vimeo.com/video/1154406369?quality=1080p&autoplay=1&muted=1&loop=1&background=1"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  style={{ border: 'none' }}
                  title="Automated Outreach Demo"
                />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="xl" animate={false}>
                Ready to Use Our Technology?
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text size="lg" className="mt-6 mb-8" animate={false}>
                Get access to our powerful platform and start running data-driven campaigns today.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="/contact">
                <Button variant="gradient" size="lg">
                  Get Started
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
