'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Button } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const Contact = () => {
  return (
    <Section id="contact" background="white" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Satellite illustration placeholder */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 opacity-30"
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark-400">
            {/* Satellite dish */}
            <circle cx="70" cy="70" r="25" />
            <ellipse cx="70" cy="70" rx="25" ry="10" />
            <line x1="70" y1="45" x2="70" y2="20" />
            <circle cx="70" cy="15" r="5" />
          </svg>
        </motion.div>

        {/* Orbiting satellite placeholder */}
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 opacity-30"
          animate={{ 
            rotate: 360,
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark-400">
            {/* Simple satellite */}
            <rect x="35" y="35" width="30" height="30" />
            <line x1="0" y1="50" x2="35" y2="50" />
            <line x1="65" y1="50" x2="100" y2="50" />
            <rect x="5" y="40" width="20" height="20" />
            <rect x="75" y="40" width="20" height="20" />
          </svg>
        </motion.div>

        {/* Dashed connection line */}
        <svg className="absolute top-32 right-32 w-64 h-64 opacity-20" viewBox="0 0 200 200">
          <motion.path
            d="M150 30 Q 100 80, 50 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
            className="text-accent-lime"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        {/* Gradient orbs */}
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-accent-magenta/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <Container className="relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Decorative star */}
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <span className="text-4xl">✦</span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Heading size="xl" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl" animate={false}>
                Interested in our services?
              </Heading>
            </motion.div>

            {/* Location info */}
            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-magenta/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-dark-900">London</h4>
                  <p className="text-dark-600 mt-1 text-sm sm:text-base">UXBRIDGE ROAD LONDON W12 8LH</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+447789772413" className="font-semibold text-dark-900 hover:text-accent-magenta transition-colors text-sm sm:text-base">
                  +44 7789772413
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8">
              {/* Email button */}
              <motion.a
                href="mailto:marketing@influtik.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent-cyan/30 via-accent-magenta/20 to-accent-violet/30 border border-accent-cyan/30 hover:border-accent-cyan/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-dark-900 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-semibold text-dark-900 group-hover:text-dark-700 transition-colors text-xs sm:text-sm md:text-base break-all">
                  marketing@influtik.com
                </span>
              </motion.a>
            </motion.div>

            {/* Additional contact info */}
            <motion.div variants={fadeInUp} className="mt-12 space-y-4">
              <Text animate={false} className="text-dark-500">
                Ready to take your brand viral? Let's create something amazing together.
              </Text>
              
              {/* Social links */}
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                {['twitter', 'instagram', 'tiktok', 'linkedin'].map((social) => (
                  <motion.button
                    key={social}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-light-100 border border-light-300 flex items-center justify-center hover:bg-accent-magenta/10 hover:border-accent-magenta/30 transition-all"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'twitter' && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      )}
                      {social === 'instagram' && (
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      )}
                      {social === 'tiktok' && (
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      )}
                      {social === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                    </svg>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative h-[400px]"
          >
            {/* Abstract connection illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Earth/globe placeholder */}
              <motion.div
                className="w-48 h-48 rounded-full border-4 border-dashed border-dark-300/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 flex items-center justify-center">
                  <svg className="w-20 h-20 text-dark-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-accent-magenta to-accent-violet"
                  style={{
                    top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 120}px)`,
                    left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 120}px)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
