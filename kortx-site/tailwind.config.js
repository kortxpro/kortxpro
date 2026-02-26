/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-quadrado": "#00A3FF",
        "azul-escuro": "#0A1628",
        "background-dark": "#0D1117",
        "cinza-claro": "#F8FAFC",
        "cinza-texto": "#8B949E",
        "cinza-borda": "#30363D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 163, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 163, 255, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};
