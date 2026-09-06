import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTICLES_DATA, ResourceArticle } from '../data/mockData';
import { BookOpen, Calendar, Clock, ArrowRight, Search, X } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const categories = ['All', 'Parent Tips', 'Announcement', 'News'];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <BookOpen className="w-4 h-4 text-[#F95738]" />
          <span>PARENT GUIDES & ARTICLES</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-6xl text-[#0D3B66] tracking-tight leading-tight"
        >
          Latest News & Resources
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#57534D] max-w-2xl mx-auto leading-relaxed"
        >
          Browse expert tips, checklists, and guides written by our early childhood educators to help your child thrive.
        </motion.p>
      </section>

      {/* Search & Category Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0D3B66] text-white shadow-sm'
                    : 'bg-white text-[#57534D] hover:bg-[#FAF0CA] border border-[#FAECDE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#EE964B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#FAECDE] text-xs text-[#1C1917] focus:outline-none focus:border-[#F95738]"
            />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#FAECDE] shadow-card hover:shadow-floating transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#F95738] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-[#57534D] font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#EE964B]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#EE964B]" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-[#0D3B66] group-hover:text-[#F95738] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#57534D] mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F95738] hover:text-[#0D3B66] transition-colors pt-2 text-left"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reader Modal for Full Article View */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-[#0D3B66]/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#FFFCF0] rounded-3xl p-6 sm:p-10 shadow-floating border border-[#FAECDE] z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-[#FAF0CA] text-[#0D3B66] hover:bg-[#F95738] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="font-mono text-xs font-bold bg-[#F95738]/10 text-[#F95738] px-3 py-1 rounded-full uppercase">
                  {activeArticle.category}
                </span>

                <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#0D3B66]">
                  {activeArticle.title}
                </h2>

                <div className="flex items-center gap-4 text-xs font-mono text-[#57534D]">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <div className="rounded-2xl overflow-hidden h-64 border-4 border-white shadow-soft">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm text-[#1C1917] leading-relaxed">
                  {activeArticle.content.map((paragraph, i) => (
                    <p key={i} className="text-[#57534D]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
