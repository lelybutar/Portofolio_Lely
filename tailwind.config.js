/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        base: {
          line: 'rgb(var(--line) / <alpha-value>)',
        },
        brand: {
          DEFAULT: '#1D6FE8',
          dark: '#1553B8',
          soft: 'rgb(var(--brand-soft) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
      },
    },
    fontFamily: {
      display: ['"Plus Jakarta Sans"', 'sans-serif'],
      body: ['"Plus Jakarta Sans"', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'monospace'],
    },
  },
  plugins: [],
}