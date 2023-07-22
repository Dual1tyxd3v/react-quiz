import { ActionType } from '../types/types';

type FinishScreenProps = {
  points: number;
  maxPoints: number;
  highscore: number;
  dispatch: React.Dispatch<ActionType>;
};

export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}: FinishScreenProps) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> points out of {maxPoints} (
        {Math.floor(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Restart Quiz
      </button>
    </>
  );
}
