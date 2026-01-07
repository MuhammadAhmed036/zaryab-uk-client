// Framer Motion animation variants and utilities

// Fade animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

// Scale animations
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const scaleInBounce = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 }
  },
  exit: { opacity: 0, scale: 0 },
};

// Slide animations
export const slideUp = {
  initial: { y: '100%' },
  animate: { y: '0%' },
  exit: { y: '100%' },
};

export const slideDown = {
  initial: { y: '-100%' },
  animate: { y: '0%' },
  exit: { y: '-100%' },
};

export const slideLeft = {
  initial: { x: '100%' },
  animate: { x: '0%' },
  exit: { x: '100%' },
};

export const slideRight = {
  initial: { x: '-100%' },
  animate: { x: '0%' },
  exit: { x: '-100%' },
};

// Rotate animations
export const rotateIn = {
  initial: { opacity: 0, rotate: -10, y: 20 },
  animate: { opacity: 1, rotate: 0, y: 0 },
  exit: { opacity: 0, rotate: -10, y: 20 },
};

export const flipIn = {
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 90 },
};

// Container variants for staggered children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Child variants for staggered animations
export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export const staggerChildScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
};

// Text animations
export const textReveal = {
  initial: { y: '100%' },
  animate: { 
    y: '0%',
    transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
  },
};

export const letterAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: 'easeOut',
    },
  }),
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3 },
};

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(236, 72, 153, 0.4)',
  transition: { duration: 0.3 },
};

// Tap animations
export const tapScale = {
  scale: 0.95,
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  },
};

// Viewport settings
export const defaultViewport = {
  once: true,
  margin: '-100px',
};

// Spring configurations
export const springBouncy = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

export const springSmooth = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const springStiff = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

// Easing presets
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOutExpo = [0.87, 0, 0.13, 1];
export const easeOutBack = [0.34, 1.56, 0.64, 1];

// Utility to create delay
export const withDelay = (variants, delay) => ({
  ...variants,
  animate: {
    ...variants.animate,
    transition: {
      ...variants.animate?.transition,
      delay,
    },
  },
});
