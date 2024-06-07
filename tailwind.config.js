/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'375px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        Pink: 'hsl(322, 100%, 66%)',
        VeryPaleCyan: 'hsl(193, 100%, 96%)',
        VeryDarkCyan: 'hsl(192, 100%, 9%)',
        GrayishBlue: 'hsl(208, 11%, 55%)',
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        opensans:['Open Sans','sans-serif']
      },
      fontWeight:{
        regular:400,
        medium:600,
        bold:700,
      },
      backgroundImage:{
        'hero-desktop':"url('../images/bg-hero-desktop.svg')",
        'hero-mobile':"url('../images/bg-hero-mobile.svg')"
      }
    },
  },
  plugins: [],
}