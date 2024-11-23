/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1b2e5a",
          800: "#254975",
          700: "#37517e",
          600: "#004ea2",
          500: "#0a58ca",
          400: "#0d6efd",
          300: "#50bbde",
          200: "#47b2e4",
          100: "#0dcaf0",
        },
        black: {
          700: "#212529",
          600: "#343a40",
          500: "#666",
          400: "#6c757d",
          300: "#bbbdc9",
          200: "#cccccc",
          100: "#f8f9fa",
        },
        text: {
          default: "#343a40",
          dark: "#212529",
          darkgray: "#666",
          gray: "#ccc",
          white: "#f8f9fa",
        },
        default: {
          red: "#dc3545",
          pink: "#d63384",
          orange: "#fd7e14",
          green: "#198754",
          lightGreen: "#20c997",
          gray: "#6c757d",
          darkGray: "#555",
          lightRed: "#fc4b52",
          mint: "#309895",
          purple: "#672aff",
          whiteYellow: "#ffefc2",
          darkOrange: "#fc6537"
        },
        background: {
          default: "#E7EFFF",
          light: "#F1F5FD",
        },
        // orange: {
        //   100: "#faca18",
        //   200: "#fbab13",
        //   300: "#f19719",
        //   400: "#ef6619",
        // },
        // text: {
        //   default: "#262626",
        //   dark: "#151515",
        //   secondary: "#6d6d6d",
        //   light: "#c1c1c1",
        //   primary: "#fbaa13"
        // },
        // button: {
        //   blue: "#10151a",
        //   orange: "#f19719",
        //   lightBlue: '#ebeeff',
        //   hoverBlue: '#d9e0ff',
        //   text: '#3d29df',
        //   secondText: '#6d5edb',
        // },
        // components: {
        //   profileCard: "#4d4d4d",
        //   graph: "#3300ff",
        //   graphBack: '#eef2fc',
        // },
        // background: {
        //   back: "#273352",
        // }
      }
    },
  },
  plugins: [],
}

