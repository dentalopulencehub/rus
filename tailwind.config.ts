import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary font - Frutiger 57 Condensed (matches RUS logo)
        sans: ['"Frutiger 57Cn"', '"Fira Sans Condensed"', '"Barlow Condensed"', 'sans-serif'],
        // Wider font for body text readability
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'md': '12px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
      },
      backdropSaturate: {
        '150': '1.5',
        '180': '1.8',
      },
      colors: {
        'nav-glass': 'hsl(var(--nav-glass))',
        'nav-border': 'hsl(var(--nav-border))',
      },
    },
  },
  plugins: [],
};

export default config;
