import React from "react";
import { OneLineQuestion } from "./components/oneLineQues";
import { SingleChoiceQuestion } from "./components/singleChoicQuestion";

export const App = () => {
  return (
    <div className="mx-[10%] mt-20 flex flex-col gap-y-10">
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
      choices={["Essential, Accessory", "Clastic, Non Clastic", "Rutaceous, Arenaceous, Argillaceous"]}
      answer={0}
      />
    </div>
  );
};
