// GSAP Configuration - Single source of truth
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register plugins only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
export const defaultEase = 'power3.out';
export const defaultDuration = 0.8;

// Common animation configurations
export const fadeInUp = {
  opacity: 0,
  y: 50,
};

export const fadeInDown = {
  opacity: 0,
  y: -50,
};

export const fadeInLeft = {
  opacity: 0,
  x: -50,
};

export const fadeInRight = {
  opacity: 0,
  x: 50,
};

export const scaleIn = {
  opacity: 0,
  scale: 0.8,
};

// Animation presets for GSAP
export const animationPresets = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.5 },
  },
  fadeInUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeInDown: {
    from: { opacity: 0, y: -60 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeInLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
  },
  fadeInRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
  },
  slideUp: {
    from: { y: '100%' },
    to: { y: '0%', duration: 1, ease: 'power4.out' },
  },
  rotateIn: {
    from: { opacity: 0, rotation: -15, y: 30 },
    to: { opacity: 1, rotation: 0, y: 0, duration: 0.8, ease: 'power3.out' },
  },
};

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

// Create stagger animation
export const createStagger = (amount = 0.1, from = 'start') => ({
  amount,
  from,
});

// Utility function to create a scroll-triggered animation
export const createScrollAnimation = (element, animation, scrollOptions = {}) => {
  if (!element || typeof window === 'undefined') return null;

  const preset = animationPresets[animation] || animationPresets.fadeInUp;

  return gsap.fromTo(element, preset.from, {
    ...preset.to,
    scrollTrigger: {
      trigger: element,
      ...scrollTriggerDefaults,
      ...scrollOptions,
    },
  });
};

// Utility to animate multiple elements with stagger
export const createStaggerAnimation = (elements, animation, stagger = 0.1, scrollOptions = {}) => {
  if (!elements || elements.length === 0 || typeof window === 'undefined') return null;

  const preset = animationPresets[animation] || animationPresets.fadeInUp;

  return gsap.fromTo(elements, preset.from, {
    ...preset.to,
    stagger,
    scrollTrigger: {
      trigger: elements[0],
      ...scrollTriggerDefaults,
      ...scrollOptions,
    },
  });
};

// Export GSAP and ScrollTrigger for use in components
export { gsap, ScrollTrigger };
