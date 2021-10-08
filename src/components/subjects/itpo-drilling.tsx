import { OneLineQuestion } from "../question/oneLineQues";
import React from "react";
import { TrueOrFalse } from "../question/trueOrFalse";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { FillInTheBlanks } from "../question/fillInTheBlanks";

export const ITPODrilling = () => {
  return (
    <>
      <TrueOrFalse
        question="Only way to conform the presence of hydrocarbon is by drilling a well"
        answer={true}
      />

      <FillInTheBlanks
        question={[
          "Dry hole is a well which does not have enough",
          "in",
          "quantity",
        ]}
        answer={["Hydrocarbon", "commercial"]}
      />

      <OneLineQuestion
        question="What is the chance for the drilled well to be discovery"
        answer="1/10"
      />

      <FillInTheBlanks
        question={[
          "Wildcat well is a well that is drilled in",
          "where there is no prior",
          "or",
          "has been discovered",
        ]}
        answer={["Geologic structure", "oil", "gas"]}
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
        answer="Time when the company can recover all their investments"
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
        answer="Small heavy pipe used to center the well"
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
        answer={["Provides Weight on bit", "Provides tension to Drill string"]}
      />
      <OneLineQuestion
        question="What is weight on bit"
        answer="Amount of downward force exerted on the drill bit provided by thick walled tubular pieces in the drilling assembly"
      />

      <MultipleInputQuestion
        question="Why too much weight on bit is not desired"
        answer={[
          "Can cause damage to bit",
          "Can cause drill string to buckle",
        ]}
      />
      <MultipleInputQuestion
        question="Why less weight on bit is not desired"
        answer={["Decreases rate of penetration"]}
      />
      <TrueOrFalse
        question="Drill pipe is considered in Bottom hole assembly"
        answer={false}
      />
      <OneLineQuestion
        question="What is the purpose of Bottom hole assembly"
        answer="To provide weight on bit"
      />
      <MultipleInputQuestion
        question="What are the factors affecting the cost of drilling"
        answer={["Rate of penetration", "Weight on bit"]}
      />
      <MultipleInputQuestion
        question="What are ways to calculate WOB"
        answer={["Using MWD tools", "Using weight indicator on surface"]}
      />
      <OneLineQuestion
        question="What are limitations of calculating WOB on surface"
        answer="Provides inaccurate measurement in Directional well"
      />
      {/* <OneLineQuestion
        question="What is advantage for using MWD"
        answer={["Gives measurement at realtime", ""]}
      /> */}
    </>
  );
};
