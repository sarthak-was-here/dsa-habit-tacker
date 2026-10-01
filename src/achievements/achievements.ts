export type AchievementCategory =
  | "consistency"
  | "contest"
  | "topic"
  | "difficulty"
  | "time"
  | "progress"
  | "fun"
  | "secret";

export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AchievementCategory;

  // Whether this achievement should be hidden
  // until it is unlocked.
  hidden?: boolean;

  // XP awarded when unlocked.
  xpReward: number;
};

export const achievements: Achievement[] = [
  // =========================
  // CONSISTENCY
  // =========================

  {
    id: "first-day",
    name: "First Step",
    description: "Complete your first daily quest.",
    icon: "👣",
    category: "consistency",
    xpReward: 25,
  },

  {
    id: "three-day-streak",
    name: "Three Day Spark",
    description: "Maintain a 3-day streak.",
    icon: "✨",
    category: "consistency",
    xpReward: 50,
  },

  {
    id: "seven-day-streak",
    name: "Week Warrior",
    description: "Maintain a 7-day streak.",
    icon: "🔥",
    category: "consistency",
    xpReward: 100,
  },

  {
    id: "fourteen-day-streak",
    name: "Fortnight Fighter",
    description: "Maintain a 14-day streak.",
    icon: "⚔️",
    category: "consistency",
    xpReward: 200,
  },

  {
    id: "thirty-day-streak",
    name: "Monthly Machine",
    description: "Maintain a 30-day streak.",
    icon: "🗓️",
    category: "consistency",
    xpReward: 500,
  },

  {
    id: "ninety-day-streak",
    name: "Quarter Master",
    description: "Maintain a 90-day streak.",
    icon: "👑",
    category: "consistency",
    xpReward: 1000,
  },

  {
    id: "three-sixty-five-day-streak",
    name: "Year of Code",
    description: "Maintain a 365-day streak.",
    icon: "🏆",
    category: "consistency",
    xpReward: 5000,
  },

  // =========================
  // CONTESTS
  // =========================

  {
    id: "first-contest",
    name: "First Blood",
    description: "Complete your first coding contest.",
    icon: "🩸",
    category: "contest",
    xpReward: 100,
  },

  {
    id: "first-weekly",
    name: "Weekly Warrior",
    description: "Complete your first Weekly Contest.",
    icon: "⚔️",
    category: "contest",
    xpReward: 100,
  },

  {
    id: "first-biweekly",
    name: "Biweekly Initiate",
    description: "Complete your first Biweekly Contest.",
    icon: "🏹",
    category: "contest",
    xpReward: 100,
  },

  {
    id: "double-duty",
    name: "Double Duty",
    description: "Complete both a Weekly and Biweekly Contest.",
    icon: "🔥",
    category: "contest",
    xpReward: 200,
  },

  {
    id: "five-contests",
    name: "Contest Regular",
    description: "Complete 5 coding contests.",
    icon: "🏆",
    category: "contest",
    xpReward: 250,
  },

  {
    id: "twenty-five-contests",
    name: "Contest Veteran",
    description: "Complete 25 coding contests.",
    icon: "🎖️",
    category: "contest",
    xpReward: 500,
  },

  {
    id: "fifty-contests",
    name: "Contest Addict",
    description: "Complete 50 coding contests.",
    icon: "💀",
    category: "contest",
    xpReward: 1000,
  },

  // =========================
  // TOPICS
  // =========================

  {
    id: "first-array",
    name: "First Array",
    description: "Solve your first Array problem.",
    icon: "📦",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-string",
    name: "Wordsmith",
    description: "Solve your first String problem.",
    icon: "🔤",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-hash-table",
    name: "Hash Hunter",
    description: "Solve your first Hash Table problem.",
    icon: "#️⃣",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-linked-list",
    name: "Link Established",
    description: "Solve your first Linked List problem.",
    icon: "🔗",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-stack",
    name: "Stacked",
    description: "Solve your first Stack problem.",
    icon: "📚",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-queue",
    name: "Next in Line",
    description: "Solve your first Queue problem.",
    icon: "🚶",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-tree",
    name: "Into the Woods",
    description: "Solve your first Tree problem.",
    icon: "🌳",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-graph",
    name: "Graph Explorer",
    description: "Solve your first Graph problem.",
    icon: "🕸️",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-sorting",
    name: "Order Restored",
    description: "Solve your first Sorting problem.",
    icon: "🔀",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-binary-search",
    name: "Divide & Conquer",
    description: "Solve your first Binary Search problem.",
    icon: "🔍",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-dp",
    name: "DP Initiate",
    description: "Solve your first Dynamic Programming problem.",
    icon: "🧠",
    category: "topic",
    xpReward: 50,
  },

  {
    id: "first-greedy",
    name: "Greedy",
    description: "Solve your first Greedy problem.",
    icon: "💰",
    category: "topic",
    xpReward: 25,
  },

  {
    id: "first-backtracking",
    name: "Backtracker",
    description: "Solve your first Backtracking problem.",
    icon: "↩️",
    category: "topic",
    xpReward: 50,
  },

  // =========================
  // DIFFICULTY
  // =========================

  {
    id: "first-medium",
    name: "Stepping Up",
    description: "Solve your first Medium problem.",
    icon: "🟡",
    category: "difficulty",
    xpReward: 50,
  },

  {
    id: "first-hard",
    name: "Hard Mode",
    description: "Solve your first Hard problem.",
    icon: "🔴",
    category: "difficulty",
    xpReward: 100,
  },

  {
    id: "three-medium-streak",
    name: "Medium Momentum",
    description: "Solve 3 Medium problems consecutively.",
    icon: "🔥",
    category: "difficulty",
    xpReward: 150,
  },

  {
    id: "five-hard-streak",
    name: "Absolute Madness",
    description: "Solve 5 Hard problems consecutively.",
    icon: "💀",
    category: "difficulty",
    xpReward: 500,
  },

  // =========================
  // TIME
  // =========================

  {
    id: "early-bird",
    name: "Early Bird",
    description: "Start your daily quest before 8 AM.",
    icon: "🌅",
    category: "time",
    xpReward: 25,
  },

  {
    id: "night-owl",
    name: "Night Owl",
    description: "Start your daily quest after 10 PM.",
    icon: "🌙",
    category: "time",
    xpReward: 25,
  },

  {
    id: "midnight-coder",
    name: "Midnight Coder",
    description: "Start a quest after midnight.",
    icon: "🌃",
    category: "time",
    xpReward: 50,
  },

  {
    id: "last-minute",
    name: "Last Minute",
    description: "Complete your daily quest during the final hour.",
    icon: "⏰",
    category: "time",
    xpReward: 50,
  },

  {
    id: "eleven-fifty-nine",
    name: "11:59 Warrior",
    description: "Complete your quest during the final 5 minutes.",
    icon: "💀",
    category: "time",
    hidden: true,
    xpReward: 100,
  },

  // =========================
  // FUN
  // =========================

  {
    id: "comeback-kid",
    name: "Comeback Kid",
    description: "Start a new streak after missing 3 or more days.",
    icon: "🔄",
    category: "fun",
    xpReward: 100,
  },

  {
    id: "weekend-warrior",
    name: "Weekend Warrior",
    description: "Complete quests on both Saturday and Sunday.",
    icon: "⚔️",
    category: "fun",
    xpReward: 75,
  },

  {
    id: "tomorrow",
    name: "I'll Do It Tomorrow",
    description: "Miss a quest after previously completing one late at night.",
    icon: "😭",
    category: "fun",
    xpReward: 25,
  },

  // =========================
  // SECRET
  // =========================

  {
    id: "secret-one",
    name: "???",
    description: "Something is waiting for you...",
    icon: "❓",
    category: "secret",
    hidden: true,
    xpReward: 250,
  },
];