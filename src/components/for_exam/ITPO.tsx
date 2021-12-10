import React from "react";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/essay2";
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

const Lec14 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are types of blowout preventer"
        answer={["Annular Blowout preventer", "Ram blowout preventer"]}
      />
      <OneLineQuestion
        question="What is Annular blowout preventer"
        answer="It can close around the drill string, casing or a non cylindrical object such as kelly"
      />
      <MultipleInputQuestion
        question="What are types of Ram blowout preventer"
        answer={["Pipe rams", "Blind rams", "Shear rams", "Blind shear rams"]}
      />
      <FillInTheBlanks
        question={[
          "Pipe rams close around a",
          ", restricting flow in the",
          "between the",
          "of the",
          "and the",
          ", but do not",
          "flow within the",
          "",
        ]}
        answer={[
          "drill pipe",
          "annulus",
          "outside",
          "drill pipe",
          "wellbore",
          "obstruct",
          "drill pipe",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Blind rams do not have",
          "for",
          ". It can",
          "the well when the well does not contain a",
          "or other",
          "and ",
          "it",
        ]}
        answer={[
          "Opening",
          "tubing",
          "close",
          "drill string",
          "tubing",
          "seal",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Blind shear rams are intended to",
          "a",
          "even when the bore is occupied by a ",
          ", by",
          "through the",
          "as the rams",
          "the",
          "",
        ]}
        answer={[
          "seal",
          "wellbore",
          "drill string",
          "cutting",
          "drill string",
          "close off",
          "well",
        ]}
      />
      <FillInTheBlanks
        question={["Shear rams only", "pipe not", "it"]}
        answer={["Cut", "seal"]}
      />
      <OneLineQuestion
        question="What is well spacing"
        answer="Distance between well and the area drained by a well"
      />
      <OneLineQuestion
        question={[
          "At the initial phase of drilling the pore pressure will be",
          "",
        ]}
        answer="High"
      />

      <OneLineQuestion
        question="What happens in primary recovery mechanism"
        answer="The flow of oil into the wellbore is due to natural energy within the reservoir"
      />
      <OneLineQuestion
        question="What is injection well"
        answer="A well used to inject water or gas to improve performance of reservoir"
      />
      <OneLineQuestion
        question="What happens in secondary recovery mechanism"
        answer="We drill injection wells between production wells or convert some existing production wells to injection well and inject immiscible water or gas to increase the pore pressure to increase production of well"
      />
      <OneLineQuestion
        question="What is another name for tertiary recovery mechanism"
        answer="Enhanced oil recovery"
      />
      <OneLineQuestion
        question="What happens in tertiary recovery mechanism"
        answer="Through injection wells we inject chemicals which alter properties of rocks or inject miscible gas to increase the production of well"
      />
      <OneLineQuestion
        question="What is Infill drilling"
        answer="If additional wells are needed to adequately drain a reservoir more wells can be drilled in the space between existing wells this is called infill drilling"
      />
      <OneLineQuestion
        question="What is angle of inclination"
        answer="Angle between axis of well and vertical axis"
      />
      <OneLineQuestion
        question="If the angle of inclination of well is 0 - 60 then what type of well is this"
        answer="Directional well"
      />
      <OneLineQuestion
        question="What is directional well"
        answer="Angle of inclination of well is 0 - 60"
      />
      <OneLineQuestion
        question="If the angle of inclination of well is 60 - 89 then what type of well is this"
        answer="Highly deviated well"
      />
      <OneLineQuestion
        question="What is highly deviated well"
        answer="Angle of inclination of well is 60 - 89"
      />
      <OneLineQuestion
        question="If the angle of inclination of well is more than 90 then what type of well is this"
        answer="Horizontal well"
      />
      <OneLineQuestion
        question="What is horizontal well"
        answer="Angle of inclination of well is more than 90"
      />
      <OneLineQuestion
        question="What is slant well"
        answer="Well whose angle of inclination from surface is not 0"
      />
      <OneLineQuestion
        question="What is kick off point"
        answer="Location in a vertical wellbore or inclined section of a slant well where directional drilling operation starts"
      />
      <MultipleInputQuestion
        question="What are types of directional well"
        answer={["J curve well", "S curve well"]}
      />
      <MultipleInputQuestion
        question="What are types of Horizontal well"
        answer={["Short radius", "Medium radius", "Long radius"]}
      />
    </>
  );
};

const Lec15 = () => {
  return (
    <>
      <Essay2 question="Write formula for Stock tank oil in place">
        <FillInTheBlanks
          question={["S.T.O.I.P = ", "(", "/", ") (", "-", ")"]}
          answer={["7758", "A h phi", "Boi", "1", "Sw"]}
        />
        <OneLineQuestion question={["A =>", ""]} answer="Area" />
        <OneLineQuestion question={["h =>", ""]} answer="height" />
        <OneLineQuestion question={["phi =>", ""]} answer="Porosity" />
        <OneLineQuestion
          question={["Boi =>"]}
          answer="Oil formation volume factor"
        />
        <OneLineQuestion question={["Sw =>"]} answer="Saturation of water" />
      </Essay2>
      <MultipleInputQuestion
        question="What is formation evaluation used for"
        answer={[
          "To establish the presence of potential reservoir rock",
          "To determine the ability of wellbore to produce petroleum economically",
        ]}
      />
      <MultipleInputQuestion
        question="What are methods used in formation evaluation"
        answer={["Direct method", "Indirect method"]}
      />
      <MultipleInputQuestion
        question="What are direct methods used in formation evaluation"
        answer={[
          "Core Analysis",
          "Fluid Analysis",
          "Mud logging",
          "Drill cuttings description",
        ]}
      />
      <MultipleInputQuestion
        question="What are indirect methods used in formation evaluation"
        answer={[
          "Measurement while drilling",
          "Logging while drilling",
          "Wireline logging",
          "Formation flow test",
        ]}
      />
      <OneLineQuestion
        question="What is logging"
        answer="Record of parameters with respect to depth"
      />
      <OneLineQuestion
        question="What is well log"
        answer="Records of physical, chemical and other petrophysical properties of rock and lithological units in the subsurface"
      />
    </>
  );
};

const Lec16 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is whole core"
        answer="Very long representation of the formation"
      />
      <OneLineQuestion
        question="What is core plug"
        answer="Very small representation of whole core"
      />
      <Essay2 question="How does core sample are collected">
        <FillInTheBlanks
          question={["", "are obtained by", "the", "with", ""]}
          answer={["Core samples", "replacing", "drill bit", "coring bit"]}
        />
        <FillInTheBlanks
          question={[
            "The ",
            "",
            "into the rock and",
            "a",
            "volume of rock through the",
            "in the bit",
          ]}
          answer={["coring bit", "drills", "captures", "cylindrical", "hole"]}
        />
        <FillInTheBlanks
          question={[
            "The rock sample is collected in a",
            "in the",
            "portion of the",
            "",
          ]}
          answer={["core barrel", "lower", "bottom hole assembly"]}
        />
      </Essay2>
      <JumbleQuestions>
        <TrueOrFalse question="Process of coring is expensive" answer={true} />
        <TrueOrFalse
          question="Process of coring is inexpensive"
          answer={false}
        />
        <TrueOrFalse
          question="Process of coring is done few times"
          answer={true}
        />
        <TrueOrFalse
          question="Process of coring is done lot of times"
          answer={false}
        />
      </JumbleQuestions>
      <MultipleInputQuestion
        question="What are types of tests can be conducted on core plug"
        answer={["Routine Core Analysis", "Special Core Analysis"]}
      />
      <Essay2 question="Write about Routine Analysis">
        <OneLineQuestion
          question="Why do we not examine core for water saturation in Routine Analysis"
          answer="Properties of core would have changed when it reaches surface therefore water saturation will not be a true value"
        />
        <FillInTheBlanks
          question={[
            "So the first step would be",
            "the",
            "out of",
            "and",
            ", leaving only",
            "in",
            "",
          ]}
          answer={["cleaning", "core", "oil", "gas", "air", "pore spaces"]}
        />
        <FillInTheBlanks
          question={["Then we measure both", "and", ""]}
          answer={["Porosity", "Absolute Permeability"]}
        />
      </Essay2>
      <OneLineQuestion
        question="How do we collect rock for special core Analysis"
        answer={
          "In a high pressure and high temperature container where the properties of rock will be preserved"
        }
      />
      <MultipleInputQuestion
        question="What can we measure from special core Analysis"
        answer={["Effective Permeability", "Oil Saturation"]}
      />
      <MultipleInputQuestion
        question="What parameters are recorded in mud logging"
        answer={[
          "Rate of penetration",
          "Mud weight",
          "Total gas collected in chamber",
          "Composition of gas",
        ]}
      />
      <MultipleInputQuestion
        question="Why do we do mud logging"
        answer={[
          "To find composition of gas",
          "To find type of formation",
          "To find trace of hydrocarbon",
        ]}
      />
      <MultipleInputQuestion
        question="What does Measurement while drilling measures"
        answer={[
          "Inclination of well",
          "Weight on bit",
          "Rate of penetration",
          "Torque",
        ]}
      />
      <MultipleInputQuestion
        question="What does Logging while drilling measure"
        answer={["Lithology"]}
      />
    </>
  );
};

const Lec17 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are three stages of logging"
        answer={[
          "Open hole logging",
          "Cased hole logging",
          "Production logging",
        ]}
      />
      <OneLineQuestion
        question="What is reason behind the name of wireline logging"
        answer="The logging tool is attached and lowered into well by a wireline"
      />
      <MultipleInputQuestion
        question="What properties are measured by well log"
        answer={[
          "Natural gamma radiation",
          "Spontaneous potential",
          "Speed of sound",
          "Neutron porosity",
          "Resistivity",
          "Nuclear magnetic resonance",
        ]}
      />
      <MultipleInputQuestion
        question="What are unknowns in STOIP equation that can be found from wireline logging"
        answer={["Thickness of payzone", "Porosity", "Saturation of water"]}
      />
      <MultipleInputQuestion
        question="What are types of logs"
        answer={[
          "Gamma Ray log",
          "Sonic log",
          "Density log",
          "Caliper log",
          "Spontaneous Potential log",
          "Resistivity log",
        ]}
      />
    </>
  );
};

const Lec18 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are primary drive mechanism"
        answer={[
          "Rock and liquid expansion drive",
          "Depletion drive",
          "Gas cap drive",
          "Water drive",
          "Gravity drainage drive",
          "Combination drive",
        ]}
      />
      <MultipleInputQuestion
        question="Primary drive mechanism can provide information about what reservoir performance characteristic"
        answer={[
          "Ultimate recovery factor",
          "Pressure decline rate",
          "Gas oil ratio",
          "Water production",
        ]}
      />
      <OneLineQuestion
        question="What is bubble point pressure"
        answer="Pressure below which dissolved gas became free gas"
      />
      <MultipleInputQuestion
        question="What are types of reservoir based on bubble point pressure"
        answer={["Under saturated Reservoir", "Saturated Reservoir"]}
      />
      <OneLineQuestion
        question="What is undersaturated reservoir"
        answer="Reservoir whose pore pressure is greater than bubble point pressure"
      />
      <OneLineQuestion
        question="What is saturated reservoir"
        answer="Reservoir whose pore pressure is equal or less than bubble point pressure"
      />
      <OneLineQuestion
        question="What is water drive mechanism"
        answer="Water moving into the pore spaces originally occupied by oil replacing the oil and displacing it to the producing wells"
      />
      <Essay2 question="Write about reservoir characteristic in Water drive mechanism">
        <OneLineQuestion
          question="Reservoir Pressure"
          answer="Declines very slowly"
        />
        <OneLineQuestion question="Gas oil ratio" answer="Remains low" />
        <OneLineQuestion
          question="Water production"
          answer="Early excess water production"
        />
        <OneLineQuestion question="Oil recovery" answer="35 to 75%" />
      </Essay2>
      <OneLineQuestion
        question="What is conate water"
        answer="Small amount of water that got stuck in oil or gas zone"
      />
      <OneLineQuestion
        question="What is Rock and liquid expansion"
        answer="With the decrease in formation pressure there will be expansion of individual rock grains and formation compaction leading to decrease in pore volume causing the oil to push out"
      />
      <OneLineQuestion
        question="What is ultimate oil recovery in Rock and liquid expansion"
        answer="Less than 5%"
      />
      <OneLineQuestion
        question="What is least efficient driving mechanism"
        answer="Rock and liquid expansion"
      />
      <MultipleInputQuestion
        question="What are different names for depletion drive mechanism"
        answer={[
          "Solution gas drive",
          "Dissolved gas drive",
          "Internal gas drive",
        ]}
      />
      <OneLineQuestion
        question="What is depletion drive mechanism"
        answer="As pressure drops below bubble point pressure gas bubbles are liberated, these bubbles expand and force the oil out of the pore spaces"
      />
      <OneLineQuestion
        question="What is ultimate oil recovery in depletion drive mechanism"
        answer="Less than 5% to 30%"
      />
      <OneLineQuestion
        question="What is gas cap drive"
        answer="With the decrease in formation pressure the gas zone pushes oil zone into producing wells"
      />
      <OneLineQuestion
        question="What is expected oil recovery in gas cap drive"
        answer="20 to 40%"
      />
      <OneLineQuestion
        question="What is gravity drainage drive"
        answer="Due to the difference between densities in reservoir fluids the oil is displaced toward producing wells"
      />
      <OneLineQuestion
        question="What is oil recovery in Gravity drainage method"
        answer="5 to 30%"
      />
      <OneLineQuestion
        question="What is combination drive mechanism"
        answer="Combination of one or more drive mechanism"
      />
      <OneLineQuestion
        question="What is material balance equation"
        answer="Tool used by reservoir engineer for interpreting and predicting reservoir performance"
      />
      <MultipleInputQuestion
        question="What is the use of material balance equation"
        answer={[
          "Predict initial hydrocarbon",
          "Predict future reservoir performance",
          "Predict ultimate hydrocarbon recovery ",
        ]}
      />
    </>
  );
};

const Lec19 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is artificial lift"
        answer="Artificially lifting oil from the bottom of wellbore to surface"
      />
      <MultipleInputQuestion
        question="What are methods of artificial lift"
        answer={["Sucker rod pump", "Gas lift"]}
      />
      <OneLineQuestion
        question="What is secondary recovery mechanism"
        answer="We drill injection wells between production wells or convert some existing production wells to injection well and inject immiscible water or gas to increase the pore pressure to increase production of well"
      />
      <MultipleInputQuestion
        question="What is purpose of secondary recovery mechanism"
        answer={[
          "To maintain reservoir pressure",
          "To displace hydrocarbons toward the producing wells",
        ]}
      />
      <FillInTheBlanks
        question={[
          "In secondary drive mechanism we inject water on",
          "and gas on",
          "",
        ]}
        answer={["Production zone", "gas cap"]}
      />
      <MultipleInputQuestion
        question="What are methods of secondary recovery mechansism"
        answer={["Gas injection", "Water flooding"]}
      />
      <FillInTheBlanks
        question="When does secondary recovery mechanism reaches its limit"
        answer={[
          "Injected fluid is produced in huge amounts from the production wells",
          "Production is not economical",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The successive use of primary recovery and secondary recovery in an oil reservoir produces about",
          "to",
          "of the original oil in place",
        ]}
        answer={["15%", "40%"]}
      />

      <OneLineQuestion
        question="What is Improved Oil Recovery (IOR)"
        answer="Any methods used to increase the production of oil after primary recovery"
      />
      <MultipleInputQuestion
        question="What methods are included in IOR"
        answer={[
          "Secondary recovery mechanism",
          "Tertiary recovery mechanism",
          "Infill drilling",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Enhanced oil recovery functions by altering",
          "of the oil itself to make it easier to",
          "",
        ]}
        answer={["Chemical composition", "extract"]}
      />
      <MultipleInputQuestion
        question="What are different methods of tertiary recovery"
        answer={["Thermal recovery", "Gas injection", "Chemical injection"]}
      />
      <OneLineQuestion
        question="What is thermal recovery"
        answer="Introduces heat through injection of steam to lower the viscosity"
      />
      <MultipleInputQuestion
        question="How does gas injection works"
        answer={[
          "Injected gas expands to push oil to a producing well",
          "Injected gas dissolve in the oil to lower viscosity and improve flow rate",
        ]}
      />
      <MultipleInputQuestion
        question="What are the gases used in gas injection"
        answer={["Natural gas", "Nitrogen", "Carbon dioxide"]}
      />
      <MultipleInputQuestion
        question="How does chemical injection works"
        answer={[
          "Uses long chained molecules called polymers to increase the effectiveness of water flooding",
          "Uses detergent like surfactants to lower the surface tension that prevents oil droplets from moving",
        ]}
      />
    </>
  );
};

const Lec20 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is well stimulation"
        answer="Process of solving a problem in formation to improve performance"
      />
      <MultipleInputQuestion
        question="What are methods of well stimulation "
        answer={["Hydraulic fracturing", "Acid Fracturing"]}
      />
      <OneLineQuestion
        question="In what type of rock hydraulic fracturing is effective"
        answer="Sandstone"
      />
      <OneLineQuestion
        question="In what type of rock acid fracturing is effective"
        answer="Carbonate"
      />
      <OneLineQuestion
        question="What is skin"
        answer="Measures degree of damage to formation near to wellbore"
      />
      <OneLineQuestion
        question="What is overbalance"
        answer="Difference of pressure between drilling mud and formation"
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
      <Lec14 />
      <Lec15 />
      <Lec16 />
      <Lec17 />
      <Lec18 />
      <Lec19 />
    </>
  );
};
