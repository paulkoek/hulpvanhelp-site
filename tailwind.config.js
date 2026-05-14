/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#161616',
        border: '#1E1E1E',
        'border-light': '#2A2A2A',
        foreground: '#FAFAFA',
        muted: '#888888',
        'muted-light': '#AAAAAA',
        accent: '#C8F135',
        'accent-dim': 'rgba(200, 241, 53, 0.12)',
        'accent-hover': '#D4F550',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.2rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'blob-float': 'blobFloat 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};