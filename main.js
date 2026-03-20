// ── CUSTOM CURSOR ──────────────────────────────────────
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// ── PARTICLE CANVAS ────────────────────────────────────
const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');
let W, H, particles, mouse = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function initParticles() {
  const count = Math.floor((W * H) / 14000);
  particles = Array.from({ length: count }, () => ({
    x:    Math.random() * W,
    y:    Math.random() * H,
    vx:   (Math.random() - 0.5) * 0.28,
    vy:   (Math.random() - 0.5) * 0.28,
    r:    Math.random() * 1.4 + 0.4,
    gold: Math.random() > 0.72,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.gold ? 'rgba(201,168,76,0.7)' : 'rgba(240,237,230,0.35)';
    ctx.fill();
  });

  // Connect nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i], b = particles[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        const alpha = (1 - dist / 110) * 0.18;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Connect to mouse
    const p = particles[i];
    const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < 160) {
      const alpha = (1 - mdist / 160) * 0.55;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }

  requestAnimationFrame(drawParticles);
}

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => { resize(); initParticles(); });
resize();
initParticles();
drawParticles();

// ── SCROLL REVEAL ──────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── COUNTER ANIMATION ──────────────────────────────────
function animateCounter(el, target, suffix = '', duration = 1800) {
  let start = null;
  const isInfinity = target === Infinity;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    if (isInfinity) {
      el.textContent = progress >= 1 ? '∞' : Math.floor(eased * 99) + suffix;
    } else {
      el.textContent = Math.floor(eased * target) + suffix;
    }
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isInfinity ? '∞' : target + suffix;
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const raw = el.dataset.count;
      const target = raw === '∞' ? Infinity : parseInt(raw);
      animateCounter(el, target, el.dataset.suffix || '');
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ── GLITCH TEXT TRIGGER ────────────────────────────────
document.querySelectorAll('.glitch').forEach(el => {
  el.setAttribute('data-text', el.textContent);
});

// ── MOBILE NAV TOGGLE ──────────────────────────────────
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.cssText = isOpen ? '' : [
    'display:flex', 'flex-direction:column',
    'position:absolute', 'top:72px', 'left:0', 'right:0',
    'background:rgba(5,5,8,0.96)', 'backdrop-filter:blur(20px)',
    'padding:24px', 'gap:20px',
    'border-bottom:1px solid rgba(201,168,76,0.15)',
    'z-index:199'
  ].join(';');
}

// ── CONTACT FORM TYPE PRE-FILL ─────────────────────────
function setType(val) {
  document.getElementById('inquiry-type').value = val;
  document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── NAV SCROLL EFFECT ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 60
    ? 'rgba(5,5,8,0.96)'
    : 'rgba(5,5,8,0.82)';
});

// ── TERMINAL TYPING (hero eyebrow) ────────────────────
const typed = document.querySelector('.typed-text');
if (typed) {
  const text = typed.dataset.text || typed.textContent;
  typed.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      typed.textContent += text[i++];
      setTimeout(type, 55);
    }
  };
  setTimeout(type, 600);
}