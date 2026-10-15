/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"],
        gujarati: ["'Hind Vadodara'", "Manrope", "sans-serif"],
      },
      colors: {
        primary: "#1E3AA8",
        yd: "#FFC72C",
        soft: "#F6F7FB",
        navy: {
          DEFAULT: "#0F1F5C",
          light: "#1A2B70",
          lighter: "#233170",
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#5B6385",
        },
        border: "#e2e8f0",
        background: "#ffffff",
        foreground: "#0F1F5C",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
