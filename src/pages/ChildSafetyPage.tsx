import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, UserCheck, HeartPulse, Flame, Cross } from 'lucide-react';

export const ChildSafetyPage: React.FC = () => {
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

      {/* Forest Green Hero Banner (Matching Screenshot 1) */}
      <section className="bg-[#0A4D2E] text-[#FAF0CA] py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side Big Title */}
            <div className="lg:col-span-7 text-left">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="font-poppins font-black text-6xl sm:text-7xl lg:text-8xl text-[#FAF0CA] tracking-tight leading-[1.02]"
              >
                Child <br />
                Safety
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
                We believe that a child can only truly learn and explore when they feel completely safe. From secure campus access to daily hygiene routines, every detail at Anth Preschool is designed to protect your little one.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Video Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/UNWCCaKWcCCjXpNqAzwaPBhnbI.mp4"
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
            Your child's safety is our highest priority.
          </motion.h2>
        </div>
      </section>

      {/* Physical Security Section (Matching Screenshot 2) */}
      <section className="py-24 sm:py-32 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Dark Navy Top Pill Badge */}
          <div className="inline-block bg-[#0D3B66] text-[#FAF0CA] font-poppins font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md mb-6">
            Physical Security
          </div>

          {/* Main Section Title */}
          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#A91D22] tracking-tight max-w-4xl mx-auto leading-tight mb-16">
            Advanced security protocols ensuring a protected space for every child.
          </h2>

          {/* 3 Physical Security Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-[#FAECDE] shadow-soft hover:shadow-card transition-all space-y-4"
            >
              <div className="w-14 h-14 bg-[#F95738]/10 text-[#F95738] rounded-2xl flex items-center justify-center">
                <Lock className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66]">Secure Access Control</h3>
              <p className="text-base text-[#57534D] font-poppins leading-relaxed">
                Entry is strictly limited to authorized families and staff, with door access managed through biometric keypads and personal PIN entry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-[#FAECDE] shadow-soft hover:shadow-card transition-all space-y-4"
            >
              <div className="w-14 h-14 bg-[#EE964B]/10 text-[#EE964B] rounded-2xl flex items-center justify-center">
                <Eye className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66]">Continuous Monitoring</h3>
              <p className="text-base text-[#57534D] font-poppins leading-relaxed">
                Our campus is equipped with closed-circuit high-definition cameras in all hallways, classrooms, and outdoor play areas for internal safety management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-[#FAECDE] shadow-soft hover:shadow-card transition-all space-y-4"
            >
              <div className="w-14 h-14 bg-[#F4D35E]/30 text-[#0D3B66] rounded-2xl flex items-center justify-center">
                <UserCheck className="w-7 h-7 stroke-[2.5] text-[#F95738]" />
              </div>
              <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66]">Strict Pick-up Protocols</h3>
              <p className="text-base text-[#57534D] font-poppins leading-relaxed">
                Children are only released to pre-authorized guardians presenting valid government-issued photo ID. No exceptions are ever made.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Staff Medical Readiness (Dark Navy Theme) */}
      <section className="bg-[#0D3B66] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-white/10 text-[#F4D35E] text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              EMERGENCY READINESS
            </span>
            <h2 className="font-poppins font-black text-4xl sm:text-5xl text-white tracking-tight">
              Prepared for the Unexpected
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 border border-white/15 p-8 rounded-[2.5rem] space-y-4">
              <div className="w-12 h-12 bg-[#F95738] rounded-2xl flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-extrabold text-xl text-white">100% CPR & First Aid</h4>
              <p className="text-base text-[#FAF0CA]/85 font-poppins leading-relaxed">Every single staff member and lead teacher is certified in Pediatric CPR and First Aid.</p>
            </div>

            <div className="bg-white/10 border border-white/15 p-8 rounded-[2.5rem] space-y-4">
              <div className="w-12 h-12 bg-[#EE964B] rounded-2xl flex items-center justify-center text-white shadow-md">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-extrabold text-xl text-white">Regular Fire Drills</h4>
              <p className="text-base text-[#FAF0CA]/85 font-poppins leading-relaxed">Playfully integrated evacuation drills so children know how to move safely without feeling frightened.</p>
            </div>

            <div className="bg-white/10 border border-white/15 p-8 rounded-[2.5rem] space-y-4">
              <div className="w-12 h-12 bg-[#F4D35E] rounded-2xl flex items-center justify-center text-[#0D3B66] shadow-md">
                <Cross className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-extrabold text-xl text-white">Fully Stocked Kits</h4>
              <p className="text-base text-[#FAF0CA]/85 font-poppins leading-relaxed">Classrooms and playgrounds are equipped with pediatric first aid supplies and emergency action plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Safety Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0CA] text-[#0D3B66] rounded-[3rem] p-10 sm:p-16 border border-[#F4D35E]/60 shadow-xl max-w-5xl mx-auto space-y-6 text-center">
          <span className="inline-block bg-[#0D3B66] text-[#FAF0CA] text-xs font-poppins font-bold px-5 py-2 rounded-full uppercase tracking-wide">
            EMOTIONAL SAFETY
          </span>
          <h2 className="font-poppins font-black text-4xl sm:text-5xl text-[#0D3B66] tracking-tight">
            Protecting Their Little Hearts
          </h2>
          <p className="text-lg sm:text-xl text-[#0D3B66]/90 font-poppins font-medium leading-relaxed max-w-3xl mx-auto">
            Safety isn't just physical. At Anth Preschool, emotional safety means your child is heard, respected, and never shamed. We use positive reinforcement, gentle redirection, and a bully-free philosophy where children feel safe enough to express feelings, make mistakes, and grow with confidence.
          </p>
        </div>
      </section>

    </div>
  );
};
