// ✅ Esto es lo nuevo y correcto
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),
    require('autoprefixer'),
  ],
}
