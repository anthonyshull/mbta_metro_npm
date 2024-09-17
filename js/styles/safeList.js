import colors from "./colors"

const colorKeys = Object.keys(colors);
const backgrounds = colorKeys.map(color => {
  return {
    pattern: new RegExp(`bg-${color}`, "g"),
    variants: ["hover"]
  }
});

export default [
  ...colorKeys,
  ...backgrounds
]