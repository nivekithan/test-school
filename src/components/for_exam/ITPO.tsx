import React from "react";
import { Essay } from "../question/essay";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
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
          answer="These are not yet discovered and cannot be commercially recovered if discovered"
        />
        <OneLineQuestion
          question="What is prospective resource"
          answer="These resource are not yet discovered and can be commercially recovered if discovered"
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

const Lec4 = () => {
  return (
    <>
      <Essay
        question="Write about biogenic theory"
        points={[
          [
            "According to biogenic theory",
            " ",
            "and",
            "found in formation are product of",
            "and",
            "term process that acted on",
            "of",
            "such as",
            "and",
            "that lived millions years of ago in",
            "",
          ],
          [
            "Upon",
            ", the organisms formed",
            ".",
            "and",
            "were formed by",
            "action in the",
            "condition of the",
            "and subsequent",
            "that occurred after the",
            "was buried under many additional",
            "",
          ],
          ["Those", "process break", "molecules into", "molecules"],
        ]}
        answer={[
          [
            "Hydrocarbon",
            "gases",
            "liquids",
            "short",
            "long",
            "remants",
            "organism",
            "algae",
            "plankton",
            "aqueous environments",
          ],
          [
            "death",
            "organic rich sediments",
            "Oil",
            "gas",
            "bacterial",
            "anaerobic",
            "sediment",
            "thermal process",
            "sediment",
            "layers of sediments",
          ],
          ["thermal", "larger", "smaller"],
        ]}
      />
      <MultipleInputQuestion
        question="What are two types of reservoir"
        answer={["Unconventional", "Conventional"]}
      />
      <OneLineQuestion
        question="In unconventional reservoir, from what rock the hydrocarbon is extracted"
        answer="Source Rock"
      />
      <OneLineQuestion
        question="In conventional reservoir, from what rock the hydrocarbon is extracted"
        answer="Trap rock"
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Unconventional Reservoir is easy to extract"
          answer={false}
        />
        <TrueOrFalse
          question="Unconventional Reservoir is difficult to extract"
          answer={true}
        />
        <TrueOrFalse
          question="Conventional Reservoir is difficult to extract"
          answer={false}
        />
        <TrueOrFalse
          question="Conventional Reservoir is easy to extract"
          answer={true}
        />
      </JumbleQuestions>
      <JumbleQuestions>
        <OneLineQuestion
          question="What is primary migration"
          answer="Movement of petroleum from source rock toward reservoir rock"
        />
        <OneLineQuestion
          question="What is secondary migration"
          answer="Movement of petroleum from coarse grained carrier bed to a reservoir rock"
        />
      </JumbleQuestions>
      <JumbleQuestions>
        <MultipleInputQuestion
          question="What are types of unconventional resources"
          answer={[
            "Low perm oil",
            "Tight gas sands",
            "Gas shales",
            "Heavy oil",
            "Coal gas",
            "Gas hydrates",
            "Oil shales",
          ]}
        />
        <MultipleInputQuestion
          question="What are types of conventional resources"
          answer={["High Quality", "Medium quality"]}
        />
      </JumbleQuestions>
      <JumbleQuestions>
        <OneLineQuestion
          question="Explain conventional resources"
          answer="Resources that can be produced at economic flow rates or that produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
        />
        <OneLineQuestion
          question="Explain unconventional resources"
          answer="Resources that cannot be produced at economic flow rates or do not produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
        />
      </JumbleQuestions>
      <OneLineQuestion
        question="How many barrels are in Giant oil field"
        answer="500 million barrels to 5 billion barrels"
      />
      <OneLineQuestion
        question="How many barrels are in Supergiant oil field"
        answer="More than 5 billion barrels"
      />
      <OneLineQuestion
        question="How many volume of gas are in giant gas field"
        answer="3 to 30 trillion ft3"
      />
      <OneLineQuestion
        question="How many volume of gas are in Supergiant gas field"
        answer="More than 30 trillion ft3"
      />
    </>
  );
};

export const ForExamITPO = () => {
  return (
    <>
      <Lec3 />
      <Lec4 />
    </>
  );
};
