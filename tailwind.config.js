/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',//enable manual darkmode via "dark" class
  content: ["./src/**/*.{html,tsx,jsx}", "./src/utils/*.{ts,js}"],
  theme: {
    colors: {
      'white': 'white',
      'black': 'black',
      'gray': 'rgb(105 111 117);',
      'gray-light': 'lightgray',
      'gray-dark': 'rgb(54 52 57)',
      'positive': '#49BEAA',
      'positive-light': '#49DCB1',
      'positive-dark': '#009b6e',
      'danger': '#EF767A',
      'danger-light': '#E38F93',
      'danger-dark': '#AF3E44',
      'accent': '#456990',
      'accent-light': '#5f8dbf',
      'accent-dark': '#134b89'
    },
    extend: {
      dropShadow: {
        'gray': '0 1px 2px lightgray',
        'xl-vite': '0 0 2em #646cffaa',
        'xl-react': '0 0 2em #61dafbaa',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        'inner-fill-gray': 'inset 0 0 9999px #00000010',
        'inner-fill-gray-dark': 'inset 0 0 9999px #00000333'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

