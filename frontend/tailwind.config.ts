import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: "#F5A623",
          terracotta: "#C85C2D",
          cream: "#FDF6EE",
          gold: "#E8A838",
          forest: "#2D6A4F",
          ochre: "#D4813A",
          dustRose: "#E8C4A0",
          charcoal: "#2C2C2C",
          alert: "#D62828",
          alertBg: "#FFF0F0",
          success: "#2D6A4F",
          successBg: "#F0FFF4",
          warning: "#F5A623",
          warningBg: "#FFFBF0",
        },
        dashboard: {
          bg: "#F9FAFB",       // Main background behind cards
          card: "#FFFFFF",     // Card background
          border: "#F3F4F6",   // Light borders for cards
          text: "#1a1a1a",     // Main text
          muted: "#6B7280",    // Muted/gray text
          blueText: "#1D4ED8", // Blue for AI suggestions text
          blueBg: "#EFF6FF",   // Light blue background for AI suggestion card
          greenPill: "#16A34A",// Green background for active pill/buttons
          greenText: "#15803D",// Green text for positive metrics
          greenBg: "#DCFCE7",  // Light green background for positive metrics
          redText: "#B91C1C",  // Red text for negative metrics
          redBg: "#FEE2E2",    // Light red background for negative metrics
          iconBg: "#F3F4F6",   // Gray background for icons
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        hindi: ["Baloo 2", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(245,166,35,0.4)",
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-soft": "bounceSoft 1s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
