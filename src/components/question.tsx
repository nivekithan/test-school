import React from "react";

export const Question = ({ question }: { question: string }) => {
  return <h3 className="font-semibold text-lg">{question}</h3>;
};
