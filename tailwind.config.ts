import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
  colors: {
    brand: {
      primary: "#E30613", // 🔴 Red
    },
  },
},

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E30613", // 🔴 Red
        },
      },
    },
  },
  plugins: [],
};
export default config;
