import React, { useEffect, useState } from "react";
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

export type OneLineQuestionProps = {
  question: string | string[];
  answer: string;
};

type AnswerState = {
  isExact: boolean;
};

export const OneLineQuestion = ({
  question,
  answer: actualAnswer,
}: OneLineQuestionProps) => {
  const lowerCaseAnswer = actualAnswer.toLocaleLowerCase();

  const [userAnswer, setUserAnswer] = useState("");
  const [answerState, setAnswerState] = useState<AnswerState | undefined>(
    undefined
  );
  const [showAnswer, setShowAnswer] = useState(false);

  const onValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    setUserAnswer(e.currentTarget.value);
  };

  const onFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lowerUserAnswer = userAnswer.toLocaleLowerCase().trim();
    const isExact = lowerCaseAnswer === lowerUserAnswer;

    setAnswerState({ isExact });
  };

  const onShowAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowAnswer((s) => !s);
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAnswerState(undefined);
    setUserAnswer("");
    setShowAnswer(false);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <form className="flex flex-col gap-y-5" onSubmit={onFormSubmission}>
        <label className="flex flex-col gap-y-3">
          {typeof question === "string" ? (
            <Question question={question} />
          ) : (
            <FillQuestion question={question} />
          )}

          <TextInput value={userAnswer} onChange={onValueChange} />
        </label>
        <div className="flex gap-x-4">
          <SubmitButton />
          <ToggleAnswerButton
            onClick={onShowAnswer}
            isAnswerBeingShown={showAnswer}
          />
          <ClearButton onClick={onClear} />
        </div>
      </form>
      <AnswerMeta state={answerState} />
      {showAnswer ? <RenderAnswer answer={actualAnswer} /> : null}
    </div>
  );
};

type AnswerMetaProps = {
  state?: AnswerState;
};

const AnswerMeta = ({ state }: AnswerMetaProps) => {
  if (!state) {
    return <></>;
  }

  if (state.isExact) {
    return (
      <div>
        <GreenBorder>
          <p className="font-semibold">Answer is correct</p>
        </GreenBorder>
      </div>
    );
  }

  return (
    <RedBorder>
      <div className="font-semibold">
        <p>Answer is wrong </p>
      </div>
    </RedBorder>
  );
};

type RenderAnswerProps = {
  answer: string;
};

const RenderAnswer = ({ answer }: RenderAnswerProps) => {
  return (
    <p className="p-3 border-2 border-green-500">
      <span className="font-semibold">Answer :</span> {answer}
    </p>
  );
};
