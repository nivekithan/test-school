import React from "react";
import arrayShuffle from "array-shuffle";
import { useMemo } from "react";

export type JumbleQuestionProps = {
  children: React.ReactNode[];
};

export const JumbleQuestions = ({ children }: JumbleQuestionProps) => {
  const newChildren = useMemo(() => arrayShuffle(children), []);

  return <>{newChildren}</>;
};
