// Objeto de tradução com todas as strings de texto
const translations = {
  pt: {
    appName: "Site de Treino",
    loginTitle: "Login",
    loginButton: "Entrar",
    loginNoAccount: "Não tem uma conta?",
    loginSignupLink: "Cadastre-se",
    signupTitle: "Criar Conta",
    signupButton: "Cadastrar",
    signupHasAccount: "Já tem uma conta?",
    signupLoginLink: "Login",
    onboardingTitle: "Questionário Inicial",
    onboardingGoal: "Qual é o seu objetivo?",
    onboardingExperience: "Qual o seu nível de experiência?",
    onboardingDays: "Quantos dias por semana você pode treinar?",
    onboardingLocation: "Onde você treina?",
    onboardingInjury: "Alguma lesão ou limitação?",
    onboardingPrev: "Anterior",
    onboardingNext: "Próximo",
    onboardingFinish: "Finalizar",
    onboardingOptionsGoal: [
      "Hipertrofia",
      "Força",
      "Definição Muscular",
      "Apenas Manutenção",
    ],
    onboardingOptionsExperience: [
      "beginner (< 6 meses)",
      "Intermediário (6 meses - 2 anos)",
      "Avançado (> 2 anos)",
    ],
    onboardingOptionsDays: ["3 dias", "4 dias", "5 dias", "6 dias"],
    onboardingOptionsLocation: [
      "Academia completa",
      "Academia com poucos equipamentos",
      "Em casa",
    ],
    onboardingInjuryPlaceholder: "Descreva aqui qualquer lesão ou limitação.",
    dashboardHello: "Olá,",
    dashboardScore: "Placar:",
    dashboardChooseWorkout: "Escolha o seu treino:",
    dashboardCreateWorkout: "Criar Novo Treino",
    workoutOfTheDay: "Treino do Dia -",
    workoutYourGoal: "Seu Objetivo Principal",
    workoutExercises: "Exercícios",
    workoutFinish: "Finalizar Treino",
    workoutChange: "Trocar Treino",
    workoutNoPR: "Nenhum PR registrado",
    workoutPR: "PR:",
    workoutSets: "Séries:",
    workoutReps: "Repetições:",
    workoutNotes: "Notas:",
    workoutWeightPlaceholder: "Peso (kg)",
    workoutRepsPlaceholder: "Reps",
    workoutCardio: "Cardio",
    workoutCardioGoal: "Meta:",
    workoutCardioInputPlaceholder: "Minutos de cardio",
    goalsTitle: "Suas Metas",
    goalsCardioTitle: "Meta de Cardio",
    goalsCardioCurrent: "Atualmente definida para:",
    goalsCardioUnitMinutes: "minutos",
    goalsCardioUnitHours: "horas",
    goalsSetNew: "Definir nova meta de cardio:",
    goalsSave: "Salvar Meta",
    achievementsTitle: "Conquistas",
    achievementsUnlocked: "Conquistas Desbloqueadas",
    achievementsLocked: "Conquistas Bloqueadas",
    achievementsNoUnlocked:
      "Nenhuma conquista desbloqueada ainda. Comece a treinar!",
    achievementsNoLocked: "Todas as conquistas foram desbloqueadas. Parabéns!",
    achievementsLockedStatus: "Conquista Bloqueada",
    progressTitle: "Seu Progresso",
    progressWorkoutCount: "Treinos por Data",
    progressNoData:
      "Nenhum treino registrado ainda. Finalize seu primeiro treino para ver seu progresso aqui!",
    profileTitle: "Tela de Perfil",
    profileUser: "Usuário:",
    profileEmail: "Email:",
    profileLogout: "Sair",
    prsTitle: "Meus Recordes Pessoais (PRs)",
    prsNoPRs: "Nenhum Personal Record registrado ainda. Vamos treinar!",
    prsWeight: "Peso:",
    prsReps: "Repetições:",
    prsDate: "Data:",
    createWorkoutTitle: "Criar Novo Treino",
    createWorkoutNamePlaceholder: "Nome do Treino",
    createWorkoutAddExercise: "Adicionar Exercício",
    createWorkoutSave: "Salvar Treino",
    createWorkoutExerciseNamePlaceholder: "Nome do Exercício",
    createWorkoutExerciseSetsPlaceholder: "Séries",
    createWorkoutExerciseRepsPlaceholder: "Repetições",
    createWorkoutExerciseNotesPlaceholder: "Notas (opcional)",
    messageErrorFillQuestion:
      "Por favor, responda a esta pergunta para continuar.",
    messageSuccessCardioGoalSaved: "Meta de cardio salva com sucesso!",
    messageErrorInvalidCardioGoal:
      "Por favor, insira um valor válido para a meta de cardio.",
    messageErrorWorkoutName: "Por favor, insira um nome para o treino.",
    messageErrorAddExercise:
      "Por favor, adicione pelo menos um exercício ao treino.",
    messageErrorFillDetails:
      "Por favor, preencha os detalhes de pelo menos um exercício válido.",
    messageSuccessWorkoutCreated:
      'Treino "{{workoutName}}" criado com sucesso!',
    messageErrorSelectWorkout: "Por favor, selecione um treino primeiro.",
    messageSuccessNewPR:
      "Novo PR em {{exerciseName}}: {{weight}}kg x {{reps}} reps!",
    messageSuccessCardioGoalReached:
      "Meta de cardio alcançada! Você ganhou 10 pontos. Placar total: {{score}}",
    messageErrorCardioGoalMissed:
      "Meta de cardio não alcançada. Você perdeu 5 pontos. Placar total: {{score}}",
    messageSuccessAchievementUnlocked:
      "Conquista desbloqueada: {{achievementName}}!",
    timerTitle: "Temporizador",
    timerPlaceholder: "Segundos",
    timerStart: "Iniciar",
    timerRestart: "Reiniciar",
    timerDone: "Tempo esgotado!",
  },
  en: {
    appName: "Workout Site",
    loginTitle: "Login",
    loginButton: "Sign In",
    loginNoAccount: "Don't have an account?",
    loginSignupLink: "Sign Up",
    signupTitle: "Create Account",
    signupButton: "Sign Up",
    signupHasAccount: "Already have an account?",
    signupLoginLink: "Login",
    onboardingTitle: "Initial Questionnaire",
    onboardingGoal: "What is your goal?",
    onboardingExperience: "What is your experience level?",
    onboardingDays: "How many days a week can you train?",
    onboardingLocation: "Where do you train?",
    onboardingInjury: "Any injuries or limitations?",
    onboardingPrev: "Previous",
    onboardingNext: "Next",
    onboardingFinish: "Finish",
    onboardingOptionsGoal: [
      "Hypertrophy",
      "Strength",
      "Muscle Definition",
      "Just Maintenance",
    ],
    onboardingOptionsExperience: [
      "beginner (< 6 months)",
      "Intermediate (6 months - 2 years)",
      "Advanced (> 2 years)",
    ],
    onboardingOptionsDays: ["3 days", "4 days", "5 days", "6 days"],
    onboardingOptionsLocation: [
      "Full gym",
      "Gym with few equipment",
      "At home",
    ],
    onboardingInjuryPlaceholder: "Describe any injuries or limitations here.",
    dashboardHello: "Hello,",
    dashboardScore: "Score:",
    dashboardChooseWorkout: "Choose your workout:",
    dashboardCreateWorkout: "Create New Workout",
    workoutOfTheDay: "Workout of the Day -",
    workoutYourGoal: "Your Main Goal",
    workoutExercises: "Exercises",
    workoutFinish: "Finish Workout",
    workoutChange: "Change Workout",
    workoutNoPR: "No PR recorded yet",
    workoutPR: "PR:",
    workoutSets: "Sets:",
    workoutReps: "Reps:",
    workoutNotes: "Notes:",
    workoutWeightPlaceholder: "Weight (kg)",
    workoutRepsPlaceholder: "Reps",
    workoutCardio: "Cardio",
    workoutCardioGoal: "Goal:",
    workoutCardioInputPlaceholder: "Cardio minutes",
    goalsTitle: "Your Goals",
    goalsCardioTitle: "Cardio Goal",
    goalsCardioCurrent: "Currently set to:",
    goalsCardioUnitMinutes: "minutes",
    goalsCardioUnitHours: "hours",
    goalsSetNew: "Set new cardio goal:",
    goalsSave: "Save Goal",
    achievementsTitle: "Achievements",
    achievementsUnlocked: "Unlocked Achievements",
    achievementsLocked: "Locked Achievements",
    achievementsNoUnlocked: "No achievements unlocked yet. Start training!",
    achievementsNoLocked:
      "All achievements have been unlocked. Congratulations!",
    achievementsLockedStatus: "Achievement Locked",
    progressTitle: "Your Progress",
    progressWorkoutCount: "Workouts by Date",
    progressNoData:
      "No workouts recorded yet. Finish your first workout to see your progress here!",
    profileTitle: "Profile Page",
    profileUser: "User:",
    profileEmail: "Email:",
    profileLogout: "Logout",
    prsTitle: "My Personal Records (PRs)",
    prsNoPRs: "No Personal Records recorded yet. Let's train!",
    prsWeight: "Weight:",
    prsReps: "Reps:",
    prsDate: "Date:",
    createWorkoutTitle: "Create New Workout",
    createWorkoutNamePlaceholder: "Workout Name",
    createWorkoutAddExercise: "Add Exercise",
    createWorkoutSave: "Save Workout",
    createWorkoutExerciseNamePlaceholder: "Exercise Name",
    createWorkoutExerciseSetsPlaceholder: "Sets",
    createWorkoutExerciseRepsPlaceholder: "Reps",
    createWorkoutExerciseNotesPlaceholder: "Notes (optional)",
    messageErrorFillQuestion: "Please answer this question to continue.",
    messageSuccessCardioGoalSaved: "Cardio goal successfully saved!",
    messageErrorInvalidCardioGoal:
      "Please enter a valid value for the cardio goal.",
    messageErrorWorkoutName: "Please enter a workout name.",
    messageErrorAddExercise: "Please add at least one exercise to the workout.",
    messageErrorFillDetails:
      "Please fill in the details for at least one valid exercise.",
    messageSuccessWorkoutCreated:
      'Workout "{{workoutName}}" created successfully!',
    messageErrorSelectWorkout: "Please select a workout first.",
    messageSuccessNewPR:
      "New PR in {{exerciseName}}: {{weight}}kg x {{reps}} reps!",
    messageSuccessCardioGoalReached:
      "Cardio goal reached! You earned 10 points. Total score: {{score}}",
    messageErrorCardioGoalMissed:
      "Cardio goal not reached. You lost 5 points. Total score: {{score}}",
    messageSuccessAchievementUnlocked:
      "Achievement unlocked: {{achievementName}}!",
    timerTitle: "Timer",
    timerPlaceholder: "Seconds",
    timerStart: "Start",
    timerRestart: "Restart",
    timerDone: "Time's up!",
  },
};

// Função para obter a string traduzida, substituindo variáveis se necessário
function getTranslation(key, vars = {}) {
  let text = translations[appState.language][key];
  if (!text) return "";
  for (const [varName, varValue] of Object.entries(vars)) {
    text = text.replace(new RegExp(`{{${varName}}}`, "g"), varValue);
  }
  return text;
}

// Importa os ícones do Lucide-React como SVGs para serem usados no HTML
const icons = {
  Home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  Dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><path d="m14.4 14.4-1.8 1.8a2.4 2.4 0 0 1-3.4 0L6.6 12.6a2.41 2.41 0 0 1 0-3.42l1.8-1.8"/><path d="m16.2 5.4-1.8 1.8c-.8.8-1.2 1.8-1.2 2.8s.4 2 1.2 2.8l1.8 1.8c.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2l1.8-1.8c.8-.8 1.2-1.8 1.2-2.8s-.4-2-1.2-2.8L19 3.6c-.8-.8-1.8-1.2-2.8-1.2s-2 .4-2.8 1.2zM2 22l1-1m-1 1-1-1m1 1 1-1m-1 1 1-1"/></svg>`,
  BarChart2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  User: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  Target: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  CheckCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.62"/><path d="M11.62 14.15l-3.23-3.23"/><path d="M22 4L12 14.28 16.5 18"/></svg>`,
  Trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-yellow-400"><path d="M6 9H4L2 7l2-2 2 2z"/><path d="M18 9h2l2-2-2-2-2 2z"/><path d="M12 2v20"/><path d="M12 2a4 4 0 0 1 4 4v2h-8V6a4 4 0 0 1 4-4z"/><path d="M12 12a4 4 0 0 1 4 4v2h-8v-2a4 4 0 0 1 4-4z"/></svg>`,
  ArrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>`,
  Award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><circle cx="12" cy="8" r="6"/><path d="M15.45 10.89 19 14 12 22 5 14 8.55 10.89"/><path d="M12 12v10"/></svg>`,
  Plus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  Medal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mb-1"><path d="M7.2 12c.7.4 1.4 1 1.4 2.8V22c0 .6-.4 1-.9 1H6c-.6 0-1-.4-1-1v-8.4c0-2 .8-2.6 1.4-2.8.7-.3 1.4-.5 2.1-.5h.6"/><path d="m15.8 12c-.7.4-1.4 1-1.4 2.8V22c0 .6.4 1 .9 1h1.3c.6 0 1-.4 1-1v-8.4c0-2-.8-2.6-1.4-2.8-.7-.3-1.4-.5-2.1-.5h-.6"/><circle cx="12" cy="4" r="2"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M17 12h-2c-.5-1.5-1.5-3.3-3.5-3.3S9.5 7.2 9 8.7H7"/><path d="M12 12h.1"/></svg>`,
  Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
};

// Dados de treino simulados
let workouts = {
  "Push(Peito, Ombros e Tríceps)": [
    {
      name: "Supino Inclinado com Halteres",
      sets: 4,
      reps: "8-12",
      notes: "Foco na contração do peitoral superior. Dropset na última série",
    },
    {
      name: "Desenvolvimento de ombros (Sentado)",
      sets: 4,
      reps: "10-15",
      notes:
        "Não trave os cotovelos no topo. Na última série, adicione 3-5 repedtições parciais",
    },
    {
      name: "Elevação Lateral com Halteres",
      sets: 4,
      reps: "15-20",
      notes: "Superserie com Tríceps na Polia Alta",
    },
    {
      name: "Tríceps na Polia Alta (Barra Reta)",
      sets: 3,
      reps: "12-15",
      notes: "Superserie com Elevação Lateral",
    },
    {
      name: "Mergulho no Banco (Tríceps Banco",
      sets: 3,
      reps: "Até a Falha",
      notes: "Concentre-se no alongamento e na contração",
    },
  ],
  "Costas/Bíceps": [
    { name: "Remada Curvada com Barra", sets: 4, reps: "8-10", notes: "" },
    {
      name: "Puxada Frontal na Polia Alta",
      sets: 4,
      reps: "10-12",
      notes: "Foque na contração das escápulas",
    },
    {
      name: "Remada Unilateral com Halteres",
      sets: 3,
      reps: "10-12",
      notes: "Rest-Pause na última série",
    },
    {
      name: "Rosca Martelo",
      sets: 3,
      reps: "12-15",
      notes: "Foque na estabilidade do corpo",
    },
    {
      name: "Rosca Direta com Barra",
      sets: 4,
      reps: "12-15",
      notes: "Foco na contração do antebraço.",
    },
  ],
  "Pernas - Foco em Quadríceps": [
    {
      name: "Agachamento Livre Com Barra",
      sets: 5,
      reps: "8-10",
      notes: "Desça o máximo que puder sem curvar as costas.",
    },
    {
      name: "Leg Press",
      sets: 4,
      reps: "10-15",
      notes: "Dropset na última série",
    },
    {
      name: "Cadeira Extensora",
      sets: 4,
      reps: "15-20",
      notes: "Movimento lento e controlado. Superset com Afundo no Smith",
    },
    {
      name: "Cadeira Flexora",
      sets: 3,
      reps: "12-15",
      notes: "Concentre-se no músculo posterior da coxa.",
    },
    {
      name: "Panturilha em Pé",
      sets: 4,
      reps: "12-15",
      notes: "Movimento lento e controlado",
    },
  ],
  "Glúteos e Posterior de Coxa": [
    {
      name: "Elevação de Quadril (Hip Thrust)",
      sets: 4,
      reps: "8-10",
      notes: "",
    },
    {
      name: "Stiff com Barra",
      sets: 4,
      reps: "10-12",
      notes: "Superserie com adbução de Quadril",
    },
    {
      name: "Cadeira Flexora",
      sets: 4,
      reps: "10-15",
      notes: "Foque na Concentração maaxima.",
    },
    {
      name: "Agachamento Búlgaro",
      sets: 3,
      reps: "10-12",
      notes: "Tronco Levemente inclinado para frente",
    },
    { name: "Coice na Polia Baixa", sets: 3, reps: "10-12", notes: "" },
  ],
  Core: [
    { name: "Prancha", sets: 4, reps: "45-60 segundos", notes: "" },
    { name: "Elevação de Pernas", sets: 4, reps: "10-12", notes: "" },
    { name: "Prancha Lateral", sets: 4, reps: "30-45 segundos", notes: "" },
  ],
  Cardio: [
    { name: "Esteira", reps: "60 minutos", notes: "" },
    { name: "Bike", reps: "60 minutos", notes: "" },
    { name: "Treadmill", reps: "60 minutos", notes: "" },
    { name: "Elíptico", reps: "60 minutos", notes: "" },
    
  ],
};

// Dados de conquistas (achievements)
const allAchievements = {
  firstWorkout: {
    name: "Primeiro Passo",
    description: "Complete seu primeiro treino.",
    icon: icons.Trophy,
    unlocked: false,
  },
  cardioMaster: {
    name: "Mestre do Cardio",
    description: "Cumpra sua meta de cardio.",
    icon: icons.Trophy,
    unlocked: false,
  },
  fullBody: {
    name: "Corpo Todo",
    description: "Complete um treino Full Body.",
    icon: icons.Trophy,
    unlocked: false,
  },
  fiveWorkouts: {
    name: "Força de Vontade",
    description: "Complete 5 treinos.",
    icon: icons.Trophy,
    unlocked: false,
  },
};

// Variáveis de estado globais
let appState = {
  screen: "login",
  user: null,
  onboardingData: {},
  onboardingStep: 0,
  loading: false,
  selectedWorkout: null,
  progressData: {
    totalWorkouts: 0,
    pr: "Nenhum",
    streak: 0,
  },
  formErrors: {},
  goals: {
    // Estrutura para a meta de cardio
    cardio: {
      value: 0,
      unit: "minutes",
    },
  },
  score: 0, // Estado para o placar do usuário
  achievements: allAchievements, // Adiciona o objeto de conquistas ao estado
  workoutsHistory: [], // Nova variável para armazenar o histórico de treinos
  prData: {}, // Novo objeto para armazenar os Personal Records
  newWorkoutExercises: [], // Array temporário para criar um novo treino
  language: "pt", // Novo estado para o idioma
  timer: {
    intervalId: null,
    secondsLeft: 0,
    running: false,
  },
};
//song 
const appContainer = document.getElementById("app");
const navBar = document.getElementById("nav-bar");
const langToggleBtn = document.getElementById("lang-toggle-btn");
const dingAudio = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

// Altera o idioma quando o botão é clicado
langToggleBtn.addEventListener("click", () => {
  appState.language = appState.language === "pt" ? "en" : "pt";
  langToggleBtn.textContent = appState.language.toUpperCase();
  renderApp();
});

// Lógica do temporizador
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (appState.timer.running) return;
  const timerInput = document.getElementById("timer-input");
  const seconds = parseInt(timerInput.value, 10);
  if (isNaN(seconds) || seconds <= 0) {
    showMessage("messageErrorInvalidTimer", "error");
    return;
  }

  appState.timer.secondsLeft = seconds;
  appState.timer.running = true;
  renderApp();

  appState.timer.intervalId = setInterval(() => {
    appState.timer.secondsLeft--;
    renderTimer();
    if (appState.timer.secondsLeft <= 0) {
      clearInterval(appState.timer.intervalId);
      appState.timer.running = false;
      dingAudio.play();
      showMessage("timerDone", "success");
      renderApp();
    }
  }, 1000);
}

function restartTimer() {
  clearInterval(appState.timer.intervalId);
  appState.timer.running = false;
  appState.timer.secondsLeft = 0;
  renderApp();
}

function renderTimer() {
  const timerDisplay = document.getElementById("timer-display");
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(appState.timer.secondsLeft);
  }
}

// Lógica para salvar e carregar treinos personalizados
function saveWorkouts() {
  localStorage.setItem("customWorkouts", JSON.stringify(workouts));
}

function loadWorkouts() {
  const storedWorkouts = JSON.parse(localStorage.getItem("customWorkouts"));
  if (storedWorkouts) {
    // Mescla os treinos padrão com os treinos salvos
    workouts = { ...workouts, ...storedWorkouts };
  }
}

// Função para exibir mensagens temporárias
function showMessage(key, type = "success", vars = {}) {
  const messageElement = document.getElementById("message-box");
  messageElement.textContent = getTranslation(key, vars);
  messageElement.className = `fixed top-4 left-1/2 -translate-x-1/2 p-3 rounded-lg shadow-lg text-white z-50 transition-transform duration-300 transform ${
    type === "success" ? "bg-green-600" : "bg-red-600"
  } visible`;
  setTimeout(() => {
    messageElement.classList.remove("visible");
  }, 3000);
}

// Funções para renderizar as telas
function renderLoading() {
  appContainer.innerHTML = `
                <div class="flex justify-center items-center h-full text-white">
                    <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            `;
}

function renderLogin() {
  const emailError = appState.formErrors.email || "";
  const passwordError = appState.formErrors.password || "";

  appContainer.innerHTML = `
                <div class="w-full max-w-sm p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "loginTitle"
                    )}</h1>
                    <form id="login-form" class="space-y-4">
                        <div class="space-y-1">
                            <input type="email" placeholder="Email" id="email" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                              emailError ? "border border-red-500" : ""
                            }" required />
                            ${
                              emailError
                                ? `<p class="text-red-400 text-sm mt-1">${emailError}</p>`
                                : ""
                            }
                        </div>
                        <div class="space-y-1">
                            <input type="password" placeholder="${getTranslation(
                              "signupButton"
                            )}" id="password" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
    passwordError ? "border border-red-500" : ""
  }" required />
                            ${
                              passwordError
                                ? `<p class="text-red-400 text-sm mt-1">${passwordError}</p>`
                                : ""
                            }
                        </div>
                        <button type="submit" class="w-full p-3 font-semibold text-lg bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
                            ${getTranslation("loginButton")}
                        </button>
                    </form>
                    <div class="text-center text-sm">
                        ${getTranslation(
                          "loginNoAccount"
                        )} <button id="signup-btn" class="text-orange-400 hover:underline transition-colors duration-200">${getTranslation(
    "loginSignupLink"
  )}</button>
                    </div>
                </div>
            `;
  document.getElementById("login-form").addEventListener("submit", handleLogin);
  document.getElementById("signup-btn").addEventListener("click", () => {
    appState.screen = "signup";
    appState.formErrors = {}; // Limpa os erros ao mudar de tela
    renderApp();
  });
  navBar.classList.add("hidden");
}

function renderSignup() {
  const emailError = appState.formErrors.email || "";
  const passwordError = appState.formErrors.password || "";

  appContainer.innerHTML = `
                <div class="w-full max-w-sm p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "signupTitle"
                    )}</h1>
                    <form id="signup-form" class="space-y-4">
                        <div class="space-y-1">
                            <input type="email" placeholder="Email" id="email" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                              emailError ? "border border-red-500" : ""
                            }" required />
                            ${
                              emailError
                                ? `<p class="text-red-400 text-sm mt-1">${emailError}</p>`
                                : ""
                            }
                        </div>
                        <div class="space-y-1">
                            <input type="password" placeholder="${getTranslation(
                              "signupButton"
                            )}" id="password" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
    passwordError ? "border border-red-500" : ""
  }" required />
                            ${
                              passwordError
                                ? `<p class="text-red-400 text-sm mt-1">${passwordError}</p>`
                                : ""
                            }
                        </div>
                        <button type="submit" class="w-full p-3 font-semibold text-lg bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
                            ${getTranslation("signupButton")}
                        </button>
                    </form>
                    <div class="text-center text-sm">
                        ${getTranslation(
                          "signupHasAccount"
                        )} <button id="login-btn" class="text-orange-400 hover:underline transition-colors duration-200">${getTranslation(
    "signupLoginLink"
  )}</button>
                    </div>
                </div>
            `;
  document
    .getElementById("signup-form")
    .addEventListener("submit", handleSignup);
  document.getElementById("login-btn").addEventListener("click", () => {
    appState.screen = "login";
    appState.formErrors = {}; // Limpa os erros ao mudar de tela
    renderApp();
  });
  navBar.classList.add("hidden");
}

function renderOnboarding() {
  const questions = [
    {
      step: 0,
      title: getTranslation("onboardingGoal"),
      options: translations[appState.language].onboardingOptionsGoal,
    },
    {
      step: 1,
      title: getTranslation("onboardingExperience"),
      options: translations[appState.language].onboardingOptionsExperience,
    },
    {
      step: 2,
      title: getTranslation("onboardingDays"),
      options: translations[appState.language].onboardingOptionsDays,
    },
    {
      step: 3,
      title: getTranslation("onboardingLocation"),
      options: translations[appState.language].onboardingOptionsLocation,
    },
    {
      step: 4,
      title: getTranslation("onboardingInjury"),
      type: "text",
      placeholder: getTranslation("onboardingInjuryPlaceholder"),
    },
  ];

  const currentQuestion = questions[appState.onboardingStep];
  const isTextType = currentQuestion.type === "text";
  const progressWidth =
    ((appState.onboardingStep + 1) / questions.length) * 100;

  let optionsHtml = "";
  if (isTextType) {
    optionsHtml = `
                    <textarea id="onboarding-input" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none" placeholder="${
                      currentQuestion.placeholder || ""
                    }">${
      appState.onboardingData[currentQuestion.step] || ""
    }</textarea>
                `;
  } else {
    optionsHtml = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;
    currentQuestion.options.forEach((option, index) => {
      const isSelected =
        appState.onboardingData[currentQuestion.step] === option;
      optionsHtml += `
                        <button data-option="${option}" class="p-4 rounded-lg transition-colors duration-200 ${
        isSelected
          ? "bg-orange-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }">
                            ${option}
                        </button>
                    `;
    });
    optionsHtml += `</div>`;
  }

  appContainer.innerHTML = `
                <div class="w-full max-w-xl p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                    <h2 class="text-2xl font-bold text-center text-orange-500">${getTranslation(
                      "onboardingTitle"
                    )}</h2>
                    <div class="w-full bg-gray-700 rounded-full h-2.5">
                        <div class="bg-orange-500 h-2.5 rounded-full transition-all duration-500" style="width: ${progressWidth}%"></div>
                    </div>
                    <p class="text-lg text-center font-light mt-4">${
                      currentQuestion.title
                    }</p>
                    ${optionsHtml}
                    <div class="flex justify-between items-center mt-6">
                        <button id="prev-btn" class="p-3 font-semibold rounded-lg transition-colors duration-200 ${
                          appState.onboardingStep === 0
                            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                            : "bg-gray-600 text-white hover:bg-gray-500"
                        }">
                            ${getTranslation("onboardingPrev")}
                        </button>
                        <button id="next-btn" class="p-3 font-semibold rounded-lg transition-colors duration-200">
                            ${
                              appState.onboardingStep === questions.length - 1
                                ? getTranslation("onboardingFinish")
                                : getTranslation("onboardingNext")
                            }
                        </button>
                    </div>
                </div>
            `;

  if (isTextType) {
    document
      .getElementById("onboarding-input")
      .addEventListener("input", (e) => {
        appState.onboardingData[currentQuestion.step] = e.target.value;
        updateNextButtonState();
      });
  } else {
    appContainer.querySelectorAll("button[data-option]").forEach((button) => {
      button.addEventListener("click", (e) => {
        appState.onboardingData[currentQuestion.step] =
          e.target.getAttribute("data-option");
        renderOnboarding(); // Re-render to show selection
        updateNextButtonState();
      });
    });
  }
  document.getElementById("prev-btn").addEventListener("click", handlePrevStep);
  document.getElementById("next-btn").addEventListener("click", handleNextStep);
  updateNextButtonState();
  navBar.classList.add("hidden");

  function updateNextButtonState() {
    const nextButton = document.getElementById("next-btn");
    const isOptionSelected = !!appState.onboardingData[currentQuestion.step];
    nextButton.disabled = !isOptionSelected;
    nextButton.className = `p-3 font-semibold rounded-lg transition-colors duration-200 ${
      isOptionSelected
        ? "bg-orange-600 text-white hover:bg-orange-700"
        : "bg-gray-700 text-gray-500 cursor-not-allowed"
    }`;
  }
}

function renderDashboard() {
  if (!appState.user) return;
  navBar.classList.remove("hidden");

  if (!appState.selectedWorkout) {
    let workoutButtons = Object.keys(workouts)
      .map(
        (workoutName) => `
                    <button data-workout="${workoutName}" class="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2 hover:bg-gray-700 transition-colors duration-200">
                        ${icons.Dumbbell}
                        <span class="text-lg font-semibold text-white text-center">${workoutName}</span>
                    </button>
                `
      )
      .join("");

    appContainer.innerHTML = `
                    <div class="p-4 w-full max-w-4xl mx-auto">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold text-orange-500">${getTranslation(
                              "dashboardHello"
                            )} ${appState.user.email.split("@")[0]}!</h1>
                            <div class="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg shadow-inner">
                                <span class="text-xs text-gray-400">${getTranslation(
                                  "dashboardScore"
                                )}</span>
                                <span class="text-lg font-bold text-yellow-400">${
                                  appState.score
                                }</span>
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold text-gray-300 mb-6">${getTranslation(
                          "dashboardChooseWorkout"
                        )}</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${workoutButtons}
                            <button id="create-workout-btn" class="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2 hover:bg-gray-700 transition-colors duration-200 border-2 border-dashed border-gray-600">
                                ${icons.Plus}
                                <span class="text-lg font-semibold text-gray-400 text-center">${getTranslation(
                                  "dashboardCreateWorkout"
                                )}</span>
                            </button>
                        </div>
                    </div>
                `;

    appContainer.querySelectorAll("[data-workout]").forEach((button) => {
      button.addEventListener("click", (e) => {
        appState.selectedWorkout = e.currentTarget.getAttribute("data-workout");
        renderApp();
      });
    });
    document
      .getElementById("create-workout-btn")
      .addEventListener("click", () => {
        appState.screen = "createWorkout";
        renderApp();
      });
  } else {
    const selectedWorkoutData = workouts[appState.selectedWorkout];
    let exercisesHtml = selectedWorkoutData
      .map((exercise, index) => {
        const currentPR = appState.prData[exercise.name];
        const prText = currentPR
          ? `${getTranslation("workoutPR")} ${currentPR.weight}kg x ${
              currentPR.reps
            } ${getTranslation("workoutReps")}`
          : getTranslation("workoutNoPR");

        return `
                    <div class="bg-gray-900 p-4 rounded-xl shadow-inner border border-gray-700">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-semibold text-orange-400">${
                              exercise.name
                            }</h3>
                            <span class="text-sm text-gray-400">${
                              exercise.sets
                            }x ${exercise.reps}</span>
                        </div>
                        <p class="text-sm text-gray-500 mt-1 mb-3">${
                          exercise.notes
                        }</p>
                        
                        <!-- Exibe o PR atual se existir -->
                        <div class="flex items-center space-x-2 my-2">
                           ${icons.Trophy}
                           <span class="text-sm text-yellow-400 font-semibold">${prText}</span>
                        </div>

                        <div class="mt-4 space-y-2">
                            <h4 class="text-sm text-gray-400 font-medium">${getTranslation(
                              "workoutSets"
                            )}</h4>
                            ${Array.from({ length: exercise.sets })
                              .map(
                                (_, setIndex) => `
                                <div class="flex items-center space-x-2">
                                    <span class="text-gray-400 font-mono w-6">S${
                                      setIndex + 1
                                    }:</span>
                                    <input type="number" id="weight-${exercise.name.replace(
                                      /\s/g,
                                      "-"
                                    )}-${setIndex}" placeholder="${getTranslation(
                                  "workoutWeightPlaceholder"
                                )}" class="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-center" />
                                    <input type="number" id="reps-${exercise.name.replace(
                                      /\s/g,
                                      "-"
                                    )}-${setIndex}" placeholder="${getTranslation(
                                  "workoutRepsPlaceholder"
                                )}" class="w-16 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-center" />
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                `;
      })
      .join("");

    // Formatação da meta de cardio para exibição
    const cardioGoalValue = appState.goals.cardio.value;
    const cardioGoalUnit =
      appState.goals.cardio.unit === "hours"
        ? getTranslation("goalsCardioUnitHours")
        : getTranslation("goalsCardioUnitMinutes");
    const cardioGoalText =
      cardioGoalValue > 0
        ? `${cardioGoalValue} ${cardioGoalUnit}`
        : getTranslation("workoutNoPR");

    const cardioInputHtml =
      cardioGoalValue > 0
        ? `
                    <div class="mt-6 bg-gray-800 p-4 rounded-xl shadow-lg">
                        <h3 class="text-xl font-semibold mb-2 text-orange-500">${getTranslation(
                          "workoutCardio"
                        )}</h3>
                        <p class="text-gray-400 mb-4">${getTranslation(
                          "workoutCardioGoal"
                        )} ${cardioGoalText}</p>
                        <input type="number" id="cardio-input" placeholder="${getTranslation(
                          "workoutCardioInputPlaceholder"
                        )}" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                `
        : "";

    appContainer.innerHTML = `
                    <div class="p-4 w-full max-w-4xl mx-auto">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold text-orange-500">${getTranslation(
                              "workoutOfTheDay"
                            )} ${appState.selectedWorkout}</h1>
                            <div class="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg shadow-inner">
                                <span class="text-xs text-gray-400">${getTranslation(
                                  "dashboardScore"
                                )}</span>
                                <span class="text-lg font-bold text-yellow-400">${
                                  appState.score
                                }</span>
                            </div>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-xl shadow-lg mb-6 flex items-center space-x-4">
                            ${icons.Target}
                            <div>
                                <h2 class="text-xl font-semibold mb-1">${getTranslation(
                                  "workoutYourGoal"
                                )}</h2>
                                <p class="text-gray-400 text-sm">${
                                  appState.onboardingData[0] ||
                                  getTranslation("workoutNoPR")
                                }</p>
                            </div>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                            <h2 class="text-xl font-semibold mb-4">${getTranslation(
                              "workoutExercises"
                            )}</h2>
                            <div class="space-y-4">${exercisesHtml}</div>
                        </div>
                        ${cardioInputHtml}
                         <!-- Novo bloco do temporizador -->
                        <div class="mt-6 bg-gray-800 p-4 rounded-xl shadow-lg">
                            <h3 class="text-xl font-semibold mb-2 text-orange-500 flex items-center space-x-2">
                                ${icons.Clock}
                                <span>${getTranslation("timerTitle")}</span>
                            </h3>
                            <div class="flex items-center space-x-2 mb-4">
                                <input type="number" id="timer-input" placeholder="${getTranslation(
                                  "timerPlaceholder"
                                )}" class="w-24 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-center" />
                                <button id="start-timer-btn" class="flex-1 p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">${getTranslation(
                                  "timerStart"
                                )}</button>
                                <button id="restart-timer-btn" class="flex-1 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">${getTranslation(
                                  "timerRestart"
                                )}</button>
                            </div>
                            <div class="text-center text-5xl font-mono" id="timer-display">
                                ${formatTime(appState.timer.secondsLeft)}
                            </div>
                        </div>
                        <div class="fixed bottom-20 left-1/2 -translate-x-1/2 flex space-x-4">
                            <button id="finish-workout-btn" class="flex items-center space-x-2 p-4 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-200">
                                ${icons.Dumbbell}
                                <span class="text-lg font-semibold">${getTranslation(
                                  "workoutFinish"
                                )}</span>
                            </button>
                            <button id="change-workout-btn" class="flex items-center space-x-2 p-4 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-500 transition-colors duration-200">
                                ${icons.ArrowLeft}
                                <span class="text-lg font-semibold">${getTranslation(
                                  "workoutChange"
                                )}</span>
                            </button>
                        </div>
                    </div>
                `;
    document
      .getElementById("finish-workout-btn")
      .addEventListener("click", handleFinishWorkout);
    document
      .getElementById("change-workout-btn")
      .addEventListener("click", () => {
        appState.selectedWorkout = null;
        renderApp();
      });
    document
      .getElementById("start-timer-btn")
      .addEventListener("click", startTimer);
    document
      .getElementById("restart-timer-btn")
      .addEventListener("click", restartTimer);
    renderTimer();
  }
  renderNavBar();
}

// Funções para renderizar as novas telas
function renderPRs() {
  const prs = Object.entries(appState.prData);
  let prsHtml = "";

  if (prs.length === 0) {
    prsHtml = `<p class="text-gray-400 text-center">${getTranslation(
      "prsNoPRs"
    )}</p>`;
  } else {
    prsHtml = prs
      .map(
        ([exerciseName, pr]) => `
                    <div class="bg-gray-800 p-4 rounded-xl flex items-center space-x-4 shadow-lg border border-orange-500">
                        ${icons.Medal}
                        <div>
                            <h3 class="text-lg font-semibold text-orange-400">${exerciseName}</h3>
                            <p class="text-sm text-gray-300">
                                **${getTranslation("prsWeight")}** ${
          pr.weight
        }kg | **${getTranslation("prsReps")}** ${pr.reps} | **${getTranslation(
          "prsDate"
        )}** ${pr.date}
                            </p>
                        </div>
                    </div>
                `
      )
      .join("");
  }

  appContainer.innerHTML = `
                <div class="p-4 w-full max-w-lg mx-auto space-y-6">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "prsTitle"
                    )}</h1>
                    <div class="space-y-4">
                        ${prsHtml}
                    </div>
                </div>
            `;
  renderNavBar();
}

function renderCreateWorkout() {
  let exercisesHtml = appState.newWorkoutExercises
    .map(
      (exercise, index) => `
                <div class="bg-gray-900 p-4 rounded-xl shadow-inner border border-gray-700 space-y-2 relative">
                    <button class="absolute top-2 right-2 text-gray-500 hover:text-red-500" onclick="removeExercise(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
                    </button>
                    <h3 class="text-lg font-semibold text-orange-400">${
                      getTranslation("createWorkoutAddExercise").split(" ")[0]
                    } ${index + 1}</h3>
                    <input type="text" placeholder="${getTranslation(
                      "createWorkoutExerciseNamePlaceholder"
                    )}" value="${
        exercise.name || ""
      }" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 exercise-name" data-index="${index}" />
                    <div class="flex space-x-2">
                        <input type="number" placeholder="${getTranslation(
                          "createWorkoutExerciseSetsPlaceholder"
                        )}" value="${
        exercise.sets || ""
      }" class="w-1/2 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 exercise-sets" data-index="${index}" />
                        <input type="text" placeholder="${getTranslation(
                          "createWorkoutExerciseRepsPlaceholder"
                        )}" value="${
        exercise.reps || ""
      }" class="w-1/2 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 exercise-reps" data-index="${index}" />
                    </div>
                    <textarea placeholder="${getTranslation(
                      "createWorkoutExerciseNotesPlaceholder"
                    )}" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 h-20 resize-none exercise-notes" data-index="${index}">${
        exercise.notes || ""
      }</textarea>
                </div>
            `
    )
    .join("");

  appContainer.innerHTML = `
                <div class="p-4 w-full max-w-lg mx-auto space-y-6">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "createWorkoutTitle"
                    )}</h1>
                    <form id="create-workout-form" class="space-y-4">
                        <input type="text" id="workout-name" placeholder="${getTranslation(
                          "createWorkoutNamePlaceholder"
                        )}" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                        <div id="exercises-container" class="space-y-4">
                            ${exercisesHtml}
                        </div>
                        <button type="button" id="add-exercise-btn" class="w-full p-3 font-semibold text-lg bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                            ${getTranslation("createWorkoutAddExercise")}
                        </button>
                        <button type="submit" class="w-full p-3 font-semibold text-lg bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
                            ${getTranslation("createWorkoutSave")}
                        </button>
                    </form>
                </div>
            `;
  document
    .getElementById("add-exercise-btn")
    .addEventListener("click", addExercise);
  document
    .getElementById("create-workout-form")
    .addEventListener("submit", handleCreateWorkout);

  // Adicionar event listeners para os inputs dinâmicos
  appContainer
    .querySelectorAll(
      ".exercise-name, .exercise-sets, .exercise-reps, .exercise-notes"
    )
    .forEach((input) => {
      input.addEventListener("input", (e) => {
        const index = parseInt(e.target.dataset.index, 10);
        const field = e.target.className
          .split(" ")
          .find((cls) => cls.startsWith("exercise-"))
          .replace("exercise-", "");
        appState.newWorkoutExercises[index][field] = e.target.value;
      });
    });

  renderNavBar();
}

// Funções para gerenciar o formulário de criação de treino
function addExercise() {
  appState.newWorkoutExercises.push({
    name: "",
    sets: "",
    reps: "",
    notes: "",
  });
  renderCreateWorkout();
}

window.removeExercise = function (index) {
  appState.newWorkoutExercises.splice(index, 1);
  renderCreateWorkout();
};

function renderGoals() {
  const cardioGoalValue = appState.goals.cardio.value;
  const cardioGoalUnit = appState.goals.cardio.unit;
  appContainer.innerHTML = `
                <div class="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "goalsTitle"
                    )}</h1>
                    <div class="bg-gray-700 p-4 rounded-xl shadow-inner">
                        <h2 class="text-xl font-semibold mb-2">${getTranslation(
                          "goalsCardioTitle"
                        )}</h2>
                        <p class="text-gray-400">${getTranslation(
                          "goalsCardioCurrent"
                        )} <span class="font-bold text-orange-400">${cardioGoalValue} ${
    cardioGoalUnit === "hours"
      ? getTranslation("goalsCardioUnitHours")
      : getTranslation("goalsCardioUnitMinutes")
  }</span></p>
                    </div>
                    <form id="set-goal-form" class="space-y-4">
                        <label for="cardio-goal" class="block text-gray-300">${getTranslation(
                          "goalsSetNew"
                        )}</label>
                        <div class="flex items-center space-x-2">
                            <input type="number" id="cardio-goal" value="${cardioGoalValue}" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required>
                            <select id="cardio-unit" class="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option value="minutes" ${
                                  cardioGoalUnit === "minutes" ? "selected" : ""
                                }>${getTranslation(
    "goalsCardioUnitMinutes"
  )}</option>
                                <option value="hours" ${
                                  cardioGoalUnit === "hours" ? "selected" : ""
                                }>${getTranslation(
    "goalsCardioUnitHours"
  )}</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full p-3 font-semibold text-lg bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
                            ${getTranslation("goalsSave")}
                        </button>
                    </form>
                </div>
            `;

  document
    .getElementById("set-goal-form")
    .addEventListener("submit", handleSetGoal);
  renderNavBar();
}

function renderAchievements() {
  const unlockedAchievements = Object.values(appState.achievements).filter(
    (a) => a.unlocked
  );
  const lockedAchievements = Object.values(appState.achievements).filter(
    (a) => !a.unlocked
  );

  // Traduz os nomes e descrições das conquistas
  const translatedAchievements = (achievements) => {
    return achievements.map((a) => ({
      ...a,
      name: getTranslation("achievementName_" + a.name.replace(/\s/g, "")),
      description: getTranslation(
        "achievementDescription_" + a.name.replace(/\s/g, "")
      ),
    }));
  };

  const translatedUnlocked = translatedAchievements(unlockedAchievements);
  const translatedLocked = translatedAchievements(lockedAchievements);

  const unlockedHtml = translatedUnlocked
    .map(
      (a) => `
                <div class="bg-gray-700 p-4 rounded-xl flex items-center space-x-4 border border-green-500">
                    <span class="text-3xl">${a.icon}</span>
                    <div>
                        <h3 class="text-lg font-semibold text-green-400">${a.name}</h3>
                        <p class="text-sm text-gray-300">${a.description}</p>
                    </div>
                </div>
            `
    )
    .join("");

  const lockedHtml = translatedLocked
    .map(
      (a) => `
                <div class="bg-gray-800 p-4 rounded-xl flex items-center space-x-4 opacity-50">
                    <span class="text-3xl">${icons.Trophy}</span>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-500">${
                          a.name
                        }</h3>
                        <p class="text-sm text-gray-600">${getTranslation(
                          "achievementsLockedStatus"
                        )}</p>
                    </div>
                </div>
            `
    )
    .join("");

  appContainer.innerHTML = `
                <div class="p-4 w-full max-w-lg mx-auto space-y-6">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "achievementsTitle"
                    )}</h1>
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-green-400">${getTranslation(
                          "achievementsUnlocked"
                        )}</h2>
                        ${
                          translatedUnlocked.length > 0
                            ? unlockedHtml
                            : `<p class="text-gray-400 text-center">${getTranslation(
                                "achievementsNoUnlocked"
                              )}</p>`
                        }
                    </div>
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-gray-500">${getTranslation(
                          "achievementsLocked"
                        )}</h2>
                        ${
                          translatedLocked.length > 0
                            ? lockedHtml
                            : `<p class="text-gray-400 text-center">${getTranslation(
                                "achievementsNoLocked"
                              )}</p>`
                        }
                    </div>
                </div>
            `;
  renderNavBar();
}

function renderProgress() {
  // Obtém o histórico de treinos do localStorage
  const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

  // Verifica se há dados de treino para exibir
  if (storedWorkouts.length === 0) {
    appContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center min-h-screen p-4">
                        <h2 class="text-2xl font-bold text-orange-500">${getTranslation(
                          "progressTitle"
                        )}</h2>
                        <p class="mt-4 text-center text-gray-400">${getTranslation(
                          "progressNoData"
                        )}</p>
                    </div>
                `;
    renderNavBar();
    return;
  }

  // Agrupa os treinos por data para criar os dados do gráfico
  const workoutCounts = storedWorkouts.reduce((acc, workout) => {
    const date = new Date(workout.date).toLocaleDateString(
      appState.language === "en" ? "en-US" : "pt-BR"
    );
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(workoutCounts);
  const data = Object.values(workoutCounts);

  appContainer.innerHTML = `
                <div class="p-4 w-full max-w-xl mx-auto space-y-6">
                    <h1 class="text-3xl font-bold text-center text-orange-500">${getTranslation(
                      "progressTitle"
                    )}</h1>
                    <div class="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h2 class="text-xl font-semibold mb-4">${getTranslation(
                          "progressWorkoutCount"
                        )}</h2>
                        <div class="relative w-full h-80">
                            <canvas id="progress-chart"></canvas>
                        </div>
                    </div>
                </div>
            `;
  renderNavBar();

  // Renderiza o gráfico usando o Chart.js
  const ctx = document.getElementById("progress-chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: getTranslation("progressWorkoutCount"),
          data: data,
          backgroundColor: "rgba(251, 146, 60, 0.6)", // Cor laranja
          borderColor: "rgba(251, 146, 60, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#A0A0A0",
            stepSize: 1,
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        x: {
          ticks: {
            color: "#A0A0A0",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  });
}

function renderProfile() {
  appContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
                    <h2 class="text-2xl font-bold text-orange-500 mb-6">${getTranslation(
                      "profileTitle"
                    )}</h2>
                    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
                        <p class="text-lg font-semibold mb-2">${getTranslation(
                          "profileUser"
                        )} ${appState.user.email.split("@")[0]}</p>
                        <p class="text-sm text-gray-400 mb-4">${getTranslation(
                          "profileEmail"
                        )} ${appState.user.email}</p>
                        <button id="logout-btn" class="w-full p-3 font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                            ${getTranslation("profileLogout")}
                        </button>
                    </div>
                </div>
            `;
  document.getElementById("logout-btn").addEventListener("click", handleLogout);
  renderNavBar();
}

// Renderiza a barra de navegação e gerencia os cliques
function renderNavBar() {
  navBar.innerHTML = `
                <button data-screen="dashboard" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "dashboard"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.Home}
                    <span class="text-xs">${getTranslation("Home")}</span>
                </button>
                <button data-screen="goals" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "goals"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.Target}
                    <span class="text-xs">${getTranslation("goalsTitle")}</span>
                </button>
                <button data-screen="prs" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "prs"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.Medal}
                    <span class="text-xs">${
                      getTranslation("prsTitle").split(" ")[0]
                    }</span>
                </button>
                <button data-screen="achievements" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "achievements"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.Award}
                    <span class="text-xs">${getTranslation(
                      "achievementsTitle"
                    )}</span>
                </button>
                <button data-screen="progress" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "progress"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.BarChart2}
                    <span class="text-xs">${getTranslation(
                      "progressTitle"
                    )}</span>
                </button>
                <button data-screen="profile" class="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                  appState.screen === "profile"
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }">
                    ${icons.User}
                    <span class="text-xs">${getTranslation(
                      "profileTitle"
                    )}</span>
                </button>
            `;
  navBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const screenName = e.currentTarget.getAttribute("data-screen");
      appState.screen = screenName;
      renderApp();
    });
  });
}

// Manipuladores de eventos
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  appState.formErrors = {}; // Limpa os erros anteriores

  if (!email) {
    appState.formErrors.email = getTranslation("messageErrorEmail");
  }
  if (!password) {
    appState.formErrors.password = getTranslation("messageErrorPassword");
  }

  if (Object.keys(appState.formErrors).length > 0) {
    renderApp();
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email }));
  const storedOnboardingData = localStorage.getItem("onboardingData");
  appState.user = { email };
  if (storedOnboardingData) {
    appState.onboardingData = JSON.parse(storedOnboardingData);
    appState.screen = "dashboard";
  } else {
    appState.screen = "onboarding";
  }
  renderApp();
}

function handleSignup(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  appState.formErrors = {}; // Limpa os erros anteriores

  if (!email) {
    appState.formErrors.email = getTranslation("messageErrorEmail");
  }
  if (!password) {
    appState.formErrors.password = getTranslation("messageErrorPassword");
  }

  if (Object.keys(appState.formErrors).length > 0) {
    renderApp();
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email }));
  appState.user = { email };
  appState.screen = "onboarding";
  // Inicializa o placar, metas e conquistas para o novo usuário
  appState.score = 0;
  appState.goals = { cardio: { value: 0, unit: "minutes" } };
  appState.achievements = { ...allAchievements }; // Reseta conquistas
  localStorage.setItem("score", 0);
  localStorage.setItem("goals", JSON.stringify(appState.goals));
  localStorage.setItem("achievements", JSON.stringify(appState.achievements));
  renderApp();
}

function handleLogout() {
  localStorage.clear();
  appState.user = null;
  appState.onboardingData = {};
  appState.screen = "login";
  renderApp();
}

function handlePrevStep() {
  if (appState.onboardingStep > 0) {
    appState.onboardingStep--;
    renderOnboarding();
  }
}

function handleNextStep() {
  const questions = [
    {
      step: 0,
      title: getTranslation("onboardingGoal"),
      options: translations[appState.language].onboardingOptionsGoal,
    },
    {
      step: 1,
      title: getTranslation("onboardingExperience"),
      options: translations[appState.language].onboardingOptionsExperience,
    },
    {
      step: 2,
      title: getTranslation("onboardingDays"),
      options: translations[appState.language].onboardingOptionsDays,
    },
    {
      step: 3,
      title: getTranslation("onboardingLocation"),
      options: translations[appState.language].onboardingOptionsLocation,
    },
    {
      step: 4,
      title: getTranslation("onboardingInjury"),
      type: "text",
      placeholder: getTranslation("onboardingInjuryPlaceholder"),
    },
  ];
  const currentQuestion = questions[appState.onboardingStep];
  if (!appState.onboardingData[currentQuestion.step]) {
    showMessage("messageErrorFillQuestion", "error");
    return;
  }

  if (appState.onboardingStep < questions.length - 1) {
    appState.onboardingStep++;
    renderOnboarding();
  } else {
    localStorage.setItem(
      "onboardingData",
      JSON.stringify(appState.onboardingData)
    );
    appState.screen = "dashboard";
    renderApp();
  }
}

function handleSetGoal(e) {
  e.preventDefault();
  const cardioGoalValue = parseInt(
    document.getElementById("cardio-goal").value,
    10
  );
  const cardioGoalUnit = document.getElementById("cardio-unit").value;

  if (cardioGoalValue > 0) {
    appState.goals.cardio = { value: cardioGoalValue, unit: cardioGoalUnit };
    localStorage.setItem("goals", JSON.stringify(appState.goals));
    showMessage("messageSuccessCardioGoalSaved");
    renderApp();
  } else {
    showMessage("messageErrorInvalidCardioGoal", "error");
  }
}

function handleCreateWorkout(e) {
  e.preventDefault();
  const workoutName = document.getElementById("workout-name").value.trim();
  if (!workoutName) {
    showMessage("messageErrorWorkoutName", "error");
    return;
  }
  if (appState.newWorkoutExercises.length === 0) {
    showMessage("messageErrorAddExercise", "error");
    return;
  }

  // Filtra exercícios vazios
  const newExercises = appState.newWorkoutExercises.filter(
    (ex) =>
      ex.name.trim() !== "" && ex.sets.trim() !== "" && ex.reps.trim() !== ""
  );
  if (newExercises.length === 0) {
    showMessage("messageErrorFillDetails", "error");
    return;
  }

  workouts[workoutName] = newExercises.map((ex) => ({
    name: ex.name,
    sets: ex.sets,
    reps: ex.reps,
    notes: ex.notes,
  }));

  saveWorkouts();
  appState.newWorkoutExercises = []; // Reseta o array temporário
  appState.screen = "dashboard";
  showMessage("messageSuccessWorkoutCreated", "success", { workoutName });
  renderApp();
}

function handleFinishWorkout() {
  if (!appState.selectedWorkout) {
    showMessage("messageErrorSelectWorkout", "error");
    return;
  }

  const selectedWorkoutData = workouts[appState.selectedWorkout];

  // 1. Lógica para o sistema de PRs
  selectedWorkoutData.forEach((exercise, index) => {
    // IDs dos campos de entrada
    const weightInputId = `weight-${exercise.name.replace(
      /\s/g,
      "-"
    )}-${index}`;
    const repsInputId = `reps-${exercise.name.replace(/\s/g, "-")}-${index}`;
    const weightInput = document.getElementById(weightInputId);
    const repsInput = document.getElementById(repsInputId);

    // Converte os valores para números
    const newWeight = parseInt(weightInput.value, 10);
    const newReps = parseInt(repsInput.value, 10);

    // Verifica se os valores são válidos
    if (!isNaN(newWeight) && !isNaN(newReps) && newWeight > 0 && newReps > 0) {
      const currentPR = appState.prData[exercise.name];

      // Compara o novo registro com o PR atual
      if (
        !currentPR ||
        newWeight > currentPR.weight ||
        (newWeight === currentPR.weight && newReps > currentPR.reps)
      ) {
        appState.prData[exercise.name] = {
          weight: newWeight,
          reps: newReps,
          date: new Date().toLocaleDateString("pt-BR"),
        };
        showMessage("messageSuccessNewPR", "success", {
          exerciseName: exercise.name,
          weight: newWeight,
          reps: newReps,
        });
      }
    }
  });

  // Salva os PRs atualizados no localStorage
  localStorage.setItem("prData", JSON.stringify(appState.prData));

  // 2. Lógica para o sistema de metas e placar
  const cardioGoal = appState.goals.cardio;
  const cardioDoneInput = document.getElementById("cardio-input");
  const cardioDone = cardioDoneInput ? parseInt(cardioDoneInput.value, 10) : 0;

  if (cardioGoal && cardioGoal.value > 0) {
    let goalInMinutes = cardioGoal.value;
    if (cardioGoal.unit === "hours") {
      goalInMinutes *= 60;
    }

    if (cardioDone >= goalInMinutes) {
      appState.score += 10;
      showMessage("messageSuccessCardioGoalReached", "success", {
        score: appState.score,
      });
      // Verifica a conquista "Mestre do Cardio"
      if (!appState.achievements.cardioMaster.unlocked) {
        appState.achievements.cardioMaster.unlocked = true;
        showMessage("messageSuccessAchievementUnlocked", "success", {
          achievementName: getTranslation("Mestre do Cardio"),
        });
      }
    } else {
      appState.score -= 5;
      showMessage("messageErrorCardioGoalMissed", "error", {
        score: appState.score,
      });
    }
    localStorage.setItem("score", appState.score);
  }

  // 3. Lógica para o sistema de conquistas
  // Conquista: Primeiro Treino
  if (!appState.achievements.firstWorkout.unlocked) {
    appState.achievements.firstWorkout.unlocked = true;
    showMessage("messageSuccessAchievementUnlocked", "success", {
      achievementName: getTranslation("Primeiro Passo"),
    });
  }

  // Conquista: Full Body
  if (
    appState.selectedWorkout === "Full Body" &&
    !appState.achievements.fullBody.unlocked
  ) {
    appState.achievements.fullBody.unlocked = true;
    showMessage("messageSuccessAchievementUnlocked", "success", {
      achievementName: getTranslation("Corpo Todo"),
    });
  }

  // Lógica de finalização de treino (existente)
  const date = new Date().toISOString().slice(0, 10);
  const newWorkoutEntry = {
    date: date,
    name: appState.selectedWorkout,
    exercises: workouts[appState.selectedWorkout],
  };

  const newProgressData = {
    totalWorkouts: appState.progressData.totalWorkouts + 1,
    pr: "Supino Inclinado: 25kg (novo)",
    streak: appState.progressData.streak + 1,
  };

  // Conquista: 5 treinos
  if (
    newProgressData.totalWorkouts >= 5 &&
    !appState.achievements.fiveWorkouts.unlocked
  ) {
    appState.achievements.fiveWorkouts.unlocked = true;
    showMessage("messageSuccessAchievementUnlocked", "success", {
      achievementName: getTranslation("Força de Vontade"),
    });
  }

  localStorage.setItem("progressData", JSON.stringify(newProgressData));
  appState.progressData = newProgressData;
  localStorage.setItem("achievements", JSON.stringify(appState.achievements));

  // Salva o treino no histórico para o gráfico
  const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
  storedWorkouts.push(newWorkoutEntry);
  localStorage.setItem("workouts", JSON.stringify(storedWorkouts));

  appState.selectedWorkout = null;
  renderApp();
}

// Função de renderização principal que decide qual tela exibir
function renderApp() {
  switch (appState.screen) {
    case "login":
      renderLogin();
      break;
    case "signup":
      renderSignup();
      break;
    case "onboarding":
      renderOnboarding();
      break;
    case "dashboard":
      renderDashboard();
      break;
    case "goals":
      renderGoals();
      break;
    case "prs":
      renderPRs();
      break;
    case "createWorkout":
      renderCreateWorkout();
      break;
    case "achievements":
      renderAchievements();
      break;
    case "progress":
      renderProgress();
      break;
    case "profile":
      renderProfile();
      break;
    default:
      renderLogin();
  }
}

// Inicialização da aplicação
document.addEventListener("DOMContentLoaded", () => {
  const storedUser = localStorage.getItem("user");
  const storedOnboardingData = localStorage.getItem("onboardingData");
  const storedProgressData = localStorage.getItem("progressData");
  const storedGoals = localStorage.getItem("goals");
  const storedScore = localStorage.getItem("score");
  const storedAchievements = localStorage.getItem("achievements");
  const storedWorkouts = localStorage.getItem("workouts");
  const storedPRs = localStorage.getItem("prData");

  // Carrega os treinos personalizados
  loadWorkouts();

  if (storedUser) {
    appState.user = JSON.parse(storedUser);
    if (storedOnboardingData) {
      appState.onboardingData = JSON.parse(storedOnboardingData);
      appState.screen = "dashboard";
    } else {
      appState.screen = "onboarding";
    }
  } else {
    appState.screen = "login";
  }
  if (storedProgressData) {
    appState.progressData = JSON.parse(storedProgressData);
  }
  if (storedGoals) {
    appState.goals = JSON.parse(storedGoals);
  }
  if (storedScore) {
    appState.score = parseInt(storedScore, 10);
  }
  if (storedAchievements) {
    const loadedAchievements = JSON.parse(storedAchievements);
    // Mescla os dados salvos com a estrutura completa
    appState.achievements = { ...allAchievements, ...loadedAchievements };
  }
  if (storedWorkouts) {
    appState.workoutsHistory = JSON.parse(storedWorkouts);
  }
  if (storedPRs) {
    appState.prData = JSON.parse(storedPRs);
  }

  // Define o texto inicial do botão de idioma
  langToggleBtn.textContent = appState.language.toUpperCase();

  renderApp();
});
