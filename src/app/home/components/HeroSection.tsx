import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero sectie"
    >
      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: animated gradient mesh background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(200,241,53,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(200,241,53,0.04) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 70%)',
          }}
        />
        {/* Layer 2: floating blobs */}
        <div
          className="hero-blob absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #C8F135 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="hero-blob-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Layer 3: subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Badge pill */}
        <div className="animate-enter delay-100 mb-8 inline-block">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light text-muted-light text-sm font-body font-medium"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            Voor ondernemers en particulieren
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="animate-enter delay-200 font-display font-extrabold text-foreground mb-6"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            lineHeight: '1.02',
            letterSpacing: '-0.03em',
          }}
        >
          Dingen slimmer
          <br />
          <span className="text-accent">geregeld krijgen.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-enter delay-300 font-body text-muted-light max-w-xl mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: '1.65' }}
        >
          Voor ondernemers en particulieren die tijd verliezen aan gedoe, handmatig werk of projecten die blijven liggen.
        </p>

        {/* CTAs */}
        <div className="animate-enter delay-400 flex flex-col items-start gap-4">
          <a
            href="#contact"
            className="btn-accent inline-flex items-center justify-center gap-2 bg-accent text-bg font-display font-bold px-8 py-4 rounded-full text-base hover:bg-accent-hover transition-all duration-300"
          >
            Plan een gratis gesprek
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href="https://calendly.com/helpautomatisering/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-muted-light text-sm hover:text-accent transition-colors duration-200"
          >
            Of vul direct de quick scan in →
          </a>
        </div>

        {/* Bottom trust signal */}
        <p className="animate-enter delay-500 mt-8 text-muted text-sm font-body">
          Geen verplichtingen. Gewoon samen kijken wat handig is.
        </p>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
      />
    </section>
  );
}