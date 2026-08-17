'use client';

interface NavbarProps {
  scrolled: boolean;
  progress: number;
  onNavigate: (id: string) => void;
}

export default function Navbar({ scrolled, progress, onNavigate }: NavbarProps) {
  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
        <div
          className="nav-logo"
          role="button"
          tabIndex={0}
          aria-label="Mohammad Saquib - Scroll to Top"
          onClick={() => onNavigate('hero')}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('hero')}
        >
          MS
        </div>
        <div className="nav-links">
          {['skills', 'projects', 'contact'].map((s) => (
            <button
              key={s}
              className="nav-link"
              aria-label={`Scroll to ${s} section`}
              onClick={() => onNavigate(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <a
          href="https://github.com/saquibshaikh14"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
          aria-label="Visit Mohammad Saquib's GitHub Profile"
        >
          GitHub
        </a>
      </nav>
    </>
  );
}
