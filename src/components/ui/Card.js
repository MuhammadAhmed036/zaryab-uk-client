'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

const cardVariants = {
  default: 'bg-white border border-light-300',
  elevated: 'bg-white shadow-xl',
  gradient: 'bg-gradient-to-br from-white via-light-100 to-light-200',
  glass: 'bg-white/70 backdrop-blur-lg border border-white/20',
  neon: 'bg-white border-2 border-accent-cyan shadow-lg shadow-accent-cyan/20',
  magenta: 'bg-gradient-to-br from-accent-magenta/10 to-accent-violet/10 border border-accent-magenta/20',
  cyan: 'bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20',
  lime: 'bg-gradient-to-br from-accent-lime/20 to-accent-cyan/10 border border-accent-lime/30',
};

const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
  animate = true,
  delay = 0,
  ...props
}) => {
  const baseClasses = 'rounded-2xl overflow-hidden transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';

  if (animate) {
    return (
      <motion.div
        className={clsx(baseClasses, cardVariants[variant], hoverClasses, className)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={clsx(baseClasses, cardVariants[variant], hoverClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header Component
const CardHeader = ({ children, className = '' }) => (
  <div className={clsx('p-6 pb-0', className)}>
    {children}
  </div>
);

// Card Body Component
const CardBody = ({ children, className = '' }) => (
  <div className={clsx('p-6', className)}>
    {children}
  </div>
);

// Card Footer Component
const CardFooter = ({ children, className = '' }) => (
  <div className={clsx('p-6 pt-0', className)}>
    {children}
  </div>
);

// Card Image Component with placeholder
const CardImage = ({ 
  src, 
  alt = '', 
  className = '', 
  aspectRatio = 'aspect-video',
  placeholder = true 
}) => (
  <div className={clsx('relative overflow-hidden', aspectRatio, className)}>
    {src ? (
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    ) : placeholder && (
      <div className="w-full h-full bg-gradient-to-br from-accent-magenta/20 via-accent-cyan/20 to-accent-violet/20 flex items-center justify-center">
        <div className="text-center text-dark-600">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm opacity-50">Add Image</span>
        </div>
      </div>
    )}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
