/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gold: '#BDA67A',
      white: '#FFF',
      primary: '#F3C8FE',
      secondary: '#63516B',
      tertiary: '#FDF1EF',
      blackSecondary: '#413D3C',
    },
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.primary') },
        },
      }),
      // that is animation class
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
