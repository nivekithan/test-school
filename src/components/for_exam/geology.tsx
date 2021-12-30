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
        answer="All the geological process that happens inside and outside of earth and how they are related to each other"
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
          "North America plate",
          "Eurasia plate",
          "Pacific plate",
          "South America plate",
          "Africa plate",
          "Antarctica plate",
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

      <OneLineQuestion
        question="What is plate margin"
        answer="Boundary of one of the plates that forms upper layer and together cover the surface of earth  "
      />
      <MultipleInputQuestion
        question="Based on current movement of plate how do you classify the plate margin"
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
        answer="Constructive margin"
      />
      <OneLineQuestion
        question="What is seafloor spreading"
        answer="Magma erupts and spreads into seafloor and converts into basaltic crust"
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
            "Convectional current",
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
        question="When does Destructive subduction plate margin happens"
        answer="When oceanic and continental plate move towards each other"
      />
      <OneLineQuestion
        question="When does conservative plate margin happens"
        answer="When two plates move parallel each other"
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
          <OneLineQuestion
            question="Given an example for volcanos formed because of Continental and Oceanic collision"
            answer="The Andes"
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
          <OneLineQuestion
            question="Give an example for trench formed beacause of Oceanic and Oceanic collision"
            answer="Marina Trench"
          />
        </Topic>
        <Topic topic="Continental and continental">
          <FillInTheBlanks
            question={["Both", "are not as", "as", "so lots of", "builds"]}
            answer={["plates", "dense", "oceanic", "pressure"]}
          />
          <FillInTheBlanks
            question={["There will no", "of", ""]}
            answer={["subduction", "continental plate"]}
          />
          <FillInTheBlanks
            question={["", "of", "on top of", "due to", "between", ""]}
            answer={[
              "Pile up",
              "continental plate",
              "lithosphere",
              "pressure",
              "plates",
            ]}
          />
          <FillInTheBlanks
            question={["", "are formed from", "of", ""]}
            answer={["Fold mountains", "piles", "continental plate"]}
          />
        </Topic>
      </Essay2>
    </>
  );
};

const Lec9 = () => {
  return (
    <>
      <JumbleQuestions>
        <OneLineQuestion
          question="What is sill"
          answer="Horizontal magma intrusion"
        />
        <OneLineQuestion
          question="What is another name for horizontal magma intrusion"
          answer="Sill"
        />
        <OneLineQuestion
          question="What is dike"
          answer="Vertical magma intrusion"
        />
        <OneLineQuestion
          question="What is another name for vertical magma intrusion"
          answer="Dike"
        />
      </JumbleQuestions>
      <MultipleInputQuestion
        question={[
          "In Constructive plate margin new crust is formed in form",
          "and",
          "",
        ]}
        answer={["Shield Volcano", "Fissure Volcano"]}
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Movement of plate in constructive plate margin can cause earthquake"
          answer={true}
        />
        <TrueOrFalse
          question="Movement of plate in constructive plate margin cannot cause earthquake"
          answer={false}
        />
      </JumbleQuestions>
      <MultipleInputQuestion
        question="What landform are formed in Constructive plate margin"
        answer={["Ridge", "Rift valley"]}
      />
      <OneLineQuestion
        question="How ridge is formed"
        answer="Space created in divergent margin is filled by magma"
      />
      <OneLineQuestion
        question="How rift valley is formed"
        answer="Space created in divergent margin is not filled by magma"
      />
      <OneLineQuestion
        question="What is triple junction"
        answer="Meeting of three ridge"
      />
      <OneLineQuestion
        question="Given an example for mid ocean ridge"
        answer="Mid Atlantic ridge"
      />
      <Essay2 question="Write about Conservative plate margin">
        <FillInTheBlanks
          question={["As the", "move", "occurs and they become", ""]}
          answer={["plates", "friction", "stuck"]}
        />
        <FillInTheBlanks
          question={[
            "The",
            "are still trying to",
            "so",
            "and",
            "build up in the",
            "",
          ]}
          answer={["Plates", "move", "pressure", "stresses", "crust"]}
        />
        <FillInTheBlanks
          question={[
            "When the",
            "released suddenly",
            "move through the",
            ", causing an",
            "",
          ]}
          answer={["pressure", "waves of energy", "crust", "earthquake"]}
        />
        <OneLineQuestion
          question={[
            "The earthquakes at a conservative plate margin can be very",
            "",
          ]}
          answer="Destructive"
        />
        <OneLineQuestion
          question="Why earthquake at a conservative plate margin can be very destructive"
          answer="Focus is close to earth surface"
        />
        <JumbleQuestions>
          <TrueOrFalse
            question="There are volcanos in conservative plate margin"
            answer={false}
          />
          <TrueOrFalse
            question="There are no volcanos in conservative plate margin"
            answer={true}
          />
        </JumbleQuestions>
      </Essay2>
      <OneLineQuestion
        question="What is collision zone"
        answer="Two continental plate move towards each other and collide"
      />
      <OneLineQuestion
        question="What happens to land between plate in collision zone"
        answer="Forced upwards to form fold mountains"
      />
      <MultipleInputQuestion
        question="What are examples of fold mountains"
        answer={["Alps", "Himalayas"]}
      />
      <OneLineQuestion
        question="What is tectonic"
        answer="Deformation of crust because of plate interaction"
      />
    </>
  );
};

const Lec10 = () => {
  return (
    <>
      <Essay2 question="Explain in detail about what happens when magma intrudes in Divergent margin">
        <FillInTheBlanks
          question={["When the magma", ", due to", "it", "and forms", ""]}
          answer={["intrudes", "low temperature", "cools", "igneous rocks"]}
        />
        <FillInTheBlanks
          question={["If the", "is too", ", magma erupts into", ""]}
          answer={["pressure", "high", "surface"]}
        />
        <FillInTheBlanks
          question={["Magma then", "and forms", "at the surface"]}
          answer={["cools", "igneous rock"]}
        />
      </Essay2>
      <JumbleQuestions>
        <OneLineQuestion
          question="What is intrusive rock"
          answer="Solidification happened inside the earth"
        />
        <OneLineQuestion
          question="What is extrusive rock"
          answer="Solidification happened on surface of earth"
        />
      </JumbleQuestions>

      <Essay2 question="Explain how divergent plate boundaries works">
        <FillInTheBlanks
          question={["Divergent plate boundaries occurs above", ""]}
          answer={["Rising convection current"]}
        />
        <FillInTheBlanks
          question={[
            "The",
            "",
            "up on the",
            "of the",
            ",",
            "it and flowing",
            "it",
          ]}
          answer={[
            "Rising current",
            "pushes",
            "bottom",
            "lithosphere",
            "lifting",
            "laterally beneath",
          ]}
        />
        <FillInTheBlanks
          question={[
            "This",
            "flow causes the",
            "material above to be",
            "along in the",
            "",
          ]}
          answer={["lateral", "plate", "dragged", "direction of flow"]}
        />
        <FillInTheBlanks
          question={[
            "At the",
            "of the",
            "the overlying",
            "is stretched",
            ",",
            "and",
            "",
          ]}
          answer={["crest", "uplift", "plate", "thin", "breaks", "pulls apart"]}
        />
      </Essay2>
      <Essay2 question="How mid ocean ridges are formed">
        <FillInTheBlanks
          question={[
            "When a",
            "boundary occurs beneath",
            "lithosphere the ",
            "below",
            "the lithosphere producing a",
            "",
          ]}
          answer={[
            "Divergent",
            "oceanic",
            "rising convection current",
            "lifts",
            "mid ocean ridge",
          ]}
        />
        <FillInTheBlanks
          question={["", "stretch the", "and produce a", ""]}
          answer={["Extensional force", "lithosphere", "deep fissure"]}
        />
        <FillInTheBlanks
          question={[
            "When the",
            "opens, ",
            "is reduced on the",
            "material below it",
          ]}
          answer={["Fissure", "pressure", "super heated magma"]}
        />
        <FillInTheBlanks
          question={["", "flows into the", ""]}
          answer={["New magma", "fissure"]}
        />
        <FillInTheBlanks
          question={["", "then", "and the process", "itself"]}
          answer={["Magma", "solidifies", "repeats"]}
        />
      </Essay2>
      <Essay2 question="Explain how Rift valley is created">
        <FillInTheBlanks
          question={[
            "When a",
            "boundary occurs beneath a",
            "plate the",
            "is not enough to create a",
            ",",
            "through the",
            "material",
          ]}
          answer={[
            "Divergent",
            "thick continental",
            "pull apart",
            "clean",
            "single break",
            "thick continental",
          ]}
        />
        <FillInTheBlanks
          question={[
            "The",
            "plate is",
            "from the",
            "lift, pulled",
            "by",
            "and",
            "into a",
            "shaped structure",
          ]}
          answer={[
            "thick continental",
            "arched upwards",
            "rising convection current",
            "thin",
            "extensional force",
            "fractured",
            "rift",
          ]}
        />
        <FillInTheBlanks
          question={[
            "As the two",
            "pull apart, ",
            "develop on both sides of",
            "and the",
            "block slide",
            "",
          ]}
          answer={["Plate", "normal fault", "plate", "central", "downwards"]}
        />
      </Essay2>
      <SingleChoiceQuestion
        question={[
          "In sea floor spreading younger rocks will found",
          "to the spreading zone",
        ]}
        choices={["Near", "Far"]}
        answer={1}
      />
      <SingleChoiceQuestion
        question={[
          "In sea floor spreading older rocks will found",
          "to the spreading zone",
        ]}
        choices={["Near", "Far"]}
        answer={2}
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Volcanic eruptions are common all along the mid ocean ridge"
          answer={true}
        />
        <TrueOrFalse
          question="Volcanic eruptions are rare all along the mid ocean ridge"
          answer={false}
        />
      </JumbleQuestions>
      <OneLineQuestion
        question={["Age of rock", "as one moves away from crest"]}
        answer="increases"
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Rocks equidistant on either side of crest of mid ocean ridge show similarities"
          answer={true}
        />
        <TrueOrFalse
          question="Rocks equidistant on either side of crest of mid ocean ridge does not show similarities"
          answer={false}
        />
      </JumbleQuestions>
    </>
  );
};

const Lec12 = () => {
  return (
    <>
      <OneLineQuestion question="What is Accresinary prism" answer="" />
      <JumbleQuestions>
        <TrueOrFalse
          question="Oldest oceanic plates are coldest and denser"
          answer={true}
        />
        <TrueOrFalse
          question="Oldest oceanic plates are hottest and lighter"
          answer={false}
        />
      </JumbleQuestions>
      <JumbleQuestions>
        <TrueOrFalse
          question="Magma can penetrate the crust in continental continental collision boundary"
          answer={false}
        />
        <TrueOrFalse
          question="Magma cannot penetrate the crust in continental continental collision boundary"
          answer={true}
        />
      </JumbleQuestions>
      <FillInTheBlanks
        question={[
          "In contintental contintental collision boundary the magma cools",
          "and forms",
          "",
        ]}
        answer={["Intrusively", "Granite"]}
      />
      <MultipleInputQuestion
        question="What type rocks are common in continental and continental collision boundary"
        answer={["Granite", "Geniss"]}
      />
      <MultipleInputQuestion
        question="What type of basins are formed in Subducting convergent plate margin"
        answer={["Backarc basin", "Forearc basin"]}
      />
      <OneLineQuestion
        question="What is forearc basin"
        answer="Basin in front of volcanic front"
      />
      <OneLineQuestion
        question="What is backarc basin"
        answer="Basin in back of volcanic front"
      />
    </>
  );
};

const Lec13 = () => {
  return (
    <>
      <FillInTheBlanks
        question={["Slabs normally subduct at", "per year"]}
        answer={["few centimeters"]}
      />
      <MultipleInputQuestion
        question="Himalayas has formed because of collision of two continental plate they are"
        answer={["India Plate", "Eurasia plate"]}
      />
      <OneLineQuestion
        question="What is the source for Sediment supply for basins in Convergent margin"
        answer="Volcanic arc"
      />
      <OneLineQuestion
        question="Why does subsidence occurs"
        answer="Continuous deposition of sediments in basin leading to deepening and widening of basin"
      />
      <JumbleQuestions>
        <OneLineQuestion
          question="Foreland basin forms on what type of convergent margin collision"
          answer="Continental and continental collision"
        />
        <OneLineQuestion
          question="What is foreland basin"
          answer="Structural basin that develops adjacent and parallel to mountain belt"
        />
        <OneLineQuestion
          question="Why does foreland basin form"
          answer="Immense mass created by crustal thickening associated with the evolution of a mountain belt causes the lithosphere to bend by a process known as lithospheric flexure"
        />
      </JumbleQuestions>
    </>
  );
};

const Lec14 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are basins formed in transform plate margin"
        answer={["Pull Apart basin"]}
      />
      <OneLineQuestion
        question="What does length in pull apart basin represent"
        answer="Direction of movement"
      />
      <OneLineQuestion
        question="What does width in pull apart basin represent"
        answer="Fracture zone"
      />
      <MultipleInputQuestion
        question="What are primary minerals in granite"
        answer={["Quartz", "Hornblende", "Feldspar"]}
      />
      <MultipleInputQuestion
        question="How are rocks are divided by chemical composition"
        answer={[
          "Silicates",
          "Carbonates",
          "Oxides",
          "Sulphides",
          "Halides",
          "Native Elements",
        ]}
      />
    </>
  );
};

const Lec15 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are properties of mineral"
        answer={[
          "Naturally occurring",
          "Inorganic solid",
          "Ordered internal molecular structure",
          "Definite chemical composition",
        ]}
      />
      <MultipleInputQuestion
        question="What are type of physical properties of minerals"
        answer={[
          "Color and streak",
          "Luster",
          "Crystal form",
          "Cleavage",
          "hardness",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of minerals"
        answer={["Rock forming minerals", "Ore forming minerals"]}
      />
      <MultipleInputQuestion
        question="What are mineral groups in rock forming minerals"
        answer={[
          "Silicates",
          "Carbonates",
          "Oxides",
          "Sulphides",
          "Halides",
          "Native Elements",
        ]}
      />
    </>
  );
};

const Lec16 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are examples of rock forming minerals"
        answer={["Quartz", "Calcite"]}
      />
      <MultipleInputQuestion
        question="What are examples of ore forming minerals"
        answer={["Barite", "Bauxite"]}
      />
    </>
  );
};

const Lec20 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is ore"
        answer="Rock with high concentration of a mineral which can be commerically recovered"
      />
      <MultipleInputQuestion
        question="What are types of rock"
        answer={["Primary rock", "Secondary rock"]}
      />
      <OneLineQuestion
        question="What type of rocks are in primary rock"
        answer="Igneous rock"
      />
      <MultipleInputQuestion
        question="What type of rocks are in secondary rock"
        answer={["Sedimentary rock", "Metamorphic rock"]}
      />
      <MultipleInputQuestion
        question="What are properties of igneous rock"
        answer={["Non permeable", "Non porous"]}
      />
      <MultipleInputQuestion
        question="What are factors that affect melting of rocks"
        answer={["Pressure", "Water content", "Composition"]}
      />
      <JumbleQuestions>
        <TrueOrFalse
          question="Felsic minerals melt at lower temperature than Mafic minerals"
          answer={true}
        />
        <TrueOrFalse
          question="Felsic minerals melt at higher temperature than Mafic minerals"
          answer={false}
        />
      </JumbleQuestions>
      <OneLineQuestion
        question="What is magma differentiation"
        answer="Process by which rocks of various composition can arise from a uniform parent magma"
      />
      <FillInTheBlanks
        question="What are steps in formation of magma chambers"
        answer={[
          "Partial melting",
          "Less dense magma",
          "Magma rises",
          "Magma pools in magma chamber",
        ]}
      />
      <OneLineQuestion
        question="What is stock"
        answer="Vertical intrusion of magma which erupts on surface"
      />
      <MultipleInputQuestion
        question="How do we classify igneous rocks"
        answer={["Appearance", "Genetic origin", "Composition"]}
      />
      <MultipleInputQuestion
        question="On what parameters we classify igneous rocks based on appearance"
        answer={["Mineralogy", "Texure"]}
      />
      <OneLineQuestion
        question="What is texture of rock"
        answer="Arrangement of grains"
      />
      <MultipleInputQuestion
        question="What are types of igneous rocks classified based on Igneous rock"
        answer={["Aphanitic", "Phaneritic", "Porphyritic", "Glassy"]}
      />
      <OneLineQuestion
        question="What is Aphanitic"
        answer="Crystals too small to see by eye"
      />
      <OneLineQuestion
        question="What is Phaneritic"
        answer="Can see consitutent minerals"
      />
      <OneLineQuestion
        question="What is Porphyritic"
        answer="Bimodal grain size distribution"
      />
      <OneLineQuestion question="What is glassy" answer="No crystals formed" />
      <MultipleInputQuestion
        question="On what parameters we classify igneous rocks based on genetic origin"
        answer={["Intrusive", "Extrusive"]}
      />
      <MultipleInputQuestion
        question="On what parameters we classify igneous rocks based on composition"
        answer={["Chemistry", "Mineralogy"]}
      />
      <OneLineQuestion
        question="How does chemistry is used to classify igneous rocks"
        answer="Determining the silica content of a rock"
      />
      <FillInTheBlanks
        question={[
          "Percentage of silica in igneous rock ranges from",
          "to",
          "",
        ]}
        answer={["40%", "70%"]}
      />
      <MultipleInputQuestion
        question="What are types of igneous rock classified based on chemistry"
        answer={["Silica rich", "Silica poor"]}
      />
      <MultipleInputQuestion
        question="What are types of igneous rock classified based on Mineralogy"
        answer={["Felsic", "Intermediate", "Mafic", "Ultramafic"]}
      />
      <FillInTheBlanks
        question={["Felsic igneous rock is", "in minerals containing silica"]}
        answer={["High"]}
      />
      <FillInTheBlanks
        question={[
          "Felsic igneous rock is",
          "in minerals containing iron and magnesium",
        ]}
        answer={["low"]}
      />
      <MultipleInputQuestion
        question="What are examples of felsic igneous rock"
        answer={["Granite", "Rhyolite"]}
      />
      <MultipleInputQuestion
        question="What are examples of intermediate igneous rock"
        answer={["Dacite", "Diorite"]}
      />
      <MultipleInputQuestion
        question="What are examples of mafic igneous rock"
        answer={["Gabbro", "Basalt"]}
      />
      <OneLineQuestion
        question="What are examples of ultramafic igneous rock"
        answer="Peridotite"
      />
    </>
  );
};

const Lec23 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is diagenesis"
        answer="Change in form that occurs in sedimentary rock"
      />
      <MultipleInputQuestion
        question="In what condition diagenesis occurs"
        answer={["Temperature below 200C", "Pressure below 300 MPa"]}
      />
      <OneLineQuestion
        question="What is metamorphsim"
        answer="Recrystallization of pre existing rock without melting"
      />
      <MultipleInputQuestion
        question="In what condition metamorphism occurs"
        answer={["Temperature above 200C", "Pressure above 300 MPa"]}
      />
      <OneLineQuestion
        question="Where does upper limit of metamorphism occurs"
        answer="Pressure and Temperature where melting of rock begins"
      />
      <OneLineQuestion
        question="What is Metamorphic grade"
        answer="General term describing relative temperature and pressure condition under which metamorphic rocks form"
      />
      <MultipleInputQuestion
        question="What are different types of metamorphic grade"
        answer={["Low grade", "High grade"]}
      />
      <MultipleInputQuestion
        question="What are condition in which low grade metamorphism takes place"
        answer={["200 to 320C", "Relatively low pressure"]}
      />
      <MultipleInputQuestion
        question="What are conditions in which high grade metamorphism takes place"
        answer={["Temperature greater than 320C", "Relatively high pressure"]}
      />
      <OneLineQuestion
        question="How much hydrous minerals are present in low grade metamorphism"
        answer="Huge amount of hydrous minerals"
      />
      <OneLineQuestion
        question="What happens to hydrous minerals with increasing grade of metamorphism"
        answer="Hydrous minerals reacts with other minerals or break down into less hydrous minerals"
      />
      <MultipleInputQuestion
        question="What are types of metamorphism"
        answer={[
          "Contact Metamorphism",
          "Regional Metamorphism",
          "Cataclastic metamorphism",
          "Hydrothermal Metamorphism",
          "Burial metamorphism",
          "Shock Metamorphism",
        ]}
      />
      <OneLineQuestion
        question="What is contact Metamorphism"
        answer="Occurs adjacent to igneous intrusion and results from higher tempearture associated with igneous intrusion"
      />
      <OneLineQuestion
        question="What is zone surronding near to intrusion in contact metamorphism is called"
        answer="Contact Aureole"
      />

      <JumbleQuestions>
        <TrueOrFalse
          question="In contact metamorphism rocks outside contact aureole does not undergo metamorphism"
          answer={true}
        />
        <TrueOrFalse
          question="In contact metamorphism rocks outside contact aureole does undergo metamorphism"
          answer={false}
        />
      </JumbleQuestions>
      <OneLineQuestion
        question="Contact metamorphism is also referred as"
        answer="High temperature, low pressure metamorphism"
      />
      <OneLineQuestion
        question="What type of rock is produced from contact metamorphism"
        answer="Fine grained rock with no foliation called as hornfels"
      />
      <OneLineQuestion
        question="Write about grade of metamorphism in contact metamorphism"
        answer="Grade of metamorphism increases in all direction towards intrusive event"
      />
      <OneLineQuestion
        question="Why does grade of metamorphism increases towards intrusive event in contact metamorphism"
        answer="Temperature contrast between surrounding rock and intruded magma is larger at shallow levels"
      />
      <OneLineQuestion
        question="What is Regional Metamorphism"
        answer="Occurs over large areas due to deformation under non hydrostatic or differential stress condition"
      />
      <MultipleInputQuestion
        question="What are condition ofr regional metamorphism"
        answer={["High temperature", "High pressure"]}
      />
      <OneLineQuestion
        question="What are characteristic of Regional metamorphic rocks"
        answer="Strongly foliated"
      />
      <MultipleInputQuestion
        question="What are examples of regional metamorphic rocks"
        answer={["Slates", "Schists", "Gneiss"]}
      />
      <OneLineQuestion
        question="How does differential stress occurs"
        answer="Tectonic forces that produce compressional stress in rocks"
      />
      <MultipleInputQuestion
        question="Where does differential stress is common"
        answer={[
          "Core of fold mountain belts",
          "Core of thrust mountain belts",
          "Eroded mountain ranges",
        ]}
      />
      <OneLineQuestion
        question="What does compressive stress leads to?"
        answer="Folding of rocks and thickening of the crust, which pushes rocks to deeper levels where they are subjected to higher tempearture and pressure"
      />
      <OneLineQuestion
        question="What is cataclastic metamorphism"
        answer="Occurs as result of mechanical deformation"
      />
      <FillInTheBlanks
        question="Explain in detail about how cataclastic metamorphism occurs"
        answer={[
          "Two bodies of rock slide past each other along a fault zone",
          "Heat is generated by friction of sliding along shear zone",
          "Therefore rocks are mechanically deformed due to shearing",
        ]}
      />
      <TrueOrFalse
        question="Cataclastic metamorphism is common"
        answer={false}
      />
      <TrueOrFalse
        question="Cataclastic metamorphism is not common"
        answer={true}
      />
      <OneLineQuestion
        question="What is hydrothermal metamorphism"
        answer="Rocks that are altered by high temperature and moderate pressure by hydrothermal fluids"
      />
      <OneLineQuestion
        question="In what type of rocks hydrothermal metamorphism is common"
        answer="Rocks that lack hydrous minerals"
      />
      <OneLineQuestion
        question="What does hydrothermal metamorphism leads to"
        answer="Alteration to Mg-Fe rich hydrous minerals"
      />
      <MultipleInputQuestion
        question="What are examples of Mg-Fe rich hydrous minerals"
        answer={["Talc", "Chlorite"]}
      />
      <OneLineQuestion
        question="What forms as a result of hydrothermal metamorphism"
        answer="Rich ore deposits"
      />
    </>
  );
};

const Lec24 = () => {
  return (
    <>
      <Essay2 question="Explain Burial metamorphism">
        <FillInTheBlanks
          question={[
            "",
            "rocks are",
            "to depths of",
            ",",
            "may develop in the",
            "",
          ]}
          answer={[
            "Sedimentary",
            "buried",
            "several hundred meters",
            "temperature greater than 300 C",
            "absence of differential stress",
          ]}
        />
        <FillInTheBlanks
          question={["New", "grow but the rock", ""]}
          answer={["Minerals", "does not appear to be metamorphosed"]}
        />
      </Essay2>
      <OneLineQuestion
        question="What main mineral is formed in Burial metamorphism"
        answer="Zeolites"
      />
      <FillInTheBlanks
        question={[
          "Burial metamorphism overlaps to some extent with",
          "and grades into",
          "as",
          "",
        ]}
        answer={[
          "diagenesis",
          "Regional metamorphism",
          "temperature and pressure increase",
        ]}
      />

      <Essay2 question="Explain in detail about Shock metamorphism">
        <FillInTheBlanks
          question={[
            "When an",
            "body",
            "the earth or if there is very",
            ",",
            "can be generated in",
            "",
          ]}
          answer={[
            "extraterrestrial",
            "impacts",
            "large volcanic explosion",
            "ultrahigh pressure",
            "impacted rock",
          ]}
        />
        <FillInTheBlanks
          question={["These", "can", "that are only", ""]}
          answer={[
            "Ultrahigh pressure",
            "produce minerals",
            "stable in high pressure",
          ]}
        />
        <OneLineQuestion
          question="What type of texture is produced in mineral"
          answer="Shock Lamellae"
        />
        <OneLineQuestion
          question="What type of texture is produced in impacted rock"
          answer="Shatter cones"
        />
      </Essay2>
      <OneLineQuestion
        question="What is another name for shock metamorphism"
        answer="Impact metamorphism"
      />
      <MultipleInputQuestion
        question="What are types of metamorphic rock"
        answer={["Foliated", "Non foliated"]}
      />
      <OneLineQuestion
        question="What is foliated metamorphic rock"
        answer="Contain liner or planer features"
      />
      <OneLineQuestion
        question="How does foliated metamorphic rock forms"
        answer="Active pressure during regional metamorphism"
      />
      <OneLineQuestion
        question="What is non foliated metamorphic rock"
        answer="Shows no foliation"
      />
      <OneLineQuestion
        question="What is metasomatism"
        answer="Drastic change in chemical composition of pre existing rock"
      />
      <OneLineQuestion
        question="What is metamorphic facies"
        answer="Set of mineral assemblages formed under similar pressure and temperature"
      />
    </>
  );
};

const Lec26 = () => {
  return (
    <>
      <OneLineQuestion
        question="How does sedimentary rocks forms"
        answer="Pre existing subjected to sedimentary process"
      />
      <MultipleInputQuestion
        question="What are different sedimentary process"
        answer={["Physical weathering", "Chemical weathering"]}
      />
      <OneLineQuestion
        question="What is chemical weathering"
        answer="Breakdown of rock into smaller pieces by chemical reaction and it changes chemical composition of rock"
      />
      <MultipleInputQuestion
        question="What are different types of chemical weathering"
        answer={["Oxidation", "Hydration", "Carbonation"]}
      />
      <OneLineQuestion
        question="What is oxidation"
        answer="Oxygen combines with elements in the rock"
      />
      <OneLineQuestion
        question="What is scientific name for oxidation"
        answer="Rust"
      />
      <OneLineQuestion
        question="What is hydration"
        answer="Water will dissolve many earth materials"
      />
      <OneLineQuestion
        question="What is carbonation"
        answer="Carbon dioxide dissolves in water to form carbonic acid which makes acid rain"
      />
      <MultipleInputQuestion
        question="What are factors that affect weathering"
        answer={[
          "Surface area",
          "Particle size",
          "Chemical composition",
          "Climate",
        ]}
      />
      <OneLineQuestion
        question="How does surface area affect weathering"
        answer="More surface area will increase rate of weathering"
      />
      <OneLineQuestion
        question="How does particle size affect weathering"
        answer="Larger particle weather slower"
      />
      <OneLineQuestion
        question="How does climate affect weathering"
        answer="Warmer, moister climate have most weathering"
      />
      <MultipleInputQuestion
        question="What are types of soil"
        answer={["Transported soil", "Residual soil"]}
      />
      <OneLineQuestion
        question="What is transported soil"
        answer="Soil that formed in one place and were transported to their present location of glacier"
      />
      <OneLineQuestion
        question="How do we find transported soil"
        answer="Soil does not chemically match bedrock below it"
      />
      <OneLineQuestion
        question="What is Residual soil"
        answer="Soil that are located above the rocks that they formed from"
      />
      <OneLineQuestion
        question="How do we find transported soil"
        answer="Soil chemically match bedrock below it"
      />
      <MultipleInputQuestion
        question="What are basic products that are formed due to weathering"
        answer={["Soils", "Solid sediments", "Clay particles", "Ions"]}
      />
      <MultipleInputQuestion
        question="What is the importance of sedimentary rocks"
        answer={[
          "Helps in knowing depositional environment",
          "Helps in knowing provence",
          "Helps in knowing change in climate conditions",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of sedimentary rocks"
        answer={["Clastic rocks", "Chemical and organic rocks"]}
      />
      <OneLineQuestion
        question="What is clastic rocks"
        answer="Forms from broken fragments of older rocks"
      />
      <MultipleInputQuestion
        question="What are types of chemical and organic sedimentary rocks"
        answer={["Evaporitic rocks", "Carbonate rocks", "Organic rocks"]}
      />
      <OneLineQuestion
        question="What is Evaporitic rocks"
        answer="Forms due to evaporation of saline water"
      />
      <OneLineQuestion
        question="What is Carbonate rocks"
        answer="Forms from CaCo3 both by chemical leaching and by organic source"
      />
      <OneLineQuestion
        question="What is organic rocks"
        answer="Forms due to decomposition of organic remains under temperature and pressure"
      />
    </>
  );
};

const Lec27 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What characteristic refers to grains texture"
        answer={["Grain size", "Grain shape", "Grain orientation"]}
      />
      <OneLineQuestion
        question="What is matrix"
        answer="Fine grains that surrounds the large clasts"
      />
      <OneLineQuestion
        question="What is cement"
        answer="Dissolved substance that bounds the sediments"
      />
      <MultipleInputQuestion
        question="What are types of cement"
        answer={["Calcareous", "Siliceous"]}
      />
      <OneLineQuestion
        question="What is significance of roundness of grains"
        answer="Grains that transported over longer distance is more rounded"
      />
      <MultipleInputQuestion
        question="What are different types of grain based on roundness of grain"
        answer={["Angular clast", "Rounded clast"]}
      />
      <OneLineQuestion
        question="What is conglomerates"
        answer="Clastic fragments which are cemented or undergo consolidataion"
      />
      <OneLineQuestion
        question="What is Breccia"
        answer="Angular clasts which undergo consolidation"
      />
      <OneLineQuestion
        question="What is sorting of grains"
        answer="Homogenous distribution of grain size"
      />
      <OneLineQuestion
        question="What is the significance of sorting of grains"
        answer="Grains that transported over longer distances are very sorted"
      />
      <MultipleInputQuestion
        question="How do you classify clastic rock based on size"
        answer={["Rudaceous", "Arenaceous", "Argillaceous"]}
      />
      <OneLineQuestion
        question="What is rudaceous rocks"
        answer="Made of rounded or sub rounded pebble and cobbles"
      />
      <OneLineQuestion
        question="What is an example of rudaceous rocks"
        answer="Conglomerate"
      />
      <OneLineQuestion
        question="What is Arenaceous rocks"
        answer="Made up of mainly sand size sediments"
      />
      <OneLineQuestion
        question="What is an example of Arenaceous rocks"
        answer="Sandstone"
      />
      <OneLineQuestion
        question="What is Argillaceous rocks"
        answer="Made of clay size sediments"
      />
      <OneLineQuestion
        question="What is an example Argillaceous rocks"
        answer="Shale"
      />
    </>
  );
};

const Lec28 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is earthquake"
        answer="Shaking of surface of earth from sudden release of energy in lithosphere that creates seismic waves"
      />
      <OneLineQuestion
        question="What is cause of earthquake"
        answer="Rock underground suddenly breaks along a fault"
      />
      <MultipleInputQuestion
        question="What are types of earthquake"
        answer={[
          "Tectonic Earthquake",
          "Induced Earthquake",
          "Volcanic earthquake",
        ]}
      />
      <OneLineQuestion
        question="What is tectonic earthquake"
        answer="Earthquake caused by plate tectonics"
      />
      <OneLineQuestion
        question="Where does tectonic earthquake usually occurs"
        answer="Boundaries of tectonic plates"
      />
      <OneLineQuestion
        question="What is Induced earthquake"
        answer="Earthquakes caused by human activity"
      />
      <OneLineQuestion
        question="What is Volcanic earthquake"
        answer="Earthquakes associated with active volcanism"
      />

      <OneLineQuestion
        question="What type of earthquake is most common"
        answer="Tectonic earthquake"
      />
      <OneLineQuestion
        question="What is focus"
        answer="Where earthquake begins"
      />
      <OneLineQuestion
        question="What is epicenter"
        answer="Point on the ground directly above the focus"
      />
      <OneLineQuestion
        question="What is fault"
        answer="Week point in tectonic plate where pressure within crust is released "
      />
    </>
  );
};

const Lec29 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are petrophysical properties of clastic and carbonate reservoir"
        answer={["Porosity", "Permeability"]}
      />
      <MultipleInputQuestion
        question="What factors affect primary porosity"
        answer={["Roundness of particle", "Packing", "Sorting"]}
      />
      <MultipleInputQuestion
        question="What factors affect secondary porosity"
        answer={[
          "Cementing materials",
          "Overburden stress",
          "Vugs, dissolution and fractures",
        ]}
      />
      <OneLineQuestion
        question="How does roundness affect porosity"
        answer="Increasing roundness will decreases porosity"
      />
      <OneLineQuestion
        question="How does packing affect porosity"
        answer="Increasing packing density decreases porosity"
      />
      <OneLineQuestion
        question="How does sorting affect porosity"
        answer="Increasing sorting increases porosity"
      />
    </>
  );
};

const Lec32 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is tortuosity"
        answer="Measure of degree of deviation of a pathway from a straight line"
      />
      <OneLineQuestion
        question="How does tortuosity affects permeability"
        answer="Larger tortuosity means reduced permeability"
      />
      <OneLineQuestion
        question="What is outcrop"
        answer="Geological formation exposed on surface"
      />
      <OneLineQuestion
        question="What is strike"
        answer="Direction in which geological structure is present"
      />
      <OneLineQuestion
        question="What is strike direction"
        answer="Direction of trace of intersection between the bedding plane and horizontal plane"
      />
      <OneLineQuestion
        question="What is dip angle"
        answer="Steepest angle of descent of titled bed and is given by number and a letter"
      />
      <OneLineQuestion
        question="What is dip direction"
        answer="Direction along which inclination of bedding plane occurs"
      />
      <OneLineQuestion
        question="What is fold"
        answer="When a set of horizontal layers are subjected to compressive force they bend either upward or downward"
      />
      <OneLineQuestion
        question="What is folding"
        answer="Process of development in folds in rock"
      />
    </>
  );
};

const Lec33 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="In what areas river will deposit sediments"
        answer={["Channel areas", "Plane areas"]}
      />
      <MultipleInputQuestion
        question="What is the nature of river"
        answer={["Constructive", "Destructive"]}
      />
      <MultipleInputQuestion
        question="What are constructive work"
        answer={["Flood plains", "Deltas", "Alluvial planes"]}
      />
      <MultipleInputQuestion
        question="What are destructive work"
        answer={[
          "River carve out valley",
          "Valleys are enlarged",
          "Valleys are deepened",
        ]}
      />
      <MultipleInputQuestion
        question="What are types of River channels"
        answer={["Straight", "Meandering", "Braided", "Anastomosing"]}
      />
    </>
  );
};

const Lec34 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are types of Drainage patterns"
        answer={[
          "Dendritic pattern",
          "Rectangular pattern",
          "Radial pattern",
          "Trellis pattern",
        ]}
      />
      <OneLineQuestion
        question="Where does dendritic pattern develops"
        answer="Relatively uniform bedrock"
      />
      <OneLineQuestion
        question="Where does Rectangular pattern develops"
        answer="highly jointed bedrock"
      />
      <OneLineQuestion
        question="Where does radial pattern develops"
        answer="Isolated volcanic cones or domes"
      />
      <OneLineQuestion
        question="Where does trellis pattern develops"
        answer="Areas of alternating weak and resistant bedrock"
      />
      <OneLineQuestion
        question="What is drainage pattern"
        answer="Pattern created by stream erosion over time that reveals characteristic of the kind of rocks and geologic structures"
      />
    </>
  );
};

export const ForExamGeology = () => {
  return (
    <>
      <Lec4 />
      <Lec5 />
      <Lec8 />
      <Lec9 />
      <Lec10 />
      <Lec12 />
      <Lec13 />
      <Lec14 />
      <Lec15 />
      <Lec16 />
      <Lec20 />
      <Lec23 />
      <Lec24 />
      <Lec26 />
      <Lec27 />
      <Lec28 />
      <Lec29 />
      <Lec32 />
      <Lec33 />
      <Lec34 />
    </>
  );
};
