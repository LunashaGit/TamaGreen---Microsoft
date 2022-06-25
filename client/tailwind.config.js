/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        achivAnim: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
    backgroundImage: theme => ({
     'tamagoBg': "url('../../public/images/whatagotchi.png')",
    }),
    // colors: {
    //   mainColor: '#246A73',
    //   secondColor: '#368F8B',
    //   darkColor: '#de3618',
    //   clearColor: '#F3DFC1',
    //   mediumColor: '#DDBEA8',
    //   bgColor: '#FFE6D5',
    // },

  },
  plugins: [],
};
