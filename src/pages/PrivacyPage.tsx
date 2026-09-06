import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <div>
        <span className="font-mono text-xs font-bold text-[#F95738] uppercase tracking-wider bg-[#FAF0CA] px-3 py-1 rounded-full">
          PRIVACY & SAFETY
        </span>
        <h1 className="font-poppins font-black text-4xl text-[#0D3B66] mt-3">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#57534D] mt-1 font-mono">Last updated: May 7th, 2026</p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#FAECDE] shadow-card space-y-6 text-sm text-[#57534D] leading-relaxed">
        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">1. Information We Collect</h3>
        <p>
          We respect your privacy and are committed to protecting the personal data of our students, parents, and visitors. Information collected via forms (Name, Email, Phone, Child Age) is used strictly for tour confirmation and school communication.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">2. Media & Photo Consent</h3>
        <p>
          As a daycare and preschool, we frequently capture moments of learning. However, we strictly ensure that no images or videos of children are used publicly without prior written consent from parents or legal guardians.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">3. CCTV & Security Cameras</h3>
        <p>
          Anth Preschool uses security cameras in entrances, hallways, and outdoor play areas to support the safety of children and staff. Access is strictly limited to authorized administration personnel.
        </p>

        <h3 className="font-poppins font-bold text-lg text-[#0D3B66]">4. Data Protection</h3>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or transfer your personally identifiable information to outside parties.
        </p>
      </div>
    </div>
  );
};
