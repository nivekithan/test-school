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

export type MultipleInputQuestionProps = {
  question: string | string[];
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
    const copyOfAnswers: (string | undefined)[] = answer.map((value) =>
      value.toLocaleLowerCase().trim()
    );

    const correctAnswers: string[] = [];
    const wrongAnswers: string[] = [];

    userAnswer.forEach((userSingleAnswer) => {
      const answerIndex = copyOfAnswers.findIndex(
        (actualSingleAnswer) =>
          actualSingleAnswer &&
          compareTwoStrings(userSingleAnswer, actualSingleAnswer)
      );

      if (answerIndex >= 0) {
        copyOfAnswers[answerIndex] = undefined;
        correctAnswers.push(answer[answerIndex]);
      } else {
        userSingleAnswer && wrongAnswers.push(userSingleAnswer);
      }
    });

    const isAnswersCorrect = copyOfAnswers.every(
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
          {typeof question === "string" ? (
            <Question question={question} />
          ) : (
            <FillQuestion question={question} />
          )}

          <div className="flex flex-col gap-y-3">
            {answer.map((_, i) => {
              return (
                <label className="flex gap-x-2 items-end" key={i}>
                  <span className="">{`${i + 1}. `}</span>
                  <TextInput
                    value={userAnswer[i]}
                    onChange={onValueChange(i)}
                  />
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

  if (state.isCorrect) {
    return (
      <GreenBorder>
        <p className="font-semibold">Answer is correct</p>
      </GreenBorder>
    );
  }

  return (
    <RedBorder>
      <p>
        <span className="font-semibold">Correct Answers :</span>{" "}
        <span className="text-green-500">{state.rightAnswers.join(", ")}</span>
      </p>
      <p>
        <span className="font-semibold">Wrong Answers :</span>{" "}
        <span className="text-red-500">{state.wrongAnswers.join(", ")}</span>
      </p>
    </RedBorder>
  );
};

type RenderAnswerProps = {
  answer: string[];
};

const RenderAnswers = ({ answer }: RenderAnswerProps) => {
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
};
