module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
        blackbutnotblack: "#161616",
        code: {
          100: "#2987F1",
          200: "#0173F6",
          300: "#0657B4",
        },
        music: {
          100: "#9623D8",
          200: "#8D25CA",
          300: "#7019A3",
        },
        video: {
          100: "#15BB1A",
          200: "#16A91B",
          300: "#0A730D",
        },
      },
    },
  },
  plugins: [],
}
