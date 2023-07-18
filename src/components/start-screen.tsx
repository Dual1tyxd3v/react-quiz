type StartScreenProps = {
  numQuestions: number;
}

export default function StartScreen({numQuestions}: StartScreenProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button>Let&apos;s start</button>
    </div>
  );
}
