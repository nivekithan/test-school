import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";

const Lec3 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What does gravity surveying measures"
        answer={[
          "Spatial variations in the earth gravitational field caused by the differences in the density of subsurface rocks",
          "Variation in the acceleration due to the gravity",
        ]}
      />
      <OneLineQuestion
        question="What is gravity anomalies"
        answer="Deviations from a predefined reference level (geoid)"
      />
      <MultipleInputQuestion
        question="What are applications to gravity exploration"
        answer={["Depth to bedrock", "Mapping salt dome", "Mapping bedrock"]}
      />
      <OneLineQuestion
        question="What are the limitations of gravity exploration"
        answer="Not useful for localized scale"
      />
      <MultipleInputQuestion
        question="What are factors affecting gravity value across earth"
        answer={["Radius of earth", "mass", "Centrifugal force"]}
      />
      <MultipleInputQuestion
        question="What are measurements that used in gravity surveying"
        answer={["Wordon", "Lacoste romberg"]}
      />
      <FillInTheBlanks
        question="How does gravity surveying works"
        answer={[
          "We measure the absolute value of g in various places",
          "Then we take care of any errors in our measurements",
          "Then we subtract the absolute value of g with a reference value",
          "If the result is not 0 then we can assume that there is presence of inhomogeneous subsurface structure which could be hydrocarbon",
        ]}
      />
      <MultipleInputQuestion
        question="What are errors can happen in gravity surveying"
        answer={[
          "Human error",
          "Measurement error",
          "Local fluctuation of gravity",
        ]}
      />
    </>
  );
};

const Lec4 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is the function for graph of acceleration due to gravity by buried spherical body"
        answer="g(x) = GMZ/(x^2 + z^2)^(3/2)"
      />
      <OneLineQuestion
        question="What is half width formula"
        answer="X = .766z"
      />
    </>
  );
};

const Lec6 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are the type of correction we should do in gravity surveying"
        answer={[
          "Tidal correction",
          "Terrain correction",
          "Bouguer correction",
          "Free air correction",
        ]}
      />
      <MultipleInputQuestion
        question="What are methods used to interpert anomalies"
        answer={[
          "Fitting by hand",
          "Mathematical fitting",
          "Complex processing",
        ]}
      />
    </>
  );
};

export const ForExamGeoExpo = () => {
  return (
    <>
      <Lec3 />
      <Lec4 />
    </>
  );
};
