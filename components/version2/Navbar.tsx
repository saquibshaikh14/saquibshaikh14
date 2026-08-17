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
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => onNavigate('hero')}>
          MS
        </div>
        <div className="nav-links">
          {['skills', 'projects', 'contact'].map((s) => (
            <button key={s} className="nav-link" onClick={() => onNavigate(s)}>
              {s}
            </button>
          ))}
        </div>
        <a
          href="https://github.com/saquibshaikh14"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          GitHub
        </a>
      </nav>
    </>
  );
}
