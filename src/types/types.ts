export type StateType = {
  questions: QuestionsType[];
  status: string;
};

export type QuestionsType = {
  question: string;
  options: string[];
  correctOption: number;
  points: string;
};

export type ActionType = {
  type: string;
  payload?: string | QuestionsType[];
};
