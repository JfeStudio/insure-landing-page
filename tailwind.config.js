/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["index.html", "typography.html"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        display: ['"DM Serif Display", serif'],
        karla: ['"Karla", sans-serif'],
        // montserrat: ['"Montserrat", sans-serif'],
        // poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        holy: "#fafafa",
        "holy-blur": "#f2f2f2",
        dark: "#1e293b",
        "dark-scy": "#132c33",
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(256, 26%, 20%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
      backgroundImage: {
        "pattern-intro-left-mobile":
          "url('../../public/images/bg-pattern-intro-left-mobile.svg')",
        "pattern-intro-right-mobile":
          "url('../../public/images/bg-pattern-intro-right-mobile.svg')",
        "pattern-how-we-work-mobile":
          "url('../../public/images/bg-pattern-how-we-work-mobile.svg')",
        "pattern-footer-mobile":
          "url('../../public/images/bg-pattern-footer-mobile.svg')",
        "pattern-mobile-nav":
          "url('../../public/images/bg-pattern-mobile-nav.svg')",
        "image-intro-mobile":
          "url('../../public/images/image-intro-mobile.jpg')",
        "image-intro-desktop":
          "url('../../public/images/image-intro-desktop.jpg')",
        "pattern-intro-left-desktop":
          "url('../../public/images/bg-pattern-intro-left-desktop.svg')",
        "pattern-intro-right-desktop":
          "url('../../public/images/bg-pattern-intro-right-desktop.svg')",
        "pattern-how-we-work-desktop":
          "url('../../public/images/bg-pattern-how-we-work-desktop.svg')",
        "pattern-footer-desktop":
          "url('../../public/images/bg-pattern-footer-desktop.svg')",
      },
    },
  },

  // bg-pattern-intro-left-desktop
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "hsl(0, 0%, 98%)",
            color: "hsl(270, 9%, 17%)",
          },
        },
        ".bg-md": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "hsl(270, 9%, 17%)",
            color: "hsl(0, 0%, 98%)",
          },
        },
        // ".text-hover": {
        //   color: "hsl(0, 0%, 75%)",
        //   "&:hover": {
        //     color: "hsl(180, 66%, 49%)",
        //   },
        // },
      });
    }),
  ],
};
