import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, X, Calendar, Clock, ArrowRight } from 'lucide-react';

export interface ResourceArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const ARTICLES_DATA: ResourceArticle[] = [
  {
    id: '1',
    category: 'Parent Tips',
    title: 'What Is Play-Based Learning — And Why It Matters More Than Ever',
    date: 'Sunday, May 10, 2026',
    readTime: '5 min read',
    image: '/images/kids/kid_photo_14.webp',
    excerpt: 'Discover why exploration, cause-and-effect sensory play, and guided curiosity build stronger executive function than early flashcard drilling.',
    content: [
      "It's a question many parents ask when they first learn about play-based learning programs. And it's a completely fair one — especially in a culture that tends to equate learning with sitting still and studying.",
      "The short answer: yes, they're playing. And that play is doing more for your child's brain development than almost anything else could at this age.",
      "Play-based learning is an educational approach grounded in decades of child development research. It recognizes that for children under 6, play is not the opposite of learning — it is the primary mechanism through which learning happens."
    ]
  },
  {
    id: '2',
    category: 'Announcement',
    title: 'Back to School 2026: How to Prepare Your Child for Preschool',
    date: 'Tuesday, March 31, 2026',
    readTime: '4 min read',
    image: '/images/kids/kid_photo_20.webp',
    excerpt: 'Simple, practical tips to transition your toddler gently into a school schedule without tears or bedtime struggles.',
    content: [
      "Whether this is your child's very first year of preschool or they're returning after a summer away, the weeks leading up to the start of school matter.",
      "Start introducing the idea of school into everyday conversation — casually, positively, without pressure.",
      "Summer schedules tend to drift — later bedtimes, longer naps, irregular meals. Start shifting gently back toward the school-year routine two weeks out."
    ]
  },
  {
    id: '3',
    category: 'Parent Tips',
    title: 'How to Build a Morning Routine Your Toddler Will Actually Love',
    date: 'Friday, February 20, 2026',
    readTime: '6 min read',
    image: '/images/kids/kid_photo_22.webp',
    excerpt: 'Turn hectic school drop-off mornings into calm, joyful bonding moments with visual schedules and gentle transitions.',
    content: [
      "Mornings with toddlers can often feel like a race against the clock. But with predictable routines, children feel empowered and secure.",
      "Create a colorful visual routine chart with pictures of morning steps: waking up, brushing teeth, eating breakfast, and putting on shoes.",
      "Giving your child minor choices — like picking between two shirts — builds independence while maintaining the schedule."
    ]
  },
  {
    id: '4',
    category: 'Education',
    title: 'Why Your Child Cries on the First Day of Preschool — And What to Do',
    date: 'Monday, January 12, 2026',
    readTime: '5 min read',
    image: '/images/kids/kid_photo_28.webp',
    excerpt: 'Separation anxiety is completely normal. Here is how our warm educators help your child feel safe and loved.',
    content: [
      "Tears during the first week of drop-off are a healthy expression of attachment. It means your child loves you and relies on your presence.",
      "Keep drop-offs short, warm, and confident. A quick hug, a loving reassurance, and a clear promise to return builds trust faster than lingering."
    ]
  },
  {
    id: '5',
    category: 'Activities',
    title: 'Simple Activities That Help Children Learn Through Play',
    date: 'Wednesday, November 18, 2025',
    readTime: '4 min read',
    image: '/images/kids/kid_photo_31.webp',
    excerpt: 'Fun sensory bin recipes, outdoor scavenger hunts, and building challenges you can easily set up at home.',
    content: [
      "You don't need expensive toys to stimulate your child's curiosity. Ordinary household materials can inspire hours of creative discovery.",
      "Sensory bins with rice, water, or kinetic sand help refine fine motor skills while encouraging problem solving."
    ]
  },
  {
    id: '6',
    category: 'School Updates',
    title: 'Helping Your Child Feel Confident About Starting Preschool',
    date: 'Thursday, October 15, 2025',
    readTime: '5 min read',
    image: '/images/kids/kid_photo_19.webp',
    excerpt: 'Nurturing self-help skills like tidying toys, opening lunchboxes, and asking for help with confidence.',
    content: [
      "Confidence in early childhood grows when kids feel capable of navigating their environment independently.",
      "Encourage your toddler to practice opening their water bottle or putting on their coat independently at home."
    ]
  },
  {
    id: '7',
    category: 'Parent Tips',
    title: 'Sensory Play at Home: Easy Experiments for Little Learners',
    date: 'Saturday, September 5, 2025',
    readTime: '4 min read',
    image: '/images/kids/kid_photo_24.webp',
    excerpt: 'Discover cause-and-effect science experiments that foster wonder and fine motor coordination.',
    content: [
      "Sensory play engages all five senses and strengthens neural pathways vital for future academic success.",
      "Try simple tactile mixing games with safe kitchen ingredients like cornstarch, water, and food coloring."
    ]
  },
  {
    id: '8',
    category: 'News',
    title: 'Building Emotional Resilience in Early Childhood',
    date: 'Monday, August 10, 2025',
    readTime: '5 min read',
    image: '/images/kids/kid_photo_27.webp',
    excerpt: 'How gentle emotional naming and self-soothing techniques empower children to navigate big feelings.',
    content: [
      "Children aren't born knowing how to regulate big emotions — it's a learned skill developed through loving co-regulation.",
      "By helping your child label their feelings ('I see you feel frustrated'), you give them the tools to process emotions constructively."
    ]
  }
];

export const Resources: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const displayedArticles = ARTICLES_DATA.slice(0, visibleCount);

  return (
    <>
      <div className="w-full relative z-30">
        <div className="h-1 bg-[#F4D35E]" />
        <div className="h-1 bg-[#EE964B]" />
        <div className="h-1 bg-[#F95738]" />
        <div className="h-1 bg-[#A91D22]" />
        <div className="h-1 bg-[#0D3B66]" />
      </div>
      <section className="bg-[#FFFDF7] text-[#1C1917] py-20 sm:py-28 lg:py-36 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN (Sticky on Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6 text-left">
              {/* Resources Pill */}
              <div>
                <span className="inline-block bg-[#0D3B66] text-[#FAF0CA] font-poppins font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md">
                  Resources
                </span>
              </div>

              {/* Large "Latest News" Heading */}
              <h1 className="font-poppins font-black text-6xl sm:text-7xl lg:text-8xl text-[#A91D22] tracking-tight leading-[0.92]">
                Latest <br />
                News
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#57534D] font-poppins font-medium leading-relaxed max-w-xs pt-2">
                Stay up to date with the latest news, education and school updates.
              </p>

              {/* Social Links Area */}
              <div className="pt-6 border-t border-[#F4D35E]/40 max-w-xs">
                <h4 className="font-poppins font-bold text-base text-[#0D3B66] mb-4">
                  Find us here
                </h4>
                <div className="flex items-center gap-5 text-[#57534D]">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-3 rounded-full bg-white border border-[#FAECDE] hover:text-[#F95738] hover:border-[#F95738] transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-full bg-white border border-[#FAECDE] hover:text-[#F95738] hover:border-[#F95738] transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full bg-white border border-[#FAECDE] hover:text-[#F95738] hover:border-[#F95738] transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-3 rounded-full bg-white border border-[#FAECDE] hover:text-[#F95738] hover:border-[#F95738] transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT CONTENT (Article Grid & Load More) */}
            <main className="lg:col-span-8 flex flex-col space-y-12">

              {/* Article Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                {displayedArticles.map((article, idx) => {
                  const isRedStyle = idx % 2 === 0;

                  return (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                      onClick={() => setActiveArticle(article)}
                      className={`cursor-pointer rounded-tl-[3.5rem] rounded-tr-[1.8rem] rounded-br-[3.5rem] rounded-bl-[1.8rem] overflow-hidden p-6 sm:p-7 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 ${isRedStyle
                          ? 'bg-[#A91D22] text-white shadow-xl border-4 border-transparent'
                          : 'bg-[#FFFDF7] text-[#0D3B66] border-2 border-[#A91D22]/40 shadow-lg'
                        }`}
                    >
                      <div>
                        {/* Image Frame with Floating VIEW Badge */}
                        <div className="rounded-tl-[2.5rem] rounded-tr-[1.2rem] rounded-br-[2.5rem] rounded-bl-[1.2rem] overflow-hidden relative aspect-[16/10] mb-6 bg-black/10">
                          <img
                            src={article.image}
                            alt={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          {/* Floating VIEW Interaction Badge */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-[#0D3B66] font-poppins font-black text-xs tracking-widest uppercase flex items-center justify-center shadow-2xl border-2 border-[#A91D22]/20 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-6 transition-all duration-300 pointer-events-none z-20">
                            VIEW
                          </div>
                        </div>

                        {/* Category Tag */}
                        <div className="mb-3 text-left">
                          <span
                            className={`inline-block px-3.5 py-1 rounded-xl text-xs font-mono font-bold uppercase tracking-wider ${isRedStyle
                                ? 'bg-white/15 text-white border border-white/30'
                                : 'bg-[#A91D22] text-white'
                              }`}
                          >
                            {article.category}
                          </span>
                        </div>

                        {/* Article Title */}
                        <h3
                          className={`font-poppins font-bold text-xl sm:text-2xl text-left leading-snug mb-4 group-hover:opacity-90 transition-opacity ${isRedStyle ? 'text-white' : 'text-[#0D3B66]'
                            }`}
                        >
                          {article.title}
                        </h3>
                      </div>

                      {/* Article Date */}
                      <div className="pt-4 text-left border-t border-current/10 flex items-center justify-between">
                        <span
                          className={`font-mono text-xs font-medium ${isRedStyle ? 'text-white/80' : 'text-[#57534D]'
                            }`}
                        >
                          {article.date}
                        </span>
                        <span className="text-xs font-bold font-mono opacity-80 group-hover:translate-x-1 transition-transform">
                          ↗
                        </span>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleCount < ARTICLES_DATA.length && (
                <div className="pt-8 text-center">
                  <button
                    onClick={() => setVisibleCount(ARTICLES_DATA.length)}
                    className="bg-[#4A0E17] hover:bg-[#3D0C14] text-white font-poppins font-bold text-base px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Load More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </main>

          </div>
        </div>

        {/* Reader Modal */}
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
                className="relative w-full max-w-3xl bg-[#FFFCF0] rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-[#FAECDE] z-10 max-h-[85vh] overflow-y-auto text-left"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-[#FAF0CA] text-[#0D3B66] hover:bg-[#F95738] hover:text-white transition-colors shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <span className="font-mono text-xs font-bold bg-[#A91D22] text-white px-4 py-1.5 rounded-xl uppercase inline-block">
                    {activeArticle.category}
                  </span>

                  <h2 className="font-poppins font-black text-2xl sm:text-4xl text-[#0D3B66] leading-tight">
                    {activeArticle.title}
                  </h2>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#57534D]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#EE964B]" />
                      {activeArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#EE964B]" />
                      {activeArticle.readTime}
                    </span>
                  </div>

                  <div className="rounded-[2rem] overflow-hidden h-64 sm:h-80 border-4 border-white shadow-lg">
                    <img
                      src={activeArticle.image}
                      alt={activeArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4 text-base text-[#57534D] font-poppins leading-relaxed">
                    {activeArticle.content.map((paragraph, i) => (
                      <p key={i}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};
