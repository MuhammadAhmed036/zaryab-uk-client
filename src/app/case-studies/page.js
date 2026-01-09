'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Badge } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useState } from 'react';

const phoneVariants = {
  hidden: { opacity: 0, y: 20, rotate: -5 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    y: -10,
    rotate: 2,
    transition: { duration: 0.3 }
  }
};

const caseStudyCards = [
  {
    id: 1,
    title: '+44',
    subtitle: 'HUGO',
    background: 'from-slate-900 to-slate-700',
    borderColor: 'border-slate-200',
    textColor: 'text-white',
    accentColor: 'text-accent-lime',
    stats: {
      streams: '4M',
      videos: '500+',
      views: '300M+'
    },
    description: 'We were able to produce over 500 football edits within a 3 week period generating 300M+ views and a lot of organic recreations within the football niche. We started the content production at less than 300 video creations.',
    phones: [
      { type: 'FOOTBALL EDITS', variant: 'lime' },
      { type: 'LUXURY EDITS', variant: 'magenta' }
    ]
  },
  {
    id: 2,
    title: 'PLENTY',
    subtitle: 'RHEEZ',
    background: 'from-white to-slate-50',
    borderColor: 'border-blue-500',
    textColor: 'text-slate-900',
    accentColor: 'text-blue-600',
    stats: {
      streams: '1M+',
      videos: '8K+',
      views: '251M+'
    },
    description: 'We developed content strategy for a debut song by an artist from scratch resulting in over 8K video recreations and over 1M streams. Growing his monthly listeners from 300 to 30K+ within a month',
    phones: [
      { type: 'INFLUENCER TRENDY', variant: 'cyan' },
      { type: 'AI CONTENT', variant: 'violet' },
      { type: 'FOOTBALL EDITS', variant: 'lime' },
      { type: 'MOVIE EDITS', variant: 'magenta' }
    ]
  }
];

export default function CaseStudiesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="h-screen overflow-hidden pt-24">
      {/* Single Viewport Landing Section */}
      <Section background="gradient" className="h-full relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-80 h-80 bg-accent-lime/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <Container className="relative z-10 h-full flex flex-col justify-center py-8">
          {/* Compact Header */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-8"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="2xl" animate={false}>
                CASE STUDIES
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-3 max-w-2xl mx-auto">
              <Text animate={false}>
                Real results from viral campaigns. See our impact in action.
              </Text>
            </motion.div>
          </motion.div>

          {/* Case Studies Cards - Side by Side */}
          <motion.div
            className="grid lg:grid-cols-2 gap-6 flex-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {caseStudyCards.map((study, index) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                className="group"
                onHoverStart={() => setHoveredCard(study.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`
                  relative overflow-hidden rounded-2xl p-6 h-full
                  bg-gradient-to-br ${study.background}
                  border-2 ${study.borderColor}
                  shadow-lg hover:shadow-2xl transition-all duration-500
                  min-h-[480px]
                `}>
                  
                  {/* Hero Number */}
                  <motion.div
                    className="mb-6"
                    animate={hoveredCard === study.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-6xl font-bold ${study.accentColor} leading-none`}>
                      {study.title}
                    </div>
                    <div className={`text-lg font-semibold ${study.textColor} mt-1`}>
                      {study.subtitle}
                    </div>
                  </motion.div>

                  {/* TikTok Videos Grid - Matching Screenshot */}
                  <div className={`grid ${study.phones.length === 2 ? 'grid-cols-2' : 'grid-cols-4'} gap-3 mb-6`}>
                    {study.phones.map((video, videoIndex) => (
                      <motion.div
                        key={videoIndex}
                        variants={phoneVariants}
                        custom={videoIndex}
                        whileHover="hover"
                        className="relative group/video"
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 h-32">
                          <div className={`w-full h-full bg-gradient-to-b ${getPhoneGradient(video.variant)} rounded-lg relative overflow-hidden shadow-lg`}>
                            {/* Video Screen Content */}
                            <motion.div
                              className="absolute inset-1 bg-black/20 rounded flex items-center justify-center"
                              animate={{
                                opacity: [0.8, 0.6, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: videoIndex * 0.5
                              }}
                            >
                              {/* Play Button */}
                              <motion.div
                                className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg"
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: videoIndex * 0.3
                                }}
                              >
                                <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                              </motion.div>
                            </motion.div>
                            
                            {/* Video UI Elements */}
                            <motion.div
                              className="absolute bottom-1 left-1 right-1 h-1 bg-white/30 rounded-full overflow-hidden"
                              initial={{ width: '0%' }}
                            >
                              <motion.div
                                className="h-full bg-white rounded-full"
                                animate={{ width: ['0%', '100%', '0%'] }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  delay: videoIndex * 1.5
                                }}
                              />
                            </motion.div>
                            
                            {/* Engagement Icons */}
                            <motion.div
                              className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.7, 1]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: videoIndex * 0.4
                              }}
                            />
                          </div>
                        </div>
                        
                        <motion.div
                          className={`text-xs ${study.textColor} text-center mt-1.5 opacity-80 group-hover/video:opacity-100 transition-opacity font-medium`}
                          animate={hoveredCard === study.id ? { y: [0, -1, 0] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {video.type}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats - Compact Grid */}
                  <motion.div
                    className="grid grid-cols-3 gap-3 mb-4"
                    animate={hoveredCard === study.id ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Object.entries(study.stats).map(([key, value], statIndex) => (
                      <motion.div
                        key={key}
                        className="text-left"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          y: hoveredCard === study.id ? [0, -1, 0] : 0
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: statIndex * 0.2
                        }}
                      >
                        <div className={`text-xs ${study.textColor} opacity-70 uppercase tracking-wide font-medium`}>
                          {key}:
                        </div>
                        <div className={`text-xl font-bold ${study.textColor} leading-tight`}>
                          {value}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Description - Compact */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    animate={hoveredCard === study.id ? { opacity: 1 } : { opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Text 
                      size="sm" 
                      className={`${study.textColor} leading-relaxed text-sm`}
                      animate={false}
                    >
                      {study.description.slice(0, 120)}...
                    </Text>
                  </motion.div>

                  {/* Floating Background Element */}
                  <motion.div
                    className="absolute top-3 right-3 w-20 h-20 bg-white/5 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA - Compact */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-8"
            animate="animate"
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 text-white rounded-full font-medium hover:bg-dark-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

function getPhoneGradient(variant) {
  const gradients = {
    magenta: 'from-blue-500 to-blue-700',
    cyan: 'from-cyan-400 to-blue-500',
    lime: 'from-lime-400 to-green-500',
    violet: 'from-blue-600 to-indigo-600',
  };
  return gradients[variant] || gradients.cyan;
}
