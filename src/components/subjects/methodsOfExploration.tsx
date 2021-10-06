import React from "react";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";

export const MethodsOfExploration = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are different methods of exploration"
        answer={[
          "Seismic Exploration",
          "Gravity Exploration",
          "Magnetic Exploration",
        ]}
      />
      <OneLineQuestion
        question="What is gravity surveying"
        answer="It measures spatial variation in the earths gravitational field caused by differences in the density of sub surface rocks"
      />
      <OneLineQuestion
        question="What does gravity surveying measures"
        answer="Variation in acceleration due to gravity"
      />
    </>
  );
};
