/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "light": "url('/images/bg.png')"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin")
  ],
};
