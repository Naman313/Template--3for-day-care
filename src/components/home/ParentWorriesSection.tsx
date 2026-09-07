import React from 'react';
import { motion } from 'framer-motion';
import { EmpathyKidsGallery } from './EmpathyKidsGallery';

export const ParentWorriesSection: React.FC = () => {
  const highlights = [
    {
      image: 'images/kids/CowQurrzcnHDymg5PCXpUEGE8.avif',
      title: 'Respecting individual pace',
      description: '1:8 teacher-to-student ratio. No forced eating, no rigid conformity.',
    },
    {
      image: '/images/illustrations/icon_nutrition.png',
      title: 'Natural nutrition',
      description: 'Balanced meals and varied menus designed with young children’s everyday nutrition in mind.',
    },
    {
      image: '/images/illustrations/icon_spaces.png',
      title: 'Limitless spaces',
      description: 'Green playgrounds, sunlit classrooms, and safe wooden learning materials.',
    },
    {
      image: '/images/illustrations/icon_parents.png',
      title: 'Parents are always close',
      description: 'Real-time updates on your child’s meals, naps, and activities via our internal app.',
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading matching Original Framer Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 pt-4">
          <div className="inline-block bg-[#0D3B66] text-white text-xs sm:text-sm font-poppins font-bold px-7 py-2.5 rounded-full shadow-md mb-6">
            Every Parent Has Their Worries
          </div>

          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#C54A00] tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
            On the first day away from mom's arms — will my child be okay?
          </h2>

          <div className="space-y-1.5">
            <p className="text-lg sm:text-xl text-[#1C1917] font-poppins font-medium text-center leading-relaxed">
              We deeply understand your worries about your child's first days away from home.
            </p>
            <p className="text-base sm:text-lg text-[#1C1917] font-poppins font-medium text-center leading-relaxed">
              Will they eat well? Will they sleep? Will they cry?
            </p>
            <p className="text-base sm:text-lg text-[#57534D] font-poppins font-medium text-center leading-relaxed pt-1">
              It is completely natural.
            </p>
          </div>
        </div>

        {/* 4 Kids Photos Gallery */}
        <EmpathyKidsGallery />

        {/* Side-by-Side 2-Column Section: Principal Quote (Left) + 2x2 Feature Cards Grid (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-7xl mx-auto mt-16 sm:mt-24">

          {/* Left Column: Principal Quote with Yellow Highlights & Author Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Quote with Yellow Pill Highlights & Smaller Font Size (text-sm sm:text-base lg:text-lg) */}
            <div className="font-poppins font-bold text-sm sm:text-base lg:text-lg text-[#1C1917] leading-relaxed">
              "At Anth Preschool, we ensure a gentle transition by{' '}
              <mark className="bg-[#FAF0CA] text-[#1C1917] px-2 py-0.5 rounded-lg font-bold inline-block my-0.5">
                respecting your child's unique pace
              </mark>
              . Rather than forcing rigid routines, we let them{' '}
              <mark className="bg-[#FAF0CA] text-[#1C1917] px-2 py-0.5 rounded-lg font-bold inline-block my-0.5">
                freely explore our safe, sunlit spaces
              </mark>{' '}
              and{' '}
              <mark className="bg-[#FAF0CA] text-[#1C1917] px-2 py-0.5 rounded-lg font-bold inline-block my-0.5">
                enjoy our natural organic meals
              </mark>{' '}
              with our real-time updates, you are always connected to their day."
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src="images/kids/kid_photo_41.webp"
                alt="Laura Nguyen - School Principal"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#F95738] shadow-md flex-shrink-0"
              />
              <div className="flex flex-col">
                <h4 className="font-poppins font-extrabold text-base text-[#1C1917] leading-tight">
                  Laura Nguyen
                </h4>
                <span className="text-xs text-[#57534D] font-poppins font-medium">
                  Principal
                </span>
                <span className="text-xs text-[#57534D] font-poppins font-medium">
                  Anth Preschool
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Feature Cards with Original Framer Illustration Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          >
            {highlights.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#FFFCF0] p-4 sm:p-5 rounded-3xl border border-[#FAECDE] hover:shadow-card transition-all duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#FAF0CA] flex items-center justify-center p-3 mb-4 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-[#1C1917] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534D] font-poppins leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};


