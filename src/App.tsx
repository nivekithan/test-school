import React from "react";
import { FillInTheBlanks } from "./components/question/fillInTheBlanks";
import { MultipleInputQuestion } from "./components/question/multipleInputQuestion";
import { OneLineQuestion } from "./components/question/oneLineQues";
import { SingleChoiceQuestion } from "./components/question/singleChoiceQuestion";
import { TrueOrFalse } from "./components/question/trueOrFalse";

export const App = () => {
  return (
    <div className="mx-[10%] my-20 flex flex-col gap-y-10">
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

      {
        // -------------- COAL GAS ---------------- //
      }
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
    </div>
  );
};
