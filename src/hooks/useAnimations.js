'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Hook for scroll-triggered animations using GSAP
export const useScrollAnimation = (animation = 'fadeInUp', options = {}) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const loadGsap = async () => {
      const { gsap, ScrollTrigger, animationPresets, scrollTriggerDefaults } = await import('@/lib/gsapConfig');
      
      const preset = animationPresets[animation] || animationPresets.fadeInUp;

      gsap.fromTo(ref.current, preset.from, {
        ...preset.to,
        scrollTrigger: {
          trigger: ref.current,
          ...scrollTriggerDefaults,
          ...options,
          onEnter: () => setHasAnimated(true),
        },
      });
    };

    loadGsap();

    return () => {
      // Cleanup ScrollTrigger on unmount
      if (typeof window !== 'undefined') {
        import('@/lib/gsapConfig').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, [animation, options, hasAnimated]);

  return ref;
};

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const loadGsap = async () => {
      const { gsap, ScrollTrigger } = await import('@/lib/gsapConfig');

      gsap.to(ref.current, {
        y: () => speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    };

    loadGsap();
  }, [speed]);

  return ref;
};

// Hook for counting up numbers
export const useCountUp = (end, duration = 2, startOnView = true) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function (ease out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isInView, startOnView]);

  return { ref, count };
};

// Hook for reveal on scroll with intersection observer
export const useRevealOnScroll = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return { ref, isInView };
};

// Hook for mouse position tracking (for interactive effects)
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

// Hook for element-relative mouse position
export const useRelativeMousePosition = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, centerX: 0, centerY: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = (x - rect.width / 2) / (rect.width / 2);
      const centerY = (y - rect.height / 2) / (rect.height / 2);

      setPosition({ x, y, centerX, centerY });
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { ref, position };
};

// Hook for smooth scroll to section
export const useSmoothScroll = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return scrollTo;
};

// Hook for scroll direction detection
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};

// Hook for window size
export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// Hook for reduced motion preference
export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
};
