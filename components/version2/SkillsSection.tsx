'use client';

import { useReveal } from './hooks';
import { skills } from './data';

function SkillGroup({
  category,
  items,
  delay,
}: {
  category: string;
  items: string[];
  delay: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-category reveal-item ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-cat-label">{category}</div>
      <div className="skill-tags">
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="section">
      <div
        ref={ref}
        className={`section-header reveal-item ${visible ? 'visible' : ''}`}
      >
        <div className="section-label">02 / EXPERTISE</div>
        <h2 className="section-title">Tech Stack</h2>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([cat, items], i) => (
          <SkillGroup
            key={cat}
            category={cat}
            items={items}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
}
