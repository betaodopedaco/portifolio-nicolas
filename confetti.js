const cfC = document.getElementById('confettiCanvas');
const cfCtx = cfC.getContext('2d');
let confs = [];

function initCF() {
  cfC.width = window.innerWidth;
  cfC.height = window.innerHeight;
}

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confs.push({
      x: Math.random() * cfC.width,
      y: Math.random() * -cfC.height,
      size: Math.random() * 8 + 4,
      dx: (Math.random() - 0.5) * 5,
      dy: Math.random() * 8 + 4,
      rot: Math.random() * 360,
      spin: (Math.random() - 0.5) * 10,
      color: ['#FFD700', '#FF0000', '#FFFFFF', '#000000'][Math.floor(Math.random() * 4)]
    });
  }
  setTimeout(() => window.open('https://wa.me/5581984027098', '_blank'), 1000);
}

function animCF() {
  cfCtx.clearRect(0, 0, cfC.width, cfC.height);
  confs.forEach(c => {
    c.x += c.dx;
    c.y += c.dy;
    c.rot += c.spin;
    cfCtx.save();
    cfCtx.translate(c.x, c.y);
    cfCtx.rotate(c.rot * Math.PI / 180);
    cfCtx.fillStyle = c.color;
    cfCtx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    cfCtx.restore();
  });
  confs = confs.filter(c => c.y < cfC.height + 20);
  requestAnimationFrame(animCF);
}

initCF();
animCF();
window.addEventListener('resize', initCF);

document.querySelector('.contact-content .buttons .button').addEventListener('click', startConfetti);// Confetti
