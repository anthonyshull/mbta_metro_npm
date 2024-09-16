import { customColors } from "./colors"

const colors = customColors.keys()
const backgrounds = colors.map(color => `bg-${color}`);

export default [
  ...colors,
  ...backgrounds
]