'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Section, Container, Heading, Text, Card } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

function Counter({ from = 0, to, suffix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, count, to]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <span ref={ref}>
      <span ref={nodeRef}>{from + suffix}</span>
    </span>
  );
}

export default function ContactPage() {
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
            <motion.div variants={fadeInUp} className="text-4xl mb-4">
              ✦
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Heading size="3xl" animate={false}>
                LET'S LINK
              </Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text size="xl" className="mt-6" animate={false}>
                Ready to take your brand viral? Let's create something amazing together.
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="white" className="py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Stat 1 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                  <Counter to={3} />
                </h3>
              </div>
              <p className="font-display font-normal text-base text-dark-400">
                Countries
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                  <Counter to={7} />
                </h3>
              </div>
              <p className="font-display font-normal text-base text-dark-400">
                Clients
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                  <Counter to={15} />
                </h3>
              </div>
              <p className="font-display font-normal text-base text-dark-400">
                Projects
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                  <Counter to={6020} />
                </h3>
              </div>
              <p className="font-display font-normal text-base text-dark-400">
                Influencers & Blogs
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section background="gradient" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heading size="3xl" animate={false}>
              Interested in our services?
            </Heading>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* London Location */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">London</h3>
                    <p className="text-dark-600">
                      UXBRIDGE ROAD, LONDON, W12 8LH
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Toronto Location */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">Toronto</h3>
                    <p className="text-dark-600">
                      2967 Dundas St. W. #562<br />
                      Toronto, ON M6P 1Z2
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/447555903661"
                      className="text-green-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +447555903661
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-lime/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">Email</h3>
                    <a
                      href="mailto:marketing@influtik.com"
                      className="text-accent-lime hover:underline"
                    >
                      marketing@influtik.com
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-8 text-center bg-gradient-to-br from-blue-500/10 to-accent-cyan/10 border border-blue-500/20">
                <h3 className="font-bold text-2xl text-dark-900 mb-4">
                  Ready to make your next single go viral?
                </h3>
                <p className="text-dark-600 mb-6">
                  Connect with us and let's create magic together
                </p>
                <a
                  href="https://www.linkedin.com/company/influtik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Follow us on LinkedIn
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
