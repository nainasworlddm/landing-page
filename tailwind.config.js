/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🔸 Brand palette
        primary: {
          DEFAULT: '#FF4500',
          50: '#FFEDEA',
          100: '#FFD9D1',
          200: '#FFBFB0',
          300: '#FF986B',
          400: '#FF7033',
          500: '#FF4500', // main CTA
          600: '#E03D00',
          700: '#B93100',
          800: '#8F2700',
          900: '#611A00',
        },
        secondary: {
          500: '#FF7043',
          600: '#F25C27',
          700: '#CC4714',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        gray: {
          950: '#0E0E0E',
          900: '#181818', // new background
          800: '#1F1F1F',
          700: '#2A2A2A',
          600: '#3D3D3D',
          500: '#6B6B6B',
          400: '#9E9E9E',
          300: '#CFCFCF',
          200: '#E4E4E4',
          100: '#F3F3F3',
          50: '#FAFAFA',
        },
      },

      fontFamily: {
        heading: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1200px',
      },
      lineHeight: {
        heading: '1.2',
        body: '1.5',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': {
            boxShadow:
              '0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 15px #FF4500',
          },
          '100%': {
            boxShadow:
              '0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 30px #FF4500',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};