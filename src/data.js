export const hero = {
  headline: 'Escape rooms, interview battles, and dashboards—guided by SAGE.',
  subhead: 'Build skills the Big Four way with personalized missions, streaks, and realtime feedback.',
  stats: [
    { label: 'Daily streak', value: '12 days', accent: true },
    { label: 'Skill rating', value: 'Intermediate' },
    { label: 'SAGE trust', value: '92% fit' }
  ]
};

export const featuredChallenges = [
  {
    id: 'sql-escape',
    title: 'Escape Room: SQL Heist',
    category: 'SQL',
    difficulty: 'Intermediate',
    time: '25 min',
    summary: 'Trace rogue queries, fix indices, and unlock the vault.',
    badge: 'Popular'
  },
  {
    id: 'py-debug',
    title: 'Interactive Debug Lab',
    category: 'Python',
    difficulty: 'Beginner',
    time: '10 min',
    summary: 'Patch failing unit tests in real time with SAGE hints.',
    badge: 'New'
  },
  {
    id: 'ml-models',
    title: 'Model Selection Sprint',
    category: 'ML',
    difficulty: 'Advanced',
    time: '30 min',
    summary: 'Compare models, optimize hyperparameters, and ship.',
    badge: 'Ranked'
  }
];

export const quickActions = [
  { label: 'Daily goal', value: 'Complete 1 mission', status: 'On track' },
  { label: 'Interview mode', value: 'Next: Case Round', status: 'Scheduled' },
  { label: 'Portfolio', value: 'Add 2 artifacts', status: 'Pending' }
];

export const skillTree = [
  { label: 'SQL Mastery', progress: 76, description: 'CTEs, window functions, optimization' },
  { label: 'Python Automation', progress: 64, description: 'Pipelines, notebooks, debugging' },
  { label: 'Machine Learning', progress: 52, description: 'Feature stores, evaluation, ops' },
  { label: 'Visualization', progress: 71, description: 'Power BI dashboards, storytelling' }
];

export const escapeRooms = [
  { title: 'Data Vault Breakout', mode: 'Solo/Team', difficulty: '3/5', eta: '30 min' },
  { title: 'ETL Labyrinth', mode: 'Team', difficulty: '4/5', eta: '45 min' },
  { title: 'Anomaly Summit', mode: 'Solo', difficulty: '2/5', eta: '20 min' }
];

export const interviewTracks = [
  { title: 'Strategy & Advisory', next: 'Behavioral warm-up', status: 'Ready' },
  { title: 'Data Engineering', next: 'System design drill', status: 'Queued' },
  { title: 'Analytics', next: 'Case + SQL mix', status: 'Active' }
];

export const marketSignals = [
  { label: 'Data Scientist roles', trend: '+12% MoM', tone: 'positive' },
  { label: 'AI Automation demand', trend: '+20% MoM', tone: 'positive' },
  { label: 'Consulting hiring', trend: '-4% MoM', tone: 'warning' }
];

export const achievements = [
  { title: 'Escape Artist', detail: 'Complete 3 escape rooms', icon: '🧭' },
  { title: 'Streak Guardian', detail: 'Maintain 14-day streak', icon: '🔥' },
  { title: 'Clean Data Champ', detail: 'Perfect a dataset in 2 attempts', icon: '🧹' }
];

export const puzzleLab = [
  { title: 'Feature Drift Detector', category: 'ML', duration: '12 min' },
  { title: 'Window Function Relay', category: 'SQL', duration: '8 min' },
  { title: 'Chart Rescue', category: 'Viz', duration: '6 min' }
];

export const flashcards = [
  { front: 'What is a CTE?', back: 'A Common Table Expression that improves readability.' },
  { front: 'ROC-AUC meaning?', back: 'Probability the classifier ranks a positive higher than a negative.' },
  { front: 'Z-score outlier rule?', back: 'Commonly |z| > 3 indicates an outlier.' }
];

export const streaks = { current: 12, best: 34 };
