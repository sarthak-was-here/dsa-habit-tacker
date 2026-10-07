export type Platform =
  | "leetcode"
  | "codeforces"
  | "codechef"
  | "manual";

export type ProblemDifficulty =
  | "EASY"
  | "MEDIUM"
  | "HARD";

export type ProblemSolvedEvent = {
  type: "PROBLEM_SOLVED";
  platform: Platform;
  problemId: string;
  problemName: string;
  difficulty: ProblemDifficulty;
  topics: string[];
  timestamp: string;
  externalId?: string;
};

export type ContestCompletedEvent = {
  type: "CONTEST_COMPLETED";
  platform: Platform;
  contestId: string;
  contestName: string;
  timestamp: string;
  externalId?: string;
};

export type CodeQuestEvent =
  | ProblemSolvedEvent
  | ContestCompletedEvent;