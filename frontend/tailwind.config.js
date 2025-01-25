/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          primary: '#2874DA',
          secondary: '#273CD9',
          third: '#27ACD9'
        },
        blacks: {
          100: '#2A2B2E',
          75: 'rgba(42, 43, 46, 0.75)',
          50: 'rgba(42, 43, 46, 0.5)',
          25: 'rgba(42, 43, 46, 0.25)',
          10: 'rgba(42, 43, 46, 0.1)',
          5: 'rgba(42, 43, 46, 0.05)'
        },
        hard: {
          1: '#0116D3'
        },
        clay: {
          1: '#BD5327' 
        },
        grass: {
          1: '#778435',
          2: '#A7D239'
        }
      },
    },
  },
  plugins: [],
}