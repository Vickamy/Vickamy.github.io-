// ============================================================
// SCRIPT.JS — Vicent Kamya Portfolio
// All dynamic rendering, search, filtering, and interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── THEME ─────────────────────────────────────────────────
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('vk-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('vk-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    if (themeBtn) themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // ── NAVBAR ────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();
  });

  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const open = mobileMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    let current = '';
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop) current = sec.id;
    });
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  // ── PRINT ─────────────────────────────────────────────────
  document.querySelectorAll('.print-cv-btn').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });

  // ── BACK TO TOP ───────────────────────────────────────────
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeReveal() {
    document.querySelectorAll('.reveal, .milestone-item').forEach(el => revealObserver.observe(el));
  }

  // ── DYNAMIC COPYRIGHT ─────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── MODAL ─────────────────────────────────────────────────
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  function openModal(data) {
    document.getElementById('modal-cat').textContent = data.category || '';
    document.getElementById('modal-status').textContent = data.status || '';
    document.getElementById('modal-status').className = `badge status-${(data.status || '').toLowerCase()}`;
    document.getElementById('modal-title').textContent = data.title || '';
    document.getElementById('modal-date').textContent = data.date || data.dateRead || '';
    document.getElementById('modal-role').textContent = data.role || data.author || '';
    document.getElementById('modal-description').textContent = data.details || data.content || data.description || '';

    const outcomesEl = document.getElementById('modal-outcomes-section');
    const outcomesList = document.getElementById('modal-outcomes');
    if (data.outcomes && data.outcomes.length) {
      outcomesEl.style.display = '';
      outcomesList.innerHTML = data.outcomes.map(o => `<div class="modal-outcome">${o}</div>`).join('');
    } else {
      outcomesEl.style.display = 'none';
    }

    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = (data.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

    const pubsEl = document.getElementById('modal-pubs-section');
    const pubsList = document.getElementById('modal-pubs');
    if (data.publications && data.publications.length) {
      pubsEl.style.display = '';
      pubsList.innerHTML = data.publications.map(p => `<div class="modal-outcome">${p}</div>`).join('');
    } else {
      pubsEl.style.display = 'none';
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── RENDER: PROJECTS ──────────────────────────────────────
  function renderProjects(list) {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = list.length ? list.map(p => `
      <article class="project-card reveal">
        <div class="project-card-header">
          <span class="project-cat">${p.category}</span>
          <span class="badge status-${p.status.toLowerCase()}">${p.status}</span>
        </div>
        <div class="project-card-body">
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <div class="tags">${(p.tags || []).slice(0,4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="project-card-footer">
          <span class="project-date">${p.date} · ${p.role}</span>
          <button class="project-read-more" data-id="${p.id}" aria-label="Read more about ${p.title}">
            Read more →
          </button>
        </div>
      </article>
    `).join('') : '<p style="color:var(--text-light);font-style:italic;">No projects match your search.</p>';

    container.querySelectorAll('.project-read-more').forEach(btn => {
      btn.addEventListener('click', () => {
        const proj = projects.find(p => p.id === parseInt(btn.dataset.id));
        if (proj) openModal(proj);
      });
    });
    observeReveal();
  }

  // Projects filter + search
  let projectFilter = 'All';
  let projectSearch = '';

  function filterProjects() {
    let list = projects;
    if (projectFilter !== 'All') list = list.filter(p => p.category === projectFilter);
    if (projectSearch) list = list.filter(p =>
      p.title.toLowerCase().includes(projectSearch) ||
      p.summary.toLowerCase().includes(projectSearch) ||
      (p.tags || []).some(t => t.toLowerCase().includes(projectSearch))
    );
    renderProjects(list);
  }

  // Build project filter buttons
  const projFilterBar = document.getElementById('projects-filter');
  if (projFilterBar) {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    projFilterBar.innerHTML = cats.map(c =>
      `<button class="filter-btn${c === 'All' ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    projFilterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      projFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      projectFilter = btn.dataset.cat;
      filterProjects();
    });
  }

  document.getElementById('projects-search')?.addEventListener('input', e => {
    projectSearch = e.target.value.toLowerCase().trim();
    filterProjects();
  });

  renderProjects(projects);

  // ── RENDER: JOURNAL ───────────────────────────────────────
  function formatDate(str) {
    const d = new Date(str);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function renderJournal(list) {
    const container = document.getElementById('journal-grid');
    if (!container) return;
    container.innerHTML = list.length ? list.map(e => `
      <article class="journal-entry reveal">
        <div class="journal-entry-header">
          <div class="journal-meta">
            <span class="journal-date">${formatDate(e.date)}</span>
            <span class="badge badge-outline">${e.category}</span>
          </div>
        </div>
        <div class="journal-entry-body">
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
          <div class="tags">${(e.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="project-card-footer" style="border-top:1px solid var(--border);padding:14px 24px;display:flex;justify-content:flex-end;">
          <button class="project-read-more" data-id="${e.id}" aria-label="Read full entry: ${e.title}">
            Read entry →
          </button>
        </div>
      </article>
    `).join('') : '<p style="color:var(--text-light);font-style:italic;">No entries match your search.</p>';

    container.querySelectorAll('.project-read-more').forEach(btn => {
      btn.addEventListener('click', () => {
        const entry = journalEntries.find(j => j.id === parseInt(btn.dataset.id));
        if (entry) openModal({ ...entry, role: formatDate(entry.date) });
      });
    });
    observeReveal();
  }

  let journalFilter = 'All';
  let journalSearch = '';

  function filterJournal() {
    let list = journalEntries;
    if (journalFilter !== 'All') list = list.filter(e => e.category === journalFilter);
    if (journalSearch) list = list.filter(e =>
      e.title.toLowerCase().includes(journalSearch) ||
      e.summary.toLowerCase().includes(journalSearch) ||
      (e.tags || []).some(t => t.toLowerCase().includes(journalSearch))
    );
    renderJournal(list);
  }

  const journalFilterBar = document.getElementById('journal-filter');
  if (journalFilterBar) {
    const cats = ['All', ...new Set(journalEntries.map(e => e.category))];
    journalFilterBar.innerHTML = cats.map(c =>
      `<button class="filter-btn${c === 'All' ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    journalFilterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      journalFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      journalFilter = btn.dataset.cat;
      filterJournal();
    });
  }

  document.getElementById('journal-search')?.addEventListener('input', e => {
    journalSearch = e.target.value.toLowerCase().trim();
    filterJournal();
  });

  renderJournal(journalEntries);

  // ── RENDER: BOOKS ─────────────────────────────────────────
  const spineColors = ['#0f1f3d','#1b4332','#7a5a10','#5c1a1a','#1a2a5c','#2d4a1a'];

  function renderBooks(list) {
    const container = document.getElementById('books-grid');
    if (!container) return;
    container.innerHTML = list.length ? list.map((b, i) => {
      const stars = Array.from({length: 5}, (_, s) =>
        `<span class="star${s < b.rating ? '' : ' empty'}">★</span>`).join('');
      const initials = b.author.split(' ').map(w => w[0]).slice(0,2).join('');
      const col = spineColors[i % spineColors.length];
      return `
        <article class="book-card reveal">
          <div class="book-spine" style="background:${col}">${initials}</div>
          <div class="book-info">
            <h4>${b.title}</h4>
            <div class="book-author">${b.author}</div>
            <span class="badge badge-outline" style="margin-bottom:8px;display:inline-block;">${b.category}</span>
            <p class="book-lesson">${b.lessons}</p>
            <div class="book-stars">${stars}</div>
          </div>
        </article>
      `;
    }).join('') : '<p style="color:var(--text-light);font-style:italic;">No books match your search.</p>';
    observeReveal();
  }

  let bookFilter = 'All';
  let bookSearch = '';

  function filterBooks() {
    let list = books;
    if (bookFilter !== 'All') list = list.filter(b => b.category === bookFilter);
    if (bookSearch) list = list.filter(b =>
      b.title.toLowerCase().includes(bookSearch) ||
      b.author.toLowerCase().includes(bookSearch) ||
      b.lessons.toLowerCase().includes(bookSearch)
    );
    renderBooks(list);
  }

  const booksFilterBar = document.getElementById('books-filter');
  if (booksFilterBar) {
    const cats = ['All', ...new Set(books.map(b => b.category))];
    booksFilterBar.innerHTML = cats.map(c =>
      `<button class="filter-btn${c === 'All' ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    booksFilterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      booksFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bookFilter = btn.dataset.cat;
      filterBooks();
    });
  }

  document.getElementById('books-search')?.addEventListener('input', e => {
    bookSearch = e.target.value.toLowerCase().trim();
    filterBooks();
  });

  renderBooks(books);

  // ── RENDER: ACTIVITIES ────────────────────────────────────
  const activitiesGrid = document.getElementById('activities-grid');
  if (activitiesGrid) {
    activitiesGrid.innerHTML = activities.map(a => `
      <div class="activity-card reveal">
        <span class="activity-icon">${a.icon}</span>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
      </div>
    `).join('');
    observeReveal();
  }

  // ── RENDER: LEADERSHIP ────────────────────────────────────
  const leadershipGrid = document.getElementById('leadership-grid');
  if (leadershipGrid) {
    leadershipGrid.innerHTML = leadershipRoles.map(r => `
      <div class="leadership-card reveal">
        <div class="leadership-card-header">
          <div>
            <h3>${r.role}</h3>
            <div class="org">${r.org}</div>
          </div>
          <span class="dates">${r.start}–${r.end}</span>
        </div>
        <p>${r.description}</p>
        <div class="impact-note">📌 ${r.impact}</div>
      </div>
    `).join('');
    observeReveal();
  }

  // ── RENDER: MILESTONES ────────────────────────────────────
  const milestoneTimeline = document.getElementById('milestone-timeline');
  if (milestoneTimeline) {
    const catColors = {
      Education: '#e8eeff',
      Research: '#dff0e8',
      Leadership: '#fff7e0',
      Entrepreneurship: '#f0e8ff'
    };
    milestoneTimeline.innerHTML = milestones.map(m => `
      <div class="milestone-item">
        <div class="milestone-dot"></div>
        <div class="milestone-year">${m.year} · ${m.category}</div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
      </div>
    `).join('');
    observeReveal();
  }

  // ── RENDER: OPPORTUNITIES ─────────────────────────────────
  const oppGrid = document.getElementById('opp-grid');
  if (oppGrid) {
    oppGrid.innerHTML = opportunities.map(o => `
      <div class="opp-card reveal">
        <div class="opp-icon">${o.icon}</div>
        <div>
          <h3>${o.title}</h3>
          <p>${o.description}</p>
        </div>
      </div>
    `).join('');
    observeReveal();
  }

  // ── RENDER: CV EDUCATION ──────────────────────────────────
  const eduTimeline = document.getElementById('edu-timeline');
  if (eduTimeline) {
    eduTimeline.innerHTML = education.map(e => `
      <div class="timeline-item">
        <div class="tl-year">${e.start}<br>–<br>${e.end}</div>
        <div class="tl-content">
          <h4>${e.degree}</h4>
          <div class="tl-sub">${e.field}</div>
          <p>${e.institution}, ${e.location}</p>
          ${e.thesis ? `<p><em>Thesis:</em> ${e.thesis}</p>` : ''}
          <div class="tl-chips">${(e.highlights||[]).map(h=>`<span class="tl-chip">${h}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
  }

  // ── RENDER: CV RESEARCH EXPERIENCE ───────────────────────
  const expTimeline = document.getElementById('exp-timeline');
  if (expTimeline) {
    expTimeline.innerHTML = researchExperience.map(r => `
      <div class="timeline-item">
        <div class="tl-year">${r.start}<br>–<br>${r.end}</div>
        <div class="tl-content">
          <h4>${r.role}</h4>
          <div class="tl-sub">${r.group}</div>
          <p>${r.institution}</p>
          <p>${r.description}</p>
        </div>
      </div>
    `).join('');
  }

  // ── RENDER: CV AWARDS ────────────────────────────────────
  const awardsEl = document.getElementById('awards-list');
  if (awardsEl) {
    awardsEl.innerHTML = awards.map(a => `
      <div class="timeline-item">
        <div class="tl-year">${a.year}</div>
        <div class="tl-content">
          <h4>${a.title}</h4>
          <p>${a.org}</p>
        </div>
      </div>
    `).join('');
  }

  // ── RENDER: CV PRESENTATIONS ──────────────────────────────
  const presEl = document.getElementById('presentations-list');
  if (presEl) {
    presEl.innerHTML = presentations.map(p => `
      <div class="timeline-item">
        <div class="tl-year">${p.year}</div>
        <div class="tl-content">
          <h4>${p.title}</h4>
          <div class="tl-sub">${p.event}</div>
          <p>${p.type}</p>
        </div>
      </div>
    `).join('');
  }

  // ── RENDER: SKILLS ────────────────────────────────────────
  const skillsEl = document.getElementById('skills-grid');
  if (skillsEl) {
    const skillSections = [
      { label: 'Chemistry', key: 'chemistry' },
      { label: 'Automation & Technology', key: 'automation' },
      { label: 'Software & Tools', key: 'software' },
      { label: 'Languages', key: 'languages' },
      { label: 'Other Skills', key: 'other' }
    ];
    skillsEl.innerHTML = skillSections.map(s => `
      <div class="skill-category">
        <h4>${s.label}</h4>
        <div class="skill-pills">
          ${(skills[s.key] || []).map(sk => `<span class="skill-pill">${sk}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // ── CONTACT: POPULATE LINKS ───────────────────────────────
  const emailLink = document.getElementById('contact-email');
  if (emailLink) emailLink.href = `mailto:${personalInfo.email}`;
  const emailVal = document.getElementById('contact-email-val');
  if (emailVal) emailVal.textContent = personalInfo.email;

  // ── INITIAL REVEAL TRIGGER ────────────────────────────────
  observeReveal();

  // Re-observe after short delay for dynamically rendered elements
  setTimeout(observeReveal, 300);

});
