/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        'dark-brown': '#975b00',
        'sunset-light': '#F9E6AE',
        'sunset-yellow': '#fed989',
        'desert': '#FFFEF2',
        'desert-dark': '#f9e6ae',
        'desert-medium': '#FFFDF8',
        'desert-light': '#F5EFE6',
        'green-light': '#93FFD2',
        'green-dark': '#103e2b',
      },
      fontFamily: {
        groteskMedium: ['Grotesk-Medium', 'arial', 'sans-serif'],
        interBold: ['Inter-Bold', 'arial', 'sans-serif'],
        interRegular: ['Inter-Regular', 'arial', 'sans-serif'],
        interMedium: ['Intern-Medium', 'arial', 'sans-serif'],
        interSemibold: ['Inter-Semibold', 'arial', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['3.5rem', '4.2rem'],
      },
    },
  },
  plugins: [],
}
