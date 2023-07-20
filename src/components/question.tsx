import { ActionType, QuestionType } from '../types/types';
import Button from './button';
import Options from './options';

type QuestionProps = {
  question: QuestionType;
  dispatch: React.Dispatch<ActionType>;
  answer: null | number;
  index: number;
  numQuestions: number;
};

export default function Question({
  question,
  dispatch,
  answer,
  index,
  numQuestions,
}: QuestionProps) {
  return (
    <>
      <div>
        <h4>{question.question}</h4>
        <Options answer={answer} dispatch={dispatch} question={question} />
      </div>
      {answer !== null && (
        <Button dispatch={dispatch} index={index} numQuestions={numQuestions} />
      )}
    </>
  );
}
