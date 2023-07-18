export type StateType = {
  questions: QuestionType[];
  status: string;
  index: number;
};

export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: string;
};

export type ActionType = {
  type: string;
  payload?: string | QuestionType[];
};
