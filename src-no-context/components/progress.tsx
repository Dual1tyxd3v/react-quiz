type ProgressProps = {
  points: number;
  numQuestions: number;
  index: number;
  answer: null | number;
  maxPoints: number;
}

export default function Progress({points, numQuestions, index, maxPoints, answer}: ProgressProps) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPoints} points</p>
    </div>
  );
}
