'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="3xl" animate={false}>
                OUR SERVICES
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text size="xl" className="mt-6" animate={false}>
                A full-service music label and music marketing agency. We don't chase trends, we set them. 
                Access our creators database, fastest technology, and cheapest CPM.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Viral Music Marketing Section */}
      <Section background="white" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/3 right-10 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl"
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
          >
            {/* Top Section - Title with Image */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content - Left Side */}
                <motion.div variants={fadeInUp}>
                  <span className="text-sm font-mono text-blue-600 mb-2 block">(01)</span>
                  <Heading size="xl" className="mb-6" animate={false}>
                    Viral Music Marketing
                  </Heading>
                  <Text size="lg" className="mb-8 text-dark-600" animate={false}>
                    We run viral music campaigns by leveraging our owned & operated creators and technology. 
                    We have a track record of charting 85% of our songs across the TikTok Viral 50 Charts.
                  </Text>
                </motion.div>

                {/* Animated Image - Right Side */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img 
                      src="/images/our services first heading.png" 
                      alt="Viral Music Marketing" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Removed duplicate dark section */}

      {/* Label Music Marketing Outsourcing Section */}
      <Section background="light" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
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
            {/* Animated Image - Left Side */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img 
                  src="/images/Copy of Music Case studies.png" 
                  alt="Label Music Marketing" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-mono text-blue-600 mb-2 block">(02)</span>
              <Heading size="xl" className="mb-6" animate={false}>
                Label Music Marketing Outsourcing
              </Heading>
              <Text size="lg" className="text-dark-600" animate={false}>
                You can outsource your music marketing to us, and leverage our experience, database, 
                staff, and technology. This is a cheaper and more effective alternative to hiring internally.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Artist Marketing / Publishing / Distribution Section */}
      <Section background="white" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
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
              <span className="text-sm font-mono text-blue-600 mb-2 block">(03)</span>
              <Heading size="xl" className="mb-6" animate={false}>
                Artist Marketing / Publishing / Distribution
              </Heading>
              <Text size="lg" className="text-dark-600" animate={false}>
                We also run our own full-service label, servicing artists with distribution, marketing, 
                and artist development. Our signed artists see an average +1500% growth in streams within 
                the first 3 months.
              </Text>
            </motion.div>

            {/* Animated Image - Right Side */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img 
                  src="/images/Copy of Music Case studies (2).png" 
                  alt="Artist Marketing" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/20 to-transparent" />
              </motion.div>
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
                Ready to Go Viral?
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text size="lg" className="mt-6 mb-8" animate={false}>
                Let's create something amazing together. Get in touch to discuss your next campaign.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="/contact">
                <Button variant="gradient" size="lg">
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
