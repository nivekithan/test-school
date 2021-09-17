import React from "react";
import { FillInTheBlanks } from "./components/question/fillInTheBlanks";
import { MultipleInputQuestion } from "./components/question/multipleInputQuestion";
import { OneLineQuestion } from "./components/question/oneLineQues";
import { SingleChoiceQuestion } from "./components/question/singleChoiceQuestion";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <OneLineQuestion
        question="Define Resources"
        answer="Volume of amount that is still available to us and can be commercially recovered in future"
        keywords={["volume", "commercially recovered", "future"]}
      />
      <SingleChoiceQuestion
        question="What type of resource are available in large amount"
        choices={[
          "Low concentration, Difficult to extract",
          "High concentration, Difficult to extract",
          "Low concentration, Easy to extract",
          "High concentration, Easy to extract",
        ]}
        answer={0}
      />
      <SingleChoiceQuestion
        question="What type of resource are available in small amount"
        choices={[
          "Low concentration, Difficult to extract",
          "High concentration, Difficult to extract",
          "Low concentration, Easy to extract",
          "High concentration, Easy to extract",
        ]}
        answer={3}
      />
      <OneLineQuestion
        question="Define petroleum reserve"
        answer="Those quantities of petroleum which by analysis of geo science and engineering data can be estimated with reasonable certainty to be commercially recoverable from a given date forward, from known reservoirs and under defined economic condition, operation methods and government regulations"
        keywords={[
          "quantities",
          "analysis",
          "geo science and engineering data",
          "commercially recoverable",
          "economic conditions",
          "operation methods",
          "government regulations",
        ]}
      />
      <MultipleInputQuestion
        question="What are three types of reserves"
        answer={["Proved", "Probable", "Possible"]}
      />
      <OneLineQuestion
        question="How does Proved reserves is classified"
        answer="These are reservers which has atleast 90% probability that the quantities recovered will equal or exceed the estimate"
        keywords={["90% probability", "equal or exceed"]}
      />
      <OneLineQuestion
        question="How does Probable reserves is classified"
        answer="These are reservers which has atleast 50% probability that the quantities recovered will equal or exceed the sum of estimated proved reserve and probable reserve"
        keywords={[
          "50% probability",
          "equal or exceed",
          "proved reserver",
          "probable reserve",
        ]}
      />
      <OneLineQuestion
        question="How does Possible reserves is classified"
        answer="These are reservers which has atleast 10% probability that the quantities recovered will equal or exceed the sum of estimated proved reserve, probable reserve, possible reserve"
        keywords={[
          "10% probability",
          "equal or exceed",
          "proved reserver",
          "probable reserve",
          "possible reserve",
        ]}
      />
      <MultipleInputQuestion
        question="What are two types oil and gas resource can be classified"
        answer={["Conventional", "Unconventional"]}
      />
      <OneLineQuestion
        question="Define conventional resource"
        answer="They are formations that can be produced at economic flow rates or that produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
        keywords={[
          "Formation",
          "Economic flow rates",
          "economic volumes",
          "stimulation treatments",
          "special recovery process",
          "technologies",
        ]}
      />
      <OneLineQuestion
        question="Define unconventional resource"
        answer="They are formations that cannot be produced at economic flow rates or do not produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
        keywords={[
          "Formation",
          "Economic flow rates",
          "economic volumes",
          "stimulation treatments",
          "special recovery process",
          "technologies",
        ]}
      />
      <SingleChoiceQuestion
        question="How many barrels of oil does a giant oil field contains"
        choices={[
          "500 million barrels to 5 billion barrels",
          "500 thousand barrels to 5 million barrels",
          "5 million barrels to 5 billion barrels",
          "5 thousand barrels to 5 million barrels",
        ]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="How many barrels of oil does a supergiant oil field contains"
        choices={[
          "More than 5 billion barrels",
          "More than 5 million barrels",
          "More than 10 billion barrels",
          "More than 10 million barrels",
        ]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="How many ft3 of gas does a giant gas field contains"
        choices={[
          "3 trillion to 30 trillion ft3",
          "3 billion to 30 trillion ft3",
          "3 billion to 30 billion ft3",
          "3 trillion to 30 trillion ft2",
        ]}
        answer={1}
      />
      <OneLineQuestion
        question="What is coal gas"
        answer="Gas recovered from coal beds is known as coal gas. The gas can be presented as liberated gas in the fracture system or as a monomolecular layer on the internal surface of the coal matrix"
        keywords={[
          "coal beds",
          "liberated gas",
          "fracture system",
          "monomolecular layer",
          "coal matrix",
        ]}
      />
    </div>
  );
};
