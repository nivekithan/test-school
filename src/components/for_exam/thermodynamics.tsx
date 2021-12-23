import React from "react";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { JumbleQuestions } from "../utils";

const Lec1 = () => {
  return (
    <>
      <OneLineQuestion
        question="What is conservation of energy"
        answer="Energy cannot be created or destroyed but can only be transformed from one form to another"
      />
      <OneLineQuestion
        question="What is system"
        answer="A quantity of matter or a region in space chosen for study"
      />
      <OneLineQuestion
        question="What is surrondings"
        answer="Mass or region outside the system"
      />
      <OneLineQuestion
        question="What is boundary"
        answer="Real or imaginary surface that separates the system from its surrounding"
      />
      <MultipleInputQuestion
        question="What are types of systems"
        answer={["Closed system", "Open system", "Isolated system"]}
      />
      <OneLineQuestion
        question="What is closed system"
        answer="Only energy can cross the boundary"
      />
      <OneLineQuestion
        question="What is open system"
        answer="Both mass and energy can cross the boundary"
      />
      <OneLineQuestion
        question="What is isolated system"
        answer="Neither mass nor energy can cross the boundary"
      />
      <OneLineQuestion
        question="What is properties of system"
        answer="Measurable characteristic of a system that is in equilibrium"
      />
      <MultipleInputQuestion
        question="What are different types of properties of system"
        answer={["Intensive", "Extensive"]}
      />
      <JumbleQuestions>
        <OneLineQuestion
          question="What is Intensive property"
          answer="Independent of amount of mass"
        />
        <MultipleInputQuestion
          question="What are examples of Intensive property"
          answer={["Temperature", "Pressure", "Density"]}
        />
        <OneLineQuestion
          question="What is Extensive property"
          answer="Dependent of amount of mass"
        />
        <MultipleInputQuestion
          question="What are examples of Extensive property"
          answer={["Mass", "Volume", "Energy", "Enthalpy"]}
        />
      </JumbleQuestions>
      <OneLineQuestion
        question="What is thermodynamic equilibrium"
        answer="System that maintains thermal, chemical and mechanical equilibriums"
      />
      <MultipleInputQuestion
        question="What is quasi static process"
        answer={[
          "Deviation from thermodynamic equilibrium is very small",
          "All states of the system are equilibrium states",
        ]}
      />
      <MultipleInputQuestion
        question="What are different types of thermodynamic process"
        answer={[
          "Cyclic process",
          "Reversible process",
          "Irreversible process",
          "Adiabatic process",
          "Isentropic process",
          "Polytropic process",
          "Throttling process",
        ]}
      />
      <OneLineQuestion
        question="What is cyclic process"
        answer="System from an initial state undergoes various process and returns to its initial state"
      />
      <OneLineQuestion
        question="What is reversible process"
        answer="Process which can be reversed without any change in system or boundary"
      />
      <OneLineQuestion
        question="What is irreversible process"
        answer="Process that cannot return both the system and surrounding to their initial state"
      />
      <OneLineQuestion
        question="What is adiabatic process"
        answer="Process that has no heat transfer"
      />
      <OneLineQuestion
        question="What is Isentropic process"
        answer="Process where entropy remains constant"
      />
      <OneLineQuestion
        question="What is polytropic process"
        answer="Reversible process in which there is heat transfer"
      />
      <OneLineQuestion
        question="What is zeroth law of thermodynamics"
        answer="If two system are in thermal equilibrium with third system then two are system are in thermal equilibrium themselves"
      />
      <OneLineQuestion
        question="What is work"
        answer="Effort done in changing the state of system"
      />
      <OneLineQuestion
        question="What is full form of PMM1"
        answer="Perpetual Motion Machine of first kind"
      />
      <OneLineQuestion
        question="What is PMM1"
        answer="Machine which can supply Mechanical work continuously without consumption of any energy"
      />
      <OneLineQuestion
        question="What law does PMM1 violate"
        answer="First law of thermodynamics"
      />
      <MultipleInputQuestion
        question="What are some examples of Steady flow engineering devices"
        answer={["Nozzle", "Diffuser", "Turbine", "Compressor"]}
      />
      <OneLineQuestion
        question="What is nozzle"
        answer="Increases the fluid velocity at the expense of pressure"
      />
      <OneLineQuestion
        question="What is Diffuser"
        answer="Increase the pressure at the expense of velocity"
      />
      <OneLineQuestion
        question="What is Turbine"
        answer="Produces work through expansion of fluid"
      />
      <OneLineQuestion
        question="What is Compressor"
        answer="Increases pressure with work input"
      />
      <MultipleInputQuestion
        question="Why is second law of thermodynamics usefull"
        answer={[
          "Predicting direction of process",
          "Establishing condition for equilibrium",
          "Determining the best theoretical performance of cycle and engines",
        ]}
      />
      <MultipleInputQuestion
        question="What are different statements of second law of theromodynamics"
        answer={["Kelvin planck Statement", "Clausius Statement"]}
      />
      <OneLineQuestion
        question="What is kelvin planck statement"
        answer="Impossible for any device that operates on cycle to receive heat from a single reservoir and produce net amount of work"
      />
      <OneLineQuestion
        question="What is clausius statement"
        answer="Impossible for any device that operates in a cycle and produce no effect other than transfer of heat from low temperature body to a higher temperature body"
      />
      <FillInTheBlanks
        question="What are properties of heat engine"
        answer={[
          "Receive heat from a high temperature source",
          "Convert part of heat to work",
          "Reject remaining heat to low temperature sink reservoir",
          "They operate on cycle",
        ]}
      />
      <OneLineQuestion
        question="What is an example of heat engine"
        answer="Steam power plant"
      />
      <OneLineQuestion
        question="What does thermal efficiency measures"
        answer="Magnitude of energy wasted in order to complete cycle"
      />
      <OneLineQuestion
        question="What is heat pump"
        answer="Device that transfers heat from low temperature medium to a high temperature medium"
      />
      <OneLineQuestion
        question="What is an example of heat pump"
        answer="Refrigerator"
      />
      <OneLineQuestion
        question="What is PMM2"
        answer="Works on a cycle and does a net amount of work while exchanging heat with single reservoir only"
      />
      <OneLineQuestion
        question="What law does PMM2 violate"
        answer="Second law of thermodynamics"
      />
      <MultipleInputQuestion
        question="What are properties of carnot cycle"
        answer={[
          "Engines are cyclic devices and returns to its initial state at the end of cycle",
          "Work is done by fluid during one part of cycle and on the fluid during another part of cycle",
        ]}
      />
      <FillInTheBlanks
        question="Explain process that happens during carnot cycle"
        answer={[
          "Reversible isothermal heat addition at high temperature",
          "Reversible adiabatic expansion from high temperature to low temperature",
          "Reversible isothermal heat rejection at low temperature",
          "Reversible adiabatic compression from low temperature to high temperature",
        ]}
      />
      <OneLineQuestion
        question="What is carnot heat engine"
        answer="Heat engine operating on reversible carnot cycle "
      />
      <OneLineQuestion
        question="What is entropy"
        answer="Quantitative measure of disorder for a system"
      />
      <OneLineQuestion
        question="What is pure substance"
        answer="Substance with fixed chemical composition throughout"
      />
      <OneLineQuestion
        question="What is saturation"
        answer="Condition in which mixture of vapour and liquid can exist together at a given temperature and pressure "
      />
      <OneLineQuestion
        question="What is saturation pressure"
        answer="Pressure at which liquid and vapour phase are in equilibrium at a given temperature"
      />
      <OneLineQuestion
        question="What is saturated liquid"
        answer="Substance exists as liquid at saturation temperature and pressure"
      />
      <OneLineQuestion
        question="What is compressed liquid"
        answer="Temperature of liquid is lower than saturation temperature"
      />
      <OneLineQuestion
        question="What is another name for compressed liquid"
        answer="Subcooled liquid"
      />
      <OneLineQuestion
        question="What is saturated vapour"
        answer="Substance exists as vapour at saturation temperature"
      />
      <OneLineQuestion
        question="What is superheated vapour"
        answer="Temperature of vapour is higher than saturation temperature"
      />
      <OneLineQuestion
        question="What is latent heat"
        answer="Amount of energy absorbed or released during phase change process"
      />
      <OneLineQuestion
        question="What is Rankine cycle"
        answer="Cycle that converts heat into work"
      />
      <OneLineQuestion
        question="What is Compressibility factor"
        answer="Correction factor which describes deviation of a real gas from ideal gas"
      />
      <OneLineQuestion
        question="What is another name for Compressibility factor"
        answer="Gas deviation factor"
      />
      <MultipleInputQuestion
        question="What are assumptions made in Otto cycle"
        answer={[
          "Working fluid is ideal gas",
          "All process are reversible",
          "Combustion process is replaced by heat addition",
          "Exhaust process is replaced by heat rejection",
          "Addition and rejection of heat at constant volume",
        ]}
      />
      <MultipleInputQuestion
        question="What are assumptions in diesel cycle"
        answer={[
          "Working fluid is ideal gas",
          "All process are reversible",
          "Combustion process is replaced by heat addition ",
          "Exhaust process is replaced by heat rejection",
          "Addition of heat at constant pressure",
          "Rejection of heat at constant volume",
        ]}
      />
      <OneLineQuestion
        question="What is engine"
        answer="Machine designed to convert thermal/combustion energy of fuel into mechanical energy"
      />
      <FillInTheBlanks
        question="What are strokes in 4 stoke engine"
        answer={[
          "Intake stroke",
          "Compression stroke",
          "Power stroke",
          "Exhaust stroke",
        ]}
      />
    </>
  );
};

export const ForExamThermoDynamics = () => {
  return (
    <>
      <Lec1 />
    </>
  );
};
