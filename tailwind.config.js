/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    data: {
      'info': 'type="info"',
      'success': 'type="success"',
      'warning': 'type="warning"',
      'danger': 'type="danger"',
    },
  },
}

