'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, Container, Heading, Text } from '@/components/ui';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import { useState, useRef } from 'react';

const phoneVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }),
  hover: {
    scale: 1.1,
    y: -15,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const statVariants = {
  initial: { opacity: 0, scale: 0.5, y: 20 },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.4 + index * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const caseStudyCards = [
  {
    id: 1,
    title: '+44',
    subtitle: 'HUGO',
    cardBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
    accentGradient: 'from-emerald-400 via-cyan-400 to-blue-500',
    accentColor: 'text-emerald-400',
    glowColor: 'shadow-emerald-500/20',
    stats: [
      { label: 'STREAMS', value: '4M' },
      { label: 'VIDEOS', value: '500+' },
      { label: 'VIEWS', value: '300M+' }
    ],
    description: 'We were able to produce over 500 football edits within a 3 week period generating 300M+ views and a lot of organic recreations within the football niche. We started the content production at less than 300 video creations.',
    phones: [
      { type: 'FOOTBALL EDITS', variant: 'emerald' },
      { type: 'LUXURY / MONEY EDITS', variant: 'blue' }
    ]
  },
  {
    id: 2,
    title: 'PLENTY',
    subtitle: 'RHEEZ',
    cardBg: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900',
    accentGradient: 'from-cyan-400 via-blue-400 to-violet-500',
    accentColor: 'text-cyan-400',
    glowColor: 'shadow-cyan-500/20',
    stats: [
      { label: 'STREAMS', value: '1M+' },
      { label: 'VIDEOS', value: '8K+' },
      { label: 'VIEWS', value: '251M+' }
    ],
    description: 'We developed content strategy for a debut song by an artist from scratch resulting in over 8K video recreations and over 1M streams. Growing his monthly listeners from 300 to 30K+ within a month.',
    phones: [
      { type: 'INFLUENCER TRENDY', variant: 'cyan' },
      { type: 'AI CONTENT', variant: 'violet' },
      { type: 'FOOTBALL EDITS', variant: 'emerald' },
      { type: 'MOVIE EDITS', variant: 'rose' }
    ]
  }
];

export default function CaseStudiesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const titleText = "CASE STUDIES";

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white pt-24 pb-20 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 via-indigo-400/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Header Section */}
      <Section className="relative py-16 md:py-24">
        <Container className="relative z-10">
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg shadow-blue-500/5"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)" }}
              >
                <motion.span
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Success Stories
                </span>
              </motion.span>
            </motion.div>

            {/* Animated Title - Letter by Letter */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
              initial="hidden"
              animate="visible"
            >
              <span className="flex justify-center flex-wrap gap-x-4">
                {titleText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    className={`inline-block ${letter === ' ' ? 'w-4' : ''} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent`}
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#3b82f6",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Animated Underline */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full" />
            </motion.div>

            {/* Subtitle with Stagger Animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Real results from viral campaigns.{' '}
              <span className="text-blue-600 font-semibold">See how we transformed brands</span>{' '}
              into digital phenomena.
            </motion.p>

            {/* Floating Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center gap-8 md:gap-16 mt-12"
            >
              {[
                { value: '500M+', label: 'Total Views' },
                { value: '10K+', label: 'Videos Created' },
                { value: '5M+', label: 'Streams Generated' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies - Row Format */}
      <Container className="relative z-10 space-y-16 md:space-y-24">
        {caseStudyCards.map((study, index) => (
          <motion.div
            key={study.id}
            className="group"
            onHoverStart={() => setHoveredCard(study.id)}
            onHoverEnd={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Row Container */}
            <motion.div 
              className={`
                relative overflow-hidden rounded-3xl
                ${study.cardBg}
                shadow-2xl ${study.glowColor}
                hover:shadow-3xl transition-all duration-700
              `}
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                
                {/* Left Content Section */}
                <motion.div
                  className="flex flex-col justify-center space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {/* Title Section */}
                  <motion.div variants={fadeInLeft} className="space-y-3">
                    <motion.div
                      className={`text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r ${study.accentGradient} bg-clip-text text-transparent leading-none tracking-tighter`}
                      animate={hoveredCard === study.id ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {study.title}
                    </motion.div>
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-white/90 flex items-center gap-3"
                      animate={hoveredCard === study.id ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className={`w-8 h-0.5 bg-gradient-to-r ${study.accentGradient}`} />
                      {study.subtitle}
                    </motion.div>
                  </motion.div>

                  {/* Stats - Enhanced Cards */}
                  <motion.div
                    className="grid grid-cols-3 gap-4"
                    variants={fadeInLeft}
                  >
                    {study.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        custom={statIndex}
                        variants={statVariants}
                        className="relative group/stat"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <motion.div
                            className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1"
                            animate={hoveredCard === study.id ? { opacity: [0.5, 0.8, 0.5] } : {}}
                            transition={{ duration: 2, repeat: Infinity, delay: statIndex * 0.2 }}
                          >
                            {stat.label}
                          </motion.div>
                          <motion.div
                            className={`text-2xl md:text-3xl font-black ${study.accentColor}`}
                            animate={hoveredCard === study.id ? { y: [0, -2, 0] } : {}}
                            transition={{ duration: 2, repeat: Infinity, delay: statIndex * 0.15 }}
                          >
                            {stat.value}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.div variants={fadeInLeft}>
                    <Text animate={false} className="text-white/80 text-base md:text-lg leading-relaxed">
                      {study.description}
                    </Text>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div variants={fadeInLeft}>
                    <motion.button
                      className={`group/btn px-8 py-4 rounded-full font-bold flex items-center gap-3 bg-white text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Full Case Study</span>
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                        animate={hoveredCard === study.id ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Right Content - Videos Grid */}
                <motion.div
                  className="flex flex-col justify-center"
                  variants={fadeInRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {/* Category Labels */}
                  <div className="flex justify-center gap-6 mb-6">
                    {study.phones.slice(0, 2).map((video, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs font-bold tracking-wider text-white/60 uppercase"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {video.type}
                      </motion.span>
                    ))}
                  </div>

                  {/* Phone Mockups */}
                  <motion.div
                    className={`grid ${study.phones.length === 2 ? 'grid-cols-2' : 'grid-cols-2'} gap-6`}
                    variants={staggerContainer}
                  >
                    {study.phones.map((video, videoIndex) => (
                      <motion.div
                        key={videoIndex}
                        custom={videoIndex}
                        variants={phoneVariants}
                        whileHover="hover"
                        className="group/video"
                      >
                        <motion.div className="relative">
                          {/* Phone Glow Effect */}
                          <motion.div
                            className={`absolute -inset-2 bg-gradient-to-r ${getPhoneGradient(video.variant)} rounded-3xl blur-xl opacity-0 group-hover/video:opacity-40 transition-opacity duration-500`}
                          />
                          
                          {/* Phone Frame */}
                          <div className="relative bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-slate-700">
                            {/* Screen */}
                            <div className={`relative aspect-[9/16] bg-gradient-to-br ${getPhoneGradient(video.variant)} rounded-[1.5rem] overflow-hidden`}>
                              
                              {/* Embedded Vimeo Video */}
                              {videoIndex === 0 ? (
                                <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                                  <iframe
                                    src="https://player.vimeo.com/video/1041732885?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Football Edit Video"
                                  />
                                  
                                  {/* Video Overlay UI */}
                                  <div className="absolute inset-0 pointer-events-none">
                                    {/* Live Indicator */}
                                    <motion.div
                                      className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full"
                                      animate={{ opacity: [1, 0.8, 1] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    >
                                      <motion.div
                                        className="w-2 h-2 bg-red-500 rounded-full"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                      />
                                      <span className="text-[10px] font-bold text-white">LIVE</span>
                                    </motion.div>

                                    {/* TikTok-style side icons */}
                                    <div className="absolute right-3 bottom-20 flex flex-col gap-3">
                                      {[
                                        { icon: '❤️', count: '2.5K' },
                                        { icon: '💬', count: '345' },
                                        { icon: '↗️', count: '1.2K' }
                                      ].map((item, i) => (
                                        <motion.div
                                          key={i}
                                          className="flex flex-col items-center"
                                          animate={{ scale: [1, 1.1, 1] }}
                                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                                        >
                                          <div className="w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-sm shadow-lg">
                                            {item.icon}
                                          </div>
                                          <span className="text-[8px] text-white/90 font-bold mt-1">{item.count}</span>
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                      <div className="h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                                        <motion.div
                                          className="h-full bg-white rounded-full"
                                          animate={{ width: ['0%', '100%', '0%'] }}
                                          transition={{ duration: 15, repeat: Infinity }}
                                        />
                                      </div>
                                    </div>

                                    {/* Video Title Overlay */}
                                    <div className="absolute bottom-12 left-4 right-16">
                                      <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-white"
                                      >
                                        <div className="text-[10px] font-bold mb-1">@football_edits</div>
                                        <div className="text-[9px] opacity-90 line-clamp-2">
                                          Amazing football skills compilation 🔥 
                                          #football #skills #viral
                                        </div>
                                      </motion.div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Fallback Video Content for other phones */
                                <motion.div
                                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                                  animate={{ opacity: [0.3, 0.2, 0.3] }}
                                  transition={{ duration: 3, repeat: Infinity, delay: videoIndex * 0.5 }}
                                >
                                  {/* Play Button */}
                                  <motion.div
                                    className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: videoIndex * 0.3 }}
                                    whileHover={{ scale: 1.2 }}
                                  >
                                    <div className="w-0 h-0 border-l-[12px] border-l-slate-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                                  </motion.div>

                                  {/* Live Indicator */}
                                  <motion.div
                                    className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    <motion.div
                                      className="w-2 h-2 bg-red-500 rounded-full"
                                      animate={{ scale: [1, 1.3, 1] }}
                                      transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    <span className="text-[10px] font-bold text-white">LIVE</span>
                                  </motion.div>

                                  {/* TikTok-style side icons */}
                                  <div className="absolute right-3 bottom-20 flex flex-col gap-4">
                                    {['❤️', '💬', '↗️'].map((icon, i) => (
                                      <motion.div
                                        key={i}
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-lg"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                      >
                                        {icon}
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-white rounded-full"
                                        animate={{ width: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 10, repeat: Infinity, delay: videoIndex * 2 }}
                                      />
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                            
                            {/* Phone Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                          </div>
                        </motion.div>
                        
                        {/* Video Label */}
                        <motion.div
                          className="text-center mt-4"
                          animate={hoveredCard === study.id ? { y: [0, -3, 0] } : {}}
                          transition={{ duration: 2, repeat: Infinity, delay: videoIndex * 0.2 }}
                        >
                          {videoIndex === 0 ? (
                            <a 
                              href="https://vimeo.com/1041732885" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
                            >
                              Click for example
                            </a>
                          ) : (
                            <a href="#" className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors">
                              Click for example
                            </a>
                          )}
                          <div className="text-sm font-bold text-white/90 mt-1">{video.type}</div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </Container>

      {/* Bottom CTA Section */}
      <motion.div
        className="mt-24 md:mt-32 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <motion.div
            className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-black text-white mb-4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Ready to Go Viral?
              </motion.h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Let us transform your brand into the next digital phenomenon. Start your viral campaign today.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold rounded-full shadow-2xl hover:shadow-blue-500/20 transition-all"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Launch Your Campaign</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </main>
  );
}

function getPhoneGradient(variant) {
  const gradients = {
    emerald: 'from-emerald-400 to-green-600',
    blue: 'from-blue-400 to-blue-600',
    cyan: 'from-cyan-400 to-blue-500',
    violet: 'from-violet-500 to-purple-600',
    rose: 'from-rose-400 to-pink-600',
  };
  return gradients[variant] || gradients.blue;
}
