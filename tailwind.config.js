const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        // Define your brand colors here
        brand: {
          main: '#FF6E26', // Main brand color
          white_bg: '#F7F7F7', // Secondary brand color
          black_bg: '#26282E',
          blue: '#000856',
          ash: '#706D6D',
          black: '#191919',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
