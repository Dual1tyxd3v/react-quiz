import { ActionType, QuestionsType, StateType } from '../types/types';

export const initState = {
  questions: [],
  status: 'loading',
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload as QuestionsType[],
        status: 'ready',
      };
    case 'error':
      return { ...state, status: 'error' };
    default:
      return initState;
  }
};
