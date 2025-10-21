/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0a0a0a', // Darker background
        'brand-surface': '#1a1a1a', // Slightly lighter surface
        'brand-border': '#2a2a2a', // Softer border
        'brand-primary': '#0070f3', // Vercel-like blue
        'brand-primary-foreground': '#ffffff',
        'brand-secondary': '#eaeaea',
        'brand-secondary-foreground': '#000000',
        'brand-accent': '#f5a623', // Brighter accent
        'brand-accent-foreground': '#000000',
        'brand-text-primary': '#ffffff', // Pure white for high contrast
        'brand-text-secondary': '#888888', // Lighter gray for secondary text
        'ring': '#0070f3',
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
