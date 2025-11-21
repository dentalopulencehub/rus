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
        // "Logo Match" font for headings - matches RUS logo condensed style
        sans: ['"Fira Sans Condensed"', '"Barlow Condensed"', 'sans-serif'],
        // Wider font for body text readability
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
