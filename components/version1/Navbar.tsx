'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="#" className="text-2xl font-bold">
              Saquib
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-gray-300">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {!isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul
          className="text-gray-300 px-2 pb-3 space-y-1 pt-2 bg-dark/95 border-b border-gray-800"
          onClick={(e: React.SyntheticEvent<HTMLElement>) => {
            const target = e.target as HTMLElement;
            if (target.getAttribute('data-action') === 'close' && isOpen) {
              setIsOpen(false);
            }
          }}
        >
          <li>
            <Link href="#" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
