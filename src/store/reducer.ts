import { ActionType, QuestionType, StateType } from '../types/types';

export const initState = {
  questions: [],
  status: 'loading',
  index: 0
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
    default:
      return initState;
  }
};
