'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';

const MediaGrid = () => {
  const [loadedVideos, setLoadedVideos] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // TikTok style vertical videos - show fewer on mobile
  const allVideos = useMemo(() => [
    { 
      id: 1, 
      src: 'https://player.vimeo.com/video/1154252112?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'BRAINROT',
      link: 'https://www.tiktok.com/@ratatadance8/video/7567038449996369174?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
    { 
      id: 2, 
      src: 'https://player.vimeo.com/video/1154252594?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'DANCERS',
      link: 'https://www.tiktok.com/@nastuyshkakristmas/video/7549616560113978642?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
    { 
      id: 3, 
      src: 'https://player.vimeo.com/video/1154252893?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'CAR EDITS',
      link: 'https://www.tiktok.com/@nitrovoltx/video/7533264161728449814?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
    { 
      id: 4, 
      src: 'https://player.vimeo.com/video/1154253346?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'MOVIE EDITS',
      link: 'https://www.tiktok.com/@rshamrok/video/7587761386999024952?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
    { 
      id: 5, 
      src: 'https://player.vimeo.com/video/1154258411?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'NICHE COMMUNITIES',
      link: 'https://www.tiktok.com/@posterboyren/video/7583687210856189196?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
    { 
      id: 6, 
      src: 'https://player.vimeo.com/video/1154258826?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0',
      title: 'LIP-SYNC',
      link: 'https://www.tiktok.com/@user561782009/video/7585555947440000278?is_from_webapp=1&sender_device=pc&web_id=7551832417540556310'
    },
  ], []);

  // Show all videos on both mobile and desktop
  const tiktokVideos = allVideos;

  // Load all videos on mount
  useEffect(() => {
    const allLoadedVideos = {};
    allVideos.forEach(v => {
      allLoadedVideos[v.id] = true;
    });
    setLoadedVideos(allLoadedVideos);
  }, [allVideos]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Get staggered position for dynamic layout - smaller on mobile
  const getYOffset = (index) => {
    if (isMobile) {
      const offsets = [0, 5, -3, 8, -2, 6];
      return offsets[index] || 0;
    }
    const offsets = [0, 15, -10, 20, 5, -15];
    return offsets[index] || 0;
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      {/* Responsive TikTok Style Grid */}
      <motion.div 
        className="flex flex-row flex-wrap justify-center items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 px-2 py-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tiktokVideos.map((video, index) => (
          <motion.div
            key={video.id}
            variants={cardVariants}
            className="flex-shrink-0"
            style={{ 
              transform: `translateY(${getYOffset(index)}px)` 
            }}
            whileHover={{ 
              scale: 1.08, 
              y: getYOffset(index) - 15,
              zIndex: 20,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Clickable Link Wrapper */}
            <a 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              {/* Video Card - Responsive sizing */}
              <div 
                className="relative w-[85px] h-[140px] xs:w-[100px] xs:h-[165px] sm:w-[120px] sm:h-[200px] md:w-[140px] md:h-[230px] lg:w-[150px] lg:h-[250px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
              {/* Animated Border Gradient on Hover */}
              <motion.div 
                className="absolute -inset-[2px] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #00ffff)',
                  backgroundSize: '400% 400%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />

              {/* Video Container */}
              <div className="absolute inset-[2px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                {/* Vimeo Iframe - Properly scaled */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <iframe
                    src={video.src}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                    frameBorder="0"
                    style={{ 
                      border: 'none',
                      width: '200%',
                      height: '100%',
                    }}
                    title={`Video ${video.id}`}
                  />
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />

                {/* Badge */}
                <motion.div 
                  className="absolute top-1 right-1 xs:top-1.5 xs:right-1.5 sm:top-2 sm:right-2 z-10 bg-gradient-to-r from-blue-600 to-accent-cyan text-white text-[6px] xs:text-[8px] sm:text-[10px] font-bold px-1 py-0.5 xs:px-1.5 sm:px-2 sm:py-1 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  #{index + 1}
                </motion.div>

                {/* Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                  >
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Video Title Overlay */}
                <motion.div 
                  className="absolute bottom-2 left-2 right-2 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 border border-white/10">
                    <p className="text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider text-center leading-tight">
                      {video.title}
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/0 via-accent-cyan/20 to-blue-600/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div 
        className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none hidden md:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none hidden md:block"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default MediaGrid;
