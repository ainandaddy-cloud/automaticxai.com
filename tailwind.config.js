/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#1A1A1A',
          800: '#2A2A2A',
          700: '#3A3A3A',
          600: '#4A4A4A',
          500: '#5A5A5A',
          400: '#6A6A6A',
          300: '#8A8A8A',
          200: '#AAAAAA',
          100: '#CCCCCC',
        },
        accent: {
          900: '#B45309',
          800: '#D97706',
          700: '#F59E0B',
          600: '#FBBF24',
          500: '#FACC15',
          400: '#FDE047',
          300: '#FEF08A',
          200: '#FEFCE8',
          100: '#FFFBEB',
        },
        dark: {
          900: '#000000',
          800: '#0A0A0A',
          700: '#1A1A1A',
          600: '#2A2A2A',
          500: '#3A3A3A',
          400: '#4A4A4A',
          300: '#5A5A5A',
          200: '#6A6A6A',
          100: '#8A8A8A',
        },
        light: {
          900: '#FFFFFF',
          800: '#F8F9FA',
          700: '#F1F3F4',
          600: '#E8EAED',
          500: '#DADCE0',
          400: '#BDC1C6',
          300: '#9AA0A6',
          200: '#5F6368',
          100: '#3C4043',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
          muted: '#999999',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(145deg, #000000, #1A1A1A)',
        'gradient-main-light': 'linear-gradient(145deg, #FFFFFF, #F8F9FA)',
        'gradient-card': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'gradient-card-light': 'linear-gradient(145deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.02))',
        'gradient-button': 'linear-gradient(145deg, #FACC15, #FDE047)',
        'gradient-button-hover': 'linear-gradient(145deg, #FDE047, #FACC15)',
        'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-light': 'linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(250, 204, 21, 0.4)',
        'glow-yellow-strong': '0 0 30px rgba(250, 204, 21, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-light': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 32px rgba(250, 204, 21, 0.2)',
        'card-light': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'card-hover-light': '0 8px 32px rgba(250, 204, 21, 0.15)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(250, 204, 21, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(250, 204, 21, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        'bounce-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3) translateY(100px)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05) translateY(-10px)'
          },
          '70%': { 
            transform: 'scale(0.9) translateY(0px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0px)'
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0px)'
          },
        },
        'rotate-in': {
          '0%': { 
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)'
          },
          '100%': { 
            opacity: '1',
            transform: 'rotate(0deg) scale(1)'
          },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'rotate-in': 'rotate-in 0.8s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};