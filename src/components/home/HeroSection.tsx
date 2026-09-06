import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ShoppingBag, Zap } from 'lucide-react';
import { HERO_GIRL_BG_URL } from '../../data/mockData';

interface HeroSectionProps {
  onOpenTourModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTourModal }) => {
  const marqueeCards = [
    {
      number: '100%',
      title: 'LICENSED & INSPECTED',
      subtitle: 'State certified facility',
      tilt: '-rotate-[4deg] -translate-y-1',
    },
    {
      number: '1:8',
      title: 'TEACHER RATIO',
      subtitle: 'Teacher per toddler',
      tilt: 'rotate-[3deg] translate-y-1',
    },
    {
      number: '100%',
      title: 'CERTIFIED TEACHERS',
      subtitle: 'CDA or degree holders',
      tilt: '-rotate-[3.5deg] -translate-y-0.5',
    },
    {
      number: '100%',
      title: 'BACKGROUND CHECKS',
      subtitle: 'Teachers Federally Verified',
      tilt: 'rotate-[4.5deg] translate-y-1.5',
    },
    {
      number: '100%',
      title: 'LICENSED & INSPECTED',
      subtitle: 'State certified facility',
      tilt: '-rotate-[4deg] -translate-y-1',
    },
    {
      number: '1:8',
      title: 'TEACHER RATIO',
      subtitle: 'Teacher per toddler',
      tilt: 'rotate-[3deg] translate-y-1',
    },
    {
      number: '100%',
      title: 'CERTIFIED TEACHERS',
      subtitle: 'CDA or degree holders',
      tilt: '-rotate-[3.5deg] -translate-y-0.5',
    },
    {
      number: '100%',
      title: 'BACKGROUND CHECKS',
      subtitle: 'Teachers Federally Verified',
      tilt: 'rotate-[4.5deg] translate-y-1.5',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFCF0]">

      {/* Hero Section Container with Framer Original Background Composite */}
      <div
        className="relative w-full min-h-[720px] sm:min-h-[800px] lg:min-h-[880px] bg-cover bg-left sm:bg-center flex flex-col justify-between pt-28 sm:pt-36 pb-36 px-4 sm:px-12 lg:px-20"
        style={{ backgroundImage: `url(${HERO_GIRL_BG_URL})` }}
      >

        {/* Left Side: Sticker Badges, Subtitle & Action Buttons */}
        <div className="max-w-3xl pt-6 sm:pt-12 lg:pt-16 z-10">

          {/* 3 Vertically Stacked Sticker Block Titles */}
          <div className="flex flex-col items-start gap-2.5 sm:gap-3">

            {/* Block 1: WELCOME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              transition={{ duration: 0.5 }}
              className="bg-[#3E0A14] text-white font-poppins font-black text-3xl sm:text-5xl lg:text-6xl px-5 py-2 sm:px-7 sm:py-3.5 rounded-2xl shadow-lg uppercase tracking-wider inline-block -rotate-[1.5deg] transform"
            >
              WELCOME
            </motion.div>

            {/* Block 2: PARENTS TO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#C54A00] text-white font-poppins font-black text-3xl sm:text-5xl lg:text-6xl px-5 py-2 sm:px-7 sm:py-3.5 rounded-2xl shadow-lg uppercase tracking-wider inline-block rotate-[1deg] transform"
            >
              PARENTS TO
            </motion.div>

            {/* Block 3: YOUR CHILD'S SECOND HOME */}
            <motion.div
              initial={{ opacity: 0, y: 15, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#B81919] text-white font-poppins font-black text-3xl sm:text-5xl lg:text-6xl px-5 py-3 sm:px-8 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl uppercase tracking-tight leading-[1.05] inline-block -rotate-1 transform"
            >
              <div>YOUR CHILD'S</div>
              <div>SECOND HOME</div>
            </motion.div>

          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-xl text-[#1C1917] font-poppins font-bold max-w-sm sm:max-w-md lg:max-w-lg leading-relaxed pt-5 sm:pt-7"
          >
            Where little ones build confidence, friendships, and a lifelong love of learning.
          </motion.p>

          {/* Action Buttons: Learn More & Book a Tour */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-6 sm:pt-8"
          >
            <Link
              to="/our-learning-approach"
              className="inline-flex items-center gap-2 bg-white text-[#F95738] border-2 border-[#F95738] hover:bg-[#F95738] hover:text-white font-poppins font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Learn More</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>

            <button
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-2 bg-[#F95738] hover:bg-[#EE964B] text-white font-poppins font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-pop hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a Tour</span>
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
            </button>
          </motion.div>

        </div>



        {/* Floating Zig-Zag Inclined Infinite Marquee Ticker Row matching Original Framer Pills */}
        <div className="absolute bottom-6 left-0 right-0 z-20 overflow-hidden py-4 pointer-events-auto">
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
            style={{ width: 'max-content' }}
          >
            {[...marqueeCards, ...marqueeCards].map((card, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 flex items-center gap-4 bg-[#FFF2D8] px-8 py-3.5 sm:px-9 sm:py-4.5 rounded-full border border-[#FCE6BD] shadow-lg hover:scale-105 transition-transform duration-300 transform ${card.tilt}`}
                >
                  <span className="font-poppins font-black text-2xl sm:text-3xl text-[#1C1917] leading-none">
                    {card.number}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-poppins font-bold text-xs sm:text-sm text-[#3E0A14] uppercase tracking-tight leading-tight">
                      {card.title}
                    </span>
                    <span className="font-poppins font-medium text-[11px] sm:text-xs text-[#57534D] leading-tight">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </section>
  );
};


