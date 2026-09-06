import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ARTICLES_DATA } from '../../data/mockData';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

export const NewsPreview: React.FC = () => {
  const featuredArticles = ARTICLES_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-[#FFFCF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="framer-badge bg-[#F95738]/10 text-[#F95738] text-xs px-4 py-1.5 rounded-full font-bold inline-block mb-3">
              STAY UP TO DATE
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66] tracking-tight">
              Latest News & Parent Tips
            </h2>
          </div>

          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-[#F95738] hover:text-[#0D3B66] transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#FAECDE] shadow-card hover:shadow-floating transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
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
                  <h3 className="font-poppins font-bold text-lg text-[#0D3B66] group-hover:text-[#F95738] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#57534D] mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  to={`/resources`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3B66] group-hover:text-[#F95738] transition-colors pt-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
