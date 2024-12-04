/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "app-banner": "url(assets/images/app-bg.jpg)",
        "gameboard-background": "url(assets/images/gameboard.png)",
        "ball-background": "url(assets/images/ball-bg.png)",
        "button-background": "url(assets/images/button-bg.png)",
      },
    },
  },
  plugins: [],
};
