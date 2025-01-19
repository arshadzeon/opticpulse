/** @type {import('tailwindcss').Config} */
export const content = ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",];
export const theme = {
  extend: {
    margin: {
      '128': '32rem',
      '144': '36rem',
      // Add more custom values as needed
    },
   fontFamily :{
    title:["DM Sans"],
   }
  },
};
export const variants = {};
export const plugins = [];

