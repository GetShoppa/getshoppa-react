module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/hero.svg')",
      },
      fontFamily: {
       'poppins':  ['Poppins', 'sans-serif'],
       'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'purple': '#7D0681',
        'off-grey': '#e5e5e5',
        'grey': '#D9D9D9',
        'light-grey': 'rgba(0, 0, 0, 0.5)',
        'off-black': 'rgba(0, 0, 0, 0.61)',
        'hero-grey': 'rgba(196, 196, 196, 0.26',
        'light-purple': 'rgba(125, 6, 129, 0.2)',
        'off-pink': 'rgba(125, 6, 129, 0.06)',
        'off-white': 'rgba(255, 255, 255, 0.75)',
        'shade-white': 'rgba(255, 255, 255, 0.54)'
      },
      borderRadius: {
        'button': '12px',
      },
      fontSize: {
        'normal': '26px',
      },
      fontWeight: {
        'hero': '105px',
      },
      boxShadow: {
        'button': '0px 5px 10px rgba(0, 0, 0, 0.25)',
        'search-box': '4px 4px 4px rgba(0, 0, 0, 0.25)',
        'stats-box': '0px 10px 15px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: [],
}
