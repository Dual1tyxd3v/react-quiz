import { ActionType, QuestionType } from '../types/types';
import Options from './options';

type QuestionProps = {
  question: QuestionType;
  dispatch: React.Dispatch<ActionType>;
  answer: null | number;
};

export default function Question({
  question,
  dispatch,
  answer,
}: QuestionProps) {
  return (
    <>
      <div>
        <h4>{question.question}</h4>
        <Options answer={answer} dispatch={dispatch} question={question} />
      </div>
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      )}
    </>
  );
}
