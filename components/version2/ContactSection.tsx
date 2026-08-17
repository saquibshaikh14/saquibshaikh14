'use client';

import { useReveal } from './hooks';
import { contactLinks } from './data';

export default function ContactSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="section contact-section">
      <div
        ref={ref}
        className={`section-header reveal-item ${visible ? 'visible' : ''}`}
      >
        <div className="section-label">04 / CONTACT</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
      </div>
      <p className="contact-tagline">
        Open to senior engineering roles, consulting, and interesting
        collaborations. Let&apos;s build something remarkable together.
      </p>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{link.icon}</span>
            <div>
              <div className="contact-platform">{link.platform}</div>
              <div className="contact-handle">{link.handle}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
