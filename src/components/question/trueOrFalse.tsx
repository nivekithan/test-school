import React from "react";
import { SingleChoiceQuestion } from "./singleChoiceQuestion";

export type TrueOrFalseProps = {
  question: string | string[];
  answer: boolean;
};

export const TrueOrFalse = ({ answer, question }: TrueOrFalseProps) => {
  return (
    <SingleChoiceQuestion
      question={question}
      choices={["True", "False"]}
      answer={answer ? 1 : 2}
    />
  );
};
