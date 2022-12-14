/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'development'
  },
  content: ["./components/**/*.{html,js, jsx, mp4}","./pages/**/*.{html,js, jsx}"],
  variants: ["responsive"],
  theme: {
    extend: {},
  },
  plugins: [],
}
