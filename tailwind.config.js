/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rangZero: "#DDE6ED",
        rangOne: "#9DB2BF",
        rangTwo: "#7895B2",
        rangThree: "#526D82",
        rangFour: "#27374D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
