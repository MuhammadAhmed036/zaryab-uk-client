'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  animate = false,
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-light-200 text-dark-700',
    primary: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
    cyan: 'bg-accent-cyan/10 text-dark-800 border border-accent-cyan/30',
    magenta: 'bg-blue-500/10 text-dark-800 border border-blue-500/30',
    lime: 'bg-accent-lime/20 text-dark-800 border border-accent-lime/40',
    violet: 'bg-blue-800/10 text-blue-800 border border-blue-800/20',
    gradient: 'bg-gradient-to-r from-accent-cyan to-blue-600 text-white',
    outline: 'border border-dark-300 text-dark-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';

  if (animate) {
    return (
      <motion.span
        className={clsx(baseClasses, variants[variant], sizes[size], className)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
