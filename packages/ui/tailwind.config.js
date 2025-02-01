/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "ir-",
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--ir-radius)",
        md: "calc(var(--ir-radius) - 2px)",
        sm: "calc(var(--ir-radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--ir-background))",
        foreground: "hsl(var(--ir-foreground))",
        card: {
          DEFAULT: "hsl(var(--ir-card))",
          foreground: "hsl(var(--ir-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--ir-popover))",
          foreground: "hsl(var(--ir-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--ir-primary))",
          foreground: "hsl(var(--ir-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--ir-secondary))",
          foreground: "hsl(var(--ir-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--ir-muted))",
          foreground: "hsl(var(--ir-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--ir-accent))",
          foreground: "hsl(var(--ir-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--ir-destructive))",
          foreground: "hsl(var(--ir-destructive-foreground))",
        },
        border: "hsl(var(--ir-border))",
        input: "hsl(var(--ir-input))",
        ring: "hsl(var(--ir-ring))",
        chart: {
          1: "hsl(var(--ir-chart-1))",
          2: "hsl(var(--ir-chart-2))",
          3: "hsl(var(--ir-chart-3))",
          4: "hsl(var(--ir-chart-4))",
          5: "hsl(var(--ir-chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
