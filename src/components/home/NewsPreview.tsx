import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FRAMER_IMAGES } from '../../data/mockData';

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  date: string;
  image: string;
  isFeatured?: boolean;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'What Is Play-Based Learning — And Why It...',
    slug: 'what-is-play-based-learning-—-and-why-it-matters-more-than-flashcards',
    categories: ['News'],
    date: 'Sunday, May 10, 2026',
    image: FRAMER_IMAGES.toddlerExploration,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Back-to-School 2026: How to Prepare Your Chi...',
    slug: 'back-to-school-2026-how-to-prepare-your-child-for-preschool',
    categories: ['Back to school 2026', 'Announcement'],
    date: 'Tuesday, March 31, 2026',
    image: FRAMER_IMAGES.building,
    isFeatured: false,
  },
  {
    id: '3',
    title: 'How to Build a Morning Routine Your Toddler Will...',
    slug: 'how-to-build-a-morning-routine-your-toddler-will-actually-love',
    categories: ['Parent Tips'],
    date: 'Sunday, May 10, 2026',
    image: FRAMER_IMAGES.classroomPlay,
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Why Your Child Cries on the First Day of Preschool...',
    slug: 'why-your-child-cries-on-the-first-day-of-preschool-—-and-what-you-can-do-to-help',
    categories: ['Parent Tips'],
    date: 'Sunday, May 10, 2026',
    image: FRAMER_IMAGES.woodenFurnishings,
    isFeatured: false,
  },
];

export const NewsPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            {/* Top Navy Blue Pill Badge */}
            <div className="inline-block bg-[#0D3B66] text-white font-poppins font-bold text-sm sm:text-base px-6 py-2 rounded-full mb-4 shadow-sm">
              Latest News
            </div>

            {/* Main Rust-Red Heading */}
            <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-[#C54A00] tracking-tight leading-[1.1]">
              Stay up to date with <br />
              Anth Preschool
            </h2>
          </div>

          {/* View All Posts Button */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 border-2 border-[#F95738] text-[#F95738] hover:bg-[#F95738] hover:text-white font-poppins font-bold text-base px-7 py-3 rounded-full transition-all duration-200 self-start sm:self-end shadow-sm"
          >
            <span>View All Posts</span>
            <span className="text-xl leading-none">↗</span>
          </Link>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {NEWS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full flex"
            >
              <Link
                to="/resources"
                className="w-full rounded-[2.5rem] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group border-2 bg-[#FAF0CA]/30 hover:bg-[#F95738] border-[#F95738]/40 hover:border-[#F95738] shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Card Image Container with Rounded Arch Corners */}
                  <div className="relative w-full h-56 sm:h-60 rounded-[2rem] overflow-hidden mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating VIEW Badge on Card Image */}
                    <div className="absolute bottom-3 right-3 bg-white text-[#F95738] font-poppins font-extrabold text-xs px-4 py-2 rounded-full shadow-md uppercase tracking-wider group-hover:bg-[#0D3B66] group-hover:text-white transition-colors">
                      VIEW
                    </div>
                  </div>

                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="font-poppins font-bold text-xs px-3.5 py-1.5 rounded-full inline-block shadow-xs bg-[#F95738] text-white group-hover:bg-white/25 group-hover:text-white group-hover:border group-hover:border-white/30 transition-all"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-poppins font-black text-xl sm:text-2xl tracking-tight leading-snug mb-4 text-[#0D3B66] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Date */}
                <p className="font-poppins text-xs font-semibold mt-4 text-[#57534D] group-hover:text-white/90 transition-colors">
                  {item.date}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
