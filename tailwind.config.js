/**
 * author Saquib Shaikh
 * created on 03-01-2025-12h-14m
 * github: https://github.com/saquibshaikh14
 * copyright 2025
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#4F93FF',
        // secondary: '#20C997',
        primary: '#A594F9',
        secondary: '#8174A0',
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      animation: {
        'gradient': 'gradient 5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }

    },
  },
  plugins: [],
}

