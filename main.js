const skCanvas = document.getElementById('skillCanvas');
const skCtx = skCanvas.getContext('2d');
let skParts = [];

function initSK() {
  skCanvas.width = window.innerWidth;
  skCanvas.height = window.innerHeight;
  skParts = Array.from({ length: 60 }, () => ({
    x: Math.random() * skCanvas.width,
    y: Math.random() * skCanvas.height,
    size: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  }));
}

function animSK() {
  skCtx.clearRect(0, 0, skCanvas.width, skCanvas.height);
  skParts.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > skCanvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > skCanvas.height) p.dy *= -1;

    skCtx.beginPath();
    skCtx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    skCtx.fillStyle = 'rgba(255,255,255,0.6)';
    skCtx.fill();

    for (let j = i + 1; j < skParts.length; j++) {
      const q = skParts[j];
      const dist = (p.x - q.x) ** 2 + (p.y - q.y) ** 2;
      if (dist < 10000) {
        skCtx.strokeStyle = `rgba(255,255,255,${1 - dist / 10000})`;
        skCtx.lineWidth = 0.8;
        skCtx.beginPath();
        skCtx.moveTo(p.x, p.y);
        skCtx.lineTo(q.x, q.y);
        skCtx.stroke();
      }
    }
  });
  requestAnimationFrame(animSK);
}

initSK();
animSK();
window.addEventListener('resize', initSK);// Código principal
