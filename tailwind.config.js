/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        img:'20px 5px 50px rgba(233.75, 128.56, 128.56, 0.20)',
      },
      animation:{
        ani:"ani 1s forwards",
        out:"out 1s forwards",
        bounce:"bounce 1s infinite",
        "shadow-img":"shadow-img 3s infinite",
        "shadow-text":"shadow-text 3s infinite"
      },
      linearBorderGradients: {
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: { // defaults to {}
          'border-record': ['#57575700', '#5E5E5E', '#57575700'],
          'border-img':['#020202','#EEEEEE30','#020202'],
        },
        background: {
          'gray-900':'rgb(15 15 15 / var(--tw-bg-opacity))',
          'vizit':'rgb(23 23 23)',
          'black':'rgb(0 0 0)',
          'white':'rgb(255 255 255)'
        },
        border: { // defaults to these values (optional)
          '1': '1px',
          '2': '2px',
          '4': '4px',
        },
      },

    },
  },
  plugins: [
      require('tailwindcss-border-gradient-radius')
  ],
}
