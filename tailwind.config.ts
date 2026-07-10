import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"], display: ["var(--font-dm-serif)", "Georgia", "serif"] }, colors: { ink: "#252525", paper: "#F7F3EE", clay: "#C66E4A" }, boxShadow: { soft: "0 24px 70px -25px rgb(36 31 27 / 16%)" } } }, plugins: [] };
export default config;
