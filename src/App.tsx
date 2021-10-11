import React from "react";
import { FinalDrillingEngineering } from "./components/subjects/drillingEngineering";
import { FinalITPO } from "./components/subjects/itpo-drilling";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
      <FinalDrillingEngineering />
    </div>
  );
};
