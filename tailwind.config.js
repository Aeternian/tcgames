/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-vio': '#624E88',
    },},
  },
  plugins: [ require('@tailwindcss/forms')],
}