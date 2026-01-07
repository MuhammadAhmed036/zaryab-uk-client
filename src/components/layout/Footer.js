'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const footerLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Our Audience', href: '#audience' },
    { name: 'Reach Our Audience', href: '#reach' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Careers', href: '/careers' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Main footer content */}
      <div className="bg-gradient-to-r from-accent-lime/40 via-accent-cyan/20 to-accent-lime/40 py-8">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-6"
          >
            {/* Main navigation links */}
            <motion.nav
              variants={staggerContainer}
              className="flex flex-wrap gap-6 md:gap-12"
            >
              {footerLinks.main.map((link) => (
                <motion.div key={link.name} variants={staggerChild}>
                  <Link
                    href={link.href}
                    className="font-display font-bold text-lg md:text-xl text-dark-900 hover:text-accent-magenta transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="bg-white py-4 border-t border-light-200">
        <Container>
          <div className="flex items-center justify-center text-sm text-dark-500">
            <p>© Copyright Influtik, {currentYear}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
