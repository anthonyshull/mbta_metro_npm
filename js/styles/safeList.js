import { customColors } from "./colors"

const colors = Object.keys(customColors);
const backgrounds = colors.map(color => `bg-${color}`);

export default [
  ...colors,
  ...backgrounds
]