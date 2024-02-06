/** @type {import('tailwindcss').Config} */
export default {
  /* O content significa quais arquivos da minha aplicação vão receber as classes do tailwind */
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", /* Todos os arquivos da pasta src que terminam com uma dessas extensões */
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

