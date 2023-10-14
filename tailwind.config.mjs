/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      'h1-sm': [
        '28px',
        {
          lineHeight: '32px',
          fontWeight: 800,
        },
      ],
      'h2-sm': [
        '24px',
        {
          lineHeight: '30.67px',
          letterSpacing: '1%',
          fontWeight: 700,
        },
      ],
      'h3-sm': [
        '18px',
        {
          lineHeight: '23px',
          letterSpacing: '1%',
          fontWeight: 700,
        },
      ],
      'h4-sm': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '1%',
          fontWeight: 700,
        },
      ],
      button: [
        '18px',
        {
          lineHeight: '18px',
          letterSpacing: '3%',
          fontWeight: 700,
        },
      ],
      sm: [
        '10px',
        {
          lineHeight: '10px',
          fontWeight: 800,
        },
      ],
      base: [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: 600,
        },
      ],
      title: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: 700,
        },
      ],
      large: [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: 700,
        },
      ],
      'link-sm': [
        '12px',
        {
          lineHeight: '14px',
          fontWeight: 700,
        },
      ],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        black: '#000000',
        nero: '#1A1A1A',
        orange: '#FF6633',
        'white-smoke': '#F5F5F5',
        gray: '#606264',
      },
      fontFamily: {
        mont: ['"Mont"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
