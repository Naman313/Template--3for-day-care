import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, UtensilsCrossed, SunMedium } from 'lucide-react';
import { FRAMER_IMAGES } from '../../data/mockData';

export const HavenEnvironment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animation hooks to bring cards closer on scroll down and spread away on scroll up
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Left card moves from -80px to 0px (inward) and rotates from -4deg to 0deg
  const leftX = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [-4, 0]);

  // Right card moves from +80px to 0px (inward) and rotates from +4deg to 0deg
  const rightX = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

  // Center card scales smoothly from 0.92 to 1
  const centerScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  const cards = [
    {
      title: 'Always Clean & Safe for Little Hands',
      description: 'Toys, learning materials, and play areas are regularly checked, cleaned, and disinfected daily with non-toxic eco-friendly products.',
      image: FRAMER_IMAGES.classroomPlay,
      tag: 'Hygiene Standard',
      icon: Shield,
    },
    {
      title: 'A Clean Kitchen for Happy Tummies',
      description: 'Our certified organic kitchen follows strict food safety procedures, preparing balanced seasonal meals free from peanuts and artificial preservatives.',
      image: FRAMER_IMAGES.woodenFurnishings,
      tag: 'Nutritional Care',
      icon: UtensilsCrossed,
    },
    {
      title: 'Breezy Spaces, Immersed in Nature',
      description: 'Classrooms filled with natural sunlight, high-efficiency HEPA air filtration, and a spacious green playground for running under the open sky.',
      image: FRAMER_IMAGES.outdoorPlayground,
      tag: 'Sunlit Campus',
      icon: SunMedium,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#F6ECE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 pt-2">
          {/* Larger Navy Blue Pill Badge */}
          <div className="inline-block bg-[#0D3B66] text-white text-sm sm:text-base md:text-lg font-poppins font-bold px-8 py-3 rounded-full shadow-md mb-6 tracking-wide">
            A Haven for a Happy Childhood
          </div>

          {/* Rust Orange Main Heading - Formatted cleanly into two lines */}
          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#C54A00] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Is the school environment safe <br className="hidden sm:block" />
            and clean for my little one?
          </h2>

          {/* Charcoal Description - Larger font for bigger screens */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1C1917] font-poppins font-medium max-w-4xl mx-auto text-center leading-relaxed">
            Every corner is carefully maintained to give your child a safe, clean, and comfortable environment to bloom naturally.
          </p>
        </div>

        {/* 3 Environment Cards Grid with Scroll Convergence Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            
            // Apply unique scroll transform per card position
            let cardMotionStyle = {};
            if (idx === 0) {
              cardMotionStyle = { x: leftX, rotate: leftRotate };
            } else if (idx === 1) {
              cardMotionStyle = { scale: centerScale };
            } else if (idx === 2) {
              cardMotionStyle = { x: rightX, rotate: rightRotate };
            }

            return (
              <motion.div
                key={idx}
                style={cardMotionStyle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#EE964B]/20 shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0D3B66] font-poppins text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                    {card.tag}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0CA] flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-6 h-6 text-[#C54A00]" />
                    </div>
                    <h3 className="font-poppins font-black text-xl sm:text-2xl text-[#0D3B66] mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1C1917]/80 font-poppins leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
