/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        round: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        round: "round 3s linear infinite",
      },
    },
  },
  plugins: [],
};
