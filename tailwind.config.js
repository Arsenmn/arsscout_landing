/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F0FDF4",
        "on-background": "#2d3748",
        primary: "#48C072",
        dark: "#094737",
        "on-primary": "#094737",
        surface: "#ffffff",
        "on-surface": "#2d3748",
        "surface-variant": "#69a797",
        "on-surface-variant": "#094737",
        outline: "#B2C0B9",
        accent: "#35dc96",
      },
      backgroundImage: {
        "linear-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "linear-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "linear-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))"
      },
    },
  },
  plugins: [],
};