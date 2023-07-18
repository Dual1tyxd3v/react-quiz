import { QuestionType } from '../types/types';

type OptionsProps = {
  question: QuestionType;
};

export default function Options({ question }: OptionsProps) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}
