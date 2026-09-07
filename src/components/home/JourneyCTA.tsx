import React from 'react';
import { motion } from 'framer-motion';
import { FRAMER_IMAGES } from '../../data/mockData';

interface JourneyCTAProps {
  onOpenTourModal?: () => void;
}

const MARQUEE_ITEMS = [
  {
    id: 1,
    image: FRAMER_IMAGES.toddlerExploration,
    alt: 'Child playing with clay',
    shapeClass: 'w-64 h-88 sm:w-80 sm:h-[26rem] rounded-[50%]',
  },
  {
    id: 2,
    image: FRAMER_IMAGES.classroomPlay,
    alt: 'Kids learning in classroom',
    shapeClass: 'w-64 h-64 sm:w-88 sm:h-88 rounded-full',
  },
  {
    id: 3,
    image: '/images/kids/kid_photo_26.webp',
    alt: 'Preschool classroom setup',
    shapeClass: 'w-60 h-88 sm:w-72 sm:h-[28rem] rounded-[2.5rem]',
  },
  {
    id: 4,
    image: FRAMER_IMAGES.teacherReading,
    alt: 'Child writing on board',
    shapeClass: 'w-64 h-88 sm:w-80 sm:h-[26rem] rounded-t-full rounded-b-3xl',
  },
  {
    id: 5,
    image: FRAMER_IMAGES.outdoorPlayground,
    alt: 'Children playing outdoors',
    shapeClass: 'w-64 h-64 sm:w-88 sm:h-88 [clip-path:polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)]',
  },
  {
    id: 6,
    image: '/images/kids/kid_photo_29.webp',
    alt: 'Happy students in class',
    shapeClass: 'w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem]',
  },
  {
    id: 7,
    image: FRAMER_IMAGES.childFriendship,
    alt: 'Children friendship moment',
    shapeClass: 'w-80 h-60 sm:w-[26rem] sm:h-72 rounded-[50%]',
  },
];

export const JourneyCTA: React.FC<JourneyCTAProps> = ({ onOpenTourModal }) => {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-20 sm:py-28 bg-[#3B0A12] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top White Pill Badge */}
        <div className="inline-block bg-white text-[#C54A00] font-poppins font-bold text-sm sm:text-base px-6 py-2 rounded-full mb-6 shadow-md">
          Book your free tour today
        </div>

        {/* Main Heading — Exactly 2 Lines with Same Font Size */}
        <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-8">
          Are you ready to begin this <br />
          wonderful journey with your child?
        </h2>

        {/* Book a Tour Button */}
        <button
          onClick={onOpenTourModal}
          className="inline-flex items-center gap-2 bg-[#F95738] hover:bg-[#EE964B] text-white font-poppins font-bold text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 mb-16"
        >
          <span>Book a Tour</span>
          <span className="text-xl leading-none">↗</span>
        </button>
      </div>

      {/* Infinite Horizontal Sliding Marquee Container (Left to Right) */}
      <div className="w-full overflow-hidden relative py-8 min-h-[460px] flex items-center">
        {/* Side Gradient Vignette Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#3B0A12] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#3B0A12] to-transparent z-10 pointer-events-none" />

        {/* Sliding Motion Wrapper */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-8 sm:gap-14 w-max"
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center p-2"
            >
              <div className={`overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 ${item.shapeClass}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
