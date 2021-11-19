import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";

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

      <Essay
        question="Explain Nebular Hypothesis"
        answer={[[]]}
        points={[[]]}
      />
    </>
  );
};

export const ForExamGeology = () => {
  return (
    <>
      <Lec3 />
    </>
  );
};
