module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/hero-bg.svg')",
      },
      fontFamily: {
       'poppins':  ['Poppins', 'sans-serif']
      },
      colors: {
        'purple': '#7D0681',
        'off-grey': '#e5e5e5',
        'light-purple': 'rgba(125, 6, 129, 0.2)'
      },
      borderRadius: {
        'button': '12px',
      },
      fontSize: {
        'normal': '26px',
      },
      fontWeight: {
        'hero': '105px',
      }
    }
  },
  plugins: [],
}
