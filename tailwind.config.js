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
        'color-green': '#324A34',
        'color-yellow': '#FECE16',
        'color-orange': '#FD6035',
        'color-black': '#040301',
        'color-black-bg': '#1F1E1A',
        'color-body': '#F5EFE1',
      }),
    },
  },
  plugins: [],
};
