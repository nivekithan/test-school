import React from "react";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/Essay2";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { TrueOrFalse } from "../question/trueOrFalse";
import { JumbleQuestions } from "../utils";

const Lec3 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are different hypothesis which explains Origin of earth"
        answer={[
          "Nebular Hypothesis",
          "Planetesmial hypothesis",
          "Gaseous tidal hypothesis",
          "Binary star Hypothesis",
          "Gas duct clout hypothesis",
          "Big bang theory",
        ]}
      />
      {
        // TODO:  Convert the following question into Essay
      }
      <FillInTheBlanks
        question="Discuss about formation of solar system"
        answer={[
          "Solar system was originally a diffuse cloud of dust and gas",
          "This dust and gas began to coalesc due to gravity",
          "Shrinking mass began to rotate and formed a disk",
          "Mass broke up into a discreate protosun orbited by large protoplanets",
          "Sun heated until fusion temperature were reached",
          "Heat from sun drove most of the hydrogen and helium away from the closet planets, leaving small, solid cores behind",
          "The massive outer planets are still composed mostly of hydrogen and helium",
          "At the same time planets were forming, gravitational attraction pulled the gases in the protosun inward, creating extremely high pressure and temperature",
          "Core become so hot that hydrogen nuclei combined to form the nucleus to form the nucleus of the next heavier element helium in the process called nuclear fusion",
          "The onset of nuclear fusion marked the birth of the modern sun which still generates its energy by hydrogen fusion",
          "Heat from the sun boiled most of the hydrogen, helium and other light elements away from the inner solar system",
          "Mercury, Venus, earth and mars are now mainly rock and they are called terrestrial planet",
          "Jupiter, Saturn, Uranus and neptune are called Jovian planets and are composed primarily of liquids and gases with small and metallic cores",
        ]}
      />
    </>
  );
};

const Lec4 = () => {
  return (
    <>
      <Essay
        question="Explain Nebular Hypothesis"
        points={[
          [
            "A huge",
            "of",
            "and",
            "(",
            ") is in an area in the",
            ", this cloud of ",
            "and",
            "began to",
            "or",
            "under the",
            "of its own",
            "",
          ],
          [
            "As a result",
            "conserved",
            "of the",
            "in the",
            ", it spanning",
            "due to this the",
            "around the",
            "of the condensing",
            "",
            "out into",
            "",
          ],
          [
            "The",
            "of the nebula continued to",
            "due to",
            ". Eventually",
            "and",
            "became",
            "enough that the",
            "started and",
            "become a",
            "the",
            "",
          ],
        ]}
        answer={[
          [
            "mass",
            "swirling cold gas",
            "dust",
            "nebula",
            "Milky way galaxy",
            "gas",
            "dust",
            "condense",
            "pull together",
            "force",
            "gravity",
          ],
          [
            "nebula",
            "angular momentum",
            "material",
            "center",
            "anticlockwise",
            "material",
            "center",
            "nebula",
            "flattened",
            "disc",
          ],
          [
            "center",
            "contract",
            "gravity",
            "Pressure",
            "Temperature",
            "high",
            "Nuclear fusion",
            "central mass",
            "star",
            "sun",
          ],
        ]}
      />

      <Essay
        question="Explain about big bang theroy"
        points={[
          ["It is also known as", ""],
          ["According to this theroy", ""],
          ["This theory is later supported by", "findings"],
          [
            "",
            "findings about the",
            "leads to that if the motion of the",
            "is traced back in",
            "it implies that they were once all in the",
            "",
          ],
          ["They were greatly", "and therefore very", "and", ""],
          [
            "This scenario of a universe that",
            "out of extermely",
            "and",
            "initial state became known as big bang theory",
          ],
        ]}
        answer={[
          ["Steady state theory"],
          [
            "Universe is expanding but its appearance and composition remain the constant through the time as new matter is created to fill in the gaps left by the matter that has spread out",
          ],
          ["Hubble"],
          ["Hubble", "expansion of universe", "galaxies", "time", "same place"],
          ["compressed", "dense", "hot"],
          ["exploded", "tiny dense", "hot"],
        ]}
      />
      <MultipleInputQuestion
        question="What are layers of interior of earth"
        answer={[
          "Upper crust",
          "Lower crust",
          "Upper mantle",
          "Lower Mantle",
          "Outer core",
          "Inner core",
        ]}
      />
      <OneLineQuestion
        question="What is the name of discontinuity between upper and lower crust"
        answer="Conorod"
      />
      <OneLineQuestion
        question="What is conorod"
        answer="Discontinuity between upper and lower crust"
      />

      <OneLineQuestion
        question="What is the name of discontinuity between lower crust and upper Mantle"
        answer="Mohorovicc"
      />
      <OneLineQuestion
        question="What is Mohorovicc"
        answer="Discontinuity between lower crust and upper mantle"
      />

      <OneLineQuestion
        question="What is the name of discontinuity between upper and lower mantle"
        answer="Repiti"
      />
      <OneLineQuestion
        question="What is Repiti"
        answer="Discontinuity between upper and lower mantle"
      />

      <OneLineQuestion
        question="What is the name of discontinuity between lower mantle and outer core"
        answer="Guttenberg"
      />
      <OneLineQuestion
        question="What is Guttenberg"
        answer="Discontinuity between lower mantle and outer core"
      />

      <OneLineQuestion
        question="What is the name of discontinuity between outer and inner core"
        answer="Lehmann"
      />
      <OneLineQuestion
        question="What is Lehmann"
        answer="Discontinuity between outer and inner core"
      />

      <MultipleInputQuestion
        question="What minearls are rich in upper crust"
        answer={["Silica", "Aluminium"]}
      />
      <MultipleInputQuestion
        question="What minearls are rich in lower crust"
        answer={["Silica", "Magnesium"]}
      />
      <SingleChoiceQuestion
        question="What layer is dark"
        choices={["Upper crust", "Lower crust"]}
        answer={2}
      />
      <SingleChoiceQuestion
        question="What layer is light"
        choices={["Upper crust", "Lower crust"]}
        answer={1}
      />
      <OneLineQuestion
        question="What is the state of materials in lower mantle"
        answer="Molten"
      />
      <TrueOrFalse
        question="All intrusion comes from upper mantle"
        answer={true}
      />
      <OneLineQuestion
        question="What is the state of materials in inner core"
        answer="Solid"
      />
      <MultipleInputQuestion
        question="What is the state of materials in outer core"
        answer={["Partial liquid", "solid"]}
      />
      <OneLineQuestion
        question="Earthquake generates at what layer"
        answer="Upper crust"
      />
      <MultipleInputQuestion
        question="What are layers of earth classified by physical properties"
        answer={[
          "Crust",
          "Lithosphere",
          "Asthenosphere",
          "Mesosphere",
          "Outer core",
          "Inner core",
        ]}
      />
      <OneLineQuestion
        question="What is the thickness of crust"
        answer="35-40 km"
      />
      <MultipleInputQuestion
        question="What are different types of crust"
        answer={["Oceanic crust", "Continental crust"]}
      />

      <OneLineQuestion
        question="What is the depth of lithosphere"
        answer="100 km"
      />
      <OneLineQuestion
        question="What is the state of lithospher"
        answer="Rigid"
      />

      <OneLineQuestion
        question="What is the depth of Asthenosphere"
        answer="700 km"
      />
      <OneLineQuestion
        question="What is the state of Asthenosphere"
        answer="Plastic"
      />
      <OneLineQuestion
        question="What is the depth of Mesosphere"
        answer="2885 km"
      />
      <OneLineQuestion question="What is state of Mesosphere" answer="Rigid" />
      <OneLineQuestion
        question="What is depth of Outer core"
        answer="5155 km"
      />
      <OneLineQuestion question="What is state of Outer core" answer="Liquid" />
      <OneLineQuestion
        question="What is depth of Inner core"
        answer="6371 km"
      />
      <OneLineQuestion question="What is state of Outer core" answer="Rigid" />
      <MultipleInputQuestion
        question="What are the minerals rich in core "
        answer={["Iron", "Nickel", "Sulphur"]}
      />
    </>
  );
};

const Lec5 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is exogenic process"
        answer="Those geological process that happen on exterior of earth"
      />
      <OneLineQuestion
        question="What is endogenic process"
        answer="Those geological process that happens interior of earth"
      />
      <MultipleInputQuestion
        question="What are examples of endogenic process"
        answer={[
          "Intrusion of magma",
          "Volcanos",
          "Earthquake",
          "Reformation and deformation of rock inside the earth",
          "Ground water participation in chemical reaction",
        ]}
      />
      <Essay
        question="Explain Exogenic process"
        points={[
          [
            "",
            ",",
            "and",
            "all contribute to",
            "and",
            ", processes that break down rock into",
            "",
          ],
          ["These", "are then transported by", ",", "or", "as", ""],
          [
            "The process of",
            "reduces",
            "to",
            ", create",
            ",",
            "and",
            "and deposit huge amounts of",
            "that either become",
            "again or are",
            "and",
            "into",
            "rock",
          ],
        ]}
        answer={[
          [
            "Freezing",
            "thawing",
            "running water",
            "weathering",
            "erosion",
            "tiny particles",
          ],
          ["particles", "ice", "water", "wind", "sediment"],
          [
            "erosion",
            "mountains",
            "hills",
            "canyons",
            "valleys",
            "soils",
            "sediments",
            "eroded",
            "preserved",
            "lithified",
            "sedimentary",
          ],
        ]}
      />

      <MultipleInputQuestion
        question="What are examples of Exogenic process"
        answer={["Weathering", "Erosion", "Deposition", "Mass movements"]}
      />

      <OneLineQuestion
        question="What is weathering"
        answer="It is a process in which pre existing rock break down into small pieces by physical, chemical and biological process"
      />
      <OneLineQuestion
        question="What is erosion"
        answer="It is a process in which natural agents transport sediments from one place to another"
      />
      <Essay2 question="What are types of Endogenic process">
        <MultipleInputQuestion
          question="What are types of Endogenic process"
          answer={["Diastrophism", "sudden movements"]}
        />
        <MultipleInputQuestion
          question="What are types of Diastrophism"
          answer={["Vertical", "Horizontal"]}
        />
        <MultipleInputQuestion
          question="What are types of Vertical Diastrophism movements"
          answer={["Upward", "Downward"]}
        />
        <MultipleInputQuestion
          question="What are types of Horizontal Diastrophism movements"
          answer={["Forces of compression", "Forces of tension"]}
        />
        <MultipleInputQuestion
          question="What area types of Sudden movements"
          answer={["Volcanos", "Earthquake"]}
        />
        <OneLineQuestion
          question="What is another name for Diastrophism"
          answer="Slow movements"
        />
        <OneLineQuestion
          question="Give an example for forces of compression"
          answer="Fold mountains"
        />
        <OneLineQuestion
          question="Give an example for forces of tension"
          answer="Fault mountains"
        />
        <MultipleInputQuestion
          question="What are other names for Vertical Diastrophism movements"
          answer={["Epeirogenic", "continental building"]}
        />
        <MultipleInputQuestion
          question="What are other name for Horizontal Diastrophism movements"
          answer={["Orogenic", "Mountain building"]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is Geological cycle"
        answer="All the process that happens inside and outside of earth and how they are related to each other"
      />
      <MultipleInputQuestion
        question="What are main cycles in Geological cycle"
        answer={["Hydrologic cycle", "Tectonic cycle", "Rock cycle"]}
      />
      <Essay2 question="Complete the rock cycle">
        <FillInTheBlanks
          question={[
            "Igneous rock ->",
            "->",
            "->",
            "->",
            "->",
            "->",
            "->",
            "->",
            "->",
            "",
          ]}
          answer={[
            "Weathering of rocks at surface",
            "Erosion and transport",
            "Deposition of sediment",
            "Burial and compaction",
            "Sedimentary rock",
            "Deformation and metamorphism",
            "Metamorphic rock",
            "Melting",
            "Crystallisation of magma",
          ]}
        />{" "}
      </Essay2>
    </>
  );
};

export const ForExamGeology = () => {
  return (
    <>
      <Lec3 />
      <Lec4 />
      <Lec5 />
    </>
  );
};
