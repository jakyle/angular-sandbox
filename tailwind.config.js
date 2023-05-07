/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    data: {
      opened: 'menu~="opened"',
      closed: 'menu~="closed"',
    },
  },
  plugins: [],
}

