module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'max-1250': {'max': '1250px'},
        'max-1030': {'max': '1030px'},
        'max-900': {'max': '900px'},
        'max-768': {'max': '768px'},
        'max-550': {'max': '550px'},
        'max-463': {'max': '463px'}, 
        'min-900': {'min': '900px'},          
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};