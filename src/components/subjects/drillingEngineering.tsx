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
   
    </>
  );
};

const DrillString = () => {
  return (
    <>
     
    </>
  );
};

const DrillPipe = () => {
  return (
    <>

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
