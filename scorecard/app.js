// ── QUESTIONS DATA ────────────────────────────────────────
const DIMENSIONS = [
  { id: 'engagement',   label: 'Engagement & Activity',      color: '#C9A84C' },
  { id: 'onboarding',   label: 'Onboarding & Retention',     color: '#9D7FD4' },
  { id: 'moderation',   label: 'Moderation & Safety',        color: '#FF928C' },
  { id: 'content',      label: 'Content & Communication',    color: '#ef9854' },
  { id: 'growth',       label: 'Growth & Discoverability',   color: '#C9A84C' },
  { id: 'governance',   label: 'Governance Participation',   color: '#9D7FD4' },
];

const QUESTIONS = [
  // ENGAGEMENT (5 questions)
  { dim: 'engagement', text: 'How would you describe your community\'s daily message activity?',
    opts: [['Ghost town — very few messages per day', 0], ['Light — a few conversations, mostly quiet', 1], ['Moderate — regular activity across most days', 2], ['Active — multiple conversations daily across channels', 3]] },
  { dim: 'engagement', text: 'What percentage of your members actively participate in discussions?',
    opts: [['Under 5% — mostly lurkers', 0], ['5–15% — a small vocal minority', 1], ['15–30% — a decent active core', 2], ['30%+ — genuinely broad participation', 3]] },
  { dim: 'engagement', text: 'How often do you run community events (AMAs, calls, games, etc.)?',
    opts: [['Never or very rarely', 0], ['Occasionally — a few times a year', 1], ['Monthly — somewhat regular', 2], ['Weekly or bi-weekly — consistent schedule', 3]] },
  { dim: 'engagement', text: 'How do members typically respond when someone asks a question in your community?',
    opts: [['Questions often go unanswered', 0], ['Sometimes answered, often by the team only', 1], ['Usually answered by community members', 2], ['Quickly and thoroughly answered — strong peer support', 3]] },
  { dim: 'engagement', text: 'How would you rate the quality of conversations in your community?',
    opts: [['Mostly noise — spam, price talk, or repetitive questions', 0], ['Mixed — some signal but a lot of noise', 1], ['Generally good — meaningful conversations most of the time', 2], ['High signal — thoughtful, substantive discussions', 3]] },

  // ONBOARDING (5 questions)
  { dim: 'onboarding', text: 'Do you have a structured onboarding flow for new members?',
    opts: [['No — they land and figure it out themselves', 0], ['Basic — a welcome message but nothing else', 1], ['Moderate — welcome, rules, and some guidance', 2], ['Full flow — welcome, verification, role assignment, and guided journey', 3]] },
  { dim: 'onboarding', text: 'What percentage of new members stick around after 30 days?',
    opts: [['I don\'t track this metric', 0], ['Under 20% — very high early churn', 1], ['20–50% — moderate retention', 2], ['50%+ — strong early retention', 3]] },
  { dim: 'onboarding', text: 'How long does it typically take a new member to make their first contribution?',
    opts: [['Most never contribute', 0], ['Weeks to months, if at all', 1], ['Within a week or two', 2], ['Within a few days — onboarding drives action', 3]] },
  { dim: 'onboarding', text: 'Do new members have a clear understanding of what the community is for and how to get value from it?',
    opts: [['No — it\'s confusing for newcomers', 0], ['Somewhat — it\'s not well explained', 1], ['Mostly — most people figure it out', 2], ['Yes — we explain it clearly and consistently', 3]] },
  { dim: 'onboarding', text: 'Do you have a defined pathway for members to go from newcomer to contributor?',
    opts: [['No pathway exists', 0], ['Informal — people figure it out eventually', 1], ['Partial — some signals but no clear ladder', 2], ['Yes — clear progression with incentives at each stage', 3]] },

  // MODERATION (5 questions)
  { dim: 'moderation', text: 'How quickly does your team respond to rule violations or bad actors?',
    opts: [['Very slowly or not at all — issues often go unaddressed', 0], ['Eventually — but not consistently or promptly', 1], ['Within hours — relatively responsive', 2], ['Within minutes — fast and consistent moderation', 3]] },
  { dim: 'moderation', text: 'How often does your community experience spam, scam attempts, or raids?',
    opts: [['Frequently — it\'s an ongoing problem', 0], ['Occasionally — it happens but we manage', 1], ['Rarely — our defences are mostly effective', 2], ['Almost never — strong anti-spam and verification in place', 3]] },
  { dim: 'moderation', text: 'Does your community have clear, publicly posted rules that members have agreed to?',
    opts: [['No written rules', 0], ['Rules exist but aren\'t prominently displayed', 1], ['Rules are visible but not enforced consistently', 2], ['Clear rules, prominently posted, consistently enforced', 3]] },
  { dim: 'moderation', text: 'How safe do your members feel reporting issues or concerns?',
    opts: [['No clear reporting mechanism — members don\'t know what to do', 0], ['A mechanism exists but members rarely use it', 1], ['Members sometimes report — moderate trust in the process', 2], ['Members report freely — high trust in moderation', 3]] },
  { dim: 'moderation', text: 'Have you experienced any significant community crisis, controversy, or coordinated attack in the past 12 months?',
    opts: [['Yes, and it significantly damaged the community', 0], ['Yes, but we recovered reasonably well', 1], ['Minor incidents only — well contained', 2], ['None — community is stable and safe', 3]] },

  // CONTENT (5 questions)
  { dim: 'content', text: 'How consistently does your team publish updates, announcements, or content to the community?',
    opts: [['Inconsistently — members don\'t know when to expect updates', 0], ['Occasionally — updates happen but on no set schedule', 1], ['Regularly — members have a rough sense of what to expect', 2], ['Consistently — clear cadence, members know when to tune in', 3]] },
  { dim: 'content', text: 'Does your community have a defined tone of voice and communication style?',
    opts: [['No — communication style varies wildly', 0], ['Loosely — some informal norms but nothing documented', 1], ['Mostly consistent — team generally aligned', 2], ['Yes — defined tone, consistent across all channels', 3]] },
  { dim: 'content', text: 'How much original, valuable content does your community generate (beyond just chat)?',
    opts: [['Almost none — community is passive', 0], ['Occasional posts or threads from a few active members', 1], ['Regular community-generated content from a solid core', 2], ['Rich ecosystem — deep threads, guides, art, memes, proposals', 3]] },
  { dim: 'content', text: 'Are your community\'s key channels and pinned resources up to date?',
    opts: [['No — outdated info everywhere', 0], ['Mostly outdated — rarely updated', 1], ['Somewhat current — major info is up to date', 2], ['Fully current — resources updated as the project evolves', 3]] },
  { dim: 'content', text: 'Does your team distinguish between different types of communication (announcements vs discussion vs support)?',
    opts: [['No — everything is posted in one or two channels', 0], ['Partially — some separation but it\'s messy', 1], ['Mostly yes — channels are reasonably well organised', 2], ['Yes — clear channel architecture, information is easy to find', 3]] },

  // GROWTH (5 questions)
  { dim: 'growth', text: 'How are new members currently discovering your community?',
    opts: [['I have no idea — no visibility into acquisition', 0], ['Mostly word of mouth — no active growth effort', 1], ['Some structured channels — social, partnerships, or content', 2], ['Multiple active channels — organic + structured growth strategy', 3]] },
  { dim: 'growth', text: 'How is your community size trending over the past 3 months?',
    opts: [['Shrinking — we\'re losing members', 0], ['Flat — no meaningful growth or decline', 1], ['Slow growth — steady but modest', 2], ['Growing steadily — consistent positive trajectory', 3]] },
  { dim: 'growth', text: 'Do you track community growth metrics (member count, active users, retention rate)?',
    opts: [['No metrics at all', 0], ['We look at raw member count only', 1], ['Some metrics — activity and growth roughly tracked', 2], ['Yes — regular reporting on growth, activity, and retention', 3]] },
  { dim: 'growth', text: 'How strong is your community\'s presence and reputation outside of Discord/Telegram?',
    opts: [['Minimal — community only exists within the server', 0], ['Some presence — active on one external platform', 1], ['Good presence — active on a few external channels', 2], ['Strong presence — known, respected, and active across the ecosystem', 3]] },
  { dim: 'growth', text: 'Do community members actively refer or invite others to join?',
    opts: [['No — no organic referral activity', 0], ['Rarely — it happens but isn\'t common', 1], ['Sometimes — members do refer but inconsistently', 2], ['Frequently — strong word-of-mouth from happy members', 3]] },

  // GOVERNANCE (5 questions)
  { dim: 'governance', text: 'Does your community have any formal or informal governance structures?',
    opts: [['No governance — all decisions made by the team', 0], ['Informal — community voice is considered but no process', 1], ['Partial — some governance mechanisms exist', 2], ['Yes — formal governance with clear processes and participation', 3]] },
  { dim: 'governance', text: 'What percentage of eligible members participate in governance votes?',
    opts: [['No voting — N/A', 0], ['Under 10% — very low participation', 1], ['10–30% — moderate participation', 2], ['30%+ — strong governance engagement', 3]] },
  { dim: 'governance', text: 'How well do community members understand the governance process?',
    opts: [['Most have no idea how it works', 0], ['Some understand — mostly the power users', 1], ['Majority have a basic understanding', 2], ['Strong literacy — members understand and actively engage', 3]] },
  { dim: 'governance', text: 'Are governance decisions and their rationale communicated back to the community?',
    opts: [['No — decisions happen without explanation', 0], ['Sometimes — major decisions get some communication', 1], ['Usually — most decisions are communicated', 2], ['Always — full transparency on governance outcomes and reasoning', 3]] },
  { dim: 'governance', text: 'Does your community have a way for members to submit proposals or raise issues?',
    opts: [['No formal mechanism', 0], ['Informal only — members can suggest in chat', 1], ['Partial — some way to submit ideas but no structured process', 2], ['Yes — clear submission process, reviewed and responded to', 3]] },
];

// ── RECOMMENDATIONS ENGINE ─────────────────────────────────
const RECS = {
  engagement: [
    { threshold: 6,  priority: 'high',   title: 'Run weekly community events',         body: 'Regular AMAs, game nights, or working calls are the fastest way to drive recurring engagement. Even a 30-minute weekly call significantly increases activity.' },
    { threshold: 10, priority: 'medium', title: 'Implement a recognition system',       body: 'Acknowledge top contributors publicly. A leaderboard, shoutout channel, or contributor role drives competition and repeat engagement.' },
    { threshold: 14, priority: 'low',    title: 'Create sub-communities by interest',   body: 'As community grows, segment by interest or expertise. Focused channels reduce noise and increase quality discussion.' },
  ],
  onboarding: [
    { threshold: 6,  priority: 'high',   title: 'Build a proper onboarding flow',       body: 'If new members don\'t know what to do in the first 5 minutes, they leave. Create a step-by-step welcome sequence with a clear call to action.' },
    { threshold: 10, priority: 'medium', title: 'Track your 30-day retention rate',     body: 'You can\'t improve what you don\'t measure. Set up a simple retention report — what % of people who join are still active 30 days later?' },
    { threshold: 14, priority: 'low',    title: 'Define a contributor ladder',          body: 'Map out the journey from new member to contributor. Clear stages and visible progression keep ambitious members engaged long-term.' },
  ],
  moderation: [
    { threshold: 6,  priority: 'high',   title: 'Implement anti-spam and verification', body: 'If you don\'t have bot-based verification and anti-raid tools, you\'re one targeted attack away from a damaged community. Set up Wick or MEE6 immediately.' },
    { threshold: 10, priority: 'medium', title: 'Document and post your community rules', body: 'Rules need to be visible, specific, and enforced consistently. Vague rules create conflict. Clear rules create a safe environment.' },
    { threshold: 14, priority: 'low',    title: 'Train your moderation team',           body: 'Consistency in moderation builds trust. Align your team on thresholds, escalation paths, and tone.' },
  ],
  content: [
    { threshold: 6,  priority: 'high',   title: 'Establish a content cadence',          body: 'Irregular communication kills community trust. Define a simple weekly schedule: 1 update, 1 community call, 1 engagement post. Consistency beats quality at this stage.' },
    { threshold: 10, priority: 'medium', title: 'Define your community\'s tone of voice', body: 'Inconsistent communication signals that nobody\'s in charge. Write a one-page tone guide for your community managers.' },
    { threshold: 14, priority: 'low',    title: 'Incentivise member-generated content', body: 'Reward members for creating valuable content — guides, explainers, art. UGC reduces your workload and increases engagement.' },
  ],
  growth: [
    { threshold: 6,  priority: 'high',   title: 'Set up basic growth tracking',         body: 'Install a simple analytics setup to track new member sources, active member count, and weekly retention. Data reveals your highest-leverage channels.' },
    { threshold: 10, priority: 'medium', title: 'Activate a referral or invite programme', body: 'Members referring members is your highest-quality growth channel. Even a simple invite leaderboard can unlock significant organic growth.' },
    { threshold: 14, priority: 'low',    title: 'Build external community presence',    body: 'Active presence on X/Twitter, Farcaster, or Lens extends your community beyond your server and creates new entry points for discovery.' },
  ],
  governance: [
    { threshold: 6,  priority: 'high',   title: 'Introduce a structured governance process', body: 'Even if you\'re not a DAO, a clear process for community input builds trust. A simple monthly feedback thread and public response creates enormous goodwill.' },
    { threshold: 10, priority: 'medium', title: 'Educate members on governance',        body: 'Low participation often comes from confusion, not apathy. A clear governance explainer pinned in your server can double participation.' },
    { threshold: 14, priority: 'low',    title: 'Create a delegate or champion system', body: 'Identify active members willing to represent community interests in governance. Delegates increase legitimacy and drive broader participation.' },
  ],
};

// ── GRADE ENGINE ───────────────────────────────────────────
function getGrade(score) {
  if (score >= 85) return { grade: 'Thriving',   color: '#C9A84C', desc: 'Your community is genuinely healthy. You have strong engagement, clear processes, and a solid foundation. The goal now is scale and depth.' };
  if (score >= 70) return { grade: 'Established', color: '#9D7FD4', desc: 'Good fundamentals with clear room to grow. A few targeted improvements will unlock the next level of community health.' };
  if (score >= 55) return { grade: 'Developing',  color: '#ef9854', desc: 'You have the basics in place but significant gaps remain. Addressing your weakest dimensions will have an outsized impact.' };
  if (score >= 35) return { grade: 'Struggling',  color: '#FF928C', desc: 'Your community needs attention in multiple areas. Start with moderation and onboarding — those fix the leaky bucket before you grow.' };
  return              { grade: 'Critical',    color: '#E24B4A', desc: 'Fundamental community health issues need to be addressed before growth efforts will stick. Focus on the basics first.' };
}

// ── APP STATE ──────────────────────────────────────────────
const App = (() => {
  let current = 0;
  let answers = {};
  let userData = {};

  function show(id) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    const el = document.getElementById(id);
    el.style.display = 'flex';
    requestAnimationFrame(() => el.classList.add('active'));
  }

  function start() { show('screen-questions'); renderQuestion(); }

  function renderQuestion() {
    const q = QUESTIONS[current];
    const dim = DIMENSIONS.find(d => d.id === q.dim);
    const pct = Math.round((current / QUESTIONS.length) * 100);

    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('progress-label').textContent = `${current} / ${QUESTIONS.length}`;
    document.getElementById('dim-badge').textContent = dim.label;
    document.getElementById('dim-badge').style.color = dim.color;
    document.getElementById('q-num').textContent = `Q${String(current + 1).padStart(2, '0')}`;
    document.getElementById('q-text').textContent = q.text;

    const container = document.getElementById('q-options');
    container.innerHTML = '';
    q.opts.forEach(([label, score], i) => {
      const btn = document.createElement('button');
      btn.className = 'q-option' + (answers[current] === score ? ' selected' : '');
      btn.innerHTML = `
        <span class="opt-indicator"></span>
        <span class="opt-text">${label}</span>
      `;
      btn.onclick = () => selectOption(score, btn);
      container.appendChild(btn);
    });

    document.getElementById('btn-back').disabled = current === 0;
    document.getElementById('btn-next').disabled = answers[current] === undefined;
    document.getElementById('btn-next').textContent = current === QUESTIONS.length - 1 ? 'See results →' : 'Next →';
  }

  function selectOption(score, btn) {
    answers[current] = score;
    document.querySelectorAll('.q-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('btn-next').disabled = false;
  }

  function prev() {
    if (current > 0) { current--; renderQuestion(); }
  }

  function next() {
    if (answers[current] === undefined) return;
    if (current < QUESTIONS.length - 1) {
      current++;
      renderQuestion();
    } else {
      show('screen-email');
    }
  }

  function unlock() {
    const name    = document.getElementById('g-name').value.trim();
    const email   = document.getElementById('g-email').value.trim();
    const project = document.getElementById('g-project').value.trim();
    const errEl   = document.getElementById('gate-error');

    if (!name) { errEl.textContent = '// Name is required'; return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = '// Please enter a valid email address'; return;
    }
    errEl.textContent = '';
    userData = { name, email, project };

    // Submit lead to Netlify Forms (fire and forget — don't block results)
    const scores = calcScores();
    const { grade } = getGrade(scores.overall);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name':    'scorecard-leads',
        'name':         name,
        'email':        email,
        'project':      project,
        'overall-score': scores.overall,
        'grade':         grade,
        'engagement':    scores.engagement,
        'onboarding':    scores.onboarding,
        'moderation':    scores.moderation,
        'content':       scores.content,
        'growth':        scores.growth,
        'governance':    scores.governance,
      }).toString(),
    }).catch(() => {});

    showResults();
  }

  function calcScores() {
    const dimScores = {};
    DIMENSIONS.forEach(d => { dimScores[d.id] = { raw: 0, max: 0 }; });
    QUESTIONS.forEach((q, i) => {
      const maxScore = Math.max(...q.opts.map(o => o[1]));
      dimScores[q.dim].raw += (answers[i] || 0);
      dimScores[q.dim].max += maxScore;
    });
    const result = {};
    let totalRaw = 0, totalMax = 0;
    DIMENSIONS.forEach(d => {
      const pct = Math.round((dimScores[d.id].raw / dimScores[d.id].max) * 100);
      result[d.id] = pct;
      totalRaw += dimScores[d.id].raw;
      totalMax += dimScores[d.id].max;
    });
    result.overall = Math.round((totalRaw / totalMax) * 100);
    return result;
  }

  function getDimRecs(scores) {
    const recs = [];
    DIMENSIONS.forEach(dim => {
      const dimScore = scores[dim.id];
      const dimRecs  = RECS[dim.id] || [];
      for (const rec of dimRecs) {
        if (dimScore < rec.threshold) {
          recs.push({ ...rec, dim: dim.label });
          break;
        }
      }
    });
    recs.sort((a, b) => {
      const order = { high: 0, medium: 1, low: 2 };
      return order[a.priority] - order[b.priority];
    });
    return recs.slice(0, 5);
  }

  function getDimInsight(dimId, score) {
    const insights = {
      engagement: {
        low:  'Very low participation — most members are passive observers. The community lacks the social energy needed for organic growth.',
        mid:  'Some activity exists but it\'s concentrated in a small group. Broadening participation should be a priority.',
        high: 'Strong engagement across your community. Members are active, conversations are meaningful, and the community has real social energy.',
      },
      onboarding: {
        low:  'New members are landing with no clear path forward. This creates immediate churn and waste in your growth efforts.',
        mid:  'Basic onboarding is in place but retention is still a challenge. A more structured journey will significantly reduce early drop-off.',
        high: 'New members are successfully converted into active participants. Your onboarding investment is clearly paying off.',
      },
      moderation: {
        low:  'Safety and structure are lacking. Without consistent moderation, quality members leave and bad actors fill the void.',
        mid:  'Core safety tools are in place but inconsistent enforcement creates friction and uncertainty for members.',
        high: 'Community is safe, well-governed, and responsive to issues. Members feel comfortable engaging and raising concerns.',
      },
      content: {
        low:  'Communication is sparse or inconsistent. Members don\'t know what to expect or where to look for important information.',
        mid:  'Communication happens but lacks consistency or structure. Defining a content cadence would significantly improve community trust.',
        high: 'Strong communication culture — regular updates, clear channel structure, and valuable member-generated content.',
      },
      growth: {
        low:  'Growth is passive or non-existent. Without intentional growth efforts, communities stagnate or shrink.',
        mid:  'Some growth activity is in place but it\'s not systematic. Adding tracking and structure will compound results.',
        high: 'Healthy, intentional growth across multiple channels. The community is building real momentum and external presence.',
      },
      governance: {
        low:  'Community has little to no voice in decisions. This erodes long-term loyalty and is a significant risk for Web3 projects.',
        mid:  'Governance exists but participation is low or understanding is limited. Better education and clearer processes are needed.',
        high: 'Governance is transparent, participatory, and well-understood. Members feel genuinely invested in the project\'s direction.',
      },
    };
    const bucket = score < 35 ? 'low' : score < 70 ? 'mid' : 'high';
    return insights[dimId]?.[bucket] || '';
  }

  function showResults() {
    show('screen-results');
    const scores = calcScores();
    const { grade, color, desc } = getGrade(scores.overall);

    // Animate score ring
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (scores.overall / 100) * circumference;
    setTimeout(() => {
      document.getElementById('ring-arc').style.strokeDashoffset = offset;
      document.getElementById('ring-arc').style.stroke = color;
    }, 200);

    // Animate counter
    let num = 0;
    const target = scores.overall;
    const step = () => {
      num = Math.min(num + 2, target);
      document.getElementById('score-num').textContent = num;
      if (num < target) requestAnimationFrame(step);
    };
    setTimeout(step, 300);

    document.getElementById('score-grade').textContent = grade;
    document.getElementById('score-grade').style.setProperty('--grade-color', color);
    document.getElementById('score-desc').textContent = desc;
    document.getElementById('score-project').textContent =
      userData.project ? `// ${userData.project}  ·  ${userData.name}` : `// ${userData.name}`;

    // Dimension bars
    const dimContainer = document.getElementById('dim-results');
    dimContainer.innerHTML = '';
    DIMENSIONS.forEach(dim => {
      const score = scores[dim.id];
      const insight = getDimInsight(dim.id, score);
      const row = document.createElement('div');
      row.className = 'dim-row fade-in';
      row.innerHTML = `
        <div class="dim-row-top">
          <span class="dim-name">${dim.label}</span>
          <span class="dim-score-label" data-dim="${dim.id}">${score}/100</span>
        </div>
        <div class="dim-bar-track">
          <div class="dim-bar-fill" data-dim="${dim.id}" data-target="${score}"></div>
        </div>
        <div class="dim-insight">${insight}</div>
      `;
      dimContainer.appendChild(row);
    });

    // Set dim colours via CSS custom property, then animate bar widths
    document.querySelectorAll('.dim-bar-fill').forEach(bar => {
      const dim = DIMENSIONS.find(d => d.id === bar.dataset.dim);
      if (dim) bar.style.setProperty('--dim-color', dim.color);
    });
    document.querySelectorAll('.dim-score-label').forEach(label => {
      const dim = DIMENSIONS.find(d => d.id === label.dataset.dim);
      if (dim) label.style.setProperty('--dim-color', dim.color);
    });
    setTimeout(() => {
      document.querySelectorAll('.dim-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.target + '%';
      });
    }, 400);

    // Recommendations
    const recs = getDimRecs(scores);
    const recsContainer = document.getElementById('recs-list');
    recsContainer.innerHTML = '';
    recs.forEach(rec => {
      const item = document.createElement('div');
      item.className = 'rec-item fade-in';
      item.innerHTML = `
        <span class="rec-priority ${rec.priority}">${rec.priority}</span>
        <div class="rec-content">
          <h4>${rec.title}</h4>
          <p>${rec.body}</p>
        </div>
      `;
      recsContainer.appendChild(item);
    });

    // Store scores for PDF
    App._scores = scores;
    App._recs   = recs;
  }

  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W = 210, H = 297;

    // ── Helpers ──
    const hex = c => c;
    function rect(x, y, w, h, color) {
      doc.setFillColor(...hexToRgb(color));
      doc.rect(x, y, w, h, 'F');
    }
    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1,3),16);
      const g = parseInt(hex.slice(3,5),16);
      const b = parseInt(hex.slice(5,7),16);
      return [r, g, b];
    }
    function text(str, x, y, opts = {}) {
      const { size = 10, color = '#EDE8F5', font = 'helvetica', style = 'normal', align = 'left' } = opts;
      doc.setFont(font, style);
      doc.setFontSize(size);
      doc.setTextColor(...hexToRgb(color));
      doc.text(str, x, y, { align });
    }
    function line(x1, y1, x2, y2, color = '#392668', w = 0.3) {
      doc.setDrawColor(...hexToRgb(color));
      doc.setLineWidth(w);
      doc.line(x1, y1, x2, y2);
    }

    const scores = App._scores;
    const recs   = App._recs;
    const { grade, color: gradeColor } = getGrade(scores.overall);

    // ── PAGE 1: COVER ──
    rect(0, 0, W, H, '#08050F');
    rect(0, 0, W, H * 0.45, '#392668');
    rect(0, H * 0.45 - 1, W, 2.5, '#C9A84C');
    rect(0, 0, 3, H, '#FF928C');

    text('CM', 18, 58, { size: 52, color: '#C9A84C', style: 'bold' });
    text('CMAESTRO STUDIO', 18, 67, { size: 8, color: '#EDE8F5', style: 'bold' });

    text('Community Health', 18, H * 0.52, { size: 28, color: '#EDE8F5', style: 'bold' });
    text('Scorecard Report', 18, H * 0.52 + 12, { size: 28, color: '#C9A84C', style: 'bold' });

    text(userData.project || 'Community Assessment', 18, H * 0.52 + 28, { size: 11, color: '#B8B0CC' });
    text(userData.name + '  //  ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), 18, H * 0.52 + 36, { size: 9, color: '#8A7FA0' });

    // Big score circle
    const cx = W - 52, cy = H * 0.52 + 20;
    doc.setDrawColor(...hexToRgb('#C9A84C'));
    doc.setLineWidth(2);
    doc.circle(cx, cy, 20, 'S');
    text(String(scores.overall), cx, cy + 5, { size: 22, color: '#C9A84C', style: 'bold', align: 'center' });
    text('/100', cx, cy + 11, { size: 7, color: '#8A7FA0', align: 'center' });
    text(grade.toUpperCase(), cx, cy + 18, { size: 7, color: gradeColor, style: 'bold', align: 'center' });

    line(18, H * 0.52 + 50, W - 18, H * 0.52 + 50, '#392668');

    // Dimension summary on cover
    let sy = H * 0.52 + 62;
    text('DIMENSION SCORES', 18, sy, { size: 7, color: '#8A7FA0', style: 'bold' });
    sy += 8;
    DIMENSIONS.forEach(dim => {
      const score = scores[dim.id];
      text(dim.label, 18, sy, { size: 8, color: '#EDE8F5' });
      text(score + '/100', W - 18, sy, { size: 8, color: dim.color, align: 'right', style: 'bold' });
      // mini bar
      rect(18, sy + 1.5, (W - 36) * 0.7, 2, '#1A0E28');
      rect(18, sy + 1.5, (W - 36) * 0.7 * (score / 100), 2, dim.color);
      sy += 10;
    });

    text('cmaestrostudio.xyz', W - 18, H - 10, { size: 7, color: '#8A7FA0', align: 'right' });

    // ── PAGE 2: DETAILS ──
    doc.addPage();
    rect(0, 0, W, H, '#08050F');
    rect(0, 0, W, 2, '#C9A84C');

    let py = 18;
    text('// DIMENSION BREAKDOWN', 18, py, { size: 8, color: '#C9A84C', style: 'bold' });
    py += 10;

    DIMENSIONS.forEach(dim => {
      const score = scores[dim.id];
      const insight = getDimInsight(dim.id, score);

      rect(18, py, W - 36, 28, '#100C1C');
      doc.setDrawColor(...hexToRgb('#3A2468'));
      doc.setLineWidth(0.3);
      doc.rect(18, py, W - 36, 28);

      text(dim.label.toUpperCase(), 22, py + 7, { size: 7, color: dim.color, style: 'bold' });
      text(score + '/100', W - 22, py + 7, { size: 10, color: dim.color, style: 'bold', align: 'right' });

      rect(22, py + 10, (W - 44) * 0.9, 2.5, '#1A0E28');
      rect(22, py + 10, (W - 44) * 0.9 * (score / 100), 2.5, dim.color);

      const insightLines = doc.splitTextToSize(insight, W - 50);
      insightLines.slice(0, 2).forEach((ln, i) => {
        text(ln, 22, py + 17 + i * 5, { size: 7.5, color: '#B8B0CC' });
      });

      py += 33;
      if (py > H - 40) { doc.addPage(); rect(0,0,W,H,'#08050F'); rect(0,0,W,2,'#C9A84C'); py = 18; }
    });

    // ── PAGE 3: RECOMMENDATIONS ──
    doc.addPage();
    rect(0, 0, W, H, '#08050F');
    rect(0, 0, W, 2, '#C9A84C');

    py = 18;
    text('// TOP RECOMMENDATIONS', 18, py, { size: 8, color: '#FF928C', style: 'bold' });
    py += 6;
    text('Where to focus next to improve your community health score.', 18, py, { size: 9, color: '#B8B0CC' });
    py += 12;

    const prioColors = { high: '#FF928C', medium: '#ef9854', low: '#C9A84C' };

    recs.forEach(rec => {
      const boxH = 36;
      rect(18, py, W - 36, boxH, '#100C1C');
      doc.setDrawColor(...hexToRgb('#3A2468'));
      doc.setLineWidth(0.3);
      doc.rect(18, py, W - 36, boxH);
      rect(18, py, 3, boxH, prioColors[rec.priority]);

      text(rec.priority.toUpperCase(), 26, py + 7, { size: 6, color: prioColors[rec.priority], style: 'bold' });
      text(rec.title, 26, py + 14, { size: 9, color: '#EDE8F5', style: 'bold' });
      const bodyLines = doc.splitTextToSize(rec.body, W - 56);
      bodyLines.slice(0, 2).forEach((ln, i) => {
        text(ln, 26, py + 21 + i * 5, { size: 7.5, color: '#B8B0CC' });
      });

      py += boxH + 6;
    });

    py += 10;
    rect(18, py, W - 36, 28, '#251840');
    doc.setDrawColor(...hexToRgb('#C9A84C'));
    doc.setLineWidth(0.5);
    doc.rect(18, py, W - 36, 28);
    text('Want expert help acting on these recommendations?', 22, py + 9, { size: 9, color: '#EDE8F5', style: 'bold' });
    text('CMaestro Studio offers community audits, sprints, and ongoing retainers.', 22, py + 16, { size: 8, color: '#B8B0CC' });
    text('cmaestrostudio.xyz  //  @CMaestroStudio', 22, py + 23, { size: 8, color: '#C9A84C' });

    text('Generated by CMaestro Studio Community Health Scorecard', W / 2, H - 8, { size: 6, color: '#564E6A', align: 'center' });

    const name = (userData.project || 'community').toLowerCase().replace(/\s+/g, '-');
    doc.save(`cmaestro-health-report-${name}.pdf`);
  }

  function restart() {
    current = 0;
    answers = {};
    userData = {};
    show('screen-intro');
  }

  // Public
  return { start, prev, next, unlock, downloadPDF, restart };
})();

// ── PARTICLE BACKGROUND ────────────────────────────────────
(() => {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initP();
  }

  function initP() {
    particles = Array.from({ length: Math.floor((W * H) / 16000) }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
      gold: Math.random() > 0.7,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? 'rgba(201,168,76,0.65)' : 'rgba(157,127,212,0.4)';
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(120,90,180,${(1 - d/100) * 0.15})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const md  = Math.sqrt(mdx*mdx + mdy*mdy);
      if (md < 140) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(201,168,76,${(1 - md/140) * 0.45})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('resize', resize);
  resize();
  draw();
})();