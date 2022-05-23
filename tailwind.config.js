module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
        colors: {
        'body': '#0C1428',
        'selected-text': '#A3A3FF',
        'theme': '#08416e',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ['Century Gothic',"'Poppins'", 'sans-serif']
      }
    }
  },
  plugins: [ require('tw-elements/dist/plugin') ],
  variants: {
    extend: {},
  },
}
