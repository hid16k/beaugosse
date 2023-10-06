/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'jbmono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

