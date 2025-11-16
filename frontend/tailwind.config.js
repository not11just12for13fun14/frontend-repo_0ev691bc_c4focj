/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B1020',
          purple: '#6C5CE7',
          cyan: '#00E5FF',
          accent: '#FFCA3A'
        }
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
