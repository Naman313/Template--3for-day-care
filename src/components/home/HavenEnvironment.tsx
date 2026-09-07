import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Shield, UtensilsCrossed, SunMedium } from 'lucide-react';
import { FRAMER_IMAGES } from '../../data/mockData';

export const HavenEnvironment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Core Scroll Progress derived from the section's position in the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll progress using spring physics to eliminate jitter at 60fps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    mass: 0.3,
  });

  // ====================================================
  // STATE 1 — HEADING ANIMATION VALUES
  // ====================================================
  const headingOpacity = useTransform(smoothProgress, [0, 0.12, 0.32, 0.45], [0, 1, 1, 0.85]);
  const headingY = useTransform(smoothProgress, [0, 0.12, 0.32, 0.45], [40, 0, 0, -15]);

  // ====================================================
  // STATE 2 — THREE-CARD ENVIRONMENT COMPOSITION
  // ====================================================
  const cardsContainerY = useTransform(smoothProgress, [0.12, 0.35, 0.55, 0.72], [50, 0, 0, -30]);
  const cardsContainerOpacity = useTransform(smoothProgress, [0.12, 0.3, 0.58, 0.72], [0, 1, 1, 0.8]);

  // Left Card (Classroom / Clean hands) - Inward scroll slide, rotation & tag parallax
  const leftX = useTransform(smoothProgress, [0.15, 0.38], [-70, 0]);
  const leftRotate = useTransform(smoothProgress, [0.15, 0.38], [-3, 0]);
  const leftTagY = useTransform(smoothProgress, [0.15, 0.45], [18, -12]);

  // Center Card (Kitchen / Food) - Scale & Y-translation with tag parallax
  const centerScale = useTransform(smoothProgress, [0.2, 0.42], [0.92, 1]);
  const centerCardY = useTransform(smoothProgress, [0.2, 0.42], [40, 0]);
  const centerTagY = useTransform(smoothProgress, [0.2, 0.48], [25, -15]);

  // Right Card (Nature / Outdoors) - Inward scroll slide, rotation & tag parallax
  const rightX = useTransform(smoothProgress, [0.25, 0.45], [70, 0]);
  const rightRotate = useTransform(smoothProgress, [0.25, 0.45], [3, 0]);
  const rightTagY = useTransform(smoothProgress, [0.25, 0.5], [18, -12]);

  // ====================================================
  // STATE 3 — LARGE CHILD IMAGE / MOMENTS PANEL
  // ====================================================
  const largeImageY = useTransform(smoothProgress, [0.45, 0.75], [90, 0]);
  const largeImageScale = useTransform(smoothProgress, [0.45, 0.75], [0.95, 1]);
  const largeImageOpacity = useTransform(smoothProgress, [0.45, 0.65], [0, 1]);

  // Text overlay inside large child image (delayed relative to image for depth)
  const largeTextY = useTransform(smoothProgress, [0.6, 0.85], [45, 0]);
  const largeTextOpacity = useTransform(smoothProgress, [0.6, 0.82], [0, 1]);

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
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-[#F6ECE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* STATE 1 — HEADING & INTRO */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : headingY,
            opacity: shouldReduceMotion ? 1 : headingOpacity,
          }}
          className="text-center max-w-5xl mx-auto mb-16 pt-2"
        >
          {/* Larger Navy Blue Pill Badge */}
          <div className="inline-block bg-[#0D3B66] text-white text-sm sm:text-base md:text-lg font-poppins font-bold px-8 py-3 rounded-full shadow-md mb-6 tracking-wide">
            A Haven for a Happy Childhood
          </div>

          {/* Rust Orange Main Heading - Formatted cleanly into two lines */}
          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#C54A00] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Is the school environment safe <br className="hidden sm:block" />
            and clean for my little one?
          </h2>

          {/* Charcoal Description */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1C1917] font-poppins font-medium max-w-4xl mx-auto text-center leading-relaxed">
            Every corner is carefully maintained to give your child a safe, clean, and comfortable environment to bloom naturally.
          </p>
        </motion.div>

        {/* STATE 2 — THREE ENVIRONMENT CARDS COMPOSITION */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : cardsContainerY,
            opacity: shouldReduceMotion ? 1 : cardsContainerOpacity,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;

            // Layered Motion Styles per Card & Tag Parallax
            let cardMotionStyle = {};
            let tagYVal = leftTagY;

            if (idx === 0) {
              cardMotionStyle = { x: shouldReduceMotion ? 0 : leftX, rotate: shouldReduceMotion ? 0 : leftRotate };
              tagYVal = leftTagY;
            } else if (idx === 1) {
              cardMotionStyle = { scale: shouldReduceMotion ? 1 : centerScale, y: shouldReduceMotion ? 0 : centerCardY };
              tagYVal = centerTagY;
            } else if (idx === 2) {
              cardMotionStyle = { x: shouldReduceMotion ? 0 : rightX, rotate: shouldReduceMotion ? 0 : rightRotate };
              tagYVal = rightTagY;
            }

            return (
              <motion.div
                key={idx}
                style={cardMotionStyle}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#EE964B]/20 shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Layered Parallax Tag inside Card Image */}
                  <motion.div
                    style={{ y: shouldReduceMotion ? 0 : tagYVal }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0D3B66] font-poppins text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm"
                  >
                    {card.tag}
                  </motion.div>
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
        </motion.div>

        {/* STATE 3 — LARGE CHILD IMAGE / MOMENTS PANEL */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : largeImageY,
            scale: shouldReduceMotion ? 1 : largeImageScale,
            opacity: shouldReduceMotion ? 1 : largeImageOpacity,
          }}
          className="mt-16 sm:mt-24 relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-white"
        >

        </motion.div>

      </div>
    </section>
  );
};

