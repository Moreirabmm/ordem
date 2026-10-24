/**
 * Aura • Sistema de Produtividade Estilo Apple
 * Zero dependências • 100% Offline-First • Design Human Interface
 */

// =============================================================================
// 1. DADOS INICIAIS (SEED DATA)
// =============================================================================

function generateInitialHabitHistory(streakDays = 3, successRate = 0.8) {
  const history = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    if (i < streakDays) {
      history[dateStr] = true;
    } else {
      history[dateStr] = ((i * 7 + streakDays) % 10) < (successRate * 10);
    }
  }
  return history;
}

const INITIAL_DATA = {
  theme: 'dark',
  water: 1250, // ml
  waterGoal: 2500,
  tasks: [
    { id: 't1', title: 'Definir prioridades estratégicas da semana', area: 'work', priority: 'high', completed: true, date: getTodayString() },
    { id: 't2', title: 'Revisar proposta e entregar versão final', area: 'work', priority: 'normal', completed: false, date: getTodayString() },
    { id: 't3', title: 'Treino de força / mobilidade (45 min)', area: 'health', priority: 'high', completed: false, date: getTodayString() },
    { id: 't4', title: 'Auditoria de gastos e aporte da reserva', area: 'finance', priority: 'normal', completed: true, date: getTodayString() },
    { id: 't5', title: 'Ler 20 páginas do livro atual', area: 'study', priority: 'normal', completed: false, date: getTodayString() },
    { id: 't6', title: 'Rotina noturna sem telas 1h antes de dormir', area: 'personal', priority: 'low', completed: false, date: getTodayString() }
  ],
  habits: [
    { id: 'h1', title: 'Beber 2.5L de água', area: 'health', streak: 6, bestStreak: 18, completedDays: [true, true, true, true, true, false, true], history: generateInitialHabitHistory(6, 0.85) },
    { id: 'h2', title: 'Treino / Exercício', area: 'health', streak: 4, bestStreak: 12, completedDays: [true, false, true, true, true, true, false], history: generateInitialHabitHistory(4, 0.70) },
    { id: 'h3', title: 'Leitura focada (20 min)', area: 'study', streak: 12, bestStreak: 24, completedDays: [true, true, true, true, true, true, true], history: generateInitialHabitHistory(12, 0.90) },
    { id: 'h4', title: 'Meditação ou respiração', area: 'personal', streak: 3, bestStreak: 9, completedDays: [false, true, true, true, false, false, false], history: generateInitialHabitHistory(3, 0.60) },
    { id: 'h5', title: 'Foco profundo sem notificações', area: 'work', streak: 5, bestStreak: 15, completedDays: [true, true, false, true, true, true, false], history: generateInitialHabitHistory(5, 0.75) }
  ],
  health: {
    nutrition: {
      calorieGoal: 2200,
      currentCalories: 1650,
      proteinGoal: 150,
      currentProtein: 125,
      carbGoal: 220,
      currentCarb: 170,
      fatGoal: 65,
      currentFat: 48,
      meals: [
        { id: 'm1', name: 'Café da Manhã', items: '3 ovos mexidos, aveia com morangos e café preto', calories: 480, completed: true },
        { id: 'm2', name: 'Almoço', items: 'Frango grelhado 180g, arroz integral, feijão e salada', calories: 650, completed: true },
        { id: 'm3', name: 'Lanche da Tarde', items: 'Iogurte natural proteico com pasta de amendoim', calories: 320, completed: true },
        { id: 'm4', name: 'Jantar', items: 'Filé de salmão ou carne magra com legumes grelhados', calories: 520, completed: false }
      ]
    },
    workout: {
      activeRoutine: 'Treino A (Peito & Ombro)',
      routines: [
        { id: 'r1', name: 'Treino A (Peito & Ombro)', days: 'Segunda & Quinta' },
        { id: 'r2', name: 'Treino B (Costas & Bíceps)', days: 'Terça & Sexta' },
        { id: 'r3', name: 'Treino C (Pernas & Abdômen)', days: 'Quarta & Sábado' }
      ],
      exercises: [
        { id: 'e1', routine: 'Treino A (Peito & Ombro)', name: 'Supino Reto com Barra', setsReps: '4x 8-10', weight: 82 },
        { id: 'e2', routine: 'Treino A (Peito & Ombro)', name: 'Supino Inclinado com Halteres', setsReps: '3x 10-12', weight: 30 },
        { id: 'e3', routine: 'Treino A (Peito & Ombro)', name: 'Desenvolvimento Militar', setsReps: '4x 8-10', weight: 46 },
        { id: 'e4', routine: 'Treino A (Peito & Ombro)', name: 'Elevação Lateral', setsReps: '4x 12-15', weight: 14 },
        { id: 'e5', routine: 'Treino A (Peito & Ombro)', name: 'Tríceps Corda na Polia', setsReps: '3x 12-15', weight: 35 },
        { id: 'e6', routine: 'Treino B (Costas & Bíceps)', name: 'Puxada Frontal Aberta', setsReps: '4x 8-10', weight: 75 },
        { id: 'e7', routine: 'Treino B (Costas & Bíceps)', name: 'Remada Baixa no Triângulo', setsReps: '4x 10-12', weight: 70 },
        { id: 'e8', routine: 'Treino B (Costas & Bíceps)', name: 'Rosca Direta com Barra W', setsReps: '3x 10-12', weight: 32 },
        { id: 'e9', routine: 'Treino C (Pernas & Abdômen)', name: 'Agachamento Livre', setsReps: '4x 8-10', weight: 105 },
        { id: 'e10', routine: 'Treino C (Pernas & Abdômen)', name: 'Leg Press 45°', setsReps: '4x 10-12', weight: 240 },
        { id: 'e11', routine: 'Treino C (Pernas & Abdômen)', name: 'Cadeira Extensora', setsReps: '3x 12-15', weight: 65 }
      ]
    },
    running: {
      weeklyGoalKm: 20,
      currentWeeklyKm: 14.5,
      sessions: [
        { id: 'r1', date: 'Hoje', distanceKm: 5.2, durationMin: 27, pace: '5:11 /km', calories: 340, feeling: '🔥 Excelente ritmo constante' },
        { id: 'r2', date: 'Anteontem', distanceKm: 6.0, durationMin: 32, pace: '5:20 /km', calories: 410, feeling: '💪 Forte na subida final' },
        { id: 'r3', date: '4 dias atrás', distanceKm: 3.3, durationMin: 18, pace: '5:27 /km', calories: 220, feeling: '⚡ Trote regenerativo leve' }
      ]
    }
  },
  workKanban: [
    { id: 'k1', title: 'Apresentação executiva de fechamento de trimestre', project: 'Estratégia', priority: 'high', due: 'Sexta-feira', status: 'in_progress' },
    { id: 'k2', title: 'Alinhamento de cronograma com clientes-chave', project: 'Operações', priority: 'normal', due: 'Quinta-feira', status: 'in_progress' },
    { id: 'k3', title: 'Mapear requisitos do novo design system', project: 'Produto', priority: 'high', due: 'Hoje', status: 'todo' },
    { id: 'k4', title: 'Auditoria de performance e testes de usabilidade', project: 'Qualidade', priority: 'normal', due: 'Amanhã', status: 'todo' },
    { id: 'k5', title: 'Revisão técnica de documentação e contratos', project: 'Jurídico', priority: 'low', due: 'Sexta-feira', status: 'review' },
    { id: 'k6', title: 'Kickoff do projeto com a equipe e stakeholders', project: 'Liderança', priority: 'normal', due: 'Segunda-feira', status: 'done' }
  ],
  finance: {
    transactions: [
      { id: 'f1', description: 'Salário / Pró-labore', type: 'income', amount: 7500.00, category: 'Trabalho', date: '2026-10-05' },
      { id: 'f2', description: 'Consultoria Estratégica', type: 'income', amount: 1800.00, category: 'Trabalho', date: '2026-10-18' },
      { id: 'f3', description: 'Aluguel & Condomínio', type: 'expense', amount: 2200.00, category: 'Moradia', date: '2026-10-10' },
      { id: 'f4', description: 'Supermercado Semanal', type: 'expense', amount: 850.00, category: 'Alimentação', date: '2026-10-12' },
      { id: 'f5', description: 'Internet Fibra & Telefone', type: 'expense', amount: 210.00, category: 'Moradia', date: '2026-10-15' },
      { id: 'f6', description: 'Combustível / Transporte', type: 'expense', amount: 320.00, category: 'Transporte', date: '2026-10-19' },
      { id: 'f7', description: 'Aporte Tesouro Direto & FIIs', type: 'expense', amount: 1500.00, category: 'Investimentos', date: '2026-10-20' },
      { id: 'f8', description: 'Jantar Restaurante', type: 'expense', amount: 180.00, category: 'Lazer', date: '2026-10-22' }
    ]
  },
  knowledge: {
    books: [
      { id: 'b1', title: 'Essencialismo', author: 'Greg McKeown', totalPages: 272, currentPage: 184, status: 'reading', category: 'Produtividade', lastInsight: 'A capacidade de escolher não pode ser retirada, apenas esquecida.', lastReadDate: 'Hoje' },
      { id: 'b2', title: 'Hábitos Atômicos', author: 'James Clear', totalPages: 320, currentPage: 320, status: 'completed', category: 'Desenvolvimento', lastInsight: 'Você não se eleva ao nível dos seus objetivos; você cai ao nível dos seus sistemas.', lastReadDate: 'Semana passada' },
      { id: 'b3', title: 'Deep Work (Trabalho Focado)', author: 'Cal Newport', totalPages: 290, currentPage: 95, status: 'reading', category: 'Foco & Carreira', lastInsight: 'O esforço profundo gera valor raro e desenvolve habilidades difíceis de replicar.', lastReadDate: 'Ontem' },
      { id: 'b4', title: 'A Psicologia Financeira', author: 'Morgan Housel', totalPages: 304, currentPage: 0, status: 'want_to_read', category: 'Finanças', lastInsight: '', lastReadDate: 'Na fila' }
    ],
    courses: [
      { id: 'c1', title: 'Design de Interfaces & Human Interface', platform: 'Apple Developer Guild', totalLessons: 32, currentLesson: 22, status: 'in_progress', category: 'Design' },
      { id: 'c2', title: 'Gestão Ágil de Projetos & Liderança', platform: 'Coursera', totalLessons: 20, currentLesson: 20, status: 'completed', category: 'Gestão' },
      { id: 'c3', title: 'Inteligência Artificial Aplicada', platform: 'DeepLearning.AI', totalLessons: 28, currentLesson: 12, status: 'in_progress', category: 'Tecnologia' }
    ]
  },
  calendar: {
    googleCalendarId: '',
    viewMode: 'WEEK',
    events: [
      { id: 'ev1', title: 'Alinhamento Semanal & Planejamento', date: getTodayString(), time: '09:30', duration: '45m', type: 'Trabalho' },
      { id: 'ev2', title: 'Treino de Força / Corrida no Parque', date: getTodayString(), time: '17:30', duration: '1h', type: 'Saúde' },
      { id: 'ev3', title: 'Jantar em Família & Tempo Livre', date: getTodayString(), time: '20:00', duration: '2h', type: 'Pessoal' }
    ]
  },
  focus: {
    activeTaskId: 'ft1',
    tasks: [
      { id: 'ft1', title: 'Estruturar arquitetura e lógica do sistema', cycles: 3, completed: false },
      { id: 'ft2', title: 'Revisar entregáveis da semana e kanban', cycles: 2, completed: false },
      { id: 'ft3', title: 'Leitura focada e anotação de insights', cycles: 1, completed: true }
    ],
    sessions: [
      { id: 'fs1', date: getTodayString(), time: '14:30', taskTitle: 'Estruturar arquitetura e lógica do sistema', durationMinutes: 25, mode: 'Foco 25m' },
      { id: 'fs2', date: getTodayString(), time: '11:00', taskTitle: 'Estruturar arquitetura e lógica do sistema', durationMinutes: 25, mode: 'Foco 25m' },
      { id: 'fs3', date: getTodayString(), time: '09:40', taskTitle: 'Revisar entregáveis da semana e kanban', durationMinutes: 50, mode: 'Foco 50m' },
      { id: 'fs4', date: getPastDateString(1), time: '16:00', taskTitle: 'Leitura focada e anotação de insights', durationMinutes: 25, mode: 'Foco 25m' },
      { id: 'fs5', date: getPastDateString(1), time: '14:15', taskTitle: 'Revisar entregáveis da semana e kanban', durationMinutes: 25, mode: 'Foco 25m' },
      { id: 'fs6', date: getPastDateString(2), time: '15:30', taskTitle: 'Estruturar arquitetura e lógica do sistema', durationMinutes: 50, mode: 'Foco 50m' },
      { id: 'fs7', date: getPastDateString(3), time: '10:00', taskTitle: 'Planejamento de demandas', durationMinutes: 25, mode: 'Foco 25m' },
      { id: 'fs8', date: getPastDateString(4), time: '16:30', taskTitle: 'Auditoria de processos', durationMinutes: 25, mode: 'Foco 25m' }
    ]
  },
  mindsetQuotes: [
    '"A simplicidade é o grau máximo de sofisticação." — Steve Jobs',
    '"Foco significa dizer não a centenas de outras boas ideias." — Steve Jobs',
    '"Faça o que importa hoje. O resto é ruído." — Marco Aurélio',
    '"Pequenos hábitos diários produzem transformações extraordinárias."',
    '"A consistência bate a intensidade no longo prazo."'
  ]
};

// Life areas metadata
const LIFE_AREAS = {
  work: { label: 'Trabalho & Projetos', color: '#0A84FF', pillClass: 'pill-work', desc: 'Foco de carreira, entregas importantes e iniciativas estratégicas.' },
  health: { label: 'Saúde & Bem-estar', color: '#30D158', pillClass: 'pill-health', desc: 'Corpo, energia, nutrição, treino e descanso restaurador.' },
  finance: { label: 'Finanças Pessoais', color: '#FFD60A', pillClass: 'pill-finance', desc: 'Gestão de orçamento, aportes inteligentes e liberdade financeira.' },
  study: { label: 'Conhecimento & Mente', color: '#BF5AF2', pillClass: 'pill-study', desc: 'Leitura, aprendizados contínuos, clareza mental e criatividade.' },
  personal: { label: 'Vida Pessoal & Rotina', color: '#FF9F0A', pillClass: 'pill-personal', desc: 'Rituais diários, conexões com pessoas queridas e momentos de paz.' }
};

// =============================================================================
// 2. STATE MANAGER & PERSISTÊNCIA
// =============================================================================

class Store {
  constructor() {
    this.storageKey = 'aura_productivity_v1';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.health) {
          parsed.health = JSON.parse(JSON.stringify(INITIAL_DATA.health));
        }
        if (parsed.health && parsed.health.workout && Array.isArray(parsed.health.workout.routines)) {
          if (typeof parsed.health.workout.routines[0] === 'string') {
            const defaultDays = ['Segunda & Quinta', 'Terça & Sexta', 'Quarta & Sábado', 'Finais de Semana', 'Dias Flexíveis'];
            parsed.health.workout.routines = parsed.health.workout.routines.map((r, i) => ({
              id: 'r_' + (i + 1),
              name: r,
              days: defaultDays[i] || 'Dias flexíveis'
            }));
          }
        }
        if (!parsed.workKanban) {
          parsed.workKanban = JSON.parse(JSON.stringify(INITIAL_DATA.workKanban));
        }
        if (!parsed.finance || !parsed.finance.transactions) {
          parsed.finance = JSON.parse(JSON.stringify(INITIAL_DATA.finance));
        }
        if (!parsed.knowledge || !parsed.knowledge.books) {
          parsed.knowledge = JSON.parse(JSON.stringify(INITIAL_DATA.knowledge));
        }
        if (!parsed.calendar || !parsed.calendar.events) {
          parsed.calendar = JSON.parse(JSON.stringify(INITIAL_DATA.calendar));
        }
        if (!parsed.focus || !parsed.focus.tasks) {
          parsed.focus = JSON.parse(JSON.stringify(INITIAL_DATA.focus));
        }
        if (parsed.habits && Array.isArray(parsed.habits)) {
          parsed.habits.forEach(h => {
            if (!h.bestStreak) h.bestStreak = Math.max(h.streak || 0, Math.round((h.streak || 0) * 1.5) || 7);
            if (!h.history || typeof h.history !== 'object') {
              h.history = generateInitialHabitHistory(h.streak || 3, 0.75);
            }
          });
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Erro ao carregar dados do localStorage:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error('Erro ao salvar dados no localStorage:', e);
    }
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.save();
  }
}

const store = new Store();

// =============================================================================
// 3. AUDIO SYNTHESIZER (Apple-style subtle micro-chimes via Web Audio)
// =============================================================================

class AudioFeedback {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {}
  }

  playSuccessChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.1, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.36);
      });
    } catch (e) {}
  }
}

const sound = new AudioFeedback();

// =============================================================================
// 4. POMODORO TIMER LOGIC
// =============================================================================

class PomodoroTimer {
  constructor(updateCallback, completeCallback) {
    this.totalSeconds = 25 * 60;
    this.remainingSeconds = 25 * 60;
    this.timerId = null;
    this.isRunning = false;
    this.onUpdate = updateCallback;
    this.onComplete = completeCallback;
  }

  setDuration(minutes) {
    this.pause();
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.onUpdate(this.remainingSeconds, this.totalSeconds);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.timerId = setInterval(() => {
      this.remainingSeconds--;
      if (this.remainingSeconds <= 0) {
        this.pause();
        this.remainingSeconds = 0;
        this.onUpdate(0, this.totalSeconds);
        if (this.onComplete) this.onComplete();
      } else {
        this.onUpdate(this.remainingSeconds, this.totalSeconds);
      }
    }, 1000);
  }

  pause() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.onUpdate(this.remainingSeconds, this.totalSeconds);
  }
}

// =============================================================================
// 5. APP CONTROLLER & DOM BINDINGS
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Theme Setup
  applyTheme(store.state.theme);

  // Set greeting & current date
  updateGreeting();

  // Setup Pomodoro Timer
  const timerRing = document.getElementById('timerProgressRing');
  const timerDigits = document.getElementById('timerDigits');
  const timerBtnText = document.getElementById('timerBtnText');
  const timerPlayIcon = document.getElementById('timerPlayIcon');
  const timerPauseIcon = document.getElementById('timerPauseIcon');
  const timerStatusSubtext = document.getElementById('timerStatusSubtext');
  const circumference = 2 * Math.PI * 110; // r = 110 => ~691.15

  const pomodoro = new PomodoroTimer(
    (remaining, total) => {
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      timerDigits.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      
      const progress = (total - remaining) / total;
      const offset = circumference - (progress * circumference);
      timerRing.style.strokeDashoffset = offset;
    },
    () => {
      sound.playSuccessChime();
      onPomodoroCompleted();
      updateTimerUI(false);
    }
  );

  function onPomodoroCompleted() {
    const durMins = Math.round(pomodoro.totalSeconds / 60);
    const modeTag = (document.getElementById('timerModeTag').textContent || 'FOCO').toUpperCase();
    const isBreak = modeTag.includes('PAUSA');

    if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
    if (!store.state.focus.tasks) store.state.focus.tasks = [];
    if (!store.state.focus.sessions) store.state.focus.sessions = [];

    let activeTask = store.state.focus.tasks.find(t => t.id === store.state.focus.activeTaskId);

    if (!isBreak) {
      if (activeTask) {
        activeTask.cycles = (activeTask.cycles || 0) + 1;
      }

      const sessionEntry = {
        id: 'fs_' + Date.now(),
        date: getTodayString(),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        taskTitle: activeTask ? activeTask.title : 'Foco Geral / Concentração',
        durationMinutes: durMins,
        mode: modeTag
      };

      store.state.focus.sessions.unshift(sessionEntry);
      store.save();
      renderFocusSection();
      timerStatusSubtext.textContent = `🎉 Período de ${durMins} min concluído e registrado!`;
    } else {
      timerStatusSubtext.textContent = '☕ Pausa concluída! Pronto para retomar o foco.';
    }
  }

  function updateTimerUI(running) {
    if (running) {
      timerPlayIcon.classList.add('hidden');
      timerPauseIcon.classList.remove('hidden');
      timerBtnText.textContent = 'Pausar';
      timerStatusSubtext.textContent = 'Foco em andamento...';
    } else {
      timerPlayIcon.classList.remove('hidden');
      timerPauseIcon.classList.add('hidden');
      timerBtnText.textContent = 'Começar';
    }
  }

  document.getElementById('timerToggleBtn').addEventListener('click', () => {
    sound.playPop();
    if (pomodoro.isRunning) {
      pomodoro.pause();
      updateTimerUI(false);
      timerStatusSubtext.textContent = 'Pausado';
    } else {
      pomodoro.start();
      updateTimerUI(true);
    }
  });

  document.getElementById('timerResetBtn').addEventListener('click', () => {
    sound.playPop();
    pomodoro.reset();
    updateTimerUI(false);
    timerStatusSubtext.textContent = 'Pronto para iniciar';
  });

  const manualCycleBtn = document.getElementById('manualCycleBtn');
  if (manualCycleBtn) {
    manualCycleBtn.addEventListener('click', () => {
      sound.playSuccessChime();
      if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
      if (!store.state.focus.tasks) store.state.focus.tasks = [];
      if (!store.state.focus.sessions) store.state.focus.sessions = [];

      let activeTask = store.state.focus.tasks.find(t => t.id === store.state.focus.activeTaskId);
      if (!activeTask && store.state.focus.tasks.length > 0) {
        activeTask = store.state.focus.tasks[0];
        store.state.focus.activeTaskId = activeTask.id;
      }

      if (activeTask) {
        activeTask.cycles = (activeTask.cycles || 0) + 1;
      }

      store.state.focus.sessions.unshift({
        id: 'fs_' + Date.now(),
        date: getTodayString(),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        taskTitle: activeTask ? activeTask.title : 'Período de Foco Registrado',
        durationMinutes: 25,
        mode: 'Foco 25m'
      });

      store.save();
      renderFocusSection();
      timerStatusSubtext.textContent = '+1 🍅 Período registrado com sucesso!';
    });
  }

  // Timer Pills (25m, 50m, 5m, 15m)
  document.querySelectorAll('.timer-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      sound.playPop();
      document.querySelectorAll('.timer-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const time = parseInt(e.currentTarget.dataset.time, 10);
      const mode = e.currentTarget.dataset.mode;
      document.getElementById('timerModeTag').textContent = mode.toUpperCase();
      pomodoro.setDuration(time);
      updateTimerUI(false);
      timerStatusSubtext.textContent = `Pronto para ${mode}`;
    });
  });

  // Render initial interface
  renderAll();

  // Event Listeners: Navigation Tabs
  setupNavigation();

  // Event Listeners: Quick Capture Modal
  setupQuickCaptureModal();

  // Event Listeners: New Habit Modal
  setupNewHabitModal();
  setupHabitHistoryModalEvents();

  // Event Listeners: Settings & Data Modal
  setupSettingsModal();

  // Event Listeners: Health & Fitness Specialized Modals
  setupHealthModals();

  // Event Listeners: Work Kanban Board Modals
  setupKanbanModals();

  // Event Listeners: Personal Finance Spreadsheet Modals
  setupFinanceModals();

  // Event Listeners: Knowledge & Reading Tracker Modals
  setupKnowledgeModals();

  // Event Listeners: Google Calendar & Agenda Modals
  setupCalendarModals();

  // Event Listeners: Focus Tasks & Steppers
  setupFocusTasksEvents();

  // Event Listeners: Water Tracker
  document.getElementById('addWaterBtn').addEventListener('click', () => {
    sound.playPop();
    store.state.water += 250;
    if (store.state.water > 5000) store.state.water = 5000;
    store.save();
    renderWaterTracker();
    renderActivityRings();
  });

  // Event Listeners: Inline Task Adding (Today view)
  const quickTaskInput = document.getElementById('quickTaskInput');
  const quickTaskSubmitBtn = document.getElementById('quickTaskSubmitBtn');
  const quickTaskAreaSelect = document.getElementById('quickTaskAreaSelect');

  function handleQuickTaskAdd() {
    const title = quickTaskInput.value.trim();
    if (!title) return;
    const area = quickTaskAreaSelect.value;
    
    store.state.tasks.unshift({
      id: 't_' + Date.now(),
      title: title,
      area: area,
      priority: 'normal',
      completed: false,
      date: getTodayString()
    });

    quickTaskInput.value = '';
    store.save();
    sound.playPop();
    renderTodayTasks();
    renderActivityRings();
    renderCounts();
  }

  quickTaskSubmitBtn.addEventListener('click', handleQuickTaskAdd);
  quickTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleQuickTaskAdd();
  });

  // Filter Tasks by Area (Segmented Control)
  let currentTaskFilter = 'all';
  document.querySelectorAll('#taskAreaFilter .segment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sound.playPop();
      document.querySelectorAll('#taskAreaFilter .segment-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentTaskFilter = e.currentTarget.dataset.filter;
      renderTodayTasks(currentTaskFilter);
    });
  });

  // Theme Toggle Buttons
  const toggleTheme = () => {
    sound.playPop();
    const newTheme = store.state.theme === 'dark' ? 'light' : 'dark';
    store.state.theme = newTheme;
    store.save();
    applyTheme(newTheme);
  };
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  document.getElementById('mobileThemeToggleBtn').addEventListener('click', toggleTheme);

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // ⌘K or Ctrl+K for quick capture
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openModal('quickCaptureModal');
      document.getElementById('modalTaskInput').focus();
    }
    // D to toggle dark/light theme (when not in an input)
    if (e.key.toLowerCase() === 'd' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      toggleTheme();
    }
    // ESC to close any open modal
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});

// =============================================================================
// 6. RENDER ENGINE
// =============================================================================

function renderAll() {
  renderTodayHabits();
  renderTodayTasks();
  renderWaterTracker();
  renderActivityRings();
  renderCounts();
  renderFullHabits();
  renderFocusSection();
}

/**
 * Render Today's Habit strip
 */
function renderTodayHabits() {
  const container = document.getElementById('todayHabitsList');
  if (!container) return;

  container.innerHTML = '';
  store.state.habits.forEach(habit => {
    const isCompleted = habit.completedDays[habit.completedDays.length - 1];
    const card = document.createElement('div');
    card.className = `habit-quick-card ${isCompleted ? 'completed' : ''}`;
    card.innerHTML = `
      <div class="habit-check-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="habit-info">
        <span class="habit-name">${escapeHtml(habit.title)}</span>
        <span class="habit-streak">🔥 ${habit.streak} dias seguidos</span>
      </div>
    `;

    card.addEventListener('click', () => {
      toggleHabitToday(habit.id);
    });

    container.appendChild(card);
  });
}

/**
 * Render Task List
 */
function renderTodayTasks(filter = 'all') {
  const container = document.getElementById('todayTaskList');
  if (!container) return;

  let filteredTasks = store.state.tasks;
  if (filter !== 'all') {
    filteredTasks = filteredTasks.filter(t => t.area === filter);
  }

  if (filteredTasks.length === 0) {
    container.innerHTML = `<div class="empty-state">Nenhuma ação pendente nesta categoria. Aproveite o momento ou crie uma nova.</div>`;
    return;
  }

  container.innerHTML = '';
  filteredTasks.forEach(task => {
    const areaMeta = LIFE_AREAS[task.area] || { label: task.area, pillClass: 'pill-work' };
    const item = document.createElement('div');
    item.className = `task-item ${task.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="task-check-circle" title="Marcar como concluída">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
        <div class="task-tags">
          <span class="task-area-pill ${areaMeta.pillClass}">${areaMeta.label.split('&')[0].trim()}</span>
          ${task.priority === 'high' ? '<span class="task-priority-high">Alta Prioridade 🔥</span>' : ''}
        </div>
      </div>
      <div class="task-actions">
        <button class="task-delete-btn" title="Excluir">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    // Checkbox toggle
    item.querySelector('.task-check-circle').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTask(task.id);
    });

    // Delete task
    item.querySelector('.task-delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });

    container.appendChild(item);
  });

  // Update pending badge
  const pendingCount = store.state.tasks.filter(t => !t.completed).length;
  const badge = document.getElementById('todayPendingBadge');
  if (badge) badge.textContent = pendingCount;
}

/**
 * Render Water Tracker Bar
 */
function renderWaterTracker() {
  const current = store.state.water;
  const goal = store.state.waterGoal;
  const pct = Math.min(100, Math.round((current / goal) * 100));
  
  const text = document.getElementById('waterCount');
  const bar = document.getElementById('waterProgressBar');
  if (text) text.textContent = current.toLocaleString('pt-BR');
  if (bar) bar.style.width = `${pct}%`;
}

/**
 * Render Concentric Apple Activity Rings
 */
function renderActivityRings() {
  // 1. Ring Work: percentage of work tasks done
  const workTasks = store.state.tasks.filter(t => t.area === 'work');
  const workDone = workTasks.filter(t => t.completed).length;
  const workPct = workTasks.length ? Math.round((workDone / workTasks.length) * 100) : 100;

  // 2. Ring Health: water intake + health tasks completed
  const healthTasks = store.state.tasks.filter(t => t.area === 'health');
  const healthDone = healthTasks.filter(t => t.completed).length;
  const waterPct = Math.min(100, Math.round((store.state.water / store.state.waterGoal) * 100));
  const healthPct = healthTasks.length ? Math.round((waterPct + ((healthDone / healthTasks.length) * 100)) / 2) : waterPct;

  // 3. Ring Habits: today's completed habits
  const totalHabits = store.state.habits.length;
  const habitsDone = store.state.habits.filter(h => h.completedDays[h.completedDays.length - 1]).length;
  const habitsPct = totalHabits ? Math.round((habitsDone / totalHabits) * 100) : 100;

  // Update text values
  document.getElementById('ringWorkVal').textContent = `${workPct}%`;
  document.getElementById('ringHealthVal').textContent = `${healthPct}%`;
  document.getElementById('ringHabitsVal').textContent = `${habitsPct}%`;

  // Animate SVG rings
  // Ring 1: r = 68, circumference = 2 * PI * 68 = 427.26
  const circ1 = 427.26;
  const offset1 = circ1 - (Math.min(100, workPct) / 100 * circ1);
  const ring1 = document.getElementById('ringWork');
  if (ring1) ring1.style.strokeDashoffset = offset1;

  // Ring 2: r = 52, circumference = 2 * PI * 52 = 326.73
  const circ2 = 326.73;
  const offset2 = circ2 - (Math.min(100, healthPct) / 100 * circ2);
  const ring2 = document.getElementById('ringHealth');
  if (ring2) ring2.style.strokeDashoffset = offset2;

  // Ring 3: r = 36, circumference = 2 * PI * 36 = 226.19
  const circ3 = 226.19;
  const offset3 = circ3 - (Math.min(100, habitsPct) / 100 * circ3);
  const ring3 = document.getElementById('ringHabits');
  if (ring3) ring3.style.strokeDashoffset = offset3;

  // Summary pill
  const summary = document.getElementById('daySummaryText');
  if (summary) {
    summary.textContent = `${habitsDone} de ${totalHabits} hábitos concluídos`;
  }
}

/**
 * Render Sidebar Area Counts
 */
function renderCounts() {
  const counts = { work: 0, health: 0, finance: 0, study: 0, personal: 0 };
  store.state.tasks.forEach(t => {
    if (!t.completed && counts[t.area] !== undefined) {
      counts[t.area]++;
    }
  });

  document.getElementById('countWork').textContent = counts.work;
  document.getElementById('countHealth').textContent = counts.health;
  document.getElementById('countFinance').textContent = counts.finance;
  document.getElementById('countStudy').textContent = counts.study;
  document.getElementById('countPersonal').textContent = counts.personal;
}

/**
 * Render Full Habits Tab & History Overview
 */
function renderFullHabits() {
  const container = document.getElementById('allHabitsContainer');
  if (!container) return;

  const habits = store.state.habits || [];

  // Update Overview KPI Strip
  const activeCountEl = document.getElementById('habitsActiveCountVal');
  const todayCountEl = document.getElementById('habitsCompletedTodayVal');
  const todaySubEl = document.getElementById('habitsCompletedTodaySub');
  const avgRateEl = document.getElementById('habitsAvgRateVal');
  const bestStreakEl = document.getElementById('habitsBestStreakOverallVal');
  const bestStreakSub = document.getElementById('habitsBestStreakNameSub');

  const todayCompleted = habits.filter(h => h.completedDays[h.completedDays.length - 1]).length;
  const todayPct = habits.length ? Math.round((todayCompleted / habits.length) * 100) : 0;

  let total30dRatesSum = 0;
  let bestStreakOverall = 0;
  let bestHabitName = 'Nenhum';

  habits.forEach(h => {
    if (!h.bestStreak) h.bestStreak = Math.max(h.streak || 0, 7);
    if (!h.history || typeof h.history !== 'object') {
      h.history = generateInitialHabitHistory(h.streak || 3, 0.75);
    }
    const entries = Object.values(h.history);
    const completedCount = entries.filter(Boolean).length;
    const rate = entries.length ? Math.round((completedCount / entries.length) * 100) : 75;
    total30dRatesSum += rate;

    const streakVal = h.bestStreak || h.streak || 0;
    if (streakVal > bestStreakOverall) {
      bestStreakOverall = streakVal;
      bestHabitName = h.title;
    }
  });

  const avg30dRate = habits.length ? Math.round(total30dRatesSum / habits.length) : 0;

  if (activeCountEl) activeCountEl.textContent = habits.length;
  if (todayCountEl) todayCountEl.textContent = `${todayCompleted} de ${habits.length}`;
  if (todaySubEl) todaySubEl.textContent = `${todayPct}% concluídos hoje`;
  if (avgRateEl) avgRateEl.textContent = `${avg30dRate}%`;
  if (bestStreakEl) bestStreakEl.textContent = `${bestStreakOverall} dias`;
  if (bestStreakSub) bestStreakSub.textContent = `Recorde: ${bestHabitName}`;

  const dayLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  container.innerHTML = '';
  habits.forEach(habit => {
    const areaMeta = LIFE_AREAS[habit.area] || { label: habit.area, pillClass: 'pill-personal' };
    const card = document.createElement('div');
    card.className = 'habit-detailed-card';

    const weekDotsHtml = habit.completedDays.map((isDone, idx) => `
      <div class="day-dot-col">
        <span class="day-label">${dayLabels[idx]}</span>
        <button class="day-dot ${isDone ? 'completed' : ''}" data-day="${idx}">
          ${isDone ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
        </button>
      </div>
    `).join('');

    const entries = habit.history ? Object.values(habit.history) : [];
    const completedCount30d = entries.filter(Boolean).length;
    const rate30d = entries.length ? Math.round((completedCount30d / entries.length) * 100) : 80;

    card.innerHTML = `
      <div class="habit-header-row">
        <div>
          <span class="task-area-pill ${areaMeta.pillClass}">${areaMeta.label.split('&')[0].trim()}</span>
          <h3 class="habit-title-lg" style="margin-top: 8px;">${escapeHtml(habit.title)}</h3>
        </div>
        <span class="habit-streak-badge">🔥 ${habit.streak} dias</span>
      </div>
      <div class="habit-week-dots">
        ${weekDotsHtml}
      </div>
      <div class="habit-card-footer">
        <span class="habit-rate-text">🎯 ${rate30d}% taxa (30d) • 🏆 Recorde: ${habit.bestStreak || habit.streak}d</span>
        <button class="open-habit-history-btn" data-habit-id="${habit.id}">
          📈 Ver Gráfico & Histórico
        </button>
      </div>
    `;

    // Click on individual day dots
    card.querySelectorAll('.day-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayIdx = parseInt(dot.dataset.day, 10);
        habit.completedDays[dayIdx] = !habit.completedDays[dayIdx];
        if (dayIdx === habit.completedDays.length - 1) {
          if (habit.completedDays[dayIdx]) {
            habit.streak++;
            if (!habit.history) habit.history = {};
            habit.history[getTodayString()] = true;
          } else if (habit.streak > 0) {
            habit.streak--;
            if (!habit.history) habit.history = {};
            habit.history[getTodayString()] = false;
          }
          if (habit.streak > (habit.bestStreak || 0)) {
            habit.bestStreak = habit.streak;
          }
        }
        sound.playPop();
        store.save();
        renderAll();
      });
    });

    // Click button to open habit history modal
    card.querySelector('.open-habit-history-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openHabitHistoryModal(habit.id);
    });

    container.appendChild(card);
  });
}

// =============================================================================
// 7. ACTIONS & HANDLERS
// =============================================================================

function toggleTask(id) {
  const task = store.state.tasks.find(t => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  if (task.completed) {
    sound.playSuccessChime();
  } else {
    sound.playPop();
  }
  store.save();
  renderTodayTasks();
  renderActivityRings();
  renderCounts();
  // If in area detail view, re-render it
  if (currentActiveArea) {
    renderAreaDetail(currentActiveArea);
  }
}

function deleteTask(id) {
  sound.playPop();
  store.state.tasks = store.state.tasks.filter(t => t.id !== id);
  store.save();
  renderTodayTasks();
  renderActivityRings();
  renderCounts();
  if (currentActiveArea) {
    renderAreaDetail(currentActiveArea);
  }
}

function toggleHabitToday(id) {
  const habit = store.state.habits.find(h => h.id === id);
  if (!habit) return;
  const lastIndex = habit.completedDays.length - 1;
  habit.completedDays[lastIndex] = !habit.completedDays[lastIndex];
  
  if (habit.completedDays[lastIndex]) {
    habit.streak += 1;
    sound.playSuccessChime();
  } else {
    habit.streak = Math.max(0, habit.streak - 1);
    sound.playPop();
  }

  store.save();
  renderTodayHabits();
  renderFullHabits();
  renderActivityRings();
}

// =============================================================================
// 8. NAVIGATION & VIEWS
// =============================================================================

let currentActiveArea = null;

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-tab], .mobile-tab-btn[data-tab]');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      sound.playPop();
      const tab = item.dataset.tab;
      switchTab(tab);
    });
  });

  // Area Links in Sidebar
  document.querySelectorAll('.area-link').forEach(link => {
    link.addEventListener('click', () => {
      sound.playPop();
      const area = link.dataset.area;
      openAreaDetail(area);
    });
  });

  // Back to Today button in area detail
  document.getElementById('backToTodayBtn').addEventListener('click', () => {
    sound.playPop();
    switchTab('today');
  });

  // Mobile Areas Sheet Drawer
  const mobileAreasBtn = document.getElementById('mobileAreasDrawerBtn');
  if (mobileAreasBtn) {
    mobileAreasBtn.addEventListener('click', () => {
      sound.playPop();
      openModal('mobileAreasModal');
    });
  }

  const closeMobileAreasBtn = document.getElementById('closeMobileAreasModal');
  if (closeMobileAreasBtn) {
    closeMobileAreasBtn.addEventListener('click', () => closeAllModals());
  }

  document.querySelectorAll('.mobile-area-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Quick link in hero card legend items
  document.querySelectorAll('.legend-item').forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.dataset.areaFilter;
      if (filter === 'habits') {
        switchTab('habits');
      } else {
        openAreaDetail(filter);
      }
    });
  });
}

function switchTab(tabName) {
  currentActiveArea = null;
  // Update sidebar active classes
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  // Update mobile active tab
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Switch content view
  document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active-view'));

  if (tabName === 'today') {
    document.getElementById('viewToday').classList.add('active-view');
  } else if (tabName === 'focus') {
    document.getElementById('viewFocus').classList.add('active-view');
    renderFocusSection();
  } else if (tabName === 'habits') {
    document.getElementById('viewHabits').classList.add('active-view');
  }
}

function openAreaDetail(areaKey) {
  currentActiveArea = areaKey;
  const areaMeta = LIFE_AREAS[areaKey];
  if (!areaMeta) return;

  // Deactivate regular tabs
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.area === areaKey);
  });

  // Show Area View
  document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active-view'));
  const areaView = document.getElementById('viewAreaDetail');
  areaView.classList.add('active-view');

  renderAreaDetail(areaKey);
}

function renderAreaDetail(areaKey) {
  const areaMeta = LIFE_AREAS[areaKey];
  document.getElementById('areaDetailTitle').textContent = areaMeta.label;
  document.getElementById('areaDetailSubtitle').textContent = areaMeta.desc;

  const stdContainer = document.getElementById('standardAreaContent');
  const healthContainer = document.getElementById('healthSpecializedContent');
  const workContainer = document.getElementById('workSpecializedContent');
  const financeContainer = document.getElementById('financeSpecializedContent');
  const knowledgeContainer = document.getElementById('knowledgeSpecializedContent');
  const calendarContainer = document.getElementById('personalCalendarSpecializedContent');

  if (areaKey === 'work') {
    stdContainer.classList.add('hidden');
    healthContainer.classList.add('hidden');
    if (financeContainer) financeContainer.classList.add('hidden');
    if (knowledgeContainer) knowledgeContainer.classList.add('hidden');
    if (calendarContainer) calendarContainer.classList.add('hidden');
    workContainer.classList.remove('hidden');
    renderWorkKanban();
    return;
  }

  if (areaKey === 'health') {
    stdContainer.classList.add('hidden');
    workContainer.classList.add('hidden');
    if (financeContainer) financeContainer.classList.add('hidden');
    if (knowledgeContainer) knowledgeContainer.classList.add('hidden');
    if (calendarContainer) calendarContainer.classList.add('hidden');
    healthContainer.classList.remove('hidden');
    renderHealthHub();
    return;
  }

  if (areaKey === 'finance') {
    stdContainer.classList.add('hidden');
    workContainer.classList.add('hidden');
    healthContainer.classList.add('hidden');
    if (knowledgeContainer) knowledgeContainer.classList.add('hidden');
    if (calendarContainer) calendarContainer.classList.add('hidden');
    if (financeContainer) financeContainer.classList.remove('hidden');
    renderFinanceHub();
    return;
  }

  if (areaKey === 'study') {
    stdContainer.classList.add('hidden');
    workContainer.classList.add('hidden');
    healthContainer.classList.add('hidden');
    if (financeContainer) financeContainer.classList.add('hidden');
    if (calendarContainer) calendarContainer.classList.add('hidden');
    if (knowledgeContainer) knowledgeContainer.classList.remove('hidden');
    renderKnowledgeHub();
    return;
  }

  if (areaKey === 'personal') {
    stdContainer.classList.add('hidden');
    workContainer.classList.add('hidden');
    healthContainer.classList.add('hidden');
    if (financeContainer) financeContainer.classList.add('hidden');
    if (knowledgeContainer) knowledgeContainer.classList.add('hidden');
    if (calendarContainer) calendarContainer.classList.remove('hidden');
    renderCalendarHub();
    return;
  }

  stdContainer.classList.remove('hidden');
  workContainer.classList.add('hidden');
  healthContainer.classList.add('hidden');
  if (financeContainer) financeContainer.classList.add('hidden');
  if (knowledgeContainer) knowledgeContainer.classList.add('hidden');
  if (calendarContainer) calendarContainer.classList.add('hidden');

  const areaTasks = store.state.tasks.filter(t => t.area === areaKey);
  const doneTasks = areaTasks.filter(t => t.completed).length;
  const habitsInArea = store.state.habits.filter(h => h.area === areaKey).length;

  // Render stats hero
  const heroCard = document.getElementById('areaHeroCard');
  heroCard.innerHTML = `
    <div class="area-stat-box">
      <span class="area-stat-num">${areaTasks.length}</span>
      <span class="area-stat-label">Total de Ações</span>
    </div>
    <div class="area-stat-box">
      <span class="area-stat-num">${doneTasks}</span>
      <span class="area-stat-label">Concluídas</span>
    </div>
    <div class="area-stat-box">
      <span class="area-stat-num">${habitsInArea}</span>
      <span class="area-stat-label">Hábitos Vinculados</span>
    </div>
  `;

  // Render list
  const list = document.getElementById('areaSpecificList');
  if (areaTasks.length === 0) {
    list.innerHTML = `<div class="empty-state">Nenhum item adicionado para ${areaMeta.label}. Clique acima para criar um.</div>`;
    return;
  }

  list.innerHTML = '';
  areaTasks.forEach(task => {
    const item = document.createElement('div');
    item.className = `task-item ${task.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="task-check-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
        <div class="task-tags">
          <span class="task-area-pill ${areaMeta.pillClass}">${areaMeta.label.split('&')[0].trim()}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="task-delete-btn" title="Excluir">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    item.querySelector('.task-check-circle').addEventListener('click', () => toggleTask(task.id));
    item.querySelector('.task-delete-btn').addEventListener('click', () => deleteTask(task.id));

    list.appendChild(item);
  });

  // Button to add item directly in this area
  document.getElementById('areaAddItemBtn').onclick = () => {
    document.getElementById('modalTaskArea').value = areaKey;
    openModal('quickCaptureModal');
    document.getElementById('modalTaskInput').focus();
  };
}

// =============================================================================
// HEALTH HUB (Dieta, Treinos & Cargas, Corridas)
// =============================================================================

let activeHealthSubtab = 'diet';

function renderHealthHub() {
  setupHealthSubnav();
  renderHealthDiet();
  renderHealthWorkout();
  renderHealthRunning();
  renderHealthTasks();
}

function setupHealthSubnav() {
  document.querySelectorAll('.health-subnav-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      document.querySelectorAll('.health-subnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeHealthSubtab = btn.dataset.subtab;

      document.getElementById('healthSubViewDiet').classList.toggle('hidden', activeHealthSubtab !== 'diet');
      document.getElementById('healthSubViewWorkout').classList.toggle('hidden', activeHealthSubtab !== 'workout');
      document.getElementById('healthSubViewRunning').classList.toggle('hidden', activeHealthSubtab !== 'running');
      document.getElementById('healthSubViewTasks').classList.toggle('hidden', activeHealthSubtab !== 'tasks');
    };
  });
}

function renderHealthDiet() {
  const nutrition = store.state.health.nutrition;
  const currentCals = nutrition.meals.filter(m => m.completed).reduce((acc, m) => acc + (m.calories || 0), 0);
  const calPct = Math.min(100, Math.round((currentCals / nutrition.calorieGoal) * 100));

  document.getElementById('macroCalVal').textContent = `${currentCals.toLocaleString('pt-BR')} / ${nutrition.calorieGoal.toLocaleString('pt-BR')} kcal`;
  document.getElementById('macroCalBar').style.width = `${calPct}%`;

  const protPct = Math.min(100, Math.round((nutrition.currentProtein / nutrition.proteinGoal) * 100));
  document.getElementById('macroProtVal').textContent = `${nutrition.currentProtein} / ${nutrition.proteinGoal} g`;
  document.getElementById('macroProtBar').style.width = `${protPct}%`;

  const carbPct = Math.min(100, Math.round((nutrition.currentCarb / nutrition.carbGoal) * 100));
  document.getElementById('macroCarbVal').textContent = `${nutrition.currentCarb} / ${nutrition.carbGoal} g`;
  document.getElementById('macroCarbBar').style.width = `${carbPct}%`;

  const fatPct = Math.min(100, Math.round((nutrition.currentFat / nutrition.fatGoal) * 100));
  document.getElementById('macroFatVal').textContent = `${nutrition.currentFat} / ${nutrition.fatGoal} g`;
  document.getElementById('macroFatBar').style.width = `${fatPct}%`;

  // Render Meals
  const container = document.getElementById('mealsListContainer');
  if (!container) return;
  container.innerHTML = '';

  nutrition.meals.forEach(meal => {
    const item = document.createElement('div');
    item.className = `meal-item ${meal.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="task-check-circle" title="Marcar refeição realizada">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="meal-content">
        <div class="meal-name">${escapeHtml(meal.name)}</div>
        <div class="meal-desc">${escapeHtml(meal.items)}</div>
      </div>
      <span class="meal-cal-badge">${meal.calories} kcal</span>
      <button class="task-delete-btn" title="Excluir">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;

    item.querySelector('.task-check-circle').onclick = () => {
      meal.completed = !meal.completed;
      if (meal.completed) sound.playSuccessChime();
      else sound.playPop();
      store.save();
      renderHealthDiet();
      renderActivityRings();
    };

    item.querySelector('.task-delete-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      nutrition.meals = nutrition.meals.filter(m => m.id !== meal.id);
      store.save();
      renderHealthDiet();
    };

    container.appendChild(item);
  });
}

function renderHealthWorkout() {
  const workout = store.state.health.workout;
  const pillsContainer = document.getElementById('routinePillsContainer');
  if (!pillsContainer) return;
  pillsContainer.innerHTML = '';

  workout.routines.forEach(r => {
    const routineName = typeof r === 'string' ? r : r.name;
    const routineDays = typeof r === 'object' && r.days ? r.days : 'Flexível';
    const isActive = workout.activeRoutine === routineName;

    const btn = document.createElement('button');
    btn.className = `routine-tag-btn ${isActive ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="routine-tag-name">${escapeHtml(routineName)}</span>
      <span class="routine-tag-days">📅 ${escapeHtml(routineDays)}</span>
    `;
    btn.onclick = () => {
      sound.playPop();
      workout.activeRoutine = routineName;
      store.save();
      renderHealthWorkout();
    };
    pillsContainer.appendChild(btn);
  });

  const cardsContainer = document.getElementById('exerciseCardsContainer');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  const filteredExercises = workout.exercises.filter(e => e.routine === workout.activeRoutine);
  if (filteredExercises.length === 0) {
    cardsContainer.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhum exercício cadastrado para esta divisão de treino. Clique em "+ Novo Exercício".</div>`;
    return;
  }

  filteredExercises.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
      <div class="exercise-header-top">
        <div class="exercise-meta">
          <span class="exercise-title">${escapeHtml(ex.name)}</span>
          <span class="exercise-scheme">🎯 ${escapeHtml(ex.setsReps)}</span>
        </div>
        <button class="icon-btn-compact edit-exercise-trigger" title="Editar nome, carga ou divisão">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </div>
      <div class="exercise-stepper-row">
        <button class="stepper-btn step-minus" title="Diminuir carga">−</button>
        <div class="stepper-display">
          <span class="weight-num">${ex.weight}</span>
          <span class="weight-unit">kg</span>
        </div>
        <button class="stepper-btn step-plus" title="Aumentar carga">+</button>
      </div>
    `;

    card.querySelector('.edit-exercise-trigger').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      openEditExerciseModal(ex);
    };

    card.querySelector('.step-minus').onclick = () => {
      sound.playPop();
      const step = ex.weight > 10 ? 2 : 1;
      ex.weight = Math.max(0, ex.weight - step);
      store.save();
      card.querySelector('.weight-num').textContent = ex.weight;
    };

    card.querySelector('.step-plus').onclick = () => {
      sound.playPop();
      const step = ex.weight >= 10 ? 2 : 1;
      ex.weight += step;
      store.save();
      card.querySelector('.weight-num').textContent = ex.weight;
    };

    cardsContainer.appendChild(card);
  });
}

function openEditExerciseModal(ex) {
  const modal = document.getElementById('editExerciseModal');
  if (!modal) return;

  document.getElementById('editExerciseId').value = ex.id;
  document.getElementById('editExerciseNameInput').value = ex.name;
  document.getElementById('editExerciseSetsInput').value = ex.setsReps;
  document.getElementById('editExerciseWeightInput').value = ex.weight;

  // Populate routine select options dynamically
  const select = document.getElementById('editExerciseRoutineSelect');
  if (select) {
    select.innerHTML = '';
    store.state.health.workout.routines.forEach(r => {
      const rName = typeof r === 'string' ? r : r.name;
      const opt = document.createElement('option');
      opt.value = rName;
      opt.textContent = rName;
      if (rName === ex.routine) opt.selected = true;
      select.appendChild(opt);
    });
  }

  openModal('editExerciseModal');
  setTimeout(() => document.getElementById('editExerciseNameInput').focus(), 50);
}

function renderHealthRunning() {
  const running = store.state.health.running;
  document.getElementById('runWeeklyKmVal').textContent = `${running.currentWeeklyKm.toFixed(1)} km`;
  
  // Calculate average pace of sessions
  if (running.sessions.length > 0) {
    const totalDist = running.sessions.reduce((acc, s) => acc + s.distanceKm, 0);
    const totalTime = running.sessions.reduce((acc, s) => acc + s.durationMin, 0);
    if (totalDist > 0) {
      const avgPaceDecimal = totalTime / totalDist;
      const mins = Math.floor(avgPaceDecimal);
      const secs = Math.round((avgPaceDecimal - mins) * 60);
      document.getElementById('runAvgPaceVal').textContent = `${mins}:${String(secs).padStart(2, '0')}`;
    }
    const totalCals = running.sessions.reduce((acc, s) => acc + (s.calories || 0), 0);
    document.getElementById('runTotalCaloriesVal').textContent = `${totalCals.toLocaleString('pt-BR')} kcal`;
  }

  const container = document.getElementById('runningSessionsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (running.sessions.length === 0) {
    container.innerHTML = `<div class="empty-state">Nenhuma corrida registrada ainda. Clique acima para registrar seu primeiro treino.</div>`;
    return;
  }

  running.sessions.forEach(session => {
    const item = document.createElement('div');
    item.className = 'run-item-card';
    item.innerHTML = `
      <div class="run-left-info">
        <div class="run-workout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M18 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path d="M14 8l-3.5 3.5 2 3.5 4-2.5"></path>
            <path d="M9 13l-4 4"></path>
            <path d="M17 11.5l2.5 4.5-2 4"></path>
          </svg>
        </div>
        <div>
          <div class="run-distance-txt">${session.distanceKm.toFixed(1)} km</div>
          <div class="run-date-txt">${session.date} • ${escapeHtml(session.feeling || 'Corrida')}</div>
        </div>
      </div>
      <div class="run-metrics-strip">
        <div class="run-metric-tag">
          <span class="run-metric-title">Tempo</span>
          <span class="run-metric-num">${session.durationMin} min</span>
        </div>
        <div class="run-metric-tag">
          <span class="run-metric-title">Pace</span>
          <span class="pace-pill">${session.pace}</span>
        </div>
        <div class="run-metric-tag">
          <span class="run-metric-title">Calorias</span>
          <span class="run-metric-num">${session.calories} kcal</span>
        </div>
        <button class="task-delete-btn delete-run-btn" title="Excluir">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    item.querySelector('.delete-run-btn').onclick = () => {
      sound.playPop();
      running.sessions = running.sessions.filter(s => s.id !== session.id);
      running.currentWeeklyKm = Math.max(0, running.currentWeeklyKm - session.distanceKm);
      store.save();
      renderHealthRunning();
    };

    container.appendChild(item);
  });
}

function renderHealthTasks() {
  const container = document.getElementById('healthTasksSpecificList');
  if (!container) return;
  const healthTasks = store.state.tasks.filter(t => t.area === 'health');
  
  if (healthTasks.length === 0) {
    container.innerHTML = `<div class="empty-state">Nenhuma ação de saúde pendente.</div>`;
    return;
  }

  container.innerHTML = '';
  healthTasks.forEach(task => {
    const item = document.createElement('div');
    item.className = `task-item ${task.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="task-check-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
      </div>
      <div class="task-actions">
        <button class="task-delete-btn" title="Excluir">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    item.querySelector('.task-check-circle').onclick = () => {
      toggleTask(task.id);
      renderHealthTasks();
    };

    item.querySelector('.task-delete-btn').onclick = (e) => {
      e.stopPropagation();
      deleteTask(task.id);
      renderHealthTasks();
    };

    container.appendChild(item);
  });

  const addBtn = document.getElementById('healthAddActionBtn');
  if (addBtn) {
    addBtn.onclick = () => {
      document.getElementById('modalTaskArea').value = 'health';
      openModal('quickCaptureModal');
      document.getElementById('modalTaskInput').focus();
    };
  }
}

function setupHealthModals() {
  // 1. New Meal Modal
  const openMealBtn = document.getElementById('openNewMealModalBtn');
  const closeMealBtn = document.getElementById('closeNewMealModal');
  const saveMealBtn = document.getElementById('saveMealBtn');
  const mealNameInput = document.getElementById('mealNameInput');
  const mealItemsInput = document.getElementById('mealItemsInput');
  const mealCaloriesInput = document.getElementById('mealCaloriesInput');

  if (openMealBtn) {
    openMealBtn.onclick = () => {
      sound.playPop();
      openModal('newMealModal');
      setTimeout(() => mealNameInput.focus(), 50);
    };
  }
  if (closeMealBtn) closeMealBtn.onclick = () => closeAllModals();

  if (saveMealBtn) {
    saveMealBtn.onclick = () => {
      const name = mealNameInput.value.trim();
      const items = mealItemsInput.value.trim() || 'Itens selecionados';
      const cals = parseInt(mealCaloriesInput.value, 10) || 350;
      if (!name) return;

      store.state.health.nutrition.meals.push({
        id: 'm_' + Date.now(),
        name: name,
        items: items,
        calories: cals,
        completed: false
      });

      mealNameInput.value = '';
      mealItemsInput.value = '';
      mealCaloriesInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthDiet();
    };
  }

  // 2. New Exercise Modal
  const openExBtn = document.getElementById('openNewExerciseModalBtn');
  const closeExBtn = document.getElementById('closeNewExerciseModal');
  const saveExBtn = document.getElementById('saveExerciseBtn');
  const exNameInput = document.getElementById('exerciseNameInput');
  const exRoutineSelect = document.getElementById('exerciseRoutineSelect');
  const exSetsInput = document.getElementById('exerciseSetsInput');
  const exWeightInput = document.getElementById('exerciseWeightInput');

  if (openExBtn) {
    openExBtn.onclick = () => {
      sound.playPop();
      if (exRoutineSelect) {
        exRoutineSelect.innerHTML = '';
        store.state.health.workout.routines.forEach(r => {
          const rName = typeof r === 'string' ? r : r.name;
          const opt = document.createElement('option');
          opt.value = rName;
          opt.textContent = rName;
          if (rName === store.state.health.workout.activeRoutine) opt.selected = true;
          exRoutineSelect.appendChild(opt);
        });
      }
      openModal('newExerciseModal');
      setTimeout(() => exNameInput.focus(), 50);
    };
  }
  if (closeExBtn) closeExBtn.onclick = () => closeAllModals();

  if (saveExBtn) {
    saveExBtn.onclick = () => {
      const name = exNameInput.value.trim();
      const routine = exRoutineSelect.value;
      const setsReps = exSetsInput.value.trim() || '4x 8-10';
      const weight = parseFloat(exWeightInput.value) || 20;
      if (!name) return;

      store.state.health.workout.exercises.push({
        id: 'e_' + Date.now(),
        routine: routine,
        name: name,
        setsReps: setsReps,
        weight: weight
      });

      exNameInput.value = '';
      exSetsInput.value = '';
      exWeightInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthWorkout();
    };
  }

  // Hook up Exercise Edit and Routines Manage Modals
  setupExerciseEditModal();
  setupRoutinesManageModal();

  // 3. New Run Modal
  const openRunBtn = document.getElementById('openNewRunModalBtn');
  const closeRunBtn = document.getElementById('closeNewRunModal');
  const saveRunBtn = document.getElementById('saveRunBtn');
  const runDistInput = document.getElementById('runDistanceInput');
  const runDurInput = document.getElementById('runDurationInput');
  const runFeelInput = document.getElementById('runFeelingInput');

  if (openRunBtn) {
    openRunBtn.onclick = () => {
      sound.playPop();
      openModal('newRunModal');
      setTimeout(() => runDistInput.focus(), 50);
    };
  }
  if (closeRunBtn) closeRunBtn.onclick = () => closeAllModals();

  if (saveRunBtn) {
    saveRunBtn.onclick = () => {
      const dist = parseFloat(runDistInput.value);
      const dur = parseFloat(runDurInput.value);
      const feeling = runFeelInput.value.trim() || '🏃 Corrida realizada';
      if (!dist || !dur || dist <= 0 || dur <= 0) return;

      const paceDecimal = dur / dist;
      const mins = Math.floor(paceDecimal);
      const secs = Math.round((paceDecimal - mins) * 60);
      const paceStr = `${mins}:${String(secs).padStart(2, '0')} /km`;
      const calories = Math.round(dist * 65);

      store.state.health.running.sessions.unshift({
        id: 'r_' + Date.now(),
        date: 'Hoje',
        distanceKm: dist,
        durationMin: dur,
        pace: paceStr,
        calories: calories,
        feeling: feeling
      });

      store.state.health.running.currentWeeklyKm += dist;

      runDistInput.value = '';
      runDurInput.value = '';
      runFeelInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthRunning();
    };
  }
}

function setupExerciseEditModal() {
  const closeBtn = document.getElementById('closeEditExerciseModal');
  const saveBtn = document.getElementById('saveEditExerciseBtn');
  const deleteBtn = document.getElementById('deleteExerciseBtn');

  if (closeBtn) closeBtn.onclick = () => closeAllModals();

  if (saveBtn) {
    saveBtn.onclick = () => {
      const exId = document.getElementById('editExerciseId').value;
      const ex = store.state.health.workout.exercises.find(e => e.id === exId);
      if (!ex) return;

      const name = document.getElementById('editExerciseNameInput').value.trim();
      if (!name) return;

      ex.name = name;
      ex.routine = document.getElementById('editExerciseRoutineSelect').value;
      ex.setsReps = document.getElementById('editExerciseSetsInput').value.trim() || '4x 8-10';
      ex.weight = parseFloat(document.getElementById('editExerciseWeightInput').value) || 0;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthWorkout();
    };
  }

  if (deleteBtn) {
    deleteBtn.onclick = () => {
      const exId = document.getElementById('editExerciseId').value;
      sound.playPop();
      store.state.health.workout.exercises = store.state.health.workout.exercises.filter(e => e.id !== exId);
      store.save();
      closeAllModals();
      renderHealthWorkout();
    };
  }
}

function setupRoutinesManageModal() {
  const openBtn = document.getElementById('manageRoutinesBtn');
  const closeBtn = document.getElementById('closeManageRoutinesModal');
  const doneBtn = document.getElementById('saveRoutinesDoneBtn');
  const addBtn = document.getElementById('addNewRoutineBtn');

  const newNameInput = document.getElementById('newRoutineNameInput');
  const newDaysInput = document.getElementById('newRoutineDaysInput');

  function renderRoutinesList() {
    const list = document.getElementById('routinesManageList');
    if (!list) return;
    list.innerHTML = '';

    store.state.health.workout.routines.forEach((r, idx) => {
      const row = document.createElement('div');
      row.className = 'routine-manage-row';
      row.innerHTML = `
        <input type="text" class="routine-name-field" value="${escapeHtml(r.name)}" placeholder="Nome do Treino">
        <input type="text" class="routine-days-field" value="${escapeHtml(r.days)}" placeholder="Dias (ex: Segunda & Quinta)">
        <button class="task-delete-btn delete-routine-btn" title="Excluir divisão">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;

      row.querySelector('.routine-name-field').onchange = (e) => {
        const oldName = r.name;
        r.name = e.target.value.trim() || oldName;
        // Also update any exercises associated with old routine name
        store.state.health.workout.exercises.forEach(ex => {
          if (ex.routine === oldName) ex.routine = r.name;
        });
        if (store.state.health.workout.activeRoutine === oldName) {
          store.state.health.workout.activeRoutine = r.name;
        }
        store.save();
      };

      row.querySelector('.routine-days-field').onchange = (e) => {
        r.days = e.target.value.trim() || 'Dias flexíveis';
        store.save();
      };

      row.querySelector('.delete-routine-btn').onclick = () => {
        if (store.state.health.workout.routines.length <= 1) {
          alert('Você precisa manter pelo menos uma divisão de treino.');
          return;
        }
        sound.playPop();
        store.state.health.workout.routines.splice(idx, 1);
        if (store.state.health.workout.activeRoutine === r.name) {
          store.state.health.workout.activeRoutine = store.state.health.workout.routines[0].name;
        }
        store.save();
        renderRoutinesList();
      };

      list.appendChild(row);
    });
  }

  if (openBtn) {
    openBtn.onclick = () => {
      sound.playPop();
      renderRoutinesList();
      openModal('manageRoutinesModal');
    };
  }

  if (closeBtn) closeBtn.onclick = () => closeAllModals();

  if (doneBtn) {
    doneBtn.onclick = () => {
      sound.playSuccessChime();
      closeAllModals();
      renderHealthWorkout();
    };
  }

  if (addBtn) {
    addBtn.onclick = () => {
      const name = newNameInput.value.trim();
      const days = newDaysInput.value.trim() || 'Dias flexíveis';
      if (!name) return;

      store.state.health.workout.routines.push({
        id: 'r_' + Date.now(),
        name: name,
        days: days
      });

      newNameInput.value = '';
      newDaysInput.value = '';
      store.save();
      sound.playSuccessChime();
      renderRoutinesList();
    };
  }
}

// =============================================================================
// WORK KANBAN BOARD (Trello-Style Apple)
// =============================================================================

const KANBAN_STATUS_FLOW = ['todo', 'in_progress', 'review', 'done'];

function renderWorkKanban() {
  const cards = store.state.workKanban || [];

  const cols = {
    todo: document.getElementById('kanbanCardsTodo'),
    in_progress: document.getElementById('kanbanCardsProgress'),
    review: document.getElementById('kanbanCardsReview'),
    done: document.getElementById('kanbanCardsDone')
  };

  const counts = { todo: 0, in_progress: 0, review: 0, done: 0 };

  // Clear columns
  Object.keys(cols).forEach(status => {
    if (cols[status]) cols[status].innerHTML = '';
  });

  cards.forEach(card => {
    const colStatus = card.status || 'todo';
    if (counts[colStatus] !== undefined) {
      counts[colStatus]++;
    }

    const cardEl = document.createElement('div');
    cardEl.className = 'kanban-card';
    cardEl.draggable = true;
    cardEl.dataset.id = card.id;

    // Current index in status flow
    const currentIdx = KANBAN_STATUS_FLOW.indexOf(colStatus);
    const canMoveLeft = currentIdx > 0;
    const canMoveRight = currentIdx < KANBAN_STATUS_FLOW.length - 1;

    cardEl.innerHTML = `
      <div class="kanban-card-title">${escapeHtml(card.title)}</div>
      <div class="kanban-card-meta">
        <span class="kanban-project-pill">${escapeHtml(card.project || 'Geral')}</span>
        ${card.priority === 'high' ? '<span class="task-priority-high">Alta 🔥</span>' : ''}
        <span class="kanban-due-tag">📅 ${escapeHtml(card.due || 'Semana')}</span>
      </div>
      <div class="kanban-card-footer">
        <div class="kanban-move-actions">
          ${canMoveLeft ? `<button class="kanban-arrow-btn move-left" title="Mover para coluna anterior">←</button>` : ''}
          ${canMoveRight ? `<button class="kanban-arrow-btn move-right" title="Avançar demanda">→</button>` : ''}
        </div>
        <button class="task-delete-btn delete-card-btn" title="Excluir demanda">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    // Quick move left
    if (canMoveLeft) {
      cardEl.querySelector('.move-left').onclick = (e) => {
        e.stopPropagation();
        sound.playPop();
        card.status = KANBAN_STATUS_FLOW[currentIdx - 1];
        store.save();
        renderWorkKanban();
      };
    }

    // Quick move right
    if (canMoveRight) {
      cardEl.querySelector('.move-right').onclick = (e) => {
        e.stopPropagation();
        const nextStatus = KANBAN_STATUS_FLOW[currentIdx + 1];
        card.status = nextStatus;
        if (nextStatus === 'done') {
          sound.playSuccessChime();
        } else {
          sound.playPop();
        }
        store.save();
        renderWorkKanban();
      };
    }

    // Delete card
    cardEl.querySelector('.delete-card-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.workKanban = store.state.workKanban.filter(c => c.id !== card.id);
      store.save();
      renderWorkKanban();
    };

    // HTML5 Drag & Drop handlers
    cardEl.addEventListener('dragstart', (e) => {
      cardEl.classList.add('dragging');
      e.dataTransfer.setData('text/plain', card.id);
      e.dataTransfer.effectAllowed = 'move';
    });

    cardEl.addEventListener('dragend', () => {
      cardEl.classList.remove('dragging');
    });

    if (cols[colStatus]) {
      cols[colStatus].appendChild(cardEl);
    }
  });

  // Empty state for empty columns
  Object.keys(cols).forEach(status => {
    if (counts[status] === 0 && cols[status]) {
      cols[status].innerHTML = `<div class="kanban-empty-col-state">Nenhuma demanda aqui</div>`;
    }
  });

  // Update badges
  const bTodo = document.getElementById('badgeColTodo');
  const bProg = document.getElementById('badgeColProgress');
  const bRev = document.getElementById('badgeColReview');
  const bDone = document.getElementById('badgeColDone');

  if (bTodo) bTodo.textContent = counts.todo;
  if (bProg) bProg.textContent = counts.in_progress;
  if (bRev) bRev.textContent = counts.review;
  if (bDone) bDone.textContent = counts.done;

  // Update topbar pills
  const activeTotal = counts.todo + counts.in_progress + counts.review;
  const kActive = document.getElementById('kanbanActiveCount');
  const kDone = document.getElementById('kanbanDoneCount');
  if (kActive) kActive.textContent = activeTotal;
  if (kDone) kDone.textContent = counts.done;

  // Setup Column Drop zones
  setupKanbanDropZones();
}

function setupKanbanDropZones() {
  document.querySelectorAll('.kanban-column').forEach(col => {
    col.ondragover = (e) => {
      e.preventDefault();
      col.classList.add('drag-over');
    };

    col.ondragleave = () => {
      col.classList.remove('drag-over');
    };

    col.ondrop = (e) => {
      e.preventDefault();
      col.classList.remove('drag-over');
      const cardId = e.dataTransfer.getData('text/plain');
      const targetStatus = col.dataset.status;

      const card = (store.state.workKanban || []).find(c => c.id === cardId);
      if (card && card.status !== targetStatus) {
        card.status = targetStatus;
        if (targetStatus === 'done') {
          sound.playSuccessChime();
        } else {
          sound.playPop();
        }
        store.save();
        renderWorkKanban();
      }
    };
  });
}

function setupKanbanModals() {
  const openBtn = document.getElementById('openNewKanbanCardBtn');
  const closeBtn = document.getElementById('closeNewKanbanModal');
  const saveBtn = document.getElementById('saveKanbanBtn');

  const titleInput = document.getElementById('kanbanTitleInput');
  const projectInput = document.getElementById('kanbanProjectInput');
  const statusSelect = document.getElementById('kanbanStatusSelect');
  const prioritySelect = document.getElementById('kanbanPrioritySelect');
  const dueInput = document.getElementById('kanbanDueInput');

  const openModalForStatus = (status = 'todo') => {
    sound.playPop();
    if (statusSelect) statusSelect.value = status;
    openModal('newKanbanCardModal');
    setTimeout(() => {
      if (titleInput) titleInput.focus();
    }, 50);
  };

  if (openBtn) {
    openBtn.onclick = () => openModalForStatus('todo');
  }

  // Quick plus on columns
  document.querySelectorAll('.kanban-quick-add').forEach(btn => {
    btn.onclick = () => {
      const status = btn.dataset.status || 'todo';
      openModalForStatus(status);
    };
  });

  if (closeBtn) closeBtn.onclick = () => closeAllModals();

  if (saveBtn) {
    saveBtn.onclick = () => {
      const title = titleInput.value.trim();
      if (!title) return;

      const project = projectInput.value.trim() || 'Geral';
      const status = statusSelect.value;
      const priority = prioritySelect.value;
      const due = dueInput.value.trim() || 'Esta semana';

      if (!store.state.workKanban) store.state.workKanban = [];

      store.state.workKanban.unshift({
        id: 'k_' + Date.now(),
        title: title,
        project: project,
        status: status,
        priority: priority,
        due: due
      });

      titleInput.value = '';
      projectInput.value = '';
      dueInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderWorkKanban();
    };
  }
}

// =============================================================================
// PERSONAL FINANCE HUB (Spreadsheet & Ledger Apple Style)
// =============================================================================

let financeCurrentTypeFilter = 'all';
let financeCurrentCategoryFilter = 'all';

function formatBRL(amount) {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderFinanceHub() {
  const transactions = (store.state.finance && store.state.finance.transactions) ? store.state.finance.transactions : [];

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + (parseFloat(t.amount) || 0), 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + (parseFloat(t.amount) || 0), 0);

  const netBalance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.max(0, Math.round((netBalance / totalIncome) * 100)) : 0;

  // Update KPI Summary Cards
  const incomeEl = document.getElementById('financeTotalIncomeVal');
  const expenseEl = document.getElementById('financeTotalExpenseVal');
  const balanceEl = document.getElementById('financeNetBalanceVal');
  const savingsEl = document.getElementById('financeSavingsRateVal');

  if (incomeEl) incomeEl.textContent = formatBRL(totalIncome);
  if (expenseEl) expenseEl.textContent = formatBRL(totalExpense);
  if (balanceEl) {
    balanceEl.textContent = formatBRL(netBalance);
    balanceEl.style.color = netBalance >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
  }
  if (savingsEl) {
    savingsEl.textContent = `Taxa de Poupança: ${savingsRate}% (${netBalance >= 0 ? 'Superávit' : 'Déficit'})`;
  }

  renderFinanceTable();
}

function renderFinanceTable() {
  const tbody = document.getElementById('financeLedgerTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let list = (store.state.finance && store.state.finance.transactions) ? [...store.state.finance.transactions] : [];

  // Filter by Type
  if (financeCurrentTypeFilter !== 'all') {
    list = list.filter(t => t.type === financeCurrentTypeFilter);
  }

  // Filter by Category
  if (financeCurrentCategoryFilter !== 'all') {
    list = list.filter(t => t.category === financeCurrentCategoryFilter);
  }

  // Sort by date descending
  list.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-state" style="text-align: center; padding: 36px;">Nenhuma transação encontrada para os filtros selecionados.</td></tr>`;
    return;
  }

  list.forEach(t => {
    const tr = document.createElement('tr');

    // Date formatting (DD/MM/YYYY)
    let displayDate = t.date || 'Hoje';
    if (t.date && t.date.includes('-')) {
      const parts = t.date.split('-');
      if (parts.length === 3) displayDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    const isIncome = t.type === 'income';

    tr.innerHTML = `
      <td style="color: var(--text-tertiary); font-variant-numeric: tabular-nums;">${displayDate}</td>
      <td style="font-weight: 500;">${escapeHtml(t.description)}</td>
      <td><span class="task-area-pill pill-finance">${escapeHtml(t.category || 'Geral')}</span></td>
      <td>
        <span class="${isIncome ? 'badge-income' : 'badge-expense'}">
          ${isIncome ? '🟢 Entrada' : '🔴 Gasto'}
        </span>
      </td>
      <td class="${isIncome ? 'amount-income' : 'amount-expense'}">
        ${isIncome ? '+' : '−'} ${formatBRL(t.amount || 0)}
      </td>
      <td style="text-align: right;">
        <button class="task-delete-btn delete-trans-btn" title="Excluir transação">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </td>
    `;

    tr.querySelector('.delete-trans-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.finance.transactions = store.state.finance.transactions.filter(item => item.id !== t.id);
      store.save();
      renderFinanceHub();
    };

    tbody.appendChild(tr);
  });
}

function setupFinanceModals() {
  const openBtn = document.getElementById('openNewTransactionModalBtn');
  const closeBtn = document.getElementById('closeNewTransactionModal');
  const saveBtn = document.getElementById('saveTransactionBtn');

  const btnExpense = document.getElementById('btnTypeExpense');
  const btnIncome = document.getElementById('btnTypeIncome');

  const descInput = document.getElementById('transDescInput');
  const amountInput = document.getElementById('transAmountInput');
  const catSelect = document.getElementById('transCategorySelect');
  const dateInput = document.getElementById('transDateInput');

  let selectedType = 'expense';

  if (btnExpense && btnIncome) {
    btnExpense.onclick = () => {
      sound.playPop();
      selectedType = 'expense';
      btnExpense.classList.add('active-expense');
      btnIncome.classList.remove('active-income');
    };

    btnIncome.onclick = () => {
      sound.playPop();
      selectedType = 'income';
      btnIncome.classList.add('active-income');
      btnExpense.classList.remove('active-expense');
    };
  }

  if (openBtn) {
    openBtn.onclick = () => {
      sound.playPop();
      if (dateInput) dateInput.value = getTodayString();
      openModal('newTransactionModal');
      setTimeout(() => {
        if (descInput) descInput.focus();
      }, 50);
    };
  }

  if (closeBtn) closeBtn.onclick = () => closeAllModals();

  if (saveBtn) {
    saveBtn.onclick = () => {
      const desc = descInput.value.trim();
      const amount = parseFloat(amountInput.value);
      const cat = catSelect.value;
      const date = dateInput.value || getTodayString();

      if (!desc || isNaN(amount) || amount <= 0) {
        alert('Por favor, informe uma descrição e um valor positivo.');
        return;
      }

      if (!store.state.finance) store.state.finance = { transactions: [] };
      if (!store.state.finance.transactions) store.state.finance.transactions = [];

      store.state.finance.transactions.unshift({
        id: 'f_' + Date.now(),
        description: desc,
        type: selectedType,
        amount: amount,
        category: cat,
        date: date
      });

      descInput.value = '';
      amountInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderFinanceHub();
    };
  }

  // Setup Toolbar Filters
  const typeFilterBtns = document.querySelectorAll('#financeTypeFilter .segment-btn');
  typeFilterBtns.forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      typeFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      financeCurrentTypeFilter = btn.dataset.type;
      renderFinanceTable();
    };
  });

  const catFilterSelect = document.getElementById('financeCategoryFilter');
  if (catFilterSelect) {
    catFilterSelect.onchange = (e) => {
      sound.playPop();
      financeCurrentCategoryFilter = e.target.value;
      renderFinanceTable();
    };
  }
}

// =============================================================================
// KNOWLEDGE & STUDY HUB (Books & Reading Tracker, Courses, Insights)
// =============================================================================

let activeKnowledgeSubtab = 'books';

function renderKnowledgeHub() {
  setupKnowledgeSubnav();
  renderKnowledgeBooks();
  renderKnowledgeCourses();
  renderKnowledgeInsights();
}

function setupKnowledgeSubnav() {
  document.querySelectorAll('[data-knowledgetab]').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      document.querySelectorAll('[data-knowledgetab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeKnowledgeSubtab = btn.dataset.knowledgetab;

      const vBooks = document.getElementById('knowledgeSubViewBooks');
      const vCourses = document.getElementById('knowledgeSubViewCourses');
      const vInsights = document.getElementById('knowledgeSubViewInsights');

      if (vBooks) vBooks.classList.toggle('hidden', activeKnowledgeSubtab !== 'books');
      if (vCourses) vCourses.classList.toggle('hidden', activeKnowledgeSubtab !== 'courses');
      if (vInsights) vInsights.classList.toggle('hidden', activeKnowledgeSubtab !== 'insights');
    };
  });
}

function renderKnowledgeBooks() {
  const books = (store.state.knowledge && store.state.knowledge.books) ? store.state.knowledge.books : [];

  const readingBooks = books.filter(b => b.status === 'reading');
  const completedBooks = books.filter(b => b.status === 'completed');
  const totalPagesRead = books.reduce((acc, b) => acc + (parseInt(b.currentPage, 10) || 0), 0);

  // Update KPI counters
  const readingEl = document.getElementById('booksReadingCountVal');
  const pagesEl = document.getElementById('booksPagesReadVal');
  const completedEl = document.getElementById('booksCompletedCountVal');

  if (readingEl) readingEl.textContent = readingBooks.length;
  if (pagesEl) pagesEl.textContent = `${totalPagesRead.toLocaleString('pt-BR')} págs`;
  if (completedEl) completedEl.textContent = completedBooks.length;

  const container = document.getElementById('booksGridContainer');
  if (!container) return;
  container.innerHTML = '';

  if (books.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhum livro cadastrado. Clique em "+ Novo Livro" para iniciar sua estante.</div>`;
    return;
  }

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const total = parseInt(book.totalPages, 10) || 100;
    const current = Math.min(total, parseInt(book.currentPage, 10) || 0);
    const pct = Math.min(100, Math.round((current / total) * 100));

    let statusLabel = '📖 Lendo';
    let statusClass = 'task-area-pill pill-study';
    if (book.status === 'completed' || current >= total) {
      statusLabel = '✅ Concluído';
      statusClass = 'badge-income';
    } else if (book.status === 'want_to_read') {
      statusLabel = '⏳ Quero Ler';
      statusClass = 'kanban-col-badge';
    }

    card.innerHTML = `
      <div class="book-cover">
        <span class="book-cover-icon">📖</span>
        <span class="book-cover-tag">${escapeHtml((book.category || 'Livro').slice(0, 10))}</span>
      </div>
      <div class="book-content">
        <div class="book-header-row">
          <div>
            <h4 class="book-title">${escapeHtml(book.title)}</h4>
            <p class="book-author">${escapeHtml(book.author || 'Autor Desconhecido')}</p>
          </div>
          <button class="task-delete-btn delete-book-btn" title="Excluir livro">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="book-progress-box">
          <div class="book-progress-meta">
            <span>Progresso: <strong>${current} / ${total} págs</strong></span>
            <span style="font-weight: 700; color: var(--accent-purple);">${pct}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #BF5AF2, #5E5CE6);"></div>
          </div>
        </div>

        <!-- Quick Stepper: Register read pages -->
        <div class="book-stepper-row">
          <span style="font-size: 11px; color: var(--text-tertiary);">Registrar:</span>
          <button class="page-chip-btn add-pages-btn" data-step="5">+5</button>
          <button class="page-chip-btn add-pages-btn" data-step="10">+10</button>
          <button class="page-chip-btn add-pages-btn" data-step="20">+20</button>
          <span class="${statusClass}" style="margin-left: auto;">${statusLabel}</span>
        </div>

        ${book.lastInsight ? `<div class="book-insight-quote">"${escapeHtml(book.lastInsight)}"</div>` : ''}
      </div>
    `;

    // Quick Stepper handlers
    card.querySelectorAll('.add-pages-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const step = parseInt(btn.dataset.step, 10);
        book.currentPage = Math.min(total, (parseInt(book.currentPage, 10) || 0) + step);
        if (book.currentPage >= total) {
          book.status = 'completed';
          sound.playSuccessChime();
        } else {
          book.status = 'reading';
          sound.playPop();
        }
        store.save();
        renderKnowledgeBooks();
        renderActivityRings();
      };
    });

    // Delete Book
    card.querySelector('.delete-book-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.knowledge.books = store.state.knowledge.books.filter(b => b.id !== book.id);
      store.save();
      renderKnowledgeBooks();
      renderKnowledgeInsights();
    };

    container.appendChild(card);
  });
}

function renderKnowledgeCourses() {
  const courses = (store.state.knowledge && store.state.knowledge.courses) ? store.state.knowledge.courses : [];
  const container = document.getElementById('coursesGridContainer');
  if (!container) return;
  container.innerHTML = '';

  if (courses.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhum curso cadastrado. Clique em "+ Novo Curso".</div>`;
    return;
  }

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    const total = parseInt(course.totalLessons, 10) || 10;
    const current = Math.min(total, parseInt(course.currentLesson, 10) || 0);
    const pct = Math.min(100, Math.round((current / total) * 100));
    const isDone = current >= total;

    card.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span class="course-platform-badge">${escapeHtml(course.platform || 'Online')}</span>
          <button class="task-delete-btn delete-course-btn" title="Excluir curso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <h4 class="course-title">${escapeHtml(course.title)}</h4>
        <span style="font-size: 11px; color: var(--text-tertiary);">${escapeHtml(course.category || 'Geral')}</span>
      </div>

      <div class="book-progress-box">
        <div class="book-progress-meta">
          <span>Aulas: <strong>${current} de ${total}</strong></span>
          <span style="font-weight: 700; color: var(--accent-purple);">${pct}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #30B0C7, #BF5AF2);"></div>
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 10px;">
        <button class="page-chip-btn step-lesson-btn" ${isDone ? 'disabled style="opacity:0.5;"' : ''}>+1 Aula Concluída</button>
        <span class="${isDone ? 'badge-income' : 'task-area-pill pill-study'}">${isDone ? '✅ Certificado' : '🎓 Em Foco'}</span>
      </div>
    `;

    card.querySelector('.step-lesson-btn').onclick = () => {
      if (course.currentLesson < total) {
        course.currentLesson++;
        if (course.currentLesson >= total) {
          course.status = 'completed';
          sound.playSuccessChime();
        } else {
          sound.playPop();
        }
        store.save();
        renderKnowledgeCourses();
      }
    };

    card.querySelector('.delete-course-btn').onclick = () => {
      sound.playPop();
      store.state.knowledge.courses = store.state.knowledge.courses.filter(c => c.id !== course.id);
      store.save();
      renderKnowledgeCourses();
    };

    container.appendChild(card);
  });
}

function renderKnowledgeInsights() {
  const container = document.getElementById('insightsContainer');
  if (!container) return;
  container.innerHTML = '';

  const booksWithInsights = (store.state.knowledge && store.state.knowledge.books)
    ? store.state.knowledge.books.filter(b => b.lastInsight && b.lastInsight.trim())
    : [];

  if (booksWithInsights.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Adicione livros com notas ou lições para preencher seu mural de aprendizado.</div>`;
    return;
  }

  booksWithInsights.forEach(book => {
    const card = document.createElement('div');
    card.className = 'insight-card';
    card.innerHTML = `
      <p class="insight-quote-text">"${escapeHtml(book.lastInsight)}"</p>
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="insight-source">📖 ${escapeHtml(book.title)}</span>
        <span style="font-size: 11px; color: var(--text-tertiary);">${escapeHtml(book.author || '')}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function setupKnowledgeModals() {
  // 1. New Book Modal
  const openBookBtn = document.getElementById('openNewBookModalBtn');
  const closeBookBtn = document.getElementById('closeNewBookModal');
  const saveBookBtn = document.getElementById('saveBookBtn');

  const titleInput = document.getElementById('bookTitleInput');
  const authorInput = document.getElementById('bookAuthorInput');
  const totalPagesInput = document.getElementById('bookTotalPagesInput');
  const currentPageInput = document.getElementById('bookCurrentPageInput');
  const categoryInput = document.getElementById('bookCategoryInput');
  const statusSelect = document.getElementById('bookStatusSelect');
  const insightInput = document.getElementById('bookInsightInput');

  if (openBookBtn) {
    openBookBtn.onclick = () => {
      sound.playPop();
      openModal('newBookModal');
      setTimeout(() => {
        if (titleInput) titleInput.focus();
      }, 50);
    };
  }

  if (closeBookBtn) closeBookBtn.onclick = () => closeAllModals();

  if (saveBookBtn) {
    saveBookBtn.onclick = () => {
      const title = titleInput.value.trim();
      const author = authorInput.value.trim() || 'Autor não informado';
      const totalPages = parseInt(totalPagesInput.value, 10) || 250;
      const currentPage = parseInt(currentPageInput.value, 10) || 0;
      const cat = categoryInput.value.trim() || 'Leitura';
      const status = statusSelect.value;
      const insight = insightInput.value.trim();

      if (!title) return;

      if (!store.state.knowledge) store.state.knowledge = { books: [], courses: [] };
      if (!store.state.knowledge.books) store.state.knowledge.books = [];

      store.state.knowledge.books.unshift({
        id: 'b_' + Date.now(),
        title: title,
        author: author,
        totalPages: totalPages,
        currentPage: currentPage,
        status: status,
        category: cat,
        lastInsight: insight,
        lastReadDate: 'Hoje'
      });

      titleInput.value = '';
      authorInput.value = '';
      totalPagesInput.value = '';
      currentPageInput.value = '';
      categoryInput.value = '';
      insightInput.value = '';

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderKnowledgeBooks();
      renderKnowledgeInsights();
    };
  }

  // 2. New Course Modal
  const openCourseBtn = document.getElementById('openNewCourseModalBtn');
  const closeCourseBtn = document.getElementById('closeNewCourseModal');
  const saveCourseBtn = document.getElementById('saveCourseBtn');

  const courseTitleInput = document.getElementById('courseTitleInput');
  const coursePlatformInput = document.getElementById('coursePlatformInput');
  const courseTotalLessonsInput = document.getElementById('courseTotalLessonsInput');
  const courseCurrentLessonInput = document.getElementById('courseCurrentLessonInput');
  const courseCategoryInput = document.getElementById('courseCategoryInput');

  if (openCourseBtn) {
    openCourseBtn.onclick = () => {
      sound.playPop();
      openModal('newCourseModal');
      setTimeout(() => {
        if (courseTitleInput) courseTitleInput.focus();
      }, 50);
    };
  }

  if (closeCourseBtn) closeCourseBtn.onclick = () => closeAllModals();

  if (saveCourseBtn) {
    saveCourseBtn.onclick = () => {
      const title = courseTitleInput.value.trim();
      const platform = coursePlatformInput.value.trim() || 'Online';
      const totalLessons = parseInt(courseTotalLessonsInput.value, 10) || 20;
      const currentLesson = parseInt(courseCurrentLessonInput.value, 10) || 0;
      const category = courseCategoryInput.value.trim() || 'Habilidade';

      if (!title) return;

      if (!store.state.knowledge) store.state.knowledge = { books: [], courses: [] };
      if (!store.state.knowledge.courses) store.state.knowledge.courses = [];

      store.state.knowledge.courses.unshift({
        id: 'c_' + Date.now(),
        title: title,
        platform: platform,
        totalLessons: totalLessons,
        currentLesson: currentLesson,
        status: currentLesson >= totalLessons ? 'completed' : 'in_progress',
        category: category
      });

      courseTitleInput.value = '';
      coursePlatformInput.value = '';
      courseTotalLessonsInput.value = '';
      courseCurrentLessonInput.value = '';
      courseCategoryInput.value = '';

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderKnowledgeCourses();
    };
  }
}

// =============================================================================
// PERSONAL LIFE & GOOGLE CALENDAR HUB
// =============================================================================

function renderCalendarHub() {
  updateGoogleCalendarIframe();
  renderCalendarEvents();
}

function updateGoogleCalendarIframe() {
  const iframe = document.getElementById('googleCalendarIframe');
  if (!iframe) return;

  const calData = store.state.calendar || { googleCalendarId: '', viewMode: 'WEEK' };
  const mode = calData.viewMode || 'WEEK';

  let srcId = calData.googleCalendarId ? calData.googleCalendarId.trim() : '';

  // Extract src if user pasted full iframe or full embed URL
  if (srcId.includes('src=')) {
    const match = srcId.match(/src=([^&"]+)/);
    if (match && match[1]) {
      srcId = decodeURIComponent(match[1]);
    }
  }

  // If no calendar ID is provided yet, use clean public Brazilian holidays / Google calendar
  if (!srcId) {
    srcId = 'pt.brazilian#holiday@group.v.calendar.google.com';
    const sub = document.getElementById('calendarConnectionSubtitle');
    if (sub) {
      sub.innerHTML = `Exibindo calendário base. Clique em <strong>"Configurar E-mail/Link"</strong> para sincronizar sua conta do Google.`;
    }
  } else {
    const sub = document.getElementById('calendarConnectionSubtitle');
    if (sub) {
      sub.textContent = `Conectado à agenda: ${srcId}`;
    }
  }

  const encodedSrc = encodeURIComponent(srcId);
  const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodedSrc}&ctz=America%2FSao_Paulo&mode=${mode}&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`;

  if (iframe.src !== embedUrl) {
    iframe.src = embedUrl;
  }

  // Update external link
  const extLink = document.getElementById('externalGoogleCalLink');
  if (extLink) {
    extLink.href = 'https://calendar.google.com/calendar/u/0/r';
  }

  // Update mode selector buttons
  document.querySelectorAll('#calendarViewModeSelector .segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

let editingCalendarEventId = null;

function renderCalendarEvents() {
  const container = document.getElementById('calendarQuickEventsContainer');
  if (!container) return;
  container.innerHTML = '';

  const events = (store.state.calendar && store.state.calendar.events) ? store.state.calendar.events : [];

  if (events.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhum compromisso registrado para hoje. Use os rituais rápidos acima ou clique em "+ Novo Evento".</div>`;
    return;
  }

  // Sort events by time
  const sortedEvents = [...events].sort((a, b) => (a.time || '00:00').localeCompare(b.time || '00:00'));

  sortedEvents.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'agenda-event-card';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <div class="agenda-event-info-group" style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
        <span class="agenda-time-pill">${ev.time || '12:00'}</span>
        <div style="overflow: hidden;">
          <h4 class="agenda-event-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(ev.title)}</h4>
          <span class="agenda-event-meta">${escapeHtml(ev.type || 'Pessoal')} • ${escapeHtml(ev.duration || '1h')}${ev.location ? ' • ' + escapeHtml(ev.location) : ''}</span>
        </div>
      </div>
      <div class="agenda-actions-group">
        <button class="agenda-action-btn edit-event-btn" title="Editar compromisso">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="agenda-action-btn gcal-sync-event-btn" title="Sincronizar / Abrir no Google Agenda">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
        <button class="agenda-action-btn delete-btn delete-event-btn" title="Excluir compromisso">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    // Click on info group opens edit
    card.querySelector('.agenda-event-info-group').onclick = () => {
      openEditCalendarEvent(ev);
    };

    // Edit button
    card.querySelector('.edit-event-btn').onclick = (e) => {
      e.stopPropagation();
      openEditCalendarEvent(ev);
    };

    // Open in Google Calendar
    card.querySelector('.gcal-sync-event-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      openEventInGoogleCalendar(ev);
    };

    // Delete button
    card.querySelector('.delete-event-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.calendar.events = store.state.calendar.events.filter(item => item.id !== ev.id);
      store.save();
      renderCalendarEvents();
    };

    container.appendChild(card);
  });
}

function openEditCalendarEvent(ev) {
  sound.playPop();
  editingCalendarEventId = ev.id;

  const modalTitle = document.getElementById('calendarEventModalTitle');
  const saveBtn = document.getElementById('saveEventLocallyBtn');
  const evTitleInput = document.getElementById('calendarEventTitleInput');
  const evDateInput = document.getElementById('calendarEventDateInput');
  const evTimeInput = document.getElementById('calendarEventTimeInput');
  const evDurSelect = document.getElementById('calendarEventDurationInput');
  const evTypeSelect = document.getElementById('calendarEventTypeSelect');
  const evLocInput = document.getElementById('calendarEventLocationInput');

  if (modalTitle) modalTitle.textContent = 'Editar Compromisso';
  if (saveBtn) saveBtn.textContent = 'Salvar Alterações';

  if (evTitleInput) evTitleInput.value = ev.title || '';
  if (evDateInput) evDateInput.value = ev.date || getTodayString();
  if (evTimeInput) evTimeInput.value = ev.time || '14:00';
  if (evLocInput) evLocInput.value = ev.location || '';
  if (evTypeSelect) evTypeSelect.value = ev.type || 'Pessoal';

  // Duration match
  if (evDurSelect) {
    if (ev.duration && ev.duration.includes('30')) evDurSelect.value = '30';
    else if (ev.duration && ev.duration.includes('90')) evDurSelect.value = '90';
    else if (ev.duration && (ev.duration.includes('2') || ev.duration.includes('120'))) evDurSelect.value = '120';
    else evDurSelect.value = '60';
  }

  openModal('newCalendarEventModal');
  setTimeout(() => {
    if (evTitleInput) evTitleInput.focus();
  }, 50);
}

function openEventInGoogleCalendar(ev) {
  const date = ev.date || getTodayString();
  const time = ev.time || '14:00';
  const cleanDate = date.replace(/-/g, '');
  const cleanTime = time.replace(/:/g, '') + '00';
  const startIso = `${cleanDate}T${cleanTime}`;

  let durationMins = 60;
  if (ev.duration) {
    if (ev.duration.includes('30')) durationMins = 30;
    else if (ev.duration.includes('45')) durationMins = 45;
    else if (ev.duration.includes('90')) durationMins = 90;
    else if (ev.duration.includes('2') || ev.duration.includes('120')) durationMins = 120;
  }

  const startDateTime = new Date(`${date}T${time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + durationMins * 60000);
  const endIso = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const googleRenderUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent('Compromisso Aura - Vida Pessoal & Rotina')}&location=${encodeURIComponent(ev.location || '')}`;

  window.open(googleRenderUrl, '_blank');
}

function setupCalendarModals() {
  // Mode selector: WEEK, MONTH, AGENDA
  document.querySelectorAll('#calendarViewModeSelector .segment-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      if (!store.state.calendar) store.state.calendar = {};
      store.state.calendar.viewMode = btn.dataset.mode;
      store.save();
      updateGoogleCalendarIframe();
    };
  });

  // Routine preset buttons
  document.querySelectorAll('.add-routine-preset-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      const title = btn.dataset.title;
      const time = btn.dataset.time;
      const durMins = btn.dataset.dur;
      const type = btn.dataset.type;

      if (!store.state.calendar) store.state.calendar = { events: [] };
      if (!store.state.calendar.events) store.state.calendar.events = [];

      const durText = durMins === '30' ? '30 min' : durMins === '45' ? '45 min' : durMins === '90' ? '1h 30m' : '1h';

      store.state.calendar.events.push({
        id: 'ev_' + Date.now(),
        title: title,
        date: getTodayString(),
        time: time,
        duration: durText,
        type: type,
        location: 'Rotina Pessoal'
      });

      store.save();
      sound.playSuccessChime();
      renderCalendarEvents();
    };
  });

  // Config Modal
  const openConfigBtn = document.getElementById('openConfigCalendarBtn');
  const closeConfigBtn = document.getElementById('closeCalendarConfigModal');
  const saveConfigBtn = document.getElementById('saveCalendarConfigBtn');
  const idInput = document.getElementById('calendarIdInput');

  if (openConfigBtn) {
    openConfigBtn.onclick = () => {
      sound.playPop();
      if (idInput && store.state.calendar) {
        idInput.value = store.state.calendar.googleCalendarId || '';
      }
      openModal('googleCalendarConfigModal');
      setTimeout(() => {
        if (idInput) idInput.focus();
      }, 50);
    };
  }

  if (closeConfigBtn) closeConfigBtn.onclick = () => closeAllModals();

  if (saveConfigBtn) {
    saveConfigBtn.onclick = () => {
      const val = idInput.value.trim();
      if (!store.state.calendar) store.state.calendar = {};
      store.state.calendar.googleCalendarId = val;
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      updateGoogleCalendarIframe();
    };
  }

  // New / Edit Event Modal
  const openNewEventBtn = document.getElementById('openNewEventModalBtn');
  const closeNewEventBtn = document.getElementById('closeNewEventModal');
  const saveEventLocalBtn = document.getElementById('saveEventLocallyBtn');
  const syncGoogleBtn = document.getElementById('syncGoogleCalBtn');

  const evTitleInput = document.getElementById('calendarEventTitleInput');
  const evDateInput = document.getElementById('calendarEventDateInput');
  const evTimeInput = document.getElementById('calendarEventTimeInput');
  const evDurSelect = document.getElementById('calendarEventDurationInput');
  const evTypeSelect = document.getElementById('calendarEventTypeSelect');
  const evLocInput = document.getElementById('calendarEventLocationInput');
  const modalTitle = document.getElementById('calendarEventModalTitle');

  if (openNewEventBtn) {
    openNewEventBtn.onclick = () => {
      sound.playPop();
      editingCalendarEventId = null;
      if (modalTitle) modalTitle.textContent = 'Criar Evento na Agenda';
      if (saveEventLocalBtn) saveEventLocalBtn.textContent = 'Salvar no Aura';
      if (evTitleInput) evTitleInput.value = '';
      if (evLocInput) evLocInput.value = '';
      if (evDateInput) evDateInput.value = getTodayString();
      if (evTimeInput) evTimeInput.value = '14:00';
      if (evDurSelect) evDurSelect.value = '60';
      if (evTypeSelect) evTypeSelect.value = 'Pessoal';

      openModal('newCalendarEventModal');
      setTimeout(() => {
        if (evTitleInput) evTitleInput.focus();
      }, 50);
    };
  }

  if (closeNewEventBtn) closeNewEventBtn.onclick = () => closeAllModals();

  function saveEvent() {
    const title = evTitleInput.value.trim();
    if (!title) return null;

    const date = evDateInput.value || getTodayString();
    const time = evTimeInput.value || '14:00';
    const duration = evDurSelect.options[evDurSelect.selectedIndex].text;
    const type = evTypeSelect.value;
    const location = evLocInput.value.trim();

    if (!store.state.calendar) store.state.calendar = { events: [] };
    if (!store.state.calendar.events) store.state.calendar.events = [];

    if (editingCalendarEventId) {
      // Update existing
      const existing = store.state.calendar.events.find(e => e.id === editingCalendarEventId);
      if (existing) {
        existing.title = title;
        existing.date = date;
        existing.time = time;
        existing.duration = duration;
        existing.type = type;
        existing.location = location;
        store.save();
        return existing;
      }
    }

    const newEv = {
      id: 'ev_' + Date.now(),
      title: title,
      date: date,
      time: time,
      duration: duration,
      type: type,
      location: location
    };

    store.state.calendar.events.push(newEv);
    store.save();
    return newEv;
  }

  if (saveEventLocalBtn) {
    saveEventLocalBtn.onclick = () => {
      const saved = saveEvent();
      if (saved) {
        evTitleInput.value = '';
        evLocInput.value = '';
        sound.playSuccessChime();
        closeAllModals();
        renderCalendarEvents();
      }
    };
  }

  if (syncGoogleBtn) {
    syncGoogleBtn.onclick = () => {
      const title = evTitleInput.value.trim();
      if (!title) {
        alert('Informe o título do evento.');
        return;
      }
      const saved = saveEvent();
      const date = evDateInput.value || getTodayString();
      const time = evTimeInput.value || '14:00';
      const durationMins = parseInt(evDurSelect.value, 10) || 60;
      const location = evLocInput.value.trim();

      // Format ISO string YYYYMMDDTHHmmssZ
      const cleanDate = date.replace(/-/g, '');
      const cleanTime = time.replace(/:/g, '') + '00';
      const startIso = `${cleanDate}T${cleanTime}`;

      // End time calculation
      const startDateTime = new Date(`${date}T${time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + durationMins * 60000);
      const endIso = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

      const googleRenderUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent('Criado pelo Aura Productivity')}&location=${encodeURIComponent(location)}`;

      window.open(googleRenderUrl, '_blank');

      evTitleInput.value = '';
      evLocInput.value = '';
      sound.playSuccessChime();
      closeAllModals();
      renderCalendarEvents();
    };
  }
}

// =============================================================================
// 9. MODALS & SPOTLIGHT SYSTEM
// =============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

function setupQuickCaptureModal() {
  const trigger = document.getElementById('quickCaptureTrigger');
  const mobileTrigger = document.getElementById('mobileQuickCaptureBtn');
  const closeBtn = document.getElementById('closeQuickCaptureModal');
  const saveBtn = document.getElementById('modalSaveTaskBtn');
  const input = document.getElementById('modalTaskInput');
  const areaSelect = document.getElementById('modalTaskArea');
  const prioritySelect = document.getElementById('modalTaskPriority');

  const openQuick = () => {
    sound.playPop();
    openModal('quickCaptureModal');
    setTimeout(() => input.focus(), 50);
  };

  if (trigger) trigger.addEventListener('click', openQuick);
  if (mobileTrigger) mobileTrigger.addEventListener('click', openQuick);
  if (closeBtn) closeBtn.addEventListener('click', () => closeAllModals());

  const saveAction = () => {
    const text = input.value.trim();
    if (!text) return;

    store.state.tasks.unshift({
      id: 't_' + Date.now(),
      title: text,
      area: areaSelect.value,
      priority: prioritySelect.value,
      completed: false,
      date: getTodayString()
    });

    input.value = '';
    store.save();
    sound.playSuccessChime();
    closeAllModals();
    renderAll();
    if (currentActiveArea) renderAreaDetail(currentActiveArea);
  };

  saveBtn.addEventListener('click', saveAction);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveAction();
  });
}

function setupNewHabitModal() {
  const trigger = document.getElementById('addHabitModalTrigger');
  const closeBtn = document.getElementById('closeNewHabitModal');
  const saveBtn = document.getElementById('saveHabitBtn');
  const nameInput = document.getElementById('habitNameInput');
  const areaSelect = document.getElementById('habitAreaSelect');

  if (trigger) {
    trigger.addEventListener('click', () => {
      sound.playPop();
      openModal('newHabitModal');
      setTimeout(() => nameInput.focus(), 50);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => closeAllModals());

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (!name) return;

      store.state.habits.push({
        id: 'h_' + Date.now(),
        title: name,
        area: areaSelect.value,
        streak: 0,
        bestStreak: 0,
        history: {},
        completedDays: [false, false, false, false, false, false, false]
      });

      nameInput.value = '';
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderAll();
    });
  }
}

let currentInspectedHabitId = null;

function openHabitHistoryModal(habitId) {
  const habit = store.state.habits.find(h => h.id === habitId);
  if (!habit) return;
  currentInspectedHabitId = habitId;

  sound.playPop();

  // Ensure bestStreak and history exist
  if (!habit.bestStreak) habit.bestStreak = Math.max(habit.streak || 0, 7);
  if (!habit.history || typeof habit.history !== 'object') {
    habit.history = generateInitialHabitHistory(habit.streak || 3, 0.75);
  }

  // Update Modal Header
  const areaMeta = LIFE_AREAS[habit.area] || { label: habit.area, color: '#30D158', pillClass: 'pill-personal' };
  const pillEl = document.getElementById('habitModalAreaPill');
  const titleEl = document.getElementById('habitModalTitle');
  if (pillEl) {
    pillEl.className = `task-area-pill ${areaMeta.pillClass}`;
    pillEl.textContent = areaMeta.label.split('&')[0].trim();
  }
  if (titleEl) {
    titleEl.textContent = habit.title;
    titleEl.title = habit.title;
  }

  renderHabitModalContents(habit, areaMeta);
  openModal('habitHistoryModal');
}

function renderHabitModalContents(habit, areaMeta) {
  if (!areaMeta) {
    areaMeta = LIFE_AREAS[habit.area] || { label: habit.area, color: '#30D158', pillClass: 'pill-personal' };
  }

  // Calculate 30-day metrics
  const last30Days = [];
  for (let i = 29; i >= 0; i--) {
    last30Days.push(getPastDateString(i));
  }

  let completed30dCount = 0;
  last30Days.forEach(dateStr => {
    if (habit.history && habit.history[dateStr]) completed30dCount++;
  });
  const ratePct = Math.round((completed30dCount / 30) * 100);

  // Month-to-date count
  const currentMonthPrefix = getTodayString().slice(0, 7); // 'YYYY-MM'
  let monthCompleted = 0;
  if (habit.history) {
    Object.keys(habit.history).forEach(d => {
      if (d.startsWith(currentMonthPrefix) && habit.history[d]) monthCompleted++;
    });
  }

  // Update KPI Box values
  const streakEl = document.getElementById('habitModalStreakVal');
  const bestStreakEl = document.getElementById('habitModalBestStreakVal');
  const rateEl = document.getElementById('habitModalSuccessRateVal');
  const ratioSub = document.getElementById('habitModalCompletedRatioSub');
  const monthEl = document.getElementById('habitModalMonthVal');

  if (streakEl) streakEl.textContent = `${habit.streak || 0} dias`;
  if (bestStreakEl) bestStreakEl.textContent = `${habit.bestStreak || habit.streak || 0} dias`;
  if (rateEl) rateEl.textContent = `${ratePct}%`;
  if (ratioSub) ratioSub.textContent = `${completed30dCount} de 30 dias ativos`;
  if (monthEl) monthEl.textContent = `${monthCompleted} dias`;

  // Trend badge
  const trendBadge = document.getElementById('habitModalTrendBadge');
  if (trendBadge) {
    if (ratePct >= 80) trendBadge.textContent = '🔥 Excelente constância';
    else if (ratePct >= 60) trendBadge.textContent = '📈 Bom ritmo';
    else trendBadge.textContent = '⚡ Em construção';
  }

  // 1. Render Weekly Bar Chart (Last 4 Weeks)
  const chartContainer = document.getElementById('habitWeeklyBarChart');
  if (chartContainer) {
    chartContainer.innerHTML = '';
    const weeks = [
      { label: 'Sem -3', daysAgoStart: 27, daysAgoEnd: 21 },
      { label: 'Sem -2', daysAgoStart: 20, daysAgoEnd: 14 },
      { label: 'Sem Passada', daysAgoStart: 13, daysAgoEnd: 7 },
      { label: 'Esta Semana', daysAgoStart: 6, daysAgoEnd: 0 }
    ];

    weeks.forEach(w => {
      let count = 0;
      for (let i = w.daysAgoStart; i >= w.daysAgoEnd; i--) {
        const dStr = getPastDateString(i);
        if (habit.history && habit.history[dStr]) count++;
      }
      const pct = Math.round((count / 7) * 100);
      const isCurrentWeek = (w.daysAgoEnd === 0);

      const col = document.createElement('div');
      col.className = 'habit-week-col';
      col.innerHTML = `
        <span style="font-size: 11px; font-weight: 600; color: var(--text-secondary);">${count}/7</span>
        <div class="habit-week-bar-track">
          <div class="habit-week-bar-fill" style="height: ${Math.max(8, pct)}%; background: ${isCurrentWeek ? areaMeta.color : 'linear-gradient(180deg, ' + areaMeta.color + ', rgba(255,255,255,0.2))'}; box-shadow: ${isCurrentWeek ? '0 0 10px ' + areaMeta.color : 'none'};"></div>
        </div>
        <span style="font-size: 11px; font-weight: 500; color: ${isCurrentWeek ? 'var(--text-primary)' : 'var(--text-tertiary)'};">${w.label}</span>
      `;
      chartContainer.appendChild(col);
    });
  }

  // 2. Render 30-Day Heatmap Grid
  const heatmapContainer = document.getElementById('habitHeatmapGrid');
  if (heatmapContainer) {
    heatmapContainer.innerHTML = '';
    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const todayStr = getTodayString();

    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dStr = d.toISOString().split('T')[0];
      const isDone = Boolean(habit.history && habit.history[dStr]);
      const isToday = (dStr === todayStr);

      const dayNum = d.getDate();
      const dow = dayNames[d.getDay()];

      const box = document.createElement('div');
      box.className = `heatmap-day-box ${isDone ? 'completed' : ''} ${isToday ? 'today' : ''}`;
      box.title = `${dStr} (${dow}): ${isDone ? 'Concluído' : 'Pendente'}`;
      if (isDone) {
        box.style.background = areaMeta.color;
        box.style.boxShadow = `0 0 8px ${areaMeta.color}88`;
      }

      box.innerHTML = `
        <span class="heatmap-num">${dayNum}</span>
        <span class="heatmap-dow">${dow}</span>
      `;

      // Interactive click to toggle day
      box.onclick = () => {
        sound.playPop();
        if (!habit.history) habit.history = {};
        habit.history[dStr] = !habit.history[dStr];

        // If today, also update completedDays[6]
        if (isToday) {
          habit.completedDays[habit.completedDays.length - 1] = habit.history[dStr];
          if (habit.history[dStr]) habit.streak++;
          else if (habit.streak > 0) habit.streak--;
        }

        // Update bestStreak
        if (habit.streak > (habit.bestStreak || 0)) {
          habit.bestStreak = habit.streak;
        }

        store.save();
        renderHabitModalContents(habit, areaMeta);
        renderFullHabits();
        renderTodayHabits();
        renderActivityRings();
      };

      heatmapContainer.appendChild(box);
    }
  }
}

function setupHabitHistoryModalEvents() {
  const closeBtn = document.getElementById('closeHabitHistoryModal');
  const doneBtn = document.getElementById('closeHabitModalDoneBtn');
  const deleteBtn = document.getElementById('deleteHabitFromModalBtn');

  if (closeBtn) closeBtn.onclick = () => closeAllModals();
  if (doneBtn) doneBtn.onclick = () => closeAllModals();

  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (!currentInspectedHabitId) return;
      if (confirm('Tem certeza que deseja excluir este hábito e seu histórico?')) {
        sound.playPop();
        store.state.habits = store.state.habits.filter(h => h.id !== currentInspectedHabitId);
        store.save();
        closeAllModals();
        renderAll();
      }
    };
  }
}

function setupSettingsModal() {
  const trigger = document.getElementById('openSettingsModal');
  const closeBtn = document.getElementById('closeSettingsModal');
  const exportBtn = document.getElementById('exportDataBtn');
  const importFile = document.getElementById('importFileInput');
  const resetBtn = document.getElementById('resetDataBtn');

  if (trigger) {
    trigger.addEventListener('click', () => {
      sound.playPop();
      openModal('settingsModal');
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => closeAllModals());

  // Export JSON backup
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.state, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `aura_backup_${getTodayString()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      sound.playSuccessChime();
    });
  }

  // Import JSON backup
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported && imported.tasks && imported.habits) {
            store.state = imported;
            store.save();
            applyTheme(store.state.theme);
            renderAll();
            sound.playSuccessChime();
            alert('Backup restaurado com sucesso!');
            closeAllModals();
          } else {
            alert('Formato de backup inválido.');
          }
        } catch (err) {
          alert('Erro ao processar arquivo JSON.');
        }
      };
      reader.readAsText(file);
    });
  }

  // Reset to demo data
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Deseja resetar para os dados originais de demonstração?')) {
        store.reset();
        applyTheme(store.state.theme);
        renderAll();
        sound.playPop();
        closeAllModals();
      }
    });
  }
}

// =============================================================================
// 10. HELPERS & FORMATTERS
// =============================================================================

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#000000' : '#F2F2F7');
  }
}

function getPastDateString(daysAgo = 0) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

function getTodayString() {
  return getPastDateString(0);
}

function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Olá';
  if (hour >= 5 && hour < 12) greeting = 'Bom dia';
  else if (hour >= 12 && hour < 18) greeting = 'Boa tarde';
  else greeting = 'Boa noite';

  const greetingEl = document.getElementById('greetingDisplay');
  if (greetingEl) greetingEl.textContent = greeting;

  // Portuguese localized date formatting: e.g. "Sexta-feira, 24 de Outubro"
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = now.toLocaleDateString('pt-BR', options);
  // Capitalize first letter
  const formattedCap = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const dateEl = document.getElementById('currentDateDisplay');
  if (dateEl) dateEl.textContent = formattedCap;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// =============================================================================
// 11. FOCUS SECTION: TASKS, PERIOD COUNTER & 7-DAY SCREEN TIME HISTORY
// =============================================================================

function renderFocusSection() {
  renderFocusActiveTarget();
  renderFocusTasks();
  renderFocusKpis();
  renderFocusChart();
  renderFocusSessionsLog();
}

function renderFocusActiveTarget() {
  const displayEl = document.getElementById('activeFocusTaskDisplay');
  if (!displayEl) return;

  if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
  if (!store.state.focus.tasks) store.state.focus.tasks = [];

  const activeTask = store.state.focus.tasks.find(t => t.id === store.state.focus.activeTaskId);

  if (activeTask) {
    displayEl.textContent = activeTask.title;
    displayEl.title = activeTask.title;
  } else if (store.state.focus.tasks.length > 0) {
    store.state.focus.activeTaskId = store.state.focus.tasks[0].id;
    displayEl.textContent = store.state.focus.tasks[0].title;
    displayEl.title = store.state.focus.tasks[0].title;
  } else {
    displayEl.textContent = 'Nenhuma tarefa selecionada — adicione uma ao lado';
    displayEl.title = '';
  }
}

function renderFocusTasks() {
  const container = document.getElementById('focusTasksContainer');
  const countBadge = document.getElementById('focusTasksCountBadge');
  if (!container) return;

  if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
  if (!store.state.focus.tasks) store.state.focus.tasks = [];

  const tasks = store.state.focus.tasks;
  if (countBadge) countBadge.textContent = tasks.length;

  container.innerHTML = '';

  if (tasks.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding: 24px 10px;">Nenhuma tarefa na lista de foco.<br>Adicione uma demanda acima para metrificar seus períodos de foco.</div>`;
    return;
  }

  tasks.forEach(task => {
    const isActive = (store.state.focus.activeTaskId === task.id);
    const card = document.createElement('div');
    card.className = `focus-task-card ${isActive ? 'active-target' : ''} ${task.completed ? 'completed' : ''}`;

    const cycleCount = task.cycles || 0;
    const totalMinutes = cycleCount * 25;

    card.innerHTML = `
      <div class="focus-task-left">
        <div class="task-check-circle" title="${task.completed ? 'Reabrir tarefa' : 'Concluir tarefa'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <button class="focus-target-select-btn" title="Focar nesta demanda">
          ${isActive ? '🎯 Em Foco' : '🎯 Focar'}
        </button>
        <span class="focus-task-text">${escapeHtml(task.title)}</span>
      </div>

      <div class="focus-cycle-counter-group">
        <button class="focus-stepper-btn btn-step-down" title="Diminuir 1 ciclo">-</button>
        <span class="focus-cycle-pill" title="${cycleCount} períodos (${totalMinutes} min)">
          🍅 ${cycleCount} <span style="font-weight: 500; font-size: 10px; opacity: 0.85;">(${totalMinutes}m)</span>
        </span>
        <button class="focus-stepper-btn btn-step-up" title="Adicionar 1 ciclo">+ </button>
        <button class="task-delete-btn delete-focus-task-btn" title="Excluir tarefa" style="margin-left: 4px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    // Checkbox toggle
    card.querySelector('.task-check-circle').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      task.completed = !task.completed;
      store.save();
      renderFocusTasks();
    };

    // Target select
    card.querySelector('.focus-target-select-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.focus.activeTaskId = task.id;
      store.save();
      renderFocusSection();
    };

    // Stepper down (-)
    card.querySelector('.btn-step-down').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      task.cycles = Math.max(0, (task.cycles || 0) - 1);
      store.save();
      renderFocusSection();
    };

    // Stepper up (+)
    card.querySelector('.btn-step-up').onclick = (e) => {
      e.stopPropagation();
      sound.playSuccessChime();
      task.cycles = (task.cycles || 0) + 1;

      // Log session in history
      if (!store.state.focus.sessions) store.state.focus.sessions = [];
      store.state.focus.sessions.unshift({
        id: 'fs_' + Date.now(),
        date: getTodayString(),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        taskTitle: task.title,
        durationMinutes: 25,
        mode: 'Foco 25m'
      });

      store.save();
      renderFocusSection();
    };

    // Delete
    card.querySelector('.delete-focus-task-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.focus.tasks = store.state.focus.tasks.filter(t => t.id !== task.id);
      if (store.state.focus.activeTaskId === task.id) {
        store.state.focus.activeTaskId = store.state.focus.tasks.length > 0 ? store.state.focus.tasks[0].id : null;
      }
      store.save();
      renderFocusSection();
    };

    container.appendChild(card);
  });
}

function renderFocusKpis() {
  const sessions = (store.state.focus && store.state.focus.sessions) ? store.state.focus.sessions : [];
  const todayStr = getTodayString();

  const todaySessions = sessions.filter(s => s.date === todayStr);
  const todayCycles = todaySessions.length;
  const todayMinutes = todaySessions.reduce((acc, s) => acc + (parseInt(s.durationMinutes, 10) || 25), 0);

  const totalCycles = sessions.length;
  const totalMinutes = sessions.reduce((acc, s) => acc + (parseInt(s.durationMinutes, 10) || 25), 0);

  // Last 7 days average
  const last7Days = getLast7Days();
  const last7Dates = last7Days.map(d => d.dateStr);
  const weekSessions = sessions.filter(s => last7Dates.includes(s.date));
  const weekMinutes = weekSessions.reduce((acc, s) => acc + (parseInt(s.durationMinutes, 10) || 25), 0);
  const avgDailyMin = Math.round(weekMinutes / 7);

  // Active days count
  const uniqueDates = new Set(sessions.map(s => s.date));

  const elTodayKpi = document.getElementById('focusTodayKpiVal');
  const elTodayMin = document.getElementById('focusTodayMinutesVal');
  const elAvgDaily = document.getElementById('focusAvgDailyVal');
  const elTotalSessions = document.getElementById('focusTotalSessionsVal');
  const elTotalMin = document.getElementById('focusTotalMinutesVal');
  const elActiveDays = document.getElementById('focusActiveDaysVal');

  if (elTodayKpi) elTodayKpi.textContent = `${todayCycles} períodos`;
  if (elTodayMin) elTodayMin.textContent = `${todayMinutes} minutos acumulados hoje`;
  if (elAvgDaily) elAvgDaily.textContent = `${avgDailyMin} min/dia`;
  if (elTotalSessions) elTotalSessions.textContent = `${totalCycles}`;
  if (elTotalMin) elTotalMin.textContent = `${totalMinutes} min em ${totalCycles} sessões`;
  if (elActiveDays) elActiveDays.textContent = `${uniqueDates.size} dias`;

  const weekSub = document.getElementById('focusWeekTotalSubtitle');
  if (weekSub) {
    weekSub.textContent = `Total de ${weekMinutes} minutos e ${weekSessions.length} períodos nesta semana`;
  }
}

function renderFocusChart() {
  const container = document.getElementById('focusBarChartContainer');
  if (!container) return;
  container.innerHTML = '';

  const sessions = (store.state.focus && store.state.focus.sessions) ? store.state.focus.sessions : [];
  const last7Days = getLast7Days();

  // Calculate minutes and cycles per day
  const dayStats = last7Days.map(day => {
    const daySessions = sessions.filter(s => s.date === day.dateStr);
    const mins = daySessions.reduce((acc, s) => acc + (parseInt(s.durationMinutes, 10) || 25), 0);
    const cycles = daySessions.length;
    return {
      ...day,
      mins: mins,
      cycles: cycles
    };
  });

  const maxMins = Math.max(60, ...dayStats.map(d => d.mins));

  dayStats.forEach(d => {
    const col = document.createElement('div');
    col.className = `barchart-col ${d.isToday ? 'today' : ''}`;

    const heightPct = d.mins > 0 ? Math.min(100, Math.max(12, Math.round((d.mins / maxMins) * 100))) : 4;

    col.innerHTML = `
      <div class="barchart-val-label">
        ${d.mins > 0 ? `<span>${d.mins}m</span><br><span style="font-size: 10px; opacity: 0.85;">${d.cycles}🍅</span>` : '<span style="opacity: 0.4;">0m</span>'}
      </div>
      <div class="barchart-bar-track">
        <div class="barchart-bar-fill" style="height: ${heightPct}%;"></div>
      </div>
      <div class="barchart-day-label">${d.dayLabel}</div>
    `;

    container.appendChild(col);
  });
}

function renderFocusSessionsLog() {
  const container = document.getElementById('focusSessionsLogContainer');
  if (!container) return;
  container.innerHTML = '';

  const sessions = (store.state.focus && store.state.focus.sessions) ? store.state.focus.sessions : [];

  if (sessions.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding: 20px;">Nenhuma sessão de foco registrada ainda. Inicie o cronômetro para começar o histórico.</div>`;
    return;
  }

  // Display top 8 most recent
  const recentSessions = sessions.slice(0, 8);

  recentSessions.forEach(s => {
    const row = document.createElement('div');
    row.className = 'focus-session-row';

    const dateFormatted = (s.date === getTodayString()) ? 'Hoje' : (s.date === getPastDateString(1) ? 'Ontem' : s.date.slice(5).replace('-', '/'));

    row.innerHTML = `
      <div class="focus-session-left">
        <span class="focus-session-time">${dateFormatted} • ${escapeHtml(s.time || '')}</span>
        <span style="font-weight: 500; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(s.taskTitle || 'Foco Geral')}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
        <span class="focus-cycle-pill" style="font-size: 11px;">🍅 ${s.durationMinutes} min</span>
      </div>
    `;

    container.appendChild(row);
  });
}

function setupFocusTasksEvents() {
  const input = document.getElementById('newFocusTaskInput');
  const btn = document.getElementById('addFocusTaskBtn');

  function addFocusTask() {
    if (!input) return;
    const title = input.value.trim();
    if (!title) return;

    if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
    if (!store.state.focus.tasks) store.state.focus.tasks = [];

    const newTask = {
      id: 'ft_' + Date.now(),
      title: title,
      cycles: 0,
      completed: false
    };

    store.state.focus.tasks.unshift(newTask);
    store.state.focus.activeTaskId = newTask.id;
    store.save();

    input.value = '';
    sound.playSuccessChime();
    renderFocusSection();
  }

  if (btn) btn.onclick = addFocusTask;
  if (input) {
    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addFocusTask();
      }
    };
  }
}

function getLast7Days() {
  const days = [];
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const isToday = (i === 0);
    days.push({
      dateStr: dateStr,
      dayLabel: isToday ? 'Hoje' : dayNames[d.getDay()],
      fullDayName: dayNames[d.getDay()],
      isToday: isToday
    });
  }
  return days;
}
