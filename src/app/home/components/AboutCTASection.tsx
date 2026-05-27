'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-6 relative overflow-hidden"
      aria-label="Over mij en contact"
    >
      {/* Background atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,241,53,0.07) 0%, transparent 65%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* About */}
          <div>
            <p className="reveal font-display font-bold text-accent text-sm uppercase tracking-[0.2em] mb-4">
              Over mij
            </p>
            <h2
              className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-6"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}
            >
              Praktisch. Direct. Zonder gedoe.
            </h2>
            <p className="reveal reveal-delay-2 font-body text-muted-light text-lg leading-relaxed">
              Ik help ondernemers die vastlopen in hun eigen groei. Niet met theorie, maar met praktische oplossingen die direct werken.
            </p>
          </div>

          {/* Quick trust signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '20 min', label: 'intake gesprek' },
              { value: '0', label: 'verplichtingen' },
              { value: '100%', label: 'praktisch' },
            ]?.map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-6 rounded-2xl border border-border text-center`}
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <p
                  className="font-display font-extrabold text-accent mb-1"
                  style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}
                >
                  {stat?.value}
                </p>
                <p className="font-body text-muted text-sm">{stat?.label}</p>
              </div>
            ))}
          </div>
        </div>

{/* Final CTA block */}
<div
  className="reveal relative rounded-4xl border border-border-light overflow-hidden p-10 md:p-16 text-center"
  style={{
    background:
      'linear-gradient(135deg, rgba(200,241,53,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(200,241,53,0.04) 100%)',
  }}
>
  <div
    className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
    aria-hidden="true"
    style={{
      background: 'radial-gradient(circle at top right, rgba(200,241,53,0.1) 0%, transparent 60%)',
    }}
  />

  <h2
    className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-4 relative z-10"
    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.06', letterSpacing: '-0.03em' }}
  >
    Vertel waar je tegenaan loopt.
  </h2>

  <p className="reveal reveal-delay-2 font-body text-muted-light text-lg mb-10 max-w-md mx-auto relative z-10">
    Of het nu gaat om overzicht, automatisering, een klus, beheer of iets dat blijft liggen — we kijken samen wat handig is.
  </p>

  <div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
    <a
      href="https://tally.so/r/44jeqX"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-accent inline-flex items-center justify-center gap-2 bg-accent text-bg font-display font-bold px-8 py-4 rounded-full text-base hover:bg-accent-hover transition-all duration-300"
    >
      Start quick scan
    </a>

    <a
      href="https://tally.so/r/eqYbex"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-white text-black font-display font-bold px-8 py-4 rounded-full text-base hover:bg-neutral-200 transition-all duration-300"
    >
      Vertel wat er speelt
    </a>
  </div>

  <p className="reveal reveal-delay-4 mt-6 font-body text-muted text-sm relative z-10">
    Laagdrempelig kennismaken. Gewoon kijken wat helpt.
  </p>
</div>
</div>
      </section>
  );
}
