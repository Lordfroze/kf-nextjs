/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // tambahkan font roboto
      fontFamily: {
        robot: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  // plugin typography
  plugins: [require("@tailwindcss/typography")],
}