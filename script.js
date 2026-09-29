const IP = 'gagfhonyt.aternos.me';
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyIP() {
  try {
    await navigator.clipboard.writeText(IP);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = IP;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast('✔ ה-IP הועתק! ' + IP);
}

document.querySelectorAll('.copy-ip').forEach(btn => btn.addEventListener('click', copyIP));

// Reveal on scroll
const revealEls = document.querySelectorAll('.feature, .split-text, .split-img, .rank, .lux-card, .ranks-shot, .join');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
