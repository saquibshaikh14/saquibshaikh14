"use client";

import HeroWaveBackground from "./HeroWaveBackground";
import CodeBlock from "./CodeBlock";

interface HeroSectionProps {
  mouse: React.MutableRefObject<[number, number]>;
  onNavigate: (id: string) => void;
}

export default function HeroSection({ mouse, onNavigate }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section-wrap">
      {/* 3D Wave Grid full-width background */}
      <div className="hero-canvas-wrap">
        <HeroWaveBackground mouse={mouse} />
      </div>

      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-badge">AVAILABLE FOR OPPORTUNITIES</div>

          <h1 className="hero-name">
            <span className="name-line">Mohammad</span>
            <span className="name-line gradient">Saquib</span>
          </h1>

          <div className="hero-role">
            <span className="role-bracket">&lt;</span>
            {" Senior Software Developer "}
            <span className="role-bracket">/&gt;</span>
          </div>

          <p className="hero-bio">
            Building reliable, high-performance distributed systems.
            Specializing in serverless APIs, real-time agent workflows, and
            AI-powered solutions.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => onNavigate("projects")}
            >
              View Projects
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate("contact")}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">4.8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">Senior</span>
              <span className="stat-label">Software Developer</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">B.Tech</span>
              <span className="stat-label">CS &amp; Engineering</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal */}
        <div className="hero-visual">
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}
