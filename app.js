const SUPABASE_URL = 'https://lfaevjqycpeosqnivbbg.supabase.co/rest/v1/';
const SUPABASE_KEY = 'sb_publishable_YDjzY_1yMeJsUQTEid3-8w_b7UOgNnO';
// ═══════════════════════════════════════════════════════════════
// JPM TRACKER — App Logic
// ═══════════════════════════════════════════════════════════════

const { CATEGORIES, PLAN_START_DATE, KEY_DEADLINES, XP_PER_TASK,
        JPM_INTERN_TOTAL_XP, JPM_XP_PER_WEEK, WEEKS, TOTAL_PLAN_XP } = window.PLAN_DATA;

// ─── ÉTAT GLOBAL ──────────────────────────────────────────────
const App = {
  state: {
    completedTasks: {}, // { "weekNum-taskIdx": true }
    journal: {}, // { "YYYY-MM-DD": { mood, energy, text } }
    weekGoals: {}, // { weekNum: "objectifs..." }
    contacts: [], // [{ name, company, division, position, school, status, lastInteraction, notes }]
    courses: [], // [{ name, currentGrade, weight }]
    streak: { current: 0, lastDate: null },
    selectedWeek: null,
  },

  // ─── INIT ───────────────────────────────────────────────────
  init() {
    this.loadState();
    this.state.selectedWeek = this.getCurrentWeek();
    this.bindEvents();
    this.render();
    this.updateStreak();
  },

  loadState() {
    try {
      const saved = localStorage.getItem('jpm-tracker-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) { console.warn('Load failed:', e); }
  },

  saveState() {
    try {
      localStorage.setItem('jpm-tracker-state', JSON.stringify(this.state));
    } catch (e) { console.warn('Save failed:', e); }
  },

  // ─── CALCULS DE TEMPS ───────────────────────────────────────
  getCurrentWeek() {
    const now = new Date();
    const startDate = new Date(PLAN_START_DATE);
    if (now < startDate) return 1;
    const diffMs = now - startDate;
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1;
    return Math.max(1, Math.min(52, diffWeeks));
  },

  getWeekStartDate(weekNum) {
    const start = new Date(PLAN_START_DATE);
    start.setDate(start.getDate() + (weekNum - 1) * 7);
    return start;
  },

  formatDate(date) {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  },

  // ─── XP & PROGRESSION ───────────────────────────────────────
  calculateUserXP() {
    let xp = 0;
    for (const key in this.state.completedTasks) {
      if (this.state.completedTasks[key]) {
        const [wNum, tIdx] = key.split('-').map(Number);
        const week = WEEKS.find(w => w.week === wNum);
        if (week && week.tasks[tIdx]) {
          xp += XP_PER_TASK[week.tasks[tIdx].cat] || 5;
        }
      }
    }
    return xp;
  },

  calculateJPMXP() {
    const currentWeek = this.getCurrentWeek();
    return Math.round(currentWeek * JPM_XP_PER_WEEK);
  },

  countCompletedTasks() {
    return Object.values(this.state.completedTasks).filter(Boolean).length;
  },

  countTotalTasks() {
    return WEEKS.reduce((s, w) => s + w.tasks.length, 0);
  },

  // ─── STREAK ─────────────────────────────────────────────────
  updateStreak() {
    const today = this.getTodayKey();
    const last = this.state.streak.lastDate;

    if (this.hasActivityToday()) {
      if (last === today) return; // Déjà compté
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;

      if (last === yKey) {
        this.state.streak.current += 1;
      } else if (last !== today) {
        this.state.streak.current = 1;
      }
      this.state.streak.lastDate = today;
      this.saveState();
    } else if (last && last !== today) {
      // Si dernière activité pas hier ni aujourd'hui, reset
      const lastDate = new Date(last);
      const diffDays = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        this.state.streak.current = 0;
        this.saveState();
      }
    }
  },

  hasActivityToday() {
    const today = this.getTodayKey();
    if (this.state.journal[today]) return true;
    // Vérifier si une tâche a été cochée aujourd'hui (on track la date via state ext)
    return false; // Simplification : la cochage d'aujourd'hui n'est pas tracké dans le passé
  },

  // ─── RENDER ─────────────────────────────────────────────────
  render() {
    this.renderTopbar();
    this.renderDashboard();
    this.renderTasks();
    this.renderJournal();
    this.renderTracker();
  },

  renderTopbar() {
    const week = this.getCurrentWeek();
    const weekObj = WEEKS.find(w => w.week === week);
    document.getElementById('topWeekPill').textContent = `SEMAINE ${week}`;
    document.getElementById('topDateLine').textContent =
      `${this.formatDate(new Date())} · ${weekObj ? weekObj.phase : '—'}`;
  },

  renderDashboard() {
    const userXP = this.calculateUserXP();
    const jpmXP = this.calculateJPMXP();
    const maxXP = Math.max(userXP, jpmXP, 100);

    document.getElementById('userXP').textContent = userXP.toLocaleString();
    document.getElementById('xpProgress').textContent =
      `${Math.round((userXP / TOTAL_PLAN_XP) * 100)}% du parcours complété`;

    document.getElementById('userBar').style.width = `${(userXP / maxXP) * 100}%`;
    document.getElementById('jpmBar').style.width = `${(jpmXP / maxXP) * 100}%`;
    document.getElementById('userBarVal').textContent = userXP;
    document.getElementById('jpmBarVal').textContent = jpmXP;

    const diff = userXP - jpmXP;
    const vsLabel = document.getElementById('vsLabel');
    const statusEl = document.getElementById('compareStatus');

    if (diff >= 50) {
      vsLabel.textContent = `+${diff} XP`;
      vsLabel.style.color = '#34D399';
      statusEl.className = 'compare-status ahead';
      statusEl.textContent = `🚀 Tu es ${diff} XP devant le stagiaire JPM moyen. Excellent rythme.`;
    } else if (diff <= -50) {
      vsLabel.textContent = `${diff} XP`;
      vsLabel.style.color = '#FB7185';
      statusEl.className = 'compare-status behind';
      statusEl.textContent = `⚠️ Tu es ${Math.abs(diff)} XP derrière. Rattrape avec quelques tâches cette semaine.`;
    } else {
      vsLabel.textContent = `≈ JPM`;
      vsLabel.style.color = '#A78BFA';
      statusEl.className = 'compare-status on-track';
      statusEl.textContent = `🎯 Tu es au niveau du stagiaire JPM moyen. Continue !`;
    }

    document.getElementById('streakValue').textContent = this.state.streak.current;
    document.getElementById('tasksCompleted').textContent = this.countCompletedTasks();
    document.getElementById('totalTasks').textContent = this.countTotalTasks();
    document.getElementById('currentWeekDisp').textContent = this.getCurrentWeek();
    document.getElementById('contactsCount').textContent = this.state.contacts.length;

    const gpa = this.calculateGPA();
    document.getElementById('gpaCurrent').textContent = gpa > 0 ? gpa.toFixed(2) : '—';

    this.renderDeadlines();
  },

  renderDeadlines() {
    const container = document.getElementById('deadlinesList');
    const now = new Date();
    const upcoming = KEY_DEADLINES
      .map(d => ({ ...d, dateObj: new Date(d.date) }))
      .filter(d => d.dateObj > now)
      .sort((a, b) => a.dateObj - b.dateObj)
      .slice(0, 5);

    if (upcoming.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="icon">🎉</div><div class="text">Toutes les échéances sont passées !</div></div>';
      return;
    }

    container.innerHTML = upcoming.map(d => {
      const days = Math.ceil((d.dateObj - now) / (1000 * 60 * 60 * 24));
      const urgencyClass = days <= 7 ? 'urgent' : days <= 30 ? '' : 'far';
      return `
        <div class="deadline-card">
          <div class="deadline-icon">${d.icon}</div>
          <div class="deadline-content">
            <div class="deadline-label">${d.label}</div>
            <div class="deadline-date">${this.formatDate(d.dateObj)}</div>
          </div>
          <div class="deadline-days ${urgencyClass}">J-${days}</div>
        </div>
      `;
    }).join('');
  },

  renderTasks() {
    const nav = document.getElementById('weekNav');
    const currentWeek = this.getCurrentWeek();

    nav.innerHTML = WEEKS.map(w => {
      const weekTasks = w.tasks.length;
      const completedInWeek = w.tasks.filter((_, i) =>
        this.state.completedTasks[`${w.week}-${i}`]
      ).length;
      const isCompleted = completedInWeek === weekTasks && weekTasks > 0;
      const isCurrent = w.week === this.state.selectedWeek;
      const isToday = w.week === currentWeek;

      let cls = 'week-nav-btn';
      if (isCurrent) cls += ' current';
      if (isCompleted) cls += ' completed';
      if (isToday && !isCurrent) cls += ' has-tasks';

      return `<button class="${cls}" onclick="App.selectWeek(${w.week})">S${w.week}</button>`;
    }).join('');

    // Auto-scroll vers la semaine courante
    setTimeout(() => {
      const currentBtn = nav.querySelector('.current');
      if (currentBtn) currentBtn.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    }, 100);

    this.renderTaskList();
  },

  renderTaskList() {
    const week = WEEKS.find(w => w.week === this.state.selectedWeek);
    if (!week) return;

    const weekStart = this.getWeekStartDate(week.week);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    document.getElementById('weekHeaderInfo').innerHTML = `
      <div class="week-focus">${week.focus}</div>
      <div class="week-meta">${week.phase} · ${week.month} · ${this.formatDate(weekStart)} → ${this.formatDate(weekEnd)}</div>
    `;

    const list = document.getElementById('tasksList');
    list.innerHTML = week.tasks.map((task, i) => {
      const key = `${week.week}-${i}`;
      const done = this.state.completedTasks[key];
      const cat = CATEGORIES[task.cat];
      const xp = XP_PER_TASK[task.cat] || 5;

      return `
        <div class="task-card ${done ? 'done' : ''}" onclick="App.toggleTask(${week.week}, ${i})">
          <div class="task-checkbox">${done ? '✓' : ''}</div>
          <div class="task-content">
            <span class="task-cat" style="background: ${cat.color}22; color: ${cat.color};">
              ${cat.icon} ${cat.label}
            </span>
            <div class="task-text">${task.task}</div>
            <div class="task-xp">+${xp} XP</div>
          </div>
        </div>
      `;
    }).join('');
  },

  selectWeek(weekNum) {
    this.state.selectedWeek = weekNum;
    this.saveState();
    this.renderTasks();
  },

  toggleTask(weekNum, taskIdx) {
    const key = `${weekNum}-${taskIdx}`;
    this.state.completedTasks[key] = !this.state.completedTasks[key];
    this.saveState();

    // Update streak si tâche cochée aujourd'hui
    if (this.state.completedTasks[key]) {
      const today = this.getTodayKey();
      if (this.state.streak.lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;

        if (this.state.streak.lastDate === yKey) {
          this.state.streak.current += 1;
        } else {
          this.state.streak.current = 1;
        }
        this.state.streak.lastDate = today;
      }
      this.saveState();
    }

    this.render();
  },

  // ─── JOURNAL ────────────────────────────────────────────────
  renderJournal() {
    const today = this.getTodayKey();
    const todayEntry = this.state.journal[today] || {};

    if (todayEntry.mood) {
      document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.mood == todayEntry.mood);
      });
    }
    if (todayEntry.energy) {
      document.getElementById('energySlider').value = todayEntry.energy;
      document.getElementById('energyValue').textContent = todayEntry.energy;
    }
    if (todayEntry.text) {
      document.getElementById('journalText').value = todayEntry.text;
    }

    const currentWeek = this.getCurrentWeek();
    if (this.state.weekGoals[currentWeek]) {
      document.getElementById('weekGoals').value = this.state.weekGoals[currentWeek];
    }
  },

  saveJournal() {
    const today = this.getTodayKey();
    const selectedMood = document.querySelector('.mood-btn.selected');
    this.state.journal[today] = {
      mood: selectedMood ? selectedMood.dataset.mood : null,
      energy: document.getElementById('energySlider').value,
      text: document.getElementById('journalText').value
    };
    this.saveState();

    // Update streak
    if (this.state.streak.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
      this.state.streak.current = (this.state.streak.lastDate === yKey) ? this.state.streak.current + 1 : 1;
      this.state.streak.lastDate = today;
      this.saveState();
    }

    this.toast('💾 Journée enregistrée !');
    this.renderDashboard();
  },

  saveWeekGoals() {
    const week = this.getCurrentWeek();
    this.state.weekGoals[week] = document.getElementById('weekGoals').value;
    this.saveState();
    this.toast('🎯 Objectifs enregistrés !');
  },

  // ─── TRACKER (Réseau + GPA) ────────────────────────────────
  renderTracker() {
    this.renderContacts();
    this.renderCourses();
  },

  renderContacts() {
    const list = document.getElementById('contactsList');
    if (this.state.contacts.length === 0) {
      list.innerHTML = '<div class="empty-state"><div class="icon">🤝</div><div class="text">Aucun contact encore.<br>Ajoute tes premiers contacts LinkedIn IB.</div></div>';
      return;
    }
    list.innerHTML = this.state.contacts.map((c, i) => `
      <div class="contact-card" onclick="App.editContact(${i})">
        <div class="contact-name">${c.name}</div>
        <div class="contact-info">${c.position || ''} · ${c.company || ''}</div>
        <div class="contact-info">${c.school || ''}</div>
        <span class="contact-status">${c.status || 'à contacter'}</span>
      </div>
    `).join('');
  },

  renderCourses() {
    const list = document.getElementById('coursesList');
    if (this.state.courses.length === 0) {
      list.innerHTML = '<div class="empty-state"><div class="icon">📚</div><div class="text">Ajoute tes cours HSG pour suivre ton GPA prévisionnel.</div></div>';
      document.getElementById('gpaDisplay').textContent = '—';
      return;
    }
    list.innerHTML = this.state.courses.map((c, i) => `
      <div class="gpa-input-group">
        <div class="gpa-course-name">${c.name}</div>
        <input type="number" class="gpa-input" min="1" max="6" step="0.25"
          value="${c.currentGrade || ''}" placeholder="Note (1-6)"
          onchange="App.updateCourse(${i}, this.value)">
      </div>
    `).join('');

    const gpa = this.calculateGPA();
    document.getElementById('gpaDisplay').textContent = gpa > 0 ? gpa.toFixed(2) : '—';
  },

  calculateGPA() {
    const valid = this.state.courses.filter(c => c.currentGrade > 0);
    if (valid.length === 0) return 0;
    return valid.reduce((s, c) => s + parseFloat(c.currentGrade), 0) / valid.length;
  },

  addContact() {
    this.showModal({
      title: 'Nouveau contact',
      fields: [
        { name: 'name', label: 'Nom complet', type: 'text', required: true },
        { name: 'company', label: 'Banque / Entreprise', type: 'text' },
        { name: 'position', label: 'Position (Analyst, VP, MD)', type: 'text' },
        { name: 'school', label: 'École', type: 'text' },
        { name: 'status', label: 'Statut', type: 'select',
          options: ['à contacter', 'message envoyé', 'coffee chat fait', 'champion'] },
        { name: 'notes', label: 'Notes', type: 'textarea' }
      ],
      onSave: (data) => {
        this.state.contacts.push(data);
        this.saveState();
        this.renderTracker();
        this.renderDashboard();
      }
    });
  },

  editContact(idx) {
    const c = this.state.contacts[idx];
    this.showModal({
      title: 'Modifier le contact',
      fields: [
        { name: 'name', label: 'Nom complet', type: 'text', value: c.name, required: true },
        { name: 'company', label: 'Banque / Entreprise', type: 'text', value: c.company },
        { name: 'position', label: 'Position', type: 'text', value: c.position },
        { name: 'school', label: 'École', type: 'text', value: c.school },
        { name: 'status', label: 'Statut', type: 'select', value: c.status,
          options: ['à contacter', 'message envoyé', 'coffee chat fait', 'champion'] },
        { name: 'notes', label: 'Notes', type: 'textarea', value: c.notes }
      ],
      onSave: (data) => {
        this.state.contacts[idx] = data;
        this.saveState();
        this.renderTracker();
      },
      onDelete: () => {
        this.state.contacts.splice(idx, 1);
        this.saveState();
        this.renderTracker();
        this.renderDashboard();
      }
    });
  },

  addCourse() {
    this.showModal({
      title: 'Nouveau cours',
      fields: [
        { name: 'name', label: 'Nom du cours', type: 'text', required: true,
          placeholder: 'ex: Accounting' },
        { name: 'currentGrade', label: 'Note actuelle (1-6, optionnel)', type: 'number' }
      ],
      onSave: (data) => {
        if (data.currentGrade) data.currentGrade = parseFloat(data.currentGrade);
        this.state.courses.push(data);
        this.saveState();
        this.renderTracker();
        this.renderDashboard();
      }
    });
  },

  updateCourse(idx, value) {
    this.state.courses[idx].currentGrade = parseFloat(value) || 0;
    this.saveState();
    this.renderTracker();
    this.renderDashboard();
  },

  // ─── MODAL ──────────────────────────────────────────────────
  showModal({ title, fields, onSave, onDelete }) {
    const bg = document.getElementById('modalBg');
    const content = document.getElementById('modalContent');

    const fieldsHTML = fields.map(f => {
      if (f.type === 'select') {
        return `
          <select class="modal-select" name="${f.name}">
            ${f.options.map(o => `<option value="${o}" ${f.value === o ? 'selected' : ''}>${o}</option>`).join('')}
          </select>
        `;
      } else if (f.type === 'textarea') {
        return `<textarea class="modal-input" name="${f.name}" placeholder="${f.label}" rows="3">${f.value || ''}</textarea>`;
      } else {
        return `<input class="modal-input" name="${f.name}" type="${f.type}" placeholder="${f.placeholder || f.label}" value="${f.value || ''}" ${f.required ? 'required' : ''}>`;
      }
    }).join('');

    content.innerHTML = `
      <div class="modal-title">${title}</div>
      <form id="modalForm">${fieldsHTML}</form>
      <div class="modal-actions">
        ${onDelete ? '<button class="modal-btn secondary" onclick="App.deleteFromModal()">🗑️ Supprimer</button>' : ''}
        <button class="modal-btn secondary" onclick="App.closeModal()">Annuler</button>
        <button class="modal-btn primary" onclick="App.saveFromModal()">Enregistrer</button>
      </div>
    `;
    this._modalOnSave = onSave;
    this._modalOnDelete = onDelete;
    bg.classList.add('show');
  },

  saveFromModal() {
    const form = document.getElementById('modalForm');
    const data = {};
    form.querySelectorAll('[name]').forEach(el => {
      data[el.name] = el.value;
    });
    if (this._modalOnSave) this._modalOnSave(data);
    this.closeModal();
  },

  deleteFromModal() {
    if (this._modalOnDelete && confirm('Supprimer ?')) {
      this._modalOnDelete();
      this.closeModal();
    }
  },

  closeModal() {
    document.getElementById('modalBg').classList.remove('show');
  },

  // ─── UI EVENTS ──────────────────────────────────────────────
  bindEvents() {
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const view = tab.dataset.view;
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`view-${view}`).classList.add('active');

        // Re-render au changement de tab pour s'assurer que tout est à jour
        if (view === 'tasks') this.renderTasks();
        if (view === 'journal') this.renderJournal();
        if (view === 'tracker') this.renderTracker();
      });
    });

    // Mood selector
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Energy slider
    const slider = document.getElementById('energySlider');
    slider.addEventListener('input', () => {
      document.getElementById('energyValue').textContent = slider.value;
    });

    // Modal click outside to close
    document.getElementById('modalBg').addEventListener('click', (e) => {
      if (e.target.id === 'modalBg') this.closeModal();
    });
  },

  // ─── TOAST ──────────────────────────────────────────────────
  toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
      position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
      background: rgba(167, 139, 250, 0.95); color: #fff;
      padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 600;
      z-index: 300; box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      animation: fadeIn 0.3s;
    `;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2000);
  },
};

// ─── SERVICE WORKER (PWA) ─────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW failed:', err));
  });
}

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => App.init());
