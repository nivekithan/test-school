import React from "react";
import { OneLineQuestion } from "./components/oneLineQues";

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
      <OneLineQuestion
        question="What are Rocks"
        answer="Rock are naturally aggregate of minerals        "
        keywords={[
          "aggregate",
          "minerals"
        ]}
      />
    </div>
  );
};
