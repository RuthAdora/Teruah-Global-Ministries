import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          deep: "#070B14",
          surface: "#131C34",
          line: "#22304F",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#F2C572",
          deep: "#A9812A",
        },
        ivory: "#F5F1E6",
        slate: {
          soft: "#8A93A8",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        horizon:
          "radial-gradient(120% 100% at 50% 120%, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 35%, rgba(11,18,32,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
