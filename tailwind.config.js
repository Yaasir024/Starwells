/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Inter: ['Inter'],
      sharp: ['Sharp Grotesk']
    },
    screens: {
      xs: '600px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        '4xl':
          '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12);'
      },
      colors: {
        'main-color': '#2F2B43',
        dark: '#131E3A',
        'red-dark': '#442A2A',
        'main-red': '#FF3A31',
        'alpha-black': '#2F2B4399',
        'primary-50': '#F6F6F8',
        'primary-900': '#2F2B43',
        'gray-900': '#101828'
      },
      flex: {
        '25%': '0 0 25%',
        '75%': '0 0 75%',
        '50%': '0 0 50%',
        '66.66%': '0 0 66.6666%',
        '33.33%': '0 0 33.3333%',
        full: '0 0 100%',
        '475px': '0 0 475px'
      }
    }
  },
  plugins: []
}
