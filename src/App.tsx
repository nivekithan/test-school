import React from "react";
import { ForExamDrillingEnginneering } from "./components/for_exam/drillingEnginneering";
import { ForExamITPO } from "./components/for_exam/ITPO";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <ForExamITPO />
    </div>
  );
};
