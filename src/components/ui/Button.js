'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import clsx from 'clsx';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-accent-magenta to-accent-violet text-white hover:shadow-lg hover:shadow-accent-magenta/30',
  secondary: 'bg-dark-900 text-white hover:bg-dark-800',
  outline: 'border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white',
  ghost: 'text-dark-900 hover:bg-light-200',
  gradient: 'bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-violet text-white bg-300% animate-gradient',
  neon: 'bg-white text-dark-900 border-2 border-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/50',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  animate = true,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-magenta disabled:opacity-50 disabled:cursor-not-allowed';

  const buttonContent = (
    <>
      {loading && (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
    </>
  );

  if (animate) {
    return (
      <motion.button
        ref={ref}
        className={clsx(baseClasses, buttonVariants[variant], buttonSizes[size], className)}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      ref={ref}
      className={clsx(baseClasses, buttonVariants[variant], buttonSizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
