'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Badge } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function CaseStudiesPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section background="gradient" className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-80 h-80 bg-accent-lime/20 rounded-full blur-3xl"
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
                CASE STUDIES
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-3xl mx-auto">
              <Text size="xl" animate={false}>
                Real results from real campaigns. See how we've helped brands achieve viral success and meaningful engagement.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section background="white" className="py-24">
        <Container>
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <ImagePlaceholder
                        aspectRatio="video"
                        variant={study.variant}
                        label={study.client}
                        className="!rounded-none"
                        animate={false}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant={study.variant}>
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Heading size="lg" className="mb-4" animate={false}>
                        {study.client}
                      </Heading>

                      <Text className="mb-6" animate={false}>
                        {study.description}
                      </Text>

                      {/* Results */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result) => (
                          <div key={result.label}>
                            <div className={`text-3xl font-display font-bold bg-gradient-to-r ${getGradient(study.variant)} bg-clip-text text-transparent`}>
                              {result.value}
                            </div>
                            <Text size="sm" className="text-dark-600" animate={false}>
                              {result.label}
                            </Text>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-dark-900 font-medium hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        View Full Case Study
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
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
                Ready to Create Your Success Story?
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 max-w-2xl mx-auto">
              <Text size="lg" animate={false}>
                Let's work together to create a campaign that drives real results for your brand.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-full font-medium text-lg hover:bg-dark-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Campaign
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

const caseStudies = [
  {
    id: 1,
    client: 'Major Artist Launch Campaign',
    description: 'Helped launch a breakout artist\'s debut single with a viral TikTok campaign that reached over 100M users in the first week. Strategic influencer partnerships and trend-jacking led to organic chart success.',
    tags: ['TikTok', 'Influencer Marketing', 'Music Launch'],
    variant: 'magenta',
    results: [
      { label: 'Total Views', value: '100M+' },
      { label: 'Engagement Rate', value: '15%' },
      { label: 'User-Generated Content', value: '50K+' },
      { label: 'Chart Position', value: 'Top 10' },
    ],
  },
  {
    id: 2,
    client: 'Global Brand Awareness Campaign',
    description: 'Created a multi-platform social campaign for a Fortune 500 brand targeting Gen Z. Combined influencer partnerships with original content creation to drive massive brand awareness and product sales.',
    tags: ['Multi-Platform', 'Content Creation', 'Brand Awareness'],
    variant: 'cyan',
    results: [
      { label: 'Impressions', value: '250M+' },
      { label: 'New Followers', value: '500K+' },
      { label: 'Conversion Rate', value: '8.5%' },
      { label: 'ROI', value: '450%' },
    ],
  },
  {
    id: 3,
    client: 'Festival Promotion Success',
    description: 'Drove record ticket sales for a major music festival through targeted social campaigns, behind-the-scenes content, and strategic partnerships with top creators across platforms.',
    tags: ['Instagram', 'YouTube', 'Event Marketing'],
    variant: 'lime',
    results: [
      { label: 'Tickets Sold', value: '50K+' },
      { label: 'Social Reach', value: '75M+' },
      { label: 'Content Pieces', value: '200+' },
      { label: 'Sell-Out Time', value: '48 hrs' },
    ],
  },
  {
    id: 4,
    client: 'Product Launch Viral Campaign',
    description: 'Orchestrated a viral product launch using TikTok trends, custom filters, and micro-influencer seeding. The campaign generated organic buzz that exceeded all initial projections.',
    tags: ['TikTok', 'Product Launch', 'Viral Marketing'],
    variant: 'violet',
    results: [
      { label: 'Views', value: '180M+' },
      { label: 'Shares', value: '2M+' },
      { label: 'Sales Increase', value: '320%' },
      { label: 'Brand Mentions', value: '100K+' },
    ],
  },
];

function getGradient(variant) {
  const gradients = {
    magenta: 'from-accent-magenta to-accent-violet',
    cyan: 'from-accent-cyan to-accent-lime',
    lime: 'from-accent-lime to-accent-cyan',
    violet: 'from-accent-violet to-accent-magenta',
  };
  return gradients[variant] || gradients.magenta;
}
