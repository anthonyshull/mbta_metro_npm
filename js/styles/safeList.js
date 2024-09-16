import { customColors } from "./colors"

const colors = Object.keys(customColors);
const backgrounds = colors.map(color => {
  return {
    pattern: new RegExp(`^bg-${color}-`, "g"),
    variants: ["hover"]
  }
});

export default [
  ...colors,
  ...backgrounds
]