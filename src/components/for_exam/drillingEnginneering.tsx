import React from "react";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/essay2";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { TrueOrFalse } from "../question/trueOrFalse";

const RigComponent = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are different subsystem in Rig componenet"
        answer={[
          "Power system",
          "Hoisting system",
          "Circulating system",
          "Rotary system",
          "Well control system",
        ]}
      />
      <Essay2 question="Describe Power system">
        <FillInTheBlanks
          question={[
            "Most",
            "are required to",
            "in",
            "locations where a",
            "is often",
            "",
          ]}
          answer={[
            "drilling rigs",
            "operate",
            "remote",
            "power supply",
            "not available",
          ]}
        />
        <FillInTheBlanks
          question={["The", "are driven by", "powered", "called", ""]}
          answer={[
            "electrical power generators",
            "diesel",
            "internal combustion engine",
            "Prime Mover",
          ]}
        />
        <MultipleInputQuestion
          question={[
            "",
            "is then supplied to",
            "connected to the",
            ",",
            "and",
            "",
          ]}
          answer={[
            "Power",
            "electric motor",
            "drawworks",
            "rotary table",
            "mud pumps",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is hoisting system"
        answer="Large pulley system that is used to lower and raise equipment into and out of the well"
      />
      <MultipleInputQuestion
        question="What are componenets of hoisting system"
        answer={[
          "Crown block",
          "Dead line",
          "Fast line",
          "Travelling block",
          "Drawworks drum",
          "Drawworks",
          "Drilling hook",
          "Elevators",
          "Dead line anchor",
          "Reserve drum",
        ]}
      />
      <Essay2 question="Write about drawworks Drawworks">
        <FillInTheBlanks
          question={["The drawworks consist of", "around which", "is", ""]}
          answer={["large revolving drum", "drilling line", "spooled"]}
        />  
        <FillInTheBlanks
          question={["", "is connected to", "and", ""]}
          answer={["Drawworks drum", "electric motor", "gearing system"]}
        />
        <FillInTheBlanks
          question={[
            "The",
            "controls the drawworks with a",
            "and",
            "while",
            "and a",
            "when running",
            "",
          ]}
          answer={[
            "driller",
            "clutch",
            "gearing system",
            "lifting equipment out of the well",
            "break",
            "equipment into the well",
          ]}
        />
      </Essay2>
      <Essay2 question="Write about drilling line">
        <FillInTheBlanks
          question={[
            "The drilling line is",
            "over a set of",
            "in the",
            "known as",
            "and to another set of",
            "known as",
            "",
          ]}
          answer={[
            "reeved",
            "sheaves",
            "top of derrick",
            "Crown block",
            "sheaves",
            "travelling block",
          ]}
        />
        <FillInTheBlanks
          question={[
            "One of end of drilling line is",
            "onto the drawworks and is called",
            "",
          ]}
          answer={["wound", "fast line"]}
        />
        <FillInTheBlanks
          question={[
            "One end of drilling line is",
            "to an",
            "somewhere",
            ", Since this line",
            "it is called",
            "",
          ]}
          answer={[
            "secured",
            "anchor point",
            "below the rig floor",
            "does not move",
            "dead line",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is drilling hook"
        answer="Large hook with snap shut locking device which is suspended from travelling block used to suspend drill string"
      />
      <OneLineQuestion
        question="What is elevators"
        answer="Set of clamps used when running or pulling the drill string or casing into or out of hole"
      />
      <MultipleInputQuestion
        question="What does load supported by hoisting system depends on"
        answer={[
          "Tensile strength of drilling line",
          "Number of times drilling line is reeved through the blocks",
        ]}
      />
      <OneLineQuestion
        question="What is the function of Circulating system"
        answer="Circulate drilling fluid through the drill string and up the annulus carrying the drilled cutting from the bottom of hole to surface"
      />
      <MultipleInputQuestion
        question="What are main componenets of Circulating system"
        answer={[
          "Mud pumps",
          "Stand pipe",
          "Shale Shakers",
          "Mud pits",
          "Suction line",
          "flow line",
        ]}
      />
      <Essay2 question="What happens in Circulating system">
        <FillInTheBlanks
          question={["The mud is", "and", "in the", "and then", "by", ""]}
          answer={[
            "mixed",
            "conditioned",
            "mud pits",
            "circulated down the hole",
            "mud pump",
          ]}
        />
        <FillInTheBlanks
          question={[
            "The mud is them pumped through the",
            ",",
            ",",
            ",",
            "and",
            "",
          ]}
          answer={[
            "stand pipe",
            "kelly hose",
            "swivel",
            "kelly",
            "down the drill string",
          ]}
        />
        <FillInTheBlanks
          question={[
            "On surface the mud is directed from",
            "through the",
            "and before it",
            "the",
            "the",
            "by the",
            "",
          ]}
          answer={[
            "annulus",
            "flow line",
            "re enters",
            "mud pits",
            "drilled cutting are removed from drilling mud",
            "shale shakers",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is the function of Rotary system"
        answer="Rotate the drill string and the drill bit on the bottom of hole"
      />
      <MultipleInputQuestion
        question="What are main components of rotary system"
        answer={[
          "Swivel",
          "kelly bushing",
          "Rotary bushing",
          "Rotary table",
          "Slips",
          "Kelly",
        ]}
      />
      <MultipleInputQuestion
        question="What are the functions of well control system"
        answer={[
          "Prevent uncontrolled flow of formation fluids from the wellbore",
        ]}
      />
      <MultipleInputQuestion
        question="How well control system is designed"
        answer={[
          "Detect a kick",
          "Close in the well at surface",
          "Remove formation fluid which has flowed into the well",
        ]}
      />
      <MultipleInputQuestion
        question="What are components of well control system"
        answer={["Annular blowout preventer", "Ram blowout preventer"]}
      />
    </>
  );
};

const Lec4 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are the functions of Drilling mud"
        answer={[
          "Bottomhole cleaning",
          "Cuttings transport",
          "Borehole wall support",
          "Balancing formation pressure",
          "Cooling the bit",
          "Hydraulic power transmission",
          "Data transmission",
          "Reducing friction",
          "Corrosion protection",
        ]}
      />
      <MultipleInputQuestion
        question="What are different types of drilling mud"
        answer={["Water based mud", "Oil based mud"]}
      />
      <MultipleInputQuestion
        question="What are criteria for drilling fluid selection"
        answer={[
          "Pore pressure to establish the minimum and maximum mud weight",
          "Offset well data from adjacent wells",
          "Geological plot of the prognosed lithology",
          "Casing design programme and casing seat depths",
          "Basic mud properties for each open hole section before it is cased off",
          "Restriction that might be enforced in the area",
        ]}
      />
      <MultipleInputQuestion
        question="What will happen if the drilled cuttings are not removed from borehole"
        answer={[
          "Reduction in Drilling Efficiency",
          "Changes in Rheological properties of fluids",
        ]}
      />
      <MultipleInputQuestion
        question="What are the functions of Drilling fluids regarding removing cuttings"
        answer={[
          "Carry the cuttings to surface while circulating",
          "Suspend the cuttings while not circulating",
          "Drop the cuttings out of suspension at surface",
        ]}
      />
      <MultipleInputQuestion
        question={[
          "The carrying capacity of the mud depends on the",
          ",",
          "and",
          "of the mud",
        ]}
        answer={["Annular velocity", "Density", "Viscosity"]}
      />
      <FillInTheBlanks
        question={[
          "Ability to suspend the cuttings depends on",
          "properties of the mud",
        ]}
        answer={["Thixotropic"]}
      />
      <MultipleInputQuestion
        question={[
          "The drilled solids are removed at the surface by devices such as",
          ",",
          "and",
          "",
        ]}
        answer={["Shale Shakers", "Desanders", "Desilters"]}
      />
      <TrueOrFalse
        question="It is ecnomically feasible to remove all the drilled cuttings before recirculating the mud"
        answer={false}
      />
      <OneLineQuestion
        question="Why less hydrostatic pressure exerted by mud is not desirable"
        answer="Can cause influx of formation fluids into wellbore"
      />
      <OneLineQuestion
        question="Why high hydrostatic pressure exerted by mud is not desirable"
        answer="Can cause formation to fracture"
      />
      <OneLineQuestion
        question="What is lost circulation"
        answer="Flow of mud into the formation while drilling"
      />
      <FillInTheBlanks
        question={[
          "Mud weight has to be selected so that it exceeds the",
          "pressure but does not exceed",
          "pressure of the formation being penetrated",
        ]}
        answer={["Pore", "Fracture"]}
      />
      <MultipleInputQuestion
        question={[
          "",
          "and",
          "is added to viscosified mud as weighting material",
        ]}
        answer={["Barite", "Haemitite"]}
      />
      <Essay
        question="Why high density material are used as weighting material"
        points={[
          [
            "Material such as",
            "and",
            "with high density are used because then only",
            "of these minerals needed to be added to the mud to",
            "the overall",
            "of the mud",
          ],
          [
            "As a result the impact of weighting material on the",
            "properties of the mud will be",
            "",
          ],
        ]}
        answer={[
          ["Barite", "Haemitite", "lower volume", "increase", "density"],
          ["Rheological", "minimised"],
        ]}
      />
      <OneLineQuestion
        question="What is filter cake"
        answer="Layer of concentrated solids from the drilling mud formed during natural filtration on the sides of borehole"
      />
      <MultipleInputQuestion
        question="What are different names for filter cake"
        answer={["Wall cake", "Mud cake"]}
      />
      <OneLineQuestion
        question="What is filtrate"
        answer="Fluid flowed through filter"
      />
      <MultipleInputQuestion
        question="Loss of mud can result in"
        answer={[
          "Deposition of sand particles",
          "Hydration of clays in pore spaces",
        ]}
      />
      <MultipleInputQuestion
        question="Lose of filtrate can cause"
        answer={["Hydration of clays in pore spaces"]}
      />
      <OneLineQuestion
        question="What does hydration of clays leads to"
        answer="Reduction of permeability"
      />
      <FillInTheBlanks
        question={["The filter cake can become so thick that it may cause", ""]}
        answer={["Stuck pipe"]}
      />
      <MultipleInputQuestion
        question={["Ideal filter cake is", "and", ""]}
        answer={["Thin", "Impermeable"]}
      />
      <MultipleInputQuestion
        question={[
          "Pressure in the wellbore will be equal to P =",
          "x",
          "x",
          "",
        ]}
        answer={["0.052", "MW", "TVD"]}
      />
      <OneLineQuestion
        question={[
          "Data from",
          "will be useful in predicting borehole stability problems",
        ]}
        answer="Adjacent wells"
      />
      <OneLineQuestion
        question={[
          "",
          "is one of the most common problems in drilling operations",
        ]}
        answer="Shale Instability"
      />
      <MultipleInputQuestion
        question="What are the reasons for shale instability"
        answer={[
          "Pressure Differential between bottomhole pressure and the pore pressure",
          "Hydration of the clays within shale by mud filtrate containing water",
        ]}
      />
      <OneLineQuestion
        question="How to overcome the pressure differential between bottomhole pressure and the pore pressure"
        answer="Increasing the mudweight"
      />
      <MultipleInputQuestion
        question="How to overcome the hydration of clay"
        answer={[
          "Using non water based muds",
          "Treating mud with chemicals to reduce the ability of water to hydrate the clays",
        ]}
      />
      <OneLineQuestion
        question="What is inhibited mud"
        answer="Mud treated with chemicals to reduce the ability of water to hydrate the clays"
      />
      <Essay
        question="Why it is important to cool the bit"
        points={[
          [
            "The rock cutting process will generate a great deal of",
            "at the",
            "",
          ],
          ["Unless the", "is", "it will", "and quickly", "out"],
        ]}
        answer={[
          ["heat", "bit"],
          ["bit", "cooled", "overheat", "wear"],
        ]}
      />
      <FillInTheBlanks
        question={["The power of mud pumps will be expended in", ""]}
        answer={["Frictional Pressure"]}
      />
      <FillInTheBlanks
        question={[
          "The efficiency of drilling process can be significantly improved if approximately",
          "of power is expended at the",
          "",
        ]}
        answer={["65%", "bit"]}
      />
      <MultipleInputQuestion
        question="What are factors affecting the pressure loss in the system"
        answer={[
          "Geometry of system",
          "viscosity",
          "mud density",
          "yield point",
        ]}
      />
      <MultipleInputQuestion
        question="How can the loss of pressure can be reduced"
        answer={[
          "Changing the size of nozzles in the bit",
          "Changing flowrate through the system",
        ]}
      />
    </>
  );
};

export const ForExamDrillingEnginneering = () => {
  return (
    <>
      <RigComponent />
      <Lec4 />
    </>
  );
};
