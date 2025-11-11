module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        edu: ["Edu AU VIC WA NT Arrows", "cursive"],
        momo: ["Momo Trust Sans", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
        code: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
}
