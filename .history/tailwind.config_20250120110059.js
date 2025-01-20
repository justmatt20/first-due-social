/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      fontSize: {
        "8xl": [
          "6rem",
          {
            // Adjusted for better mobile scaling
            lineHeight: "1",
            letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: [],
};
