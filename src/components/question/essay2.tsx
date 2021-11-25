import { FillQuestion, Question } from "../common";
import React from "react";

export type Essay2Props = {
  question: string | string[];

  children: React.ReactNode[];
};

export const Essay2 = ({ children, question }: Essay2Props) => {
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
        {(() => {
          if (!Array.isArray(children)) {
            return <li>{children}</li>;
          }

          return children.map((node, i) => {
            return <li key={i}>{node}</li>;
          });
        })()}
      </ol>
    </>
  );
};
