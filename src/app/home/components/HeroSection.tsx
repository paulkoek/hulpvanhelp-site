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
          Dingen geregeld.
          <br />
          <span className="text-accent">Zonder gedoe.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-enter delay-300 font-body text-muted-light max-w-xl mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: '1.65' }}
        >
          Voor ondernemers en particulieren die werk, projecten of terugkerende zaken uit handen willen geven.
        </p>

        {/* CTAs */}
<div className="animate-enter delay-400 grid gap-4 md:grid-cols-2 w-full max-w-2xl">

  {/* Automatisering */}
  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
    <h3 className="font-display text-xl text-white mb-2">
      Minder handmatig werk
    </h3>

    <p className="font-body text-sm text-muted-light mb-5">
      Meer overzicht en minder losse eindjes.
    </p>

    <a
      href="HIER-JOUW-TALLY-LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-accent inline-flex items-center justify-center gap-2 bg-accent text-bg font-display font-bold px-6 py-3 rounded-full text-sm hover:bg-accent-hover transition-all duration-300"
    >
      Start quick scan
    </a>
  </div>

  {/* Realisatie & Beheer */}
  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
    <h3 className="font-display text-xl text-white mb-2">
      Klussen, projecten & beheer
    </h3>

    <p className="font-body text-sm text-muted-light mb-5">
      Van uitvoering tot opvolging en onderhoud.
    </p>

    <a
      href="HIER-JOUW-TALLY-LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-white text-black font-display font-bold px-6 py-3 rounded-full text-sm hover:bg-neutral-200 transition-all duration-300"
    >
      Vertel wat er speelt
    </a>
  </div>

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
