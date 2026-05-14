import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'ChaosSimple — Structuur voor ondernemers die vastlopen',
  description: 'ChaosSimple helpt kleine ondernemers overzicht te krijgen, tijd te besparen en hun bedrijf efficiënt te laten draaien. Praktisch, direct en zonder gedoe.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}
</body>
    </html>
  );
}