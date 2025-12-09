/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12a86b',
        secondary: '#02208b',
        section: '#e4edf3'
      }
    }
  },
  plugins: []
};
