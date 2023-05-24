/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        content: ["var(--font-content)"],
        handwriting: ["var(--font-handwriting)"],
      },
      colors: {
        base: "#060404",
        background: "#f3eded",
        primary: "#ffec38",
        secondary: "#e6e6db",
        accent: "#5e5e40",
      },
    },
  },
  plugins: [],
};
