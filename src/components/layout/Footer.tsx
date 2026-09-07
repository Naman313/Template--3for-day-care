import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { LOGO_URL } from '../../data/mockData';

interface FooterProps {
  onOpenTourModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#F95738] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12">

          {/* COLUMN 1 — Brand, Socials & Legal */}
          <div className="space-y-6">
            {/* Logo Image matching Navbar format */}
            <Link to="/" className="inline-block">
              <img
                src={LOGO_URL}
                alt="AnTh Preschool Logo"
                className="h-12 sm:h-14 w-auto drop-shadow-md transform hover:scale-105 transition-transform"
              />
            </Link>

            {/* Tagline */}
            <p className="font-poppins font-bold text-white text-base leading-snug">
              Loved, safe, and free to grow
            </p>

            {/* Find us here */}
            <div>
              <p className="font-poppins font-bold text-white/90 text-sm mb-3">
                Find us here
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#F95738] flex items-center justify-center transition-all shadow-xs"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#F95738] flex items-center justify-center transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#F95738] flex items-center justify-center transition-all shadow-xs"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#F95738] flex items-center justify-center transition-all shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Legal Links */}
              <div className="space-y-2 pt-2">
                <Link to="/privacy-policy" className="font-poppins font-bold text-white text-base hover:underline block">
                  Privacy policy
                </Link>
                <Link to="/terms-of-service" className="font-poppins font-bold text-white text-base hover:underline block">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 2 — Contact & Working Time */}
          <div>
            <span className="font-poppins font-bold text-white/90 text-sm block mb-4">
              Contact
            </span>
            <h4 className="font-poppins font-extrabold text-white text-lg mb-6">
              Anth Preschool HQ
            </h4>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-poppins font-bold text-white text-sm leading-snug">
                  000 Cedar Grove Avenue, Suite 120, Seattle, WA 98101, USA
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-poppins font-bold text-white text-sm">
                  +1 206 123 4124
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-poppins font-bold text-white text-sm">
                  anth.preschool@example.com
                </span>
              </div>

              {/* Working Time */}
              <div className="flex items-start gap-3 pt-2">
                <Calendar className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-poppins font-bold text-white text-sm block">
                    Working Time
                  </span>
                  <span className="font-poppins font-bold text-white text-sm block opacity-95">
                    Mon – Fri (7:00 – 17:00)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3 — Explore Links */}
          <div>
            <span className="font-poppins font-bold text-white/90 text-sm block mb-4">
              Explore
            </span>
            <ul className="space-y-3 font-poppins font-bold text-base text-white">
              <li>
                <Link to="/" className="hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link to="/theschool-and-teacher" className="hover:underline transition-all">The School & Teachers</Link>
              </li>
              <li>
                <Link to="/our-learning-approach" className="hover:underline transition-all">Our Learning Approach</Link>
              </li>
              <li>
                <Link to="/child-safety" className="hover:underline transition-all">Child Safety</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:underline transition-all">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline transition-all">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — Anth Preschool Links */}
          <div>
            <span className="font-poppins font-bold text-white/90 text-sm block mb-4">
              Anth Preschool
            </span>
            <ul className="space-y-3 font-poppins font-bold text-base text-white">
              <li>
                <Link to="/faq" className="hover:underline transition-all">FAQ</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-8 border-t border-white/20 text-center font-poppins text-xs font-semibold text-white/90 space-y-1">
          <p>© 2026 Anth Preschool.</p>
          <p>Designed by Tang Quoc Dat.</p>
        </div>

      </div>
    </footer>
  );
};
