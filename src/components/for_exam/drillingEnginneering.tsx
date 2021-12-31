import React from "react";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/essay2";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { TrueOrFalse } from "../question/trueOrFalse";

// const RigComponent = () => {
//   return (
//     <>
//       <MultipleInputQuestion
//         question="What are different subsystem in Rig componenet"
//         answer={[
//           "Power system",
//           "Hoisting system",
//           "Circulating system",
//           "Rotary system",
//           "Well control system",
//         ]}
//       />
//       <Essay2 question="Describe Power system">
//         <FillInTheBlanks
//           question={[
//             "Most",
//             "are required to",
//             "in",
//             "locations where a",
//             "is often",
//             "",
//           ]}
//           answer={[
//             "drilling rigs",
//             "operate",
//             "remote",
//             "power supply",
//             "not available",
//           ]}
//         />
//         <FillInTheBlanks
//           question={["The", "are driven by", "powered", "called", ""]}
//           answer={[
//             "electrical power generators",
//             "diesel",
//             "internal combustion engine",
//             "Prime Mover",
//           ]}
//         />
//         <MultipleInputQuestion
//           question={[
//             "",
//             "is then supplied to",
//             "connected to the",
//             ",",
//             "and",
//             "",
//           ]}
//           answer={[
//             "Power",
//             "electric motor",
//             "drawworks",
//             "rotary table",
//             "mud pumps",
//           ]}
//         />
//       </Essay2>
//       <OneLineQuestion
//         question="What is hoisting system"
//         answer="Large pulley system that is used to lower and raise equipment into and out of the well"
//       />
//       <MultipleInputQuestion
//         question="What are componenets of hoisting system"
//         answer={[
//           "Crown block",
//           "Dead line",
//           "Fast line",
//           "Travelling block",
//           "Drawworks drum",
//           "Drawworks",
//           "Drilling hook",
//           "Elevators",
//           "Dead line anchor",
//           "Reserve drum",
//         ]}
//       />
//       <Essay2 question="Write about drawworks Drawworks">
//         <FillInTheBlanks
//           question={["The drawworks consist of", "around which", "is", ""]}
//           answer={["large revolving drum", "drilling line", "spooled"]}
//         />
//         <FillInTheBlanks
//           question={["", "is connected to", "and", ""]}
//           answer={["Drawworks drum", "electric motor", "gearing system"]}
//         />
//         <FillInTheBlanks
//           question={[
//             "The",
//             "controls the drawworks with a",
//             "and",
//             "while",
//             "and a",
//             "when running",
//             "",
//           ]}
//           answer={[
//             "driller",
//             "clutch",
//             "gearing system",
//             "lifting equipment out of the well",
//             "break",
//             "equipment into the well",
//           ]}
//         />
//       </Essay2>
//       <Essay2 question="Write about drilling line">
//         <FillInTheBlanks
//           question={[
//             "The drilling line is",
//             "over a set of",
//             "in the",
//             "known as",
//             "and to another set of",
//             "known as",
//             "",
//           ]}
//           answer={[
//             "reeved",
//             "sheaves",
//             "top of derrick",
//             "Crown block",
//             "sheaves",
//             "travelling block",
//           ]}
//         />
//         <FillInTheBlanks
//           question={[
//             "One of end of drilling line is",
//             "onto the drawworks and is called",
//             "",
//           ]}
//           answer={["wound", "fast line"]}
//         />
//         <FillInTheBlanks
//           question={[
//             "One end of drilling line is",
//             "to an",
//             "somewhere",
//             ", Since this line",
//             "it is called",
//             "",
//           ]}
//           answer={[
//             "secured",
//             "anchor point",
//             "below the rig floor",
//             "does not move",
//             "dead line",
//           ]}
//         />
//       </Essay2>
//       <OneLineQuestion
//         question="What is drilling hook"
//         answer="Large hook with snap shut locking device which is suspended from travelling block used to suspend drill string"
//       />
//       <OneLineQuestion
//         question="What is elevators"
//         answer="Set of clamps used when running or pulling the drill string or casing into or out of hole"
//       />
//       <MultipleInputQuestion
//         question="What does load supported by hoisting system depends on"
//         answer={[
//           "Tensile strength of drilling line",
//           "Number of times drilling line is reeved through the blocks",
//         ]}
//       />
//       <OneLineQuestion
//         question="What is the function of Circulating system"
//         answer="Circulate drilling fluid through the drill string and up the annulus carrying the drilled cutting from the bottom of hole to surface"
//       />
//       <MultipleInputQuestion
//         question="What are main componenets of Circulating system"
//         answer={[
//           "Mud pumps",
//           "Stand pipe",
//           "Shale Shakers",
//           "Mud pits",
//           "Suction line",
//           "flow line",
//         ]}
//       />
//       <Essay2 question="What happens in Circulating system">
//         <FillInTheBlanks
//           question={["The mud is", "and", "in the", "and then", "by", ""]}
//           answer={[
//             "mixed",
//             "conditioned",
//             "mud pits",
//             "circulated down the hole",
//             "mud pump",
//           ]}
//         />
//         <FillInTheBlanks
//           question={[
//             "The mud is them pumped through the",
//             ",",
//             ",",
//             ",",
//             "and",
//             "",
//           ]}
//           answer={[
//             "stand pipe",
//             "kelly hose",
//             "swivel",
//             "kelly",
//             "down the drill string",
//           ]}
//         />
//         <FillInTheBlanks
//           question={[
//             "On surface the mud is directed from",
//             "through the",
//             "and before it",
//             "the",
//             "the",
//             "by the",
//             "",
//           ]}
//           answer={[
//             "annulus",
//             "flow line",
//             "re enters",
//             "mud pits",
//             "drilled cutting are removed from drilling mud",
//             "shale shakers",
//           ]}
//         />
//       </Essay2>
//       <OneLineQuestion
//         question="What is the function of Rotary system"
//         answer="Rotate the drill string and the drill bit on the bottom of hole"
//       />
//       <MultipleInputQuestion
//         question="What are main components of rotary system"
//         answer={[
//           "Swivel",
//           "kelly bushing",
//           "Rotary bushing",
//           "Rotary table",
//           "Slips",
//           "Kelly",
//         ]}
//       />
//       <MultipleInputQuestion
//         question="What are the functions of well control system"
//         answer={[
//           "Prevent uncontrolled flow of formation fluids from the wellbore",
//         ]}
//       />
//       <MultipleInputQuestion
//         question="How well control system is designed"
//         answer={[
//           "Detect a kick",
//           "Close in the well at surface",
//           "Remove formation fluid which has flowed into the well",
//         ]}
//       />
//       <MultipleInputQuestion
//         question="What are components of well control system"
//         answer={["Annular blowout preventer", "Ram blowout preventer"]}
//       />
//     </>
//   );
// };

const Lec4 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are the functions of Drilling mud"
        answer={[
          "Transport cuttings from the wellbore",
          "Prevent influx of formation fluids",
          "Maintain wellbore stability",
          "Cool and lubricate the bit",
          "Transmit hydraulic horsepower to bit",
        ]}
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
      <MultipleInputQuestion
        question="What are types of mud"
        answer={["Oil based mud", "Water based mud", "Gas based mud"]}
      />
      <OneLineQuestion
        question="What is water based mud"
        answer="Water is continuous phase"
      />
      <MultipleInputQuestion
        question={["Water based consist mixture of", ",", "and", ""]}
        answer={["Solids", "liquids", "chemicals"]}
      />
      <OneLineQuestion
        question="What is active solids"
        answer="Solids that react with water and chemical in the mud"
      />
      <OneLineQuestion
        question="What is inactive solids"
        answer="Solids that do not react with water and chemical in mud"
      />
      <OneLineQuestion
        question="What is another name for inactive solids"
        answer="Inert solids"
      />
      <MultipleInputQuestion
        question="How do you classify water based fluids"
        answer={[
          "Non dispersed - Non inhibited",
          "Non dispersed - Inhibited",
          "Dispersed - Non inhibited",
          "Dispersed - Inhibited",
        ]}
      />
      <OneLineQuestion
        question="What is non inhibited fluid"
        answer="Fluid contains no additives to inhibit hole problems"
      />
      <OneLineQuestion
        question="What is inhibited fluid"
        answer="Fluid contains ions which suppress the breakdown of clays"
      />
      <MultipleInputQuestion
        question="How does inhibited fluid suppress the breakdown of clays"
        answer={["Charge association", "Encapsulation"]}
      />
      <MultipleInputQuestion
        question="What are examples of inhibiting ions"
        answer={["Calcium", "Potassium", "Chloride"]}
      />
      <OneLineQuestion
        question="What is dispersed"
        answer="Fluid rely on chemical thinners to control rheological properties"
      />
      <OneLineQuestion
        question="What is non dispersed fluid"
        answer="Clay particle are free to find their own dispersed equilibrium"
      />
      <Essay2 question="What are disadvantage of using water based mud">
        <FillInTheBlanks
          question={["Main disadvantage of using water based is", ""]}
          answer={["Water in the muds cause instability in shales"]}
        />
        <FillInTheBlanks
          question={[
            "",
            "is composed primary of",
            "and instability is largely caused by",
            "by",
            "",
          ]}
          answer={[
            "Shale",
            "clay",
            "hydration of clays",
            "mud containing water",
          ]}
        />
        <FillInTheBlanks
          question={[
            "",
            "are the most common rock types encountered while drilling for",
            "and",
            "and give rise to",
            "than any other",
            "",
          ]}
          answer={[
            "Shale",
            "oil",
            "gas",
            "more problems per meter drilled",
            "type of formation",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is oil based mud"
        answer="Continuous phase is oil"
      />
      <OneLineQuestion
        question="What is invert emulsion mud"
        answer="Water make up large percentage of the volume but oil is still continuous phase"
      />
      <MultipleInputQuestion
        question="What are advantages of oil based bud"
        answer={[
          "Useful in drilling water sensitive formation",
          "Useful in drilling high angle wells",
        ]}
      />
      <OneLineQuestion
        question="Why oil based mud is bettern in water sensitive formation"
        answer="Oil based mud does not hydrate or swell clays"
      />
      <OneLineQuestion
        question="Why oil based is useful in drilling high angle wells"
        answer="Superior lubrication properties and low friction values leads to reduced torque and drag"
      />
      <MultipleInputQuestion
        question="In what situation IEF are more cost effective than water based mud"
        answer={[
          "Shale stability",
          "Temperature stability",
          "Lubricity",
          "Corrosion resistance",
          "Stuck pipe preventation",
          "Contamination",
          "Production protection",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of oil based mud"
        answer={["Invert emulsion oil mud", "Pseudo oil based mud"]}
      />
      <MultipleInputQuestion
        question="What are components of Invert emulsion oil mud"
        answer={[
          "Base oil",
          "Water",
          "Emulsifier",
          "Wetting agent",
          "Organophillic clay",
          "Lime",
        ]}
      />
      <OneLineQuestion
        question="What is base oil"
        answer="External emulsion phase"
      />
      <OneLineQuestion
        question="Write about water in Invert emulsion oil mud"
        answer="Internal emulsion phase"
      />
      <OneLineQuestion
        question="What is OWR"
        answer="Ratio of oil to water in Invert emulsion fluid"
      />
      <FillInTheBlanks
        question={["Higher OWR is used for drilling", ""]}
        answer={["Troublesome formation"]}
      />
      <OneLineQuestion
        question="How we can control salinity of water phase"
        answer="Using dissolved salts usually calcium chloride"
      />
      <OneLineQuestion
        question="Why it is necessary to control salinity in invert emulsion fluid"
        answer="To tie up free water molecules and prevent any water migration between mud and open formation"
      />
      <OneLineQuestion
        question="What is emulsifier"
        answer="Act as interface between oil and water droplets"
      />
      <MultipleInputQuestion
        question="What are types of emulsifier"
        answer={["Primary emulsifier", "Secondary emulsifier"]}
      />
      <FillInTheBlanks
        question={[
          "Emulsifier levels are held in ",
          "to act against possible",
          "",
        ]}
        answer={["excess", "water and solid contamination"]}
      />
      <OneLineQuestion
        question="What is wetting agent"
        answer="High concentration emulsifier used especially in high density fluids to oil wet all solids"
      />
      <OneLineQuestion
        question="Why we need to oil wet all solids"
        answer="If solids became water wet they will not be suspended in the fluid and would settle out of the system"
      />
      <OneLineQuestion
        question="What is organophillic clay"
        answer="Clays treated to react and hydrate in the presence of oil"
      />
      <MultipleInputQuestion
        question={[
          "Organophillic clay react with oil to give both",
          "and",
          "characteristic",
        ]}
        answer={["suspension", "viscosity"]}
      />
      <OneLineQuestion
        question="What is lime"
        answer="Primary ingredient necessary for reaction with emulsifiers to develop the oil water interface"
      />
      <OneLineQuestion
        question="What is pseudo oil based mud"
        answer="System which uses synthetic base oil"
      />
      <MultipleInputQuestion
        question="What are advantages of drilling with air"
        answer={[
          "Higher penetration rate",
          "Better hole cleaning",
          "Less formation damage",
        ]}
      />
      <MultipleInputQuestion
        question="what are disadvantage of drilling with air"
        answer={[
          "Cannot support sides of borehole",
          "Cannot enough pressure to prevent formation fluids entering the borehole",
        ]}
      />
      <OneLineQuestion
        question="What is gel strength"
        answer="Measurement under static condition of the forces in the mud which causes gel structure to develop when the mud is at rest"
      />
      <MultipleInputQuestion
        question="Why gel strength is important"
        answer={[
          "Provide indication of pressure required to initiate flow after the mud has been static",
          "Provide indication of suspension properties of the mud",
          "Provide indication of mud ability to suspend cuttings when the mud is stationary",
        ]}
      />
      <MultipleInputQuestion
        question="What are drilling fluid additives"
        answer={[
          "Weighting materials",
          "Viscosifiers",
          "Filtration control materials",
          "Rheology control materials",
          "Alkalinity and pH control materials",
          "Lost circulation control materials",
          "Lubrication materials",
          "Shale stabilizing material",
        ]}
      />
      <OneLineQuestion
        question="What is weighting materials"
        answer="Weighting materials are solids which when suspended or dissolved in water will increase the mud weight"
      />
      <FillInTheBlanks
        question={["Most weighting materials are", "and require", "to", ""]}
        answer={["insoluble", "viscosifiers", "suspended in fluid"]}
      />
      <MultipleInputQuestion
        question="What are examples of Weighting materials"
        answer={["Barite", "Haemitite"]}
      />
      <OneLineQuestion
        question="What is viscosifiers"
        answer="Material which increases viscosity of fluid"
      />
      <MultipleInputQuestion
        question="What are some expamples of viscosifiers"
        answer={["Bentonite", "CMC"]}
      />
      <OneLineQuestion
        question="What is filtration control materials"
        answer="Materials which reduce the amount of fluid that will be lost from the drilling fluid into subsurface formation"
      />
      <MultipleInputQuestion
        question="What are some examples of filtration control materials"
        answer={["Bentonite", "Starch"]}
      />
      <OneLineQuestion
        question="What is rheology control materials"
        answer="They cause a change in the physical and chemical interactions between solid and dissolved salts such that viscous and structure forming properties are reduced"
      />
      <MultipleInputQuestion
        question="What are functions of thinners"
        answer={[
          "Efficient control of viscosity and gel development",
          "Reduce filtration and cake thickness",
          "To counter act effects of salt",
        ]}
      />
      <MultipleInputQuestion
        question="How does pH affects mud properties"
        answer={[
          "Detection and treatment of contaminants",
          "Solubility of many thinners and divalent metal ions",
        ]}
      />
      <MultipleInputQuestion
        question="What are some examples of Alkalinity and pH control additives"
        answer={["NaOH", "KOH"]}
      />
      <MultipleInputQuestion
        question="What does lost circulation leads to"
        answer={[
          "Increased well cost",
          "Loss of accurate hole monitoring",
          "Well control problems",
        ]}
      />
      <OneLineQuestion
        question="What is lubricating materials"
        answer="Used to reduce friction between wellbore and the drill string which will reduce torque and drag"
      />
      <MultipleInputQuestion
        question="What are some examples of lubricating materials"
        answer={["Oil", "polymer"]}
      />
      <MultipleInputQuestion
        question="What are some examples of shale stabilizing materials"
        answer={["Hydrocarbons", "Potassium"]}
      />
      <OneLineQuestion
        question="What is drill string"
        answer="Connection between the rig and drill bit"
      />
      <MultipleInputQuestion
        question="What are the components of drill string"
        answer={[
          "Drill string subs",
          "Kelly",
          "Drill pipe",
          "Drill collar",
          "bit",
          "Swivel",
        ]}
      />
      <MultipleInputQuestion
        question="What are the functions of drill string"
        answer={[
          "Compatible enough to withstand all forces and pressure",
          "To suspend the bit",
          "To transmit rotary torque from kelly to bit",
          "To provide a conduit for circulating drilling fluid to bit",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The drill collars and the other equipment which is made up just above the bit are collectively called",
          "",
        ]}
        answer={["Bottom Hole assembly"]}
      />
      <OneLineQuestion
        question="What is Drill pipe"
        answer="Seamless Pipe with threaded connections known as tool joints"
      />

      <OneLineQuestion
        question="What is the name for the female end of connection of drill pipe"
        answer="Box"
      />
      <OneLineQuestion
        question="What is the name for the male end of connection of drill pipe"
        answer="pin"
      />
      <OneLineQuestion
        question={[
          "Outer diameter of drill pipe must be",
          "than diameter of main pipe",
        ]}
        answer="Greater"
      />
      <MultipleInputQuestion
        question={["Each length of drill pipe is known as", "or", ""]}
        answer={["Joint", "Single"]}
      />
      <OneLineQuestion
        question="What is wet weight of drill pipe"
        answer="Weight of drill pipe when suspended in a fluid"
      />
      <FillInTheBlanks
        question={["Wet weight of drill pipe = ", "x", ""]}
        answer={["Weight in air", "Buoyancy Factor"]}
      />

      <MultipleInputQuestion
        question="What are the stresses the drill pipe is exposed to?"
        answer={["Tension", "Torque", "Cyclic Stress Fatigue"]}
      />

      <Essay
        question="Explain tension stress in drill pipe"
        points={[
          [
            "The weight of suspended",
            "exposes each",
            "of drill pipe to several thousand pounds of",
            "",
          ],
          ["Extra tension may be exerted due to", "when", "out of hole"],
        ]}
        answer={[
          ["drill string", "joint", "tensile load"],
          ["overpull", "pulling"],
        ]}
      />
      <Essay
        question="Explain torque stress in drill pipe"
        points={[
          ["During drilling", "is transmitted down the string"],
          ["", "condition can", "the amount of", "or", "on each", ""],
        ]}
        answer={[
          ["rotation"],
          ["Poor hole", "increase", "torque", "twisting force", "joint"],
        ]}
      />
      <Essay
        question="Explain cyclic stress Fatigue in drill pipe"
        points={[
          [
            "In",
            "holes, the",
            "is exposed to",
            "and",
            "forces at points of",
            "in the hole",
          ],
          ["As the string is", "each joint sustains a", "of", "and", "forces"],
        ]}
        answer={[
          ["Deviated", "wall of pipe", "compressive", "tensile", "bending"],
          ["rotated", "cycle", "compressive", "tensile"],
        ]}
      />
      <MultipleInputQuestion
        question={[
          "The corrosion of drill string in a water based mud is primary due to",
          ",",
          "and",
          "in the wellbore",
        ]}
        answer={["Dissolved gases", "dissolved salts", "acids"]}
      />
      <Essay
        question="Explain the part of oxygen in corrosion of drill pipe"
        points={[
          ["It is present in all", ""],
          ["It causes", "and", ""],
          ["That may lead to", "and", ""],
          ["Oxygen can be removed from drilling fluids using a", "such as", ""],
          ["Even", "amount of oxygen can be very damaging"],
        ]}
        answer={[
          ["Drilling fluids"],
          ["Rusting", "pitting"],
          ["washouts", "twistoff"],
          ["scavenger", "sodium sulphate"],
          ["Small"],
        ]}
      />
      <Essay
        question="Explain the part of Carbon di oxide in corrosion of drill pipe"
        points={[
          ["Can be introduced in the wellbore with the", "or from the", ""],
          ["It forms", "which", "steel"],
        ]}
        answer={[
          ["Drilling fluids", "Formation"],
          ["Carbonic acid", "corrodes"],
        ]}
      />
      <Essay
        question="Explain the part of dissolved salts in corrosion of drill pipe"
        points={[
          ["It may come from the", ",", ",", "or", ""],

          [
            "It",
            "rate of",
            "due to the",
            "due to the presence of dissolved salts",
          ],
        ]}
        answer={[
          [
            "Makeup water",
            "formation fluid",
            "drilled formations",
            "drilling fluid additives",
          ],
          ["Increases", "corrosion", "increased conductivity"],
        ]}
      />
      <Essay
        question="Explain the part of hydrogen sulphide in corrosion of drill pipe"
        points={[
          ["It may be present in the", "being", ""],
          ["It causes", "or", ""],
          ["", "is absorbed onto the", "of the", "in the presence of", ""],
          [
            "If the",
            "of",
            "is sufficient",
            "can be formed leading rapidly to a",
            "",
          ],
          [
            "",
            "in itself does not cause a failure but will",
            "of the pipe if it is already under",
            "or",
            "",
          ],
          ["Only", "amounts of H2S needed to be present to induce", ""],
          ["", "can be circulated in the mud to remove the H2S"],
        ]}
        answer={[
          ["Formation", "drilled"],
          ["Hydrogen embrittlement", "Sulphide stress cracking"],
          ["Hydrogen", "surface", "steel", "sulphide"],
          ["local concentration", "hydrogen", "cracks", "brittle failure"],
          ["Hydrogen embrittlement", "accelerate failure", "stress", "notched"],
          ["Small", "fatigue"],
          ["Special Scavengers"],
        ]}
      />
      <Essay
        question="Explain the part of organic acids in corrosion of drill pipe"
        points={[["These produce corrosion by", ",", "and", "to increase", ""]]}
        answer={[
          [
            "Lowering the pH",
            "Removing protective films",
            "provide hydrogen",
            "hydrogen embrittlement",
          ],
        ]}
      />
    </>
  );
};

const DrillString = () => {
  return (
    <>
      <OneLineQuestion
        question="What is drill string subs"
        answer="Short, threaded piece of pipe used to adapt parts of drill string that cannot otherwise be screwed together because of difference in thread size and design"
      />
      <MultipleInputQuestion
        question="What are some examples of drill string subs"
        answer={["Kelly sub", "Cross over sub", "Drill collar sub", "Bit sub"]}
      />
      <MultipleInputQuestion
        question="What are functions of swivel"
        answer={[
          "Provide connection for the rotary hose",
          "Provide passageway for the flow of drilling fluid into drillstem",
        ]}
      />
      <MultipleInputQuestion
        question="What are accessories of kelly"
        answer={["kelly saver sub", "kelly cock"]}
      />
      <OneLineQuestion
        question="What is kelly saver sub"
        answer="Small sub connected to bottom of the kelly"
      />
      <OneLineQuestion
        question="What is the function of kelly saver sub"
        answer="Protect kelly threads from wear during excessive tripping and drilling operations"
      />
      <OneLineQuestion
        question="What is kelly cock"
        answer="Small sub installed on top of the kelly or below kelly saver sub"
      />
      <OneLineQuestion
        question="What is the function of kelly cock when use above kelly"
        answer="It acts as a back pressure value protecting equipments above the kelly to shut off the drill pipe under pressure"
      />
      <MultipleInputQuestion
        question="What is kelly bushing"
        answer={[
          "Device when fitted to master bushing transmits torque to the kelly",
          "Permits vertical movement of kelly to make hole",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of drill pipe tool joints"
        answer={[
          "Internal external upset",
          "External upset",
          "Internal flush",
          "Internal upset",
        ]}
      />
      <OneLineQuestion
        question="What is internal external upset"
        answer="Internal diameter is less and tool joint outer diameter is larger"
      />
      <OneLineQuestion
        question="What is external upset"
        answer="Outer diameter is larger but inner diameter is same"
      />
      <OneLineQuestion
        question="What is internal flush"
        answer="Both internal diameter and outer diameter is same as Drill pipe"
      />
      <OneLineQuestion
        question="What is internal upset"
        answer="Internal diameter is less but outer diameter is approximately same"
      />
      <OneLineQuestion
        question="What is strongest connection in tool joint"
        answer="Internal external upset"
      />
      <OneLineQuestion
        question="What is another name for internal upset"
        answer="Slim hole pipe"
      />
      <MultipleInputQuestion
        question="What is different dimensional characteristic of heavy weight drill pipe from drill pipe"
        answer={[
          "Tube wall is heavier about 1 inch thick",
          "Tool joints are longer",
          "Tube section has larger diameter at mid length to protect the pipe from wear",
        ]}
      />
      <MultipleInputQuestion
        question="For what reasons Heavy weight drill pipe were developed"
        answer={[
          "Transition member to be run between drill collars and drill pipe",
          "Flexible weight member to run on directional drilling",
          "As a weight member on small rigs drilling small diameter holes",
        ]}
      />
      <MultipleInputQuestion
        question="What are functions of stabilisers"
        answer={[
          "Centralizes the well during drilling",
          "Prevent unnecessary vibration of drill string during drill string",
        ]}
      />
      <MultipleInputQuestion
        question="What are functions of roller reamers"
        answer={[
          "Allows to enlarge the size of borehole during drilling",
          "Increases the accuracy of drilling",
        ]}
      />
      <OneLineQuestion
        question="What is the function shock sub"
        answer="To absorb the energy from the vibration"
      />
      <Essay2 question="Explain in detail about drill string design">
        <MultipleInputQuestion
          question={["The", ",", "and", "of the", "must", ""]}
          answer={[
            "burst",
            "collapse",
            "tensile strength",
            "drillstring componenet",
            "not exceeded",
          ]}
        />
        <FillInTheBlanks
          question={["The", "within the", "must be", ""]}
          answer={["bending stress", "drill string", "minimised"]}
        />
        <FillInTheBlanks
          question={[
            "The",
            "must be able to provide all the",
            "required for",
            "",
          ]}
          answer={["drill collars", "weight", "drilling"]}
        />
        <FillInTheBlanks
          question={["The", "must be", "to"]}
          answer={[
            "Bottom hole assembly",
            "stabilised",
            "control the direction of well",
          ]}
        />
      </Essay2>
      <MultipleInputQuestion
        question="What are different types of string design"
        answer={["Packed hole assembly", "Pendulum assembly"]}
      />
      <OneLineQuestion
        question="What is packed hole assembly"
        answer="Align the bit with the hole already drilled and minimise the rate of change in deviation"
      />
      <OneLineQuestion
        question="What is pendulum assembly"
        answer="First stabiliser is placed some distance behind the bit therefore it tend to decrease the angle of deviation of hole and tend to produce vertical hole"
      />
      <OneLineQuestion
        question="What is collapse load"
        answer="highest external pressure tending to collapse the string will occur at the bottom when the string is run empty into the well"
      />
      <OneLineQuestion
        question="What is tension load"
        answer="Tensile resistance of drill pipe and is usually derated by a design factor "
      />
      <OneLineQuestion
        question="What is margin of overpull"
        answer="It is the limit of the joint tensile strength to be kept as reserve during the design of the drill string for the over pull process during the pipe stuck off condition."
      />
      <OneLineQuestion
        question="Why do we calculate MOP"
        answer="Allows for extra forces applied to the drill string when pulling on stuck pipe"
      />
      <OneLineQuestion
        question="What is burst pressure"
        answer="limit of internal pressure against which a pipe can withstand without any burst failure"
      />
    </>
  );
};

const DrillBits = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are types of bits"
        answer={["Drag bits", "Roller cone bits", "Diamond bits", "PDC bits"]}
      />
      <OneLineQuestion
        question="What is most commonly used bit"
        answer="Tri cone roller bits"
      />
      <MultipleInputQuestion
        question="What are characteristic of Drag bits"
        answer={[
          "No moving parts",
          "Drill by gauging and scrapping action",
          "Each blade has one nozzle which throws water jet to clean mud or cuttings from the blade surface",
        ]}
      />
      <OneLineQuestion
        question="In what type of formation drag bits were used"
        answer="Soft and sticky formation"
      />
      <MultipleInputQuestion
        question="Write about characteristic of drag bits blades"
        answer={[
          "Manufractured from various alloy steels",
          "Hardfaced with tungsten carbide",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of drag bits"
        answer={["four blade", "Double blade", "Triple blade"]}
      />
      <OneLineQuestion
        question="By what action diamond bit drills"
        answer="Chipping and grinding action"
      />
      <Essay
        question="Explain about the manufacturing of diamond bit"
        points={[
          ["A", "is machined with", ""],
          ["", "are placed in a", "and covered with", ""],
          [
            "With the",
            "in position, the",
            "is",
            "till the",
            "and then is allowed to",
            "",
          ],
          [
            "In this manner, the",
            "are held in a",
            ", which is attached to the",
            "",
          ],
          ["The", "is composed of", "material"],
          [
            "The",
            "must",
            "at a sufficiently",
            "so that",
            "may not be",
            "in the process",
          ],
          [
            "The",
            "in",
            "are necessary in order to prevent the",
            "and",
            "in the",
            "causing the",
            "",
          ],
        ]}
        answer={[
          ["Steel bit blank", "threads"],
          ["Diamonds", "bit mold", "powdered materials"],
          [
            "Bit blank",
            "assembly",
            "heated",
            "Powdered materials fuses",
            "cool",
          ],
          ["Diamonds", "matrix", "steel bit blank"],
          ["Matrix", "hard tungsten carbide"],
          [
            "binder materials",
            "melt",
            "low temperature",
            "diamonds",
            "injured",
          ],
          [
            "Hard particles",
            "matrix",
            "erosion",
            "wear",
            "bit",
            "loss of diamonds",
          ],
        ]}
      />
    </>
  );
};

// const Kick = () => {
//   return (
//     <>
//       <OneLineQuestion
//         question="What is kick tolerance"
//         answer="Maximum gas volume for a given degree of underbalance which the circulation can be performed without exceeding the weakest formation in the wellbore"
//       />
//       <MultipleInputQuestion
//         question="What are two factors used in determining kick tolerance"
//         answer={["Kick intensity", "Kick volume"]}
//       />
//       <OneLineQuestion
//         question="What is kick intensity"
//         answer="Difference between the maximum anticipated formation pressure and planned mud weight"
//       />
//       <OneLineQuestion
//         question="What is kick volume"
//         answer="Gas influx entering the wellbore from the formation"
//       />
//       <OneLineQuestion question="What is Maximum allowable annular surface pressure" answer="Maximum surface" />

//     </>

//   );
// };

export const ForExamDrillingEnginneering = () => {
  return (
    <>
      {/* <RigComponent /> */}
      <Lec4 />
      <DrillString />
      <DrillBits />
    </>
  );
};
