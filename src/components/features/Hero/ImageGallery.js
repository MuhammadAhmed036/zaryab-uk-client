'use client';

import { motion } from 'framer-motion';
import { ImagePlaceholder } from '@/components/ui';

const ImageGallery = () => {
  const mediaItems = [
    { 
      id: 1, 
      type: 'image',
      src: '/images/reel1.jpg',
      alt: 'Featured Artist',
      variant: 'magenta'
    },
    { 
      id: 2, 
      type: 'iframe',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1',
      variant: 'cyan'
    },
    { 
      id: 3, 
      type: 'video',
      src: '/videos/tiktok.mp4',
      variant: 'lime'
    },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Main large image/video */}
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
              loading="lazy"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-2 border-2 border-accent-magenta/30 rounded-2xl -z-10 transform rotate-2" />
        </div>
      </motion.div>

      {/* Top right - Iframe Video */}
      <motion.div
        className="absolute top-4 right-0 w-[35%] z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1&rel=0"
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            style={{ border: 'none' }}
          />
        </div>
      </motion.div>

      {/* Middle right - Video with optimized loading */}
      <motion.div
        className="absolute top-[35%] right-[5%] w-[40%] z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <div className="relative">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
            <video 
              src="/videos/tiktok.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              loading="lazy"
            />
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
