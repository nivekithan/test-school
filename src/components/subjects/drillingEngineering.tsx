import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { TrueOrFalse } from "../question/trueOrFalse";

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

const DrillingBit = () => {
  return (
    <>
      <Essay
        question="Discuss about drill bits"
        points={[
          [
            "A drilling bit is the",
            "or",
            "tool which is made up on the end of the",
            "",
          ],
          [
            "The bit drills through the rock by",
            ",",
            ",",
            "or",
            "the rock at the bottom of hole",
          ],
          ["", "is circulated through the", "in the bit to", "the", ""],
        ]}
        answer={[
          ["cutting", "boring", "drill string"],
          ["scraping", "chipping", "gauging", "grinding"],
          ["Drilling fluids", "passageways", "remove", "drilled cuttings"],
        ]}
      />
      <MultipleInputQuestion
        question="Performance of a bit is a function of what parameters"
        answer={[
          "Weight on bit",
          "Mud properties",
          "Rate of rotation",
          "Hydraulic efficiency",
        ]}
      />
      <MultipleInputQuestion
        question="What are different types drill bits"
        answer={[
          "Drag bits",
          "Roller cone bits",
          "Diamond bits",
          "Polycrystalline Diamond compact bits",
        ]}
      />

      <TrueOrFalse
        question="Roller cone bits are most commonly used bits"
        answer={true}
      />
    </>
  );
};

export const DragBits = () => {
  return (
    <>
      <TrueOrFalse
        question="Drag bits were still in common use"
        answer={false}
      />
      <MultipleInputQuestion
        question="What are different types of drag bits"
        answer={["Four blade", "Double Blade", "Triple blade"]}
      />
      <FillInTheBlanks
        question={["Drag bit consist of", "shaped like", "which", "as a", ""]}
        answer={["Rigid steel blades", "fish tail", "rotate", "single unit"]}
      />
      <FillInTheBlanks
        question={[
          "Drag bits has",
          "and drills by the",
          "of their",
          "on the",
          "",
        ]}
        answer={[
          "no moving parts",
          "scraping and gauging action",
          "blades",
          "encountered formations",
        ]}
      />
      <SingleChoiceQuestion
        question="Drag bits were once used for what type of formations"
        choices={["Soft, Sticky formations", "hard formations"]}
        answer={1}
      />
      <FillInTheBlanks
        question={[
          "In drag bits the introduction of",
          "to the",
          "and the design of",
          "greatly improved its",
          "",
        ]}
        answer={[
          "Hardfacing",
          "surface of blades",
          "passageways",
          "performance",
        ]}
      />
      <OneLineQuestion
        question="What material is used for hardfacing the blades"
        answer="Tungsten Carbide"
      />
      <FillInTheBlanks
        question={[
          "In drag bits each blade has",
          "which throws the",
          "to",
          "the",
          "or",
          "from the",
          "",
        ]}
        answer={[
          "one nozzle",
          "water jet",
          "clean",
          "sticking mud",
          "cuttings",
          "blade surface",
        ]}
      />
      <FillInTheBlanks
        question={["To this bit", "RPM and", "WOB are applied"]}
        answer={["High", "Low"]}
      />
      <SingleChoiceQuestion
        question={["Drag bits in recent years has been replaced by", ""]}
        choices={["Roller cutter bits", "Diamond bits", "PDC bits"]}
        answer={1}
      />
      <Essay
        question="Explain the decline in the use of drag bits"
        points={[
          ["The introduction of", "which could drill", "more efficiently"],
          ["If too much", "was applied, excessive", "led to", "or", ""],
          ["", "tend to", "hole, therefore some means of", "was required"],
          [
            "",
            "were limited to drilling through",
            ",",
            ",",
            "where there no",
            "",
          ],
        ]}
        answer={[
          ["Roller cone bits", "soft formations"],
          ["Weight on bit", "torque", "bit failure", "drill pipe failure"],
          ["Drag bits", "drill crooked", "controlling deviation"],
          [
            "Drag bits",
            "uniformly",
            "soft",
            "unconsolidated formations",
            "hard abrasive layers",
          ],
        ]}
      />
    </>
  );
};

const DiamondBits = () => {
  return (
    <>
      <FillInTheBlanks
        question={[
          "Diamond bits use is justified in many areas where their",
          "and the consequent",
          "in",
          "affords sufficient advantage to offset",
          "cost",
        ]}
        answer={["long life", "reduction", "trip time", "higher bit"]}
      />
      <OneLineQuestion
        question="Diamond bits are used in what type of formation"
        answer="Harder formation"
      />
      <TrueOrFalse question="Diamond bits have no moving parts" answer={true} />
      <FillInTheBlanks
        question={[
          "Diamond bits drill by direct",
          "or",
          "and",
          "action against the bottom of hole",
        ]}
        answer={["Abrasion", "Chipping", "grinding"]}
      />
      <FillInTheBlanks
        question={[
          "Diamonds are much",
          "than the",
          "and can cut the formation",
          "",
        ]}
        answer={["Harder", "Rock formations", "efficiently"]}
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

const RollerCutterBits = () => {
  return (
    <>
      <Essay
        question="Discuss about Rotary Roller bits"
        points={[
          ["Rows of the", "are cut on to the", "are generally in", "numbers"],
          ["The", "are", "made of", ""],
          ["The", "rotate", "as the", "rotates"],
          [
            "Each",
            "has separate one",
            "which flows",
            "on the",
            "to",
            "it after",
            "and",
            "all the",
            "as rapidly as possible",
          ],
        ]}
        answer={[
          ["teeth", "Rolling cones", "2-3"],
          ["teeth", "hard surfaced", "Tungsten Carbide"],
          ["Toothed wheel", "independently", "drill string"],
          [
            "Cone bit",
            "nozzle",
            "mud stream jet",
            "cone cutters",
            "clean",
            "cutting the formation",
            "removes",
            "drilled cuttings",
          ],
        ]}
      />
      <MultipleInputQuestion
        question={[
          "In Roller cutter bits the size of cone is limited by the",
          "and",
          "",
        ]}
        answer={["Geometry of bit", "Diameter of hole"]}
      />
      <MultipleInputQuestion
        question={[
          "Roller cutter bits are designed for",
          ",",
          "and",
          "formations",
        ]}
        answer={["Soft", "Medium", "Hard"]}
      />
      <MultipleInputQuestion
        question={["Roller cutter bits cuts the formation by", "and", "both"]}
        answer={["scraping and gauging", "Chipping and grinding"]}
      />
      <Essay
        question="What are jet bits"
        points={[
          ["They are", "having", ""],
          ["Each", "directs a", "directly on the", "which rapidly", ""],
          ["This allows each", "to strike", "rather than", "its", "in", ""],
          ["They are used in", ""],
        ]}
        answer={[
          ["Roller cutter bits", "fluid nozzles"],
          [
            "nozzle",
            "high velocity fluid jet",
            "hole bottom",
            "removes the cuttings",
          ],
          [
            "bit tooth",
            "new formation",
            "expend",
            "energy",
            "regrinding the cuttings",
          ],
          ["Directional drilling"],
        ]}
      />
      <MultipleInputQuestion
        question="What are two types of TCR bit"
        answer={["Milled tooth", "Insert tooth"]}
      />
      <SingleChoiceQuestion
        question="Milled tooth is used for what formation"
        choices={["Soft formation", "Hard formation"]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="Insert tooth is used for what formation"
        choices={["Soft formation", "Hard formation"]}
        answer={2}
      />
      <FillInTheBlanks
        question={[
          "Gauging and scraping action is the drilling mechanism of",
          "by",
          "and applying the",
          "on the formation",
        ]}
        answer={[
          "Soft formation",
          "pit blade penetration",
          "moment of inertia force",
        ]}
      />
      <Essay
        question="Explain chipping and grinding action"
        points={[
          [
            "Chipping and grinding action or",
            "action is drilling mechanism of",
            "in which the",
            "surface of cutters",
            "the hard formation into",
            ".",
          ],
          [
            "In such mechanism",
            "are not able to",
            "but they can",
            "and",
            "the same with their",
            "",
          ],
        ]}
        answer={[
          [
            "Crushing",
            "hard formation",
            "harder edged",
            "grind",
            "small cuttings",
          ],
          [
            "Bit teeth",
            "penetrate the formation",
            "scratch",
            "grind",
            "harder cutters",
          ],
        ]}
      />
      <MultipleInputQuestion
        question="What are design criteria of rolling cutter bits"
        answer={[
          "Journal Angle",
          "Cone offset",
          "Cutting structures",
          "Metallurgy",
          "Strength",
          "Bit Bearing",
        ]}
      />
      <OneLineQuestion
        question="What is journal angle"
        answer="Angle formed between line perpendicular to cone axis or journal axis and the main axis of bit"
      />
      <Essay
        question="Explain the effects of Journal angle on cutting action"
        points={[
          [
            "With the",
            "in the journal angle the portion of",
            "into the",
            "also",
            "",
          ],
          ["This causes an", "in the", "and", "in the", ""],
        ]}
        answer={[
          ["increase", "cone digging", "formation", "increases"],
          [
            "increases",
            "chipping and grinding",
            "reduction",
            "scraping and gauging",
          ],
        ]}
      />
      <OneLineQuestion
        question="What is cone offset"
        answer="Horizontal distance between the axis of bit and a vertical plane through the axis of the journal"
      />
      <OneLineQuestion
        question={["Increasing the cone offset increases", "of the TCR bit"]}
        answer="Gauging and scraping action"
      />
      <FillInTheBlanks
        question={[
          "The",
          "angle and",
          "angles decide the",
          "of the cone. Both of these are collectively called",
          "",
        ]}
        answer={["Heel cone", "Inner cone", "size", "cone angles"]}
      />
      <OneLineQuestion
        question={["For softer formations we require", "cone angle"]}
        answer="Greater"
      />
      <OneLineQuestion
        question="What is skew angle"
        answer="Angle between the line joining the nodal point to the skew point and the line joining the bit center with the skew point"
      />
      <FillInTheBlanks
        question={[
          "Increasing the skew angle will increase",
          "and decreases the",
          "",
        ]}
        answer={["Cone offset", "Chipping and grinding action"]}
      />
      <MultipleInputQuestion
        question="What are parameters affects the cutter shape and size"
        answer={[
          "Height of the tooth",
          "Spacing between the tooth",
          "Included angle of tooth",
        ]}
      />
      <FillInTheBlanks
        question={["For soft formation drilling maximum", "and minimum", ""]}
        answer={["Tooth height", "Spacing and included angle"]}
      />
      <FillInTheBlanks
        question={["For hard formation drilling minimum", "and maximum", ""]}
        answer={["Tooth height", "Spacing and included angle"]}
      />
      <MultipleInputQuestion
        question={[
          "Roller cutter bits are manufactured from high strength",
          "or",
          "",
        ]}
        answer={["Ni-Mo Steel alloy", "Tunguston Carbide steel alloy"]}
      />
      <MultipleInputQuestion
        question={[
          "All Roller cutter bits after manufacturing undergoes for",
          "and",
          "",
        ]}
        answer={["Body heat treatment", "Carburising treatment"]}
      />
      <Essay
        question="Explain about body heat treatment"
        points={[
          ["Body heat treatment carries on the", "and their", ""],
          ["The major portion of bit is made of", "and", ""],
          ["In heat treatment, the", "and", "is applied by different methods"],
          ["The bit is treated for", ""],
        ]}
        answer={[
          ["cones", "bearing"],
          ["carbon", "iron"],
          ["heating", "cooling"],
          ["greater temperature change tolerance"],
        ]}
      />
      <Essay
        question="Explain about carburising treatment"
        points={[
          ["Carburising treatment is also a type of", ""],
          ["In this an additional", "is", "on the bit for", "and", ""],
        ]}
        answer={[
          ["Heat treatment"],
          [
            "layer of Tunguston Carbide alloy",
            "molded",
            "greater temperature tolerance",
            "increasing hardness of bit",
          ],
        ]}
      />
    </>
  );
};

const PDCBits = () => {
  return (
    <>
      <Essay
        question="Discuss about the cutting action of PDC"
        points={[
          ["The cutting action of PDC bits are", "unlike the other", ""],
          [
            "Which enables it to be operated at",
            "and allows it to",
            "with",
            "amount of",
            "compared to other",
            "",
          ],
        ]}
        answer={[
          ["Shearing actions", "bits"],
          ["Higher ROP", "drill faster", "lesser", "supplied energy", "bits"],
        ]}
      />
    </>
  );
};

const ComponentsOfBOP = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are components of BOP"
        answer={[
          "Annular Preventer",
          "Blind ram",
          "Pipe ram preventer",
          "Drilling Spool",
          "Kill Line",
          "Choke Flow Line",
          "Bell Nipple",
          "Fill Line",
          "Drill string equipment",
          "Kill and choke equipment",
        ]}
      />
      <OneLineQuestion
        question={["Pipe ram BOP only works for", "size of pipe"]}
        answer="Specific"
      />
      <OneLineQuestion
        question={["Blind ram BOP works for", "size of pipe"]}
        answer="all"
      />
      <OneLineQuestion
        question="How Annular Blowout is operated"
        answer="By introducing hydraulic fluid into the opening and closing chamber"
      />
      <OneLineQuestion
        question="What happens when introducing hydraulic fluid into closing chamber"
        answer="Causes the pistol to move upwards forcing the steel reinforced packing unit inward to form a seal"
      />
      <OneLineQuestion
        question="What happens when fluid is directed to opening chamber"
        answer="The piston moves downward allowing the packing unit to return to the open due to the natural resiliency of the rubber"
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
      <DrillingBit />
      <DragBits />
      <DiamondBits />
      <RollerCutterBits />
      <PDCBits />
      <ComponentsOfBOP />
    </>
  );
};
