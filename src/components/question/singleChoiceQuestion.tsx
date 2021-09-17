import arrayShuffle from "array-shuffle";
import React, { useMemo, useState } from "react";
import {
  ClearButton,
  FillQuestion,
  GreenBorder,
  Question,
  RedBorder,
  SubmitButton,
  ToggleAnswerButton,
} from "../common";

export type SingleChoiceQuestionProps = {
  question: string | string[];
  choices: string[];
  answer: number;
};

export const SingleChoiceQuestion = ({
  question,
  choices: actualChoices,
  answer: actualAnswer_,
}: SingleChoiceQuestionProps) => {
  const actualAnswer = actualAnswer_ - 1;

  const [selectedRadio, setSelectedRadio] = useState<string | undefined>(
    undefined
  );

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>(
    undefined
  );

  const shuffledChoices = useMemo(() => {
    // arrayShuffle does not mutate the array
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
          {typeof question === "string" ? (
            <Question question={question} />
          ) : (
            <FillQuestion question={question} />
          )}
          <div className="flex flex-col gap-y-3">
            {shuffledChoices.map((value) => {
              return (
                <label key={value} className="flex gap-x-3 items-center">
                  <input
                    type="checkbox"
                    name={
                      typeof question === "string"
                        ? question
                        : question.join(" ")
                    }
                    value={value}
                    checked={selectedRadio === value}
                    onChange={onChangeValue}
                  />
                  <span className="text-wide">{value}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="flex gap-x-4">
          <SubmitButton />
          <ToggleAnswerButton
            onClick={onToggleAnswer}
            isAnswerBeingShown={showAnswer}
          />
          <ClearButton onClick={onClear} />
        </div>
      </form>
      {(() => {
        if (isCorrectAnswer === undefined) {
          return null;
        }

        return isCorrectAnswer ? (
          <GreenBorder>
            <p className="font-semibold">Answer is correct</p>
          </GreenBorder>
        ) : (
          <RedBorder>
            <p className="font-semibold">Answer is incorrect</p>
          </RedBorder>
        );
      })()}
      {(() => {
        if (!showAnswer) {
          return null;
        }

        return (
          <GreenBorder>
            <p>
              <span className="font-semibold">Answer: </span>{" "}
              <span>{actualChoices[actualAnswer]}</span>
            </p>
          </GreenBorder>
        );
      })()}
    </div>
  );
};
