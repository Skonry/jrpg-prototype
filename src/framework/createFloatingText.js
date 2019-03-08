import FloatingText from './FloatingText.js';

export default function createFloatingText(containingArray, text, x, y, color, duration) {
  return new FloatingText(containingArray, text, x, y, color, duration);
}
