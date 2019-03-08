export default function loadFile(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'module';
  script.onload = callback;
  document.head.appendChild(script);
}
