/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0d1117',
        'brand-surface': '#161b22',
        'brand-border': '#30363d',
        'brand-primary': '#58a6ff',
        'brand-primary-foreground': '#ffffff',
        'brand-secondary': '#21262d',
        'brand-secondary-foreground': '#c9d1d9',
        'brand-accent': '#30363d',
        'brand-accent-foreground': '#f0f6fc',
        'brand-text-primary': '#f0f6fc',
        'brand-text-secondary': '#8b949e',
        'ring': '#58a6ff',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}
