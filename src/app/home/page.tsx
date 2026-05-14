import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import AboutCTASection from './components/AboutCTASection';

export default function HomePage() {
  return (
    <main className="bg-bg text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <AboutCTASection />
      <Footer />
    </main>
  );
}