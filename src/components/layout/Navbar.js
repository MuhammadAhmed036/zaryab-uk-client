'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { useScrollDirection } from '@/hooks/useAnimations';

const navLinks = [
  { name: 'Our Audience', href: '/audience', isPage: true },
  { name: 'Reach Our Audience', href: '#reach' },
  { 
    name: 'Our Services', 
    href: '#services',
    submenu: [
      { name: 'Influencer Marketing', href: '#services' },
      { name: 'Content Creation', href: '#services' },
      { name: 'Social Management', href: '#services' },
    ]
  },
  { name: 'Our Team', href: '/team', isPage: true },
  { name: 'Contact', href: '/contact', isPage: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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
                            className="block px-4 py-3 text-dark-700 hover:bg-light-100 hover:text-accent-magenta transition-colors text-sm"
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
              <Button variant="gradient" size="sm">
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
                          className="block text-2xl font-display font-bold text-dark-900 hover:text-accent-magenta transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block text-2xl font-display font-bold text-dark-900 hover:text-accent-magenta transition-colors"
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
                              className="block text-dark-600 hover:text-accent-magenta transition-colors"
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
                  <Button variant="gradient" size="lg" className="w-full">
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
