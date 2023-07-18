import { QuestionType } from '../types/types';
import Options from './options';

type QuestionProps = {
  question: QuestionType;
}

export default function Question({question}: QuestionProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
