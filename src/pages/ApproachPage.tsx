import React from 'react';
import { motion } from 'framer-motion';
import { SCHEDULE_DATA } from '../data/mockData';
import { Compass, Sun, Heart, Sparkles, Clock, CheckCircle2, Dumbbell, Brain, Smile } from 'lucide-react';

export const ApproachPage: React.FC = () => {
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
          <Sun className="w-4 h-4 text-[#F95738]" />
          <span>PLAY-BASED CURRICULUM</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-6xl text-[#0D3B66] tracking-tight leading-tight mb-4"
        >
          Our Learning Approach
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#57534D] max-w-2xl mx-auto leading-relaxed"
        >
          Learning through experience. Growing in respect. We do not mold children into pre-defined shapes — we empower them to explore the world at their own unique pace.
        </motion.p>
      </section>

      {/* 3 Core Philosophy Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#F95738]/10 text-[#F95738] rounded-2xl flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Freedom to Explore</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Learning through play and senses. Children are encouraged to ask questions, touch, smell, and build with their own hands rather than sit passively.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#EE964B]/10 text-[#EE964B] rounded-2xl flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Respecting Individuality</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              No comparisons, no forced speed. Teachers act as observers and gentle guides to help children maximize their natural strengths and interests.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card space-y-4">
            <div className="w-12 h-12 bg-[#F4D35E]/30 text-[#0D3B66] rounded-2xl flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-[#F95738]" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Real-Life Skills</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Building independence from the smallest tasks like self-feeding, tidying up toys, and expressing personal emotions constructively.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Routine / Timeline */}
      <section className="bg-[#FAF3E6]/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="framer-badge bg-[#F95738]/10 text-[#F95738] text-xs px-4 py-1.5 rounded-full font-bold">
              DAILY SCHEDULE & ROUTINE
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66]">
              A Day in the Life at Anth
            </h2>
            <p className="text-sm text-[#57534D]">
              A balanced rhythm of structured discovery, outdoor play, quiet rest, and group connection.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEDULE_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-3xl border border-[#FAECDE] shadow-soft hover:shadow-card transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#F95738] bg-[#FAF0CA] px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F95738]" />
                    {item.time}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#57534D]">
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-poppins font-extrabold text-lg text-[#0D3B66] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#57534D] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-[#57534D] italic max-w-xl mx-auto">
            “Activities flexibly adapt depending on the weather, season, and classroom interest so your child always has something fresh to discover.”
          </div>

        </div>
      </section>

      {/* 3 Pillars of Growth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="framer-badge bg-[#EE964B]/15 text-[#EE964B] text-xs px-4 py-1.5 rounded-full font-bold">
            BALANCED DEVELOPMENT
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66]">
            The 3 Pillars of Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card text-center space-y-4">
            <div className="w-16 h-16 bg-[#F95738]/10 text-[#F95738] rounded-full flex items-center justify-center mx-auto">
              <Dumbbell className="w-8 h-8" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Strong Physicality</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Healthy movement, coordination, gross & fine motor skills through outdoor play, climbing, and tactile craft activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card text-center space-y-4">
            <div className="w-16 h-16 bg-[#EE964B]/10 text-[#EE964B] rounded-full flex items-center justify-center mx-auto">
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Emotional Intelligence (EQ)</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Naming emotions, self-soothing techniques, conflict resolution, and sharing empathy toward peers in a safe environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#FAECDE] shadow-card text-center space-y-4">
            <div className="w-16 h-16 bg-[#F4D35E]/30 text-[#0D3B66] rounded-full flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 text-[#0D3B66]" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl text-[#0D3B66]">Sharp Cognition</h3>
            <p className="text-xs text-[#57534D] leading-relaxed">
              Logical problem-solving, curiosity, story comprehension, and hands-on science experiments without passive screen time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
