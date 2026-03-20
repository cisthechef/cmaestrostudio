// ── CURSOR ──────────────────────────────────────────────
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left     = e.clientX + 'px';
    cursor.style.top      = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top  = e.clientY + 'px';
  });
}

// ── PARTICLE CANVAS ──────────────────────────────────────
const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');
let W, H, particles;
const mouse = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
  initParticles();
}

function initParticles() {
  particles = Array.from({ length: Math.floor((W * H) / 14000) }, () => ({
    x:    Math.random() * W,
    y:    Math.random() * H,
    vx:   (Math.random() - 0.5) * 0.25,
    vy:   (Math.random() - 0.5) * 0.25,
    r:    Math.random() * 1.3 + 0.4,
    gold: Math.random() > 0.7,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  particles.forEach(p => {
    p.x = (p.x + p.vx + W) % W;
    p.y = (p.y + p.vy + H) % H;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.gold ? 'rgba(201,168,76,0.65)' : 'rgba(157,127,212,0.35)';
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(120,90,180,${(1 - d / 100) * 0.14})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }

    const mdx = particles[i].x - mouse.x;
    const mdy = particles[i].y - mouse.y;
    const md  = Math.sqrt(mdx * mdx + mdy * mdy);
    if (md < 140) {
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(201,168,76,${(1 - md / 140) * 0.42})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
  }

  requestAnimationFrame(drawParticles);
}

document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('resize', resize);
resize();
drawParticles();

// ── SCROLL REVEAL ──────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FILTER LOGIC ──────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.product-card');
const emptyState = document.getElementById('empty-state');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const status  = card.dataset.status;
      const pricing = card.dataset.pricing;
      const show =
        filter === 'all'  ? true :
        filter === 'live' ? status === 'live' :
        filter === 'soon' ? status === 'soon' :
        filter === 'free' ? pricing === 'free' :
        filter === 'paid' ? pricing === 'paid' :
        true;

      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    emptyState.style.display = visible === 0 ? 'block' : 'none';
  });
});

// ── MOBILE NAV ────────────────────────────────────────
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.cssText = isOpen ? '' : [
    'display:flex', 'flex-direction:column',
    'position:absolute', 'top:72px', 'left:0', 'right:0',
    'background:rgba(8,5,15,0.96)', 'backdrop-filter:blur(20px)',
    'padding:24px', 'gap:20px',
    'border-bottom:1px solid rgba(120,90,180,0.3)',
    'z-index:199'
  ].join(';');
}

// ── NOTIFY MODAL ──────────────────────────────────────
let currentProduct = '';

function openNotify(productName) {
  currentProduct = productName;
  document.getElementById('modal-product').textContent = productName;
  document.getElementById('modal-title').textContent   = `Get notified about ${productName}`;
  document.getElementById('notify-email').value        = '';
  document.getElementById('notify-error').textContent  = '';
  document.getElementById('modal-backdrop').classList.add('open');
}

function closeNotify() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

function submitNotify() {
  const email  = document.getElementById('notify-email').value.trim();
  const errEl  = document.getElementById('notify-error');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = '// Please enter a valid email address';
    return;
  }
  errEl.textContent = '';

  // Submit to Netlify Forms
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'form-name': 'product-notify',
      'email':     email,
      'product':   currentProduct,
    }).toString(),
  }).catch(() => {});

  closeNotify();
  showToast();
}

function showToast() {
  const toast = document.getElementById('notify-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNotify();
});

// ── NAV SCROLL ────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 60
    ? 'rgba(8,5,15,0.96)'
    : 'rgba(8,5,15,0.88)';
});