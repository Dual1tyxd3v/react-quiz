import { useEffect, useState } from 'react';
import { QUIZ_TIME } from '../const';
import { formatTime } from '../utils';
import { useQuiz } from '../contexts/quiz-context';

export default function Timer() {
  const [time, setTime] = useState(QUIZ_TIME);
  const formattedTime = formatTime(time);
  const { dispatch } = useQuiz();

  if (time === 0) {
    dispatch({ type: 'finish' });
  }

  useEffect(() => {
    const timer = setInterval(() => setTime(time - 1), 1000);

    return () => clearInterval(timer);
  }, [time]);
  return <div className="timer">{formattedTime}</div>;
}
