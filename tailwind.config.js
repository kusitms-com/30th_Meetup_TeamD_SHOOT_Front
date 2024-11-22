// tailwind.config.js
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "padding-default": "20px",
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: {
          40: "#A3A3A8",
          70: "#5F5F67",
          100: "#1A1A25",
        },
        Grayscale: {
          60: "#707374",
        },
      },
      fontSize: {
        graypoint: ["12px", "150%"],
      },
      fontWeight: {
        regular: "400",
      },
    },
  },
  plugins: [],
};