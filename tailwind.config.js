module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        limeLight: ['Limelight', "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        martel: ["Martel", "sans-serif"]
      },
      backgroundSize: {
        "25p": "25%",
        "600": "600px",
        "50p": "50%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
