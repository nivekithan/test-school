import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
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
            "remnants",
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

const Lec13 = () => {
  return <>{/* <OneLineQuestion /> */}</>;
};

const Sat1 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is fish"
        answer="Any material left or dropped in hole"
      />
      <OneLineQuestion
        question="What is fishing"
        answer="Process of removing fish from the hole"
      />
      <MultipleInputQuestion
        question="What are causes for fishing"
        answer={["Mechanical failure", "Human error", "Formations Behaviour"]}
      />
      <MultipleInputQuestion
        question="What are tools that is used for fishing"
        answer={["Overshot", "Jar"]}
      />
      <OneLineQuestion
        question="What we should do if fishing fails"
        answer="We should cement only section where fish is present and start sidetracking to our target"
      />
      <OneLineQuestion
        question="What is casing"
        answer="Casing is a permanently installed pipe used to line the well hole for pressure containment and prevent collapse during drilling phase"
      />
      <MultipleInputQuestion
        question="What are functions of casing"
        answer={[
          "Maintain borehole stability",
          "Prevent contamination of water",
          "Control well pressure",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of casing"
        answer={[
          "Structural Casing",
          "Conductor casing",
          "Surface casing",
          "Intermediate casing",
          "Production casing",
          "Liner casing",
        ]}
      />

      <FillInTheBlanks
        question={[
          "Structural Casing is the",
          "of",
          ",",
          "pipe installed in wells drilled from",
          "to",
          "very",
          "from subsequent drilling and to resist the",
          "imposed by the",
          "and to help support the",
          "installed on",
          "casing",
        ]}
        answer={[
          "outer string",
          "large diameter",
          "heavy wall",
          "floating installation",
          "isolate",
          "shallow sediments",
          "bending moments",
          "marine riser",
          "wellhead",
          "conductor",
        ]}
      />
      <MultipleInputQuestion
        question="What are functions of structural casing"
        answer={[
          "Isolate very shallow sediments from subsequent drilling",
          "Resist the bending moments imposed by the marine riser",
          "Support the wellhead installed on conductor casing",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Conductor casing is the",
          "and",
          "diameter pipe installed during construction",
        ]}
        answer={["First", "largest"]}
      />
      <FillInTheBlanks
        question={[
          "Conductor casing is inserted into the",
          "and",
          "in place along its",
          "to",
          "",
        ]}
        answer={["surface hole", "cemented", "full length", "ground surface"]}
      />
      <MultipleInputQuestion
        question="What are functions of Conductor casing"
        answer={[
          "Hold back any unconsolidated surface sediments",
          "Isolate shallow ground water from the contents of hole",
          "Provide a circulation for the drilling mud to protect foundation of the platform",
        ]}
      />
      <OneLineQuestion
        question="Where should be surface casing should be placed"
        answer="In competent rock like limestone"
      />
      <OneLineQuestion
        question="Why surface casing should be placed in competent rock"
        answer="To ensure that formation will not fractured at the casing shoe by high mud weight used later in next hole"
      />
      <MultipleInputQuestion
        question="What are functions of surface casing"
        answer={[
          "Prevent caving of weak formation encountered at shallow depths",
          "Enable full mud circulation",
          "Prevent contamination of fresh water sands by drilling mud",
          "Provide Protection against hydrocarbons found at shallow depths",
          "Provide Initial support for blowout preventers",
          "Provide kick resistance for deeper drilling",
          "Provide support for wellhead system and all subsequent casing strings",
        ]}
      />
      <OneLineQuestion
        question="What is production casing"
        answer="It is final length of steel pipe used in wellbore construction"
      />
      <FillInTheBlanks
        question={[
          "Production casing typically runs the entire",
          "of the",
          "and may be",
          "in place all the way to",
          "",
        ]}
        answer={["depth", "well", "cemented", "ground surface"]}
      />
      <MultipleInputQuestion
        question="What are functions of production casing"
        answer={[
          "Pump hydraulic fracturing fluids into producing formation without contacting other formation along the wellbore",
          "Isolate production zones",
          "Provide reservoir control",
          "Permit selective production in multi zones production",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Liner casing is a string of casing that does",
          "reach to the",
          ". It hangs on",
          ", by use of suitable",
          "and",
          "called",
          "",
        ]}
        answer={[
          "not",
          "surface",
          "intermediate casing",
          "packer",
          "slips",
          "liner hanger",
        ]}
      />
      <MultipleInputQuestion
        question="What are advantages of liner casing"
        answer={[
          "Reduce cost",
          "Improve hydraulic performance",
          "Allow use of larger tubing above liner top",
        ]}
      />

      <OneLineQuestion
        question="What is packer"
        answer="Device used to isolate one zone from another"
      />
      <OneLineQuestion
        question="What is well completion"
        answer="Preparing well for production operations"
      />
      <FillInTheBlanks
        question="What are steps followed in well completion"
        answer={["Lowering tubing", "Placing packer", "Perforation"]}
      />

      <MultipleInputQuestion
        question="What are different types of Well completion"
        answer={["Open hole completion", "Cased hole completion"]}
      />
      <MultipleInputQuestion
        question="What are examples of cased hole completion"
        answer={["Liner completions"]}
      />
      <MultipleInputQuestion
        question="What are different types of Liner completions"
        answer={["Screen liner completions", "Perforated Liner completion"]}
      />
      <OneLineQuestion
        question="Explain screen liner completion"
        answer="Casing is set above producing zone and an uncemented screen and liner assembly is installed across pay zone"
      />
      <OneLineQuestion
        question="Explain perforated liner completion"
        answer="Casing is set above the producing zone and liner assembly is installed across the pay zone and cemented in place. The liner is then perforated selectively for production"
      />
      <OneLineQuestion
        question="What is wellhead"
        answer="It is a component installed at the surface of an oil or gas well that provides the structural and pressure containing interface for the drilling and production equipment"
      />

      <MultipleInputQuestion
        question="What are functions of wellhead"
        answer={[
          "Provides a means of casing suspension",
          "Provides a means of tubing suspension",
          "Provides a means of pressure sealing and isolation",
          "Provides pressure monitoring and pumping access to annuli between different casing",
          "Provides a means of attaching blowout preventer during drilling",
          "Provides a means of attaching christmas tree for production operations",
          "Provides a means of well access",
          "Provides a means of attaching well pump",
        ]}
      />

      <OneLineQuestion
        question="What is tubing"
        answer="Tubing is removable pipe installed in the well through which formation fluids pass"
      />

      <OneLineQuestion
        question="What is christmas tree is used for"
        answer="To control flow rate of formation fluids"
      />
    </>
  );
};

export const ForExamITPO = () => {
  return (
    <>
      <Lec3 />
      <Lec4 />
      <Lec13 />
      <Sat1 />
    </>
  );
};
