import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#0D3B66] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F95738]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4D35E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="framer-badge bg-white/10 text-[#F4D35E] text-xs px-4 py-1.5 rounded-full font-bold">
            PARENT TESTIMONIALS
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            What We Hear From Parents
          </h2>
          <p className="text-sm sm:text-base text-[#FAF0CA]/80">
            Real stories from families who trust Anth Preschool with their little ones every single day.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white text-[#1C1917] rounded-3xl p-8 sm:p-12 shadow-floating relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#FAF0CA] pointer-events-none" />
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#F4D35E] mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#EE964B]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl font-medium text-[#0D3B66] leading-relaxed mb-8 italic">
                “{current.quote}”
              </p>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#FAECDE]">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F95738]"
                />
                <div>
                  <h4 className="font-poppins font-bold text-base text-[#0D3B66]">
                    {current.author}
                  </h4>
                  <p className="text-xs font-mono text-[#F95738] uppercase font-semibold">
                    {current.relation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-[#F4D35E] w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#F95738] hover:bg-[#EE964B] text-white flex items-center justify-center transition-colors shadow-pop"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
