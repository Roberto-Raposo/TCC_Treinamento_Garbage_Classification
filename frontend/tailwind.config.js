/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        header: "#1B4D33",
        primary: "#2F7A4B",
        primaryDark: "#1E5C37",
        accent: "#D4A017",
        bg: "#F7F9F7",
        danger: "#C0392B",
      },
    },
  },
  plugins: [],
};
