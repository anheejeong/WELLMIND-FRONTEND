/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2bca43",
        },
        orange: {
          100: "#faca18",
          200: "#fbab13",
          300: "#f19719",
          400: "#ef6619",
        },
        text: {
          default: "#262626",
          dark: "#151515",
          secondary: "#6d6d6d",
          light: "#c1c1c1",
          primary: "#fbaa13"
        },
        button: {
          blue: "#10151a",
          orange: "#f19719",
        },
        components: {
          profileCard: "#4d4d4d",
        }
      }
    },
  },
  plugins: [],
}

