import React from "react";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/essay2";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { Topic } from "../question/topic";
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

const Lec8 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is plates"
        answer="Plastic portion of crust above which solid portion of crust remains"
      />
      <OneLineQuestion
        question="What is continental drift"
        answer="Horizontal movement of the continents on vast scale"
      />
      <MultipleInputQuestion
        question="What are the major tectonic plates"
        answer={[
          "North American plate",
          "Eurasia plate",
          "Pacific plate",
          "South American plate",
          "Africa plate",
          "Antarctic plate",
          "Australia plate",
        ]}
      />

      <Essay2 question="Explain breakup of pangaea">
        <FillInTheBlanks
          question={[
            "Before",
            "years ago. All continents were joined together as",
            "also known as",
            "",
          ]}
          answer={["130 millions", "supercontinent", "Pangaea"]}
        />
        <FillInTheBlanks
          question={["It was surrounded by", "ocean"]}
          answer={["Panthalassa"]}
        />
        <FillInTheBlanks
          question={[
            "As the time passes due to",
            "motion, continents started to move",
            ",",
            "or",
            "to each other. According to that",
            "happened",
          ]}
          answer={[
            "Plates",
            "towards",
            "away",
            "parallel",
            "separation of continent",
          ]}
        />
        <MultipleInputQuestion
          question={["At first continents separated into two parts", "and", ""]}
          answer={["Northern", "Southern"]}
        />
        <OneLineQuestion
          question={["Northern part of continent is called", ""]}
          answer="Laurasia"
        />
        <OneLineQuestion
          question={["Southern part of continent is called", ""]}
          answer="Gondwana"
        />
        <MultipleInputQuestion
          question="Group of continents in Northern part are"
          answer={["North America", "Eurasia"]}
        />
        <MultipleInputQuestion
          question="Group of continents in Southern part are"
          answer={["South America", "Africa", "Australia", "Antarctica"]}
        />
        <OneLineQuestion
          question="The sea which separates Northern part and Southern part is called as"
          answer="Tethys sea"
        />
      </Essay2>

      <MultipleInputQuestion
        question="Based on current movement of plate how do you classify the plates"
        answer={["Active plate margin", "Passive Plates margin"]}
      />
      <OneLineQuestion
        question="What is active plat margin"
        answer="There are movements between two plates  "
      />
      <OneLineQuestion
        question="What is passive plate margin"
        answer="There are no movements between two plates"
      />

      <MultipleInputQuestion
        question="What are different types of plate margin"
        answer={["Divergent margin", "Convergent margin", "Transform margin"]}
      />

      <OneLineQuestion
        question="What is divergent margin"
        answer="Movement of plates is away from each other"
      />
      <OneLineQuestion
        question="What is transform margin"
        answer="Movement of plates is parallel to each other"
      />
      <OneLineQuestion
        question="What is convergent margin"
        answer="Movement of plates is towards each other"
      />
      <SingleChoiceQuestion
        question="What crust is thicker"
        choices={["Oceanic crust", "Continental Crust"]}
        answer={1}
      />
      <OneLineQuestion
        question={["Divergent margin is also named as", ""]}
        answer="Constructive plate margin"
      />
      <OneLineQuestion
        question="What is seafloor spreading"
        answer="When magma erupts and spreads into seafloor and converts into basaltic crust"
      />
      <OneLineQuestion
        question="What is convectional current"
        answer="Due to high difference in temperature between upper mantle and lower mantle there will be movements between mantle leading to convection current"
      />
      <Essay2 question="What is the reason for seafloor spreading">
        <FillInTheBlanks
          question={[
            "When two",
            "of",
            "meet each other, at the",
            "zone there will be",
            "",
          ]}
          answer={[
            "Conventional current",
            "different spinning direction",
            "mixing",
            "high temperature",
          ]}
        />
        <FillInTheBlanks
          question={["As a result the", "causing", ""]}
          answer={["Magma intrudes vertically", "seafloor spreading"]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is subduction zone"
        answer="Bending zone when denser plate starts to submerge under lighter plate"
      />
      <OneLineQuestion
        question="Where does trench form"
        answer="Subduction zone"
      />
      <MultipleInputQuestion
        question="What are characteristic of trench"
        answer={["High depth"]}
      />
      <OneLineQuestion
        question="When does Destructive collision plate margin happens"
        answer="When two continental plate move towards each other "
      />
      <OneLineQuestion
        question="When does destructive subduction plate margin happens"
        answer="When oceanic and continental plate move towards each other"
      />
      <OneLineQuestion
        question="When does conservation plate margin happens"
        answer="When plates move alongside each other"
      />
      <OneLineQuestion
        question="What is Benioff zone"
        answer="Part of plate when it breaks and convert into magma"
      />
      <MultipleInputQuestion
        question="What are types of destructive plate boundaries"
        answer={[
          "Continental and oceanic",
          "Oceanic and Oceanic",
          "Continental and Continental",
        ]}
      />
      <Essay2 question="Explain all Destructive plate boundaries">
        <Topic topic="Continental and Oceanic">
          <FillInTheBlanks
            question={["Denser", "plate", "below the", ""]}
            answer={["Oceanic", "subducts", "continental"]}
          />
          <FillInTheBlanks
            question={["The plate", "leaves a deep", ""]}
            answer={["subducting", "trench"]}
          />
          <FillInTheBlanks
            question={[
              "Built up",
              "from the",
              "plate cause",
              "bursting through the",
              "",
            ]}
            answer={[
              "Pressure",
              "Melting",
              "explosive volcanos",
              "continental plate",
            ]}
          />
        </Topic>
        <Topic topic="Oceanic and Oceanic">
          <FillInTheBlanks
            question={["", "plate", "leaving an ", ""]}
            answer={["Heavier", "subducts", "trench"]}
          />
          <FillInTheBlanks
            question={["Built up", "causes", "bursting through", ""]}
            answer={["pressure", "underwater volcanos", "oceanic plates"]}
          />
          <FillInTheBlanks
            question={["", "cools and creates new land called", ""]}
            answer={["Lava", "island arcs"]}
          />
        </Topic>
        <Topic topic="Continental and continental">
          <FillInTheBlanks
            question={["Both", "are not as", "as", "so lots of", "builds"]}
            answer={["plates", "dense", "oceanic", "pressure"]}
          />
          <FillInTheBlanks
            question={["There will no", "of", ""]}
            answer={["subduction", "continental crust"]}
          />
          <FillInTheBlanks
            question={["", "of", "on top of", "due to", "between", ""]}
            answer={[
              "Pile up",
              "continental crust",
              "lithosphere",
              "pressure",
              "plates",
            ]}
          />
          <FillInTheBlanks
            question={["", "are formed from", "of", ""]}
            answer={["Fold mountains", "piles", "continental crust"]}
          />
        </Topic>
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
      <Lec8 />
    </>
  );
};
