import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    mass: 0.3,
  });

  const largeTextY = useTransform(smoothProgress, [0.1, 0.35], [40, 0]);
  const largeTextOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="relative bg-[#B82B14] text-white overflow-hidden">
      {/* Top Multi-Color Accent Stripe */}
      <div className="w-full h-3 grid grid-cols-4 relative z-20">
        <div className="bg-[#F4D35E]" />
        <div className="bg-[#EE964B]" />
        <div className="bg-[#F95738]" />
        <div className="bg-[#C54A00]" />
      </div>

      {/* Hero Video Background Banner */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/ByIeaQVf5noikkzaOvTKf1j0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Translucent Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Text Overlay — Animated relative to scroll */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : largeTextY,
            opacity: shouldReduceMotion ? 1 : largeTextOpacity,
          }}
          className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-8 sm:left-12 lg:left-16 right-8 sm:right-12 lg:right-16 z-10"
        >
          <span className="inline-block bg-[#C54A00] text-white font-poppins text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4 shadow-md">
            Cherished Memories
          </span>
          <h3 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
            Moments that speak <br className="hidden sm:block" /> for themselves
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-white/95 font-poppins font-medium max-w-2xl leading-relaxed drop-shadow">
            Every day is a wonderful new discovery for your little one.
          </p>
        </motion.div>
      </div>

      {/* Main Section Content Area with O-X Watermark Grid Pattern */}
      <div className="py-20 lg:py-28 relative">
        {/* Repeating O X Watermark Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="ox-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Row 1: O at (25, 25), X at (75, 25) */}
              <circle cx="25" cy="25" r="16" fill="none" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="4.5" />
              <path d="M66 16 L84 34 M84 16 L66 34" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="4.5" strokeLinecap="round" />

              {/* Row 2: X at (25, 75), O at (75, 75) */}
              <path d="M16 66 L34 84 M34 66 L16 84" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="75" cy="75" r="16" fill="none" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="4.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#ox-grid)" />
          </svg>
        </div>

        {/* Ambient Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4D35E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F95738]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="framer-badge bg-white/15 text-[#FAF0CA] text-xs px-4 py-1.5 rounded-full font-bold tracking-wider">
              PARENT TESTIMONIALS
            </span>
            <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-sm">
              What we hear from Parents
            </h2>
            <p className="text-base sm:text-lg text-[#FAF0CA]/90 font-medium max-w-xl mx-auto">
              Real stories from families who trust Anth Preschool with their little ones every single day.
            </p>
          </div>

          {/* Framer Grid Card Container */}
          <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* BOX 1 (Top Left) — Pastel Yellow */}
              <div className="bg-[#FAF0CA] p-8 sm:p-10 flex flex-col justify-between relative min-h-[320px] border-b md:border-b-0 md:border-r border-white/60">
                {/* Coral Quote Icon */}
                <Quote className="absolute top-6 right-8 w-14 h-14 text-[#F95738]/80 pointer-events-none fill-current" />

                <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0D3B66] leading-relaxed mb-8 relative z-10">
                  “On the first day I dropped her off, I was so worried I couldn't sleep. But within just one week, Léa was excitedly asking to go to school every morning. The teachers at Anth are truly caring and so good with kids.”
                </p>

                <div>
                  <p className="font-poppins font-extrabold text-sm sm:text-base text-[#0D3B66]">
                    Ms. Sophie Laurent — <span className="font-medium text-[#0D3B66]/80">Mom of Léa, age 3</span>
                  </p>
                </div>
              </div>

              {/* BOX 2 (Top Center) — Soft Peach Arch Image Container */}
              <div className="bg-[#FCEBD9] p-8 sm:p-10 flex items-center justify-center relative min-h-[340px] border-b md:border-b-0 md:border-r border-white/60 overflow-hidden">
                {/* Top-Left Stacking Rings Graphic */}
                <div className="absolute top-6 left-6 z-10 w-12 h-14">
                  <svg viewBox="0 0 40 50" className="w-full h-full">
                    <ellipse cx="20" cy="42" rx="18" ry="6" fill="#EE964B" />
                    <ellipse cx="20" cy="32" rx="14" ry="5" fill="#F4D35E" />
                    <ellipse cx="20" cy="22" rx="10" ry="4" fill="#0D3B66" />
                    <ellipse cx="20" cy="13" rx="6" ry="3" fill="#F95738" />
                    <circle cx="20" cy="6" r="4" fill="#C54A00" />
                  </svg>
                </div>

                {/* Center Arch Photo Container */}
                <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-t-full rounded-b-[4rem] overflow-hidden shadow-lg border-4 border-white/80 relative z-0">
                  <img
                    src="/images/kids/kid_photo_26.webp"
                    alt="Preschool Environment"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom-Right Cute House Graphic */}
                <div className="absolute bottom-6 right-6 z-10 w-12 h-12">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <polygon points="25,5 5,22 45,22" fill="#F95738" />
                    <rect x="10" y="22" width="30" height="24" rx="3" fill="#84CC16" />
                    <rect x="20" y="30" width="10" height="16" fill="#FAF0CA" />
                    <rect x="36" y="8" width="5" height="10" fill="#3B82F6" />
                  </svg>
                </div>
              </div>

              {/* BOX 3 (Top Right) — Vibrant Bright Yellow */}
              <div className="bg-[#F4D35E] p-8 sm:p-10 flex flex-col justify-between relative min-h-[320px] border-b md:border-b-0 border-white/60">
                {/* Coral Quote Icon */}
                <Quote className="absolute top-6 right-8 w-14 h-14 text-[#F95738]/80 pointer-events-none fill-current" />

                <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0D3B66] leading-relaxed mb-8 relative z-10">
                  “Anth doesn't just teach kids academics — it teaches them how to live. That's what truly matters to us.”
                </p>

                <div>
                  <p className="font-poppins font-extrabold text-sm sm:text-base text-[#0D3B66]">
                    Ms. Clara Dubois — <span className="font-medium text-[#0D3B66]/80">Mom of Lucas, age 3.5</span>
                  </p>
                </div>
              </div>

              {/* BOX 4 (Bottom Left) — Kid Photo 36 with Rainbow & Cloud Graphic */}
              <div className="bg-[#FFF59D] p-0 flex items-center justify-center relative min-h-[340px] border-b md:border-b-0 md:border-r border-white/60 overflow-hidden">
                {/* Main Image */}
                <img
                  src="/images/kids/kid_photo_36.jpg"
                  alt="Happy child playing"
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Rainbow Graphic Overlay (Top Left) */}
                <div className="absolute top-4 left-4 z-10 w-24 h-20 pointer-events-none drop-shadow-md">
                  <svg viewBox="0 0 100 80" className="w-full h-full">
                    <path d="M 10 70 A 40 40 0 0 1 90 70" fill="none" stroke="#F95738" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 22 70 A 28 28 0 0 1 78 70" fill="none" stroke="#EE964B" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 34 70 A 16 16 0 0 1 66 70" fill="none" stroke="#F4D35E" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 46 70 A 4 4 0 0 1 54 70" fill="none" stroke="#0D3B66" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Cloud Graphic Overlay (Bottom Left) */}
                <div className="absolute bottom-2 -left-2 z-10 w-32 h-16 pointer-events-none drop-shadow-md opacity-90">
                  <svg viewBox="0 0 100 60" className="w-full h-full" fill="#93C5FD">
                    <path d="M 15 45 A 15 15 0 0 1 30 25 A 20 20 0 0 1 65 25 A 18 18 0 0 1 85 45 Z" />
                  </svg>
                </div>
              </div>

              {/* BOX 5 (Bottom Center) — Deep Terracotta Rust Orange Quote */}
              <div className="bg-[#C54A00] p-8 sm:p-10 flex flex-col justify-between relative min-h-[340px] text-white border-b md:border-b-0 md:border-r border-white/60">
                {/* Coral Quote Icon */}
                <Quote className="absolute top-6 right-8 w-14 h-14 text-white/30 pointer-events-none fill-current" />

                <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed mb-8 relative z-10">
                  “What impressed me the most is that every afternoon at pickup, the teacher tells us in detail what our daughter ate, what she played, whether she was happy or upset. It feels like she's being looked after by family.”
                </p>

                <div>
                  <p className="font-poppins font-extrabold text-sm sm:text-base text-white">
                    Mr. Thomas Müller — <span className="font-medium text-white/80">Dad of Emma, age 2.5</span>
                  </p>
                </div>
              </div>

              {/* BOX 6 (Bottom Right) — Pastel Green with Tilted Polaroid Photo (kid_photo_29.webp) */}
              <div className="bg-[#C6F4CE] p-8 flex items-center justify-center relative min-h-[340px] overflow-hidden">
                {/* Subtle Puzzle Pattern SVG Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-15">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="puzzle-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M10 10 C 20 0, 30 20, 40 10 C 50 0, 60 20, 60 30" fill="none" stroke="#0D3B66" strokeWidth="2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#puzzle-pattern)" />
                  </svg>
                </div>

                {/* Animated Tilted Polaroid Card (kid_photo_29.webp) */}
                <motion.div
                  initial={{ rotate: -30 }}
                  animate={{ rotate: [-30, -20, -36, -30] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                  className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-2xl border-4 border-white max-w-[260px] sm:max-w-[280px] z-10 transform"
                >
                  <img
                    src="/images/kids/kid_photo_29.webp"
                    alt="Children playing together"
                    className="w-full h-48 sm:h-56 object-cover rounded-xl"
                  />
                </motion.div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
