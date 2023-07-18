import { ActionType } from '../types/types';

type StartScreenProps = {
  numQuestions: number;
  dispatch: React.Dispatch<ActionType>;
};

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: 'start' })}>
        Let&apos;s start
      </button>
    </div>
  );
}
