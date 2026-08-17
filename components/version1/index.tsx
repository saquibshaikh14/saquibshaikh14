'use client';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import AOSInit from './AOSInit';
import './version1.css';

export default function PortfolioV1() {
  return (
    <div className="bg-dark text-gray-100 min-h-screen">
      <AOSInit />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
