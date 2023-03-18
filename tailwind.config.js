module.exports = {
  content: [
    "./src/components/App.tsx",
    "./src/index.tsx",
    "./src/components/Navbar.tsx",
    "./public/index.html",
    "./src/components/Statuses.tsx",
    "./src/components/Footer.tsx",
    "./src/components/Alert.tsx",
  ],
  theme: {
    extend: {
      margin: {
        '600px': '600px',
      }
    },
    screens: {
      'phone': '413px',
      'mobile': '710px'
    },
    fontSize: {
      'smallest': '.01rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    height: {
      '537p': '537px',
      '150p': '150px',
      '100p': '100px',
      '70p': '80px',
    },
    width: {
      '1.1kp': '1100px',
    },

  },
  plugins: [],
}
