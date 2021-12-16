import React from "react";
import { Essay } from "../question/essay";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { JumbleQuestions } from "../utils";

const Lec3 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What does gravity surveying measures"
        answer={[
          "Spatial variations in the earth gravitational field caused by the differences in the density of subsurface rocks",
          "Variation in the acceleration due to the gravity",
        ]}
      />
      <OneLineQuestion
        question="What is gravity anomalies"
        answer="Deviations from a predefined reference level (geoid)"
      />
      <MultipleInputQuestion
        question="What are applications to gravity exploration"
        answer={["Depth to bedrock", "Mapping salt dome", "Mapping bedrock"]}
      />
      <OneLineQuestion
        question="What are the limitations of gravity exploration"
        answer="Not useful for localized scale"
      />
      <MultipleInputQuestion
        question="What are factors affecting gravity value across earth"
        answer={["Radius of earth", "mass", "Centrifugal force"]}
      />
      <MultipleInputQuestion
        question="What are measurements that used in gravity surveying"
        answer={["Wordon", "Lacoste romberg"]}
      />
      <FillInTheBlanks
        question="How does gravity surveying works"
        answer={[
          "We measure the absolute value of g in various places",
          "Then we take care of any errors in our measurements",
          "Then we subtract the absolute value of g with a reference value",
          "If the result is not 0 then we can assume that there is presence of inhomogeneous subsurface structure which could be hydrocarbon",
        ]}
      />
      <MultipleInputQuestion
        question="What are errors can happen in gravity surveying"
        answer={[
          "Human error",
          "Measurement error",
          "Local fluctuation of gravity",
        ]}
      />
    </>
  );
};

const Lec4 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is the function for graph of acceleration due to gravity by buried spherical body"
        answer="g(x) = GMZ/(x^2 + z^2)^(3/2)"
      />
      <OneLineQuestion
        question="What is half width formula"
        answer="X = .766z"
      />
    </>
  );
};

const Lec6 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are the type of correction we should do in gravity surveying"
        answer={[
          "Tidal correction",
          "Terrain correction",
          "Bouguer correction",
          "Free air correction",
        ]}
      />
      <MultipleInputQuestion
        question="What are methods used to interpert anomalies"
        answer={[
          "Fitting by hand",
          "Mathematical fitting",
          "Complex processing",
        ]}
      />
    </>
  );
};

const Lec7 = () => {
  return (
    <>
      <JumbleQuestions>
        <OneLineQuestion
          question="In seismic survey what instruments are used for recording signal in land "
          answer="Geophone"
        />
        <OneLineQuestion
          question="In seismic survey what instruments are used for recording signal in water "
          answer="Hydrophone"
        />
        <MultipleInputQuestion
          question="In seismic survey what instruments are used for generating signal in land"
          answer={["Vibrator", "Explosive"]}
        />
        <OneLineQuestion
          question="In seismic survey what instruments are used for generating signal in water"
          answer="Air gun"
        />
      </JumbleQuestions>
    </>
  );
};

const Lec8 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What properties do we measure in seismic survey"
        answer={["Arrival time of signal", "Amplitude of signal"]}
      />
      <MultipleInputQuestion
        question="With knowing arrival time of signal what can we measure regarding formation"
        answer={["Depth of formation", "Thickness of formation"]}
      />
      <OneLineQuestion
        question="Seismic survey measures what property of formation"
        answer="Elastic property of formation"
      />
      <OneLineQuestion
        question="What is Youngs modulus constant"
        answer="Ratio of tensile stress to tensile strain"
      />
      <OneLineQuestion
        question="What is Shear modulus constant"
        answer="Measure of tangential ratio of shear stress to strain"
      />
      <OneLineQuestion
        question="What is bulk modulus"
        answer="Ratio of pressure to fractional change in the volume"
      />
      <OneLineQuestion
        question="What is Poisson's ratio"
        answer="Ratio between youngs modulus and bulk modulus"
      />
      <OneLineQuestion
        question="What is P wave"
        answer="Direction of vibration of molecule is along the direction of propagation"
      />
      <OneLineQuestion
        question="What is S wave"
        answer="Direction of vibration of molecule is perpendicular to direction of propagation"
      />
    </>
  );
};

const Lec9 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is vertical resolution of seismic ray"
        answer="lambda / 4"
      />
    </>
  );
};

const Lec10 = () => {
  return (
    <>
      <OneLineQuestion
        question="How does Geophone"
        answer="Vertical motion of the ground causes the instrument and magnet to move up and down while coil is sataionary. This produces a electric voltage through the coil which is recorded as electric signal"
      />
      <OneLineQuestion
        question="How does Hydrophone works"
        answer="It Detect a change in pressure in water and piezoelectric elements change it into an electrical signal"
      />
      <OneLineQuestion
        question="What type of waves are recorded by hydrophone"
        answer="P wave"
      />
      <OneLineQuestion
        question="What is Acoustic impedance"
        answer="Product of density of medium and velocity of sound in that medium"
      />
      <OneLineQuestion
        question="What is shot"
        answer="Single Seismic event from the source"
      />
      <OneLineQuestion
        question="What is shot gather"
        answer="Collection of traces recorded from single shot"
      />
      <MultipleInputQuestion
        question="What are types of configuration in seismic survey"
        answer={["Split spread configration", "Single ended configration"]}
      />
      <OneLineQuestion
        question="What is split spread configuartion"
        answer="Detectors are in both side of source"
      />
      <OneLineQuestion
        question="What is single ended configuration"
        answer="Detectors are only in one side of source"
      />
      <OneLineQuestion
        question="What is direct wave"
        answer="Wave that travels just below surface of earth from the source to detector "
      />
      <OneLineQuestion
        question="What is ground roll"
        answer="Wave that travels along the surface of earth from source to detector"
      />
    </>
  );
};

const Lec11 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is normal moveout"
        answer="Effect of sepration between source and detector on the arrival time of a reflection"
      />
    </>
  );
};

const Lec12 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What correction are should be done in seismic survey"
        answer={[
          "Removal of Weathering",
          "Removal of Elevation",
          "Velocity Analysis",
        ]}
      />
      <OneLineQuestion
        question="What is static correction"
        answer="Correction which are not dependent on time"
      />
      <OneLineQuestion
        question="What is the formula to calculate Percentage of coverage"
        answer="100 x N / 2n"
      />
    </>
  );
};

const Lec13 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is horizontal resolution of seismic survey"
        answer="sqrt(2z lambda)"
      />
      <OneLineQuestion
        question="What should be the dector spacing to achieve optimal horizontal resolution"
        answer="Less than w/4"
      />
      <FillInTheBlanks
        question="What are steps followed in seismic data processing"
        answer={[
          "Filter raw data",
          "Sort seismic traces into CMP gathers",
          "Apply static corrections",
          "velocity analysis",
          "NMO correction",
          "Stack CMP gather",
          "Deconvolution and filtering of stacked zero offset traces",
          "Migration",
        ]}
      />
      <MultipleInputQuestion
        question="Factors which affect seismic wave amplitude"
        answer={["Geometrical spreading", "Attenuation", "Scattering"]}
      />
    </>
  );
};

const Lec14 = () => {
  return (
    <>
      <MultipleInputQuestion
        question="What are types of noise removal"
        answer={[
          "High pass filter",
          "Low pass filter",
          "Band pass filter",
          "Notch filter",
        ]}
      />
      <OneLineQuestion
        question="What is High pass filter"
        answer="Frequencies above a frequency are retained"
      />
      <OneLineQuestion
        question="What is low pass filter"
        answer="Frequencies below a frequency are retained"
      />
      <OneLineQuestion
        question="What is band pass filter"
        answer="Frequency between a range is retained"
      />
      <OneLineQuestion
        question="What is Notch filter"
        answer="Frequency between a range is removed"
      />
      <OneLineQuestion
        question="What is another name for deconvolution"
        answer="Inverse filtering"
      />
      <OneLineQuestion question="What is deconvolution" answer="" />
    </>
  );
};

export const ForExamGeoExpo = () => {
  return (
    <>
      <Lec3 />
      <Lec4 />
      <Lec6 />
      <Lec7 />
      <Lec8 />
      <Lec9 />
      <Lec10 />
      <Lec11 />
      <Lec12 />
      <Lec13 />
    </>
  );
};
