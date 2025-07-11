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
        'neon-pink': '#eb1f90',
        'neon-blue': '#6DC5EE',
        'neon-cyan': '#05acc8',
        'neon-purple': '#A855F7',
        'neon-green': '#10B981',
        'neon-yellow': '#fcd805',
        'neon-red': '#ee2939',
        'gcx-dark': '#0a0a0a',
        'gcx-darker': '#050505',
      },
      fontFamily: {
        'gaming': ['Orbitron', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
          },
          '50%': {
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          'from': {
            boxShadow: '0 0 10px -2px currentColor',
          },
          'to': {
            boxShadow: '0 0 20px -2px currentColor, 0 0 30px -10px currentColor',
          },
        },
      },
    },
  },
  plugins: [],
} 