module.exports = {
  content: [
    "./src/components/App.tsx",
    "./src/index.tsx",
    "./src/components/Navbar.tsx",
    "./public/index.html",
    "./src/components/Statuses.tsx",
    "./src/components/Footer.tsx",
  ],
  theme: {
    extend: {},
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
    },
    width: {
      '1.1kp': '1100px',
    },

  },
  plugins: [],
}
