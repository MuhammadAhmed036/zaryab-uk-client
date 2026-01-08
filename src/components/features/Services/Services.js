'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge, Card, ImagePlaceholder } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const services = [
  {
    number: '01',
    title: 'INFLUENCER MARKETING',
    description: 'We connect brands with the perfect creators across TikTok, Instagram, and YouTube. Our network of Gen Z influencers creates authentic content that resonates with young audiences and drives real engagement.',
    tags: ['TikTok Campaigns', 'Instagram Reels', 'YouTube Shorts', 'Brand Partnerships'],
    tagVariant: 'magenta',
    images: [
      { label: 'Campaign 1', variant: 'magenta' },
      { label: 'Campaign 2', variant: 'cyan' },
      { label: 'Campaign 3', variant: 'violet' },
      { label: 'Campaign 4', variant: 'lime' },
    ],
  },
  {
    number: '02',
    title: 'SOCIAL CONTENT CREATION',
    description: 'Our Flightcrew boasts a network of 25+ Gen Z editors who specialize in quick-turn editing and content creation. Acutely aware of the latest social trends, we are experts at creating impactful digital content.',
    tags: ['Content Ideation & Strategy', 'TikTok Filter Creation', 'Original Audio Creation', 'Filming & Editing', 'CapCut Templates', 'Paid & Organic Videos'],
    tagVariant: 'cyan',
    images: [
      { label: 'Content 1', variant: 'cyan' },
      { label: 'Content 2', variant: 'magenta' },
      { label: 'Content 3', variant: 'lime' },
      { label: 'Content 4', variant: 'violet' },
    ],
  },
  {
    number: '03',
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: 'We manage social accounts end-to-end, from initial channel strategy to always-on account management. We continuously test and optimize tactics, ensuring we meet KPIs from follower growth to increased engagement.',
    tags: ['Channel Strategy', 'Content Calendar', 'Community Management', 'Analytics & Reporting'],
    tagVariant: 'lime',
    images: [
      { label: 'Social 1', variant: 'lime' },
      { label: 'Social 2', variant: 'cyan' },
      { label: 'Social 3', variant: 'magenta' },
      { label: 'Social 4', variant: 'violet' },
    ],
  },
];

const Services = () => {
  return (
    <Section id="services" background="gradient" className="relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-accent-magenta/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20 px-2"
        >
          <motion.div variants={fadeInUp}>
            <Heading size="xl" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl" animate={false}>
              OUR RESULTS
            </Heading>
          </motion.div>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ServiceCard = ({ service, isReversed }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center px-2 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <motion.div
        variants={fadeInUp}
        className={`${isReversed ? 'lg:order-2' : ''}`}
      >
        <div className="mb-2 sm:mb-4">
          <span className="text-xs sm:text-sm font-mono text-accent-magenta">({service.number})</span>
        </div>
        <Heading size="md" className="mb-3 sm:mb-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl" animate={false}>
          {service.title}
        </Heading>
        <Text size="sm" className="mb-4 sm:mb-8 text-sm sm:text-base" animate={false}>
          {service.description}
        </Text>

        {/* Tags */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {service.tags.map((tag, i) => (
            <motion.div key={tag} variants={staggerChild}>
              <Badge variant={service.tagVariant} size="md">
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Images Grid */}
      <motion.div
        variants={fadeInUp}
        className={`${isReversed ? 'lg:order-1' : ''}`}
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {service.images.map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative group">
                <ImagePlaceholder
                  aspectRatio={i === 0 || i === 3 ? 'video' : 'square'}
                  variant={image.variant}
                  label={image.label}
                  animate={false}
                  className="shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                {/* Play button for video placeholders */}
                {i % 2 === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-accent-magenta ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
