/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        bg: 'var(--color-background)',
        fg: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontSize: {
        xs: 'clamp(0.8rem, 0.7rem + 0.25vw, 0.875rem)',
        sm: 'clamp(0.95rem, 0.8rem + 0.35vw, 1rem)',
        base: 'clamp(1.1rem, 0.95rem + 0.25vw, 1.125rem)',
        lg: 'clamp(1.25rem, 1rem + 0.75vw, 1.5rem)',
        xl: 'clamp(1.65rem, 1.2rem + 1.25vw, 2.25rem)',
        '2xl': 'clamp(2.25rem, 1.2rem + 2.5vw, 3.5rem)',
        hero: 'clamp(2.75rem, 0.5rem + 6vw, 5rem)',
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        full: '9999px',
      },
      transitionDuration: {
        DEFAULT: '160ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
