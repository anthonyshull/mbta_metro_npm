import colors from "./colors"

const colors = Object.keys(colors);
const backgrounds = colors.map(color => {
  return {
    pattern: new RegExp(`bg-${color}`, "g"),
    variants: ["hover"]
  }
});

export default [
  ...colors,
  ...backgrounds
]