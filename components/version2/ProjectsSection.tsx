'use client';

import { use3DTilt, useReveal } from './hooks';
import { projects, Project } from './data';

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = use3DTilt();
  const { ref: revealRef, visible } = useReveal();
  return (
    <div
      ref={revealRef}
      className={`reveal-item ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        ref={ref}
        className="project-card"
        style={tiltStyle}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="card-shimmer" />
        <div className="project-card-inner">
          <div className="project-number">0{index + 1} / PROJECT</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="section">
      <div
        ref={ref}
        className={`section-header reveal-item ${visible ? 'visible' : ''}`}
      >
        <div className="section-label">03 / WORK</div>
        <h2 className="section-title">Personal Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
