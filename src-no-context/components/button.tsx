import { ActionType } from '../types/types';

type ButtonProps = {
  dispatch: React.Dispatch<ActionType>;
  index: number;
  numQuestions: number;
};

export default function Button({ dispatch, index, numQuestions }: ButtonProps) {
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      Next
    </button>
  );
}
