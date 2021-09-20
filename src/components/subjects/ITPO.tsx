import React from "react";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { TrueOrFalse } from "../question/trueOrFalse";

export const ITPO = () => {
  return (
    <>
      <OneLineQuestion
        question="Define Resources"
        answer="Volume of amount that is still available to us and can be commercially recovered in future"
      />
      <SingleChoiceQuestion
        question="What type of resource are available in large amount"
        choices={[
          "Low concentration, Difficult to extract",
          "High concentration, Difficult to extract",
          "Low concentration, Easy to extract",
          "High concentration, Easy to extract",
        ]}
        answer={0}
      />
      <SingleChoiceQuestion
        question="What type of resource are available in small amount"
        choices={[
          "Low concentration, Difficult to extract",
          "High concentration, Difficult to extract",
          "Low concentration, Easy to extract",
          "High concentration, Easy to extract",
        ]}
        answer={3}
      />
      <OneLineQuestion
        question="Define petroleum reserve"
        answer="Those quantities of petroleum which by analysis of geo science and engineering data can be estimated with reasonable certainty to be commercially recoverable from a given date forward, from known reservoirs and under defined economic condition, operation methods and government regulations"
      />
      <MultipleInputQuestion
        question="What are three types of reserves"
        answer={["Proved", "Probable", "Possible"]}
      />
      <OneLineQuestion
        question="How does Proved reserves is classified"
        answer="These are reservers which has atleast 90% probability that the quantities recovered will equal or exceed the estimate"
      />
      <OneLineQuestion
        question="How does Probable reserves is classified"
        answer="These are reservers which has atleast 50% probability that the quantities recovered will equal or exceed the sum of estimated proved reserve and probable reserve"
      />
      <OneLineQuestion
        question="How does Possible reserves is classified"
        answer="These are reservers which has atleast 10% probability that the quantities recovered will equal or exceed the sum of estimated proved reserve, probable reserve, possible reserve"
      />
      <MultipleInputQuestion
        question="What are two types oil and gas resource can be classified"
        answer={["Conventional", "Unconventional"]}
      />
      <OneLineQuestion
        question="Define conventional resource"
        answer="They are formations that can be produced at economic flow rates or that produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
      />
      <OneLineQuestion
        question="Define unconventional resource"
        answer="They are formations that cannot be produced at economic flow rates or do not produce economic volumes of oil and gas without stimulation treatments or special recovery process and technologies"
      />
      <SingleChoiceQuestion
        question="How many barrels of oil does a giant oil field contains"
        choices={[
          "500 million barrels to 5 billion barrels",
          "500 thousand barrels to 5 million barrels",
          "5 million barrels to 5 billion barrels",
          "5 thousand barrels to 5 million barrels",
        ]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="How many barrels of oil does a supergiant oil field contains"
        choices={[
          "More than 5 billion barrels",
          "More than 5 million barrels",
          "More than 10 billion barrels",
          "More than 10 million barrels",
        ]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="How many ft3 of gas does a giant gas field contains"
        choices={[
          "3 trillion to 30 trillion ft3",
          "3 billion to 30 trillion ft3",
          "3 billion to 30 billion ft3",
          "3 trillion to 30 trillion ft2",
        ]}
        answer={1}
      />

      <OneLineQuestion
        question="What is coal gas"
        answer="Gas recovered from coal beds is known as coal gas."
      />
      <FillInTheBlanks
        question={["Explain the formation of coal gas"]}
        answer={[
          "Biogenic methane is produced by anerobic bacteria in the early stages of coalification",
          "Thermo-genic methane is mainly during coalification at temperatures of 120-150 C",
          "Coal gas dont migrate from source rock into the reservoir rock",
          "Coal is the source rock and the reservoir rock",
          "The methane does not occur as free gas in the pore space of coal ",
          "Coal can store around 6 to 7 time more methane than equivalent volume of rock in conventional reservoir",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The coal gas can be presented as liberated gas in the",
          "or as a ",
          "on the",
          "of the",
          "",
        ]}
        answer={[
          "Fracture system",
          "monomolecular layer",
          "internal surface",
          "coal matrix",
        ]}
      />
      <OneLineQuestion
        question="What is the predominate gas in the composition of coal gas"
        answer="Methane"
      />
      <MultipleInputQuestion
        question="What are the constituents of coal gas other than methane"
        answer={["Ethane", "Carbon dioxide", "nitrogen", "hydrogen"]}
      />
      <OneLineQuestion
        question="Coal gas is also known as"
        answer="Coalbed Methane"
      />
      <TrueOrFalse
        question="The practice of degasifying or removing gas from a coal seam was originally used to improve coal miner safety"
        answer={true}
      />
      <FillInTheBlanks
        question={[
          "Coal gas bound in the micropore structure of the coalbed can diffuse into the natural fracture network when a",
          "exists between the",
          "and the",
        ]}
        answer={["pressure gradient", "matrix", "fracture network"]}
      />
      <OneLineQuestion
        question="What does fractures in coalbed are called"
        answer="Cleats"
      />
      <OneLineQuestion
        question="What is permeability"
        answer="The ability to flow between two points in porous medium is called permeability"
      />
      <MultipleInputQuestion
        question="What factors does permeability depends on?"
        answer={[
          "Size of pores",
          "Shape of pores",
          "Size and shape of pore interconnections",
          "Extent of pore interconnections",
        ]}
      />
      <FillInTheBlanks
        question={["Explain the process of recovery of coal gas"]}
        answer={[
          "Gas recovery begins with desorption of gas from the internal surface to the coal matrix and micropores",
          "The gas then diffuses through the coal matrix and micro pores into the cleats",
          "Finally, gas flows through the cleats to the production well",
          "The injection of carbon dioxide into a coal seam can increase the coal gas recovery because carbon dioxide preferentially displaces methane in the coal matrix",
        ]}
      />
      <MultipleInputQuestion
        question="What factors does flow rate of coal gas through cleats depends on?"
        answer={[
          "Pressure gradient in the cleats",
          "Density of cleats",
          "Distribution of cleats",
        ]}
      />
      <FillInTheBlanks
        question={["Explain the production from coal gas"]}
        answer={[
          "The well produces water from the cleat system in the first production stage",
          "The withdrawal of water reduces pressure in the cleat system relative to the coal matrix and establishes a pressure gradient that allow coal gas to flow into cleat system",
          "The gas production rate increases during the first stage of cleat system dewatering and pressure depletion",
          "The amount of water produced during the second stage of production is relatively small compared to gas production because there is more gas present in the cleat system relative to mobile water",
          "As a result the gas production rate peaks during the second stage of production and gradually declines during the third stage of production as coalbed pressure declines",
        ]}
      />

      {
        // -------------- Tar Sands ---------------- //
      }

      <OneLineQuestion
        question="What is tar sands"
        answer="Tar sands are a mixture of sand, clay, water and bitumen"
      />
      <OneLineQuestion
        question="What is bitumen"
        answer="Bitumen is a thick, sticky, black oil that can form naturally in a variety of ways usually when lighter oil is degraded by bacteria"
      />
      <TrueOrFalse
        question="Tar sands are also known as oil sands"
        answer={true}
      />
      <FillInTheBlanks
        question={["Explain environment challenges in exploiting Tar sands"]}
        answer={[
          "Oil production from tar sands uses large amount of land for open pit mining, water and energy compared to other oil resources",
          "Open pit mining also produces a lot of waste that may pose a risk to nearby water supplies",
        ]}
      />
      <MultipleInputQuestion
        question={[
          "Write about the attempts to decrease environment damage in exploiting Tar sands",
        ]}
        answer={[
          "Using non-potable and recycled water",
          "Moving to in-situ rather than open pit mining to decrease land use and water",
          "Using carbon capture and storage to reduce greenhouse gas emission from the extraction",
          "Use oil from tar sands",
        ]}
      />
      <OneLineQuestion
        question="Challenges in extracting the bitumen"
        answer="Bitumen is very thick molasses like substance and does not flow easily as a result it clings to the sand and clay and cant be simply pumped out of the ground through wells"
      />
      <FillInTheBlanks
        question={["Explain the process of open pit mining"]}
        answer={[
          "Much like open pit coal mining, if the tar sands are found near the surface they can be mined directly",
          "Then they can be transferred to an extraction plant where the bitumen can be separated from the sand, clay and water",
        ]}
      />
      <FillInTheBlanks
        question={["Explain the process of in-situ mining"]}
        answer={[
          "If tar sands are too deep they can be extracted by injecting hot steam or solvents to loosen up the bitumen and allow it to flow through a well to the surface",
          "An alternative to fluid injection is electromagnetic heating",
        ]}
      />

      {
        // ---------- Finished Tar sand ----------
      }

      <MultipleInputQuestion
        question="What are the examples of low permeability hydrocarbon resources"
        answer={["Tight gas sands", "Shale"]}
      />
      <SingleChoiceQuestion
        question="What is order of permeability of tight gas sand"
        choices={["microdarcies", "millidarcies", "megadarcies", "nanodarcies"]}
        answer={1}
      />
      <SingleChoiceQuestion
        question="What is order of permeability of shale"
        choices={["microdarcies", "millidarcies", "megadarcies", "nanodarcies"]}
        answer={4}
      />
      <MultipleInputQuestion
        question={[
          "Economic production of hydrocarbons from shale or tight sand became possible with development of",
          "and",
          "technology",
        ]}
        answer={["Directional drilling", "Hydraulic fracturing"]}
      />
      <OneLineQuestion
        question="Define tight gas sands"
        answer="Tight gas sands are defined as sandstone formation with less than 0.1 millidarcy permeability"
      />

      <FillInTheBlanks
        question={["What is shale oil and gas"]}
        answer={[
          "They refer to hydrocarbons that are contained in formation of shale rock",
          "Shale oil is closer to a finished product than oil shale, but the extraction process still involves drilling and fracking",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Shales are typically rich in",
          "and often serve as",
          "for",
          "and",
        ]}
        answer={[
          "organic materials",
          "source rock",
          "conventional oil",
          "gas fields",
        ]}
      />

      <OneLineQuestion
        question="What is oil shale"
        answer="Oil shale is generally defined as a fine grained sedimentary rock containing organic matter (kerogen) that upon destructive distillation yields significant amount of oil and combustible gas"
      />
      <MultipleInputQuestion
        question="What are methods to convert the kerogen into useful product"
        answer={[
          "To mine the oil shale and then heat it later in a low oxygen environment",
          "To heat the oil shale on site by applying heat to the shale formation, then the resulting fluid can be pumped out",
        ]}
      />
      <MultipleInputQuestion
        question="What are differences between two methods"
        answer={[
          "First method requires more heat than second method",
          "In on site method the gas produced as a by product can be recycled to produce more heat",
          "In on site method the end product is of higher quality",
        ]}
      />

      <OneLineQuestion
        question="What is gas hydrates"
        answer="The entrapment of natural gas molecules in an ice like crystalline form of water at very low temperatures forms an ice like solid called gas hydrate"
      />
      <TrueOrFalse
        question="Gas hydrates are called as clathrates"
        answer={true}
      />
      <OneLineQuestion
        question="What is clathrates"
        answer="It is chemical complex that is formed when on type of molecule completely encloses another type of molecule in lattice"
      />

      <OneLineQuestion
        question="What is sedimentary basin"
        answer="It is an area of earth crust that is underlain by thick sequence of sedimentary rocks"
      />

      <TrueOrFalse
        question="The rocks in sedimentary basin can exhibit significant variability throughout the basin"
        answer={true}
      />

      <MultipleInputQuestion
        question={[
          "Rock heterogeneity is due to different",
          "and changes in",
          ",",
          ", and",
          "of",
          "material",
        ]}
        answer={[
          "depositional environments",
          "pressure",
          "density",
          "composition",
          "deposited",
        ]}
      />
      <MultipleInputQuestion
        question={[
          "The application of tectonic forces such as",
          ",",
          "and",
          "can result in major changes in the orientation and continuity of rock strata",
        ]}
        answer={["Folding", "Faulting", "Fracturing"]}
      />

      <OneLineQuestion
        question="What is source rocks"
        answer="Fine grained sediment that in its natural setting has generated and released enough hydrocarbons to form a commercial accumulation of oil and gas"
      />
      <SingleChoiceQuestion
        question="What is the most important factor in the generation of petroleum in source rocks"
        choices={["Temperature", "Pressure", "Permeability", "Porosity"]}
        answer={1}
      />
      <OneLineQuestion
        question="What leads to formation of oil and gas in source rocks"
        answer="The action of heat on the insoluble organic matter (kerogen) contained in source rocks leads to the formation of oil and gas"
      />
      <OneLineQuestion
        question="What is Reservoir rocks"
        answer="A petroleum reservoir is porous and permeable rock in communication with mature source bed"
      />

      <MultipleInputQuestion
        question={[
          "",
          "and",
          "rocks form the overwhelming majority of reservoirs world-wide",
        ]}
        answer={["Sandstone", "Carbonate"]}
      />

      <FillInTheBlanks
        question={["Explain the process of entrapment of petroleum"]}
        answer={[
          "Oil, gas and water slowly migrate through permeable rocks, driven by natural forces of gravity and pressure gradients",
          "When they meet an impermeable barrier, they can go no further, so oil and gas accumulate. This barrier is generally referred to as trap",
          "Varying densities make the gas phase rise, while the water settles to the lowest point and the oil remains in the middle",
        ]}
      />

      <FillInTheBlanks
        question="What is trap"
        answer={[
          "A trap is an arrangement of rock layers that contains an accumulation of hydrocarbons, yet prevents them from rising to surface",
          "The trap consists of an impermeable layer of rocks above a porous, permeable layer containing the hydrocarbons",
        ]}
      />

      <MultipleInputQuestion
        question="What are different types of traps"
        answer={[
          "Structural Traps",
          "Stratigraphic Traps",
          "Combination Traps",
        ]}
      />
      <FillInTheBlanks
        question={[
          "By far the greatest number of fields discoverd world-wide and the largest proportion of total proven reserves are associated with",
          "traps",
        ]}
        answer={["Structural"]}
      />

      <FillInTheBlanks
        question="How does structural traps are formed"
        answer={[
          "It may result from a local deformation such as folding and faulting of the rock layers",
          "Faulting can also produce traps by contrasting a reservoir against an impervious stratum",
        ]}
      />

      <OneLineQuestion
        question="What is stratigraphic traps"
        answer="It is a general term for traps that are chiefly the result of a lateral variation in the lithology of the reservoir rock or a break in its continuity, thus a permeable reservoir rock changes to a less permeable or to an impermeable rock"
      />

      <MultipleInputQuestion
        question="What are two types of Stratigraphic traps"
        answer={["Pinchout Trap", "Truncated Trap"]}
      />

      <OneLineQuestion
        question="What is combination trap"
        answer="The geometry of this type of trap is the result of a combination of tectonic process and changes in lithology"
      />

      <FillInTheBlanks
        question="Write about migration of petroleum"
        answer={[
          "Oil and gas move out of the source beds and accumulate in the reservoir rocks",
          "The transfer from the source rocks to reservoir rocks is called primary migration",
          "Movement of petroleum within the porous and permeable reservoirs beds is known as secondary navigation",
          "The primary cause for movement of fluids is compaction",
          "The more permeable silt and sand bodies within compacting muds are the main channels of fluid migration",
        ]}
      />

      <OneLineQuestion
        question="What is contour maps"
        answer="A contour is a line on which every point is at the same level above or below chosen reference surface"
      />

      <MultipleInputQuestion
        question="What are different types of contour maps"
        answer={["Topographic contour", "Structure contour"]}
      />
      <FillInTheBlanks
        question={[
          "If a contour line represents an elevation on the surface of the ground, it is a",
          "",
        ]}
        answer={["Topographic contour"]}
      />
      <FillInTheBlanks
        question={[
          "If a counter represented an elevation of rock stratum (layer), then it is called a",
          "",
        ]}
        answer={["Structure contour"]}
      />
      <FillInTheBlanks
        question={["How does surface mapping works"]}
        answer={[
          "In some areas, the presence of subsurface geologic structure is evident at the surface",
          "In such cases, geologists can search for subsurface structure by studying topographic maps and air photographs and by going into the field and studying the rock layers that are exposed at the surface",
        ]}
      />
      <SingleChoiceQuestion
        question="Who does the surface mapping"
        choices={["Geologist", "Geophysicist"]}
        answer={1}
      />

      <MultipleInputQuestion
        question={[
          "The geophysicist uses physical phenomenon such as",
          ",",
          ",",
          "and the",
          "to determine the sub surface structure",
        ]}
        answer={[
          "Magnetic attraction",
          "The pull of gravity",
          "The speed of sound waves through different types of rocks",
          "Behavior of electric currents",
        ]}
      />

      <SingleChoiceQuestion
        question="Who does the Magnetic survey"
        choices={["Geologist", "Geophysicist"]}
        answer={2}
      />

      <SingleChoiceQuestion
        question="Who does the Seismic survey"
        choices={["Geologist", "Geophysicist"]}
        answer={2}
      />

      <SingleChoiceQuestion
        question="Who does the Gravity survey"
        choices={["Geologist", "Geophysicist"]}
        answer={2}
      />
      <OneLineQuestion
        question="What is basement rocks"
        answer={
          "Basement rock is igneous or metamorphic rock which is normally under sedimentary rocks"
        }
      />
      <MultipleInputQuestion
        question="How does basement rock is different from sedimentary rocks"
        answer={[
          "Basement rock are more magnetic than sedimentary rocks",
          "They are more dense than sedimentary rocks",
        ]}
      />
      <FillInTheBlanks
        question="How does magnetic survey work"
        answer={[
          "The magnetic properties of basement rocks create distortions and anomalies in the earth's magnetic field",
          "The magnitude of these anomalies as measured at the surface is proportional to the depth of burial of the basement rocks",
          "By measuring these anomalies throughout an area we can estimate the structure of geologic structure of the basement rocks as well as the thickness of the sedimentary rocks",
        ]}
      />
      <OneLineQuestion
        question="What instrument is used to calculate the magnetic distortions"
        answer="Magnetometer"
      />

      <FillInTheBlanks
        question="How does gravity survey work"
        answer={[
          "Basements rocks have higher density than sedimentary rocks as a result they have stronger gravitational attraction",
          "The difference in earths gravity attraction is too small to be noticeable by human body but with a sensitive instrument called gravity meter we can measure the differences",
          "When the basement rocks are closer to the surface, the gravitational distortions will be greater and vice versa",
        ]}
      />

      <MultipleInputQuestion
        question="What are three types of drilling"
        answer={[
          "Exploratory Drilling",
          "Appraisal Drilling",
          "Field Development Drilling",
        ]}
      />

      <OneLineQuestion
        question="What is another name for Appraisal Drilling"
        answer="Delineation Drilling"
      />

      <OneLineQuestion
        question="What is wildcat well"
        answer="Drilling well into a geologic structure in which no oil or gas has yet been discovered is called wildcat well"
      />

      <OneLineQuestion
        question="What is the purpose of drill string"
        answer=""
      />
    </>
  );
};
