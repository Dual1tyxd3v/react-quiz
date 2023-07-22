import { useEffect, useState } from 'react';
import { QUIZ_TIME } from '../const';
import { formatTime } from '../utils';
import { ActionType } from '../types/types';

type TimerProps = {
  dispatch: React.Dispatch<ActionType>;
}

export default function Timer({dispatch}: TimerProps) {
  const [time, setTime] = useState(QUIZ_TIME);
  const formattedTime = formatTime(time);

  if(time === 0) {
    dispatch({type: 'finish'});
  }

  useEffect(() => {
    const timer = setInterval(() => setTime(time - 1), 1000);

    return () => clearInterval(timer);
  }, [time]);
  return <div className="timer">{formattedTime}</div>;
}
