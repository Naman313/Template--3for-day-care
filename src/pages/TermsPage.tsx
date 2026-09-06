import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <div>
        <span className="font-mono text-xs font-bold text-[#F95738] uppercase tracking-wider bg-[#FAF0CA] px-3 py-1 rounded-full">
          LEGAL TERMS
        </span>
        <h1 className="font-poppins font-black text-4xl text-[#0D3B66] mt-3">
          Terms of Service
        </h1>
        <p className="text-xs text-[#57534D] mt-1 font-mono">Last updated: May 7th, 2026</p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#FAECDE] shadow-card space-y-6 text-sm text-[#57534D] leading-relaxed">
        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">1. General Use of the Website</h3>
        <p>
          Please read these Terms of Service carefully before using the Anth Preschool website. By accessing or using our website, you agree to be bound by these terms. The content provided on this website is for general information and enrollment inquiry purposes only.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">2. Admissions and Enrollment</h3>
        <p>
          Filling out an online inquiry or tour booking form does not guarantee admission. All enrollments are subject to availability, a direct consultation, and completion of official registration documents at the school.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">3. Tuition, Fees & Payment</h3>
        <p>
          Tuition rates, enrollment fees, deposits, and payment schedules are communicated to families prior to official enrollment. Parents or guardians are responsible for paying fees according to the agreed schedule.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">4. Illness & Health Policy</h3>
        <p>
          Parents and guardians should not bring a child to school when showing symptoms of contagious illness. If a child becomes ill while attending Anth Preschool, the school will contact the parent or emergency contact for prompt pickup.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">5. Contact Information</h3>
        <p>
          Anth Preschool HQ <br />
          000 Cedar Grove Avenue, Suite 120, Seattle, WA 98101, USA <br />
          Phone: +1 206 123 4124 | Email: anth.preschool@example.com
        </p>
      </div>
    </div>
  );
};
