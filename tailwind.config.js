/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(5px)',
          },
          '100%': {
            transform: 'translateY(-5px)',
          },
        },
      },
      animation: {
        'custom-bounce-1': 'customBounce 1s infinite ease-in-out 200ms',
        'custom-bounce-2': 'customBounce 1s infinite ease-in-out 400ms',
        'custom-bounce-3': 'customBounce 1s infinite ease-in-out 600ms',
      },
    }
  },
  plugins: [require("daisyui")],
}

