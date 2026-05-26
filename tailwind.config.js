/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
          extend: {
                  colors: {
                            'paca-blue': '#1a3a6e',
                            'paca-blue-dark': '#0f2347',
                            'paca-blue-light': '#2553a0',
                            'paca-red': '#e8001c',
                            'paca-red-dark': '#b8001a',
                  },
                  fontFamily: {
                            sans: ['Inter', 'system-ui', 'sans-serif'],
                  },
          },
    },
    plugins: [],
}
