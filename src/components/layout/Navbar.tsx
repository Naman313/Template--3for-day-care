import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Heart, Sun, Shield, BookOpen, HelpCircle } from 'lucide-react';
import { LOGO_URL } from '../../data/mockData';

interface NavbarProps {
  onOpenTourModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTourModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The School & Teachers', path: '/theschool-and-teacher', icon: Heart },
    { name: 'Learning Approach', path: '/our-learning-approach', icon: Sun },
    { name: 'Child Safety', path: '/child-safety', icon: Shield },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D3B66]/95 backdrop-blur-lg border-b border-white/10 shadow-2xl py-2.5 sm:py-3'
          : 'bg-white/20 backdrop-blur-md border-b border-white/20 py-3 sm:py-4'
      } px-4 sm:px-8 lg:px-12`}
    >
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side: AnTh Sticker Logo + Motto */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="AnTh Preschool Logo"
            className={`w-auto transform group-hover:scale-105 transition-all duration-300 drop-shadow-sm ${
              scrolled ? 'h-9 sm:h-11 lg:h-12' : 'h-10 sm:h-12 lg:h-14'
            }`}
          />
          <div className="hidden md:flex flex-col text-[#C54A00] font-extrabold text-[10px] sm:text-[11px] leading-tight tracking-wide whitespace-nowrap">
            <span className={scrolled ? 'text-[#FAF0CA]' : 'text-[#C54A00]'}>Loved,</span>
            <span className={scrolled ? 'text-[#FAF0CA]' : 'text-[#C54A00]'}>Safe,</span>
            <span className={scrolled ? 'text-[#FAF0CA]' : 'text-[#C54A00]'}>and free to grow.</span>
          </div>
        </Link>

        {/* Right Side: Horizontal Nav Links + Coral Action Button */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 flex-shrink-0">
          
          {/* Nav Links in Bold White Text */}
          <nav className="flex items-center gap-5 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap text-xs lg:text-sm xl:text-base font-poppins font-bold tracking-tight text-white transition-all duration-200 drop-shadow-md hover:text-[#FAF0CA] ${
                    active ? 'underline underline-offset-8 decoration-[#F95738] decoration-2 font-extrabold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Book a Tour Coral Button ↗ */}
          <button
            onClick={onOpenTourModal}
            className="whitespace-nowrap inline-flex items-center gap-2 bg-[#F95738] hover:bg-[#EE964B] text-white text-xs lg:text-sm xl:text-base font-poppins font-extrabold tracking-wide px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-pop transform hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
          >
            <span>Book a Tour</span>
            <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
          </button>

        </div>

        {/* Mobile View Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenTourModal}
            className="bg-[#F95738] text-white text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full shadow-sm whitespace-nowrap"
          >
            Book Tour ↗
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-2xl bg-[#0D3B66] text-white shadow-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D3B66] text-white rounded-3xl mt-3 p-6 overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="space-y-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold ${
                      active ? 'bg-[#F95738] text-white font-bold' : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${active ? 'text-white' : 'text-[#F4D35E]'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


