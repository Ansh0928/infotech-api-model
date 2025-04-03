
import React from 'react';
import Header from '@/components/Header';
import OnboardingSection from '@/components/OnboardingSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <OnboardingSection />
        <ProductShowcaseSection />
        <StatsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
