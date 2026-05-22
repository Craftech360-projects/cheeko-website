import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cheeko: {
          yellow: '#FFC400',
          gold: '#F8A900',
          orange: '#FF7900',
          pink: '#F95C9B',
          cream: '#FFF6E7',
          ink: '#1D1713',
          brown: '#6B3A17'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Baloo 2', 'ui-rounded', 'system-ui'],
        body: ['var(--font-body)', 'Nunito', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 18px 45px rgba(70, 41, 12, 0.18)',
        button: '0 10px 0 rgba(177, 57, 96, 0.24), 0 16px 28px rgba(249, 92, 155, 0.24)'
      },
      borderRadius: {
        blob: '2rem'
      }
    }
  },
  plugins: []
};

export default config;
