import React from "react";
import { Question } from "../common";
import { Essay } from "../question/essay";
import { Essay2 } from "../question/essay2";
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
        answer="Particle motion is along the direction of propagation"
      />
      <OneLineQuestion
        question="What is another name for P wave"
        answer="Compressional wave"
      />
      <OneLineQuestion
        question="What is S wave"
        answer="Particle motion is perpendicular to direction of propagation"
      />
      <OneLineQuestion
        question="What is another name for S wave"
        answer="Shear wave"
      />
      <MultipleInputQuestion
        question="What are the factors that affect seismic velocity in rocks"
        answer={["Composition of rock", "Porosity", "Depth", "Age"]}
      />
      <OneLineQuestion
        question="How does porosity affects seismic velocity"
        answer="Pore spaces are generally occupied by low velocity material therefore overall seismic velocity decreases with porosity"
      />
      <OneLineQuestion
        question="How does Depth affects seismic velocity"
        answer="Porosity decreases and Elastic moduli increases with time therefore seismic velocity increases with depth "
      />
      <OneLineQuestion
        question="How does Age affect seismic velocity"
        answer="Cementation of sedimentary rock increases with age therefore seismic velocity increases with age"
      />
      <MultipleInputQuestion
        question="What are factors that affect seismic wave amplitude"
        answer={["Geometrical Spreading", "Attenuation", "Scattering"]}
      />

      <Essay2 question="Explain geometrical spreading">
        <FillInTheBlanks
          question={[
            "Seismic wave originate from a",
            "source and carry",
            "away from the",
            "as a",
            "of",
            "",
          ]}
          answer={[
            "point",
            "energy",
            "source",
            "spherical wavefront",
            "expanding radius",
          ]}
        />
        <FillInTheBlanks
          question={["", "requires that the", "in the", "is", "at all time"]}
          answer={[
            "Conservation of energy",
            "total energy",
            "wavefront",
            "constant",
          ]}
        />
        <FillInTheBlanks
          question={[
            "Therefore, as the",
            "the",
            "will be",
            "over a",
            "so that the",
            "at each",
            "on the",
            "will",
            "",
          ]}
          answer={[
            "sphere expands",
            "energy",
            "spread out",
            "large radius",
            "energy",
            "point",
            "sphere",
            "decrease",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="How does geometrical spreading affects amplitude"
        answer="Amplitude of seismic wave will decrease by 1 / r as the wavefront sphere expands"
      />
      <OneLineQuestion
        question="What is another name for geometrical spreading"
        answer="Spherical Divergence"
      />
      <OneLineQuestion
        question="How does Attenuation affects Amplitude"
        answer="Exponential decrease in amplitude as seismic wave travels"
      />
      <OneLineQuestion
        question="How does Attenuation affects amplitude for waves with higher frequency"
        answer="Amplitude decreases more rapidly"
      />
      <Essay2 question="Explain Attenuation in detail">
        <FillInTheBlanks
          question={[
            "As the seismic wave travels a material, the",
            "is not perfectly",
            "",
          ]}
          answer={["deformation", "elastic"]}
        />
        <FillInTheBlanks
          question={[
            "Some",
            "is converted into",
            "due to",
            "associated with",
            "",
          ]}
          answer={[
            "Energy",
            "heat",
            "friction",
            "movement along grain boundary",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is scattering"
        answer="Seismic energy will scattered as wave encounters heterogeneities in rock"
      />
    </>
  );
};

const Lec9 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is reflection coefficient"
        answer="Ratio of reflected ray amplitude and incident ray amplitude"
      />
      <OneLineQuestion
        question="What is transmission coefficient"
        answer="Ratio of transmitted ray amplitude and incident ray amplitude"
      />
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
        answer="Extra time taken for a wave to travel a non vertical path"
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
          "Weathering correction",
          "Elevation correction",
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

const Lec17 = () => {
  return (
    <>
      <OneLineQuestion
        question="What does magnetic survey measures"
        answer="Change in earth magnetic filed caused by variation in magnetic properties of rocks"
      />
      <MultipleInputQuestion
        question="In what mode magnetic survey can be done"
        answer={["Airborne", "Shipborne", "Ground based"]}
      />
      <MultipleInputQuestion
        question="What property are calculated in data analysis"
        answer={["Magnetic Susceptibility", "Remanent Magnetization"]}
      />
      <MultipleInputQuestion
        question="Why is earth magnetic"
        answer={[
          "Geodynamo effect in Outercore",
          "Crustal Magnetization",
          "Solar Radiation",
        ]}
      />
    </>
  );
};

const Lec18 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is Magnetic susceptibility"
        answer="Measures how susceptible a material is to becoming magnetized"
      />
      <MultipleInputQuestion
        question="What are types of remanent Magetization"
        answer={[
          "Thermo remanent",
          "Depositional Remanent",
          "Chemical Remanent",
          "Viscous Remanent",
        ]}
      />
      <MultipleInputQuestion
        question="What are external factors that affects magnetic field"
        answer={[
          "Diurnal Variation",
          "Lunar Variation",
          "Magnetic Storm",
          "Sunspots and solar flares",
        ]}
      />
      <MultipleInputQuestion
        question="What are internal factors that affects magnetic field"
        answer={[
          "Reduction of the dipole field",
          "Westward drift",
          "Geomagnetic jerks",
          "Magnetic field reversal",
        ]}
      />
      <MultipleInputQuestion
        question="What are instruments used for measuring magnetic field"
        answer={[
          "Flux gate magnetometer",
          "Proton Precession magnetometer",
          "Alkali vapour magnetometer",
        ]}
      />
    </>
  );
};

const Lec19 = () => {
  return <>{/* <OneLineQuestion /> */}</>;
};

const GeophyNote = () => {
  return (
    <>
      <JumbleQuestions>
        <MultipleInputQuestion
          question="What is quantity measured in field survey for Seismic exploration"
          answer={["Travel time", "Amplitude of seismic waves"]}
        />
        <MultipleInputQuestion
          question="What is quantity measured in field survey for gravity exploration"
          answer={["Gravitational force"]}
        />
        <MultipleInputQuestion
          question="What is quantity measured in field survey for Magnetic exploration"
          answer={["Magnetic field"]}
        />
        <MultipleInputQuestion
          question="What property is calculated in data analysis in seismic exploration"
          answer={["Seismic velocity"]}
        />
        <MultipleInputQuestion
          question="What property is calculated in data analysis in gravity exploration"
          answer={["Density"]}
        />
        <MultipleInputQuestion
          question="What property is calculated in data analysis in magnetic exploration"
          answer={["Magnetic Susceptibility", "Remanent Magnetization"]}
        />
      </JumbleQuestions>
      <OneLineQuestion
        question="What is gravity data correction"
        answer="Series of data processing steps that correct for all variation in gravity field that are not caused by density variation of the subsurface rocks"
      />
      <MultipleInputQuestion
        question="What are gravity data correction methods"
        answer={[
          "Temporal correction",
          "Latitude correction",
          "Elevation correction",
        ]}
      />
      <MultipleInputQuestion
        question="What are different methods in Temporal correction"
        answer={["Tidal effect", "Instrument drift"]}
      />
      <OneLineQuestion
        question="What is tidal effect"
        answer="Gravitational pull of sun and moon causes tides on earth and also changes gravity in a specified location"
      />
      <OneLineQuestion
        question="What is instrumental drift"
        answer="Spring in relative gravimeter will stretch due to both temperature induced change and temporal change in elastic properties of spring"
      />
      <OneLineQuestion
        question="What is latitude correction"
        answer="Gravity field on earth surface changes with latitude"
      />
      <MultipleInputQuestion
        question="Why does gravity changes with latitude"
        answer={["Mass", "Centrifugal force", "Non spherical earth"]}
      />
      <MultipleInputQuestion
        question="What are different methods in Elevation correction"
        answer={["Free air correction", "Bouguer correction"]}
      />
      <OneLineQuestion
        question="What is free air correction"
        answer="Change is gravity as we move away from the center of earth"
      />
      <OneLineQuestion
        question="What is bouguer correction"
        answer="With change in elevation there will be also change in mass"
      />

      <MultipleInputQuestion
        question="When the reference point is above reference level how we should do free air correction and bouguer correction"
        answer={["Add free air correction", "Subtract bouguer correction"]}
      />
      <MultipleInputQuestion
        question="When the reference point is below reference level how we should do free air correction and bouguer correction"
        answer={["Subtract free air correction", "Add bouguer correction"]}
      />
      <OneLineQuestion
        question="How does half width technique help"
        answer="Width of gravity anomaly is related to depth of density anomaly"
      />
      <OneLineQuestion
        question="How does width of gravity anomaly is related to depth of density anomaly "
        answer="Deeper structure produces wider anomaly"
      />
      <OneLineQuestion
        question="In what shape 2D anomaly can be interpreted "
        answer="Cylinder"
      />
      <OneLineQuestion
        question="What is the formula for 2D anomaly"
        answer="Z = X"
      />
      <OneLineQuestion
        question="In what shaper 3D anomaly can be interpreted"
        answer="Sphere"
      />
      <OneLineQuestion
        question="What is the formula for 3D anomaly"
        answer="Z = 1.305X"
      />
      <MultipleInputQuestion
        question="What are application of gravity exploration"
        answer={[
          "Map thickness and extent of sedimentary basins",
          "Map the distribution and geometry of sediment basins",
          "Satellite gravity data for offsore operations",
        ]}
      />
      <OneLineQuestion
        question="How does sedimentary basins appear in gravity exploration"
        answer="Gravity lows"
      />
      <OneLineQuestion
        question="Why do sedimentary basins appear as gravity low"
        answer="Low density"
      />
      <OneLineQuestion
        question="How does salt structure appear in gravity exploration"
        answer="Negative gravity anomaly"
      />
      <OneLineQuestion
        question="Why does salt structure appear as negative gravity anomaly"
        answer="Lower density than sediments"
      />
      <OneLineQuestion
        question="What is significance of salt structures"
        answer="Upward movement of buoyant salt through sedimentary layers is important for formation of petroleum reservoirs"
      />
      <OneLineQuestion
        question="What does magnetometers measures"
        answer="Magnetic flux density at the earth surface"
      />
      <MultipleInputQuestion
        question="What are different types of magnetometers"
        answer={[
          "Proton precession magnetometer",
          "Alkali vapour magnetometer",
        ]}
      />
      <Essay2 question="Write about proton precession magnetometer">
        <FillInTheBlanks
          question={[
            "It contains a",
            "that is ",
            "with a ",
            "liquid that is",
            "by a",
            "",
          ]}
          answer={["flask", "filled", "proton rich", "surrounded", "coil"]}
        />
        <FillInTheBlanks
          question={["The", "behaves as a", "and", "with the", ""]}
          answer={[
            "H nuclei",
            "magnetic dipoles",
            "align",
            "geomagnetic field",
          ]}
        />
      </Essay2>
      <OneLineQuestion
        question="What is precission of proton precission magnetometer"
        answer="0.1 to 1 nT"
      />
      <OneLineQuestion
        question="What about readings of proton precission magnetometer"
        answer="Readings are discontinuous"
      />
      <OneLineQuestion
        question="What is precission of Alkali vapour magnetometer"
        answer="0.01 nT"
      />
      <OneLineQuestion
        question="What about readings of precission magnetometer"
        answer="Readings are taken very rapidly"
      />
      <MultipleInputQuestion
        question="What are different methods of data reduction in magnetic survey"
        answer={["Temporal variation", "Spatial variation"]}
      />
      <MultipleInputQuestion
        question="What are different variation in temporal variation"
        answer={["Instrumental drift", "Diurnal Variation"]}
      />
      <MultipleInputQuestion
        question="What are different variation in spatial variation"
        answer={[
          "Horizontal variation",
          "Vertical variation",
          "Topography variation",
        ]}
      />
      <MultipleInputQuestion
        question="How can regional magnetic field can be removed"
        answer={[
          "Subtracting base station reading from survey data",
          "Subtracting IGRF from observed data",
          "Estimating the regional magnetic field and subtracting it",
        ]}
      />
      <MultipleInputQuestion
        question="What are different magnetic data enchancement method"
        answer={["Reduction to pole", "Upward and downward continuation"]}
      />
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
      <Lec17 />
      <Lec18 />
    </>
  );
};
