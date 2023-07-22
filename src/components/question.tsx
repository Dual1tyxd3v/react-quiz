import { QuestionType } from '../types/types';
import Button from './button';
import Options from './options';
import Timer from './timer';

type QuestionProps = {
  question: QuestionType;
  answer: null | number;
};

export default function Question({
  question,
  answer,
}: QuestionProps) {
  return (
    <>
      <div>
        <h4>{question.question}</h4>
        <Options answer={answer} />
      </div>
      <footer>
        <Timer />
        {answer !== null && (
          <Button />
        )}
      </footer>
    </>
  );
}
