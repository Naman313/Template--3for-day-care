/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0D3B66',       // Main deep blue
          coral: '#F95738',      // Vibrant primary orange/red
          orange: '#EE964B',     // Soft orange
          yellow: '#F4D35E',     // Sunny yellow
          cream: '#FAF0CA',      // Soft cream
          bg: '#FFFCF0',         // Warm background
          textDark: '#1C1917',   // Dark slate text
          textMuted: '#57534D',  // Muted text
          terracotta: '#BB4D00', // Terracotta accent
          softBg: '#FAF3E6',     // Card background soft
          softBorder: '#FAECDE', // Soft card border
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(13, 59, 102, 0.08)',
        'card': '0 15px 35px -5px rgba(13, 59, 102, 0.07)',
        'pop': '0 20px 40px -10px rgba(249, 87, 56, 0.15)',
        'floating': '0 25px 50px -12px rgba(13, 59, 102, 0.12)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
