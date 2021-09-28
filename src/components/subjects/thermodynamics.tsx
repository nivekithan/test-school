import React from "react";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";

export const Thermodynamics = () => {
  return (
    <>
      <OneLineQuestion
        question="What is fundamental law in thermodynamics"
        answer="That energy cannot be created or destroyed but can only be transformed from one form to another"
      />
      <MultipleInputQuestion
        question="What are types of system"
        answer={["Closed system", "Open system", "isolated system"]}
      />
      <SingleChoiceQuestion
        question="In closed system What can cross the boundary"
        choices={[
          "Only Energy",
          "Only Mass",
          "Both mass and energy",
          "None of the above",
        ]}
        answer={2}
      />
      <SingleChoiceQuestion
        question="In open system What can cross the boundary"
        choices={[
          "Only Energy",
          "Only Mass",
          "Both mass and energy",
          "Neither mass nor energy",
        ]}
        answer={3}
      />
      <SingleChoiceQuestion
        question="In isolated system What can cross the boundary"
        choices={[
          "Only Energy",
          "Only Mass",
          "Both mass and energy",
          "Neither mass nor energy",
        ]}
        answer={4}
      />
      <OneLineQuestion
        question="What is intensive properties"
        answer="Intensive properties are properties which are independent of mass"
      />
      <OneLineQuestion
        question="What is extensive properties"
        answer="Extensive properties are properties which are directly dependent of mass"
      />
      <OneLineQuestion
        question="What is specific properties"
        answer="The ratio of any extensive property of a system to that of mass of the system is called an average specific value of that property"
      />
      <OneLineQuestion
        question="What is thermodynamic equilibrium"
        answer="When a system maintains thermal, mechanical, phase and chemical equilibriums then"
      />
      <SingleChoiceQuestion
        question="In isobaric process what property is held constant"
        choices={["Pressure", "Temperature", "Volume", "Entropy"]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="In isothermal process what property is held constant"
        choices={["Pressure", "Temperature", "Volume", "Entropy"]}
        answer={2}
      />
      <SingleChoiceQuestion
        question="In isochoric process what property is held constant"
        choices={["Pressure", "Temperature", "Volume", "Entropy"]}
        answer={3}
      />
      <SingleChoiceQuestion
        question="In isentropic process what property is held constant"
        choices={["Pressure", "Temperature", "Volume", "Entropy"]}
        answer={4}
      />
      <OneLineQuestion
        question="What is quasi static process"
        answer="The deviation from the thermodynamic equilibrium is infinitesimal and all states of the system passes through are equilibrium states"
      />
    </>
  );
};
