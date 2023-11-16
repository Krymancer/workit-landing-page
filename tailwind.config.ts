import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'ghost-white': '#FCF8FF',
        'davys-grey': '#584D62',
        'eucaplyptus': '#44FFA1',
        'dark-purple': '#24053E',
      },
      fontSize: {
        'heading-l': ['80px', {
          lineHeight: '80px',
          fontWeight: '600',
        }],
        'heading-m': ['56px', {
          lineHeight: '64px',
          fontWeight: '600',
        }],
        'heading-s': ['32px', {
          lineHeight: '40px',
          fontWeight: '600',
        }],
        'body': ['18px', {
          lineHeight: '32px',
          fontWeight: '400',
        }]
      },
      fontFamily: {
        'manrope': 'Manrope',
        'fraunces': 'Fraunces',
      },
      backgroundImage: {
        'hero-lg': 'url("assets/images/hero-bg-lg.svg")',
        'hero-md': 'url("assets/images/hero-bg-md.svg")',
        'hero-sm': 'url("assets/images/hero-bg-sm.svg")',
        'mid-lg': 'url("assets/images/mid-bg-lg.svg")',
        'mid-md': 'url("assets/images/mid-bg-md.svg")',
        'mid-sm': 'url("assets/images/mid-bg-sm.svg")',
        'items': 'url("assets/images/bg-pattern-mid.svg")'
      },
      backgroundSize: {
        'streech': '200% 100%'
      }
    },
  },
  plugins: [],
};

export default config;
