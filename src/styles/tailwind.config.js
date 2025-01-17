module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    }
  },
  darkMode: [
    "class"
  ],
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-merge'),
    require('clsx'),
    require('@radix-ui/react-icons'),
    require('class-variance-authority')
  ]
}