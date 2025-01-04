import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        shine: "shine 5s linear infinite",
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
