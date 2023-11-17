const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bkg: {
          default: 'hsl(var(--color-bkg-default) / <alpha-value>)',
          muted: 'hsl(var(--color-bkg-muted) / <alpha-value>)',
        },
        accent: {
          1: 'hsl(var(--color-accent-1) / <alpha-value>)',
          2: 'hsl(var(--color-accent-2) / <alpha-value>)',
          3: 'hsl(var(--color-accent-3) / <alpha-value>)',
        },
        content: {
          default: 'hsl(var(--color-content-default) / <alpha-value>)',
          muted: 'hsl(var(--color-content-muted) / <alpha-value>)',
          link: 'hsl(var(--color-content-link) / <alpha-value>)',
          //colorful: 'text-colorful',
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
