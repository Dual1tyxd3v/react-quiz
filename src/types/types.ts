export type StateType = {
  questions: QuestionType[];
  status: string;
  index: number;
  answer: null | number;
  points: number;
  highscore: number;
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

export type QuizContextType = {
  points: number;
  dispatch: React.Dispatch<ActionType>;
  status: string;
  questions: QuestionType[];
  answer: null | number;
  index: number;
  numQuestions: number;
  maxPoints: number;
  highscore: number;
  currentQuestion: QuestionType;
};
