import React from 'react';
import { motion } from 'framer-motion';
import { SCHEDULE_DATA } from '../data/mockData';
import { Compass, Heart, Sparkles, Clock, Dumbbell, Brain, Smile } from 'lucide-react';

export const ApproachPage: React.FC = () => {
  return (
    <div className="pt-24 space-y-0 bg-[#FFFDF7] text-[#1C1917] overflow-hidden">

      {/* Top 5 Thin Transitioning Color Stripes */}
      <div className="w-full relative z-30">
        <div className="h-1 bg-[#F4D35E]" />
        <div className="h-1 bg-[#EE964B]" />
        <div className="h-1 bg-[#F95738]" />
        <div className="h-1 bg-[#A91D22]" />
        <div className="h-1 bg-[#0D3B66]" />
      </div>

      {/* Red Hero Banner (Matching Screenshot 1) */}
      <section className="bg-[#A91D22] text-[#FAF0CA] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side Big Title */}
            <div className="lg:col-span-7 text-left">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="font-poppins font-black text-5xl sm:text-7xl lg:text-8xl text-[#FAF0CA] tracking-tight leading-[1.02]"
              >
                Our <br />
                Learning <br />
                Approach
              </motion.h1>
            </div>

            {/* Right Side Paragraph */}
            <div className="lg:col-span-5 text-left">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-[#FAF0CA]/90 font-poppins font-medium leading-relaxed max-w-lg"
              >
                We do not mold children into a pre-defined shape. At Anth Preschool, every child is an independent individual, free to explore the world, develop skills, and nurture empathy at their own unique pace.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Video Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/dVn6Qw1kNbF5QB0qLca62HU6hw.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* Video Overlay Backdrop with White Text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight drop-shadow-2xl text-center max-w-4xl"
          >
            Learning through experience. <br />
            Growing in respect.
          </motion.h2>
        </div>
      </section>

      {/* Core Philosophy Cards Section with Smooth Sticky Stacking (Matching Screenshot 2) */}
      <section className="py-24 sm:py-32 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-[#F95738]/15 text-[#F95738] text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="font-poppins font-black text-4xl sm:text-5xl text-[#0D3B66] tracking-tight">
              How We Nurture Every Child
            </h2>
          </div>

          {/* Sticky Stacking Cards Container */}
          <div className="space-y-12 relative max-w-6xl mx-auto pb-16">
            
            {/* Card 1: Freedom to Explore */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 z-10 bg-[#F95738] text-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-4 border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Tilted Photo Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500 bg-white/10">
                    <img
                      src="/images/kids/kid_photo_14.webp"
                      alt="Freedom to Explore"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side: Content & Icon */}
                <div className="lg:col-span-6 text-left space-y-5">
                  <div className="w-14 h-14 bg-white text-[#F95738] rounded-full flex items-center justify-center shadow-lg">
                    <Compass className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight">
                    Freedom to Explore
                  </h3>
                  <p className="text-base sm:text-xl text-white/95 font-poppins font-medium leading-relaxed">
                    Learning through play and senses. Children are encouraged to ask questions, touch, smell, and do things with their own hands.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Respecting Individuality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32 z-20 bg-[#0D3B66] text-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-4 border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Tilted Photo Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/10">
                    <img
                      src="/images/kids/kid_photo_28.webp"
                      alt="Respecting Individuality"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side: Content & Icon */}
                <div className="lg:col-span-6 text-left space-y-5">
                  <div className="w-14 h-14 bg-white text-[#0D3B66] rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight">
                    Respecting Individuality
                  </h3>
                  <p className="text-base sm:text-xl text-white/95 font-poppins font-medium leading-relaxed">
                    No comparisons, no forced speed. Teachers act as observers and gentle guides to help children maximize their natural strengths and interests.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Real-Life Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-36 z-30 bg-[#EE964B] text-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-4 border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Tilted Photo Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/10">
                    <img
                      src="/images/kids/kid_photo_22.webp"
                      alt="Real-Life Skills"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Side: Content & Icon */}
                <div className="lg:col-span-6 text-left space-y-5">
                  <div className="w-14 h-14 bg-white text-[#EE964B] rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white tracking-tight">
                    Real-Life Skills
                  </h3>
                  <p className="text-base sm:text-xl text-white/95 font-poppins font-medium leading-relaxed">
                    Building independence from the smallest tasks like self-feeding, tidying up toys, and expressing personal emotions constructively.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Daily Routine / Timeline (Matching Screenshot 1 & 2) */}
      <section className="bg-[#FAF3E6]/60 py-24 sm:py-32 border-t border-b border-[#F4D35E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Dark Navy Top Pill Badge */}
          <div className="inline-block bg-[#0D3B66] text-[#FAF0CA] font-poppins font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md mb-6">
            Standard timeline for your Child
          </div>

          {/* Main Section Title */}
          <h2 className="font-poppins font-black text-5xl sm:text-6xl lg:text-7xl text-[#A91D22] tracking-tight mb-16">
            A Day in the Life
          </h2>

          {/* Morning Activities Group */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Morning Activity Rows */}
              <div className="lg:col-span-8 space-y-5">
                {SCHEDULE_DATA.filter(item => item.period === 'morning').map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="flex items-stretch gap-3 sm:gap-4"
                  >
                    {/* Orange Teardrop Time Badge */}
                    <div className="w-24 sm:w-32 bg-[#C85A17] text-white flex flex-col items-center justify-center p-3 sm:p-4 rounded-l-[2rem] rounded-r-2xl shrink-0 shadow-md text-center">
                      <span className="text-xs font-poppins font-medium opacity-90">from</span>
                      <span className="font-poppins font-black text-xl sm:text-2xl tracking-tight leading-none mt-0.5">{item.time}</span>
                    </div>

                    {/* Red Activity Card */}
                    <div className="bg-[#A91D22] text-white p-6 sm:p-8 rounded-[2rem] shadow-lg flex-1 text-left flex flex-col justify-center">
                      <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 font-poppins font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Tall Morning Activities Sidebar Card */}
              <div className="lg:col-span-4 flex">
                <div className="bg-[#4A0E17] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl w-full flex flex-col justify-start text-left border border-white/10">
                  <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white leading-tight">
                    Morning <br />
                    Activities
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-poppins font-medium mt-3">
                    from 7:30 to 12:00
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Afternoon Activities Group */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Afternoon Activity Rows */}
              <div className="lg:col-span-8 space-y-5">
                {SCHEDULE_DATA.filter(item => item.period === 'afternoon').map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="flex items-stretch gap-3 sm:gap-4"
                  >
                    {/* Orange Teardrop Time Badge */}
                    <div className="w-24 sm:w-32 bg-[#C85A17] text-white flex flex-col items-center justify-center p-3 sm:p-4 rounded-l-[2rem] rounded-r-2xl shrink-0 shadow-md text-center">
                      <span className="text-xs font-poppins font-medium opacity-90">from</span>
                      <span className="font-poppins font-black text-xl sm:text-2xl tracking-tight leading-none mt-0.5">{item.time}</span>
                    </div>

                    {/* Red Activity Card */}
                    <div className="bg-[#A91D22] text-white p-6 sm:p-8 rounded-[2rem] shadow-lg flex-1 text-left flex flex-col justify-center">
                      <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 font-poppins font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Tall Afternoon Activities Sidebar Card */}
              <div className="lg:col-span-4 flex">
                <div className="bg-[#3A0A12] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl w-full flex flex-col justify-start text-left border border-white/10">
                  <h3 className="font-poppins font-black text-3xl sm:text-4xl text-white leading-tight">
                    Afternoon <br />
                    Activities
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-poppins font-medium mt-3">
                    from 14:00 to 16:00
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars of Growth (100% Replicating Screenshot) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Strong Physicality (Image Top, Text Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-left space-y-6"
          >
            {/* Top Image Frame */}
            <div className="w-full h-[360px] sm:h-[420px] rounded-[2.5rem] overflow-hidden border-2 border-[#EE964B]/70 shadow-lg relative bg-[#FAF0CA]/30">
              <img
                src="/images/kids/kid_photo_27.webp"
                alt="Strong Physicality"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Text */}
            <div className="space-y-3 pt-2">
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
                Strong Physicality
              </h3>
              <p className="text-base sm:text-lg text-[#57534D] font-poppins font-medium leading-relaxed">
                Healthy movement, coordination, flexibility, and growing gross and fine motor skills.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Emotional Intelligence (EQ) (Image Top, Text Middle, Image Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col text-left space-y-6"
          >
            {/* Top Image Frame */}
            <div className="w-full h-[220px] sm:h-[250px] rounded-[2.5rem] overflow-hidden border-2 border-[#EE964B]/70 shadow-lg relative bg-[#FAF0CA]/30">
              <img
                src="/images/kids/kid_photo_20.webp"
                alt="Emotional Intelligence"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle Text */}
            <div className="space-y-3">
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
                Emotional Intelligence (EQ)
              </h3>
              <p className="text-base sm:text-lg text-[#57534D] font-poppins font-medium leading-relaxed">
                The ability to name emotions, self-soothe, and show empathy towards peers.
              </p>
            </div>

            {/* Bottom Image Frame */}
            <div className="w-full h-[150px] sm:h-[180px] rounded-[2.5rem] overflow-hidden border-2 border-[#EE964B]/70 shadow-lg relative bg-[#FAF0CA]/30">
              <img
                src="/images/kids/kid_photo_30.webp"
                alt="Emotional Growth"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Column 3: Sharp Cognition (Text Top, Image Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col text-left space-y-6"
          >
            {/* Top Text */}
            <div className="space-y-3 pt-2">
              <h3 className="font-poppins font-black text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
                Sharp Cognition
              </h3>
              <p className="text-base sm:text-lg text-[#57534D] font-poppins font-medium leading-relaxed">
                Developing logical thinking, focus, and problem-solving skills through hands-on educational materials.
              </p>
            </div>

            {/* Bottom Image Frame */}
            <div className="w-full h-[360px] sm:h-[420px] rounded-[2.5rem] overflow-hidden border-2 border-[#EE964B]/70 shadow-lg relative bg-[#FAF0CA]/30">
              <img
                src="/images/kids/kid_photo_13.webp"
                alt="Sharp Cognition"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
