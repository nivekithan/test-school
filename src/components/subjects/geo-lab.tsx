import React from "react";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { TrueOrFalse } from "../question/trueOrFalse";

export const exp4 = () => {
  return (
    <>
      <OneLineQuestion question="What is facies" answer="" />
      <MultipleInputQuestion
        question="What are different types of Sediment Structures"
        answer={[
          "Bedding",
          "Lamination",
          "Ripple Marks",
          "Cross bedding",
          "Graded bedding",
          "Load/ SSD Structures",

          // These are types of Soft sediments Deformation structures

          "Flaser,Wavy,Lenticular",
          "Dessication cracks or mud cracks",
          "Chemical structure",
          "Biogenic structure",
          "Oolite and Pesolite",
        ]}
      />
      <OneLineQuestion
        question="What is stratification"
        answer="Deposition in layers which are parallel"
      />
      <MultipleInputQuestion
        question="What are different types of stratification"
        answer={["Bedding", "Lamination"]}
      />
      <OneLineQuestion
        question="What is lamination"
        answer="When the thickness of layer is more than 1mm and less than 1cm it is called lamination"
      />
      <OneLineQuestion
        question="What is bedding"
        answer="When the thickness of layer is greater than 1cm it is called bedding, it can reach upto 100cm"
      />
      <OneLineQuestion question="Explain ripple marks" answer="" />
      <MultipleInputQuestion
        question="What are different types of ripple marks"
        answer={["Symmetric", "Asymmetric"]}
      />
      <OneLineQuestion
        question="What is Stoss side"
        answer="In asymmetric ripple the side with gentle slope is known as stoss side"
      />
      <OneLineQuestion
        question="What is lee side"
        answer="In asymeetric ripple the side with steeper slope is known as lee side"
      />
      <OneLineQuestion
        question="On what direction water will flow"
        answer="Water will flow from stoss side to lee side"
      />
      <TrueOrFalse
        question="In asymmetric ripple the movement of transporting agency is one direction only"
        answer={true}
      />
      <MultipleInputQuestion
        question="Examples of transporting agency in asymmetric ripple"
        answer={["Wind", "River water"]}
      />
      <MultipleInputQuestion
        question="What are examples of transporting agency in symmetric ripple"
        answer={["Ocean Water", "Sea water"]}
      />
      <MultipleInputQuestion
        question="In what styles the sediments should be moved when carried by the water"
        answer={["Rolling", "Saltation", "Suspension", "Solution"]}
      />
      <OneLineQuestion
        question="What is Rolling"
        answer="When the block rolls along the surface of strata for movement then its called Rolling "
      />
      <OneLineQuestion
        question="What is saltation"
        answer="When the velocity of water is water pushes the particles upwards and then due to the gravity the particle is pushed downward in this way the particle travels in parabola way"
      />
      <OneLineQuestion
        question="What is Suspension"
        answer="if the particles didnt get settled under any circumstances then its called suspension"
      />
      <OneLineQuestion
        question="What is solution"
        answer="If the particles gets dissolved in water and then at the place deposition gets precipitated then its called solution"
      />
      <OneLineQuestion
        question="What is Bed load"
        answer="The sediments which are carried only by the rolling method is known as Bed Load"
      />
      <OneLineQuestion
        question="Suspended load"
        answer="The sediments which are carried by saltation and suspension method it is called Suspended load"
      />
      <OneLineQuestion
        question="How silt sized particles are transported"
        answer="By Suspended load"
      />
      <OneLineQuestion
        question="How sand size particles are transported"
        answer="It may transported either by rolling or saltation"
      />
      <OneLineQuestion
        question="Where will cross bedding forms"
        answer="It always forms in the inner most portion of the ripple marks"
      />
      <OneLineQuestion question="Explain Graded Bedding" answer="" />
      <OneLineQuestion
        question="What is Normal Grading"
        answer="The coarsest is in down and finest is top then it is called Normal grading"
      />
      <OneLineQuestion
        question="What is reverse grading"
        answer="If the Finest grading in bottom and coarsest is top then its called Reverse grading"
      />
      <OneLineQuestion
        question="What are soft sediments"
        answer="Those sediments which are water saturated or contains water in them"
      />
      <OneLineQuestion
        question="When soft sediments structure arises"
        answer="After immediate deposition but before consolidation"
      />
      <MultipleInputQuestion
        question="What are examples of soft sediments"
        answer={["Sand", "Silt", "Clay"]}
      />
      <MultipleInputQuestion
        question="What are conditions for occurrence for soft sediments"
        answer={["Both layers should be water saturated", "Gravity inversion"]}
      />
      <OneLineQuestion
        question="What is gravity inversion"
        answer="High density layer occurs above the low density layer"
      />
      <MultipleInputQuestion
        question="What are different types of soft deformation"
        answer={["Flame Structure", "Ball and pillow structure"]}
      />
      <OneLineQuestion
        question="Explain Ball and pillow structure"
        answer="When the top layer (denser layer) move downwards and due to buoyancy the lower layer move upwards, at the area of contact there will be formation of lobes due to sagging, this is known as ball and pillow structure"
      />
      <OneLineQuestion
        question="Explain flame structure"
        answer="When top layer applies pressure on lower layer, lower layer also replicates the pressure leading to formation of flame formations"
      />
      <TrueOrFalse
        question="Flame structure and Ball and pillow structure forms simultaneously"
        answer={true}
      />
      <MultipleInputQuestion
        question="What are other group of sediments structure"
        answer={[
          "Flaser Lamination",
          "Wavy Lamination",
          "Lenticular lamination",
        ]}
      />
      <OneLineQuestion
        question="What is the ratio of sand to mud in Flaser"
        answer="Sand is in higher percentage than the mud"
      />
      <OneLineQuestion
        question="What is the ratio of sand to mud in Wavy"
        answer="Sand is in somewhat equal percentage to the mud"
      />
      <OneLineQuestion
        question="What is the ratio of sand to mud in Lentricular"
        answer="Sand is in lower percentage than the mud"
      />
      <MultipleInputQuestion
        question="On what environments does these structure form"
        answer={["Fluvial Environments", "Delta"]}
      />
      <OneLineQuestion
        question="What is Fluvial Environment"
        answer="Environment where river is the predominant agency"
      />
      <OneLineQuestion
        question="Discuss about erosion and deposition in Delta"
        answer="In Delta deposition is higher than the erosion"
      />
      <OneLineQuestion
        question="Explain Dessication cracks"
        answer="They are due to dehydration of clays and appear in hexagonal shape. They also propagate to certain depth"
      />
      <OneLineQuestion
        question="Give one example for chemical structure"
        answer="Styolite"
      />
      <OneLineQuestion
        question="Write about about stylotite"
        answer="When ground water rich in carbon di oxide passes through limestone, carbon di oxide reacts with Calcium carbohydrate and removes all soluble parts which will give zig zag structure"
      />
      <OneLineQuestion
        question="Explain about Oolite and pisolite "
        answer="When there is concentric layers of calculim carbohydrate around a nucleus is known as Oolite. Pesolite is larger form of Oolite"
      />
      <OneLineQuestion
        question="What is Oolitic limestone and pisolitic limestone "
        answer="Oolite bearing limestone is known as Oolitic limestone and Pisolite bearing limestone is known as Pisolitic limestone"
      />
      <OneLineQuestion
        question="Give an example for Biogenic structure"
        answer="Coral Reef"
      />
      <OneLineQuestion
        question="Explain about coral reef"
        answer="When coral an sea organism lives as colony dies its skeleton structures build up and form Coral Reef"
      />
      <MultipleInputQuestion
        question="In what other ways we can classify sedimentary structures"
        answer={["Pre depositional", "Sim Depositional", "Post Depositional"]}
      />
      <MultipleInputQuestion
        question="Explain Pre Depositional"
        answer={["Group marks, Channels, fluid marks"]}
      />
      <MultipleInputQuestion
        question="Examples of Sim Depositional"
        answer={[
          "Cross bedding",
          "Cross Lamination",
          "Gradded Bedding",
          "Bedded lamination",
        ]}
      />
      <MultipleInputQuestion
        question="Examples of Post depositional"
        answer={["Floral Structures"]}
      />
    </>
  );
};

const exp5 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is metamorphism"
        answer="Change in minerology and texture of a pre existing rock/Protolith and the outcome is metamorphic rock. This is known as metamorphic rock"
      />
      <MultipleInputQuestion
        question="What type of rock can undergo metamorphism"
        answer={[
          "Igneous rock",
          "Sedimentary rock",
          "Pre existing metamorphic rock",
        ]}
      />
      <MultipleInputQuestion
        question="What are three types of metamorphism"
        answer={["Contact", "Regional", "Dynamic"]}
      />
      <OneLineQuestion
        question="Explain Contact Metamorphism"
        answer="When there is igneous intrusion and due to its higher temperature the surrounding rocks started to get melt forming new metamorphic rocks"
      />
      <OneLineQuestion
        question="What is another name for Contact Metamorphism"
        answer="Thermal Metamorphism"
      />
      <OneLineQuestion
        question="Explain about regional metamorphism"
        answer="Metamorphism whose magnitude is so large that it affects a larger part of area"
      />
      <OneLineQuestion
        question="What is prerequisite for regional metamorphism"
        answer="There must be orogenic process or mountain building process"
      />
      <OneLineQuestion
        question="Explain about Dynamic Metamorphism"
        answer="It is always associated with tectonic movements and its unpredictable"
      />
      <MultipleInputQuestion
        question="What are different types of metamorphic rocks"
        answer={["Foliated Rocks", "Non Foliated Rocks"]}
      />
      <OneLineQuestion
        question="What is difference between foliated rocks and non foliated rocks"
        answer="Foliated rocks have bands and no foliated rocks does not have that"
      />
      <MultipleInputQuestion
        question="What are the examples for foliated rocks"
        answer={["Silt", "Schist", "Pheolite"]}
      />
      <MultipleInputQuestion
        question="What are the examples for non foliated rocks"
        answer={["Quartzite", "Marble"]}
      />
      <MultipleInputQuestion
        question="What are the mineralogy for metamorphic rocks"
        answer={["Quartz", "Feldspar", "Mica"]}
      />
      <TrueOrFalse
        question="In metamorphic rocks minerals have preferred orientation which does not happen with igneous or sedimentary rocks"
        answer={true}
      />
      <OneLineQuestion
        question="What is parent rock for Gneiss"
        answer="Granite"
      />
      <OneLineQuestion
        question="On what condition does gneiss form"
        answer="At high temperature and high pressure"
      />
      <OneLineQuestion
        question="What is augen gneiss"
        answer="It is also produced from granite but in this feldspar grains are eliphitical or 'eye' shaped "
      />
      <OneLineQuestion
        question="Discuss about quartzite rocks"
        answer="It is 90% of quartz, when sandstone undergoes very intense heating and pressure and this heating and pressure is related to tectonic compression"
      />
      <OneLineQuestion
        question="What is the parent rock for quartzite"
        answer="Sandstone"
      />
      <OneLineQuestion
        question="What is the name for the rock when the quartzite does not get fully metamorphic"
        answer="Orthoquartzite"
      />
      <OneLineQuestion
        question="What is the name for the rock when the quartzite gets fully metamorphic"
        answer="Metaquartzite"
      />
      <OneLineQuestion
        question="What is schistosity"
        answer="When the rock has ability to split into thin plates then that property we call"
      />
      <OneLineQuestion
        question="What is parent rock for schist"
        answer="Shale"
      />
      <OneLineQuestion
        question="How schist is formed"
        answer="It is outcome of regional metamorphism and orogenic process"
      />
      <TrueOrFalse
        question="Can schist originate from mudstone"
        answer={true}
      />
      <OneLineQuestion
        question="What is parent rock for slate"
        answer="Mudstone or Shale"
      />

      <OneLineQuestion
        question="What is fissility"
        answer="Ability of rock to break into a plane and the plane is known as fissil plane"
      />
      <OneLineQuestion
        question="What are the property of slate"
        answer="Fissility"
      />
      <OneLineQuestion
        question="What is fissility"
        answer="Ability of rock to break into a plane and the plane is known as fissil plane"
      />
      <OneLineQuestion
        question="What is parent rock for Marble"
        answer="Limestone"
      />
      <OneLineQuestion
        question="What does marble consist of?"
        answer="It consist of recrystalized calcium carbohydrate"
      />
    </>
  );
};

const exp6 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is the function of polarizer - 1"
        answer="It converts unpolarized light into polarized light (mostly east to west)"
      />
      <OneLineQuestion
        question="What is the function of Condesor"
        answer="It will remove any interface with light"
      />
      \
      <OneLineQuestion
        question="What is the function of Diaphragm"
        answer="It will control intensity"
      />
      <OneLineQuestion
        question="What is the function of stage"
        answer="It provides sample stage"
      />
      <OneLineQuestion
        question="What is the function of objective lens"
        answer=""
      />
      <OneLineQuestion
        question="What is the magnification"
        answer="Magnification of OL * Magnification of EP"
      />
      <OneLineQuestion
        question="What is the function of Polariser 2"
        answer="It changes the direction of vibration to perpendicular of its direction (mostly north to south)"
      />
      <OneLineQuestion
        question="What is lower polar"
        answer="When the light is in PPL condition i.e after passed through first polariser"
      />
      <OneLineQuestion
        question="What is Upper polar"
        answer="When the light is in Crossed condition i.e after passed through second polariser"
      />
    </>
  );
};
