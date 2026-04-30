/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#2563eb",
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
        },
        border: "#e2e8f0",
        background: "#ffffff",
        foreground: "#0a192f",
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
