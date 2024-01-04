/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FBF9F5',
        fonts: '#2D2323',
        primary: '#6B9773',
      },
      fontFamily: {
        sans: ['Open Sans', 'Inter'],
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1537px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingRight: '27px',
          paddingLeft: '27px',
          '@screen xl': {
            maxWidth: '1158px',
            paddingRight: '0',
            paddingLeft: '0',
          },
        },
      })
    },
  ],
}
