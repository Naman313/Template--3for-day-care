import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA, FAQItem } from '../../data/mockData';
import { Plus, Minus, HelpCircle, Search } from 'lucide-react';

interface FAQAccordionProps {
  showFilter?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ showFilter = false }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Enrollment', 'Safety', 'Daily Life'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {showFilter && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#EE964B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search common questions..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738] shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0D3B66] text-white shadow-sm'
                    : 'bg-white text-[#57534D] hover:bg-[#FAF0CA] border border-[#FAECDE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion items */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-[#57534D]">
            No questions found matching your search.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#F95738]/40 shadow-card'
                    : 'bg-white/80 hover:bg-white border-[#FAECDE]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        isOpen ? 'text-[#F95738]' : 'text-[#EE964B]'
                      }`}
                    />
                    <span className="font-poppins font-extrabold text-base sm:text-lg text-[#0D3B66]">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-[#F95738] text-white rotate-180' : 'bg-[#FAF0CA] text-[#0D3B66]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[#57534D] leading-relaxed border-t border-[#FAECDE]/40">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
