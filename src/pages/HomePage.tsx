import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ParentWorriesSection } from '../components/home/ParentWorriesSection';
import { EmpathyKidsGallery } from '../components/home/EmpathyKidsGallery';
import { IntegrationRoadmap } from '../components/home/IntegrationRoadmap';
import { HavenEnvironment } from '../components/home/HavenEnvironment';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { NewsPreview } from '../components/home/NewsPreview';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenTourModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenTourModal }) => {
  return (
    <div className="space-y-0">
      <HeroSection onOpenTourModal={onOpenTourModal} />
      <ParentWorriesSection />
      <IntegrationRoadmap />
      <HavenEnvironment />
      <TestimonialSlider />

      {/* FAQ Teaser Section on Home Page */}
      <section className="py-20 bg-[#FAF3E6]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="framer-badge bg-[#F95738]/10 text-[#F95738] text-xs px-4 py-1.5 rounded-full font-bold">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#0D3B66] tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion showFilter={false} />
          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 bg-[#0D3B66] text-white font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#F95738] transition-colors"
            >
              <span>View All FAQs</span>
            </Link>
          </div>
        </div>
      </section>

      <NewsPreview />
    </div>
  );
};
