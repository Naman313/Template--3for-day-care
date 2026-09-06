import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, User, Baby, Sparkles, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setSubmitted(true);
  };

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
          <Sparkles className="w-4 h-4 text-[#F95738]" />
          <span>VISIT OUR CAMPUS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-black text-4xl sm:text-6xl text-[#0D3B66] tracking-tight leading-tight"
        >
          Ready to Start the Journey Together?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#57534D] max-w-2xl mx-auto leading-relaxed"
        >
          Come visit our sunlit classrooms, meet our caring teachers, and discover the warmth that makes Anth Preschool feel like a second home.
        </motion.p>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-[#FAECDE]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-[#F4D35E] rounded-full flex items-center justify-center mx-auto text-[#0D3B66]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-poppins font-extrabold text-3xl text-[#0D3B66]">
                  Tour Request Received!
                </h3>
                <p className="text-base text-[#57534D] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#0D3B66]">{parentName}</span>! Our admissions coordinator will call you at <span className="font-mono text-[#F95738]">{phone}</span> within 24 hours to confirm your school tour.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setParentName('');
                      setPhone('');
                      setChildName('');
                      setVisitDate('');
                      setNotes('');
                    }}
                    className="bg-[#0D3B66] text-white font-poppins font-bold px-8 py-3.5 rounded-full hover:bg-[#F95738] transition-colors text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-poppins font-extrabold text-2xl text-[#0D3B66] mb-1">
                    Book a Free Tour
                  </h3>
                  <p className="text-xs text-[#57534D]">
                    Our admissions team will call you within 24 hours to confirm your visit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">
                      Parent’s Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Sarah Laurent"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FFFCF0] border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 206 123 4124"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FFFCF0] border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">
                      Child’s Name
                    </label>
                    <div className="relative">
                      <Baby className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Léa"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FFFCF0] border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">
                      Preferred Visit Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#EE964B]" />
                      <input
                        type="date"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FFFCF0] border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">
                    Additional Notes or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your child's age group or any specific questions..."
                    className="w-full p-4 rounded-xl bg-[#FFFCF0] border border-[#FAECDE] text-sm text-[#1C1917] focus:outline-none focus:border-[#F95738]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F95738] hover:bg-[#EE964B] text-white font-poppins font-bold py-4 rounded-2xl shadow-pop text-sm uppercase tracking-wider transition-all duration-200"
                >
                  Confirm Tour Booking
                </button>
              </form>
            )}
          </div>

          {/* Right Contact Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D3B66] text-white rounded-3xl p-8 space-y-6 shadow-floating">
              <h3 className="font-poppins font-extrabold text-xl text-[#F4D35E]">
                How to find Anth Preschool
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F95738]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-[#FAF0CA]">Preschool Location</h5>
                    <p className="text-sm text-white/90">000 Cedar Grove Avenue, Suite 120, Seattle, WA 98101, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F95738]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-[#FAF0CA]">Hotline</h5>
                    <p className="text-sm font-mono text-white/90">+1 206 123 4124</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F95738]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-[#FAF0CA]">Email</h5>
                    <p className="text-sm text-white/90">anth.preschool@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F95738]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-[#FAF0CA]">Working Time</h5>
                    <p className="text-sm font-mono text-white/90">Mon - Fri (7:00 AM - 5:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="bg-white rounded-3xl p-6 border border-[#FAECDE] shadow-card text-center space-y-3">
              <div className="rounded-2xl overflow-hidden h-40 bg-[#FAF0CA] flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#F95738] text-white px-4 py-2 rounded-full font-mono text-xs font-bold shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Seattle Campus</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
