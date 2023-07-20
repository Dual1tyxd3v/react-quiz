import { ActionType, QuestionType, StateType } from '../types/types';

export const initState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload as QuestionType[],
        status: 'ready',
      };
    case 'error':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer': {
      const currQuestion = state.questions[state.index];
      return {
        ...state,
        answer: action.payload as number,
        points:
          currQuestion.correctOption === action.payload
            ? state.points + currQuestion.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, answer: null, index: state.index + 1 };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.highscore > state.points ? state.highscore : state.points,
      };
    case 'reset':
      return { ...initState, highscore: state.highscore, status: 'ready', questions: state.questions };
    default:
      return initState;
  }
};
