import React from "react";
import { FillQuestion, Question } from "../common";
import { FillInTheBlanks } from "./fillInTheBlanks";

export type EssayProps = {
  question: string | string[];

  points: string[][];
  answer: string[][];
};

export const Essay = ({ points, answer, question }: EssayProps) => {
  if (points.length !== answer.length) {
    throw Error(
      "Expected the length of both question and answer in Eassy to be equal length"
    );
  }

  return (
    <>
      {(() => {
        if (typeof question === "string") {
          return <Question question={question} />;
        } else {
          return <FillQuestion question={question} />;
        }
      })()}
      <ol className="flex flex-col gap-y-5 ml-6 list-decimal list-outside">
        {points.map((q, i) => {
          return (
              <li key={i}>
                <FillInTheBlanks question={q} answer={answer[i]} />
              </li>
          );
        })}
      </ol>
    </>
  );
};
