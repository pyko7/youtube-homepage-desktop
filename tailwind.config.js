/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          bg: "#0f0f0f",
          text: "#f1f1f1",
          outline: "rgba(255, 255, 255, 0.2)",
        },
        "button-bg": "rgba(255, 255, 255, 0.1)",
        "button-bg-hover": "rgba(255, 255, 255, 0.2)",
        "button-call-to-action": "#3ea6ff",
        "button-call-to-action-hover": "#263850",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
