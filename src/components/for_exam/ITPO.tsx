import React from "react";
import { Essay } from "../question/essay";
import { OneLineQuestion } from "../question/oneLineQues";
import { TrueOrFalse } from "../question/trueOrFalse";
import { JumbleQuestions } from "../utils";

const Lec3 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is petroleum resources"
        answer="Remaining recoverable hydrocarbon within the earth"
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Resources which are hard to extract are available in large amount"
          answer={true}
        />
        <TrueOrFalse
          question="Resources which are hard to extract are available in small amount"
          answer={false}
        />
        <TrueOrFalse
          question="Resources which are easy to extract are available in large amount"
          answer={false}
        />
        <TrueOrFalse
          question="Resources which are easy to extract are available in small amount"
          answer={true}
        />
      </JumbleQuestions>
      <Essay
        question="How do you classify resources"
        points={[
          ["Resources can be classified into", "and", ""],
          ["Undiscovered resource is further divided into", "and", ""],
          ["Discoverd resource is further divided into", "and", ""],
          ["Sub commercial resource is further divided into", "and", ""],
          ["Commercial resource is further divided into", ",", "and", ""],
        ]}
        answer={[
          ["Discovered", "Undiscovered"],
          ["Prospective", "Unrecoverable"],
          ["Commercial", "Sub Commercial"],
          ["Contingent", "Unrecoverable"],
          ["Proved reserve", "Probable reserve", "Possible Reserve"],
        ]}
      />
      <JumbleQuestions>
        <OneLineQuestion
          question="What is undiscovered unrecoverable resource"
          answer="These are not yet discovered and cannot be commercially recovered if discoverd"
        />
        <OneLineQuestion
          question="What is prospective resource"
          answer="These resource are not yet discoverd and can be commercially recovered if discovered"
        />
        <OneLineQuestion
          question="What is contingent resource"
          answer="Presence of hydrocarbon is confirmed by drilling a well in the prospective resource but its not yet mature enough for development"
        />
        <OneLineQuestion
          question="What is reserve"
          answer="Resources which can be commercially recovered and justified for development"
        />
        <OneLineQuestion
          question="What is proved reserve"
          answer="There should be atleast 90% probability that quantities actually recovered will equal or exceed the low estimate"
        />
        <OneLineQuestion
          question="What is probable reserve"
          answer="There should be atleast 50% probability that quantities actually recovered will equal or exceed the best estimate"
        />
        <OneLineQuestion
          question="What is possible reserve"
          answer="There should be atleast 10% probability that quantities actually recovered will equal or exceed the high estimate"
        />
      </JumbleQuestions>
    </>
  );
};

export const ForExamITPO = () => {
  return (
    <>
      <Lec3 />
    </>
  );
};
