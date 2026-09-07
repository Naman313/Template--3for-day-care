import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TEACHERS_DATA } from '../data/mockData';
import { ShieldCheck, Heart, GraduationCap, Check } from 'lucide-react';

const KIDS_CAROUSEL_IMAGES = [
  '/images/kids/kid_photo_10.webp',
  '/images/kids/kid_photo_13.webp',
  '/images/kids/kid_photo_19.webp',
  '/images/kids/kid_photo_20.webp',
  '/images/kids/kid_photo_22.webp',
  '/images/kids/kid_photo_23.webp',
  '/images/kids/kid_photo_24.webp',
  '/images/kids/kid_photo_27.webp',
  '/images/kids/kid_photo_28.webp',
  '/images/kids/kid_photo_30.webp',
  '/images/kids/kid_photo_31.webp',
  '/images/kids/kid_photo_38.webp',
];

export const TeachersPage: React.FC = () => {
  const duplicatedKids = [...KIDS_CAROUSEL_IMAGES, ...KIDS_CAROUSEL_IMAGES];

  return (
    <div className="pt-24 sm:pt-28 space-y-0 bg-[#181514] text-white">

      {/* 5 Thin Transitioning Color Stripes */}
      <div className="w-full relative z-30">
        <div className="h-1 bg-[#F4D35E]" />
        <div className="h-1 bg-[#EE964B]" />
        <div className="h-1 bg-[#F95738]" />
        <div className="h-1 bg-[#C54A00]" />
        <div className="h-1 bg-[#4A0E17]" />
      </div>

      {/* Hero Header Section (Matching Screenshot 1) */}
      <section className="bg-[#181514] py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Aligned Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-black text-5xl sm:text-7xl lg:text-8xl text-[#FAF0CA] tracking-tight leading-[1.05] text-left"
          >
            The School <br />
            & Teachers
          </motion.h1>

          {/* Right Aligned Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#FAF0CA]/90 font-poppins font-medium max-w-md text-left leading-relaxed"
          >
            Meet the passionate educators and warm hearts who make Anth Preschool a loving second home for your little ones.
          </motion.p>
        </div>
      </section>

      {/* Full Width Video Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/g6pdTJh346dcB5TrUDrWvnmOow.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* Video Overlay Backdrop */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight drop-shadow-2xl text-center"
          >
            More than a School, <br />
            A family
          </motion.h2>
        </div>
      </section>

      {/* "How Our Journey Began" Centered Section (Matching Screenshot 2) */}
      <section className="bg-[#181514] py-20 sm:py-28 text-center text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-black text-4xl sm:text-6xl lg:text-7xl text-[#FAF0CA] tracking-tight mb-8"
          >
            How Our Journey Began
          </motion.h2>

          <p className="text-lg sm:text-xl text-[#FAF0CA]/90 font-poppins font-medium leading-relaxed max-w-3xl mx-auto">
            Founded with a simple but profound belief: every child deserves to grow in an environment of love, respect, and boundless curiosity.
          </p>

          <p className="text-lg sm:text-xl text-[#FAF0CA]/90 font-poppins font-medium leading-relaxed max-w-3xl mx-auto">
            We built Anth Preschool not just to be a place of learning, but a safe haven where little personalities can bloom naturally. We are a community dedicated to early childhood happiness.
          </p>

          <div className="pt-6">
            <Link
              to="/our-learning-approach"
              className="inline-flex items-center gap-2 bg-white text-[#F95738] border-2 border-[#F95738] hover:bg-[#F95738] hover:text-white font-poppins font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>See Our Learning Approach</span>
              <span className="text-xl leading-none">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Right-to-Left Kids Image Carousel */}
      <section className="py-12 bg-[#181514] overflow-hidden relative">
        <div className="w-full overflow-hidden relative py-4">
          <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#181514] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#181514] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex items-center gap-6 sm:gap-8 w-max"
          >
            {duplicatedKids.map((imgSrc, idx) => (
              <div key={idx} className="flex-shrink-0">
                <div className="w-72 h-48 sm:w-96 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300">
                  <img src={imgSrc} alt="Happy preschool moments" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid Section (Matching Screenshot) */}
      <section className="bg-[#FFFDF7] text-[#1C1917] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-[#EE964B]/15 text-[#EE964B] text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              FACULTY & EDUCATORS
            </span>
            <h2 className="font-poppins font-black text-4xl sm:text-5xl text-[#0D3B66] tracking-tight">
              The Hearts Behind the Classrooms
            </h2>
            <p className="text-base sm:text-lg text-[#57534D] font-poppins font-medium">
              Hand-picked early childhood educators dedicated to your toddler's safety and growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-12 items-start">
            {TEACHERS_DATA.map((teacher, idx) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Oval Portrait Image Container */}
                <div className="relative w-72 h-[22rem] sm:w-80 sm:h-[25rem] mb-16">
                  {/* Outer Accent Oval Ring */}
                  <div className="absolute -inset-3 rounded-[50%] border-2 border-[#EE964B]/60 pointer-events-none" />

                  {/* Oval Portrait Frame */}
                  <div className="w-full h-full rounded-[50%] overflow-hidden shadow-2xl border-4 border-white bg-[#FCEBD9] relative z-0">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Slanted Orange Name Tag Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#F95738] text-white font-poppins font-black text-lg sm:text-xl px-6 py-2 rounded-xl shadow-lg whitespace-nowrap transform -rotate-3 z-10 border border-white/20">
                    {teacher.name}
                  </div>

                  {/* Slanted Navy Role/Class Tag Badge with Clear Gap */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#0D3B66] text-white font-poppins font-bold text-xs sm:text-sm px-5 py-1.5 rounded-lg shadow-md whitespace-nowrap transform rotate-2 z-20 border border-white/20">
                    {teacher.classGroup || teacher.role}
                  </div>
                </div>

                {/* Quote Box below */}
                <div className="mt-4 bg-[#FAF0CA] text-[#0D3B66] p-6 sm:p-8 rounded-[2rem] shadow-sm border border-[#F4D35E]/50 max-w-sm w-full">
                  <p className="font-poppins font-bold text-sm sm:text-base leading-relaxed">
                    “{teacher.bio}”
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Counter Note with Side Photo */}
          <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Aligned Text Container */}
              <div className="lg:col-span-7 bg-[#FAF0CA] text-[#0D3B66] p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-[#F4D35E]/60 text-left">
                <p className="text-base sm:text-xl font-poppins font-bold leading-relaxed">
                  “These are just a few faces of our family. Every day, a dedicated team of over 37 teachers, caregivers, and kitchen staff work together to make Anth Preschool a perfect second home for your child.”
                </p>
              </div>

              {/* Right Aligned Wiggling Side Photo */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  animate={{
                    rotate: [-2, 2, -2],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#0D3B66]/10"
                >
                  <img
                    src="/images/kids/SidePhoto.webp"
                    alt="Anth Preschool Team Family"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards of Care Section (Black background matching screenshot) */}
      <section className="bg-[#181514] text-white py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h2 className="font-poppins font-black text-5xl sm:text-6xl lg:text-7xl text-[#FAF0CA] tracking-tight leading-[1.08]">
                The Standard <br />
                of Care
              </h2>
              <p className="text-lg sm:text-xl text-[#FAF0CA]/80 font-poppins font-medium leading-relaxed max-w-lg">
                We go beyond just caring for your child. We ensure their safety, growth, and happiness with a team of highly qualified professionals.
              </p>
            </div>

            {/* Right Column: 3 Stacked Cards matching screenshot */}
            <div className="lg:col-span-7 space-y-6">
              {/* Card 1 */}
              <div className="bg-[#181514] p-6 sm:p-8 rounded-[2rem] border border-[#FAF0CA]/30 shadow-lg text-left transition-all duration-300 hover:border-[#FAF0CA]/60">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="w-6 h-6 text-[#FAF0CA] stroke-[2.5] shrink-0" />
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#FAF0CA]">
                    Certified Professionals
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#FAF0CA]/80 font-poppins font-normal leading-relaxed pl-9">
                  100% of our lead teachers hold degrees in Early Childhood Education.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#181514] p-6 sm:p-8 rounded-[2rem] border border-[#FAF0CA]/30 shadow-lg text-left transition-all duration-300 hover:border-[#FAF0CA]/60">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="w-6 h-6 text-[#FAF0CA] stroke-[2.5] shrink-0" />
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#FAF0CA]">
                    Safety First
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#FAF0CA]/80 font-poppins font-normal leading-relaxed pl-9">
                  All staff members are fully trained and certified in Pediatric First Aid and CPR.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#181514] p-6 sm:p-8 rounded-[2rem] border border-[#FAF0CA]/30 shadow-lg text-left transition-all duration-300 hover:border-[#FAF0CA]/60">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="w-6 h-6 text-[#FAF0CA] stroke-[2.5] shrink-0" />
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#FAF0CA]">
                    Heart-Centered Care
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#FAF0CA]/80 font-poppins font-normal leading-relaxed pl-9">
                  Hand-picked not just for their qualifications, but for their genuine patience and love for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
