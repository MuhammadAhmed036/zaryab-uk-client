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
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl"
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
              <Heading size="xl" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase" animate={false}>
                Interested in our services?
              </Heading>
            </motion.div>

            {/* Location info */}
            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {/* London Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-dark-900 uppercase">London</h4>
                  <p className="text-dark-600 mt-1 text-sm sm:text-base">UXBRIDGE ROAD LONDON W12 8LH</p>
                </div>
              </div>

              {/* Toronto Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-dark-900 uppercase">Toronto</h4>
                  <p className="text-dark-600 mt-1 text-sm sm:text-base">2967 Dundas St. W. #562, Toronto, ON M6P 1Z2</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+447789772413" className="font-semibold text-dark-900 hover:text-blue-500 transition-colors text-sm sm:text-base">
                  +44 7789772413
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <a href="https://wa.me/447555903661" target="_blank" rel="noopener noreferrer" className="font-semibold text-dark-900 hover:text-green-500 transition-colors text-sm sm:text-base">
                  Whatsapp: +447555903661
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8">
              {/* Email button */}
              <motion.a
                href="mailto:marketing@influtik.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent-cyan/30 via-blue-500/20 to-blue-700/30 border border-accent-cyan/30 hover:border-accent-cyan/50 transition-all duration-300 group"
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
            <motion.div variants={fadeInUp} className="mt-8 sm:mt-10 space-y-4">
              <Text animate={false} className="text-dark-600 text-sm sm:text-base leading-relaxed">
                Ready to make your next single go viral?
              </Text>
              
              {/* LinkedIn Icon */}
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                <motion.a
                  href="https://www.linkedin.com/company/influtik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-light-100 border border-light-300 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
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
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-accent-cyan/20 to-blue-600/20 flex items-center justify-center">
                  <svg className="w-20 h-20 text-dark-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"
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
