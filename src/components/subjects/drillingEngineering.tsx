import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";

const FunctionsOfDrillingFluids = () => {
  return (
    <>
      <FillInTheBlanks
        question={[
          "Cost of drilling fluid can be as high as",
          "of the total cost of the well",
        ]}
        answer={["10-15%"]}
      />
      <MultipleInputQuestion
        question="What are the functions of a drilling fluid"
        answer={[
          "Remove cuttings from wellbore",
          "Prevent influx of formation fluids",
          "Maintain Wellbore stability",
          "Cool and lubricate the bit",
          "Transmit Hydraulic Horsepower to bit",
        ]}
      />
      <MultipleInputQuestion
        question="What will happen if the cuttings are not removed"
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
      <FillInTheBlanks
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
        answer="Increase the mudweight"
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

const DrillString = () => {
  return (
    <>
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
    </>
  );
};

const DrillPipe = () => {
  return (
    <>
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
          ["drillstring", "joint", "tensile load"],
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
          [
            "Deviated holes",
            "wall of pipe",
            "compressive",
            "tensile",
            "bending",
          ],
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
          ["It may come from the", ",", ",", ",", "or"],

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
            "formation fluid inflow",
            "drilled formations",
            "drilling fluid additives",
          ],
          ["Increases", "corrosion", "increases conductivity"],
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
            "can be formed",
            "leading rapidly to a",
            "",
          ],
          [
            "",
            "in itself does not cause a failure but will",
            "of the pipe if it is already under",
            "or",
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
            "remove protective films",
            "provide hydrogen",
            "hydrogen embrittlement",
          ],
        ]}
      />
    </>
  );
};

export const FinalDrillingEngineering = () => {
  return (
    <>
      <FunctionsOfDrillingFluids />
      <DrillString />
      <DrillPipe />
    </>
  );
};
