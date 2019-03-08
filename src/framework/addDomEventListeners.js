// set up necessary DOM event listeners
export default function addDomEventListeners(canvas, callback) {
  canvas.addEventListener('mousedown', callback);
  canvas.addEventListener('mousemove', callback);
  canvas.addEventListener('mouseup', callback);
  canvas.addEventListener('dblclick', callback);
  canvas.addEventListener('click', callback);
  document.addEventListener('keydown', callback);
  document.addEventListener('keyup', callback);
}
