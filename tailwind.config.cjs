const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bkg: {
          default: 'var(--color-bkg-default)',
          muted: 'var(--color-bkg-muted)',
        },
        accent: {
          1: 'var(--color-accent-1)',
          2: 'var(--color-accent-2)',
          3: 'var(--color-accent-3)',
        },
        content: {
          default: 'var(--color-content-default)',
          muted: 'var(--color-content-muted)',
          colorful: 'text-colorful',
          link: 'var(--color-content-link)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
