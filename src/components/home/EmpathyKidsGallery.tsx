import React from 'react';
import { motion } from 'framer-motion';

export const EmpathyKidsGallery: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#FFFCF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Column Grid Layout matching the 4 Framer Kids Photos 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Tall Oval Capsule Photo (Outdoor Track) */}
          <div className="md:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 0.8,
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-sm sm:max-w-none h-[440px] sm:h-[540px] lg:h-[620px] p-3 rounded-[190px] border-2 border-[#EE964B]/60 bg-white/50 shadow-xl group cursor-pointer"
            >
              <div className="w-full h-full rounded-[180px] overflow-hidden relative">
                <img
                  src="/images/empathy/outdoor_track.webp"
                  alt="Child playing outdoors on rainbow track"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Center Column: 2 Stacked Windows (Tunnel Circle & Toys Box) */}
          <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8 justify-center">
            
            {/* Center Top: Circle Window (Tunnel Play) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                y: { repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] p-3 rounded-full border-2 border-[#EE964B]/60 bg-white/50 shadow-xl group overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/images/empathy/tunnel_play.webp"
                  alt="Child playing inside rainbow tunnel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Center Bottom: Rounded Box Window (Classroom Toys) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                y: { repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 1 }
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] p-3 rounded-[44px] border-2 border-[#EE964B]/60 bg-white/50 shadow-xl group overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full rounded-[36px] overflow-hidden relative">
                <img
                  src="/images/empathy/classroom_toys.webp"
                  alt="Child playing with wooden classroom toys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Tall Arch Capsule Photo (Table Friends) */}
          <div className="md:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                y: { repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.3 }
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-sm sm:max-w-none h-[440px] sm:h-[540px] lg:h-[620px] p-3 rounded-[190px] border-2 border-[#EE964B]/60 bg-white/50 shadow-xl group cursor-pointer"
            >
              <div className="w-full h-full rounded-[180px] overflow-hidden relative">
                <img
                  src="/images/empathy/table_friends.webp"
                  alt="Children learning together at classroom table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
