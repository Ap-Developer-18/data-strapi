const { Container } = require("postcss");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Add .jsx and .tsx if using React or TypeScript
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '24px',
      },
      lineHeight: {
        100: "100%",
        110: "110%",
        120: "120%",
        130: "130%",
      },
      boxShadow: {
        custom: "0 0 10px",
      },
    },
  },
  plugins: [],
}