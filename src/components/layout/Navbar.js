'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { useScrollDirection } from '@/hooks/useAnimations';

const navLinks = [
  { name: 'Our Reach', href: '/audience', isPage: true },
  { name: 'Our Services', href: '/services', isPage: true },
  { name: 'Our Tech', href: '/tech', isPage: true },
  { name: 'Case Studies', href: '/case-studies', isPage: true },
  { name: 'Our Team', href: '/team', isPage: true },
  { name: 'Contact', href: '/contact', isPage: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ 
          y: scrollDirection === 'down' && isScrolled ? -100 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/influtik-1-6.png" 
                  alt="Influtik Logo" 
                  className="h-40 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {link.isPage ? (
                    <Link href={link.href}>
                      <motion.span
                        className="flex items-center gap-1 text-dark-700 hover:text-dark-900 font-medium text-sm uppercase tracking-wide transition-colors cursor-pointer"
                        whileHover={{ y: -2 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-1 text-dark-700 hover:text-dark-900 font-medium text-sm uppercase tracking-wide transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                      {link.submenu && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </motion.a>
                  )}

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-light-200 overflow-hidden"
                      >
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.name}
                            href={sublink.href}
                            onClick={(e) => handleNavClick(e, sublink.href)}
                            className="block px-4 py-3 text-dark-700 hover:bg-light-100 hover:text-blue-600 transition-colors text-sm"
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                variant="gradient" 
                size="sm"
                onClick={() => setShowContactModal(true)}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-dark-900 rounded-full origin-left"
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? -1 : 0,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-dark-900 rounded-full"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-dark-900 rounded-full origin-left"
                  animate={{ 
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 1 : 0,
                  }}
                />
              </div>
            </motion.button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-8 pt-24">
                <nav className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.isPage ? (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-2xl font-display font-bold text-dark-900 hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block text-2xl font-display font-bold text-dark-900 hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                      {link.submenu && (
                        <div className="mt-2 ml-4 space-y-2">
                          {link.submenu.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              onClick={(e) => handleNavClick(e, sublink.href)}
                              className="block text-dark-600 hover:text-blue-600 transition-colors"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setShowContactModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
            >
              {/* Modal */}
              <motion.div
                className="w-full max-w-md mx-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                  {/* Close button */}
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-light-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">
                      Get in Touch
                    </h3>
                    <p className="text-dark-600">
                      You can contact us through email
                    </p>
                  </div>

                  {/* Email */}
                  <div className="bg-gradient-to-r from-accent-lime/20 to-accent-cyan/20 rounded-xl p-6 mb-6">
                    <p className="text-sm text-dark-600 mb-2 font-medium">Email</p>
                    <a 
                      href="mailto:marketing@influtik.com" 
                      className="text-lg font-bold text-dark-900 hover:text-blue-600 transition-colors break-all"
                    >
                      marketing@influtik.com
                    </a>
                  </div>

                  {/* Action button */}
                  <a
                    href="mailto:marketing@influtik.com"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-center hover:shadow-lg transition-shadow"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
