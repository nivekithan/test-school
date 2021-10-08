import React from "react";
import { Essay } from "./components/question/essay";
import { ITPODrilling, ITPODrillingAssembly, ITPODrillingRights } from "./components/subjects/itpo-drilling";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
     <ITPODrilling />
     <ITPODrillingAssembly />
     <ITPODrillingRights />
     
    </div>
  );
};
