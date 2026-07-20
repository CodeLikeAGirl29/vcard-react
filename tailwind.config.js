/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F1F5F9",
        ink: "#0F172A",
        "ink-soft": "#475569",
        accent: "#3B82F6",
        lilac: "#818CF8",
        rule: "#CBD5E1",
        card: "#FFFFFF",
        canvas: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
