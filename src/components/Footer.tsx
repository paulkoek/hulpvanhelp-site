import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-display font-bold text-base text-foreground">
            Chaos<span className="text-accent">Simple</span>
          </span>
        </div>
        <p className="text-muted text-sm font-body text-center">
          © 2026 ChaosSimple ·{' '}
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          {' · '}
          <a href="#" className="hover:text-foreground transition-colors">Voorwaarden</a>
        </p>
      </div>
    </footer>
  );
}