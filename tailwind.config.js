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
      'info': 'type="info"',
      'success': 'type="success"',
      'warning': 'type="warning"',
      'danger': 'type="danger"',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

