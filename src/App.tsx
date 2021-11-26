import React from "react";
import { ForExamDrillingEnginneering } from "./components/for_exam/drillingEnginneering";
import { ForExamGeoExpo } from "./components/for_exam/geoExpo";
import { ForExamGeology } from "./components/for_exam/geology";
import { ForExamITPO } from "./components/for_exam/ITPO";
import { ForExamThermoDynamics } from "./components/for_exam/thermodynamics";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <ForExamITPO />
    </div>
  );
};
