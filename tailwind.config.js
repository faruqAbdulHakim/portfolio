/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#617AFA',
        'very-dark-blue': '#1C1C21',
        'dark-gray': '#3D404A',
        'light-gray': '#EDF0F2',
      },
    },
  },
  plugins: [],
};
