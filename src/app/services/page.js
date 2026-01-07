'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const services = [
  {
    number: '01',
    title: 'Influencer Marketing',
    description: 'We connect brands with the perfect creators across TikTok, Instagram, and YouTube. Our network of Gen Z influencers creates authentic content that resonates.',
    features: [
      'TikTok Campaigns',
      'Instagram Partnerships',
      'YouTube Collaborations',
      'Brand Ambassador Programs',
      'Micro & Macro Influencer Strategy',
    ],
    color: 'magenta',
    image: 'Influencer Campaign',
  },
  {
    number: '02',
    title: 'Content Creation',
    description: 'Our creative team produces viral-worthy content tailored for each platform. From concept to execution, we handle everything.',
    features: [
      'Video Production',
      'Social Media Content',
      'TikTok & Reels',
      'Photography',
      'Animation & Motion Graphics',
    ],
    color: 'cyan',
    image: 'Content Creation',
  },
  {
    number: '03',
    title: 'Social Media Management',
    description: 'End-to-end social media management for artists and brands. We grow audiences and build engaged communities.',
    features: [
      'Strategy Development',
      'Content Calendar',
      'Community Management',
      'Analytics & Reporting',
      'Growth Optimization',
    ],
    color: 'lime',
    image: 'Social Management',
  },
  {
    number: '04',
    title: 'Music Marketing',
    description: 'Specialized campaigns for artists, labels, and music brands. We understand the industry and know how to make songs go viral.',
    features: [
      'Release Campaigns',
      'Playlist Pitching',
      'Music Video Promotion',
      'Artist Branding',
      'Tour Marketing',
    ],
    color: 'violet',
    image: 'Music Marketing',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <Container>
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
                As a full-service digital marketing & production agency, our team is adept 
                at supporting brands with all their social marketing needs.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <Section
          key={service.number}
          background={index % 2 === 0 ? 'white' : 'light'}
          className="py-24"
        >
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <motion.div
                variants={fadeInUp}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <span className="text-sm font-mono text-accent-magenta mb-2 block">
                  ({service.number})
                </span>
                <Heading size="xl" className="mb-6" animate={false}>
                  {service.title}
                </Heading>
                <Text size="lg" className="mb-8" animate={false}>
                  {service.description}
                </Text>

                {/* Features List */}
                <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      variants={staggerChild}
                      className="flex items-center gap-3"
                    >
                      <span className={`w-2 h-2 rounded-full bg-accent-${service.color}`} />
                      <span className="text-dark-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <Button variant="gradient">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInUp}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <Card variant={service.color} className="p-4">
                  <ImagePlaceholder
                    aspectRatio="video"
                    variant={service.color}
                    label={service.image}
                    animate={false}
                    className="!border-none"
                  />
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="gradient" className="py-24">
        <Container>
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
              <Button variant="gradient" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
