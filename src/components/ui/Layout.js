'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

// Animated Section Wrapper
export const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'py-20 md:py-32',
  ...props
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-light-100',
    gradient: 'bg-gradient-to-b from-white via-light-100 to-white',
    'gradient-reverse': 'bg-gradient-to-b from-light-100 via-white to-light-100',
    mesh: 'bg-white bg-mesh-pattern',
  };

  return (
    <section
      id={id}
      className={clsx('relative overflow-hidden', backgrounds[background], padding, className)}
      {...props}
    >
      {children}
    </section>
  );
};

// Container Component
export const Container = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Animated Heading Component
export const Heading = ({
  children,
  as: Component = 'h2',
  size = 'xl',
  className = '',
  animate = true,
  gradient = false,
  ...props
}) => {
  const sizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl',
    '2xl': 'text-5xl md:text-6xl lg:text-7xl',
    '3xl': 'text-6xl md:text-7xl lg:text-8xl',
  };

  const gradientClass = gradient 
    ? 'bg-gradient-to-r from-blue-500 via-blue-700 to-accent-cyan bg-clip-text text-transparent' 
    : 'text-dark-900';

  const baseClasses = 'font-display font-bold tracking-tight leading-tight';

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Component
          className={clsx(baseClasses, sizes[size], gradientClass, className)}
          {...props}
        >
          {children}
        </Component>
      </motion.div>
    );
  }

  return (
    <Component
      className={clsx(baseClasses, sizes[size], gradientClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

// Animated Text Component
export const Text = ({
  children,
  size = 'base',
  className = '',
  animate = true,
  delay = 0,
  ...props
}) => {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };

  if (animate) {
    return (
      <motion.p
        className={clsx('text-dark-600 leading-relaxed', sizes[size], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.p>
    );
  }

  return (
    <p className={clsx('text-dark-600 leading-relaxed', sizes[size], className)} {...props}>
      {children}
    </p>
  );
};

// Grid Component
export const Grid = ({
  children,
  cols = 3,
  gap = 'gap-6',
  className = '',
  ...props
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div className={clsx('grid', gridCols[cols], gap, className)} {...props}>
      {children}
    </div>
  );
};

// Divider Component
export const Divider = ({ className = '', gradient = false }) => (
  <div
    className={clsx(
      'h-px w-full',
      gradient
        ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        : 'bg-light-300',
      className
    )}
  />
);
