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
  mainGoal: {
    title: 'Lançar Produto Digital & Atingir R$ 50k/mês',
    subtitle: 'Construir independência operacional e financeira através de excelência',
    category: 'work',
    deadline: '2026-12-31',
    unit: 'R$',
    targetValue: 50000,
    currentValue: 18500,
    whyItMatters: 'Garantir liberdade de tempo e geográfica para mim e minha família, trabalhando com paixão e impacto real.',
    dailyOneThing: 'Fechar as 3 primeiras parcerias de distribuição estratégicas',
    dailyOneThingCompleted: false,
    dailyOneThingLastDate: getTodayString(),
    milestones: [
      { id: 'mg_m1', title: 'Validar protótipo com 20 usuários beta', targetDate: '2026-11-15', done: true },
      { id: 'mg_m2', title: 'Implementar fluxo completo de vendas e onboarding', targetDate: '2026-11-30', done: true },
      { id: 'mg_m3', title: 'Alcançar os primeiros 50 clientes ativos recorrentes', targetDate: '2026-12-15', done: false },
      { id: 'mg_m4', title: 'Escalar canais de aquisição para meta final de R$ 50k', targetDate: '2026-12-31', done: false }
    ],
    nonNegotiables: [
      { id: 'nn1', text: '3 horas de foco profundo ininterrupto todas as manhãs' },
      { id: 'nn2', text: 'Zero reuniões ou redes sociais antes do meio-dia' },
      { id: 'nn3', text: 'Revisar métricas e aprendizados todo domingo às 18h' }
    ],
    notes: 'Lembre-se: o segredo não é fazer mais coisas, e sim fazer o essencial com consistência máxima todos os dias.'
  },
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
    { id: 'k1', title: 'Apresentação executiva de fechamento de trimestre', client: 'Acme Corp', project: 'Estratégia', priority: 'high', due: 'Sexta-feira', status: 'in_progress' },
    { id: 'k2', title: 'Alinhamento de cronograma com clientes-chave', client: 'Banco Alfa', project: 'Operações', priority: 'normal', due: 'Quinta-feira', status: 'in_progress' },
    { id: 'k3', title: 'Mapear requisitos do novo design system', client: 'Nexus Tech', project: 'Produto', priority: 'high', due: 'Hoje', status: 'todo' },
    { id: 'k4', title: 'Auditoria de performance e testes de usabilidade', client: 'Acme Corp', project: 'Qualidade', priority: 'normal', due: 'Amanhã', status: 'todo' },
    { id: 'k5', title: 'Revisão técnica de documentação e contratos', client: 'Banco Alfa', project: 'Jurídico', priority: 'low', due: 'Sexta-feira', status: 'review' },
    { id: 'k6', title: 'Kickoff do projeto com a equipe e stakeholders', client: 'Interno', project: 'Liderança', priority: 'normal', due: 'Segunda-feira', status: 'done' }
  ],
  finance: {
    monthlyBudget: 5000,
    savingsGoal: 1500,
    portfolioGoal: 100000.00,
    transactions: [
      { id: 'f1', description: 'Salário / Pró-labore', type: 'income', amount: 7500.00, category: 'Trabalho', date: '2026-10-05' },
      { id: 'f2', description: 'Consultoria Estratégica', type: 'income', amount: 1800.00, category: 'Trabalho', date: '2026-10-18' },
      { id: 'f3', description: 'Aluguel & Condomínio', type: 'expense', amount: 2200.00, category: 'Moradia', date: '2026-10-10' },
      { id: 'f4', description: 'Supermercado Semanal', type: 'expense', amount: 850.00, category: 'Alimentação', date: '2026-10-12' },
      { id: 'f5', description: 'Internet Fibra & Telefone', type: 'expense', amount: 210.00, category: 'Moradia', date: '2026-10-15' },
      { id: 'f6', description: 'Combustível / Transporte', type: 'expense', amount: 320.00, category: 'Transporte', date: '2026-10-19' },
      { id: 'f7', description: 'Aporte Tesouro Direto & FIIs', type: 'expense', amount: 1500.00, category: 'Investimentos', date: '2026-10-20' },
      { id: 'f8', description: 'Jantar Restaurante', type: 'expense', amount: 180.00, category: 'Lazer', date: '2026-10-22' }
    ],
    investments: [
      { id: 'inv1', ticker: 'Tesouro Selic 2029', name: 'Tesouro Direto Pós-Fixado', category: 'fixed_income', institution: 'XP Investimentos', quantity: 2.5, avgPrice: 14200.00, currentPrice: 14850.00 },
      { id: 'inv2', ticker: 'HGLG11', name: 'CSHG Logística FII', category: 'fiis', institution: 'Nubank', quantity: 60, avgPrice: 157.50, currentPrice: 164.80 },
      { id: 'inv3', ticker: 'PETR4', name: 'Petrobras PN', category: 'stocks', institution: 'BTG Pactual', quantity: 150, avgPrice: 33.40, currentPrice: 38.60 },
      { id: 'inv4', ticker: 'IVVB11', name: 'iShares S&P 500 Fundo de Índice', category: 'global', institution: 'XP Investimentos', quantity: 40, avgPrice: 285.00, currentPrice: 312.40 },
      { id: 'inv5', ticker: 'BTC', name: 'Bitcoin Spot', category: 'crypto', institution: 'Binance', quantity: 0.035, avgPrice: 320000.00, currentPrice: 395000.00 },
      { id: 'inv6', ticker: 'CDB 105% CDI', name: 'Reserva de Emergência Diária', category: 'emergency', institution: 'Nubank', quantity: 1, avgPrice: 12500.00, currentPrice: 13120.00 }
    ],
    connectedBanks: [
      { id: 'b_nu', name: 'Nubank', type: 'Conta Corrente & Ultravioleta', icon: '🟣', status: 'Ativo', lastSync: 'Hoje, 14:30' },
      { id: 'b_xp', name: 'XP Investimentos', type: 'Corretora de Valores', icon: '🟡', status: 'Ativo', lastSync: 'Hoje, 11:15' },
      { id: 'b_btg', name: 'BTG Pactual', type: 'Banco & Investimentos', icon: '🔵', status: 'Ativo', lastSync: 'Ontem' },
      { id: 'b_inter', name: 'Banco Inter', type: 'Conta Global & Corretora', icon: '🟠', status: 'Ativo', lastSync: 'Hoje, 09:00' },
      { id: 'b_bin', name: 'Binance', type: 'Exchange Cripto', icon: '🪙', status: 'Ativo', lastSync: 'Hoje, 16:00' }
    ]
  },
  knowledge: {
    booksGoalYear: 12,
    dailyPagesGoal: 20,
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
    dailyCyclesGoal: 4,
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
  quests: {
    totalXp: 650,
    dreams: [
      {
        id: 'd1',
        title: 'Conhecer o Japão na Primavera (Tokyo & Kyoto)',
        category: 'travel',
        targetYear: '2027',
        estimatedCost: 28000.00,
        savedAmount: 12500.00,
        completed: false,
        milestones: [
          { id: 'm1', title: 'Renovar passaporte brasileiro', done: true },
          { id: 'm2', title: 'Definir cidades e roteiro de 15 dias', done: true },
          { id: 'm3', title: 'Atingir 70% da reserva financeira da viagem', done: false },
          { id: 'm4', title: 'Emitir passagens aéreas e reservar hotéis', done: false }
        ],
        notes: 'Ver as cerejeiras em flor, subir ao Monte Fuji e mergulhar na cultura milenar.'
      },
      {
        id: 'd2',
        title: 'Comprar o Primeiro Imóvel / Apartamento Próprio',
        category: 'lifestyle',
        targetYear: '2028',
        estimatedCost: 120000.00,
        savedAmount: 48000.00,
        completed: false,
        milestones: [
          { id: 'm1', title: 'Estudar bairros estratégicos e valor do m²', done: true },
          { id: 'm2', title: 'Guardar reserva de entrada de R$ 100k', done: false },
          { id: 'm3', title: 'Simular crédito imobiliário nos principais bancos', done: false }
        ],
        notes: 'Apartamento aconchegante em bairro tranquilo para construir um lar sólido.'
      },
      {
        id: 'd3',
        title: 'Fluência em Inglês (Conversação Internacional)',
        category: 'career',
        targetYear: '2026',
        estimatedCost: 0,
        savedAmount: 0,
        completed: true,
        completedDate: '2026-08-15',
        milestones: [
          { id: 'm1', title: 'Completar curso avançado de gramática', done: true },
          { id: 'm2', title: 'Praticar conversação semanal por 6 meses', done: true },
          { id: 'm3', title: 'Fazer apresentação de trabalho 100% em inglês', done: true }
        ],
        notes: 'Conquistado! Apresentação executiva internacional realizada com sucesso.'
      }
    ],
    sideQuests: [
      {
        id: 'sq1',
        title: 'Desafio Sem Açúcar Refinado (14 Dias)',
        desc: 'Corte refrigerantes, doces e ultraprocessados para resetar o paladar e aumentar sua energia vital.',
        difficulty: 'medium',
        xpReward: 200,
        category: 'health',
        currentDays: 8,
        totalDays: 14,
        completed: false
      },
      {
        id: 'sq2',
        title: 'Trilogia Literária Clássica',
        desc: 'Leia 3 obras seminais em menos de 45 dias sem distrações de telas antes de dormir.',
        difficulty: 'epic',
        xpReward: 350,
        category: 'study',
        currentDays: 2,
        totalDays: 3,
        completed: false
      },
      {
        id: 'sq3',
        title: 'Desconexão Digital Total por 24 Horas',
        desc: 'Passe um domingo inteiro sem celular, redes sociais ou telas. Apenas mundo real e presença.',
        difficulty: 'medium',
        xpReward: 200,
        category: 'personal',
        currentDays: 0,
        totalDays: 1,
        completed: false
      },
      {
        id: 'sq4',
        title: 'Primeiros R$ 10.000 Investidos com Sabedoria',
        desc: 'Construa uma reserva de emergência ou carteira diversificada atingindo cinco dígitos.',
        difficulty: 'legendary',
        xpReward: 500,
        category: 'finance',
        currentDays: 1,
        totalDays: 1,
        completed: true,
        completedDate: '2026-09-10'
      }
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
  work: { label: 'Trabalho & Projetos', color: '#FFFFFF', pillClass: 'pill-work', desc: 'Foco de carreira, entregas importantes e iniciativas estratégicas.' },
  health: { label: 'Saúde & Bem-estar', color: '#E4E4E7', pillClass: 'pill-health', desc: 'Corpo, energia, rotina física e descanso restaurador.' },
  finance: { label: 'Finanças Pessoais', color: '#D4D4D8', pillClass: 'pill-finance', desc: 'Gestão de orçamento, aportes inteligentes e liberdade financeira.' },
  study: { label: 'Conhecimento & Mente', color: '#A1A1AA', pillClass: 'pill-study', desc: 'Leitura, aprendizados contínuos e clareza mental.' },
  personal: { label: 'Vida Pessoal & Rotina', color: '#71717A', pillClass: 'pill-personal', desc: 'Rituais diários e momentos de foco.' }
};

// =============================================================================
// 2. STATE MANAGER & PERSISTÊNCIA MULTIUSUÁRIO
// =============================================================================

function getEmptyUserData() {
  return {
    theme: 'dark',
    water: 0,
    waterGoal: 2500,
    tasks: [],
    habits: [],
    health: {
      nutrition: {
        calorieGoal: 2200,
        currentCalories: 0,
        proteinGoal: 150,
        currentProtein: 0,
        carbGoal: 220,
        currentCarb: 0,
        fatGoal: 65,
        currentFat: 0,
        meals: []
      },
      workout: {
        activeRoutine: '',
        routines: [],
        exercises: []
      },
      running: {
        weeklyGoalKm: 20,
        currentWeeklyKm: 0,
        sessions: []
      }
    },
    workKanban: [],
    finance: {
      monthlyBudget: 5000,
      savingsGoal: 1500,
      portfolioGoal: 100000,
      transactions: [],
      investments: [],
      connectedBanks: [
        { id: 'b_nu', name: 'Nubank', type: 'Conta Corrente & Investimentos', icon: '🟣', status: 'Ativo', lastSync: 'Configurado' },
        { id: 'b_xp', name: 'XP Investimentos', type: 'Corretora de Valores', icon: '🟡', status: 'Ativo', lastSync: 'Configurado' },
        { id: 'b_btg', name: 'BTG Pactual', type: 'Banco & Investimentos', icon: '🔵', status: 'Ativo', lastSync: 'Configurado' },
        { id: 'b_itau', name: 'Itaú / Íon', type: 'Banco & Corretora', icon: '🔷', status: 'Ativo', lastSync: 'Configurado' }
      ]
    },
    knowledge: {
      booksGoalYear: 12,
      dailyPagesGoal: 20,
      books: [],
      courses: []
    },
    calendar: {
      googleCalendarId: '',
      viewMode: 'WEEK',
      events: []
    },
    focus: {
      dailyCyclesGoal: 4,
      activeTaskId: null,
      tasks: [],
      sessions: []
    },
    quests: {
      totalXp: 0,
      dreams: [],
      sideQuests: []
    },
    mainGoal: {
      title: 'Minha Meta Principal',
      subtitle: 'Defina seu foco supremo e o objetivo que mudará seu jogo',
      category: 'work',
      deadline: '',
      unit: '%',
      targetValue: 100,
      currentValue: 0,
      whyItMatters: '',
      dailyOneThing: '',
      dailyOneThingCompleted: false,
      dailyOneThingLastDate: '',
      milestones: [],
      nonNegotiables: [
        { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
        { id: 'nn2', text: 'Dizer não a distrações secundárias' },
        { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
      ],
      notes: ''
    },
    mindsetQuotes: [
      '"A simplicidade é o grau máximo de sofisticação." — Steve Jobs',
      '"Foco significa dizer não a centenas de outras boas ideias." — Steve Jobs',
      '"Faça o que importa hoje. O resto é ruído." — Marco Aurélio',
      '"Pequenos hábitos diários produzem transformações extraordinárias."',
      '"A consistência bate a intensidade no longo prazo."'
    ]
  };
}

class UserManager {
  static ACTIVE_USER_KEY = 'aura_active_user';
  static USERS_LIST_KEY = 'aura_users_list';

  static getActiveUser() {
    try {
      const data = localStorage.getItem(this.ACTIVE_USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  static setActiveUser(user) {
    if (!user || !user.email) return null;
    const cleanEmail = user.email.toLowerCase().trim();
    const defaultName = cleanEmail.split('@')[0];
    const formattedName = user.name || (defaultName.charAt(0).toUpperCase() + defaultName.slice(1));
    const picture = user.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(formattedName)}&background=4285F4&color=fff&rounded=true&bold=true`;
    const cleanUser = {
      id: user.id || 'usr_' + Date.now(),
      email: cleanEmail,
      name: formattedName,
      picture: picture,
      provider: user.provider || 'google',
      lastLogin: new Date().toISOString()
    };
    try {
      localStorage.setItem(this.ACTIVE_USER_KEY, JSON.stringify(cleanUser));
      this.saveToUsersList(cleanUser);
    } catch (e) {
      console.error('Erro ao salvar usuário ativo:', e);
    }
    return cleanUser;
  }

  static getUsersList() {
    try {
      const data = localStorage.getItem(this.USERS_LIST_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  static saveToUsersList(user) {
    let list = this.getUsersList();
    list = list.filter(u => u.email !== user.email);
    list.unshift(user);
    try {
      localStorage.setItem(this.USERS_LIST_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  static logout() {
    try {
      localStorage.removeItem(this.ACTIVE_USER_KEY);
    } catch (e) {}
    if (typeof FirebaseService !== 'undefined') {
      FirebaseService.logout();
    }
  }

  static getStorageKey(user) {
    if (!user || !user.email) return 'aura_user_guest';
    return 'aura_user_' + encodeURIComponent(user.email.toLowerCase().trim());
  }
}

class Store {
  constructor() {
    this.currentUser = UserManager.getActiveUser();
    this.storageKey = UserManager.getStorageKey(this.currentUser);
    this.state = this.loadState();
  }

  setUser(user) {
    this.currentUser = user;
    this.storageKey = UserManager.getStorageKey(user);
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.health) parsed.health = { nutrition: { meals: [] }, workout: { routines: [], exercises: [] }, running: { weeklyGoalKm: 20, currentWeeklyKm: 0, sessions: [] } };
        if (!parsed.health.nutrition) parsed.health.nutrition = { calorieGoal: 2200, currentCalories: 0, proteinGoal: 150, currentProtein: 0, carbGoal: 220, currentCarb: 0, fatGoal: 65, currentFat: 0, meals: [] };
        if (!parsed.health.nutrition.calorieGoal) parsed.health.nutrition.calorieGoal = 2200;
        if (!parsed.health.nutrition.proteinGoal) parsed.health.nutrition.proteinGoal = 150;
        if (!parsed.health.nutrition.carbGoal) parsed.health.nutrition.carbGoal = 220;
        if (!parsed.health.nutrition.fatGoal) parsed.health.nutrition.fatGoal = 65;
        if (!Array.isArray(parsed.health.nutrition.meals)) parsed.health.nutrition.meals = [];
        if (!parsed.health.workout) parsed.health.workout = { activeRoutine: '', routines: [], exercises: [] };
        if (!Array.isArray(parsed.health.workout.routines)) parsed.health.workout.routines = [];
        if (!Array.isArray(parsed.health.workout.exercises)) parsed.health.workout.exercises = [];
        if (!parsed.health.running) parsed.health.running = { weeklyGoalKm: 20, currentWeeklyKm: 0, sessions: [] };
        if (!parsed.health.running.weeklyGoalKm) parsed.health.running.weeklyGoalKm = 20;
        if (!Array.isArray(parsed.health.running.sessions)) parsed.health.running.sessions = [];
        if (!Array.isArray(parsed.workKanban)) parsed.workKanban = [];
        if (!parsed.finance) parsed.finance = { monthlyBudget: 5000, savingsGoal: 1500, portfolioGoal: 100000, transactions: [], investments: [], connectedBanks: [] };
        if (!parsed.finance.monthlyBudget) parsed.finance.monthlyBudget = 5000;
        if (!parsed.finance.savingsGoal) parsed.finance.savingsGoal = 1500;
        if (!parsed.finance.portfolioGoal) parsed.finance.portfolioGoal = 100000;
        if (!Array.isArray(parsed.finance.transactions)) parsed.finance.transactions = [];
        if (!Array.isArray(parsed.finance.investments)) parsed.finance.investments = [];
        if (!Array.isArray(parsed.finance.connectedBanks)) {
          parsed.finance.connectedBanks = [
            { id: 'b_nu', name: 'Nubank', type: 'Conta Corrente & Investimentos', icon: '🟣', status: 'Ativo', lastSync: 'Configurado' },
            { id: 'b_xp', name: 'XP Investimentos', type: 'Corretora de Valores', icon: '🟡', status: 'Ativo', lastSync: 'Configurado' },
            { id: 'b_btg', name: 'BTG Pactual', type: 'Banco & Investimentos', icon: '🔵', status: 'Ativo', lastSync: 'Configurado' }
          ];
        }
        if (!parsed.knowledge) parsed.knowledge = { booksGoalYear: 12, dailyPagesGoal: 20, books: [], courses: [] };
        if (!parsed.knowledge.booksGoalYear) parsed.knowledge.booksGoalYear = 12;
        if (!parsed.knowledge.dailyPagesGoal) parsed.knowledge.dailyPagesGoal = 20;
        if (!Array.isArray(parsed.knowledge.books)) parsed.knowledge.books = [];
        if (!Array.isArray(parsed.knowledge.courses)) parsed.knowledge.courses = [];
        if (!parsed.calendar) parsed.calendar = { googleCalendarId: '', viewMode: 'WEEK', events: [] };
        if (!Array.isArray(parsed.calendar.events)) parsed.calendar.events = [];
        if (!parsed.focus) parsed.focus = { dailyCyclesGoal: 4, tasks: [], sessions: [], activeTaskId: null };
        if (!parsed.focus.dailyCyclesGoal) parsed.focus.dailyCyclesGoal = 4;
        if (!Array.isArray(parsed.focus.tasks)) parsed.focus.tasks = [];
        if (!Array.isArray(parsed.focus.sessions)) parsed.focus.sessions = [];
        if (!parsed.quests) parsed.quests = { totalXp: 0, dreams: [], sideQuests: [] };
        if (!Array.isArray(parsed.quests.dreams)) parsed.quests.dreams = [];
        if (!Array.isArray(parsed.quests.sideQuests)) parsed.quests.sideQuests = [];
        if (typeof parsed.quests.totalXp !== 'number') parsed.quests.totalXp = 0;
        if (!Array.isArray(parsed.tasks)) parsed.tasks = [];
        if (!Array.isArray(parsed.habits)) parsed.habits = [];
        if (parsed.water === undefined) parsed.water = 0;
        if (!parsed.waterGoal) parsed.waterGoal = 2500;
        if (!parsed.theme) parsed.theme = 'dark';
        if (!parsed.mainGoal || typeof parsed.mainGoal !== 'object') {
          parsed.mainGoal = {
            title: 'Minha Meta Principal',
            subtitle: 'Defina seu foco supremo e o objetivo que mudará seu jogo',
            category: 'work',
            deadline: '',
            unit: '%',
            targetValue: 100,
            currentValue: 0,
            whyItMatters: '',
            dailyOneThing: '',
            dailyOneThingCompleted: false,
            dailyOneThingLastDate: '',
            milestones: [],
            nonNegotiables: [
              { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
              { id: 'nn2', text: 'Dizer não a distrações secundárias' },
              { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
            ],
            notes: ''
          };
        }
        if (!Array.isArray(parsed.mainGoal.milestones)) parsed.mainGoal.milestones = [];
        if (!Array.isArray(parsed.mainGoal.nonNegotiables)) {
          parsed.mainGoal.nonNegotiables = [
            { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
            { id: 'nn2', text: 'Dizer não a distrações secundárias' },
            { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
          ];
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
    // New user entering -> clean/zerado initial state as requested!
    const cleanState = getEmptyUserData();
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(cleanState));
    } catch (e) {}
    return cleanState;
  }

  save() {
    this.saveLocalOnly();
    if (typeof FirebaseService !== 'undefined' && this.currentUser && this.currentUser.id) {
      FirebaseService.saveCloudState(this.currentUser, this.state);
    }
  }

  saveLocalOnly() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error('Erro ao salvar dados no localStorage:', e);
    }
  }

  reset() {
    this.state = getEmptyUserData();
    this.save();
  }

  loadDemoData() {
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
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
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
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.1, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.30);
      });
    } catch (e) {}
  }

  playFanfare() {
    setTimeout(() => {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [440, 554.37, 659.25, 880, 1108.73, 1318.51].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.12, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.46);
        });
      } catch (e) {}
    }, 0);
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
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      if (timerDigits.textContent !== formatted) {
        timerDigits.textContent = formatted;
      }
      
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

  // Event Listeners: Navigation Tabs
  setupNavigation();

  // Event Listeners: Google Authentication & Account Management
  setupAuthEvents();
  setupUserAccountModalEvents();
  setupFirebaseModalEvents();

  // Initialize Authentication & User Partition
  initAuthSystem();

  // Event Listeners: Quick Capture Modal
  setupQuickCaptureModal();

  // Event Listeners: New Habit Modal
  setupNewHabitModal();
  setupHabitHistoryModalEvents();

  // Event Listeners: Settings & Data Modal
  setupSettingsModal();

  // Event Listeners: Custom Goals & Budgets Modals (Saúde, Finanças, Conhecimento, Foco)
  setupGoalsModals();

  // Event Listeners: Health & Fitness Specialized Modals
  setupHealthModals();

  // Event Listeners: Work Kanban Board Modals
  setupKanbanModals();

  // Event Listeners: Personal Finance Spreadsheet Modals
  setupFinanceModals();
  setupInvestmentModals();

  // Event Listeners: Dreams, Goals & Side Quests Modals
  setupQuestModals();

  // Event Listeners: Knowledge & Reading Tracker Modals
  setupKnowledgeModals();

  // Event Listeners: Google Calendar & Agenda Modals
  setupCalendarModals();

  // Event Listeners: Focus Tasks & Steppers
  setupFocusTasksEvents();

  // Event Listeners: Meta Principal (North Star)
  setupMainGoalEvents();

  // Event Listeners: Water Tracker (Safe Guard)
  const addWaterBtn = document.getElementById('addWaterBtn');
  if (addWaterBtn) {
    addWaterBtn.addEventListener('click', () => {
      sound.playPop();
      store.state.water += 250;
      if (store.state.water > 5000) store.state.water = 5000;
      store.save();
      renderWaterTracker();
      renderActivityRings();
    });
  }

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
      if (!UserManager.getActiveUser()) return;
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
  renderMainGoalBadge();
  renderTodayNorthStarBanner();

  const mainGoalView = document.getElementById('viewMainGoal');
  if (mainGoalView && mainGoalView.classList.contains('active-view')) {
    renderMainGoalView();
  }

  const habitsView = document.getElementById('viewHabits');
  if (habitsView && habitsView.classList.contains('active-view')) {
    renderFullHabits();
  }

  const focusView = document.getElementById('viewFocus');
  if (focusView && focusView.classList.contains('active-view')) {
    renderFocusSection();
  }

  const questsView = document.getElementById('viewQuests');
  if (questsView && questsView.classList.contains('active-view')) {
    renderQuestsHub();
  }
}

/**
 * Render Today's Habit strip
 */
function renderTodayHabits() {
  const container = document.getElementById('todayHabitsList');
  if (!container) return;

  const habits = store.state.habits || [];
  if (habits.length === 0) {
    container.innerHTML = `
      <div style="padding: 12px 16px; background: var(--bg-card); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md); font-size: 12px; color: var(--text-tertiary); display: flex; align-items: center; gap: 8px;">
        <span>🌱 Nenhum hábito diário cadastrado ainda. Use "+ Novo Hábito" acima para registrar seus rituais.</span>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  habits.forEach(habit => {
    const isCompleted = habit.completedDays && habit.completedDays[habit.completedDays.length - 1];
    const card = document.createElement('div');
    card.className = `habit-quick-card ${isCompleted ? 'completed' : ''}`;
    card.dataset.habitId = habit.id;
    card.innerHTML = `
      <div class="habit-check-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="habit-info">
        <span class="habit-name">${escapeHtml(habit.title)}</span>
        <span class="habit-streak">🔥 ${habit.streak || 0} dias seguidos</span>
      </div>
    `;

    card.addEventListener('click', () => {
      toggleHabitToday(habit.id);
    });

    fragment.appendChild(card);
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}

/**
 * Render Task List
 */
function createTodayTaskItem(task) {
  const areaMeta = LIFE_AREAS[task.area] || { label: task.area, pillClass: 'pill-work' };
  const item = document.createElement('div');
  item.className = `task-item ${task.completed ? 'completed' : ''}`;
  item.dataset.taskId = task.id;
  item.innerHTML = `
    <div class="task-check-circle" title="${task.completed ? 'Reabrir tarefa' : 'Concluir tarefa'}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div class="task-content">
      <div class="task-title" style="cursor: pointer;" title="${task.completed ? 'Reabrir tarefa' : 'Concluir tarefa'}">${escapeHtml(task.title)}</div>
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

  const toggle = (e) => {
    e.stopPropagation();
    toggleTask(task.id, item);
  };

  item.querySelector('.task-check-circle').addEventListener('click', toggle);
  item.querySelector('.task-title').addEventListener('click', toggle);

  item.querySelector('.task-delete-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  });

  return item;
}

let _todayCompletedSectionOpen = false;

function renderTodayTasks(filter = 'all') {
  const container = document.getElementById('todayTaskList');
  if (!container) return;

  let filteredTasks = store.state.tasks;
  if (filter !== 'all') {
    filteredTasks = filteredTasks.filter(t => t.area === filter);
  }

  const pendingTasks = filteredTasks.filter(t => !t.completed);
  const completedTasks = filteredTasks.filter(t => t.completed);

  // Update pending badge
  const pendingTotal = store.state.tasks.filter(t => !t.completed).length;
  const badge = document.getElementById('todayPendingBadge');
  if (badge) badge.textContent = pendingTotal;

  container.innerHTML = '';

  if (pendingTasks.length === 0 && completedTasks.length === 0) {
    container.innerHTML = `<div class="empty-state">Nenhuma ação nesta categoria. Crie uma nova tarefa acima para focar no que importa.</div>`;
    return;
  }

  // Render pending tasks
  if (pendingTasks.length === 0) {
    const doneBox = document.createElement('div');
    doneBox.className = 'empty-state';
    doneBox.style.padding = '20px 10px';
    doneBox.innerHTML = '🎉 Todas as tarefas de hoje foram concluídas!';
    container.appendChild(doneBox);
  } else {
    pendingTasks.forEach(task => {
      container.appendChild(createTodayTaskItem(task));
    });
  }

  // Render collapsed completed section
  if (completedTasks.length > 0) {
    const section = document.createElement('div');
    section.className = 'completed-tasks-section';
    section.innerHTML = `
      <button class="completed-tasks-toggle-btn ${_todayCompletedSectionOpen ? 'open' : ''}" id="todayCompletedToggleBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>Concluídas (${completedTasks.length})</span>
      </button>
      <div class="completed-tasks-wrapper ${_todayCompletedSectionOpen ? '' : 'hidden'}" id="todayCompletedWrapper"></div>
    `;

    const wrapper = section.querySelector('#todayCompletedWrapper');
    completedTasks.forEach(task => {
      wrapper.appendChild(createTodayTaskItem(task));
    });

    const toggleBtn = section.querySelector('#todayCompletedToggleBtn');
    toggleBtn.onclick = () => {
      sound.playPop();
      _todayCompletedSectionOpen = !_todayCompletedSectionOpen;
      toggleBtn.classList.toggle('open', _todayCompletedSectionOpen);
      wrapper.classList.toggle('hidden', !_todayCompletedSectionOpen);
    };

    container.appendChild(section);
  }
}

/**
 * Render Water Tracker Bar
 */
function renderWaterTracker() {
  const current = store.state.water || 0;
  const goal = store.state.waterGoal || 2500;
  const pct = Math.min(100, Math.round((current / goal) * 100));
  
  const text = document.getElementById('waterCount');
  const goalEl = document.getElementById('waterGoalDisplay');
  const bar = document.getElementById('waterProgressBar');
  if (text) text.textContent = current.toLocaleString('pt-BR');
  if (goalEl) goalEl.textContent = goal.toLocaleString('pt-BR');
  if (bar) bar.style.width = `${pct}%`;
}

/**
 * Render Concentric Apple Activity Rings
 */
function renderActivityRings() {
  // 1. Ring Work: percentage of work tasks done
  const workTasks = store.state.tasks ? store.state.tasks.filter(t => t.area === 'work') : [];
  const workDone = workTasks.filter(t => t.completed).length;
  const workPct = workTasks.length ? Math.round((workDone / workTasks.length) * 100) : 0;

  // 2. Ring Health: water intake + health tasks completed
  const healthTasks = store.state.tasks ? store.state.tasks.filter(t => t.area === 'health') : [];
  const healthDone = healthTasks.filter(t => t.completed).length;
  const waterPct = Math.min(100, Math.round(((store.state.water || 0) / (store.state.waterGoal || 2500)) * 100));
  const healthPct = healthTasks.length ? Math.round((waterPct + ((healthDone / healthTasks.length) * 100)) / 2) : waterPct;

  // 3. Ring Habits: today's completed habits
  const totalHabits = store.state.habits ? store.state.habits.length : 0;
  const habitsDone = store.state.habits ? store.state.habits.filter(h => h.completedDays && h.completedDays[h.completedDays.length - 1]).length : 0;
  const habitsPct = totalHabits ? Math.round((habitsDone / totalHabits) * 100) : 0;

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
    summary.textContent = totalHabits > 0 ? `${habitsDone} de ${totalHabits} hábitos concluídos` : '0 hábitos cadastrados';
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

  const levelBadge = document.getElementById('questsNavLevelBadge');
  if (levelBadge) {
    const totalXp = (store.state.quests && store.state.quests.totalXp) ? store.state.quests.totalXp : 0;
    const levelInfo = getUserLevelInfo(totalXp);
    levelBadge.textContent = `Nv. ${levelInfo.level}`;
  }
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

  const todayCompleted = habits.filter(h => h.completedDays && h.completedDays[h.completedDays.length - 1]).length;
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

  if (habits.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 3rem 1.5rem; text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 0.75rem;">🌱</div>
        <h4 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Nenhum hábito cadastrado</h4>
        <p style="color: var(--text-secondary); max-width: 420px; margin: 0 auto 1.25rem; font-size: 0.9rem;">
          Construa consistência dia após dia. Cadastre seu primeiro hábito para acompanhar sua evolução e gráficos diários.
        </p>
        <button class="apple-primary-btn" id="emptyStateAddHabitBtn" style="margin: 0 auto;">
          <span>+ Criar Primeiro Hábito</span>
        </button>
      </div>
    `;
    const emptyBtn = document.getElementById('emptyStateAddHabitBtn');
    if (emptyBtn) emptyBtn.addEventListener('click', () => openModal('newHabitModal'));
    return;
  }

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

    // Click on individual day dots (Atomic DOM updates without tearing down full tree)
    card.querySelectorAll('.day-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayIdx = parseInt(dot.dataset.day, 10);
        habit.completedDays[dayIdx] = !habit.completedDays[dayIdx];
        const isNowDone = habit.completedDays[dayIdx];
        dot.classList.toggle('active', isNowDone);

        if (dayIdx === habit.completedDays.length - 1) {
          if (isNowDone) {
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

        const streakBadge = card.querySelector('.habit-streak-badge');
        if (streakBadge) streakBadge.textContent = `🔥 ${habit.streak} dias`;

        const totalChecked30d = Object.values(habit.history || {}).filter(Boolean).length;
        const rate30d = Math.min(100, Math.round((totalChecked30d / 30) * 100));
        const rateText = card.querySelector('.habit-rate-text');
        if (rateText) {
          rateText.textContent = `🎯 ${rate30d}% taxa (30d) • 🏆 Recorde: ${habit.bestStreak || habit.streak}d`;
        }

        sound.playPop();
        store.save();
        renderTodayHabits();
        renderActivityRings();
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

function toggleTask(id, explicitEl) {
  const task = store.state.tasks.find(t => t.id === id);
  if (!task) return;

  const taskEls = document.querySelectorAll(`.task-item[data-task-id="${id}"]`);
  const elements = explicitEl ? [explicitEl] : (taskEls.length > 0 ? Array.from(taskEls) : []);

  if (!task.completed) {
    // 1. Validação Instantânea (0ms):
    task.completed = true;
    sound.playSuccessChime();

    // Feedback visual imediato: check azul/verde + ícone + riscado instantâneo
    elements.forEach(el => {
      el.classList.add('completed');
      el.classList.add('task-check-pop');
    });

    // Atualiza anéis e contadores instantaneamente
    renderActivityRings();
    renderCounts();
    const pendingTotal = store.state.tasks.filter(t => !t.completed).length;
    const badge = document.getElementById('todayPendingBadge');
    if (badge) badge.textContent = pendingTotal;

    store.save();

    // 2. Animação suave de desaparecimento após o usuário VER a confirmação do check
    setTimeout(() => {
      elements.forEach(el => el.classList.add('task-completing'));
      setTimeout(() => {
        renderTodayTasks();
        if (currentActiveArea) renderAreaDetail(currentActiveArea);
      }, 220);
    }, 180);

  } else {
    // Reabrir tarefa instantaneamente (0ms)
    task.completed = false;
    sound.playPop();

    elements.forEach(el => {
      el.classList.remove('completed', 'task-completing', 'task-check-pop');
    });

    store.save();
    renderTodayTasks();
    renderActivityRings();
    renderCounts();
    if (currentActiveArea) renderAreaDetail(currentActiveArea);
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
  const isNowCompleted = habit.completedDays[lastIndex];

  if (isNowCompleted) {
    habit.streak += 1;
    sound.playSuccessChime();
  } else {
    habit.streak = Math.max(0, habit.streak - 1);
    sound.playPop();
  }

  store.save();

  // Fast atomic update of the today quick card
  const quickCard = document.querySelector(`.habit-quick-card[data-habit-id="${id}"]`);
  if (quickCard) {
    quickCard.classList.toggle('completed', isNowCompleted);
    const streakEl = quickCard.querySelector('.habit-streak');
    if (streakEl) streakEl.textContent = `🔥 ${habit.streak} dias seguidos`;
  } else {
    renderTodayHabits();
  }

  const habitsView = document.getElementById('viewHabits');
  if (habitsView && habitsView.classList.contains('active-view')) {
    renderFullHabits();
  }
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
  } else if (tabName === 'mainGoal') {
    document.getElementById('viewMainGoal').classList.add('active-view');
    renderMainGoalView();
  } else if (tabName === 'focus') {
    document.getElementById('viewFocus').classList.add('active-view');
    renderFocusSection();
  } else if (tabName === 'habits') {
    document.getElementById('viewHabits').classList.add('active-view');
    renderFullHabits();
  } else if (tabName === 'quests') {
    document.getElementById('viewQuests').classList.add('active-view');
    renderQuestsHub();
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
    item.dataset.taskId = task.id;
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

    item.querySelector('.task-check-circle').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTask(task.id, item);
    });
    item.querySelector('.task-title').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTask(task.id, item);
    });
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

  if (!nutrition.meals || nutrition.meals.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 22px 14px; color: var(--text-tertiary); font-size: 13px;">
        <p style="margin-bottom: 8px;">Nenhuma refeição cadastrada no momento.</p>
        <button id="emptyAddMealBtn" class="apple-secondary-btn-sm">+ Nova Refeição</button>
      </div>
    `;
    const emptyBtn = document.getElementById('emptyAddMealBtn');
    if (emptyBtn) {
      emptyBtn.onclick = () => {
        sound.playPop();
        openModal('newMealModal');
        setTimeout(() => document.getElementById('mealNameInput')?.focus(), 50);
      };
    }
    return;
  }

  nutrition.meals.forEach(meal => {
    const item = document.createElement('div');
    item.className = `meal-item ${meal.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="task-check-circle" title="Marcar refeição realizada">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="meal-content" title="Clique para personalizar refeição">
        <div class="meal-name">${escapeHtml(meal.name)}</div>
        <div class="meal-desc">${escapeHtml(meal.items)}</div>
      </div>
      <span class="meal-cal-badge" title="Clique para personalizar calorias">${meal.calories} kcal</span>
      <button class="meal-edit-btn" title="Personalizar refeição">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
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

    const handleEdit = (e) => {
      e.stopPropagation();
      openEditMealModal(meal.id);
    };

    item.querySelector('.meal-content').onclick = handleEdit;
    item.querySelector('.meal-cal-badge').onclick = handleEdit;
    item.querySelector('.meal-edit-btn').onclick = handleEdit;

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

function openEditMealModal(mealId) {
  const nutrition = (store.state.health && store.state.health.nutrition) ? store.state.health.nutrition : {};
  const meal = (nutrition.meals || []).find(m => m.id === mealId);
  if (!meal) return;

  sound.playPop();
  const idEl = document.getElementById('editMealId');
  const nameEl = document.getElementById('editMealNameInput');
  const itemsEl = document.getElementById('editMealItemsInput');
  const calEl = document.getElementById('editMealCaloriesInput');

  if (idEl) idEl.value = meal.id;
  if (nameEl) nameEl.value = meal.name || '';
  if (itemsEl) itemsEl.value = meal.items || '';
  if (calEl) calEl.value = meal.calories || '';

  openModal('editMealModal');
  setTimeout(() => nameEl && nameEl.focus(), 50);
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
  const weeklyGoal = running.weeklyGoalKm || 20;
  const kmEl = document.getElementById('runWeeklyKmVal');
  if (kmEl) kmEl.textContent = `${running.currentWeeklyKm.toFixed(1)} / ${weeklyGoal} km`;
  
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
    item.dataset.taskId = task.id;
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

    const toggleHealth = (e) => {
      e.stopPropagation();
      toggleTask(task.id, item);
    };
    item.querySelector('.task-check-circle').onclick = toggleHealth;
    item.querySelector('.task-title').onclick = toggleHealth;

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
  const openMealBtn2 = document.getElementById('openNewMealModalBtn2');
  const closeMealBtn = document.getElementById('closeNewMealModal');
  const saveMealBtn = document.getElementById('saveMealBtn');
  const mealNameInput = document.getElementById('mealNameInput');
  const mealItemsInput = document.getElementById('mealItemsInput');
  const mealCaloriesInput = document.getElementById('mealCaloriesInput');

  const handleOpenNewMeal = () => {
    sound.playPop();
    openModal('newMealModal');
    setTimeout(() => mealNameInput && mealNameInput.focus(), 50);
  };

  if (openMealBtn) openMealBtn.onclick = handleOpenNewMeal;
  if (openMealBtn2) openMealBtn2.onclick = handleOpenNewMeal;
  if (closeMealBtn) closeMealBtn.onclick = () => closeAllModals();

  if (saveMealBtn) {
    saveMealBtn.onclick = () => {
      const name = mealNameInput.value.trim();
      const items = mealItemsInput.value.trim() || 'Itens selecionados';
      const cals = parseInt(mealCaloriesInput.value, 10) || 350;
      if (!name) return;

      if (!Array.isArray(store.state.health.nutrition.meals)) {
        store.state.health.nutrition.meals = [];
      }

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

  // 1b. Edit / Customize Meal Modal
  const closeEditMealBtn = document.getElementById('closeEditMealModal');
  const saveEditMealBtn = document.getElementById('saveEditMealBtn');
  const deleteMealModalBtn = document.getElementById('deleteMealModalBtn');
  const editMealNameInput = document.getElementById('editMealNameInput');
  const editMealItemsInput = document.getElementById('editMealItemsInput');
  const editMealCaloriesInput = document.getElementById('editMealCaloriesInput');

  if (closeEditMealBtn) closeEditMealBtn.onclick = () => closeAllModals();

  if (saveEditMealBtn) {
    saveEditMealBtn.onclick = () => {
      const mealId = document.getElementById('editMealId').value;
      const meal = (store.state.health.nutrition.meals || []).find(m => m.id === mealId);
      if (!meal) return;

      const name = editMealNameInput.value.trim();
      const items = editMealItemsInput.value.trim() || 'Itens selecionados';
      const cals = parseInt(editMealCaloriesInput.value, 10) || 0;
      if (!name) return;

      meal.name = name;
      meal.items = items;
      meal.calories = cals;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthDiet();
    };
  }

  if (deleteMealModalBtn) {
    deleteMealModalBtn.onclick = () => {
      const mealId = document.getElementById('editMealId').value;
      sound.playPop();
      store.state.health.nutrition.meals = (store.state.health.nutrition.meals || []).filter(m => m.id !== mealId);
      store.save();
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
let currentKanbanClientFilter = 'all';

function renderWorkKanban() {
  const cards = store.state.workKanban || [];

  // 1. Gather all unique clients and calculate counts per client
  const clientCounts = {};
  cards.forEach(c => {
    const clientName = (c.client && c.client.trim()) ? c.client.trim() : 'Interno';
    clientCounts[clientName] = (clientCounts[clientName] || 0) + 1;
  });

  const uniqueClients = Object.keys(clientCounts).sort();

  // 2. Render client filter bar
  const clientTabsContainer = document.getElementById('kanbanClientPillsList');
  if (clientTabsContainer) {
    clientTabsContainer.innerHTML = '';

    // "Todos" button
    const allBtn = document.createElement('button');
    allBtn.className = `kanban-client-filter-btn ${currentKanbanClientFilter === 'all' ? 'active' : ''}`;
    allBtn.innerHTML = `<span>Todos os Clientes</span><span class="client-count-pill">${cards.length}</span>`;
    allBtn.onclick = () => {
      sound.playPop();
      currentKanbanClientFilter = 'all';
      renderWorkKanban();
    };
    clientTabsContainer.appendChild(allBtn);

    // Each client button
    uniqueClients.forEach(clientName => {
      const btn = document.createElement('button');
      btn.className = `kanban-client-filter-btn ${currentKanbanClientFilter === clientName ? 'active' : ''}`;
      btn.innerHTML = `<span>🏢 ${escapeHtml(clientName)}</span><span class="client-count-pill">${clientCounts[clientName]}</span>`;
      btn.onclick = () => {
        sound.playPop();
        currentKanbanClientFilter = (currentKanbanClientFilter === clientName) ? 'all' : clientName;
        renderWorkKanban();
      };
      clientTabsContainer.appendChild(btn);
    });
  }

  // 3. Populate datalist for new card modal autocomplete
  const datalistEl = document.getElementById('kanbanClientDatalist');
  if (datalistEl) {
    datalistEl.innerHTML = '';
    const datalistOptions = ['Interno', ...uniqueClients.filter(c => c !== 'Interno')];
    datalistOptions.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      datalistEl.appendChild(opt);
    });
  }

  // 4. Filter visible cards
  const visibleCards = (currentKanbanClientFilter === 'all')
    ? cards
    : cards.filter(c => ((c.client && c.client.trim()) ? c.client.trim() : 'Interno') === currentKanbanClientFilter);

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

  visibleCards.forEach(card => {
    const colStatus = card.status || 'todo';
    if (counts[colStatus] !== undefined) {
      counts[colStatus]++;
    }

    const cardClient = (card.client && card.client.trim()) ? card.client.trim() : 'Interno';
    const cardEl = document.createElement('div');
    cardEl.className = 'kanban-card';
    cardEl.draggable = true;
    cardEl.dataset.id = card.id;

    // Current index in status flow
    const currentIdx = KANBAN_STATUS_FLOW.indexOf(colStatus);
    const canMoveLeft = currentIdx > 0;
    const canMoveRight = currentIdx < KANBAN_STATUS_FLOW.length - 1;

    cardEl.innerHTML = `
      <div class="kanban-card-top-tags">
        <span class="kanban-client-badge" title="Filtrar por ${escapeHtml(cardClient)}">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M16 11h2M16 15h2M10 21V3h4v18"></path>
          </svg>
          ${escapeHtml(cardClient)}
        </span>
        <span class="kanban-project-pill">${escapeHtml(card.project || 'Geral')}</span>
      </div>
      <div class="kanban-card-title">${escapeHtml(card.title)}</div>
      <div class="kanban-card-meta">
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

    // Click client badge to filter by client
    const clientBadge = cardEl.querySelector('.kanban-client-badge');
    if (clientBadge) {
      clientBadge.onclick = (e) => {
        e.stopPropagation();
        sound.playPop();
        currentKanbanClientFilter = cardClient;
        renderWorkKanban();
      };
    }

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
  const clientInput = document.getElementById('kanbanClientInput');
  const projectInput = document.getElementById('kanbanProjectInput');
  const statusSelect = document.getElementById('kanbanStatusSelect');
  const prioritySelect = document.getElementById('kanbanPrioritySelect');
  const dueInput = document.getElementById('kanbanDueInput');

  const openModalForStatus = (status = 'todo') => {
    sound.playPop();
    if (statusSelect) statusSelect.value = status;
    if (clientInput) {
      clientInput.value = (currentKanbanClientFilter !== 'all') ? currentKanbanClientFilter : '';
    }
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

      const client = clientInput ? clientInput.value.trim() : '';
      const project = projectInput.value.trim() || 'Geral';
      const status = statusSelect.value;
      const priority = prioritySelect.value;
      const due = dueInput.value.trim() || 'Esta semana';

      if (!store.state.workKanban) store.state.workKanban = [];

      store.state.workKanban.unshift({
        id: 'k_' + Date.now(),
        title: title,
        client: client || 'Interno',
        project: project,
        status: status,
        priority: priority,
        due: due
      });

      titleInput.value = '';
      if (clientInput) clientInput.value = '';
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
// PERSONAL FINANCE HUB (Spreadsheet, Investments & Open Banking)
// =============================================================================

let activeFinanceSubtab = 'ledger';
let financeCurrentTypeFilter = 'all';
let financeCurrentCategoryFilter = 'all';
let investCurrentCategoryFilter = 'all';
let investCurrentBankFilter = 'all';

const ASSET_CLASSES = {
  fixed_income: { label: 'Renda Fixa / Tesouro', color: '#FFFFFF', badgeClass: 'badge-fixed' },
  fiis: { label: 'Fundos Imobiliários (FIIs)', color: '#E4E4E7', badgeClass: 'badge-fiis' },
  stocks: { label: 'Ações Nacionais (B3)', color: '#D4D4D8', badgeClass: 'badge-stocks' },
  global: { label: 'Internacional / BDRs', color: '#A1A1AA', badgeClass: 'badge-global' },
  crypto: { label: 'Criptoativos', color: '#71717A', badgeClass: 'badge-crypto' },
  emergency: { label: 'Reserva de Emergência', color: '#E4E4E7', badgeClass: 'badge-emergency' }
};

function formatBRL(amount) {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderFinanceHub() {
  setupFinanceSubnav();
  renderFinanceLedger();
  renderInvestmentsHub();
  renderBanksHub();
}

function setupFinanceSubnav() {
  document.querySelectorAll('.finance-subnav-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      document.querySelectorAll('.finance-subnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFinanceSubtab = btn.dataset.subtab;

      const vLedger = document.getElementById('financeSubViewLedger');
      const vInvest = document.getElementById('financeSubViewInvestments');
      const vBanks = document.getElementById('financeSubViewBanks');

      if (vLedger) vLedger.classList.toggle('hidden', activeFinanceSubtab !== 'ledger');
      if (vInvest) vInvest.classList.toggle('hidden', activeFinanceSubtab !== 'investments');
      if (vBanks) vBanks.classList.toggle('hidden', activeFinanceSubtab !== 'banks');

      if (activeFinanceSubtab === 'investments') renderInvestmentsHub();
      if (activeFinanceSubtab === 'banks') renderBanksHub();
      if (activeFinanceSubtab === 'ledger') renderFinanceLedger();
    };
  });
}

function renderFinanceLedger() {
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

  // Update Budget Progress KPI Card
  const monthlyBudget = (store.state.finance && store.state.finance.monthlyBudget) ? store.state.finance.monthlyBudget : 5000;
  const budgetValEl = document.getElementById('financeBudgetVal');
  const budgetBarEl = document.getElementById('financeBudgetBar');
  const budgetSubEl = document.getElementById('financeBudgetSub');

  if (budgetValEl && budgetBarEl && budgetSubEl) {
    const budgetPct = monthlyBudget > 0 ? Math.min(100, Math.round((totalExpense / monthlyBudget) * 100)) : 0;
    budgetValEl.textContent = `${formatBRL(totalExpense)} / ${formatBRL(monthlyBudget)}`;
    budgetBarEl.style.width = `${budgetPct}%`;
    if (totalExpense > monthlyBudget) {
      budgetBarEl.style.background = 'var(--accent-red)';
      budgetSubEl.textContent = `Excedeu o teto em ${formatBRL(totalExpense - monthlyBudget)}! (${Math.round((totalExpense / monthlyBudget) * 100)}%)`;
      budgetSubEl.style.color = 'var(--accent-red)';
    } else {
      budgetBarEl.style.background = budgetPct > 80 ? 'var(--accent-orange)' : 'var(--accent-green)';
      const remaining = monthlyBudget - totalExpense;
      budgetSubEl.textContent = `${budgetPct}% do teto mensal utilizado (${formatBRL(remaining)} restante)`;
      budgetSubEl.style.color = 'var(--text-secondary)';
    }
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

// =============================================================================
// INVESTMENTS PORTFOLIO (APPLE HUMAN INTERFACE ASSET ALLOCATION)
// =============================================================================

function renderInvestmentsHub() {
  const investments = (store.state.finance && store.state.finance.investments) ? store.state.finance.investments : [];
  const portfolioGoal = (store.state.finance && store.state.finance.portfolioGoal) ? store.state.finance.portfolioGoal : 100000;

  let totalEquity = 0;
  let totalCost = 0;
  const classBreakdown = {
    fixed_income: 0,
    fiis: 0,
    stocks: 0,
    global: 0,
    crypto: 0,
    emergency: 0
  };

  investments.forEach(inv => {
    const qty = parseFloat(inv.quantity) || 0;
    const avg = parseFloat(inv.avgPrice) || 0;
    const cur = parseFloat(inv.currentPrice) || avg;
    const positionEquity = qty * cur;
    const positionCost = qty * avg;

    totalEquity += positionEquity;
    totalCost += positionCost;

    const cat = inv.category && classBreakdown[inv.category] !== undefined ? inv.category : 'stocks';
    classBreakdown[cat] += positionEquity;
  });

  const totalProfit = totalEquity - totalCost;
  const profitPct = totalCost > 0 ? ((totalEquity / totalCost) - 1) * 100 : 0;

  // Update KPIs
  const elEquity = document.getElementById('investTotalEquityVal');
  const elCost = document.getElementById('investTotalCostVal');
  const elProfit = document.getElementById('investTotalProfitVal');
  const elProfitPct = document.getElementById('investTotalProfitPct');
  const elGoalVal = document.getElementById('investPortfolioGoalVal');
  const elGoalBar = document.getElementById('investPortfolioGoalBar');
  const elGoalSub = document.getElementById('investPortfolioGoalSub');

  if (elEquity) elEquity.textContent = formatBRL(totalEquity);
  if (elCost) elCost.textContent = formatBRL(totalCost);
  if (elProfit) {
    elProfit.textContent = (totalProfit >= 0 ? '+' : '') + formatBRL(totalProfit);
    elProfit.style.color = totalProfit >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
  }
  if (elProfitPct) {
    elProfitPct.textContent = `${profitPct >= 0 ? '+' : ''}${profitPct.toFixed(1)}% de rentabilidade global`;
    elProfitPct.style.color = profitPct >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
  }
  if (elGoalVal) elGoalVal.textContent = formatBRL(portfolioGoal);
  if (elGoalBar) {
    const goalPct = portfolioGoal > 0 ? Math.min(100, Math.round((totalEquity / portfolioGoal) * 100)) : 0;
    elGoalBar.style.width = `${goalPct}%`;
  }
  if (elGoalSub) {
    const goalPct = portfolioGoal > 0 ? Math.round((totalEquity / portfolioGoal) * 100) : 0;
    elGoalSub.textContent = `${goalPct}% da meta de ${formatBRL(portfolioGoal)} atingida`;
  }

  // Render Multi-segment Allocation Bar
  const barContainer = document.getElementById('allocationMultiBar');
  const legendContainer = document.getElementById('allocationLegendGrid');

  if (barContainer) {
    barContainer.innerHTML = '';
    if (totalEquity === 0) {
      barContainer.innerHTML = `<div style="width: 100%; height: 100%; background: var(--bg-pill-hover); border-radius: var(--radius-pill);"></div>`;
    } else {
      Object.keys(classBreakdown).forEach(key => {
        const amount = classBreakdown[key];
        if (amount > 0) {
          const pct = (amount / totalEquity) * 100;
          const meta = ASSET_CLASSES[key] || { label: key, color: '#FFFFFF' };
          const seg = document.createElement('div');
          seg.className = 'allocation-segment';
          seg.style.width = `${pct}%`;
          seg.style.background = meta.color;
          seg.title = `${meta.label}: ${pct.toFixed(1)}% (${formatBRL(amount)})`;
          barContainer.appendChild(seg);
        }
      });
    }
  }

  // Render Legend
  if (legendContainer) {
    legendContainer.innerHTML = '';
    Object.keys(classBreakdown).forEach(key => {
      const amount = classBreakdown[key];
      const pct = totalEquity > 0 ? ((amount / totalEquity) * 100) : 0;
      const meta = ASSET_CLASSES[key] || { label: key, color: '#FFFFFF' };

      const item = document.createElement('div');
      item.className = 'allocation-legend-item';
      item.innerHTML = `
        <span class="allocation-legend-dot" style="background: ${meta.color};"></span>
        <div class="allocation-legend-info">
          <span class="allocation-legend-name">${meta.label}</span>
          <span class="allocation-legend-val">${pct.toFixed(1)}% &bull; ${formatBRL(amount)}</span>
        </div>
      `;
      legendContainer.appendChild(item);
    });
  }

  // Populate Bank Filter dropdown
  const bankFilter = document.getElementById('investBankFilter');
  if (bankFilter) {
    const currentVal = bankFilter.value;
    const institutions = Array.from(new Set(investments.map(i => i.institution).filter(Boolean)));
    bankFilter.innerHTML = '<option value="all">Todas as Instituições</option>';
    institutions.forEach(inst => {
      const opt = document.createElement('option');
      opt.value = inst;
      opt.textContent = inst;
      if (inst === currentVal) opt.selected = true;
      bankFilter.appendChild(opt);
    });
  }

  // Render Table
  renderInvestmentsTable();
}

function renderInvestmentsTable() {
  const tbody = document.getElementById('investmentsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let list = (store.state.finance && store.state.finance.investments) ? [...store.state.finance.investments] : [];

  if (investCurrentCategoryFilter !== 'all') {
    list = list.filter(i => i.category === investCurrentCategoryFilter);
  }
  if (investCurrentBankFilter !== 'all') {
    list = list.filter(i => i.institution === investCurrentBankFilter);
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="empty-state" style="text-align: center; padding: 36px;">Nenhum ativo de investimento cadastrado. Clique em "+ Novo Ativo / Aporte" para começar.</td></tr>`;
    return;
  }

  list.forEach(inv => {
    const tr = document.createElement('tr');
    const qty = parseFloat(inv.quantity) || 0;
    const avg = parseFloat(inv.avgPrice) || 0;
    const cur = parseFloat(inv.currentPrice) || avg;
    const totalPos = qty * cur;
    const totalCost = qty * avg;
    const profit = totalPos - totalCost;
    const returnPct = totalCost > 0 ? ((totalPos / totalCost) - 1) * 100 : 0;

    const meta = ASSET_CLASSES[inv.category] || { label: 'Ações', badgeClass: 'badge-stocks' };

    tr.innerHTML = `
      <td>
        <strong style="color: var(--text-primary); font-size: 13px;">${escapeHtml(inv.ticker)}</strong>
        <div style="font-size: 11px; color: var(--text-secondary);">${escapeHtml(inv.name || '')}</div>
      </td>
      <td>
        <span class="${meta.badgeClass}">${meta.label}</span>
      </td>
      <td>
        <span style="font-size: 12px; color: var(--text-secondary); font-weight: 500;">${escapeHtml(inv.institution || 'Geral')}</span>
      </td>
      <td>${qty.toLocaleString('pt-BR', { maximumFractionDigits: 6 })}</td>
      <td>${formatBRL(avg)}</td>
      <td>${formatBRL(cur)}</td>
      <td><strong>${formatBRL(totalPos)}</strong></td>
      <td>
        <span class="${profit >= 0 ? 'invest-profit' : 'invest-loss'}">
          ${profit >= 0 ? '+' : ''}${formatBRL(profit)} (${returnPct >= 0 ? '+' : ''}${returnPct.toFixed(1)}%)
        </span>
      </td>
      <td style="text-align: right; white-space: nowrap;">
        <button class="icon-btn edit-invest-btn" title="Editar Ativo" style="background: none; border: none; cursor: pointer; color: var(--text-secondary); padding: 4px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <button class="task-delete-btn delete-invest-btn" title="Excluir" style="margin-left: 6px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </td>
    `;

    // Edit button
    tr.querySelector('.edit-invest-btn').onclick = () => {
      sound.playPop();
      openEditInvestmentModal(inv);
    };

    // Delete button
    tr.querySelector('.delete-invest-btn').onclick = () => {
      if (confirm(`Remover ativo ${inv.ticker} da sua carteira?`)) {
        sound.playPop();
        store.state.finance.investments = store.state.finance.investments.filter(i => i.id !== inv.id);
        store.save();
        renderInvestmentsHub();
        renderBanksHub();
      }
    };

    tbody.appendChild(tr);
  });
}

// =============================================================================
// CONNECTED BANKS & OPEN BANKING STATEMENTS (OFX / CSV)
// =============================================================================

function renderBanksHub() {
  const container = document.getElementById('connectedBanksGrid');
  if (!container) return;
  container.innerHTML = '';

  const banks = (store.state.finance && store.state.finance.connectedBanks) ? store.state.finance.connectedBanks : [];
  const investments = (store.state.finance && store.state.finance.investments) ? store.state.finance.investments : [];

  banks.forEach(bank => {
    // Calculate total balance allocated to this bank
    const bankInvestments = investments.filter(i => (i.institution || '').toLowerCase().trim() === bank.name.toLowerCase().trim());
    const bankBalance = bankInvestments.reduce((acc, i) => acc + ((parseFloat(i.quantity) || 0) * (parseFloat(i.currentPrice) || parseFloat(i.avgPrice) || 0)), 0);

    const card = document.createElement('div');
    card.className = 'bank-card';
    card.innerHTML = `
      <div>
        <div class="bank-card-header">
          <div class="bank-card-icon">${bank.icon || '🏦'}</div>
          <span class="badge-income" style="font-size: 10px;">🟢 ${escapeHtml(bank.status || 'Ativo')}</span>
        </div>
        <div class="bank-card-title">${escapeHtml(bank.name)}</div>
        <div class="bank-card-type">${escapeHtml(bank.type || 'Conta & Investimentos')}</div>
      </div>
      <div class="bank-card-balance">
        <span class="bank-balance-lbl">Patrimônio Alocado</span>
        <span class="bank-balance-num">${formatBRL(bankBalance)}</span>
        <span style="font-size: 11px; color: var(--text-tertiary);">${bankInvestments.length} ativo(s) vinculado(s)</span>
      </div>
      <div class="bank-card-footer">
        <span style="font-size: 11px; color: var(--text-tertiary);">${escapeHtml(bank.lastSync || 'Sincronizado')}</span>
        <button class="pill-btn add-invest-to-bank-btn" data-bank="${escapeHtml(bank.name)}" style="font-size: 11px; padding: 4px 10px;">+ Aporte</button>
      </div>
    `;

    card.querySelector('.add-invest-to-bank-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      const bName = e.currentTarget.dataset.bank;
      openCreateInvestmentForBank(bName);
    };

    container.appendChild(card);
  });

  setupStatementDropzone();
}

function parseBankStatement(text, filename = '') {
  const transactions = [];
  const lower = filename.toLowerCase();

  // 1. Check if OFX file
  if (text.includes('<OFX>') || text.includes('<STMTTRN>') || lower.endsWith('.ofx')) {
    const trnRegex = /<STMTTRN>([\s\S]*?)<\/STMTTRN>/gi;
    let match;
    while ((match = trnRegex.exec(text)) !== null) {
      const block = match[1];
      const dateMatch = block.match(/<DTPOSTED>([0-9]{8})/i);
      const amtMatch = block.match(/<TRNAMT>([^\r\n<]+)/i);
      const memoMatch = block.match(/<(?:MEMO|NAME)>([^\r\n<]+)/i);

      if (amtMatch) {
        const rawAmt = parseFloat(amtMatch[1].trim().replace(',', '.'));
        const isExpense = rawAmt < 0;
        const absAmt = Math.abs(rawAmt);

        let dateStr = getTodayString();
        if (dateMatch && dateMatch[1].length === 8) {
          const y = dateMatch[1].substring(0, 4);
          const m = dateMatch[1].substring(4, 6);
          const d = dateMatch[1].substring(6, 8);
          dateStr = `${y}-${m}-${d}`;
        }

        const desc = memoMatch ? memoMatch[1].trim() : (isExpense ? 'Despesa Bancária' : 'Receita Bancária');

        let category = 'Outros';
        const dLower = desc.toLowerCase();
        if (dLower.includes('mercado') || dLower.includes('supermercado') || dLower.includes('ifood') || dLower.includes('restaurante') || dLower.includes('padaria') || dLower.includes('cafe')) {
          category = 'Alimentação';
        } else if (dLower.includes('uber') || dLower.includes('99') || dLower.includes('combustivel') || dLower.includes('posto') || dLower.includes('gasolina')) {
          category = 'Transporte';
        } else if (dLower.includes('aluguel') || dLower.includes('condominio') || dLower.includes('luz') || dLower.includes('energia') || dLower.includes('internet') || dLower.includes('claro') || dLower.includes('vivo')) {
          category = 'Moradia';
        } else if (dLower.includes('salario') || dLower.includes('ted recebida') || dLower.includes('pix recebido') || dLower.includes('remunera')) {
          category = 'Trabalho';
        } else if (dLower.includes('tesouro') || dLower.includes('fii') || dLower.includes('invest') || dLower.includes('aporte') || dLower.includes('cdb') || dLower.includes('xp') || dLower.includes('btg')) {
          category = 'Investimentos';
        } else if (dLower.includes('netflix') || dLower.includes('spotify') || dLower.includes('cinema') || dLower.includes('ingresso') || dLower.includes('steam')) {
          category = 'Lazer';
        }

        transactions.push({
          id: 'f_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          description: desc,
          type: isExpense ? 'expense' : 'income',
          amount: absAmt,
          category: category,
          date: dateStr
        });
      }
    }
  } else {
    // 2. CSV Parser
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
    const firstLine = lines[0] || '';
    const delimiter = (firstLine.split(';').length > firstLine.split(',').length) ? ';' : ',';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const cols = line.split(delimiter).map(c => c.trim().replace(/^["']|["']$/g, ''));
      if (cols.length < 2) continue;

      // Skip header lines
      if (cols.some(c => /data|date|descri|valor|amount/i.test(c))) continue;

      let foundDate = null;
      let foundAmt = null;
      let foundDesc = '';

      for (let j = 0; j < cols.length; j++) {
        const val = cols[j];
        if (!foundDate && /^\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}$/.test(val)) {
          const parts = val.split(/[\/\-\.]/);
          if (parts[0].length === 4) {
            foundDate = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
          } else {
            const yr = parts[2].length === 2 ? '20' + parts[2] : parts[2];
            foundDate = `${yr}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
          }
        } else if (!foundDate && /^\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2}$/.test(val)) {
          const parts = val.split(/[\/\-\.]/);
          foundDate = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
        } else {
          const cleanNum = val.replace('R$', '').replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
          const num = parseFloat(cleanNum);
          if (!isNaN(num) && Math.abs(num) > 0.001 && foundAmt === null) {
            foundAmt = num;
          } else if (val.length > 2 && !foundDesc) {
            foundDesc = val;
          }
        }
      }

      if (foundAmt !== null) {
        const isExpense = foundAmt < 0;
        const absAmt = Math.abs(foundAmt);
        transactions.push({
          id: 'f_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          description: foundDesc || (isExpense ? 'Despesa Importada' : 'Receita Importada'),
          type: isExpense ? 'expense' : 'income',
          amount: absAmt,
          category: 'Outros',
          date: foundDate || getTodayString()
        });
      }
    }
  }

  return transactions;
}

function setupStatementDropzone() {
  const dropzone = document.getElementById('bankStatementDropzone');
  const fileInput = document.getElementById('bankStatementFileInput');
  const triggerBtn = document.getElementById('triggerStatementFileInputBtn');
  const feedback = document.getElementById('statementImportFeedback');

  if (!dropzone || !fileInput) return;

  if (triggerBtn) {
    triggerBtn.onclick = (e) => {
      e.stopPropagation();
      fileInput.click();
    };
  }

  dropzone.onclick = () => fileInput.click();

  dropzone.ondragover = (e) => {
    e.preventDefault();
    dropzone.classList.add('drag-over');
  };

  dropzone.ondragleave = () => {
    dropzone.classList.remove('drag-over');
  };

  dropzone.ondrop = (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleStatementFile(e.dataTransfer.files[0]);
    }
  };

  fileInput.onchange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleStatementFile(e.target.files[0]);
    }
  };

  function handleStatementFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const parsed = parseBankStatement(text, file.name);
        if (parsed.length > 0) {
          if (!store.state.finance) store.state.finance = {};
          if (!Array.isArray(store.state.finance.transactions)) store.state.finance.transactions = [];

          store.state.finance.transactions.push(...parsed);
          store.save();
          sound.playSuccessChime();

          if (feedback) {
            feedback.classList.remove('hidden');
            feedback.innerHTML = `✅ <strong>${parsed.length} transações importadas com sucesso!</strong> Atualizado no Extrato e Fluxo de Caixa.`;
            setTimeout(() => feedback.classList.add('hidden'), 8000);
          }

          renderFinanceHub();
        } else {
          alert('Não foram encontradas transações válidas no arquivo fornecido. Verifique se é um arquivo .OFX ou .CSV com colunas de Data e Valor.');
        }
      } catch (err) {
        alert('Erro ao processar arquivo de extrato: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
}

function openEditInvestmentModal(inv) {
  const title = document.getElementById('investmentModalTitle');
  const idInput = document.getElementById('editInvestmentId');
  const tickerInput = document.getElementById('investTickerInput');
  const nameInput = document.getElementById('investNameInput');
  const catSelect = document.getElementById('investCategorySelect');
  const instInput = document.getElementById('investInstitutionInput');
  const qtyInput = document.getElementById('investQuantityInput');
  const avgInput = document.getElementById('investAvgPriceInput');
  const curInput = document.getElementById('investCurrentPriceInput');

  if (title) title.textContent = 'Editar Ativo da Carteira';
  if (idInput) idInput.value = inv.id;
  if (tickerInput) tickerInput.value = inv.ticker;
  if (nameInput) nameInput.value = inv.name || '';
  if (catSelect) catSelect.value = inv.category || 'stocks';
  if (instInput) instInput.value = inv.institution || 'Nubank';
  if (qtyInput) qtyInput.value = inv.quantity;
  if (avgInput) avgInput.value = inv.avgPrice;
  if (curInput) curInput.value = inv.currentPrice || inv.avgPrice;

  openModal('newInvestmentModal');
}

function openCreateInvestmentForBank(bankName) {
  const idInput = document.getElementById('editInvestmentId');
  const title = document.getElementById('investmentModalTitle');
  const tickerInput = document.getElementById('investTickerInput');
  const nameInput = document.getElementById('investNameInput');
  const instInput = document.getElementById('investInstitutionInput');
  const qtyInput = document.getElementById('investQuantityInput');
  const avgInput = document.getElementById('investAvgPriceInput');
  const curInput = document.getElementById('investCurrentPriceInput');

  if (title) title.textContent = `Novo Aporte em ${bankName}`;
  if (idInput) idInput.value = '';
  if (tickerInput) tickerInput.value = '';
  if (nameInput) nameInput.value = '';
  if (instInput) instInput.value = bankName;
  if (qtyInput) qtyInput.value = '';
  if (avgInput) avgInput.value = '';
  if (curInput) curInput.value = '';

  openModal('newInvestmentModal');
  setTimeout(() => { if (tickerInput) tickerInput.focus(); }, 50);
}

function setupInvestmentModals() {
  // New / Edit Investment Modal
  const openInvestBtn = document.getElementById('openNewInvestmentModalBtn');
  const closeInvestBtn = document.getElementById('closeNewInvestmentModal');
  const saveInvestBtn = document.getElementById('saveInvestmentBtn');

  if (openInvestBtn) {
    openInvestBtn.onclick = () => {
      sound.playPop();
      document.getElementById('editInvestmentId').value = '';
      document.getElementById('investmentModalTitle').textContent = 'Novo Ativo na Carteira';
      document.getElementById('investTickerInput').value = '';
      document.getElementById('investNameInput').value = '';
      document.getElementById('investInstitutionInput').value = '';
      document.getElementById('investQuantityInput').value = '';
      document.getElementById('investAvgPriceInput').value = '';
      document.getElementById('investCurrentPriceInput').value = '';
      openModal('newInvestmentModal');
      setTimeout(() => document.getElementById('investTickerInput').focus(), 50);
    };
  }

  if (closeInvestBtn) closeInvestBtn.onclick = () => closeAllModals();

  if (saveInvestBtn) {
    saveInvestBtn.onclick = () => {
      const id = document.getElementById('editInvestmentId').value;
      const ticker = document.getElementById('investTickerInput').value.trim().toUpperCase();
      const name = document.getElementById('investNameInput').value.trim();
      const category = document.getElementById('investCategorySelect').value;
      const institution = document.getElementById('investInstitutionInput').value.trim() || 'Geral';
      const quantity = parseFloat(document.getElementById('investQuantityInput').value);
      const avgPrice = parseFloat(document.getElementById('investAvgPriceInput').value);
      const currentPrice = parseFloat(document.getElementById('investCurrentPriceInput').value) || avgPrice;

      if (!ticker || isNaN(quantity) || quantity <= 0 || isNaN(avgPrice) || avgPrice < 0) {
        alert('Por favor, preencha o código/ticker, quantidade e preço médio válidos.');
        return;
      }

      if (!store.state.finance) store.state.finance = {};
      if (!Array.isArray(store.state.finance.investments)) store.state.finance.investments = [];

      if (id) {
        // Edit existing
        const existing = store.state.finance.investments.find(i => i.id === id);
        if (existing) {
          existing.ticker = ticker;
          existing.name = name;
          existing.category = category;
          existing.institution = institution;
          existing.quantity = quantity;
          existing.avgPrice = avgPrice;
          existing.currentPrice = currentPrice;
        }
      } else {
        // Create new
        store.state.finance.investments.unshift({
          id: 'inv_' + Date.now(),
          ticker: ticker,
          name: name,
          category: category,
          institution: institution,
          quantity: quantity,
          avgPrice: avgPrice,
          currentPrice: currentPrice
        });
      }

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderInvestmentsHub();
      renderBanksHub();
    };
  }

  // Portfolio Goal Modal
  const openGoalBtn = document.getElementById('openEditPortfolioGoalBtn');
  const closeGoalBtn = document.getElementById('closePortfolioGoalModal');
  const saveGoalBtn = document.getElementById('savePortfolioGoalBtn');
  const goalInput = document.getElementById('goalPortfolioTotalInput');

  if (openGoalBtn) {
    openGoalBtn.onclick = () => {
      sound.playPop();
      if (goalInput) goalInput.value = (store.state.finance && store.state.finance.portfolioGoal) ? store.state.finance.portfolioGoal : 100000;
      openModal('editPortfolioGoalModal');
      setTimeout(() => { if (goalInput) goalInput.focus(); }, 50);
    };
  }

  if (closeGoalBtn) closeGoalBtn.onclick = () => closeAllModals();

  if (saveGoalBtn) {
    saveGoalBtn.onclick = () => {
      const val = parseFloat(goalInput.value);
      if (isNaN(val) || val <= 0) return;
      if (!store.state.finance) store.state.finance = {};
      store.state.finance.portfolioGoal = val;
      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderInvestmentsHub();
    };
  }

  // New Bank Modal
  const openBankBtn = document.getElementById('openNewBankBtn');
  const closeBankBtn = document.getElementById('closeNewBankModal');
  const saveBankBtn = document.getElementById('saveBankBtn');
  const bankNameInput = document.getElementById('bankNameInput');
  const bankTypeSelect = document.getElementById('bankTypeSelect');

  if (openBankBtn) {
    openBankBtn.onclick = () => {
      sound.playPop();
      if (bankNameInput) bankNameInput.value = '';
      openModal('newBankModal');
      setTimeout(() => { if (bankNameInput) bankNameInput.focus(); }, 50);
    };
  }

  if (closeBankBtn) closeBankBtn.onclick = () => closeAllModals();

  if (saveBankBtn) {
    saveBankBtn.onclick = () => {
      const name = bankNameInput.value.trim();
      const type = bankTypeSelect.value;
      if (!name) return;

      if (!store.state.finance) store.state.finance = {};
      if (!Array.isArray(store.state.finance.connectedBanks)) store.state.finance.connectedBanks = [];

      store.state.finance.connectedBanks.push({
        id: 'b_' + Date.now(),
        name: name,
        type: type,
        icon: '🏦',
        status: 'Ativo',
        lastSync: 'Recém-adicionado'
      });

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderBanksHub();
    };
  }

  // Filter bindings
  const catFilter = document.getElementById('investCategoryFilter');
  if (catFilter) {
    catFilter.onchange = (e) => {
      investCurrentCategoryFilter = e.target.value;
      renderInvestmentsTable();
    };
  }

  const bankFilter = document.getElementById('investBankFilter');
  if (bankFilter) {
    bankFilter.onchange = (e) => {
      investCurrentBankFilter = e.target.value;
      renderInvestmentsTable();
    };
  }
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
  const completedSubEl = document.getElementById('booksCompletedSub');
  const pagesSubEl = document.getElementById('booksPagesSub');

  const booksGoalYear = (store.state.knowledge && store.state.knowledge.booksGoalYear) ? store.state.knowledge.booksGoalYear : 12;
  const dailyPagesGoal = (store.state.knowledge && store.state.knowledge.dailyPagesGoal) ? store.state.knowledge.dailyPagesGoal : 20;

  if (readingEl) readingEl.textContent = readingBooks.length;
  if (pagesEl) pagesEl.textContent = `${totalPagesRead.toLocaleString('pt-BR')} págs`;
  if (pagesSubEl) pagesSubEl.textContent = `Meta: ${dailyPagesGoal} págs/dia • Registradas`;
  if (completedEl) completedEl.textContent = `${completedBooks.length} / ${booksGoalYear}`;
  if (completedSubEl) {
    const pct = Math.min(100, Math.round((completedBooks.length / booksGoalYear) * 100));
    completedSubEl.textContent = `${pct}% da meta anual atingida (${booksGoalYear} livros)`;
  }

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
            <div class="progress-bar-fill" style="width: ${pct}%; background: #FFFFFF;"></div>
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
          <div class="progress-bar-fill" style="width: ${pct}%; background: #FFFFFF;"></div>
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

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modalId === 'authModal' && !UserManager.getActiveUser()) return;
    modal.classList.remove('open');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    if (m.id === 'authModal' && !UserManager.getActiveUser()) {
      return;
    }
    m.classList.remove('open');
  });
}

// Close modals when clicking backdrop (except unauthenticated authModal)
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('modal-backdrop')) {
    if (e.target.id === 'authModal' && !UserManager.getActiveUser()) return;
    e.target.classList.remove('open');
  }
});

// =============================================================================
// 9.5 GOOGLE AUTHENTICATION & MULTI-USER SYSTEM
// =============================================================================

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Erro ao decodificar JWT Google:', e);
    return null;
  }
}

function handleGoogleCredentialResponse(response) {
  if (!response || !response.credential) return;
  const payload = parseJwt(response.credential);
  if (payload && payload.email) {
    loginUser({
      id: payload.sub,
      name: payload.name || payload.email.split('@')[0],
      email: payload.email,
      picture: payload.picture || '',
      provider: 'google'
    });
  }
}

function initGoogleIdentity() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
    setTimeout(() => {
      if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
        initGoogleIdentity();
      }
    }, 1200);
    return;
  }
  const clientId = window.AURA_GOOGLE_CLIENT_ID || localStorage.getItem('aura_google_client_id') || '';
  if (clientId) {
    try {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true
      });
      const gsiContainer = document.getElementById('gsiButtonContainer');
      if (gsiContainer) {
        google.accounts.id.renderButton(gsiContainer, {
          theme: 'filled_blue',
          size: 'large',
          shape: 'pill',
          text: 'signin_with',
          locale: 'pt-BR'
        });
      }
    } catch (e) {
      console.warn('GSI init notice:', e);
    }
  }
}

function initAuthSystem() {
  if (typeof FirebaseService !== 'undefined') {
    FirebaseService.init();
  }

  const activeUser = UserManager.getActiveUser();
  if (activeUser) {
    store.setUser(activeUser);
    updateUserProfileUI();
    renderAll();

    if (typeof FirebaseService !== 'undefined' && FirebaseService.isConfigured() && activeUser.id) {
      FirebaseService.listenToCloudChanges(activeUser, (remoteState) => {
        if (remoteState && (remoteState.tasks || remoteState.habits)) {
          store.state = remoteState;
          store.saveLocalOnly();
          applyTheme(store.state.theme);
          renderAll();
          if (currentActiveArea) renderAreaDetail(currentActiveArea);
        }
      });
    }
  } else {
    openModal('authModal');
    renderSavedAccountsList();
    renderAll();
  }
  initGoogleIdentity();
}

function showToast(message, icon = '✨') {
  let toast = document.getElementById('appleGlobalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appleGlobalToast';
    toast.className = 'apple-global-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>`;
  toast.classList.add('visible');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

async function loginUser(userData) {
  const user = UserManager.setActiveUser(userData);
  if (!user) return;
  store.setUser(user);
  applyTheme(store.state.theme);

  const authModal = document.getElementById('authModal');
  if (authModal) authModal.classList.remove('open');

  updateUserProfileUI();
  sound.playSuccessChime();
  showToast(`Conectado como ${user.name} via Google`, '✅');
  renderAll();

  if (currentActiveArea) {
    renderAreaDetail(currentActiveArea);
  }

  // Sincronização em Nuvem (Firebase Firestore)
  if (typeof FirebaseService !== 'undefined' && FirebaseService.isConfigured()) {
    try {
      const cloudState = await FirebaseService.fetchCloudState(user);
      if (cloudState && (cloudState.tasks || cloudState.habits)) {
        store.state = cloudState;
        store.saveLocalOnly();
        applyTheme(store.state.theme);
        renderAll();
        if (currentActiveArea) renderAreaDetail(currentActiveArea);
      } else {
        FirebaseService.saveCloudState(user, store.state);
      }

      FirebaseService.listenToCloudChanges(user, (remoteState) => {
        if (remoteState && (remoteState.tasks || remoteState.habits)) {
          store.state = remoteState;
          store.saveLocalOnly();
          applyTheme(store.state.theme);
          renderAll();
          if (currentActiveArea) renderAreaDetail(currentActiveArea);
        }
      });
    } catch (err) {
      console.warn('Erro ao sincronizar nuvem no login:', err);
    }
  }
}

function updateUserProfileUI() {
  const user = UserManager.getActiveUser();
  const userNameEls = [
    document.getElementById('sidebarUserName'),
    document.getElementById('settingsActiveUserName'),
    document.getElementById('accountModalName')
  ];
  const userEmailEls = [
    document.getElementById('sidebarUserEmail'),
    document.getElementById('settingsActiveUserEmail'),
    document.getElementById('accountModalEmail')
  ];
  const sidebarAvatar = document.getElementById('sidebarUserAvatar');
  const mobileAvatar = document.getElementById('mobileUserAvatar');
  const accountAvatar = document.getElementById('accountModalAvatar');
  const dbKeyEl = document.getElementById('accountDbKey');

  if (user) {
    userNameEls.forEach(el => { if (el) el.textContent = user.name; });
    userEmailEls.forEach(el => { if (el) el.textContent = user.email; });

    const initial = (user.name || user.email || 'U').charAt(0).toUpperCase();
    const avatarContent = user.picture ? `<img src="${user.picture}" alt="${user.name}">` : initial;

    if (sidebarAvatar) sidebarAvatar.innerHTML = avatarContent;
    if (mobileAvatar) mobileAvatar.innerHTML = avatarContent;
    if (accountAvatar) accountAvatar.innerHTML = avatarContent;
    if (dbKeyEl) dbKeyEl.textContent = store.storageKey;

    const statTasks = document.getElementById('accountStatTasks');
    const statHabits = document.getElementById('accountStatHabits');
    const statFocus = document.getElementById('accountStatFocus');

    if (statTasks) statTasks.textContent = store.state.tasks ? store.state.tasks.length : 0;
    if (statHabits) statHabits.textContent = store.state.habits ? store.state.habits.length : 0;
    if (statFocus) {
      let totalMins = 0;
      if (store.state.focus && Array.isArray(store.state.focus.sessions)) {
        totalMins = store.state.focus.sessions.reduce((acc, s) => acc + (s.durationMinutes || 0), 0);
      }
      const hours = Math.round((totalMins / 60) * 10) / 10;
      statFocus.textContent = hours > 0 ? `${hours}h` : `${totalMins}m`;
    }

    const cloudBadge = document.getElementById('accountCloudBadge');
    if (cloudBadge && typeof FirebaseService !== 'undefined') {
      if (FirebaseService.isConfigured()) {
        cloudBadge.className = 'cloud-sync-badge status-synced';
        cloudBadge.innerHTML = '<span class="status-indicator-dot"></span><span class="status-text">Nuvem Conectada</span>';
      } else {
        cloudBadge.className = 'cloud-sync-badge status-offline';
        cloudBadge.innerHTML = '<span class="status-indicator-dot"></span><span class="status-text">Salvo Localmente</span>';
      }
    }
  } else {
    userNameEls.forEach(el => { if (el) el.textContent = 'Não conectado'; });
    userEmailEls.forEach(el => { if (el) el.textContent = 'Clique para entrar'; });
    if (sidebarAvatar) sidebarAvatar.textContent = 'G';
    if (mobileAvatar) mobileAvatar.textContent = 'G';
  }
}

function renderSavedAccountsList() {
  const listContainer = document.getElementById('savedAccountsList');
  const section = document.getElementById('savedAccountsSection');
  if (!listContainer || !section) return;

  const accounts = UserManager.getUsersList();
  if (accounts.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  listContainer.innerHTML = '';

  accounts.forEach(acc => {
    const item = document.createElement('div');
    item.className = 'saved-account-item';
    const initial = (acc.name || acc.email || 'U').charAt(0).toUpperCase();
    const avatarInner = acc.picture ? `<img src="${acc.picture}" alt="${acc.name}">` : initial;

    item.innerHTML = `
      <div class="saved-account-avatar">${avatarInner}</div>
      <div class="saved-account-info">
        <span class="saved-account-name">${escapeHtml(acc.name)}</span>
        <span class="saved-account-email">${escapeHtml(acc.email)}</span>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="color: var(--text-tertiary);">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    item.addEventListener('click', () => {
      loginUser(acc);
    });

    listContainer.appendChild(item);
  });
}

function setupAuthEvents() {
  const directForm = document.getElementById('directLoginForm');
  const googleBtn = document.getElementById('googleLoginActionBtn');
  const emailInput = document.getElementById('userEmailInput');
  const nameInput = document.getElementById('userNameInput');

  // Quick 1-tap user pills
  document.querySelectorAll('.quick-user-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      sound.playPop();
      const email = pill.dataset.email;
      const name = pill.dataset.name || email.split('@')[0];
      loginUser({
        email: email,
        name: name,
        provider: 'google'
      });
    });
  });

  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : email.split('@')[0];

      loginUser({
        email: email,
        name: name,
        provider: 'google'
      });
    });
  }

  const authOpenFirebaseBtn = document.getElementById('authOpenFirebaseConfigBtn');
  if (authOpenFirebaseBtn) {
    authOpenFirebaseBtn.addEventListener('click', () => {
      sound.playPop();
      closeAllModals();
      if (typeof FirebaseService !== 'undefined') {
        FirebaseService.openConfigModal();
      }
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      sound.playPop();

      // 1. Se Firebase estiver configurado, login popup oficial do Google!
      if (typeof FirebaseService !== 'undefined' && FirebaseService.isConfigured()) {
        const auraUser = await FirebaseService.loginWithGoogle();
        if (auraUser) {
          await loginUser(auraUser);
        }
        return;
      }

      // 2. Se o usuário preencheu o campo de e-mail direto
      const typedEmail = emailInput ? emailInput.value.trim() : '';
      if (typedEmail) {
        const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : typedEmail.split('@')[0];
        loginUser({
          email: typedEmail,
          name: name,
          provider: 'google'
        });
        return;
      }

      // 3. Se ainda não configurou o Firebase, abre modal de configuração amigável
      if (typeof FirebaseService !== 'undefined') {
        closeAllModals();
        FirebaseService.openConfigModal();
      }
    });
  }
}

function setupUserAccountModalEvents() {
  const sidebarBtn = document.getElementById('sidebarUserProfileBtn');
  const mobileBtn = document.getElementById('mobileUserProfileBtn');
  const closeBtn = document.getElementById('closeUserAccountModal');
  const switchBtn = document.getElementById('switchUserBtn');
  const logoutBtn = document.getElementById('logoutUserBtn');

  const openAccount = () => {
    sound.playPop();
    updateUserProfileUI();
    openModal('userAccountModal');
  };

  if (sidebarBtn) sidebarBtn.addEventListener('click', openAccount);
  if (mobileBtn) mobileBtn.addEventListener('click', openAccount);
  if (closeBtn) closeBtn.addEventListener('click', () => closeAllModals());

  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      sound.playPop();
      closeAllModals();
      openModal('authModal');
      renderSavedAccountsList();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Deseja sair da sua conta Google atual? Seus dados continuam salvos com segurança.')) {
        sound.playPop();
        UserManager.logout();
        updateUserProfileUI();
        closeAllModals();
        openModal('authModal');
        renderSavedAccountsList();
      }
    });
  }

  // Abrir configuração do Firebase a partir de Minha Conta
  const openFirebaseBtn = document.getElementById('openFirebaseFromAccountBtn');
  if (openFirebaseBtn) {
    openFirebaseBtn.addEventListener('click', () => {
      sound.playPop();
      closeAllModals();
      if (typeof FirebaseService !== 'undefined') {
        FirebaseService.openConfigModal();
      }
    });
  }

  // Exportar Backup JSON no modal de Conta
  const accountExportBtn = document.getElementById('accountExportBtn');
  if (accountExportBtn) {
    accountExportBtn.addEventListener('click', () => {
      sound.playPop();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.state, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `aura_backup_${getTodayString()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      sound.playSuccessChime();
      showToast('Backup exportado com sucesso!', '💾');
    });
  }

  // Importar Backup JSON no modal de Conta
  const accountImportInput = document.getElementById('accountImportFileInput');
  if (accountImportInput) {
    accountImportInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported && (imported.tasks || imported.habits)) {
            store.state = imported;
            store.save();
            applyTheme(store.state.theme);
            renderAll();
            sound.playSuccessChime();
            showToast('Backup restaurado com sucesso!', '✅');
            closeAllModals();
          } else {
            alert('Formato de backup inválido.');
          }
        } catch (err) {
          alert('Erro ao processar arquivo de backup JSON.');
        }
      };
      reader.readAsText(file);
    });
  }
}

function setupFirebaseModalEvents() {
  const closeBtn = document.getElementById('closeFirebaseConfigModal');
  const cancelBtn = document.getElementById('cancelFirebaseConfigBtn');
  const form = document.getElementById('firebaseConfigForm');
  const textarea = document.getElementById('firebaseConfigJson');

  const closeModal = () => {
    sound.playPop();
    const modal = document.getElementById('firebaseConfigModal');
    if (modal) modal.classList.remove('open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const raw = textarea ? textarea.value.trim() : '';
      if (!raw) return;

      const parsedConfig = parseFirebaseConfigInput(raw);
      if (!parsedConfig || !parsedConfig.apiKey || !parsedConfig.projectId) {
        alert('Configuração inválida. Cole o objeto firebaseConfig com pelo menos "apiKey" e "projectId".');
        return;
      }

      const success = FirebaseService.saveConfig(parsedConfig);
      if (success) {
        sound.playSuccessChime();
        closeModal();
        showToast('Nuvem Firebase conectada com sucesso!', '☁️');
        updateUserProfileUI();

        // Se ainda não tiver usuário autenticado, disparar o login com Google imediatamente
        const activeUser = UserManager.getActiveUser();
        if (!activeUser) {
          const auraUser = await FirebaseService.loginWithGoogle();
          if (auraUser) {
            await loginUser(auraUser);
          }
        }
      } else {
        alert('Não foi possível inicializar o Firebase. Verifique as credenciais coladas.');
      }
    });
  }
}

function parseFirebaseConfigInput(raw) {
  raw = raw.trim();
  try {
    return JSON.parse(raw);
  } catch (e) {}

  const match = raw.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      const fn = new Function('return (' + match[0] + ')');
      const obj = fn();
      if (obj && obj.apiKey && obj.projectId) {
        return obj;
      }
    } catch (e) {}
  }
  return null;
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
  const areaMeta = LIFE_AREAS[habit.area] || { label: habit.area, color: '#FFFFFF', pillClass: 'pill-personal' };
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
    areaMeta = LIFE_AREAS[habit.area] || { label: habit.area, color: '#FFFFFF', pillClass: 'pill-personal' };
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
      if (confirm('Deseja carregar os dados de demonstração (tarefas, hábitos e exemplos)?')) {
        store.loadDemoData();
        applyTheme(store.state.theme);
        renderAll();
        sound.playPop();
        closeAllModals();
      }
    });
  }

  // Clear current user data completely (zerar)
  const clearBtn = document.getElementById('settingsClearUserDataBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja zerar todos os dados desta conta? Todas as áreas ficarão limpas.')) {
        store.reset();
        applyTheme(store.state.theme);
        renderAll();
        sound.playPop();
        closeAllModals();
      }
    });
  }

  // Switch account button in settings
  const switchAccBtn = document.getElementById('settingsSwitchAccountBtn');
  if (switchAccBtn) {
    switchAccBtn.addEventListener('click', () => {
      closeAllModals();
      openModal('authModal');
      renderSavedAccountsList();
    });
  }
}

function setupGoalsModals() {
  // 1. Health & Diet Goals Modal
  const openHealthBtn = document.getElementById('openEditNutritionGoalsBtn');
  const settingsHealthBtn = document.getElementById('settingsHealthGoalsBtn');
  const closeHealthBtn = document.getElementById('closeHealthGoalsModal');
  const saveHealthBtn = document.getElementById('saveHealthGoalsBtn');

  const calInput = document.getElementById('goalCaloriesInput');
  const protInput = document.getElementById('goalProteinInput');
  const carbInput = document.getElementById('goalCarbsInput');
  const fatInput = document.getElementById('goalFatInput');
  const waterInput = document.getElementById('goalWaterInput');
  const runInput = document.getElementById('goalRunningInput');

  function openHealthGoals() {
    sound.playPop();
    const nutrition = (store.state.health && store.state.health.nutrition) ? store.state.health.nutrition : {};
    const running = (store.state.health && store.state.health.running) ? store.state.health.running : {};

    if (calInput) calInput.value = nutrition.calorieGoal || 2200;
    if (protInput) protInput.value = nutrition.proteinGoal || 150;
    if (carbInput) carbInput.value = nutrition.carbGoal || 220;
    if (fatInput) fatInput.value = nutrition.fatGoal || 65;
    if (waterInput) waterInput.value = store.state.waterGoal || 2500;
    if (runInput) runInput.value = running.weeklyGoalKm || 20;

    openModal('editHealthGoalsModal');
    setTimeout(() => { if (calInput) calInput.focus(); }, 60);
  }

  if (openHealthBtn) openHealthBtn.addEventListener('click', openHealthGoals);
  if (settingsHealthBtn) settingsHealthBtn.addEventListener('click', () => {
    closeAllModals();
    setTimeout(openHealthGoals, 120);
  });
  if (closeHealthBtn) closeHealthBtn.addEventListener('click', () => closeAllModals());

  if (saveHealthBtn) {
    saveHealthBtn.addEventListener('click', () => {
      const cals = parseInt(calInput.value, 10);
      const prot = parseInt(protInput.value, 10);
      const carbs = parseInt(carbInput.value, 10);
      const fat = parseInt(fatInput.value, 10);
      const water = parseInt(waterInput.value, 10);
      const runKm = parseFloat(runInput.value);

      if (!cals || cals <= 0) return;

      if (!store.state.health) store.state.health = {};
      if (!store.state.health.nutrition) store.state.health.nutrition = {};
      if (!store.state.health.running) store.state.health.running = {};

      store.state.health.nutrition.calorieGoal = cals;
      if (prot > 0) store.state.health.nutrition.proteinGoal = prot;
      if (carbs > 0) store.state.health.nutrition.carbGoal = carbs;
      if (fat > 0) store.state.health.nutrition.fatGoal = fat;
      if (water > 0) store.state.waterGoal = water;
      if (runKm > 0) store.state.health.running.weeklyGoalKm = runKm;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderHealthDiet();
      renderHealthRunning();
      renderWaterTracker();
      renderActivityRings();
    });
  }

  // 2. Finance Goals Modal
  const openFinanceBtn = document.getElementById('openEditFinanceGoalsBtn');
  const settingsFinanceBtn = document.getElementById('settingsFinanceGoalsBtn');
  const closeFinanceBtn = document.getElementById('closeFinanceGoalsModal');
  const saveFinanceBtn = document.getElementById('saveFinanceGoalsBtn');

  const budgetInput = document.getElementById('goalMonthlyBudgetInput');
  const savingsInput = document.getElementById('goalMonthlySavingsInput');

  function openFinanceGoals() {
    sound.playPop();
    const fin = store.state.finance || {};
    if (budgetInput) budgetInput.value = fin.monthlyBudget || 5000;
    if (savingsInput) savingsInput.value = fin.savingsGoal || 1500;

    openModal('editFinanceGoalsModal');
    setTimeout(() => { if (budgetInput) budgetInput.focus(); }, 60);
  }

  if (openFinanceBtn) openFinanceBtn.addEventListener('click', openFinanceGoals);
  if (settingsFinanceBtn) settingsFinanceBtn.addEventListener('click', () => {
    closeAllModals();
    setTimeout(openFinanceGoals, 120);
  });
  if (closeFinanceBtn) closeFinanceBtn.addEventListener('click', () => closeAllModals());

  if (saveFinanceBtn) {
    saveFinanceBtn.addEventListener('click', () => {
      const budget = parseFloat(budgetInput.value);
      const savings = parseFloat(savingsInput.value);

      if (isNaN(budget) || budget < 0) return;

      if (!store.state.finance) store.state.finance = {};
      store.state.finance.monthlyBudget = budget;
      if (!isNaN(savings) && savings >= 0) store.state.finance.savingsGoal = savings;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderFinanceHub();
    });
  }

  // 3. Knowledge Goals Modal
  const openKnowledgeBtn = document.getElementById('openEditKnowledgeGoalsBtn');
  const settingsKnowledgeBtn = document.getElementById('settingsKnowledgeGoalsBtn');
  const closeKnowledgeBtn = document.getElementById('closeKnowledgeGoalsModal');
  const saveKnowledgeBtn = document.getElementById('saveKnowledgeGoalsBtn');

  const booksGoalInput = document.getElementById('goalBooksYearInput');
  const dailyPagesInput = document.getElementById('goalDailyPagesInput');

  function openKnowledgeGoals() {
    sound.playPop();
    const know = store.state.knowledge || {};
    if (booksGoalInput) booksGoalInput.value = know.booksGoalYear || 12;
    if (dailyPagesInput) dailyPagesInput.value = know.dailyPagesGoal || 20;

    openModal('editKnowledgeGoalsModal');
    setTimeout(() => { if (booksGoalInput) booksGoalInput.focus(); }, 60);
  }

  if (openKnowledgeBtn) openKnowledgeBtn.addEventListener('click', openKnowledgeGoals);
  if (settingsKnowledgeBtn) settingsKnowledgeBtn.addEventListener('click', () => {
    closeAllModals();
    setTimeout(openKnowledgeGoals, 120);
  });
  if (closeKnowledgeBtn) closeKnowledgeBtn.addEventListener('click', () => closeAllModals());

  if (saveKnowledgeBtn) {
    saveKnowledgeBtn.addEventListener('click', () => {
      const booksYear = parseInt(booksGoalInput.value, 10);
      const pagesDaily = parseInt(dailyPagesInput.value, 10);

      if (!booksYear || booksYear <= 0) return;

      if (!store.state.knowledge) store.state.knowledge = {};
      store.state.knowledge.booksGoalYear = booksYear;
      if (pagesDaily > 0) store.state.knowledge.dailyPagesGoal = pagesDaily;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderKnowledgeBooks();
    });
  }

  // 4. Focus Goals Modal
  const openFocusBtn = document.getElementById('openEditFocusGoalsBtn');
  const settingsFocusBtn = document.getElementById('settingsFocusGoalsBtn');
  const closeFocusBtn = document.getElementById('closeFocusGoalsModal');
  const saveFocusBtn = document.getElementById('saveFocusGoalsBtn');

  const focusCyclesInput = document.getElementById('goalFocusCyclesInput');

  function openFocusGoals() {
    sound.playPop();
    const foc = store.state.focus || {};
    if (focusCyclesInput) focusCyclesInput.value = foc.dailyCyclesGoal || 4;

    openModal('editFocusGoalsModal');
    setTimeout(() => { if (focusCyclesInput) focusCyclesInput.focus(); }, 60);
  }

  if (openFocusBtn) openFocusBtn.addEventListener('click', openFocusGoals);
  if (settingsFocusBtn) settingsFocusBtn.addEventListener('click', () => {
    closeAllModals();
    setTimeout(openFocusGoals, 120);
  });
  if (closeFocusBtn) closeFocusBtn.addEventListener('click', () => closeAllModals());

  if (saveFocusBtn) {
    saveFocusBtn.addEventListener('click', () => {
      const cycles = parseInt(focusCyclesInput.value, 10);
      if (!cycles || cycles <= 0) return;

      if (!store.state.focus) store.state.focus = {};
      store.state.focus.dailyCyclesGoal = cycles;

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderFocusKpis();
    });
  }
}

// =============================================================================
// DREAMS, LIFE GOALS & SIDE QUESTS (APPLE HUMAN INTERFACE GAMIFICATION)
// =============================================================================

let activeQuestsSubtab = 'dreams';
let dreamsCurrentCategoryFilter = 'all';
let questsCurrentDifficultyFilter = 'all';

const QUEST_LEVELS = [
  { minXp: 0, maxXp: 300, level: 1, title: 'Iniciante da Jornada', icon: '🥉' },
  { minXp: 300, maxXp: 750, level: 2, title: 'Explorador de Hábitos', icon: '🥈' },
  { minXp: 750, maxXp: 1400, level: 3, title: 'Foco Estratégico', icon: '🥇' },
  { minXp: 1400, maxXp: 2400, level: 4, title: 'Conquistador de Metas', icon: '💎' },
  { minXp: 2400, maxXp: 3800, level: 5, title: 'Mestre da Disciplina', icon: '⚡' },
  { minXp: 3800, maxXp: 5600, level: 6, title: 'Arquiteto do Futuro', icon: '🌟' },
  { minXp: 5600, maxXp: 8000, level: 7, title: 'Titã de Alta Performance', icon: '👑' },
  { minXp: 8000, maxXp: Infinity, level: 8, title: 'Lenda Viva', icon: '🌌' }
];

const DREAM_CATEGORIES = {
  travel: { label: 'Viagens & Aventuras', icon: '✈️' },
  lifestyle: { label: 'Estilo de Vida & Bens', icon: '🏡' },
  career: { label: 'Carreira & Negócios', icon: '💼' },
  finance: { label: 'Metas Financeiras', icon: '💰' },
  experience: { label: 'Experiências Marcantes', icon: '⚡' },
  personal: { label: 'Desenvolvimento Pessoal', icon: '🌿' }
};

const QUEST_DIFFICULTIES = {
  easy: { label: 'Fácil', xp: 100, badgeClass: 'diff-easy' },
  medium: { label: 'Média', xp: 200, badgeClass: 'diff-medium' },
  epic: { label: 'Épica', xp: 350, badgeClass: 'diff-epic' },
  legendary: { label: 'Lendária', xp: 500, badgeClass: 'diff-legendary' }
};

function getUserLevelInfo(totalXp = 0) {
  for (let i = QUEST_LEVELS.length - 1; i >= 0; i--) {
    if (totalXp >= QUEST_LEVELS[i].minXp) {
      const current = QUEST_LEVELS[i];
      const range = current.maxXp === Infinity ? 5000 : (current.maxXp - current.minXp);
      const earnedInRange = totalXp - current.minXp;
      const pct = Math.min(100, Math.round((earnedInRange / range) * 100));
      return {
        level: current.level,
        title: current.title,
        icon: current.icon,
        currentXp: totalXp,
        minXp: current.minXp,
        nextXp: current.maxXp,
        pct: pct
      };
    }
  }
  return { level: 1, title: 'Iniciante da Jornada', icon: '🥉', currentXp: totalXp, minXp: 0, nextXp: 300, pct: 0 };
}

function renderQuestsHub() {
  setupQuestsSubnav();

  const questsData = (store.state.quests) ? store.state.quests : { totalXp: 0, dreams: [], sideQuests: [] };
  const totalXp = questsData.totalXp || 0;
  const dreams = questsData.dreams || [];
  const sideQuests = questsData.sideQuests || [];

  const completedDreams = dreams.filter(d => d.completed);
  const activeQuests = sideQuests.filter(q => !q.completed);
  const completedQuests = sideQuests.filter(q => q.completed);
  const totalHallItems = completedDreams.length + completedQuests.length;

  const levelInfo = getUserLevelInfo(totalXp);

  // Update Hero Level Banner
  const iconEl = document.getElementById('userLevelIcon');
  const titleEl = document.getElementById('userLevelTitle');
  const xpTextEl = document.getElementById('userLevelXpText');
  const xpBarEl = document.getElementById('userLevelXpBar');
  const navBadgeEl = document.getElementById('questsNavLevelBadge');

  if (iconEl) iconEl.textContent = levelInfo.icon;
  if (titleEl) titleEl.textContent = `Nível ${levelInfo.level} • ${levelInfo.title}`;
  if (xpTextEl) {
    if (levelInfo.nextXp === Infinity) {
      xpTextEl.textContent = `${totalXp.toLocaleString('pt-BR')} XP • Nível Máximo Alcançado!`;
    } else {
      xpTextEl.textContent = `${totalXp.toLocaleString('pt-BR')} / ${levelInfo.nextXp.toLocaleString('pt-BR')} XP para o próximo nível`;
    }
  }
  if (xpBarEl) xpBarEl.style.width = `${levelInfo.pct}%`;
  if (navBadgeEl) navBadgeEl.textContent = `Nv. ${levelInfo.level}`;

  // Update KPIs
  const kpiDreams = document.getElementById('kpiCompletedDreamsVal');
  const kpiQuests = document.getElementById('kpiActiveQuestsVal');
  const kpiXp = document.getElementById('kpiTotalXpVal');
  const kpiHall = document.getElementById('kpiHallOfFameVal');

  if (kpiDreams) kpiDreams.textContent = `${completedDreams.length} / ${dreams.length}`;
  if (kpiQuests) kpiQuests.textContent = `${activeQuests.length}`;
  if (kpiXp) kpiXp.textContent = `${totalXp.toLocaleString('pt-BR')} XP`;
  if (kpiHall) kpiHall.textContent = `${totalHallItems}`;

  renderDreams();
  renderSideQuests();
  renderHallOfFame();
}

function setupQuestsSubnav() {
  document.querySelectorAll('.quests-subnav-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playPop();
      document.querySelectorAll('.quests-subnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeQuestsSubtab = btn.dataset.subtab;

      const vDreams = document.getElementById('questsSubViewDreams');
      const vQuests = document.getElementById('questsSubViewSideQuests');
      const vHall = document.getElementById('questsSubViewHall');

      if (vDreams) vDreams.classList.toggle('hidden', activeQuestsSubtab !== 'dreams');
      if (vQuests) vQuests.classList.toggle('hidden', activeQuestsSubtab !== 'sidequests');
      if (vHall) vHall.classList.toggle('hidden', activeQuestsSubtab !== 'hall');

      if (activeQuestsSubtab === 'dreams') renderDreams();
      if (activeQuestsSubtab === 'sidequests') renderSideQuests();
      if (activeQuestsSubtab === 'hall') renderHallOfFame();
    };
  });
}

function renderDreams() {
  const container = document.getElementById('dreamsGridContainer');
  if (!container) return;
  container.innerHTML = '';

  const questsData = store.state.quests || { dreams: [] };
  let dreams = [...(questsData.dreams || [])];

  if (dreamsCurrentCategoryFilter !== 'all') {
    dreams = dreams.filter(d => d.category === dreamsCurrentCategoryFilter);
  }

  // Filter to show active dreams first
  dreams.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  if (dreams.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhum sonho cadastrado nesta categoria. Clique em "+ Novo Sonho de Vida" para registrar sua próxima grande aspiração.</div>`;
    return;
  }

  dreams.forEach(dream => {
    const card = document.createElement('div');
    card.className = `dream-card ${dream.completed ? 'completed' : ''}`;

    const catMeta = DREAM_CATEGORIES[dream.category] || { label: 'Sonho', icon: '🌟' };
    const hasCost = dream.estimatedCost && dream.estimatedCost > 0;
    const saved = dream.savedAmount || 0;
    const costPct = hasCost ? Math.min(100, Math.round((saved / dream.estimatedCost) * 100)) : 0;
    const milestones = dream.milestones || [];
    const doneMilestones = milestones.filter(m => m.done).length;

    let savingsHtml = '';
    if (hasCost) {
      savingsHtml = `
        <div class="dream-savings-box">
          <div class="dream-savings-header">
            <span>🐷 Reserva Financeira</span>
            <span>${formatBRL(saved)} / ${formatBRL(dream.estimatedCost)} (${costPct}%)</span>
          </div>
          <div class="progress-bar-track" style="height: 6px;">
            <div class="progress-bar-fill" style="width: ${costPct}%; background: var(--accent-orange);"></div>
          </div>
        </div>
      `;
    }

    let milestonesHtml = '';
    if (milestones.length > 0) {
      milestonesHtml = `
        <div style="font-size: 11px; font-weight: 600; color: var(--text-tertiary); margin-bottom: 6px; text-transform: uppercase;">Marcos & Etapas (${doneMilestones}/${milestones.length})</div>
        <div class="dream-milestones-list">
          ${milestones.map((m, idx) => `
            <div class="dream-milestone-item ${m.done ? 'done' : ''}" data-dream-id="${dream.id}" data-milestone-idx="${idx}">
              <div class="milestone-check">${m.done ? '✓' : ''}</div>
              <span>${escapeHtml(m.title)}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    card.innerHTML = `
      <div>
        <div class="dream-card-top">
          <span class="dream-badge-category">${catMeta.icon} ${catMeta.label}</span>
          <span class="dream-badge-year">${escapeHtml(dream.targetYear || 'Meta de Vida')}</span>
        </div>
        <div class="dream-card-title">${escapeHtml(dream.title)}</div>
        ${dream.notes ? `<div class="dream-card-notes">${escapeHtml(dream.notes)}</div>` : ''}
        ${savingsHtml}
        ${milestonesHtml}
      </div>
      <div class="dream-card-footer">
        <div>
          ${dream.completed ? `
            <span class="badge-income" style="font-size: 11px;">🎉 Realizado</span>
          ` : `
            <button class="apple-primary-btn-sm complete-dream-btn" style="font-size: 11px; padding: 4px 10px;">🏆 Realizar Sonho (+300 XP)</button>
          `}
        </div>
        <div style="display: flex; gap: 4px;">
          <button class="icon-btn edit-dream-btn" title="Editar Sonho" style="background: none; border: none; cursor: pointer; color: var(--text-secondary); padding: 4px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
          <button class="task-delete-btn delete-dream-btn" title="Excluir Sonho">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Interactive Milestones Checkbox
    card.querySelectorAll('.dream-milestone-item').forEach(item => {
      item.onclick = (e) => {
        e.stopPropagation();
        const mIdx = parseInt(item.dataset.milestoneIdx, 10);
        sound.playPop();
        dream.milestones[mIdx].done = !dream.milestones[mIdx].done;
        store.save();
        renderDreams();
      };
    });

    // Complete Dream Button
    const completeBtn = card.querySelector('.complete-dream-btn');
    if (completeBtn) {
      completeBtn.onclick = (e) => {
        e.stopPropagation();
        sound.playFanfare();
        dream.completed = true;
        dream.completedDate = getTodayString();
        store.state.quests.totalXp = (store.state.quests.totalXp || 0) + 300;
        store.save();
        alert(`🌟 PARABÉNS! Você conquistou o sonho: "${dream.title}"! (+300 XP concedidos)`);
        renderQuestsHub();
      };
    }

    // Edit Dream Button
    card.querySelector('.edit-dream-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      openEditDreamModal(dream);
    };

    // Delete Dream Button
    card.querySelector('.delete-dream-btn').onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Excluir o sonho "${dream.title}"?`)) {
        sound.playPop();
        store.state.quests.dreams = store.state.quests.dreams.filter(d => d.id !== dream.id);
        store.save();
        renderQuestsHub();
      }
    };

    container.appendChild(card);
  });
}

function renderSideQuests() {
  const container = document.getElementById('sideQuestsGridContainer');
  if (!container) return;
  container.innerHTML = '';

  const questsData = store.state.quests || { sideQuests: [] };
  let sideQuests = [...(questsData.sideQuests || [])];

  if (questsCurrentDifficultyFilter !== 'all') {
    sideQuests = sideQuests.filter(q => q.difficulty === questsCurrentDifficultyFilter);
  }

  // Sort active first
  sideQuests.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  if (sideQuests.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhuma side quest ativa no momento. Clique em "⚔️ Nova Side Quest" para criar um novo desafio.</div>`;
    return;
  }

  sideQuests.forEach(quest => {
    const card = document.createElement('div');
    card.className = `sidequest-card ${quest.completed ? 'completed' : ''}`;

    const diffMeta = QUEST_DIFFICULTIES[quest.difficulty] || QUEST_DIFFICULTIES.medium;
    const cur = parseInt(quest.currentDays, 10) || 0;
    const total = parseInt(quest.totalDays, 10) || 1;
    const pct = Math.min(100, Math.round((cur / total) * 100));

    card.innerHTML = `
      <div>
        <div class="sidequest-card-top">
          <span class="diff-badge ${diffMeta.badgeClass}">${diffMeta.label}</span>
          <span class="xp-reward-badge">⚡ +${quest.xpReward || diffMeta.xp} XP</span>
        </div>
        <div class="sidequest-title">${escapeHtml(quest.title)}</div>
        <div class="sidequest-desc">${escapeHtml(quest.desc || '')}</div>
        
        <div class="sidequest-progress-box">
          <div class="sidequest-progress-lbl">
            <span>Progresso</span>
            <span>${cur} / ${total} (${pct}%)</span>
          </div>
          <div class="progress-bar-track" style="height: 6px;">
            <div class="progress-bar-fill" style="width: ${pct}%; background: var(--accent-purple);"></div>
          </div>
        </div>
      </div>

      <div class="sidequest-footer">
        <div>
          ${quest.completed ? `
            <span class="badge-income" style="font-size: 11px;">⚔️ Missão Cumprida</span>
          ` : `
            <button class="apple-secondary-btn-sm advance-quest-btn" style="font-size: 11px;">+1 Passo</button>
            <button class="apple-primary-btn-sm finish-quest-btn" style="font-size: 11px; margin-left: 6px;">Concluir 🏆</button>
          `}
        </div>
        <div style="display: flex; gap: 4px;">
          <button class="icon-btn edit-quest-btn" title="Editar Quest" style="background: none; border: none; cursor: pointer; color: var(--text-secondary); padding: 4px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
          <button class="task-delete-btn delete-quest-btn" title="Excluir Quest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Advance 1 Step
    const advBtn = card.querySelector('.advance-quest-btn');
    if (advBtn) {
      advBtn.onclick = (e) => {
        e.stopPropagation();
        sound.playPop();
        quest.currentDays = Math.min(total, cur + 1);
        if (quest.currentDays >= total) {
          quest.completed = true;
          quest.completedDate = getTodayString();
          sound.playFanfare();
          store.state.quests.totalXp = (store.state.quests.totalXp || 0) + (quest.xpReward || diffMeta.xp);
          alert(`⚔️ MISSÃO CUMPRIDA! Você completou: "${quest.title}"! (+${quest.xpReward || diffMeta.xp} XP)`);
        }
        store.save();
        renderQuestsHub();
      };
    }

    // Finish quest directly
    const finishBtn = card.querySelector('.finish-quest-btn');
    if (finishBtn) {
      finishBtn.onclick = (e) => {
        e.stopPropagation();
        sound.playFanfare();
        quest.currentDays = total;
        quest.completed = true;
        quest.completedDate = getTodayString();
        store.state.quests.totalXp = (store.state.quests.totalXp || 0) + (quest.xpReward || diffMeta.xp);
        store.save();
        alert(`⚔️ MISSÃO CUMPRIDA! Você completou: "${quest.title}"! (+${quest.xpReward || diffMeta.xp} XP)`);
        renderQuestsHub();
      };
    }

    // Edit Quest
    card.querySelector('.edit-quest-btn').onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      openEditSideQuestModal(quest);
    };

    // Delete Quest
    card.querySelector('.delete-quest-btn').onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Excluir a side quest "${quest.title}"?`)) {
        sound.playPop();
        store.state.quests.sideQuests = store.state.quests.sideQuests.filter(q => q.id !== quest.id);
        store.save();
        renderQuestsHub();
      }
    };

    container.appendChild(card);
  });
}

function renderHallOfFame() {
  const container = document.getElementById('hallOfFameContainer');
  if (!container) return;
  container.innerHTML = '';

  const questsData = store.state.quests || { dreams: [], sideQuests: [] };
  const completedDreams = (questsData.dreams || []).filter(d => d.completed).map(d => ({
    title: d.title,
    type: 'Sonho Realizado',
    icon: '🌟',
    date: d.completedDate || '2026',
    xp: '+300 XP'
  }));

  const completedQuests = (questsData.sideQuests || []).filter(q => q.completed).map(q => ({
    title: q.title,
    type: 'Side Quest Conquistada',
    icon: '⚔️',
    date: q.completedDate || '2026',
    xp: `+${q.xpReward || 200} XP`
  }));

  const hallItems = [...completedDreams, ...completedQuests];

  if (hallItems.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;">Nenhuma conquista registrada no Hall da Fama ainda. Realize seus sonhos e complete missões para construir seu legado de conquistas!</div>`;
    return;
  }

  hallItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'hall-card';
    card.innerHTML = `
      <div>
        <div class="hall-card-header">
          <span class="hall-trophy-icon">${item.icon}</span>
          <span class="xp-reward-badge">${item.xp}</span>
        </div>
        <div class="hall-card-title">${escapeHtml(item.title)}</div>
        <div class="hall-card-date">${escapeHtml(item.type)} &bull; ${escapeHtml(item.date)}</div>
      </div>
      <span class="hall-stamp">🏆 Conquistado com Honra</span>
    `;
    container.appendChild(card);
  });
}

function openEditDreamModal(dream) {
  document.getElementById('dreamModalTitle').textContent = 'Editar Sonho de Vida';
  document.getElementById('editDreamId').value = dream.id;
  document.getElementById('dreamTitleInput').value = dream.title;
  document.getElementById('dreamCategorySelect').value = dream.category || 'travel';
  document.getElementById('dreamTargetYearInput').value = dream.targetYear || '';
  document.getElementById('dreamEstimatedCostInput').value = dream.estimatedCost || '';
  document.getElementById('dreamSavedAmountInput').value = dream.savedAmount || '';
  document.getElementById('dreamMilestonesInput').value = (dream.milestones || []).map(m => m.title).join('\n');
  document.getElementById('dreamNotesInput').value = dream.notes || '';
  openModal('newDreamModal');
}

function openEditSideQuestModal(quest) {
  document.getElementById('sideQuestModalTitle').textContent = 'Editar Side Quest';
  document.getElementById('editSideQuestId').value = quest.id;
  document.getElementById('sideQuestTitleInput').value = quest.title;
  document.getElementById('sideQuestDescInput').value = quest.desc || '';
  document.getElementById('sideQuestDiffSelect').value = quest.difficulty || 'medium';
  document.getElementById('sideQuestCategorySelect').value = quest.category || 'health';
  document.getElementById('sideQuestTotalDaysInput').value = quest.totalDays || 14;
  openModal('newSideQuestModal');
}

function setupQuestModals() {
  // New / Edit Dream Modal
  const openDreamBtn = document.getElementById('openNewDreamModalBtn');
  const closeDreamBtn = document.getElementById('closeNewDreamModal');
  const saveDreamBtn = document.getElementById('saveDreamBtn');

  if (openDreamBtn) {
    openDreamBtn.onclick = () => {
      sound.playPop();
      document.getElementById('dreamModalTitle').textContent = 'Novo Sonho de Vida';
      document.getElementById('editDreamId').value = '';
      document.getElementById('dreamTitleInput').value = '';
      document.getElementById('dreamCategorySelect').value = 'travel';
      document.getElementById('dreamTargetYearInput').value = '';
      document.getElementById('dreamEstimatedCostInput').value = '';
      document.getElementById('dreamSavedAmountInput').value = '';
      document.getElementById('dreamMilestonesInput').value = '';
      document.getElementById('dreamNotesInput').value = '';
      openModal('newDreamModal');
      setTimeout(() => document.getElementById('dreamTitleInput').focus(), 50);
    };
  }

  if (closeDreamBtn) closeDreamBtn.onclick = () => closeAllModals();

  if (saveDreamBtn) {
    saveDreamBtn.onclick = () => {
      const id = document.getElementById('editDreamId').value;
      const title = document.getElementById('dreamTitleInput').value.trim();
      const category = document.getElementById('dreamCategorySelect').value;
      const targetYear = document.getElementById('dreamTargetYearInput').value.trim();
      const estimatedCost = parseFloat(document.getElementById('dreamEstimatedCostInput').value) || 0;
      const savedAmount = parseFloat(document.getElementById('dreamSavedAmountInput').value) || 0;
      const rawMilestones = document.getElementById('dreamMilestonesInput').value.split('\n').map(m => m.trim()).filter(Boolean);
      const notes = document.getElementById('dreamNotesInput').value.trim();

      if (!title) {
        alert('Por favor, informe o título do seu sonho.');
        return;
      }

      if (!store.state.quests) store.state.quests = { dreams: [], sideQuests: [], totalXp: 0 };
      if (!Array.isArray(store.state.quests.dreams)) store.state.quests.dreams = [];

      if (id) {
        // Edit existing
        const existing = store.state.quests.dreams.find(d => d.id === id);
        if (existing) {
          existing.title = title;
          existing.category = category;
          existing.targetYear = targetYear;
          existing.estimatedCost = estimatedCost;
          existing.savedAmount = savedAmount;
          existing.notes = notes;
          if (rawMilestones.length > 0) {
            existing.milestones = rawMilestones.map((mTitle, i) => {
              const old = existing.milestones && existing.milestones[i];
              return { id: 'm_' + Date.now() + '_' + i, title: mTitle, done: old ? old.done : false };
            });
          }
        }
      } else {
        // Create new
        const newMilestones = rawMilestones.map((mTitle, i) => ({
          id: 'm_' + Date.now() + '_' + i,
          title: mTitle,
          done: false
        }));

        store.state.quests.dreams.unshift({
          id: 'd_' + Date.now(),
          title: title,
          category: category,
          targetYear: targetYear || 'Futuro',
          estimatedCost: estimatedCost,
          savedAmount: savedAmount,
          milestones: newMilestones,
          notes: notes,
          completed: false
        });
      }

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderQuestsHub();
    };
  }

  // New / Edit Side Quest Modal
  const openQuestBtn = document.getElementById('openNewSideQuestModalBtn');
  const closeQuestBtn = document.getElementById('closeNewSideQuestModal');
  const saveQuestBtn = document.getElementById('saveSideQuestBtn');

  if (openQuestBtn) {
    openQuestBtn.onclick = () => {
      sound.playPop();
      document.getElementById('sideQuestModalTitle').textContent = 'Nova Side Quest';
      document.getElementById('editSideQuestId').value = '';
      document.getElementById('sideQuestTitleInput').value = '';
      document.getElementById('sideQuestDescInput').value = '';
      document.getElementById('sideQuestDiffSelect').value = 'medium';
      document.getElementById('sideQuestCategorySelect').value = 'health';
      document.getElementById('sideQuestTotalDaysInput').value = '14';
      openModal('newSideQuestModal');
      setTimeout(() => document.getElementById('sideQuestTitleInput').focus(), 50);
    };
  }

  if (closeQuestBtn) closeQuestBtn.onclick = () => closeAllModals();

  if (saveQuestBtn) {
    saveQuestBtn.onclick = () => {
      const id = document.getElementById('editSideQuestId').value;
      const title = document.getElementById('sideQuestTitleInput').value.trim();
      const desc = document.getElementById('sideQuestDescInput').value.trim();
      const difficulty = document.getElementById('sideQuestDiffSelect').value;
      const category = document.getElementById('sideQuestCategorySelect').value;
      const totalDays = parseInt(document.getElementById('sideQuestTotalDaysInput').value, 10) || 14;

      if (!title) {
        alert('Por favor, informe o título da Side Quest.');
        return;
      }

      const diffMeta = QUEST_DIFFICULTIES[difficulty] || QUEST_DIFFICULTIES.medium;

      if (!store.state.quests) store.state.quests = { dreams: [], sideQuests: [], totalXp: 0 };
      if (!Array.isArray(store.state.quests.sideQuests)) store.state.quests.sideQuests = [];

      if (id) {
        // Edit existing
        const existing = store.state.quests.sideQuests.find(q => q.id === id);
        if (existing) {
          existing.title = title;
          existing.desc = desc;
          existing.difficulty = difficulty;
          existing.category = category;
          existing.totalDays = totalDays;
          existing.xpReward = diffMeta.xp;
        }
      } else {
        // Create new
        store.state.quests.sideQuests.unshift({
          id: 'sq_' + Date.now(),
          title: title,
          desc: desc,
          difficulty: difficulty,
          category: category,
          currentDays: 0,
          totalDays: totalDays,
          xpReward: diffMeta.xp,
          completed: false
        });
      }

      store.save();
      sound.playSuccessChime();
      closeAllModals();
      renderQuestsHub();
    };
  }

  // Filter bindings
  const dreamsFilter = document.getElementById('dreamsCategoryFilter');
  if (dreamsFilter) {
    dreamsFilter.onchange = (e) => {
      dreamsCurrentCategoryFilter = e.target.value;
      renderDreams();
    };
  }

  const questsFilter = document.getElementById('questsDifficultyFilter');
  if (questsFilter) {
    questsFilter.onchange = (e) => {
      questsCurrentDifficultyFilter = e.target.value;
      renderSideQuests();
    };
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

let _focusCompletedSectionOpen = false;

function createFocusTaskCard(task) {
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
      ${!task.completed ? `
        <button class="focus-target-select-btn" title="Focar nesta demanda">
          ${isActive ? '🎯 Em Foco' : '🎯 Focar'}
        </button>
      ` : ''}
      <span class="focus-task-text" style="cursor: pointer;" title="${task.completed ? 'Reabrir tarefa' : 'Concluir tarefa'}">${escapeHtml(task.title)}</span>
    </div>

    <div class="focus-cycle-counter-group">
      ${!task.completed ? `
        <button class="focus-stepper-btn btn-step-down" title="Diminuir 1 ciclo">-</button>
        <span class="focus-cycle-pill" title="${cycleCount} períodos (${totalMinutes} min)">
          🍅 ${cycleCount} <span style="font-weight: 500; font-size: 10px; opacity: 0.85;">(${totalMinutes}m)</span>
        </span>
        <button class="focus-stepper-btn btn-step-up" title="Adicionar 1 ciclo">+ </button>
      ` : `
        <span class="focus-cycle-pill" title="${cycleCount} períodos (${totalMinutes} min)" style="opacity: 0.7;">
          🍅 ${cycleCount} (${totalMinutes}m)
        </span>
      `}
      <button class="task-delete-btn delete-focus-task-btn" title="Excluir tarefa" style="margin-left: 4px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;

  // Toggle completion with instant validation + smooth subsequent collapse
  const toggleFocusTask = () => {
    if (!task.completed) {
      task.completed = true;
      card.classList.add('completed');
      card.classList.add('task-check-pop');
      sound.playSuccessChime();

      if (store.state.focus.activeTaskId === task.id) {
        const nextActive = store.state.focus.tasks.find(t => !t.completed && t.id !== task.id);
        store.state.focus.activeTaskId = nextActive ? nextActive.id : null;
      }
      store.save();

      setTimeout(() => {
        card.classList.add('task-completing');
        setTimeout(() => {
          renderFocusSection();
        }, 220);
      }, 180);
    } else {
      task.completed = false;
      card.classList.remove('completed', 'task-completing', 'task-check-pop');
      sound.playPop();
      store.save();
      renderFocusSection();
    }
  };

  const checkBtn = card.querySelector('.task-check-circle');
  if (checkBtn) {
    checkBtn.onclick = (e) => {
      e.stopPropagation();
      toggleFocusTask();
    };
  }

  const taskText = card.querySelector('.focus-task-text');
  if (taskText) {
    taskText.onclick = (e) => {
      e.stopPropagation();
      toggleFocusTask();
    };
  }

  const targetSelectBtn = card.querySelector('.focus-target-select-btn');
  if (targetSelectBtn) {
    targetSelectBtn.onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.focus.activeTaskId = task.id;
      store.save();
      renderFocusSection();
    };
  }

  const stepDownBtn = card.querySelector('.btn-step-down');
  if (stepDownBtn) {
    stepDownBtn.onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      task.cycles = Math.max(0, (task.cycles || 0) - 1);
      store.save();
      renderFocusSection();
    };
  }

  const stepUpBtn = card.querySelector('.btn-step-up');
  if (stepUpBtn) {
    stepUpBtn.onclick = (e) => {
      e.stopPropagation();
      sound.playSuccessChime();
      task.cycles = (task.cycles || 0) + 1;
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
  }

  const deleteBtn = card.querySelector('.delete-focus-task-btn');
  if (deleteBtn) {
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      sound.playPop();
      store.state.focus.tasks = store.state.focus.tasks.filter(t => t.id !== task.id);
      if (store.state.focus.activeTaskId === task.id) {
        store.state.focus.activeTaskId = store.state.focus.tasks.length > 0 ? store.state.focus.tasks[0].id : null;
      }
      store.save();
      renderFocusSection();
    };
  }

  return card;
}

function renderFocusTasks() {
  const container = document.getElementById('focusTasksContainer');
  const countBadge = document.getElementById('focusTasksCountBadge');
  if (!container) return;

  if (!store.state.focus) store.state.focus = { tasks: [], sessions: [] };
  if (!store.state.focus.tasks) store.state.focus.tasks = [];

  const allTasks = store.state.focus.tasks;
  const pendingTasks = allTasks.filter(t => !t.completed);
  const completedTasks = allTasks.filter(t => t.completed);

  if (countBadge) countBadge.textContent = pendingTasks.length;

  container.innerHTML = '';

  if (pendingTasks.length === 0 && completedTasks.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding: 24px 10px;">Nenhuma tarefa na lista de foco.<br>Adicione uma demanda acima para metrificar seus períodos de foco.</div>`;
    return;
  }

  // Render pending tasks
  if (pendingTasks.length === 0) {
    const allDone = document.createElement('div');
    allDone.className = 'empty-state';
    allDone.style.padding = '20px 10px';
    allDone.innerHTML = '🎉 Todas as tarefas de foco foram concluídas!';
    container.appendChild(allDone);
  } else {
    pendingTasks.forEach(task => {
      container.appendChild(createFocusTaskCard(task));
    });
  }

  // Render collapsible completed section
  if (completedTasks.length > 0) {
    const compSection = document.createElement('div');
    compSection.className = 'completed-tasks-section';
    compSection.innerHTML = `
      <button class="completed-tasks-toggle-btn ${_focusCompletedSectionOpen ? 'open' : ''}" id="focusCompletedToggleBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>Concluídas (${completedTasks.length})</span>
      </button>
      <div class="completed-tasks-wrapper ${_focusCompletedSectionOpen ? '' : 'hidden'}" id="focusCompletedWrapper"></div>
    `;

    const wrapper = compSection.querySelector('#focusCompletedWrapper');
    completedTasks.forEach(task => {
      wrapper.appendChild(createFocusTaskCard(task));
    });

    const toggleBtn = compSection.querySelector('#focusCompletedToggleBtn');
    toggleBtn.onclick = () => {
      sound.playPop();
      _focusCompletedSectionOpen = !_focusCompletedSectionOpen;
      toggleBtn.classList.toggle('open', _focusCompletedSectionOpen);
      wrapper.classList.toggle('hidden', !_focusCompletedSectionOpen);
    };

    container.appendChild(compSection);
  }
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

  const dailyCyclesGoal = (store.state.focus && store.state.focus.dailyCyclesGoal) ? store.state.focus.dailyCyclesGoal : 4;
  const cyclePct = Math.min(100, Math.round((todayCycles / dailyCyclesGoal) * 100));

  if (elTodayKpi) elTodayKpi.textContent = `${todayCycles} / ${dailyCyclesGoal} períodos`;
  if (elTodayMin) elTodayMin.textContent = `${todayMinutes} minutos acumulados (${cyclePct}% da meta)`;
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


// =============================================================================
// 21. META PRINCIPAL (NORTH STAR & THE ONE THING) ENGINE
// =============================================================================

function getMainGoal() {
  if (!store.state.mainGoal || typeof store.state.mainGoal !== 'object') {
    store.state.mainGoal = {
      title: 'Minha Meta Principal',
      subtitle: 'Defina seu foco supremo e o objetivo que mudará seu jogo',
      category: 'work',
      deadline: '',
      unit: '%',
      targetValue: 100,
      currentValue: 0,
      whyItMatters: '',
      dailyOneThing: '',
      dailyOneThingCompleted: false,
      dailyOneThingLastDate: '',
      milestones: [],
      nonNegotiables: [
        { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
        { id: 'nn2', text: 'Dizer não a distrações secundárias' },
        { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
      ],
      notes: ''
    };
  }
  if (!Array.isArray(store.state.mainGoal.milestones)) store.state.mainGoal.milestones = [];
  if (!Array.isArray(store.state.mainGoal.nonNegotiables)) {
    store.state.mainGoal.nonNegotiables = [
      { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
      { id: 'nn2', text: 'Dizer não a distrações secundárias' },
      { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
    ];
  }
  return store.state.mainGoal;
}

function calculateMainGoalProgress(mg) {
  if (mg.targetValue && Number(mg.targetValue) > 0) {
    const cur = Number(mg.currentValue) || 0;
    const tgt = Number(mg.targetValue);
    return Math.min(100, Math.max(0, Math.round((cur / tgt) * 100)));
  }
  if (mg.milestones && mg.milestones.length > 0) {
    const completed = mg.milestones.filter(m => m.done).length;
    return Math.round((completed / mg.milestones.length) * 100);
  }
  return 0;
}

function formatGoalValue(val, unit) {
  const num = Number(val) || 0;
  const u = (unit || '').trim();
  if (u === 'R$' || u.toLowerCase() === 'reais') {
    return 'R$ ' + num.toLocaleString('pt-BR');
  }
  if (u === '%') {
    return num + '%';
  }
  if (u) {
    return num.toLocaleString('pt-BR') + ' ' + u;
  }
  return num.toLocaleString('pt-BR');
}

function renderMainGoalBadge() {
  const badge = document.getElementById('mainGoalPctBadge');
  if (!badge) return;
  const mg = getMainGoal();
  const pct = calculateMainGoalProgress(mg);
  badge.textContent = pct + '%';
}

function renderTodayNorthStarBanner() {
  const banner = document.getElementById('todayNorthStarBanner');
  if (!banner) return;
  const mg = getMainGoal();
  const pct = calculateMainGoalProgress(mg);

  const titleEl = document.getElementById('todayNorthStarTitle');
  const pctEl = document.getElementById('todayNorthStarPct');
  const oneThingValEl = document.getElementById('todayNorthStarOneThingVal');

  if (titleEl) titleEl.textContent = mg.title || 'Defina sua Meta Principal';
  if (pctEl) pctEl.textContent = pct + '%';

  if (oneThingValEl) {
    if (mg.dailyOneThing) {
      oneThingValEl.textContent = (mg.dailyOneThingCompleted ? '✓ ' : '') + mg.dailyOneThing;
      oneThingValEl.style.textDecoration = mg.dailyOneThingCompleted ? 'line-through' : 'none';
      oneThingValEl.style.opacity = mg.dailyOneThingCompleted ? '0.7' : '1';
    } else {
      oneThingValEl.textContent = 'Clique para definir a Única Coisa de hoje';
      oneThingValEl.style.textDecoration = 'none';
      oneThingValEl.style.opacity = '0.7';
    }
  }
}

function renderMainGoalView() {
  const mg = getMainGoal();
  const pct = calculateMainGoalProgress(mg);

  // 1. Header & Hero Meta
  const titleDisplay = document.getElementById('mgTitleDisplay');
  const subtitleDisplay = document.getElementById('mgSubtitleDisplay');
  const categoryPill = document.getElementById('mgCategoryPill');
  const countdownPill = document.getElementById('mgCountdownPill');
  const statusBadge = document.getElementById('mgStatusBadge');
  const whyText = document.getElementById('mgWhyText');

  if (titleDisplay) titleDisplay.textContent = mg.title || 'Minha Meta Principal';
  if (subtitleDisplay) subtitleDisplay.textContent = mg.subtitle || 'Defina seu foco supremo e o objetivo que mudará seu jogo';

  if (categoryPill) {
    const areaMeta = LIFE_AREAS[mg.category] || LIFE_AREAS.work;
    categoryPill.textContent = areaMeta.label;
    categoryPill.style.color = areaMeta.color;
    categoryPill.style.borderColor = areaMeta.color + '40';
    categoryPill.style.background = areaMeta.color + '20';
  }

  if (countdownPill) {
    if (mg.deadline) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const deadlineDate = new Date(mg.deadline + 'T00:00:00');
      const diffTime = deadlineDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 1) {
        countdownPill.textContent = '⏳ ' + diffDays + ' dias restantes';
        countdownPill.style.color = 'var(--accent-yellow)';
      } else if (diffDays === 1) {
        countdownPill.textContent = '⏳ Vence amanhã!';
        countdownPill.style.color = 'var(--accent-orange)';
      } else if (diffDays === 0) {
        countdownPill.textContent = '🔥 Vence hoje!';
        countdownPill.style.color = 'var(--accent-red)';
      } else {
        countdownPill.textContent = '⚠️ Expirou há ' + Math.abs(diffDays) + ' dias';
        countdownPill.style.color = 'var(--accent-red)';
      }
    } else {
      countdownPill.textContent = '🗓️ Sem prazo definido';
      countdownPill.style.color = 'var(--text-tertiary)';
    }
  }

  if (statusBadge) {
    if (pct >= 100) {
      statusBadge.textContent = '🏆 100% Concluído!';
      statusBadge.style.color = 'var(--accent-green)';
    } else {
      statusBadge.textContent = pct + '% Concluído';
      statusBadge.style.color = 'var(--accent-blue)';
    }
  }

  if (whyText) {
    whyText.textContent = mg.whyItMatters ? ('"' + mg.whyItMatters + '"') : '"Defina o propósito profundo e o porquê desta meta ser inegociável."';
  }

  // 2. SVG Ring & Progress Controller
  const ring = document.getElementById('mainGoalSvgRing');
  const ringCenterPct = document.getElementById('mgRingCenterPct');
  const circumference = 2 * Math.PI * 66; // ~414.69
  if (ring) {
    const offset = circumference - (pct / 100 * circumference);
    ring.style.strokeDashoffset = offset;
  }
  if (ringCenterPct) {
    ringCenterPct.textContent = pct + '%';
  }

  const currentValDisplay = document.getElementById('mgCurrentValDisplay');
  const targetValDisplay = document.getElementById('mgTargetValDisplay');
  const barFill = document.getElementById('mgBarFill');
  const remainingText = document.getElementById('mgRemainingText');
  const stepInput = document.getElementById('mgStepInput');

  if (currentValDisplay) currentValDisplay.textContent = formatGoalValue(mg.currentValue, mg.unit);
  if (targetValDisplay) targetValDisplay.textContent = formatGoalValue(mg.targetValue, mg.unit);
  if (barFill) barFill.style.width = Math.min(100, pct) + '%';

  if (remainingText) {
    const cur = Number(mg.currentValue) || 0;
    const tgt = Number(mg.targetValue) || 0;
    if (tgt > cur) {
      const diff = tgt - cur;
      remainingText.textContent = 'Faltam ' + formatGoalValue(diff, mg.unit) + ' para atingir o objetivo supremo';
    } else if (tgt > 0 && cur >= tgt) {
      remainingText.textContent = '🎉 Parabéns! Meta principal alcançada com excelência!';
    } else {
      remainingText.textContent = 'Atualize o valor acumulado conforme for progredindo';
    }
  }

  if (stepInput && document.activeElement !== stepInput) {
    stepInput.value = mg.currentValue || 0;
  }

  // 3. The ONE Thing of Today
  const todayStr = getTodayString();
  if (mg.dailyOneThingLastDate !== todayStr) {
    if (mg.dailyOneThingCompleted) {
      mg.dailyOneThingCompleted = false;
    }
    mg.dailyOneThingLastDate = todayStr;
    store.save();
  }

  const oneThingTaskEl = document.getElementById('mgDailyOneThingText');
  const toggleBtn = document.getElementById('toggleDailyOneThingBtn');

  if (oneThingTaskEl) {
    oneThingTaskEl.textContent = mg.dailyOneThing || 'Defina agora a sua ÚNICA prioridade de ouro para o dia de hoje';
    oneThingTaskEl.classList.toggle('completed', Boolean(mg.dailyOneThingCompleted));
  }

  if (toggleBtn) {
    toggleBtn.classList.toggle('completed', Boolean(mg.dailyOneThingCompleted));
  }

  // 4. Strategic Milestones
  renderMainGoalMilestones(mg);

  // 5. Non-Negotiables
  renderMainGoalNonNegotiables(mg);

  // 6. Notes
  const notesInput = document.getElementById('mainGoalNotesInput');
  if (notesInput && document.activeElement !== notesInput) {
    notesInput.value = mg.notes || '';
  }

  // Also update badge and today banner
  renderMainGoalBadge();
  renderTodayNorthStarBanner();
}

function renderMainGoalMilestones(mg) {
  const container = document.getElementById('mainGoalMilestonesList');
  const summaryEl = document.getElementById('milestonesProgressSummary');
  if (!container) return;

  const milestones = mg.milestones || [];
  const completedCount = milestones.filter(m => m.done).length;

  if (summaryEl) {
    if (milestones.length === 0) {
      summaryEl.textContent = 'Nenhuma etapa cadastrada ainda';
    } else {
      const pct = Math.round((completedCount / milestones.length) * 100);
      summaryEl.textContent = completedCount + ' de ' + milestones.length + ' etapas concluídas (' + pct + '%)';
    }
  }

  if (milestones.length === 0) {
    container.innerHTML = `
      <div style="padding: 16px; background: var(--bg-pill); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md); font-size: 13px; color: var(--text-tertiary); text-align: center;">
        🚩 Nenhum marco estratégico cadastrado. Clique em <strong>"+ Marco"</strong> acima para dividir sua meta em etapas claras.
      </div>
    `;
    return;
  }

  container.innerHTML = milestones.map((m) => {
    let dateStr = '';
    if (m.targetDate) {
      try {
        const parts = m.targetDate.split('-');
        if (parts.length === 3) {
          dateStr = '📅 ' + parts[2] + '/' + parts[1] + '/' + parts[0];
        }
      } catch (e) {
        dateStr = m.targetDate;
      }
    }

    return `
      <div class="milestone-item ${m.done ? 'done' : ''}" data-milestone-id="${m.id}">
        <button class="milestone-checkbox" data-milestone-toggle="${m.id}" title="${m.done ? 'Marcar como pendente' : 'Concluir marco'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
        <div class="milestone-info">
          <span class="milestone-title">${escapeHtml(m.title)}</span>
          ${dateStr ? `<span class="milestone-date">${dateStr}</span>` : ''}
        </div>
        <button class="milestone-delete-btn" data-milestone-delete="${m.id}" title="Remover marco">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-milestone-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.milestoneToggle;
      const target = mg.milestones.find(m => m.id === id);
      if (target) {
        target.done = !target.done;
        if (target.done) sound.playSuccessChime();
        else sound.playPop();
        store.save();
        renderMainGoalView();
      }
    });
  });

  container.querySelectorAll('[data-milestone-delete]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.milestoneDelete;
      sound.playPop();
      mg.milestones = mg.milestones.filter(m => m.id !== id);
      store.save();
      renderMainGoalView();
    });
  });
}

function renderMainGoalNonNegotiables(mg) {
  const container = document.getElementById('mainGoalNonNegotiablesList');
  if (!container) return;

  const rules = mg.nonNegotiables && mg.nonNegotiables.length > 0 ? mg.nonNegotiables : [
    { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
    { id: 'nn2', text: 'Dizer não a distrações secundárias' },
    { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
  ];

  container.innerHTML = rules.map((r, i) => `
    <div class="non-negotiable-item">
      <span class="non-neg-badge">${i + 1}</span>
      <span class="non-neg-text">${escapeHtml(r.text)}</span>
    </div>
  `).join('');
}

function setupMainGoalEvents() {
  // 1. Link from Today view to Main Goal tab
  const todayGoBtn = document.getElementById('todayGoToMainGoalBtn');
  if (todayGoBtn) {
    todayGoBtn.addEventListener('click', () => {
      sound.playPop();
      switchTab('mainGoal');
    });
  }

  // 2. Open Edit Main Goal Modal
  const openEditBtn = document.getElementById('openEditMainGoalBtn');
  if (openEditBtn) {
    openEditBtn.addEventListener('click', () => {
      sound.playPop();
      const mg = getMainGoal();
      document.getElementById('editMgTitleInput').value = mg.title || '';
      document.getElementById('editMgSubtitleInput').value = mg.subtitle || '';
      document.getElementById('editMgCategorySelect').value = mg.category || 'work';
      document.getElementById('editMgDeadlineInput').value = mg.deadline || '';
      document.getElementById('editMgUnitInput').value = mg.unit || 'R$';
      document.getElementById('editMgTargetValInput').value = mg.targetValue || 0;
      document.getElementById('editMgCurrentValInput').value = mg.currentValue || 0;
      document.getElementById('editMgWhyInput').value = mg.whyItMatters || '';
      openModal('editMainGoalModal');
    });
  }

  const closeEditModalBtn = document.getElementById('closeEditMainGoalModal');
  if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener('click', () => closeModal('editMainGoalModal'));
  }

  // 3. Save Edit Main Goal Modal
  const saveEditBtn = document.getElementById('saveEditMainGoalBtn');
  if (saveEditBtn) {
    saveEditBtn.addEventListener('click', () => {
      sound.playSuccessChime();
      const mg = getMainGoal();
      mg.title = document.getElementById('editMgTitleInput').value.trim() || 'Minha Meta Principal';
      mg.subtitle = document.getElementById('editMgSubtitleInput').value.trim();
      mg.category = document.getElementById('editMgCategorySelect').value;
      mg.deadline = document.getElementById('editMgDeadlineInput').value;
      mg.unit = document.getElementById('editMgUnitInput').value.trim() || '%';
      mg.targetValue = parseFloat(document.getElementById('editMgTargetValInput').value) || 0;
      mg.currentValue = parseFloat(document.getElementById('editMgCurrentValInput').value) || 0;
      mg.whyItMatters = document.getElementById('editMgWhyInput').value.trim();

      store.save();
      closeModal('editMainGoalModal');
      renderAll();
      renderMainGoalView();
    });
  }

  // 4. Steppers & Quick Value updater
  const decBtn = document.getElementById('mgDecStepBtn');
  const incBtn = document.getElementById('mgIncStepBtn');
  const stepInput = document.getElementById('mgStepInput');
  const saveProgressBtn = document.getElementById('mgSaveProgressBtn');

  function getStepDelta(unit, target) {
    const u = (unit || '').toLowerCase();
    if (u === 'r$' || u === 'reais') return 1000;
    if (target > 500) return 50;
    if (target > 50) return 5;
    return 1;
  }

  if (decBtn) {
    decBtn.addEventListener('click', () => {
      sound.playPop();
      const mg = getMainGoal();
      const delta = getStepDelta(mg.unit, mg.targetValue);
      let cur = parseFloat(stepInput.value) || 0;
      cur = Math.max(0, cur - delta);
      stepInput.value = cur;
      mg.currentValue = cur;
      store.save();
      renderMainGoalView();
    });
  }

  if (incBtn) {
    incBtn.addEventListener('click', () => {
      sound.playPop();
      const mg = getMainGoal();
      const delta = getStepDelta(mg.unit, mg.targetValue);
      let cur = parseFloat(stepInput.value) || 0;
      cur = cur + delta;
      stepInput.value = cur;
      mg.currentValue = cur;
      store.save();
      renderMainGoalView();
    });
  }

  if (saveProgressBtn) {
    saveProgressBtn.addEventListener('click', () => {
      sound.playSuccessChime();
      const mg = getMainGoal();
      const cur = parseFloat(stepInput.value) || 0;
      mg.currentValue = cur;
      store.save();
      renderMainGoalView();
      saveProgressBtn.textContent = 'Salvo! ✓';
      setTimeout(() => { saveProgressBtn.textContent = 'Salvar'; }, 1500);
    });
  }

  // 5. The ONE Thing of Today
  const toggleDailyOneThingBtn = document.getElementById('toggleDailyOneThingBtn');
  if (toggleDailyOneThingBtn) {
    toggleDailyOneThingBtn.addEventListener('click', () => {
      const mg = getMainGoal();
      mg.dailyOneThingCompleted = !mg.dailyOneThingCompleted;
      mg.dailyOneThingLastDate = getTodayString();
      if (mg.dailyOneThingCompleted) sound.playSuccessChime();
      else sound.playPop();
      store.save();
      renderMainGoalView();
    });
  }

  const editDailyOneThingBtn = document.getElementById('editDailyOneThingBtn');
  if (editDailyOneThingBtn) {
    editDailyOneThingBtn.addEventListener('click', () => {
      sound.playPop();
      const mg = getMainGoal();
      document.getElementById('dailyOneThingInput').value = mg.dailyOneThing || '';
      openModal('editDailyOneThingModal');
    });
  }

  const closeEditDailyModalBtn = document.getElementById('closeEditDailyOneThingModal');
  if (closeEditDailyModalBtn) {
    closeEditDailyModalBtn.addEventListener('click', () => closeModal('editDailyOneThingModal'));
  }

  const saveDailyOneThingBtn = document.getElementById('saveDailyOneThingBtn');
  if (saveDailyOneThingBtn) {
    saveDailyOneThingBtn.addEventListener('click', () => {
      const text = document.getElementById('dailyOneThingInput').value.trim();
      if (!text) return;
      sound.playSuccessChime();
      const mg = getMainGoal();
      mg.dailyOneThing = text;
      mg.dailyOneThingCompleted = false;
      mg.dailyOneThingLastDate = getTodayString();
      store.save();
      closeModal('editDailyOneThingModal');
      renderMainGoalView();
    });
  }

  // 6. New Milestone Modal
  const openNewMilestoneBtn = document.getElementById('openNewMilestoneBtn');
  const addMilestoneQuickBtn = document.getElementById('addMilestoneQuickBtn');

  function openMilestoneModal() {
    sound.playPop();
    document.getElementById('milestoneTitleInput').value = '';
    document.getElementById('milestoneDateInput').value = '';
    openModal('newMilestoneModal');
  }

  if (openNewMilestoneBtn) openNewMilestoneBtn.addEventListener('click', openMilestoneModal);
  if (addMilestoneQuickBtn) addMilestoneQuickBtn.addEventListener('click', openMilestoneModal);

  const closeNewMilestoneBtn = document.getElementById('closeNewMilestoneModal');
  if (closeNewMilestoneBtn) {
    closeNewMilestoneBtn.addEventListener('click', () => closeModal('newMilestoneModal'));
  }

  const saveNewMilestoneBtn = document.getElementById('saveNewMilestoneBtn');
  if (saveNewMilestoneBtn) {
    saveNewMilestoneBtn.addEventListener('click', () => {
      const title = document.getElementById('milestoneTitleInput').value.trim();
      if (!title) return;
      const targetDate = document.getElementById('milestoneDateInput').value;
      sound.playSuccessChime();
      const mg = getMainGoal();
      mg.milestones.push({
        id: 'mg_m_' + Date.now(),
        title: title,
        targetDate: targetDate,
        done: false
      });
      store.save();
      closeModal('newMilestoneModal');
      renderMainGoalView();
    });
  }

  // 7. Non-Negotiables Modal
  const editNonNegBtn = document.getElementById('editNonNegotiablesBtn');
  if (editNonNegBtn) {
    editNonNegBtn.addEventListener('click', () => {
      sound.playPop();
      const mg = getMainGoal();
      const rules = mg.nonNegotiables || [];
      document.getElementById('nonNeg1Input').value = (rules[0] && rules[0].text) || '';
      document.getElementById('nonNeg2Input').value = (rules[1] && rules[1].text) || '';
      document.getElementById('nonNeg3Input').value = (rules[2] && rules[2].text) || '';
      openModal('editNonNegotiablesModal');
    });
  }

  const closeNonNegBtn = document.getElementById('closeEditNonNegotiablesModal');
  if (closeNonNegBtn) {
    closeNonNegBtn.addEventListener('click', () => closeModal('editNonNegotiablesModal'));
  }

  const saveNonNegBtn = document.getElementById('saveNonNegotiablesBtn');
  if (saveNonNegBtn) {
    saveNonNegBtn.addEventListener('click', () => {
      sound.playSuccessChime();
      const mg = getMainGoal();
      const r1 = document.getElementById('nonNeg1Input').value.trim();
      const r2 = document.getElementById('nonNeg2Input').value.trim();
      const r3 = document.getElementById('nonNeg3Input').value.trim();

      mg.nonNegotiables = [];
      if (r1) mg.nonNegotiables.push({ id: 'nn1', text: r1 });
      if (r2) mg.nonNegotiables.push({ id: 'nn2', text: r2 });
      if (r3) mg.nonNegotiables.push({ id: 'nn3', text: r3 });

      if (mg.nonNegotiables.length === 0) {
        mg.nonNegotiables = [
          { id: 'nn1', text: 'Bloco de foco diário na Única Coisa' },
          { id: 'nn2', text: 'Dizer não a distrações secundárias' },
          { id: 'nn3', text: 'Consistência acima de intensidade súbita' }
        ];
      }

      store.save();
      closeModal('editNonNegotiablesModal');
      renderMainGoalView();
    });
  }

  // 8. Vision Notes save
  const saveNotesBtn = document.getElementById('saveMainGoalNotesBtn');
  const notesTextarea = document.getElementById('mainGoalNotesInput');
  if (saveNotesBtn && notesTextarea) {
    saveNotesBtn.addEventListener('click', () => {
      sound.playSuccessChime();
      const mg = getMainGoal();
      mg.notes = notesTextarea.value;
      store.save();
      saveNotesBtn.textContent = 'Salvo! ✓';
      setTimeout(() => { saveNotesBtn.textContent = 'Salvar'; }, 1500);
    });
  }
}
