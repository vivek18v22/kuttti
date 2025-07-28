function showSurprise() {
  const msg = document.getElementById('surprise');
  msg.classList.remove('hidden');
  launchConfetti();
}

// Confetti animation
function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  const colors = ['#ff69b4', '#ffc0cb', '#f9a602', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Load confetti script
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
document.body.appendChild(script);
