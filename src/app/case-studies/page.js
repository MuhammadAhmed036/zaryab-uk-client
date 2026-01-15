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
    logo: '/images/case-studies/logos/%2B44%20-%20Hugo.jpg',
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
      { type: 'FOOTBALL EDITS', variant: 'emerald', videoUrl: 'https://player.vimeo.com/video/1154665843?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
      { type: 'LUXURY / MONEY EDITS', variant: 'blue', videoUrl: 'https://player.vimeo.com/video/1154666418?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' }
    ]
  },
  {
    id: 2,
    title: 'PLENTY',
    subtitle: 'RHEEZ',
    logo: '/images/case-studies/logos/Plenty - Rheez.png',
    cardBg: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900',
    accentGradient: 'from-cyan-400 via-blue-400 to-violet-500',
    accentColor: 'text-cyan-400',
    glowColor: 'shadow-cyan-500/20',
    stats: [
      { label: 'STREAMS', value: '1M+' },
      { label: 'VIDEOS', value: '5K+' },
      { label: 'VIEWS', value: '261M+' }
    ],
    description: 'We developed content strategy for a debut song by an artist from scratch resulting in over 8K video recreations and over 1M streams. Growing his monthly listeners from 300 to 30K+ within a month.',
    phones: [
      { type: 'INFLUENCER TRENDY', variant: 'cyan', videoUrl: 'https://player.vimeo.com/video/1154672634?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
      { type: 'AI CONTENT', variant: 'violet', imageUrl: '/images/case-studies/logos/ssstik.io_1768472924865.webp' },
      { type: 'FOOTBALL EDITS', variant: 'emerald', videoUrl: 'https://player.vimeo.com/video/1154673899?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
      { type: 'MOVIE EDITS', variant: 'rose', videoUrl: 'https://player.vimeo.com/video/1154673939?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' }
    ]
  }
];

// Content At Scale Section Data
const contentAtScaleData = {
  title: 'NUNCA MUDA?',
  logo: '/images/case-studies/logos/nunca muda logo.jpeg',
  mainPhone: {
    type: 'CAR EDITS',
    variant: 'violet',
    image: '/images/case-studies/car-edit.jpg'
  },
  contentTypes: [
    {
      title: 'UNEXPECTED EDITS TEMPLATE',
      subtitle: 'CAR EDITS',
      variant: 'orange',
      videoUrl: 'https://player.vimeo.com/video/1154675480?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    },
    {
      title: 'MEME DANCE VIDEOS',
      subtitle: 'MEME DANCE EDITS',
      variant: 'cyan',
      videoUrl: 'https://player.vimeo.com/video/1154675586?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    },
    {
      title: 'FOOTBALL EDITS',
      subtitle: 'FOOTBALL EDITS',
      variant: 'emerald',
      videoUrl: 'https://player.vimeo.com/video/1154675639?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    },
    {
      title: 'MOVIE/SERIES EDITS',
      subtitle: 'FOOTBALL EDITS',
      variant: 'slate',
      videoUrl: 'https://player.vimeo.com/video/1154675694?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    }
  ],
  stats: [
    { label: 'STREAMS', value: '120M' },
    { label: 'VIDEOS', value: '5000+' },
    { label: 'VIEWS', value: '500M+' }
  ],
  description: 'We were able to produce content at scale for 4 different niches which resulted in over 500M+ views within a week'
};

// LIKE ME - MGEE Section Data
const likeMeData = {
  title: 'LIKE ME',
  artist: 'MGEE',
  logo: '/images/case-studies/logos/Like me - MGEE.jpeg',
  contentTypes: [
    {
      title: 'FOOTBALL EDITS',
      subtitle: 'FOOTBALL EDITS',
      variant: 'emerald',
      videoUrl: 'https://player.vimeo.com/video/1154677024?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    },
    {
      title: 'INTERVIEW EDITS',
      subtitle: 'UNEXPECTED FOOTBALL EDITS',
      variant: 'cyan',
      videoUrl: 'https://player.vimeo.com/video/1154677107?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479'
    }
  ],
  stats: [
    { label: 'SREAMS', value: '20M' },
    { label: 'VIDEOS', value: '150+' },
    { label: 'VIEWS', value: '30M+' }
  ],
  description: 'We were able to produce over 150 football edits within a week generating 30M+ views and a lot of organic recreations within the football niche. We also edited street interviews for unexpected football edits resulting in a trend.'
};

// COLD - ALFIE CASTLEY Section Data
const coldData = {
  title: 'COLD',
  artist: 'ALFIE CASTLEY',
  logo: '/images/case-studies/logos/Cold - Alfie logo.png',
  demoInfo: {
    title: 'Cold DEMO',
    artist: 'Alfie Castley',
    videos: '18.1k videos'
  },
  contentCategories: [
    { title: 'MOVIE EDITS', variant: 'rose', videoUrl: 'https://player.vimeo.com/video/1154668617?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'ANIME EDITS', variant: 'violet', videoUrl: 'https://player.vimeo.com/video/1154668822?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'INFLUENCER CONTENT', variant: 'cyan', videoUrl: 'https://player.vimeo.com/video/1154669787?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'LYRICAL CONTENT', variant: 'emerald', videoUrl: 'https://player.vimeo.com/video/1154669717?title=0&byline=0&portrait=0&badge=0&autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' }
  ],
  stats: [
    { label: 'SREAMS', value: '8M' },
    { label: 'VIDEOS', value: '10K+' },
    { label: 'VIEWS', value: '50M+' }
  ],
  description: 'We developed this sound from 10 creations to 18k creation within 2 months, pushing the track from 20k daily streams on release day to 150k daily streams within a week'
};

// TEN YEARS - HENRY MOODIE Section Data
const tenYearsData = {
  title: 'TEN YEARS',
  artist: 'HENRY MOODIE',
  logo: '/images/case-studies/logos/ten years - henry moodie.png',
  demoInfo: {
    title: 'ten years time',
    artist: 'Henry Moodie',
    videos: '8407 videos',
    hasAddToMusic: true
  },
  contentCategories: [
    { title: 'MOVIE EDITS', variant: 'rose', videoUrl: 'https://player.vimeo.com/video/1154682303?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'KDRAMA EDITS', variant: 'violet', videoUrl: 'https://player.vimeo.com/video/1154682349?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'ROMANTIC QUOTES', variant: 'pink', videoUrl: 'https://player.vimeo.com/video/1154682412?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'INFLUENCER CONTENT', variant: 'cyan', videoUrl: 'https://player.vimeo.com/video/1154682591?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' }
  ],
  stats: [
    { label: 'SREAMS', value: '3M' },
    { label: 'VIDEOS', value: '6K+' },
    { label: 'VIEWS', value: '30M+' }
  ],
  description: 'We developed this sound from 300 creations to 8k creations within 1 month, pushing the track from 20k daily streams on release day to 110k daily streams within a week'
};

// WILDFIRE - FUZION Section Data
const wildfireData = {
  title: 'WILDFIRE',
  artist: 'FUZION',
  logo: '/images/case-studies/logos/Wildfire - Fuzion.png',
  demoInfo: {
    title: 'WILDFIRE',
    artist: 'FUZION&Zeli',
    videos: '5541 videos',
    hasAddToMusic: true
  },
  contentCategories: [
    { title: 'MOVIE EDITS', variant: 'rose', videoUrl: 'https://player.vimeo.com/video/1154684553?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'ANIME EDITS', variant: 'violet', videoUrl: 'https://player.vimeo.com/video/1154686102?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'FOOTBALL EDITS', variant: 'emerald', videoUrl: 'https://player.vimeo.com/video/1154688182?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' },
    { title: 'INFLUENCER CONTENT', variant: 'cyan', videoUrl: 'https://player.vimeo.com/video/1154684750?title=0&byline=0&portrait=0&badge=0&?autoplay=1&muted=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' }
  ],
  stats: [
    { label: 'SREAMS', value: '5M' },
    { label: 'VIDEOS', value: '2K+' },
    { label: 'VIEWS', value: '50M+' }
  ],
  description: 'We developed this sound from 100 creations to 2k creations within 2 weeks, mainly focusing around movie edits, sports edits and influencer content'
};

// WATCHIN - NICHOLAS CREUS Section Data
const watchinData = {
  title: 'WATCHIN',
  artist: 'NICHOLAS CREUS',
  logo: '/images/case-studies/logos/Watchin - Nicholas Creus.png',
  contentCategories: [
    { title: 'AESTHETIC CONTENT', variant: 'slate' },
    { title: 'SCENEIC CONTENT', variant: 'cyan' },
    { title: 'MOVIE/SERIES EDITS', variant: 'violet' }
  ],
  stats: [
    { label: 'SREAMS', value: '2.2M' },
    { label: 'VIDEOS', value: '5K+' },
    { label: 'VIEWS', value: '2B+' }
  ],
  description: 'We were able to produce content at scale for 3 different ambient / hopecore niches, building content from 5 creations to 150k creations within 4 weeks'
};

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
                    {/* Logo Image */}
                    {study.logo && (
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <img 
                          src={study.logo} 
                          alt={`${study.title} logo`}
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </motion.div>
                    )}
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
                              {video.videoUrl ? (
                                <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                                  <iframe
                                    src={video.videoUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={`${video.type} Video`}
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
                              ) : video.imageUrl ? (
                                /* Static Image Content */
                                <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                                  <img 
                                    src={video.imageUrl}
                                    alt={video.type}
                                    className="w-full h-full object-cover"
                                  />
                                  
                                  {/* Image Overlay UI */}
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
                                        { icon: '❤️', count: '3.8K' },
                                        { icon: '💬', count: '567' },
                                        { icon: '↗️', count: '2.1K' }
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
                                          transition={{ duration: 12, repeat: Infinity }}
                                        />
                                      </div>
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
                          {video.videoUrl ? (
                            <a 
                              href={video.videoUrl.replace('player.vimeo.com/video/', 'vimeo.com/')} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
                            >
                            </a>
                          ) : (
                            <a href="#" className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors">
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

      {/* Content At Scale Section - Inspired by Multi-Niche Campaign */}
      <Section className="relative py-20 md:py-32 mt-16 md:mt-24">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Top Section - Phone Showcase Grid */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center mb-16">
                
                {/* Logo - Left Side */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Logo Glow */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-violet-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-2xl opacity-60"
                      animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Logo Image */}
                    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                      <img 
                        src={contentAtScaleData.logo} 
                        alt="Nunca Muda Logo"
                        className="w-[180px] md:w-[220px] h-auto object-contain"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Type Phones Grid - Right Side */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {contentAtScaleData.contentTypes.map((content, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Category Label */}
                      <motion.div
                        className="text-[10px] md:text-xs font-bold tracking-wider text-white/70 uppercase mb-3 text-center max-w-[120px]"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {content.title}
                      </motion.div>

                      {/* Phone Mockup */}
                      <motion.div
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.08, y: -12 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Glow Effect */}
                        <motion.div
                          className={`absolute -inset-2 bg-gradient-to-r ${getContentGradient(content.variant)} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                        />
                        
                        {/* Phone Frame */}
                        <div className="relative bg-black rounded-[1.8rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[100px] md:w-[130px]">
                          <div className={`relative aspect-[9/16] bg-gradient-to-br ${getContentGradient(content.variant)} rounded-[1.4rem] overflow-hidden`}>
                            
                            {/* Video or Content Preview */}
                            {content.videoUrl ? (
                              <div className="absolute inset-0 rounded-[1.4rem] overflow-hidden">
                                <iframe
                                  src={content.videoUrl}
                                  className="w-full h-full object-cover"
                                  frameBorder="0"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                  title={`${content.subtitle} Video`}
                                />
                                
                                {/* Mini Video Overlay UI */}
                                <div className="absolute inset-0 pointer-events-none">
                                  {/* Mini TikTok UI */}
                                  <div className="absolute right-2 bottom-16 flex flex-col gap-2">
                                    {['❤️', '💬'].map((icon, i) => (
                                      <motion.div
                                        key={i}
                                        className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                      >
                                        {icon}
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="absolute bottom-3 left-2 right-2">
                                    <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-white rounded-full"
                                        animate={{ width: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 6 + index * 2, repeat: Infinity }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* Fallback Content Preview */
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <motion.div
                                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                  animate={{ scale: [1, 1.15, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                >
                                  <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                </motion.div>

                                {/* Mini TikTok UI */}
                                <div className="absolute right-2 bottom-16 flex flex-col gap-2">
                                  {['❤️', '💬'].map((icon, i) => (
                                    <motion.div
                                      key={i}
                                      className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    >
                                      {icon}
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Progress Bar */}
                                <div className="absolute bottom-3 left-2 right-2">
                                  <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-white rounded-full"
                                      animate={{ width: ['0%', '100%', '0%'] }}
                                      transition={{ duration: 6 + index * 2, repeat: Infinity }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Phone Notch */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
                        </div>
                      </motion.div>

                      {/* Click Link & Subtitle */}
                      <motion.a
                        href="#"
                        className="text-[10px] md:text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors mt-3"
                        whileHover={{ scale: 1.05 }}
                      >
                      </motion.a>
                      <div className="text-[10px] md:text-xs font-bold text-white/80 mt-1 uppercase tracking-wide">
                        {content.subtitle}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider Line */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Bottom Section - Stats & Description */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                
                {/* Stats Column */}
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {contentAtScaleData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-white/60 text-sm md:text-base font-bold tracking-wider">
                        {stat.label}:
                      </span>
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {contentAtScaleData.description}
                  </motion.p>
                  
                  {/* Highlight Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {['Multi-Niche Strategy', 'Viral Content', 'Scale Production', 'Rapid Growth'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white/80 border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* LIKE ME - MGEE Section */}
      <Section className="relative py-20 md:py-32">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-600/15 via-green-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [-50, 0, -50] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Side - Album Art & Stats */}
                <motion.div
                  className="flex flex-col items-center lg:items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {/* Album Cover / Logo */}
                  <motion.div
                    className="relative mb-8 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-60"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {likeMeData.logo ? (
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <img 
                          src={likeMeData.logo} 
                          alt="Like Me - MGEE Logo"
                          className="w-48 md:w-56 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative w-48 md:w-56 aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* Car/City Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-600/50 via-slate-700/30 to-black" />
                        
                        {/* Title Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                          <motion.div
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                            style={{ fontFamily: 'serif' }}
                            animate={{ textShadow: ['0 0 20px rgba(255,255,255,0.3)', '0 0 40px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.3)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            LIKE
                          </motion.div>
                          <motion.div
                            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tighter leading-none"
                            style={{ fontFamily: 'serif', fontStyle: 'italic' }}
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ME
                          </motion.div>
                        </div>

                        {/* Parental Advisory Badge */}
                        <div className="absolute bottom-2 left-2">
                          <div className="bg-white text-black text-[6px] font-bold px-1.5 py-0.5 tracking-tight">
                            EXPLICIT
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Song Title & Artist */}
                  <motion.div
                    className="text-center lg:text-left mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{likeMeData.title}</h3>
                    <p className="text-lg text-white/60 font-semibold">{likeMeData.artist}</p>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {likeMeData.stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-baseline gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <span className="text-white/60 text-sm font-bold tracking-wider">
                          {stat.label}:
                        </span>
                        <motion.span
                          className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                          animate={{ opacity: [0.9, 1, 0.9] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {stat.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Side - Content Types & Description */}
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Category Headers */}
                  <div className="flex justify-center gap-8 md:gap-16 mb-6">
                    {likeMeData.contentTypes.map((content, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs md:text-sm font-bold tracking-wider text-white/80 uppercase"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {content.title}
                      </motion.span>
                    ))}
                  </div>

                  {/* Phone Mockups */}
                  <div className="flex justify-center gap-6 md:gap-10 mb-8">
                    {likeMeData.contentTypes.map((content, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      >
                        {/* Phone */}
                        <motion.div
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.08, y: -12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`absolute -inset-3 bg-gradient-to-r ${getContentGradient(content.variant)} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                          />
                          
                          <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[120px] md:w-[150px]">
                            <div className={`relative aspect-[9/16] bg-gradient-to-br ${getContentGradient(content.variant)} rounded-[1.6rem] overflow-hidden`}>
                              
                              {/* Video or TikTok-style UI Overlay */}
                              {content.videoUrl ? (
                                <div className="absolute inset-0 rounded-[1.6rem] overflow-hidden">
                                  <iframe
                                    src={content.videoUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={`${content.subtitle} Video`}
                                  />
                                  
                                  {/* Video Overlay UI */}
                                  <div className="absolute inset-0 pointer-events-none">
                                    {/* Right Side Icons */}
                                    <div className="absolute right-2 bottom-20 flex flex-col gap-3">
                                      {[
                                        { icon: '❤️', count: '45.2K' },
                                        { icon: '💬', count: '892' },
                                        { icon: '↗️', count: '2.1K' }
                                      ].map((item, i) => (
                                        <motion.div
                                          key={i}
                                          className="flex flex-col items-center"
                                          animate={{ scale: [1, 1.1, 1] }}
                                          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                                        >
                                          <div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-xs">
                                            {item.icon}
                                          </div>
                                          <span className="text-[7px] text-white/80 font-bold mt-0.5">{item.count}</span>
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                                      <motion.div
                                        className="h-full bg-white"
                                        animate={{ width: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 8 + index * 2, repeat: Infinity }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Fallback TikTok-style UI */
                                <div className="absolute inset-0 bg-black/30">
                                  {/* Top Bar */}
                                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                                      <span className="text-[8px] text-white/80 font-semibold">Following</span>
                                    </div>
                                    <div className="text-[8px] text-white font-bold">For You</div>
                                  </div>

                                  {/* Play Button */}
                                  <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                  >
                                    <motion.div
                                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    >
                                      <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                    </motion.div>
                                  </motion.div>

                                  {/* Right Side Icons */}
                                  <div className="absolute right-2 bottom-20 flex flex-col gap-3">
                                    {[
                                      { icon: '❤️', count: '45.2K' },
                                      { icon: '💬', count: '892' },
                                      { icon: '↗️', count: '2.1K' }
                                    ].map((item, i) => (
                                      <motion.div
                                        key={i}
                                        className="flex flex-col items-center"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                                      >
                                        <div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-xs">
                                          {item.icon}
                                        </div>
                                        <span className="text-[7px] text-white/80 font-bold mt-0.5">{item.count}</span>
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Bottom Info */}
                                  <div className="absolute bottom-3 left-3 right-10">
                                    <div className="text-[8px] font-bold text-white mb-0.5">@football_creator</div>
                                    <div className="text-[7px] text-white/80 line-clamp-2">
                                      🔥 Insane skills #football #viral
                                    </div>
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                                    <motion.div
                                      className="h-full bg-white"
                                      animate={{ width: ['0%', '100%', '0%'] }}
                                      transition={{ duration: 8 + index * 2, repeat: Infinity }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full" />
                          </div>
                        </motion.div>

                        {/* Labels */}
                        <motion.a
                          href="#"
                          className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors mt-4"
                          whileHover={{ scale: 1.05 }}
                        >
                        </motion.a>
                        <div className="text-xs font-bold text-white/80 mt-1 uppercase tracking-wide">
                          {content.subtitle}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-base md:text-lg text-white/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {likeMeData.description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* COLD - ALFIE CASTLEY Section */}
      <Section className="relative py-20 md:py-32">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-rose-600/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Top Row - Album & Categories */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                
                {/* Logo - Left */}
                <motion.div
                  className="lg:col-span-3 flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-rose-500/30 via-violet-500/30 to-purple-500/30 rounded-2xl blur-2xl opacity-50"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {coldData.logo ? (
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <img 
                          src={coldData.logo} 
                          alt="Cold - Alfie Castley Logo"
                          className="w-40 md:w-48 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative w-40 md:w-48 aspect-square bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black" />
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] text-white/60 font-medium tracking-wider">ALFIE CASTLEY</span>
                          <motion.span
                            className="ml-1 inline-block w-1.5 h-1.5 bg-red-500 rounded-full"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Title & Artist */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">{coldData.title} –</h3>
                    <p className="text-sm text-white/60 font-semibold">{coldData.artist}</p>
                  </motion.div>
                </motion.div>

                {/* Categories Grid - Right */}
                <motion.div
                  className="lg:col-span-9"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Category Headers */}
                  <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                    {coldData.contentCategories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <motion.span
                          className={`text-sm md:text-base font-black tracking-wider uppercase bg-gradient-to-r ${getContentGradient(cat.variant)} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {cat.title}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Phone Mockups with Videos */}
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {coldData.contentCategories.map((cat, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {/* Phone */}
                        <motion.div
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.08, y: -12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`absolute -inset-3 bg-gradient-to-r ${getContentGradient(cat.variant)} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                          />
                          
                          <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[100px] md:w-[130px]">
                            <div className={`relative aspect-[9/16] bg-gradient-to-br ${getContentGradient(cat.variant)} rounded-[1.6rem] overflow-hidden`}>
                              
                              {/* Video Content */}
                              {cat.videoUrl ? (
                                <div className="absolute inset-0 rounded-[1.6rem] overflow-hidden">
                                  <iframe
                                    src={cat.videoUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={`${cat.title} Video`}
                                  />
                                  
                                  {/* Video Overlay UI */}
                                  <div className="absolute inset-0 pointer-events-none">
                                    {/* Mini TikTok UI */}
                                    <div className="absolute right-2 bottom-16 flex flex-col gap-2">
                                      {['❤️', '💬'].map((icon, i) => (
                                        <motion.div
                                          key={i}
                                          className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
                                          animate={{ scale: [1, 1.2, 1] }}
                                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        >
                                          {icon}
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="absolute bottom-3 left-2 right-2">
                                      <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                                        <motion.div
                                          className="h-full bg-white rounded-full"
                                          animate={{ width: ['0%', '100%', '0%'] }}
                                          transition={{ duration: 8 + index * 2, repeat: Infinity }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Fallback */
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <motion.div
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                  </motion.div>
                                </div>
                              )}
                            </div>
                            
                            {/* Phone Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
                          </div>
                        </motion.div>

                        {/* Category Label */}
                        <div className="text-[10px] md:text-xs font-bold text-white/80 mt-3 uppercase tracking-wide text-center">
                          {cat.title}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Bottom Row - Stats & Description */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Stats */}
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {coldData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-white/60 text-sm font-bold tracking-wider">
                        {stat.label}:
                      </span>
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 bg-clip-text text-transparent"
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {coldData.description}
                  </motion.p>

                  {/* Highlight Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {['Sound Development', 'Viral Growth', '18K Creations', 'Daily Streams'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white/80 border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* TEN YEARS - HENRY MOODIE Section */}
      <Section className="relative py-20 md:py-32">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/15 via-rose-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [-30, 20, -30] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Top Row - Album & Categories */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                
                {/* Logo - Left */}
                <motion.div
                  className="lg:col-span-3 flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-green-500/30 to-teal-500/30 rounded-2xl blur-2xl opacity-50"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {tenYearsData.logo ? (
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <img 
                          src={tenYearsData.logo} 
                          alt="Ten Years - Henry Moodie Logo"
                          className="w-40 md:w-48 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative w-40 md:w-48 aspect-square bg-gradient-to-br from-emerald-900/80 via-green-900/60 to-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800/40 via-green-900/50 to-black" />
                        <div className="absolute inset-0 flex items-end justify-center pb-8">
                          <motion.div
                            className="w-16 h-24 bg-black/80 rounded-t-full"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Title & Artist */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">{tenYearsData.title} –</h3>
                    <p className="text-sm text-white/60 font-semibold">{tenYearsData.artist}</p>
                  </motion.div>
                </motion.div>

                {/* Categories Grid - Right */}
                <motion.div
                  className="lg:col-span-9"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Category Headers */}
                  <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                    {tenYearsData.contentCategories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <motion.span
                          className={`text-sm md:text-base font-black tracking-wider uppercase bg-gradient-to-r ${getContentGradient(cat.variant)} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {cat.title}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Phone Mockups with Videos */}
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {tenYearsData.contentCategories.map((cat, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {/* Phone */}
                        <motion.div
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.08, y: -12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`absolute -inset-3 bg-gradient-to-r ${getContentGradient(cat.variant)} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                          />
                          
                          <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[100px] md:w-[130px]">
                            <div className={`relative aspect-[9/16] bg-gradient-to-br ${getContentGradient(cat.variant)} rounded-[1.6rem] overflow-hidden`}>
                              
                              {/* Video Content */}
                              {cat.videoUrl ? (
                                <div className="absolute inset-0 rounded-[1.6rem] overflow-hidden">
                                  <iframe
                                    src={cat.videoUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={`${cat.title} Video`}
                                  />
                                  
                                  {/* Video Overlay UI */}
                                  <div className="absolute inset-0 pointer-events-none">
                                    {/* Mini TikTok UI */}
                                    <div className="absolute right-2 bottom-16 flex flex-col gap-2">
                                      {['❤️', '💬'].map((icon, i) => (
                                        <motion.div
                                          key={i}
                                          className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
                                          animate={{ scale: [1, 1.2, 1] }}
                                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        >
                                          {icon}
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="absolute bottom-3 left-2 right-2">
                                      <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                                        <motion.div
                                          className="h-full bg-white rounded-full"
                                          animate={{ width: ['0%', '100%', '0%'] }}
                                          transition={{ duration: 8 + index * 2, repeat: Infinity }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Fallback */
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <motion.div
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                  </motion.div>
                                </div>
                              )}
                            </div>
                            
                            {/* Phone Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
                          </div>
                        </motion.div>

                        {/* Category Label */}
                        <div className="text-[10px] md:text-xs font-bold text-white/80 mt-3 uppercase tracking-wide text-center">
                          {cat.title}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Bottom Row - Stats & Description */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Stats */}
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {tenYearsData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-white/60 text-sm font-bold tracking-wider">
                        {stat.label}:
                      </span>
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-violet-400 bg-clip-text text-transparent"
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {tenYearsData.description}
                  </motion.p>

                  {/* Highlight Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {['KDrama Trend', 'Romantic Niche', '8K Creations', '110K Daily Streams'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white/80 border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* WILDFIRE - FUZION Section */}
      <Section className="relative py-20 md:py-32">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Effects - Fire Theme */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-600/20 via-orange-500/15 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], y: [-20, 20, -20] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/15 via-yellow-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Top Row - Album & Categories */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                
                {/* Logo - Left */}
                <motion.div
                  className="lg:col-span-3 flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-red-500/40 via-orange-500/40 to-yellow-500/30 rounded-2xl blur-2xl opacity-60"
                      animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {wildfireData.logo ? (
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <img 
                          src={wildfireData.logo} 
                          alt="Wildfire - Fuzion Logo"
                          className="w-40 md:w-48 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative w-40 md:w-48 aspect-square bg-gradient-to-br from-red-900 via-orange-900 to-black rounded-lg overflow-hidden border border-orange-500/20 shadow-2xl">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black via-red-900/50 to-orange-500/30"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-white/40 via-orange-400/30 to-transparent rounded-full blur-xl"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    )}
                  </motion.div>

                  {/* Title & Artist */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">{wildfireData.title} –</h3>
                    <p className="text-sm text-white/60 font-semibold">{wildfireData.artist}</p>
                  </motion.div>
                </motion.div>

                {/* Categories Grid - Right */}
                <motion.div
                  className="lg:col-span-9"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Category Headers */}
                  <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                    {wildfireData.contentCategories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <motion.span
                          className={`text-sm md:text-base font-black tracking-wider uppercase bg-gradient-to-r ${getContentGradient(cat.variant)} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {cat.title}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Phone Mockups with Videos */}
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {wildfireData.contentCategories.map((cat, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {/* Phone */}
                        <motion.div
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.08, y: -12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`absolute -inset-3 bg-gradient-to-r ${getContentGradient(cat.variant)} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                          />
                          
                          <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[100px] md:w-[130px]">
                            <div className={`relative aspect-[9/16] bg-gradient-to-br ${getContentGradient(cat.variant)} rounded-[1.6rem] overflow-hidden`}>
                              
                              {/* Video Content */}
                              {cat.videoUrl ? (
                                <div className="absolute inset-0 rounded-[1.6rem] overflow-hidden">
                                  <iframe
                                    src={cat.videoUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={`${cat.title} Video`}
                                  />
                                  
                                  {/* Video Overlay UI */}
                                  <div className="absolute inset-0 pointer-events-none">
                                    {/* Mini TikTok UI */}
                                    <div className="absolute right-2 bottom-16 flex flex-col gap-2">
                                      {['❤️', '💬'].map((icon, i) => (
                                        <motion.div
                                          key={i}
                                          className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
                                          animate={{ scale: [1, 1.2, 1] }}
                                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        >
                                          {icon}
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="absolute bottom-3 left-2 right-2">
                                      <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                                        <motion.div
                                          className="h-full bg-white rounded-full"
                                          animate={{ width: ['0%', '100%', '0%'] }}
                                          transition={{ duration: 8 + index * 2, repeat: Infinity }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                /* Fallback */
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <motion.div
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                  </motion.div>
                                </div>
                              )}
                            </div>
                            
                            {/* Phone Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
                          </div>
                        </motion.div>

                        {/* Category Label */}
                        <div className="text-[10px] md:text-xs font-bold text-white/80 mt-3 uppercase tracking-wide text-center">
                          {cat.title}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Bottom Row - Stats & Description */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Stats */}
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {wildfireData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-white/60 text-sm font-bold tracking-wider">
                        {stat.label}:
                      </span>
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {wildfireData.description}
                  </motion.p>

                  {/* Highlight Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {['Movie Edits', 'Sports Content', '2 Week Growth', 'Multi-Niche'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-orange-200 border border-orange-500/20"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.2)' }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* WATCHIN - NICHOLAS CREUS Section */}
      <Section className="relative py-20 md:py-32">
        <Container className="relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Effects - Cinematic Theme */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/15 via-blue-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-slate-500/15 via-gray-500/10 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Top Row - Album & Categories */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                
                {/* Logo - Left */}
                <motion.div
                  className="lg:col-span-3 flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-slate-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-50"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {watchinData.logo ? (
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <img 
                          src={watchinData.logo} 
                          alt="Watchin - Nicholas Creus Logo"
                          className="w-40 md:w-48 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="relative w-40 md:w-48 aspect-square bg-gradient-to-br from-slate-700 via-slate-800 to-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-slate-800/50 to-black" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                          >
                            <div className="w-12 h-20 bg-black/70 rounded-t-lg" />
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-black/70 rounded-full" />
                          </motion.div>
                        </div>
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-500/20 to-transparent"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    )}
                  </motion.div>

                  {/* Title & Artist */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1">{watchinData.title} –</h3>
                    <p className="text-sm text-white/60 font-semibold">{watchinData.artist}</p>
                  </motion.div>
                </motion.div>

                {/* Categories Grid - Right */}
                <motion.div
                  className="lg:col-span-9 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Category Headers */}
                  <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {watchinData.contentCategories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <motion.span
                          className={`text-base md:text-lg font-black tracking-wider uppercase bg-gradient-to-r ${getContentGradient(cat.variant)} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {cat.title}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Phone Mockups - Videos to be added later */}
                  <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {[0, 1, 2, 3].map((index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {/* Phone */}
                        <motion.div
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.08, y: -12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 to-slate-500/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                          />
                          
                          <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl border-2 border-slate-700 w-[100px] md:w-[130px]">
                            <div className="relative aspect-[9/16] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-[1.6rem] overflow-hidden">
                              
                              {/* Placeholder */}
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                                <motion.div
                                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                  animate={{ scale: [1, 1.15, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* Phone Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
                          </div>
                        </motion.div>

                        {/* Placeholder Label */}
                        <div className="text-[10px] md:text-xs font-bold text-white/50 mt-3 uppercase tracking-wide text-center">
                          Video {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Bottom Row - Stats & Description */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Stats */}
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {watchinData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-baseline gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-white/60 text-sm font-bold tracking-wider">
                        {stat.label}:
                      </span>
                      <motion.span
                        className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-300 bg-clip-text text-transparent"
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {watchinData.description}
                  </motion.p>

                  {/* Highlight Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {['Ambient Niche', 'Hopecore', '150K Creations', '2B+ Views'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-cyan-200 border border-cyan-500/20"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

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

function getContentGradient(variant) {
  const gradients = {
    orange: 'from-orange-500 via-amber-500 to-yellow-500',
    cyan: 'from-cyan-400 via-teal-500 to-emerald-500',
    emerald: 'from-emerald-400 via-green-500 to-teal-500',
    slate: 'from-slate-500 via-gray-600 to-zinc-700',
    violet: 'from-violet-500 via-purple-600 to-fuchsia-600',
    rose: 'from-rose-400 via-pink-500 to-red-500',
    blue: 'from-blue-400 via-indigo-500 to-violet-500',
    pink: 'from-pink-400 via-rose-400 to-red-400',
  };
  return gradients[variant] || gradients.cyan;
}
