import React from "react";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";

const Lec1 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is conservation of energy"
        answer="Energy cannot be created or destroyed but can only be transformed from one form to another"
      />
      <OneLineQuestion
        question="What is system"
        answer="A quantity of matter or a region in space chosen for study"
      />
      <OneLineQuestion
        question="What is surrondings"
        answer="Mass or region outside the system"
      />
      <OneLineQuestion
        question="What is boundary"
        answer="Real or imaginary surface that separates the system from its surrounding"
      />
      <MultipleInputQuestion
        question="What are types of systems"
        answer={["Closed system", "Open system", "Isolated system"]}
      />
      <OneLineQuestion
        question="What is closed system"
        answer="Only energy can cross the boundary"
      />
      <OneLineQuestion
        question="What is open system"
        answer="Both mass and energy can cross the boundary"
      />
      <OneLineQuestion
        question="What is isolated system"
        answer="Neither mass nor energy can cross the boundary"
      />
    </>
  );
};

export const ForExamThermoDynamics = () => {
  return (
    <>
      <Lec1 />
    </>
  );
};
