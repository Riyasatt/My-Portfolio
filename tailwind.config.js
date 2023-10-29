/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home:'url("./src/assets/herobgc.jpg")'
      },
      colors:{
        light_primary:"#ffffff",
        light_secondary:"",
        dark_primary:"#121212",
        dark_secondary:"",
        accent:"#7F00FF",
        accent2:"#F7D201"
      },
      keyframes:{
        blob :{
          '0%,100%':{borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%'},
          '50%':{borderRadius:'30% 60% 70% 40% / 50% 60% 30% 60%'}
        }
      },
      animation:{
        'blob-normal':'blob 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

