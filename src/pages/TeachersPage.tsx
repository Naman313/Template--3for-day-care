import React from 'react';
import { motion } from 'framer-motion';
import { TEACHERS_DATA } from '../data/mockData';
import { ShieldCheck, Heart, GraduationCap, Award } from 'lucide-react';

export const TeachersPage: React.FC = () => {
  return (
    <div className="pt-32 sm:pt-40 pb-24 space-y-20 bg-[#FFFCF0]">
      
      {/* Header Banner matching Framer Page Style */}
      <section className="relative text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-[#0D3B66] text-white text-xs sm:text-sm font-poppins font-bold tracking-widest px-6 py-2.5 rounded-full uppercase shadow-md mb-6"
        >
          OUR FACULTY & TEAM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D3B66] tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto text-center"
        >
          The School & Teachers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#57534D] font-poppins font-medium max-w-2xl mx-auto text-center leading-relaxed"
        >
          Meet the passionate educators and warm hearts who make Anth Preschool a loving second home for your little ones.
        </motion.p>
      </section>

      {/* Journey Story & Founder Letter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-card border border-[#FAECDE] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#F95738]/10 text-[#F95738] text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              HOW OUR JOURNEY BEGAN
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
              More Than a School, A Family.
            </h2>
            <p className="text-base text-[#57534D] font-poppins leading-relaxed">
              Founded with a simple but profound belief: every child deserves to grow in an environment of love, respect, and boundless curiosity. We built Anth Preschool not just to be a place of learning, but a safe haven where little personalities can bloom naturally.
            </p>
            <p className="text-base text-[#57534D] font-poppins leading-relaxed italic border-l-4 border-[#F4D35E] pl-4">
              “Our teachers are more than educators; they are gentle guides, careful listeners, and your child's first friends outside of home.”
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-8 border-[#FAF0CA] shadow-floating">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Founder"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block bg-[#EE964B]/15 text-[#EE964B] text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
            FACULTY & EDUCATORS
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
            The Hearts Behind the Classrooms
          </h2>
          <p className="text-base text-[#57534D] font-poppins font-medium">
            Hand-picked early childhood educators dedicated to your toddler's safety and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS_DATA.map((teacher, idx) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#FAECDE] shadow-card hover:shadow-floating transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-[#0D3B66] font-mono text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {teacher.classGroup}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">
                    {teacher.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#F95738] uppercase tracking-wider mb-2">
                    {teacher.role}
                  </div>
                  <p className="text-xs text-[#57534D] leading-relaxed italic">
                    “{teacher.bio}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter Note */}
        <div className="mt-12 text-center bg-[#FAF0CA]/50 p-6 rounded-3xl border border-[#F4D35E]/40 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#0D3B66] leading-relaxed">
            “These are just a few faces of our family. Every day, a dedicated team of over 37 teachers, caregivers, and kitchen staff work together to make Anth Preschool a perfect second home for your child.”
          </p>
        </div>
      </section>

      {/* Standards of Care */}
      <section className="bg-[#FAF3E6]/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-soft space-y-3">
              <div className="w-12 h-12 bg-[#F95738]/10 text-[#F95738] rounded-2xl flex items-center justify-center mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-[#0D3B66]">Certified Professionals</h4>
              <p className="text-xs text-[#57534D]">100% of our lead teachers hold degrees in Early Childhood Education.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-soft space-y-3">
              <div className="w-12 h-12 bg-[#EE964B]/10 text-[#EE964B] rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-[#0D3B66]">Safety First</h4>
              <p className="text-xs text-[#57534D]">All staff members are fully trained and certified in Pediatric First Aid and CPR.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-soft space-y-3">
              <div className="w-12 h-12 bg-[#F4D35E]/30 text-[#0D3B66] rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 fill-current text-[#F95738]" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-[#0D3B66]">Heart-Centered Care</h4>
              <p className="text-xs text-[#57534D]">Hand-picked not just for qualifications, but for genuine patience and love for children.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};


