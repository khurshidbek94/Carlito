/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        'btn': "#192339",
        'gaste': "#9CA0AC",
        'betreung': "#377C4C",
        'btnblue': "#0B86B3",
        'bg-section': '#D6DAE4',
        gast: '#670119',
        bggast: '#FFF6EF',
        colorGast: '#9CA0AC',
        bgPinc: '#EEA2AF',
        bgReady: '#192339',
        infoLight: '#E8F4FC',
        bgYellow: '#ffb94f',
        blueOch: '#E8DDFF',
        blackOch: '#5B304D',
        tableColor: '#EEF7FA',
        green: '#59AE59',
        redText:'#E24E37',
        bgBlack: '#111827'
      },
      boxShadow: {
        '3xl': '0px 0px 10px rgba(156, 160, 172, 0.4)',
      },
      fontSize: {
        'size24': ["16px","16px"],
        'size46': ['32.2px','42px']
      },
      width: {
        'width817': '766.5px',
        'w1063': '766.5px',
        'w627': '439px',
        'w571': '571px',
        'w490': '510px',
        'w575': '575',
        '1158': '880px'
      },
      height: {
        'h816': '571px',
        'h1063': '744px',
        'h1100': '770px'
      },
      margin: {
        'mr684': '478px'
      },
      inset: {
        'size175': '122.5px',
        'size180': '126px'
      },
      padding: {
        'top': '38rem'
      }
    },
  },
  plugins: [],
}