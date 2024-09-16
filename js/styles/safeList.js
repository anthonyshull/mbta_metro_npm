import { customColors } from "./colors"

const colors = Object.keys(customColors);
const backgrounds = colors.map(color => {
  return {
    pattern: new RegExp(String.raw(`^bg-${color}-\d+`), "g"),
    variants: ["hover"]
  }
});

export default [
  ...colors,
  ...backgrounds
]