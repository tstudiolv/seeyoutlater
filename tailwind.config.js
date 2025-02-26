import plugin from 'tailwindcss/plugin'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,vue,css}'
    ],
    extract,
  },
  plugins: [
    // Apply fluid typography with default WCAG checks (set checkSC144 to false to disable)
    fluid({ checkSC144: true }),
    plugin(function({ addBase }) {
      addBase({
        'html': { 
          fontSize: "20px", 
          fontFamily: 'Helvetica, sans-serif',
        },
        'h1': { fontSize: "5rem" },
        'h2': { fontSize: "4rem" },
        'h3': { fontSize: "3rem" },
        'h4': { fontSize: "2.5rem" },
        'h5': { fontSize: "2rem" },
        'h6': { fontSize: "1.75rem" },
        'p': { 
          fontSize: "1rem",
          lineHeight: '1.4rem',
        },
        'small': { 
          fontSize: "0.875rem" 
        },
        'bold': { 
          wordSpacing: '-0.1em',
          textTransform: 'uppercase',
        },
      })
    }),
  ],
  theme: {
    screens, // use fluid-tailwind rem-based screens
    fontSize, // use fluid-tailwind's rem-based font sizes (includes line heights)
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')]
    }),
    extend: {
      backgroundImage: {
        arch: 'url("/assets/vector_7.png")',
        'arch-reverse': 'url("/assets/vector_8.png")',
        fingers: 'url("/assets/bg_1.png")',
        event: 'url("/assets/bg_1.png")',
      },
      backgroundPosition: {
        arch: 'center top',
        'arch-reverse': 'center bottom',
        fingers: 'center',
        event: 'center',
      },
      backgroundSize: {
        arch: 'cover',
        'arch-reverse': 'cover',
        fingers: 'cover',
        event: 'cover',
      },
      colors: {
        // Core colors from stylebook
        black: "#151515", // Dark
        white: "#FFFFFF", // White
        blonde: "#F5F3E7", // Blonde white
        grey: "#B8C5D5", // Light blue/gray

        // Accent colors
        info: "#68A2D4", // blue
        danger: "#BF3532", // red
        success: "#60B359", // green
        warning: "#E37EA8", // pink
      },
      keyframes: {
        backspin: {
          '100%': { transform: 'rotate(0deg)' },
          '0%': { transform: 'rotate(-1440deg)' },
        },
        toycar: {
          '0%': { transform: 'translateX(0px) scale(1)', opacity: 1 },
          '10%': { transform: 'translateX(-20px) scale(0.95)', opacity: 1 },
          '20%': { transform: 'translateX(0px) scale(1)', opacity: 1 },
          '30%': { transform: 'translateX(50px) scale(1.05)', opacity: 0 },
          '80%': { transform: 'translateX(90%) scale(1.5)', opacity: 0 },
          '90%': { transform: 'translateX(-100%) scale(1)', opacity: 0 },
          '100%': { transform: 'translateX(-200%) scale(1)', opacity: 0 },
        },
        toyCarBrake: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        sliderEnter: {
          '0%': { transform: 'translateX(10vw)' },
          '100%': { transform: 'translateX(calc(-80% + 100vw)) translateY(-40%)' }
        },
        imgParallax: {
          '0%': { objectPosition: '100% center' },
          '100%': { objectPosition: '0% center' }
        }
      },
      animation: {
        'backspin': 'backspin 3s cubic-bezier(0.3, -0.4, 0, 1.1) 1',
        'ping-slow': 'ping 5s cubic-bezier(0, -5, 0.25, 5) infinite',
        'slider-scroll': 'sliderEnter linear forwards',
        'img-parallax': 'imgParallax linear'
      },
    },
  },
}
