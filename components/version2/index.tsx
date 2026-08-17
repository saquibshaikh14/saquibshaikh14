'use client';

import { useState, useEffect, useRef } from 'react';
import SparkleBackground from './SparkleBackground';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutStrip from './AboutStrip';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './version2.css';

export default function PortfolioV2() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      ];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* ── Fixed Global Ambient Sparkling Particle Field ── */}
      <SparkleBackground mouse={mouse} />

      {/* ── Custom Cursor Dot & Ambient Background Orbs ── */}
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ── Sticky Navbar ── */}
      <Navbar
        scrolled={scrolled}
        progress={progress}
        onNavigate={scrollTo}
      />

      {/* ── Main Portfolio Sections ── */}
      <main>
        <HeroSection mouse={mouse} onNavigate={scrollTo} />
        <AboutStrip />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
