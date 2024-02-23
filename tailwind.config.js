/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: ({ colors }) => ({
        ...colors,
        primary: '#000103',
        secondary: 'rgba(0, 0, 0, 0.3)',
      }),
    },
  },
  plugins: [],
};
