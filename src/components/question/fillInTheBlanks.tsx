import React, { useState } from "react";
import { compareTwoStrings } from "../../utils";
import {
  ClearButton,
  FillQuestion,
  GreenBorder,
  Question,
  RedBorder,
  SubmitButton,
  TextInput,
  ToggleAnswerButton,
} from "../common";

export type FillInTheBlanksProps = {
  question: string[] | string;
  answer: string[];
};

type AnswerState = {
  correctAnswer: string[];
  wrongAnswer: string[];
  isCorrect: boolean;
};

export const FillInTheBlanks = ({ question, answer }: FillInTheBlanksProps) => {
  const [userAnswer, setUserAnswer] = useState(answer.map(() => ""));
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState | undefined>(
    undefined
  );

  const onValueChange = (num: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const newValue = e.currentTarget.value;
      const copyUserAnswer = [...userAnswer];

      copyUserAnswer[num] = newValue;
      setUserAnswer(copyUserAnswer);
    };
  };

  const toggleAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setShowAnswer((s) => !s);
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserAnswer((s) => s.map(() => ""));
    setShowAnswer(false);
    setAnswerState(undefined);
  };

  const onFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const wrongAnswer: string[] = [];
    const correctAnswer: string[] = [];

    const isAnswerCorrect = answer.every((value, i) => {
      if (compareTwoStrings({ check: userAnswer[i], correct: value })) {
        correctAnswer.push(userAnswer[i]);

        return true;
      } else {
        wrongAnswer.push(userAnswer[i]);

        return false;
      }
    });

    setAnswerState({ wrongAnswer, correctAnswer, isCorrect: isAnswerCorrect });
  };

  return (
    <div className="flex flex-col gap-y-5">
      <form className="flex flex-col gap-y-5" onSubmit={onFormSubmission}>
        <div className="flex flex-col gap-y-3">
          {typeof question === "string" ? (
            <Question question={question} />
          ) : (
            <FillQuestion question={question} />
          )}
          {answer.map((_, i) => {
            return (
              <label className="flex gap-x-2 items-end" key={i}>
                <span className="">{`${i + 1}. `}</span>
                <TextInput value={userAnswer[i]} onChange={onValueChange(i)} />
              </label>
            );
          })}
        </div>
        <div className="flex gap-x-4">
          <SubmitButton />
          <ToggleAnswerButton
            onClick={toggleAnswer}
            isAnswerBeingShown={showAnswer}
          />
          <ClearButton onClick={onClear} />
        </div>
      </form>
      <RenderAnswerState state={answerState} />
      {(() => {
        if (!showAnswer) {
          return null;
        }

        return (
          <GreenBorder>
            <ol className="list-decimal list-inside">
              {answer.map((value, i) => {
                return (
                  <li key={i} className="font-semibold">
                    {value}
                  </li>
                );
              })}
            </ol>
          </GreenBorder>
        );
      })()}
    </div>
  );
};

const RenderAnswerState = ({ state }: { state?: AnswerState }) => {
  if (!state) {
    return null;
  }

  if (state.isCorrect) {
    return (
      <GreenBorder>
        <h3 className="font-semibold">Answer is correct</h3>
      </GreenBorder>
    );
  }

  return (
    <RedBorder>
      <h3 className="font-semibold">Answer is not correct</h3>
      <p>
        <span className="font-semibold">Correct Answers:</span>{" "}
        <span className="text-green-500">{state.correctAnswer.join(",")}</span>
      </p>
      <p>
        <span className="font-semibold">Wrong Answers:</span>{" "}
        <span className="text-red-500">{state.wrongAnswer.join(",")}</span>
      </p>
    </RedBorder>
  );
};
