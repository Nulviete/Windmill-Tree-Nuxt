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
        'max-900': {'max': '900px'},
        'max-768': {'max': '768px'},
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};