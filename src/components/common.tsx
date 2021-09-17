import React from "react";

export const Question = ({ question }: { question: string }) => {
  return <h3 className="font-semibold text-lg">{question}</h3>;
};

export type FillInTheBlanksQuestionProps = {
  question: string[];
};

export const FillQuestion = ({ question }: FillInTheBlanksQuestionProps) => {
  return (
    <p className="font-semibold text-lg">
      {question.map((value, i, ar) => {
        if (i === ar.length - 1) {
          return <span>{value}</span>;
        }

        return (
          <span>
            {value} <span>{"_______"}</span>{" "}
          </span>
        );
      })}
    </p>
  );
};

export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="bg-blue-500 px-3 py-2 text-white rounded border-2 border-blue-500"
    >
      Submit
    </button>
  );
};

export type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({ onChange, value }: TextInputProps) => {
  return (
    <input
      type="text"
      className="border-1 border-gray-600 p-2 rounded"
      value={value}
      onChange={onChange}
    />
  );
};

export type ToggleAnswerButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isAnswerBeingShown: boolean;
};

export const ToggleAnswerButton = ({
  onClick,
  isAnswerBeingShown: showAnswer,
}: ToggleAnswerButtonProps) => {
  return (
    <button
      className="bg-green-500 py-2 px-3 text-white rounded border-2 border-green-500"
      onClick={onClick}
    >
      {showAnswer ? "Hide Answer" : "Show Answer"}
    </button>
  );
};

export type ClearButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <button
      className="border-2 border-black border-opacity-30 rounded px-5 py-2 text-gray-600"
      onClick={onClick}
    >
      Clear
    </button>
  );
};

export type GreenBorderProps = {
  children: React.ReactNode;
};

export const GreenBorder = ({ children }: GreenBorderProps) => {
  return (
    <div className="border-2 border-green-500 p-3 rounded">{children}</div>
  );
};

export type RedBorderProps = {
  children: React.ReactNode;
};

export const RedBorder = ({ children }: RedBorderProps) => {
  return <div className="border-2 border-red-500 p-3 rounded">{children}</div>;
};
