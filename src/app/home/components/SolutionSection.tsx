'use client';

import React, { useEffect, useRef } from 'react';

const serviceBlocks = [
  {
    tag: 'HELP Automatisering',
    subtitle: 'Minder handmatig werk. Meer overzicht.',
    text: 'Ik help kleine ondernemers slimmer werken met praktische automatisering en eenvoudige workflows.',
    bullets: [
      'Minder dubbel werk',
      'Slimmere processen',
      'Meer overzicht',
      'Kleine praktische stappen',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    tag: 'HELP Klussen & Realisatie',
    subtitle: 'Een klus, verbouwing of project? Ik help het regelen én uitvoeren.',
    highlight: 'Afspraken nakomen. Net werk leveren. Zo moeilijk hoeft het niet te zijn.',
    text: 'Van kleine klussen tot complete projecten. Ik help met regelen, coördineren en uitvoeren. Praktisch, duidelijk en met aandacht voor kwaliteit.',
    bullets: [
      'Klussen en verbouwingen',
      'Projectcoördinatie',
      'Praktische hulp',
      'Dingen uit handen nemen',
      'Van idee naar uitvoering',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function SolutionSection() {
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
      id="diensten"
      ref={sectionRef}
      className="py-28 px-6 relative"
      aria-label="Diensten"
    >
      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(200,241,53,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <p className="reveal font-display font-bold text-accent text-sm uppercase tracking-[0.2em] mb-4 text-center">
          Wat ik doe
        </p>
        <h2
          className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-12 text-center"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
        >
          Twee richtingen. Één aanpak.
        </h2>

        {/* Two equal service blocks */}
        <div className="grid lg:grid-cols-2 gap-6">
          {serviceBlocks?.map((block, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group p-8 rounded-3xl border border-border hover:border-accent/25 transition-all duration-400 flex flex-col gap-6`}
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Icon + Tag */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent/10 transition-colors duration-300"
                  style={{ background: 'rgba(200,241,53,0.07)' }}
                  aria-hidden="true"
                >
                  {block?.icon}
                </div>
                <h3 className="font-display font-extrabold text-foreground text-xl tracking-tight">
                  {block?.tag}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="font-display font-semibold text-accent text-base leading-snug -mt-2">
                {block?.subtitle}
              </p>

              {/* Highlighted statement */}
              {block?.highlight && (
                <p
                  className="font-display font-bold text-foreground text-base leading-snug px-4 py-3 rounded-xl border-l-4 border-accent -mt-2"
                  style={{ background: 'rgba(200,241,53,0.07)', borderLeftColor: '#C8F135' }}
                >
                  {block?.highlight}
                </p>
              )}

              {/* Body text */}
              <p className="font-body text-muted-light text-base leading-relaxed">
                {block?.text}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {block?.bullets?.map((bullet, j) => (
                  <li key={j} className="flex items-center gap-3 font-body text-muted text-sm">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(200,241,53,0.12)' }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}