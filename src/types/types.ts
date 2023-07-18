export type StateType = {
  questions: QuestionType[];
  status: string;
  index: number;
  answer: null | number;
  points: number;
};

export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type ActionType = {
  type: string;
  payload?: string | QuestionType[] | number;
};
