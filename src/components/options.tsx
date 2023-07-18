import { ActionType, QuestionType } from '../types/types';

type OptionsProps = {
  question: QuestionType;
  dispatch: React.Dispatch<ActionType>;
  answer: null | number;
};

export default function Options({ question, dispatch, answer }: OptionsProps) {
  return (
    <div className="options">
      {question.options.map((option, i) => {
        let additionalClass = '';
        if (answer !== null) {
          additionalClass = i === question.correctOption ? 'correct' : 'wrong';
        }
        return (
          <button
            onClick={() => dispatch({ type: 'newAnswer', payload: i })}
            className={`btn btn-option ${
              answer === i ? 'answer' : ''
            } ${additionalClass}`}
            key={option}
            disabled={answer !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
