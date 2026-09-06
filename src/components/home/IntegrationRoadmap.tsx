import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTEGRATION_STEPS } from '../../data/mockData';

export const IntegrationRoadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStepData = INTEGRATION_STEPS.find((s) => s.step === activeStep) || INTEGRATION_STEPS[0];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Original Framer Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-14 pt-4">
          <div className="inline-block bg-[#0D3B66] text-white text-xs sm:text-sm font-poppins font-bold px-7 py-2.5 rounded-full shadow-md mb-6">
            A 4-Step Journey
          </div>

          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#C54A00] tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
            From Mom's Arms to a Joyful Classroom
          </h2>

          <p className="text-lg sm:text-xl text-[#1C1917] font-poppins font-medium max-w-3xl mx-auto text-center leading-relaxed">
            We have designed a clear integration roadmap where parents and teachers partner together, helping your child build a strong sense of security before officially embracing their independence.
          </p>
        </div>

        {/* Main 2-Column Section: Left Vertical Timeline Accordion + Right Media Card with Bottom Text Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto mt-8">
          
          {/* Left Column: Vertical Timeline & Step Accordion Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 relative border-l-2 border-[#C54A00]/40 pl-6 sm:pl-8 ml-2 sm:ml-4">
            {INTEGRATION_STEPS.map((item) => {
              const isSelected = item.step === activeStep;
              return (
                <div key={item.step} className="relative">
                  {/* Timeline Dot Node */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      isSelected
                        ? 'bg-[#C54A00] border-white ring-4 ring-[#C54A00]/20'
                        : 'bg-[#FFFCF0] border-[#C54A00]/60'
                    }`}
                  />

                  {isSelected ? (
                    /* Expanded Active Step Card (Rust/Orange) */
                    <motion.div
                      layoutId="activeStepCard"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#C54A00] text-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#C54A00]"
                    >
                      <span className="bg-white text-[#C54A00] font-poppins font-extrabold text-xs px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                        Step {item.step}
                      </span>
                      <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/95 font-poppins leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    /* Collapsed Inactive Step Card (Warm Yellow) */
                    <motion.div
                      onClick={() => setActiveStep(item.step)}
                      whileHover={{ scale: 1.01 }}
                      className="bg-[#FDF0A6] text-[#1C1917] px-6 py-5 rounded-3xl border-2 border-[#FCE6BD] cursor-pointer hover:bg-[#FBE88F] transition-all duration-200"
                    >
                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-[#1C1917]">
                        {item.title}
                      </h3>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Media Window with Translucent Gradient & Bottom 3-Bullet Text Overlay */}
          <div className="lg:col-span-7 flex">
            <div className="relative w-full rounded-3xl p-3 border-2 border-[#EE964B]/60 bg-white/40 shadow-xl overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-end">
              
              {/* Media Image Background */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={currentStepData.image}
                  alt={currentStepData.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </AnimatePresence>

              {/* Bottom Translucent Dark Gradient Overlay with Text & 3 Bullet Columns */}
              <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-10 rounded-b-2xl flex flex-col justify-end pt-20">
                <motion.h3
                  key={`title-${activeStep}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-4 drop-shadow-md"
                >
                  {currentStepData.subtitle}
                </motion.h3>

                {/* 3 Text Bullet Columns across the bottom */}
                <motion.div
                  key={`bullets-${activeStep}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/20"
                >
                  {currentStepData.bullets.map((bullet, i) => (
                    <p key={i} className="text-xs sm:text-sm text-white/95 font-poppins font-medium leading-relaxed drop-shadow-sm">
                      {bullet}
                    </p>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

