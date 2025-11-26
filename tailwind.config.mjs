import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        serif: ["Instrument Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        neutral: colors.neutral,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
