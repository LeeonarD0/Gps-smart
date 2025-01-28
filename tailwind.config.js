/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        interactive_color: 'var(--Interactive-color)',
        border: 'var(--border-color)',
        solid_color: 'var(--solid-color)',
        text_color: 'var(--text-color)'
      }
    },
  },
  plugins: [],
}

