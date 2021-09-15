import React, { useEffect, useState } from "react";
import { Question } from "./question";

export type OneLineQuestionProps = {
  question: string;
  answer: string;
  keywords: string[];
  textarea?: boolean;
};

type AnswerState = {
  isExact: boolean;
  keywordMatched: { [index: string]: boolean };
};

export const OneLineQuestion = ({
  question,
  answer: actualAnswer,
  keywords: actualKeywords,
  textarea = false,
}: OneLineQuestionProps) => {
  const lowerCaseKeywords = actualKeywords.map((value) =>
    value.toLocaleLowerCase()
  );
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

    if (isExact) {
      const matchKeywords = lowerCaseKeywords.reduce(
        (acc: { [index: string]: boolean }, curr) => {
          acc[curr] = true;
          return acc;
        },
        {}
      );

      setAnswerState({ isExact: true, keywordMatched: matchKeywords });
      return;
    } else {
      const defaultKeywords = lowerCaseKeywords.reduce(
        (acc: { [index: string]: boolean }, curr) => {
          acc[curr] = false;
          return acc;
        },
        {}
      );

      const matchKeywords = lowerCaseKeywords.reduce(
        (acc: { [index: string]: boolean }, curr) => {
          if (lowerUserAnswer.includes(curr)) {
            acc[curr] = true;
          }

          return acc;
        },
        { ...defaultKeywords }
      );

      setAnswerState({ isExact: false, keywordMatched: matchKeywords });
      return;
    }
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
          <Question question={question} />
          {textarea ? (
            <textarea
              value={userAnswer}
              onChange={onValueChange}
              className="border-1 border-gray-600 p-2 rounded"
            />
          ) : (
            <input
              value={userAnswer}
              onChange={onValueChange}
              className="border-1 border-gray-600 p-2 rounded"
            />
          )}
        </label>
        <div className="flex gap-x-4">
          <button
            type="submit"
            className="bg-blue-500 px-3 py-2 text-white rounded border-2 border-blue-500"
          >
            Submit
          </button>
          <button
            className="border-2 bg-green-500 py-2 px-3 text-white rounded border-green-500"
            onClick={onShowAnswer}
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
        <p className="p-3 border-2 border-green-500 font-semibold text-dark-300">
          Answer is correct
        </p>
      </div>
    );
  }

  const isAllKeywordsMatched = Object.values(state.keywordMatched).reduce(
    (acc: boolean, curr) => {
      if (!curr) {
        return false;
      }

      return acc;
    },
    true
  );

  return (
    <div
      className={`p-3 border-2 font-semibold text-dark-300 ${
        isAllKeywordsMatched ? "border-yellow-500" : "border-red-500"
      }`}
    >
      <p>
        Answer is not exact{" "}
        {isAllKeywordsMatched
          ? "but all keywords matched"
          : "and all keywords are not matched"}
      </p>
      <p>
        Keyword matched :{" "}
        <span className="text-green-500">
          {Object.keys(state.keywordMatched)
            .map((value) => (state.keywordMatched[value] ? value : undefined))
            .filter((value) => value)
            .join(",")}
        </span>
      </p>
      <p>
        Keyword not matched :{" "}
        <span className="text-red-500">
          {Object.keys(state.keywordMatched)
            .map((value) => (state.keywordMatched[value] ? undefined : value))
            .filter((value) => value)
            .join(",")}
        </span>
      </p>
    </div>
  );
};

type RenderAnswerProps = {
  answer: string;
};

const RenderAnswer = ({ answer }: RenderAnswerProps) => {
  return (
    <p className="p-3 border-2 border-green-500">
      <span className="font-semibold">Answer :</span>
      {" "}
      {answer}
    </p>
  );
};
