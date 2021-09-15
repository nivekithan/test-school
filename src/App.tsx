import React from "react";
import { MultipleInputQuestion } from "./components/multipleInputQuestion";
import { OneLineQuestion } from "./components/oneLineQues";
import { SingleChoiceQuestion } from "./components/singleChoiceQuestion";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <OneLineQuestion
        question="What are minerals"
        answer="Minerals are natural, solid substances, inorganic with definite inter atomic structure and fixed chemical composition"
        keywords={[
          "Natural",
          "Solid Substances",
          "inorganic",
          "inter atomic structure",
          "fixed chemical composition",
        ]}
      />
      <SingleChoiceQuestion
        question="What are different types of minerals"
        choices={[
          "Essential, Accessory",
          "Clastic, Non Clastic",
          "Rutaceous, Arenaceous, Argillaceous",
        ]}
        answer={0}
      />
      <MultipleInputQuestion question="What are different types of minerals" answer={["Essential", "Accessory"]} />
    </div>
  );
};
