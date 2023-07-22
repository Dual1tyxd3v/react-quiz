import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { API_URL } from '../const';
import { reducer, initState } from '../store/reducer';
import { QuestionType, QuizContextType } from '../types/types';

const QuizContext = createContext<null | QuizContextType>(null);

type QuizProviderProps = {
  children: ReactNode;
};

export default function QuizProvider({ children }: QuizProviderProps) {
  const [{ status, questions, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initState);
  const currentQuestion = questions[index];
  const numQuestions = questions.length;
  const maxPoints = questions.reduce((acc, ques) => acc + ques.points, 0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new TypeError('Could not find. Check your url');
        }
        return res.json();
      })
      .then((res) =>
        dispatch({ type: 'dataReceived', payload: res as QuestionType[] })
      )
      .catch((e) => dispatch({ type: 'error' }));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        points,
        dispatch,
        status,
        questions,
        answer,
        index,
        numQuestions,
        maxPoints,
        highscore,
        currentQuestion
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new TypeError('Use context in Provider!');
  }
  return context;
}
