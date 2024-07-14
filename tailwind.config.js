/** /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F40404",
        secondary: "#6c6c6c",
        demo: "rgba(0, 0, 0, 0.60)",
        gray: "#6C6C6C",
      },
      maxWidth: {
        container: "1144px",
      },
      backgroundImage: {
        banner: "url('/src/assets/banner.png')",
        services1: "url('/src/assets/services1.png')",
        services1: "url('/src/assets/services1.png')",
        services1: "url('/src/assets/services1.png')",
        blog1: "url('/src/assets/blog1.png')",
      },
    },
  },

  plugins: [],
};
