/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A', // Deep Blue
        'secondary': '#10B981', // Emerald Green
        'accent': '#F59E0B', // Amber
        'background': '#F3F4F6', // Light Gray
        'surface': '#FFFFFF', // White
        'text-primary': '#111827', // Dark Gray
        'text-secondary': '#6B7280', // Medium Gray
        'danger': '#EF4444', // Red
      },
    },
  },
  plugins: [],
}
