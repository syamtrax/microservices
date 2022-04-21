module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)'
          },
          "100%": {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)'
          },
          "100%": {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          "100%": {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          }
        }
      },
      animation: {
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out',
      }
    },
  },
  plugins: [],
}