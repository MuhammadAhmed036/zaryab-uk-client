'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Button } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const clientLogos = [
  { name: 'Spotify', variant: 'lime' },
  { name: 'Netflix', variant: 'magenta' },
  { name: 'TikTok', variant: 'cyan' },
  { name: 'Instagram', variant: 'violet' },
  { name: 'YouTube', variant: 'lime' },
];

export default function TechPage() {
  return (
    <main className="h-screen overflow-hidden pt-24">
      {/* Single Viewport Landing Section */}
      <Section background="gradient" className="h-full relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-lime/10 rounded-full blur-2xl"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Left Content - Compact */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={fadeInUp} className="space-y-2">
                <span className="text-sm font-mono text-blue-600 tracking-wider">OUR TECH</span>
                <Heading size="4xl" animate={false} className="leading-tight">
                  Z-engine Platform
                  <span className="text-accent-cyan block text-3xl mt-2 font-bold tracking-wide">
                    Automated Influence
                  </span>
                </Heading>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Text size="xl" animate={false} className="text-dark-600 max-w-lg">
                  AI-powered influencer discovery and campaign automation. 
                  From scouting to analytics - all on autopilot.
                </Text>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { label: 'AI Models', value: '50+', color: 'text-blue-600' },
                  { label: 'Creators', value: '1M+', color: 'text-accent-cyan' },
                  { label: 'Campaigns', value: '10K+', color: 'text-accent-lime' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-dark-500 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Center - Main Dashboard */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-6 relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden h-80"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="h-full bg-gradient-to-br from-indigo-50 to-cyan-50 p-4">
                  <div className="flex items-center gap-1 mb-4">
                    <motion.div 
                      className="w-2 h-2 bg-red-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold">Campaign Analytics</h3>
                      <motion.div 
                        className="text-xl font-bold text-blue-600"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        94%
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Reach', value: '2.4M', color: 'bg-accent-cyan' },
                        { label: 'Engagement', value: '185K', color: 'bg-accent-lime' },
                        { label: 'Conversions', value: '12.8K', color: 'bg-blue-600' },
                        { label: 'ROI', value: '340%', color: 'bg-blue-800' }
                      ].map((metric, i) => (
                        <motion.div 
                          key={metric.label}
                          className="bg-white rounded p-2 text-center"
                          whileHover={{ scale: 1.05 }}
                          animate={{ y: [0, -1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          <div className="text-sm font-bold">{metric.value}</div>
                          <div className="text-xs text-dark-500">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="h-2 bg-dark-100 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1 }}
                    >
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-600 to-accent-cyan rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        {/* Bottom floating elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="text-sm font-medium text-dark-400 opacity-60 hover:opacity-100 transition-opacity"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
