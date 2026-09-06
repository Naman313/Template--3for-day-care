import React from 'react';
import { motion } from 'framer-motion';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-16">
      
      {/* Header Banner */}
      <section className="relative text-center max-w-4xl mx-auto px-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#FAF0CA] text-[#0D3B66] text-xs font-mono font-bold tracking-widest px-4 py-2 rounded-full uppercase"
        >
          <HelpCircle className="w-4 h-4 text-[#F95738]" />
          <span>HELP & INFORMATION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-6xl text-[#0D3B66] tracking-tight leading-tight"
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#57534D] max-w-2xl mx-auto leading-relaxed"
        >
          Find clear answers to common questions about enrollment, daily schedule, organic meals, safety protocols, and teacher ratios.
        </motion.p>
      </section>

      {/* Accordion Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion showFilter={true} />
      </section>

    </div>
  );
};
