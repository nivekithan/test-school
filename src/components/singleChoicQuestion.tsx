import arrayShuffle from "array-shuffle";
import React, { useMemo, useState } from "react";
import { Question } from "./question";

export type SingleChoiceQuestionProps = {
  question: string;
  choices: string[];
  answer: number;
};

export const SingleChoiceQuestion = ({
  question,
  choices: actualChoices,
  answer: actualAnswer,
}: SingleChoiceQuestionProps) => {
  const [selectedRadio, setSelectedRadio] = useState<string | undefined>(
    undefined
  );

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>(
    undefined
  );

  const shuffledChoices = useMemo(() => {
    return arrayShuffle(actualChoices);
  }, []);

  const [showAnswer, setShowAnswer] = useState(false);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSelectedRadio(value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedRadio) {
      return;
    }

    const correctAnswer = actualChoices[actualAnswer].toLocaleLowerCase();
    const selectedAnswer = selectedRadio.toLocaleLowerCase();

    setIsCorrectAnswer(selectedAnswer === correctAnswer);
  };

  const onToggleAnswer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setShowAnswer((s) => !s);
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsCorrectAnswer(undefined);
    setSelectedRadio(undefined);
    setShowAnswer(false);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <form className="flex flex-col gap-y-5" onSubmit={onFormSubmit}>
        <div className="flex flex-col gap-y-3">
          <Question question={question} />
          <div className="flex flex-col gap-y-3">
            {
              // ArrayShuffle does not mutate the array
              shuffledChoices.map((value) => {
                return (
                  <label key={value} className="flex gap-x-3 items-center">
                    <input
                      type="checkbox"
                      name={question}
                      value={value}
                      checked={selectedRadio === value}
                      onChange={onChangeValue}
                    />
                    <span className="text-wide">{value}</span>
                  </label>
                );
              })
            }
          </div>
        </div>
        <div className="flex gap-x-4">
          <button
            type="submit"
            className="bg-blue-500 px-3 py-2 text-white rounded border-2 border-blue-500"
          >
            Submit
          </button>
          <button
            className="bg-green-500 py-2 px-3 text-white rounded border-2 border-green-500"
            onClick={onToggleAnswer}
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <button
            className="border-2 border-black border-opacity-30 rounded px-5 py-2 text-gray-600"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      </form>
      {(() => {
        if (isCorrectAnswer === undefined) {
          return null;
        }

        return (
          <p
            className={`border-2 p-3 ${
              isCorrectAnswer ? "border-green-500" : "border-red-500"
            }`}
          >
            {isCorrectAnswer ? "Answer is correct" : "Answer is incorrect"}
          </p>
        );
      })()}
      {(() => {
        if (!showAnswer) {
          return null;
        }

        return (
          <p className="p-3 border-green-500 border-2">
            <span className="font-semibold">Answer: </span>{" "}
            <span>{actualChoices[actualAnswer]}</span>
          </p>
        );
      })()}
    </div>
  );
};
