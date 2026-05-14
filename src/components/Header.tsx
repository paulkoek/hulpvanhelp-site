'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-bg/90 backdrop-blur-xl border-b border-border' :'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="font-display font-bold text-bg text-base leading-none">H</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              HELP
            </span>
            <span className="text-[10px] font-sans tracking-widest text-accent uppercase opacity-80">
              Automatisering &amp; Realisatie
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent"
        >
          Gratis quick scan
        </a>
      </div>
    </header>
  );
}