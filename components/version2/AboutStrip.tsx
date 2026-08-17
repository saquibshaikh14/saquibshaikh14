"use client";

import { useReveal } from "./hooks";
import { aboutItems } from "./data";

export default function AboutStrip() {
  const { ref, visible } = useReveal();

  return (
    <div className="about-strip">
      <div
        ref={ref}
        className={`about-inner reveal-item ${visible ? "visible" : ""}`}
      >
        <div>
          <h2 className="about-heading">
            Engineering for <span>impact</span>,<br />
            not just output.
          </h2>
          <p className="about-text">
            With over 4.8 years of experience as a Senior Software Developer, I
            build systems that are fast, reliable, and built to last. My work
            spans frontend, backend, cloud infrastructure, and AI agent
            solutions that automate what used to require human intervention.
            B.Tech in Computer Science &amp; Engineering.
          </p>
        </div>
        <div className="about-items">
          {aboutItems.map(({ icon, label, sub }) => (
            <div key={label} className="about-item">
              <div className="about-item-icon">{icon}</div>
              <div className="about-item-text">
                <strong>{label}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
