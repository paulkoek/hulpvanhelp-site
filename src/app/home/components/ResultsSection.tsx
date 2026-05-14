'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const steps = [
  { num: '01', title: 'Jij vertelt waar je tegenaan loopt', desc: 'Ik luister. Geen formulieren, geen gedoe.' },
  { num: '02', title: 'Ik denk praktisch mee', desc: 'Samen kijken wat er speelt en wat het meeste oplevert.' },
  { num: '03', title: 'We bepalen kleine concrete stappen', desc: 'Geen groot plan. Gewoon wat nu werkt.' },
  { num: '04', title: 'Ik help met regelen of uitvoeren', desc: 'Jij hoeft het niet alleen te doen.' },
];

const expectations = [
  {
    title: 'Transparant',
    desc: 'Je weet vooraf waar je aan toe bent.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Kleine stappen',
    desc: 'Geen grote ingewikkelde trajecten.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Praktisch',
    desc: 'Gewoon oplossingen die werken.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Passend bij situatie',
    desc: 'Kosten afgestemd op wat logisch en haalbaar is.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function ResultsSection() {
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
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="werkwijze"
      ref={sectionRef}
      className="py-28 px-6"
      aria-label="Werkwijze en wat je kunt verwachten"
      style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── How it works ── */}
        <div className="mb-24">
          <p className="reveal font-display font-bold text-accent text-sm uppercase tracking-[0.2em] mb-4">
            Werkwijze
          </p>
          <h2
            className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-12"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            Zo werkt het.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative p-7 rounded-3xl border border-border hover:border-accent/20 transition-all duration-400`}
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                {/* Subtle process illustration for first 3 steps */}
                {i === 0 && (
                  <div className="absolute top-5 right-5 w-12 h-12 opacity-40 pointer-events-none" aria-hidden="true">
                    <Image src="/assets/process-intake.svg" alt="" width={48} height={48} />
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute top-5 right-5 w-12 h-12 opacity-40 pointer-events-none" aria-hidden="true">
                    <Image src="/assets/process-insight.svg" alt="" width={48} height={48} />
                  </div>
                )}
                {i === 2 && (
                  <div className="absolute top-5 right-5 w-12 h-12 opacity-35 pointer-events-none" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <style>{`
                        @keyframes checkFade {
                          0%, 100% { opacity: 0.2; }
                          50% { opacity: 1; }
                        }
                        .ck1 { animation: checkFade 3s ease-in-out 0s infinite; }
                        .ck2 { animation: checkFade 3s ease-in-out 0.4s infinite; }
                        .ck3 { animation: checkFade 3s ease-in-out 0.8s infinite; }
                      `}</style>
                      <line x1="18" y1="16" x2="40" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                      <line x1="18" y1="24" x2="36" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                      <line x1="18" y1="32" x2="32" y2="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                      <circle cx="11" cy="16" r="3" fill="#C8F135" className="ck1"/>
                      <circle cx="11" cy="24" r="3" fill="#C8F135" className="ck2"/>
                      <circle cx="11" cy="32" r="3" fill="#C8F135" className="ck3"/>
                    </svg>
                  </div>
                )}

                <span
                  className="font-display font-extrabold text-5xl mb-6 block"
                  style={{ color: 'rgba(200,241,53,0.18)', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {step?.num}
                </span>
                <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">{step?.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{step?.desc}</p>

                {i < steps?.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10"
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-border-light">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── What to expect ── */}
        <div>
          <p className="reveal font-display font-bold text-accent text-sm uppercase tracking-[0.2em] mb-4">
            Wat je kunt verwachten
          </p>
          <h2
            className="reveal reveal-delay-1 font-display font-extrabold text-foreground mb-12"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            Geen verrassingen.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expectations?.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group p-7 rounded-3xl border border-border hover:border-accent/25 transition-all duration-400 flex flex-col gap-4`}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent/10 transition-colors duration-300"
                  style={{ background: 'rgba(200,241,53,0.07)' }}
                  aria-hidden="true"
                >
                  {item?.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base mb-1">{item?.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}