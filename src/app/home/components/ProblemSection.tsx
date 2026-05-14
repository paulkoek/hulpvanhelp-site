'use client';

import React, { useEffect, useRef } from 'react';

const problems = [
  'Dingen blijven liggen',
  'Je zoekt constant informatie',
  'Taken staan overal',
  'Veel handmatig werk',
  'Geen duidelijk overzicht',
  'Projecten kosten onnodig energie',
];

export default function ProblemSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="probleem"
      ref={sectionRef}
      className="py-28 px-6 relative"
      aria-label="Herkenning"
    >
      {/* Subtle section divider accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border-light to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: intro */}
          <div>
            <p className="reveal font-display font-bold text-accent text-sm uppercase tracking-[0.2em] mb-4">
              Herkenbaar?
            </p>
            <h2
              className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
            >
              Je werkt hard.
              <br />
              <span className="text-muted-light">Maar het kost te veel tijd.</span>
            </h2>

            {/* Highlighted quote */}
            <div
              className="reveal reveal-delay-3 mt-10 p-6 rounded-2xl border border-accent/30 relative"
              style={{ background: 'rgba(200,241,53,0.05)' }}
            >
              <p className="font-display font-bold text-foreground text-xl leading-snug">
                "Je probleem is niet dat je te weinig tijd hebt.{' '}
                <span className="text-accent">Je systeem klopt niet."</span>
              </p>
            </div>
          </div>

          {/* Right: bullet list */}
          <div className="space-y-3">
            {problems?.map((problem, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group flex items-center gap-4 p-5 rounded-2xl border border-border transition-all duration-300 hover:border-border-light`}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-border-light group-hover:border-accent/30 transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors duration-300">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-body text-muted-light text-base leading-snug group-hover:text-foreground transition-colors duration-300">
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}