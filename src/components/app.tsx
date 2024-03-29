import Header from './Header';
import Main from './main';
import Error from './Error';
import Loader from './Loader';
import StartScreen from './start-screen';
import Question from './question';
import Progress from './progress';
import FinishScreen from './finish-screen';
import { useQuiz } from '../contexts/quiz-context';

export default function App() {
  const {
    status,
    dispatch,
    questions,
    points,
    answer,
    index,
    numQuestions,
    maxPoints,
    highscore,
    currentQuestion,
  } = useQuiz();
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
            <Question answer={answer} question={currentQuestion} />
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
