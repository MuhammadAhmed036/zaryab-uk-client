'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const audienceStats = [
  { label: 'TikTok Followers', value: '50M+', color: 'magenta' },
  { label: 'Instagram Reach', value: '30M+', color: 'cyan' },
  { label: 'YouTube Subscribers', value: '10M+', color: 'lime' },
  { label: 'Monthly Impressions', value: '500M+', color: 'violet' },
];

const platformData = [
  {
    name: 'TikTok',
    followers: '50M+',
    engagement: '12%',
    description: 'Our TikTok presence reaches millions of Gen Z users daily with viral content.',
    variant: 'magenta',
  },
  {
    name: 'Instagram',
    followers: '30M+',
    engagement: '8%',
    description: 'Engaging Instagram content that resonates with young audiences.',
    variant: 'cyan',
  },
  {
    name: 'YouTube',
    followers: '10M+',
    engagement: '15%',
    description: 'Long-form and Shorts content that drives deep engagement.',
    variant: 'lime',
  },
  {
    name: 'Snapchat',
    followers: '5M+',
    engagement: '10%',
    description: 'Authentic, ephemeral content that connects with Gen Z.',
    variant: 'violet',
  },
];

export default function AudiencePage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section background="gradient" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-accent-magenta/20 rounded-full blur-3xl"
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
                OUR AUDIENCE
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

      {/* Platform Details */}
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
                PLATFORM BREAKDOWN
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-4 max-w-2xl mx-auto">
              <Text animate={false}>
                Our multi-platform presence ensures maximum reach and engagement 
                across all major social media channels.
              </Text>
            </motion.div>
          </motion.div>

          <div className="space-y-16">
            {platformData.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <motion.div
                  variants={fadeInUp}
                  className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <span className="text-sm font-mono text-accent-magenta">({String(index + 1).padStart(2, '0')})</span>
                  <Heading size="lg" className="mt-2 mb-4" animate={false}>
                    {platform.name.toUpperCase()}
                  </Heading>
                  <Text className="mb-6" animate={false}>
                    {platform.description}
                  </Text>
                  
                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-display font-bold text-dark-900">{platform.followers}</div>
                      <div className="text-dark-500 text-sm">Followers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accent-magenta">{platform.engagement}</div>
                      <div className="text-dark-500 text-sm">Avg. Engagement</div>
                    </div>
                  </div>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                  variants={fadeInUp}
                  className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ImagePlaceholder
                          aspectRatio={i <= 2 ? 'portrait' : 'square'}
                          variant={platform.variant}
                          label={`${platform.name} ${i}`}
                          animate={false}
                          className="shadow-lg rounded-2xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform Content Showcase */}
      <Section background="light" className="py-24">
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
                CONTENT SHOWCASE
              </Heading>
            </motion.div>
          </motion.div>

          {/* Platform images grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {['TikTok Content', 'Instagram Reels', 'YouTube Shorts', 'Snapchat'].map((platform, i) => (
              <motion.div
                key={platform}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              >
                <ImagePlaceholder
                  aspectRatio="portrait"
                  variant={['magenta', 'cyan', 'lime', 'violet'][i]}
                  label={platform}
                  animate={false}
                  className="shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
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
                WANT TO REACH OUR AUDIENCE?
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-2xl mx-auto">
              <Text size="lg" animate={false}>
                Let's create content that resonates with Gen Z and drives real results for your brand.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-full font-medium hover:bg-dark-800 transition-all"
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
