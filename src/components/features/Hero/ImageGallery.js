'use client';

import { motion } from 'framer-motion';
import { ImagePlaceholder } from '@/components/ui';

const ImageGallery = () => {
  const images = [
    { id: 1, variant: 'magenta', label: 'Artist 1', size: 'large' },
    { id: 2, variant: 'cyan', label: 'Artist 2', size: 'small' },
    { id: 3, variant: 'lime', label: 'Artist 3', size: 'small' },
    { id: 4, variant: 'violet', label: 'Event 1', size: 'medium' },
    { id: 5, variant: 'rainbow', label: 'Event 2', size: 'medium' },
    { id: 6, variant: 'magenta', label: 'Studio', size: 'small' },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Main large image */}
      <motion.div
        className="absolute top-0 left-0 w-[60%] z-10"
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
      >
        <div className="relative">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-accent-magenta/20">
            <img 
              src="/images/reel1.jpg" 
              alt="Featured Artist" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-2 border-2 border-accent-magenta/30 rounded-2xl -z-10 transform rotate-2" />
        </div>
      </motion.div>

      {/* Top right small image */}
      <motion.div
        className="absolute top-4 right-0 w-[35%] z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <ImagePlaceholder
          aspectRatio="square"
          variant="cyan"
          label="Artist Photo"
          className="shadow-xl"
          animate={false}
        />
      </motion.div>

      {/* Middle right image */}
      <motion.div
        className="absolute top-[35%] right-[5%] w-[40%] z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <div className="relative">
          <ImagePlaceholder
            aspectRatio="video"
            variant="lime"
            label="Concert Shot"
            className="shadow-xl"
            animate={false}
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-accent-magenta ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom left image */}
      <motion.div
        className="absolute bottom-0 left-[10%] w-[45%] z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ y: -5 }}
      >
        <ImagePlaceholder
          aspectRatio="video"
          variant="violet"
          label="Behind the Scenes"
          className="shadow-xl"
          animate={false}
        />
      </motion.div>

      {/* Bottom right small image */}
      <motion.div
        className="absolute bottom-[15%] right-0 w-[30%] z-40"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.1, rotate: -3 }}
      >
        <ImagePlaceholder
          aspectRatio="square"
          variant="rainbow"
          label="Team"
          className="shadow-lg"
          animate={false}
        />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent-magenta to-accent-violet rounded-full opacity-50 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-lime rounded-full opacity-40 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default ImageGallery;
