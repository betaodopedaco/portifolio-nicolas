const bgC = document.getElementById('bgCanvas');
const bgCtx = bgC.getContext('2d');
let bgP = [];

function initBG() {
  bgC.width = window.innerWidth;
  bgC.height = window.innerHeight;
  bgP = Array.from({ length: 80 }, () => ({
    x: Math.random() * bgC.width,
    y: Math.random() * bgC.height,
    size: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: ['#FFD700', '#FF0000', '#FFFFFF', '#000000'][Math.floor(Math.random() * 4)]
  }));
}

function animBG() {
  bgCtx.clearRect(0, 0, bgC.width, bgC.height);
  bgP.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0) p.x = bgC.width;
    if (p.x > bgC.width) p.x = 0;
    if (p.y < 0) p.y = bgC.height;
    if (p.y > bgC.height) p.y = 0;

    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    bgCtx.fillStyle = p.color;
    bgCtx.fill();
  });
  requestAnimationFrame(animBG);
}

initBG();
animBG();
window.addEventListener('resize', initBG);
