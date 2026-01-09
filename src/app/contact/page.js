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
            {/* Location */}
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
                      UXBRIDGE ROAD LONDON W12 8LH
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Phone */}
            <motion.div variants={staggerChild}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">Phone</h3>
                    <a
                      href="tel:+447789772413"
                      className="text-blue-500 hover:underline"
                    >
                      +44 7789772413
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
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
