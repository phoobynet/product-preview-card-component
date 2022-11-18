/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      display: ['Fraunces', 'sans-serif'],
    },
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      colors: {
        cream: '#F2EAE2',
        aurometalSaurus: '#6C7289',
        deepAquaMarine: '#3D8168',
        deepAquaMarineHover: '#1A4032',
        gunMetal: '#1C232B',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
