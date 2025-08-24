import React from 'react';
import { PageLayout } from './components/layout';
import {
  HeroSection,
  MissionSection,
  ProblemSection,
  SolutionSection,
  ServicesSection,
  MetricsSection,
  WhyChooseUsSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from './components/sections';

function App() {
  return (
    <PageLayout>
      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <MetricsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </PageLayout>
  );
}

export default App;