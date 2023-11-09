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
      }
    },
  },
  plugins: [],
};

export default config;
