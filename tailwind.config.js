/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Enable dark mode using class
  theme: {
    extend: {
      colors: {
        lightBackground: '#FAFAFA',
        lightPrimaryAccent: '#007AFF',
        lightSecondaryAccent: '#FF6B6B',
        lightTextPrimary: '#333333',
        lightTextSecondary: '#555555',
        hoverHighlight: '#FFD500',

        darkBackground: '#000000',
        darkPrimaryAccent: '#00E5FF',
        darkSecondaryAccent: '#D81B60',
        darkTextPrimary: '#E0E0E0',
        darkTextSecondary: '#A1A1A1',
      },
    },
  },
  plugins: [],
};