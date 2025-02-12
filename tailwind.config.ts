import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inset-0": "inset 0 0 0 0 #ffffff",
        "inset-100": "inset 100px 0 0 0 #ffffff",
      },
      transitionProperty: {
        "color-shadow": "color, box-shadow",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
