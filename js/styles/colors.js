const { colors: defaultColors } = require('tailwindcss/defaultTheme')

export const customColors = {
  "blue-800": "#0b2f4c",
  "blue-500": "#165c96",
  "blue-400": "#5da9e8",
  "blue-300": "#a1c6ed",
  "blue-200": "#cee0f4",
  "blue-100": "#e2ecf9",
  "green-800": "#145a06",
  "green-100": "#dff0d8",
  "purple-600": "#664a8d",
  "purple-100": "#dcd3e8",
  "red-700": "#b3000f",
  "red-100": "#f2dede",
  "yellow-700": "#d8ac00",
  "yellow-500": "#ffce0c",
  "yellow-400": "#ffdd00",
  "yellow-300": "#ffe372",
  "yellow-100": "#fffae9",
  "white": "#ffffff"
}

export default {
  ...defaultColors,
  ...customColors
}