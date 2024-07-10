/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#096A2E"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'tira-avistamiento': "url('/tira-avistamiento.webp')",
        'tira-paramotor': "url('/tira-paramotor.webp')",
        'tira-safari': "url('/tira-safari.webp')",
      },
    },
  },
  plugins: [],
};
