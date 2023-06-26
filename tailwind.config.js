/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'text-color': 'color',
      },
    },
    data: {
      selected: 'item~="selected"',
      opened: 'menu~="opened"',
      closed: 'menu~="closed"',
      'info': 'type="info"',
      'success': 'type="success"',
      'warning': 'type="warning"',
      'danger': 'type="danger"',
      "row": 'dir="row"',
      'col': 'dir="col"',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

