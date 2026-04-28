import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#f0faf4",
          100: "#dbf3e3",
          200: "#b8e6c9",
          300: "#8ed4a7",
          400: "#5fbc82",
          500: "#3ca366",
          600: "#2a8752",
          700: "#236c43",
          800: "#1f5638",
          900: "#1b4730",
        },
        mint: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
        },
        ink: {
          50: "#f5f6f8",
          100: "#e6e8ed",
          200: "#c8ccd6",
          500: "#6b7280",
          700: "#374151",
          900: "#111827",
          950: "#0a1220",
        },
        surface: "#f7faf5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        cardHover: "0 4px 12px rgba(15, 23, 42, 0.08), 0 20px 40px rgba(15, 23, 42, 0.10)",
        soft: "0 2px 8px rgba(15, 23, 42, 0.05)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 80% at 0% 0%, #e8f7ee 0%, rgba(232,247,238,0) 55%), radial-gradient(90% 70% at 100% 0%, #e4f3ea 0%, rgba(228,243,234,0) 55%), linear-gradient(180deg, #f7fbf6 0%, #ffffff 100%)",
        "dark-grid":
          "radial-gradient(1200px 400px at 50% -10%, rgba(60, 163, 102, 0.18), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0a1220 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
