import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Baby, Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setParentName('');
    setPhone('');
    setChildName('');
    setVisitDate('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D3B66]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#FFFCF0] rounded-3xl p-6 sm:p-8 shadow-floating border border-[#FAECDE] z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF0CA]/60 text-[#0D3B66] hover:bg-[#FAF0CA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#F4D35E] rounded-full flex items-center justify-center mx-auto text-[#0D3B66]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66]">
                  Tour Requested!
                </h3>
                <p className="text-sm text-[#57534D] leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-[#0D3B66]">{parentName}</span>! Our admissions team will reach out to you within 24 hours to confirm your visit.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="bg-[#0D3B66] text-white font-poppins font-bold px-8 py-3 rounded-full hover:bg-[#F95738] transition-colors text-xs uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="framer-badge bg-[#F95738]/10 text-[#F95738] text-[11px] px-3 py-1 rounded-full font-bold">
                    FREE SCHOOL TOUR
                  </span>
                </div>
                <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66]">
                  Book a Free Preschool Tour
                </h3>
                <p className="text-xs text-[#57534D] mt-1 mb-6">
                  Come visit our sunlit classrooms, meet our caring teachers, and experience our gentle learning environment.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-1">
                      Parent's Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Sarah Laurent"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738] focus:ring-2 focus:ring-[#F95738]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (206) 123-4567"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738] focus:ring-2 focus:ring-[#F95738]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-1">
                        Child's Name
                      </label>
                      <div className="relative">
                        <Baby className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                        <input
                          type="text"
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                          placeholder="e.g. Léa"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738] focus:ring-2 focus:ring-[#F95738]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                        <input
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738] focus:ring-2 focus:ring-[#F95738]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#F95738] hover:bg-[#EE964B] text-white font-poppins font-bold py-4 rounded-xl shadow-pop text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#FAF0CA]" />
                      <span>Confirm Tour Request</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
