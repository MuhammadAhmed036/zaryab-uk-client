'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const footerLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Our Reach', href: '/audience' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Tech', href: '/tech' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
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
      <div className="bg-gradient-to-r from-accent-lime/40 via-accent-cyan/20 to-accent-lime/40 py-6 sm:py-8">
        <Container className="px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center lg:justify-between gap-4 sm:gap-6"
          >
            {/* Main navigation links */}
            <motion.nav
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12"
            >
              {footerLinks.main.map((link) => (
                <motion.div key={link.name} variants={staggerChild}>
                  <Link
                    href={link.href}
                    className="font-display font-bold text-sm xs:text-base sm:text-lg md:text-xl text-dark-900 hover:text-blue-600 transition-colors uppercase"
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
      <div className="bg-white py-3 sm:py-4 border-t border-light-200">
        <Container>
          <div className="flex items-center justify-center text-xs sm:text-sm text-dark-500">
            <p>© Copyright Influtik, {currentYear}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
