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
        'hero': 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc1IiBoZWlnaHQ9IjQ4MiIgdmlld0JveD0iMCAwIDM3NSA0ODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDM3NS4zMDNWNDY0QzM3NS4zMDMgNDY0IDI4Mi4yNDkgNDgxLjcwNyAxODguMTczIDQ4MS43MDdDOTQuMDk2NiA0ODEuNzA3IDAgNDY0IDAgNDY0VjBaIiBmaWxsPSIjMjQwNTNFIi8+Cjwvc3ZnPg==")',
        'items': 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc1IiBoZWlnaHQ9IjEwNzEiIHZpZXdCb3g9IjAgMCAzNzUgMTA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMzc1LjMwM1Y0NjRDMzc1LjMwMyA0NjQgMjgyLjI0OSA0ODEuNzA3IDE4OC4xNzMgNDgxLjcwN0M5NC4wOTY2IDQ4MS43MDcgMCA0NjQgMCA0NjRWMFoiIGZpbGw9IiNGQ0Y4RkYiLz4KPC9zdmc+IA==")'
      },
      backgroundSize: {
        'test': '100% 100%'
      }
    },
  },
  plugins: [],
};

export default config;
