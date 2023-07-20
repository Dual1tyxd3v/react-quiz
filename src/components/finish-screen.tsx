type FinishScreenProps = {
  points: number;
  maxPoints: number;
  highscore: number;
};

export default function FinishScreen({
  points,
  maxPoints,
  highscore,
}: FinishScreenProps) {
  const percentage = points / maxPoints * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> points out of {maxPoints} ({Math.floor(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}
