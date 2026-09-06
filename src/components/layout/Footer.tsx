import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, MapPin, Phone, Mail, Clock, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenTourModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTourModal }) => {
  return (
    <footer className="bg-[#0D3B66] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Warm Background Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F95738]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F4D35E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Pre-footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-gradient-to-r from-[#F95738] to-[#EE964B] rounded-3xl p-8 sm:p-12 text-white shadow-pop overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute right-4 bottom-0 opacity-15 pointer-events-none">
            <Sun className="w-64 h-64 text-white" />
          </div>
          <div className="max-w-xl z-10 text-center md:text-left">
            <span className="framer-badge bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm mb-3 inline-block">
              ANTH PRESCHOOL
            </span>
            <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Are you ready to begin this wonderful journey with your child?
            </h2>
          </div>
          <div className="z-10 flex-shrink-0">
            <button
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-3 bg-[#0D3B66] hover:bg-[#1C1917] text-white font-poppins font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book your free tour today</span>
              <ArrowRight className="w-5 h-5 text-[#F4D35E]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F95738] flex items-center justify-center text-white">
                <Sun className="w-6 h-6 text-[#FAF0CA]" />
              </div>
              <span className="font-poppins font-extrabold text-2xl tracking-tight text-white">
                Anth Preschool
              </span>
            </div>
            <p className="text-[#FAF0CA] font-medium text-sm leading-relaxed">
              Loved, safe, and free to grow. A loving second home where children build confidence, friendships, and lifelong curiosity.
            </p>
            <div className="pt-2 text-xs text-white/60">
              © {new Date().getFullYear()} Anth Preschool. All rights reserved.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-lg text-[#F4D35E]">Explore</h3>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link to="/" className="hover:text-[#F95738] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/theschool-and-teacher" className="hover:text-[#F95738] transition-colors">The School & Teachers</Link>
              </li>
              <li>
                <Link to="/our-learning-approach" className="hover:text-[#F95738] transition-colors">Our Learning Approach</Link>
              </li>
              <li>
                <Link to="/child-safety" className="hover:text-[#F95738] transition-colors">Child Safety</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#F95738] transition-colors">Parent Resources & Tips</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#F95738] transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F95738] transition-colors">Book a Free Tour</Link>
              </li>
            </ul>
          </div>

          {/* Find Us Here / Location */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-lg text-[#F4D35E]">Find Us Here</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F95738] flex-shrink-0 mt-0.5" />
                <span>000 Cedar Grove Avenue, Suite 120, Seattle, WA 98101, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F95738] flex-shrink-0" />
                <span>+1 206 123 4124</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F95738] flex-shrink-0" />
                <span>anth.preschool@example.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Operating Times */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-lg text-[#F4D35E]">Working Time</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#FAF0CA]">
                <Clock className="w-4 h-4 text-[#F4D35E]" />
                <span className="font-semibold">Mon - Fri</span>
              </div>
              <p className="text-sm text-white/80 font-mono">07:00 AM - 05:00 PM</p>
              <div className="pt-2 text-xs text-white/60 border-t border-white/10">
                Closed on weekends and official holidays.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#F95738] fill-current" />
            <span>for Anth Preschool Families</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
