import React, { useState } from "react";
import { ForExamDrillingEnginneering } from "./components/for_exam/drillingEnginneering";
import { ForExamGeoExpo } from "./components/for_exam/geoExpo";
import { ForExamGeology } from "./components/for_exam/geology";
import { ForExamITPO } from "./components/for_exam/ITPO";
import { ForExamThermoDynamics } from "./components/for_exam/thermodynamics";

type SubjectName =
  | "ITPO"
  | "Geology"
  | "GnG"
  | "Thermodynamics"
  | "Drilling"
  | "NONE";

export const App = () => {
  const [subjectName, setSubjectName] = useState<SubjectName>("NONE");

  const allSubjectName: SubjectName[] = [
    "Drilling",
    "Geology",
    "ITPO",
    "GnG",
    "Thermodynamics",
  ];

  return (
    <>
      <div className="flex mx-[10%] gap-x-10 justify-between my-20">
        {(() => {
          return allSubjectName.map((name) => {
            const onButtonClick = (
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              setSubjectName(name);
            };

            return (
              <button
                key={name}
                onClick={onButtonClick}
                className="bg-blue-500 text-white w-40 h-20 rounded hover:bg-blue-600 "
              >
                {name}
              </button>
            );
          });
        })()}
      </div>
      <div className="mx-[10%] my-20 flex flex-col gap-y-10">
        {(() => {
          switch (subjectName) {
            case "ITPO":
              return <ForExamITPO />;
            case "Drilling":
              return <ForExamDrillingEnginneering />;
            case "Geology":
              return <ForExamGeology />;
            case "GnG":
              return <ForExamGeoExpo />;
            case "Thermodynamics":
              return <ForExamThermoDynamics />;
            case "NONE":
              return null;
          }
        })()}
      </div>
    </>
  );
};
