/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md-xs': '600px',
        md: '700px',
        lg: '900px',
        'lg-xl': '1000px'
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: {
          500: "#1a8efd",
          600: "#1e8ffd",
          700: "#178bff",
          800: "#2c96ff"
        },

        accent: {
          green: "#54de54",
          teal: "#1ecab0",
          yellow: "#f7bb50",
          pink: "#9d2553",
          red: "#FF1616"
        },

        gray: {
          900: "#1b2433",
          800: "#293241",
          700: "#494949",
          600: "#4d4b4b",
          500: "#5a5a5a",
          400: "#6f7074",
          300: "#a5a7ac",
          200: "#cbcdd3",
          150: "#d0d3da",
          100: "#d7d3d3"
        },

        blueSoft: {
          50: "#c9def4",
          100: "#dce6ff",
          200: "#dde5f8",
          300: "#0cc2ea"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Rubik', 'sans-serif'],
        'cambria': ['Cambria, sans-serif'],
        'arial': ['Arial']
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #ECF2FF, #FBFCFF)'
      }
    }

  },
  plugins: []
};

