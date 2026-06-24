/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Matches the font stack common in vCard-style portfolios
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },

      // Easy access to common screen breakpoints as container sizes
      screens: {
        xs: "480px",
      },

      // Utility for smooth scroll-snapping on section-based layouts
      scrollSnapType: {
        y: "y mandatory",
      },
    },
  },

  // @tailwindcss/typography is already in your devDependencies — wire it up here
  plugins: [require("@tailwindcss/typography")],
};
