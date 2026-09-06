import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, UserCheck, Sparkles, HeartPulse, Flame, Cross } from 'lucide-react';

export const ChildSafetyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-20">
      
      {/* Header Banner */}
      <section className="relative text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#FAF0CA] text-[#0D3B66] text-xs font-mono font-bold tracking-widest px-4 py-2 rounded-full uppercase mb-4"
        >
          <ShieldCheck className="w-4 h-4 text-[#F95738]" />
          <span>SAFETY PROTOCOLS & ACCREDITATION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-6xl text-[#0D3B66] tracking-tight leading-tight mb-4"
        >
          Child Safety
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#57534D] max-w-2xl mx-auto leading-relaxed"
        >
          We believe a child can only truly learn and explore when they feel completely safe. From secure campus access to daily hygiene routines, every detail protects your little one.
        </motion.p>
      </section>

      {/* Physical Security Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="framer-badge bg-[#F95738]/10 text-[#F95738] text-xs px-4 py-1.5 rounded-full font-bold">
            PHYSICAL SECURITY
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66]">
            Protected Campus & Controlled Access
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#F95738]/10 text-[#F95738] rounded-2xl flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Secure Access Control</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Entry is strictly limited to authorized families and staff, with door access managed through biometric keypads and personal PIN entry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#EE964B]/10 text-[#EE964B] rounded-2xl flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Continuous Internal Monitoring</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Our campus is equipped with closed-circuit high-definition cameras in all hallways, classrooms, and play areas for internal safety management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#F4D35E]/30 text-[#0D3B66] rounded-2xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-[#F95738]" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Strict Pick-up Protocols</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Children are only released to pre-authorized guardians presenting valid government-issued photo ID. No exceptions are ever made.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Medical Readiness */}
      <section className="bg-[#0D3B66] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="framer-badge bg-white/10 text-[#F4D35E] text-xs px-4 py-1.5 rounded-full font-bold">
              EMERGENCY READINESS
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
              Prepared for the Unexpected
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 border border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 bg-[#F95738] rounded-xl flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-white">100% CPR & First Aid</h4>
              <p className="text-xs text-[#FAF0CA]/80">Every single staff member and lead teacher is certified in Pediatric CPR and First Aid.</p>
            </div>

            <div className="bg-white/10 border border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 bg-[#EE964B] rounded-xl flex items-center justify-center text-white">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-white">Regular Fire Drills</h4>
              <p className="text-xs text-[#FAF0CA]/80">Playfully integrated evacuation drills so children know how to move safely without feeling frightened.</p>
            </div>

            <div className="bg-white/10 border border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 bg-[#F4D35E] rounded-xl flex items-center justify-center text-[#0D3B66]">
                <Cross className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-lg text-white">Fully Stocked Kits</h4>
              <p className="text-xs text-[#FAF0CA]/80">Classrooms and playgrounds are equipped with pediatric first aid supplies and emergency action plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FAECDE] shadow-card max-w-4xl mx-auto space-y-4 text-center">
          <span className="framer-badge bg-[#FAF0CA] text-[#0D3B66] text-xs px-4 py-1.5 rounded-full font-bold">
            EMOTIONAL SAFETY
          </span>
          <h2 className="font-poppins font-extrabold text-3xl text-[#0D3B66]">
            Protecting Their Little Hearts
          </h2>
          <p className="text-sm sm:text-base text-[#57534D] leading-relaxed">
            Safety isn't just physical. At Anth Preschool, emotional safety means your child is heard, respected, and never shamed. We use positive reinforcement, gentle redirection, and a bully-free philosophy where children feel safe enough to express feelings, make mistakes, and grow with confidence.
          </p>
        </div>
      </section>

    </div>
  );
};
