import { OneLineQuestion } from "../question/oneLineQues";
import React from "react";
import { TrueOrFalse } from "../question/trueOrFalse";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";

export const ITPODrilling = () => {
  return (
    <>
      <TrueOrFalse
        question="Only way to conform the presence of hydrocarbon is by drilling a well"
        answer={true}
      />
      <OneLineQuestion
        question="What is dry hole"
        answer="It is well which does not have enough hydrocarbon in commercial quantity"
      />
      <OneLineQuestion
        question="What is the chance for the drilled well to be discovery"
        answer="1/10"
      />
      <OneLineQuestion
        question="What is wildcat well"
        answer="The well that is drilled in geologic structure where there is no prior oil or gas has been discovered"
      />
      <OneLineQuestion
        question="What is blowout"
        answer="Uncontrolled flow of formation fluids"
      />
    </>
  );
};

export const ITPODrillingRights = () => {
  return (
    <>
      <OneLineQuestion
        question="What is break even point"
        answer="The time when the company can recover all their investments is known as break even point"
      />
      <SingleChoiceQuestion
        question="What is the approximate time for a company to achieve break even point"
        choices={[
          "5 - 10 months",
          "50 - 100 months",
          "50 - 100 years",
          "5 - 10 years",
        ]}
        answer={4}
      />
      <TrueOrFalse
        question="Crown lands are owned by the government"
        answer={true}
      />
      <TrueOrFalse
        question="Freehold lands are owned by the government"
        answer={false}
      />
      <TrueOrFalse
        question="Freehold lands are owned by the company or individual"
        answer={true}
      />
    </>
  );
};

export const ITPODrillingAssembly = () => {
  return (
    <>
      <OneLineQuestion
        question="What are stabilizers"
        answer="There are small heavy pipe which is used to center the well"
      />
      <SingleChoiceQuestion
        question="Which has highest outer diameter"
        choices={[
          "Drill collar",
          "Heavy weight Drill pipe",
          "Bit",
          "Drill pipe",
        ]}
        answer={1}
      />
      <MultipleInputQuestion
        question="What are the purposes of Drill collar"
        answer={[
          "To provide Weight on bit",
          "Provide tension in the Drill string",
        ]}
      />
      <OneLineQuestion
        question="What is weight on bit"
        answer="It is the amount of downward force exerted on the drill bit provided by thick walled tubular pieces in the drilling assembly"
      />

      <MultipleInputQuestion
        question="Why too much weight on bit is not desired"
        answer={[
          "Can cause damage to bit",
          "Can cause the drill string to buckle",
        ]}
      />
      <MultipleInputQuestion
        question="Why less weight on bit is not desired"
        answer={["Can cause the rate of penetration to decrease"]}
      />
      <TrueOrFalse
        question="Drill pipe is considered in Bottom hole assembly"
        answer={false}
      />
      <OneLineQuestion
        question="What is the purpose of Bottom hole assembly"
        answer="To provide WOB"
      />
    </>
  );
};
