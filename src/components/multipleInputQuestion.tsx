import React, { useState } from "react";
import { Question } from "./question";

export type MultipleInputQuestionProps = {
  question: string;
  answer: string[];
};

type AnswerState = {
  isCorrect: boolean;
  rightAnswers: string[];
  wrongAnswers: string[];
};

export const MultipleInputQuestion = ({
  answer,
  question,
}: MultipleInputQuestionProps) => {
  const [userAnswer, setUserAnswer] = useState(answer.map(() => ""));
  const [answerState, setAnswerState] = useState<AnswerState | undefined>(
    undefined
  );
  const [showAnswer, setShowAnswer] = useState(false);

  const onValueChange = (index: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const newValue = e.currentTarget.value;
      setUserAnswer((s) => {
        const userAnswerCopy = [...s];
        userAnswerCopy[index] = newValue;
        return userAnswerCopy;
      });
    };
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lowerCaseActualAnswers: (string | undefined)[] = answer.map((value) =>
      value.toLocaleLowerCase().trim()
    );

    const correctAnswers: string[] = [];
    const wrongAnswers: string[] = [];

    userAnswer.forEach((value) => {
      const lowerCaseValue = value.toLocaleLowerCase().trim();
      const answerIndex = lowerCaseActualAnswers.findIndex(
        (value) => value === lowerCaseValue
      );

      if (answerIndex >= 0) {
        lowerCaseActualAnswers[answerIndex] = undefined;
        correctAnswers.push(answer[answerIndex]);
      } else {
        value && wrongAnswers.push(value);
      }
    });

    const isAnswersCorrect = lowerCaseActualAnswers.every(
      (value) => value === undefined
    );

    setAnswerState({
      isCorrect: isAnswersCorrect,
      rightAnswers: correctAnswers,
      wrongAnswers,
    });
  };

  const onToggleAnswer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setShowAnswer((s) => !s);
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAnswerState(undefined);
    setShowAnswer(false);
    setUserAnswer((s) => Array(s.length).fill(""));
  };

  return (
    <div className="flex flex-col gap-y-5">
      <form onSubmit={onFormSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-3">
          <Question question={question} />
          <div className="flex flex-col gap-y-3">
            {answer.map((_, i) => {
              return (
                <label className="flex gap-x-2 items-end" key={i}>
                  <span className="">{`${i + 1}. `}</span>
                  <input
                    type="text"
                    value={userAnswer[i]}
                    className="border-1 border-gray-600 rounded p-1"
                    onChange={onValueChange(i)}
                  />
                </label>
              );
            })}
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
            className="border-2 bg-green-500 py-2 px-3 text-white rounded border-green-500"
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
      <RenderAnswerState state={answerState} />
      {showAnswer ? <RenderAnswers answer={answer} /> : null}
    </div>
  );
};

type RenderAnswerStateProps = {
  state?: AnswerState;
};

const RenderAnswerState = ({ state }: RenderAnswerStateProps) => {
  if (!state) {
    return null;
  }

  return (
    <div
      className={`border-2 p-3 ${
        state.isCorrect ? "border-green-500" : "border-red-500"
      } `}
    >
      <p>
        <span className="font-semibold">Correct Answers :</span>{" "}
        <span className="text-green-500">{state.rightAnswers.join(", ")}</span>
      </p>
      <p>
        <span className="font-semibold">Wrong Answers :</span>{" "}
        <span className="text-red-500">{state.wrongAnswers.join(", ")}</span>
      </p>
    </div>
  );
};

type RenderAnswerProps = {
  answer: string[];
};

const RenderAnswers = ({ answer }: RenderAnswerProps) => {
  return (
    <div className="p-3 border-2 border-green-500">
      <ol className="list-decimal list-inside">
        {answer.map((value, i) => {
          return (
            <li key={i} className="font-semibold">
              {value}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
