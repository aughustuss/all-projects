/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        title: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#060e33',
        secondary: '#152372',
        // tertiary: '#5281C6',
        tertiary: '#1E4976',
        quartiary: '#e6e6ff',
        textColor: '#f1f1f1',
        navColor: '#E2E1E4',
        offwhite: '#f1f1f1',
      }
    },
  },
  plugins: [],
}

