import React from "react";
import { Essay } from "./components/question/essay";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <Essay
        points={[
          ["First question", "Continuation of first question"],
          ["Second question", "Continuation of second question"],
        ]}
        answer={[
          ["First Answer", "Second answer"],
          ["Second answer"]
        ]}
        question="This is main question"
      />
    </div>
  );
};
