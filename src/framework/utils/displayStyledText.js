export default function displayStyledText(text, context, x, y) {
  const fragmentsToStyle = [];

  // search for style patterns
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$') {
      const endIndex = text.indexOf('#', i + 1);
      const colorNumbers = {
        '1': 'red',
        '2': 'green',
        '3': 'blue'
      }
      const color = colorNumbers[text[i + 1]];
      fragmentsToStyle.push({startIndex: i, endIndex, color});
    }
  }
  if (fragmentsToStyle.length > 0) {
    let stringIndex = 0;
    for (const fragment of fragmentsToStyle) {
      context.save();
      // display text between styled fragments
      context.fillText(text.substring(stringIndex, fragment.startIndex), x, y);

      // modify x by width of displayed text
      x += context.measureText(text.substring(stringIndex, fragment.startIndex)).width;

      // set color for styled fragment
      context.fillStyle = fragment.color;

      // draw styled fragment
      context.fillText(text.substring(fragment.startIndex + 2, fragment.endIndex), x, y);
      x += context.measureText(text.substring(fragment.startIndex + 2, fragment.endIndex)).width;
      context.restore();
      stringIndex = fragment.endIndex + 1;
    }

    // draw text after last styled fragment
    x = context.measureText(text.substring(0, stringIndex)).width + 250;
    context.fillText(text.substring(stringIndex), x, y);

  }

  // if no styled fragments, just draw plain text
  else {
    context.fillText(text, x, y);
  }
}
