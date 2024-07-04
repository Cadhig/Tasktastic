/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "tasktastic-base": "#8b5cf6",
        "tasktastic-hover": "#8250F4",
        "tasktastic-active": "#7A45F4",
        "tasktastic-link": "#3b82f6"
      }
    },
  },
  plugins: [],
}

