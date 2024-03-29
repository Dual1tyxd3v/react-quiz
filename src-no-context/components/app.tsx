import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './main';
import { initState, reducer } from '../store/reducer';
import Error from './Error';
import Loader from './Loader';
import { API_URL } from '../const';
import { QuestionType } from '../types/types';
import StartScreen from './start-screen';
import Question from './question';
import Progress from './progress';
import FinishScreen from './finish-screen';

export default function App() {
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
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen dispatch={dispatch} numQuestions={questions.length} />
        )}
        {status === 'active' && (
          <>
            <Progress
              points={points}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
              maxPoints={maxPoints}
            />
            <Question
              dispatch={dispatch}
              answer={answer}
              question={currentQuestion}
              index={index}
              numQuestions={numQuestions}
            />
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            highscore={highscore}
            maxPoints={maxPoints}
          />
        )}
      </Main>
    </div>
  );
}
