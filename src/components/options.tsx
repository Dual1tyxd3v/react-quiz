import { useQuiz } from '../contexts/quiz-context';

type OptionsProps = {
  answer: null | number;
};

export default function Options({ answer }: OptionsProps) {
  const { currentQuestion: question, dispatch } = useQuiz();
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
