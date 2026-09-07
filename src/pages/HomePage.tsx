import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ParentWorriesSection } from '../components/home/ParentWorriesSection';
import { IntegrationRoadmap } from '../components/home/IntegrationRoadmap';
import { HavenEnvironment } from '../components/home/HavenEnvironment';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { NewsPreview } from '../components/home/NewsPreview';
import { JourneyCTA } from '../components/home/JourneyCTA';

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
      <NewsPreview />
      <JourneyCTA onOpenTourModal={onOpenTourModal} />
    </div>
  );
};
