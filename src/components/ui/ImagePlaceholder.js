'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

// Image Placeholder Component with animation
const ImagePlaceholder = ({
  width = '100%',
  height = '300px',
  aspectRatio,
  className = '',
  label = 'Add Image',
  variant = 'default',
  animate = true,
  delay = 0,
  rounded = 'rounded-2xl',
  ...props
}) => {
  const variants = {
    default: 'bg-gradient-to-br from-light-200 via-light-100 to-light-200',
    magenta: 'bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-blue-500/20',
    cyan: 'bg-gradient-to-br from-accent-cyan/20 via-blue-600/10 to-accent-cyan/20',
    lime: 'bg-gradient-to-br from-accent-lime/20 via-accent-cyan/10 to-accent-lime/20',
    violet: 'bg-gradient-to-br from-blue-700/20 via-blue-600/10 to-blue-700/20',
    rainbow: 'bg-gradient-to-br from-blue-500/20 via-accent-cyan/20 to-blue-800/20',
  };

  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  };

  const style = aspectRatio ? {} : { width, height };

  const content = (
    <div
      className={clsx(
        'relative overflow-hidden flex items-center justify-center',
        variants[variant],
        aspectRatio ? aspectRatios[aspectRatio] : '',
        rounded,
        'border-2 border-dashed border-dark-300/30',
        'hover:border-blue-500/50 transition-colors duration-300',
        className
      )}
      style={style}
      {...props}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Icon and label */}
      <div className="relative text-center text-dark-600/60">
        <svg className="w-16 h-16 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

// Actual Image with placeholder fallback
const AnimatedImage = ({
  src,
  alt = '',
  className = '',
  aspectRatio = 'video',
  rounded = 'rounded-2xl',
  hover = true,
  animate = true,
  delay = 0,
  placeholderVariant = 'default',
  ...props
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    auto: '',
  };

  if (!src) {
    return (
      <ImagePlaceholder
        aspectRatio={aspectRatio}
        variant={placeholderVariant}
        rounded={rounded}
        animate={animate}
        delay={delay}
        className={className}
      />
    );
  }

  const imageContent = (
    <div
      className={clsx(
        'relative overflow-hidden',
        aspectRatios[aspectRatio],
        rounded,
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={clsx(
          'w-full h-full object-cover transition-transform duration-700',
          hover && 'hover:scale-110'
        )}
        {...props}
      />
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        {imageContent}
      </motion.div>
    );
  }

  return imageContent;
};

export { ImagePlaceholder, AnimatedImage };
export default ImagePlaceholder;
