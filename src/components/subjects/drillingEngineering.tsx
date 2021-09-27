import React from "react";
import { FillInTheBlanks } from "../question/fillInTheBlanks";
import { MultipleInputQuestion } from "../question/multipleInputQuestion";
import { OneLineQuestion } from "../question/oneLineQues";
import { SingleChoiceQuestion } from "../question/singleChoiceQuestion";
import { TrueOrFalse } from "../question/trueOrFalse";

export const DrillingEngineering = () => {
  return (
    <>
      <OneLineQuestion
        question="What is mud tank"
        answer="It stores drilling fluid until its required down the wellbore"
      />
      <OneLineQuestion
        question="What is another name for mud tank"
        answer="Mud pits"
      />
      <OneLineQuestion
        question="What is shale shakers"
        answer="Shale shakers separates drill cuttings from the drilling fluid before it is pumped back down the wellbore"
      />
      <OneLineQuestion
        question="What is suction line"
        answer="It is a intake line for mud pump to draw drilling fluid from the mud tanks"
      />
      <OneLineQuestion
        question="What is mud pump"
        answer="Mud pump is a reciprocal type of pump used to circulate drilling fluid through the system"
      />
      <OneLineQuestion
        question="What is motor or power source"
        answer="Motor is hydraulically powered device positioned just above the drill bit used to spin the bit independently from the rest of the drill string"
      />
      <OneLineQuestion
        question="What is hose"
        answer="Hose is flexible, high pressure hose that connects the mud pump to the stand pipe"
      />
      <OneLineQuestion
        question="What is draw works"
        answer="Draw works is the mechanical section that contains the spool, whose main function is to reel in/out the drill to raise/lower the travelling block"
      />
      <OneLineQuestion
        question="What is standpipe"
        answer="Stand pipe is a thick metal tubing, situated vertically along the derrick that facilitates the flow of drilling fluid and has attached to it and supports one end of the kelly hose "
      />
      <OneLineQuestion
        question="What is kelly hose"
        answer="Kelly hose is flexible, high pressure hose that connects the standpipe to the kelly and allows free vertical movements of the kelly while facilitating the flow of drilling fluid through the system and down the drill string "
      />
      <OneLineQuestion
        question="What is goose neck"
        answer="Goose neck is a thick metal elbow connected to the swivel and standpipe that supports the weight of and provides a downward angle for the kelly hose to hang from"
      />
      <OneLineQuestion
        question="What is travelling block"
        answer="Travelling block is the moving end of the block and tackle, together they give sufficient mechanical advantage for lifting"
      />
      <OneLineQuestion
        question="What is drill line"
        answer="Drill line is thick, stranded metal cable threaded through the two blocks to raise and lower the drill string"
      />
      <OneLineQuestion
        question="What is crown block"
        answer="Crown block is the stationary end of the block and tackle"
      />
      <OneLineQuestion
        question="What is derrick"
        answer="Derrick is the support structure for the equipment used to lower and raise the drill string into and out of the wellbore. This consists of the sub structure and the mast"
      />
      <OneLineQuestion
        question="What is racking board"
        answer="Racking board is the catwalk along the side of the derrick"
      />
      <OneLineQuestion
        question="What is another name for racking board"
        answer="Monkey board"
      />
      <OneLineQuestion
        question="What is stand"
        answer="Stand is the joint of hollow tubing used to connect the surface equipment to the bottom hole assembly and act as a conduit for the drilling fluid"
      />
      <OneLineQuestion
        question="What is setback"
        answer="Setback is the part of drill floor where the stands of drill pipe which are 2 or 3 joints of drill pipe connected and stood in the derrick vertically usually to save time while tripping pipe"
      />
      <OneLineQuestion
        question="What is swivel"
        answer="Swivel is the top end of the kelly that allows the rotation of the drill string without twisting the block"
      />
      <OneLineQuestion
        question="What is kelly drive"
        answer="Kelly drive is a square, hexagonal or octagonal shaped tubing that is inserted through and is an integral part of the rotary table that moves freely vertically while rotary table turns it"
      />
      <OneLineQuestion
        question="What is rotary table"
        answer="Rotary table rotates along with its constituent parts, the kelly and kelly bushing, the drill string and the attached tools and bit"
      />
      <OneLineQuestion
        question="What is drill floor"
        answer="Drill floor is the area on the rig where the tools are located to make the connection of the drill pipe, bottom hole assembly, tools and bit, it is considered the main area where the work is performed"
      />
      <OneLineQuestion
        question="What is bell nipple"
        answer="Bell nipple is a section of large diameter pipe fitted to the top of the blowout preventers that the flow line attaches to via a side outlet, to allow the drilling mud to flow back to the mud tanks"
      />
      <OneLineQuestion
        question="What is Blowout preventer (BOP)"
        answer="They are devices installed at the wellhead to prevent the fluids and gases from unintentionally escaping from the wellbore"
      />
      <OneLineQuestion
        question="What is drill string"
        answer="Drill string is an assembled collection of drill pipe, heavy weight drill pipe, drill collars and any of a whole assortment tools, connected and run into the wellbore to facilitate the drilling of well "
      />
      <OneLineQuestion
        question="What is drill bit"
        answer="Drill bit is a device attached to the end of the drill string that breaks apart the rock being drilled. It contains jets through which drilling fluid exits"
      />
      <OneLineQuestion
        question="What is casing head or wellhead"
        answer="Casing head is a large metal flange welded or screwed onto the top of the conductor pipe or the casing and is used to blot the surface equipment such as blowout preventer or the christmas tree"
      />
      <OneLineQuestion
        question="What is flow line"
        answer="Flow line is large diameter pipe that is attached to the bell nipple and extends to the shale shakers to facilitate the flow of drilling fluid back to the mud tanks"
      />
      <OneLineQuestion
        question="What is drilling fluid"
        answer="It is mixture of water, clay, weighing materials and chemicals"
      />
      <MultipleInputQuestion
        question="What are functions of drilling mud from engineer perspective"
        answer={[
          "Bottom hole Cleaning",
          "Cuttings Transport",
          "Borehole Wall Support",
          "Balancing Formation Pressure",
          "Cooling the bit",
          "Hydraulic Power Transmission",
          "Data transmission (MWD)",
          "Reducing friction",
          "Corrosion Protection",
        ]}
      />
      <MultipleInputQuestion
        question="What properties the Drilling fluid depends on"
        answer={[
          "Viscosity",
          "Thixotropy",
          "Density",
          "Filtration Parameters",
          "Free water capacity",
          "Lubricity coefficient",
          "Chemical composition",
          "pH",
          "Physico-chemical parameters",
          "Solid contents",
        ]}
      />
      <MultipleInputQuestion
        question="What are different types of drilling mud"
        answer={["Water based", "Oil based"]}
      />
      <MultipleInputQuestion
        question="What are parameters on choosing drilling fluid"
        answer={[
          "Pore pressure / Fracture gradient to establish minimum/maximum mud weights to be used on the whole well",
          "Offset well data from similar wells in the area to help establish successful mud systems, problematic formations, potential hazards, estimated drilling time",
          "Geological plot of the prognosed lithology",
          "Casing design programme and casing seat depths",
          "Basic mud properties",
          "Restrictions that might be enforced in the are",
        ]}
      />
      <MultipleInputQuestion
        question="Explain functions of drilling fluid"
        answer={[
          "To control sub surface pressure by providing hydrostatic pressure greater than formation pressure",
          "To remove the drilled cuttings from hole",
          "To cool and lubricate the drill bit and drill pipe",
          "To prevent the walls of the hole from craving",
          "To release the drilled cuttings at the surface",
          "To prevent or minimize the damage to the formations penetrated by having minimum fluid loss into the formation",
          "To assist in the gathering of tha maximum information from the formations being drilled",
          "To suspend the cuttings and weighing material when circulation is stopped",
          "To minimize the swelling stresses caused by the reaction of the mud with the shale formations",
        ]}
      />
      <MultipleInputQuestion
        question="What happens if cuttings from the wellbore are not removed"
        answer={[
          "The drilling efficiency will decrease",
          "The drillString will become stuck in the wellbore",
        ]}
      />
      <MultipleInputQuestion
        question={[
          "Carrying capacity of mud depends on the",
          ",",
          "and",
          "of the mud",
        ]}
        answer={["Annular velocity", "Density", "Viscosity"]}
      />
      <FillInTheBlanks
        question={[
          "The ability to suspend the cuttings depends on the",
          "properties of the mud",
        ]}
        answer={["Gelling (Thixotropic)"]}
      />
      <MultipleInputQuestion
        question={[
          "The drilled solids are removed from the mud at the surface by mechanical devices such as",
          ",",
          "and",
          "",
        ]}
        answer={["Shale Shakers", "desanders", "desilters"]}
      />
      <FillInTheBlanks
        question="How to prevent formation fluids flowing in to the wellbore"
        answer={[
          "The hydrostatic pressure exerted by the mud column must be high enough to prevent an influx of formation fluids into the wellbore",
          "The pressure in the wellbore must not be too high or it may cause the formation to fracture and this will result in the loss of expensive mud into the formation",
        ]}
      />
      <OneLineQuestion
        question={[
          "The flow of mud into the formation whilst drillings is known as",
          "",
        ]}
        answer="Lost circulation"
      />
      <FillInTheBlanks
        question="The pressure in the wellbore will be equal to"
        answer={[
          "P = 0.052 x MW x TVD",
          "P = Hydrostatic pressure (psi)",
          "MW = mud density of the mud or mud weight (ppg)",
          "TVD = true vertical depth of point of interest = vertical height of mud column (ft)",
        ]}
      />
      <FillInTheBlanks
        question="Explain the process of cool and lubricate bit"
        answer={[
          "The rock cutting process will generate a great deal of amount of heat in bit. Unless the bit is cooled, it will overheat and quickly wear out",
          "The circulation of the drilling fluid will cool the bit down and help lubricate the cutting process",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Data from",
          "will be useful in predicting borehole stability problems",
        ]}
        answer={["Adjacent wells"]}
      />
      <FillInTheBlanks
        question={[
          "",
          "is one of the most common problems in the drilling operations",
        ]}
        answer={["Shale instability"]}
      />
      <MultipleInputQuestion
        question="What are the reasons for the shale instability in drilling operations"
        answer={[
          "The pressure differential between the bottom hole pressure in the borehole and the pore process in the shale",
          "Hydration of the clay within the shale by mud filtrate containing water",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The instability caused by the pressure differential between the borehole and the pore pressure can be overcome by",
          "",
        ]}
        answer={["Increasing the mudweight"]}
      />
      <MultipleInputQuestion
        question="The hydration of clay can be overcome by"
        answer={[
          "Using non water based muds",
          "Can be partially addressed by treating the mud with chemicals which will reduce the ability of the water in the mud to hydrate the clays in the formation. These muds are also known as inhibited muds",
        ]}
      />
      <OneLineQuestion
        question="What are water based muds"
        answer="These are fluids where water is continuous phase. The water may be fresh, brackish or seawater, whichever is most convenient and suitable to the system or is available"
      />
      <MultipleInputQuestion
        question={["Water based muds consists of a mixture of", ",", "and", ""]}
        answer={["Solids", "Liquids", "Chemicals"]}
      />
      <OneLineQuestion
        question="What are active solids"
        answer="Some solids react with water and the chemicals in the mud and those solids are called active solids"
      />
      <FillInTheBlanks
        question={[
          "The activity of these solids must be",
          "in order to allow the mud to function properly",
        ]}
        answer={["Controlled"]}
      />
      <OneLineQuestion
        question="What are inactive or inert solids"
        answer="The solids which do not react within the mud are called inactive or inert solids"
      />
      <FillInTheBlanks
        question={[
          "",
          "is used as the base for most of these muds but in offshore drilling operations",
          "is more readily available",
        ]}
        answer={["Fresh water", "Saline water"]}
      />
      <OneLineQuestion
        question="Define non inhibited fluid"
        answer="It means that the fluid contains no additives to inhibit hole problems"
      />
      <OneLineQuestion
        question="Define inhibited fluid"
        answer="It means the fluid contains inhibiting ions which suppress the breakdown of the clays by charge association and or encapsulation"
      />
      <MultipleInputQuestion
        question="What are examples of inhibiting ions"
        answer={["Chloride", "Potassium", "Calcium", "Polymer"]}
      />
      <OneLineQuestion
        question="Define dispersed fluids"
        answer="It means that thinners have been added to control the fluids rheological properties"
      />
      <OneLineQuestion
        question="Define no dispersed fluids"
        answer="It means that clay particles are free to find their own dispersed equilibrium in the water phase"
      />
      <MultipleInputQuestion
        question="What are disadvantage of using water based muds"
        answer={[
          "The water in these muds caused instability in shales",
          "Shale is primary composed of clays and instability is largely caused by hydration of the clays by mud containing water",
          "Shale are the most common rock types encountered while drilling for oil and gas and give rise to more problems per meter drilled than any other type of formation",
        ]}
      />
      <OneLineQuestion
        question="What is oil based muds"
        answer="An oil based mud system is one in which the continuous phase of drilling fluid is oil"
      />
      <OneLineQuestion
        question="What is invert emulsion"
        answer="When water is added as the discontinuous phase in oil based mud then it is called invert emulsion"
      />
      <FillInTheBlanks
        question={[
          "Oil based muds are particularly useful in",
          ",",
          "and",
          "as clays do not",
          "or",
          "in oil",
        ]}
        answer={[
          "Drilling production zones",
          "Shales",
          "other water sensitive formations",
          "hydrate",
          "swell",
        ]}
      />
      <MultipleInputQuestion
        question={[
          "Oil based muds are also useful in drilling",
          "/",
          "wells because of their superior",
          "and",
          "between the steel and formation which result in reduced torque and drag",
        ]}
        answer={[
          "High angle",
          "Horizontal",
          "lubricating properties",
          "low friction values",
        ]}
      />
      <MultipleInputQuestion
        question="What are components of a typical low toxicity invert emulsion fluid"
        answer={[
          "Base oil",
          "Water",
          "Emulsifier",
          "Wetting agent",
          "Organophillic Clay",
          "Lime",
        ]}
      />
      <OneLineQuestion
        question="Write some point about base oil component"
        answer="Only low toxic base oil should be used as approved by the authorities"
      />
      <OneLineQuestion question="What is OWR" answer="Oil water ratio" />
      <TrueOrFalse
        question="Higher OWR is used for drilling troublesome formations"
        answer={false}
      />
      <FillInTheBlanks
        question={[
          "The salinity of water phase can be controlled by the use of",
          "usually",
          "",
        ]}
        answer={["Dissolved salts", "Calcium chloride"]}
      />
      <OneLineQuestion
        question="Why it is important to control the salinity in invert oil muds"
        answer="So that we can tie up free water molecules and prevent any water migration between mud and open formation such as shales"
      />
      <OneLineQuestion
        question="What is emulsifier"
        answer="Emulsifier act at the interface between the oil and the water droplets"
      />
      <FillInTheBlanks
        question={[
          "Emulsifier levels are held in",
          "",
          "to act against possible",
          "and",
          "contamination",
        ]}
        answer={["excess", "water", "Solid"]}
      />
      <OneLineQuestion
        question="What is wetting agent"
        answer="This is high concentration emulsifier used especially in high density fluids to oil wet all the solids"
      />
      <OneLineQuestion
        question="What is organophillic clay"
        answer="These are clay treated to react and hydrate in the presence of oil to give both suspension and viscosity characteristics"
      />
      <MultipleInputQuestion
        question="What is the use of lime"
        answer={[
          "Lime is the primary ingredient necessary for reaction with the emulsifiers to develop the oil water interface",
          "It is also useful in combating acidic gases such as CO2 and H2S",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The concentration of lime is usually held in excess of",
          "to",
          "depending on conditions",
        ]}
        answer={["2", "6 ppb"]}
      />
      <OneLineQuestion
        question="What is pseudo oil based mud"
        answer="A system which uses synthetic base oil is called a Pseudo oil based mud (SOB) and is designed to behave as close as possible to low toxic oil based mud (LTOBM)"
      />
      <MultipleInputQuestion
        question="What are different types of gas based fluids"
        answer={["Air", "Mist", "Foam", "Aerated Drilling fluid"]}
      />
      <MultipleInputQuestion
        question="What are advantages of drilling with air"
        answer={[
          "Higher penetration rates",
          "Better hole cleaning",
          "Less formation damage",
        ]}
      />
      <MultipleInputQuestion
        question="What are disadvantages of drilling with air"
        answer={[
          "Air cannot support the sides of borehole",
          "Air cannot exert enough pressure to prevent the fluids entering the borehole",
        ]}
      />
      <OneLineQuestion
        question="What is viscosity"
        answer="It is a measure of the internal resistance of a fluid to flow"
      />
      <OneLineQuestion
        question="What is gel strength"
        answer="It is a measurement under static measurement conditions of the forces in the mud which cause gel structure to develop when the mud is at rest"
      />
      <FillInTheBlanks
        question={[
          "The",
          "of the mud will provide an indication of the pressure required to initiate flow after the mud has been static for some tome",
        ]}
        answer={["Gel Strength"]}
      />
      <FillInTheBlanks
        question={[
          "The gel strength of the mud also provides an indication of the",
          "properties of the mud and hence its ability to",
          "cuttings when the mud is ",
          "",
        ]}
        answer={["Suspension", "suspend", "stationary"]}
      />
      <OneLineQuestion
        question="What is the use of gel strength"
        answer="It quantifies the thixotropic behaviour of fluid, it ability to have strength when static in order to suspend the cuttings and flow when put under the force"
      />
      <TrueOrFalse
        question="Ideally the two values of gel strength should be closer rather than progressively apart"
        answer={false}
      />
      <TrueOrFalse
        question="High proportion of sand in mud can damage the mud pump"
        answer={true}
      />
      <OneLineQuestion
        question="Should learn how various properties are measured !!!!!!!!!!!!!!"
        answer=""
      />
      <MultipleInputQuestion
        question="What are different types of drilling additives"
        answer={[
          "Weighting Materials",
          "Viscosifiers",
          "Filtration control Materials",
          "Rheology control materials",
          "Alkalinity and pH control materials",
          "Lost circulation control materials",
          "Lubricating materials",
          "Shale stabilizing materials",
        ]}
      />
      <OneLineQuestion
        question="What is weighting materials"
        answer="They are solids material which then suspended or dissolved in water will increase the mud weight"
      />
      <FillInTheBlanks
        question={[
          "Most weighting materials are",
          "and require",
          "to enable them to be suspended in a fluid",
        ]}
        answer={["Insoluble", "viscosifiers"]}
      />
      <FillInTheBlanks
        question={["", " is most common viscosifier"]}
        answer={["clay"]}
      />
      <MultipleInputQuestion
        question="What are the uses of weighting materials"
        answer={[
          "To control formation pressures",
          "To help combat the effects of sloughing or heaving shales that may be encountered in stressed areas",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The",
          "of the material controls how much solids material is required to produce certain mud weight",
        ]}
        answer={["Specific gravity"]}
      />
      <FillInTheBlanks
        question={[
          "The ability of drilling mud to suspend drill cuttings and weighting materials depends entirely on its",
          "",
        ]}
        answer={["Viscosity"]}
      />
      <OneLineQuestion
        question="What is the significance of viscosity"
        answer="Without viscosity all the weighting material and drill cuttings would settle to the bottom of the hole as soon as circulation is stopped"
      />
      <TrueOrFalse
        question="Increasing viscosity will decrease the pressure loss in the circulating system"
        answer={false}
      />
      <OneLineQuestion
        question="What is the use of filtration control materials"
        answer="They are compounds which reduce the amount of fluid that will be lost from the drilling fluid into a subsurface formation caused the differential pressure between the hydrostatic pressure of the fluid and the formation pressure"
      />
      <FillInTheBlanks
        question={[
          "",
          "imparts viscosity and suspension as well as the filtration control",
        ]}
        answer={["Bentonite"]}
      />
      <MultipleInputQuestion
        question="How does polymers like Polyanionic cellulose (PAC) and Sodium Carboxmethylcellulose (CMC) reduce filtrate"
        answer={[
          "They reduce filtrate mainly when the hydrated polymer chains absorb onto the clay solid and plug the pore spaces of the filter cake preventing fluid seeping through the filter cake and formation",
          "Filtration is reduced as the polymer viscosifies the mud thereby creating a viscosified structure to the filtrate making it difficult for filtrate to seep through",
        ]}
      />
      <MultipleInputQuestion
        question="How does starch work to reduce filtrate"
        answer={[
          "The free water is absorbed by the sponge like material which aids in the reduction of fluid loss",
          "Starches form very compressible particles that plug the small openings in the filter cake",
        ]}
      />
      <OneLineQuestion
        question="How does thinners and deflocculants work to reduce filtrate"
        answer="They function as filtrate reducers by separating the clay flock or groups enabling them to pack tightly to form a thin, flat filter cake"
      />
      <OneLineQuestion
        question="When are materials like thinner, dispersants or deflocculants are added"
        answer="When efficient control of viscosity and gel development cannot be achieved by control of viscosifier concentration"
      />
      <OneLineQuestion
        question="How does materials like thinner, dispersants or deflocculants work"
        answer="They cause a change in the physical and chemical interactions between solids or dissolved salts such that the viscous and structure forming properties of the drilling fluid are reduced"
      />
      <MultipleInputQuestion
        question="Why thinners are used"
        answer={[
          "To reduce filtration and cake thickness",
          "To counteract the effects of salt",
          "To minimize the effect of water on the formations of drilled",
          "To emulsify oil in water",
          "To stabilize mud properties at elevated temperatures",
        ]}
      />
      <MultipleInputQuestion
        question="What are the properties pH affects"
        answer={[
          "Detection and treatment of containments such as cements and soluble carbonates",
          "Solubility of many thinners and divalent metal ions such as calcium and magnesium",
        ]}
      />
      <OneLineQuestion
        question="What are Alkalinity and pH control additives"
        answer="They are compounds used to attain specific pH and to maintain optimum pH alkalinity in water base fluids"
      />
      <OneLineQuestion
        question="What are the causes of lost circulation"
        answer="Lost circulation is the loss of mud or cement to the formation during the drilling operations"
      />
      <MultipleInputQuestion
        question="What happens due to lost circulation"
        answer={[
          "Increased well costs, Due to lost rig time and loss of expensive drilling fluid",
          "Loss of accurate hole monitoring",
          "Well Control problems",
        ]}
      />
      <MultipleInputQuestion
        question="What are different type of Loss circulating materials (LCM)"
        answer={["Conventional LCM", "Reinforcing Plugs and cement"]}
      />
      <TrueOrFalse
        question="Reinforcing plugs and cement are used as a last resort if every thing else fails"
        answer={true}
      />
      <MultipleInputQuestion
        question="What are two types of reinforcing plugs"
        answer={["Oil bentonite plug", "Water organophilic clay plug"]}
      />
      <FillInTheBlanks
        question="Write about oil bentonite plug"
        answer={[
          "Bentonite does not hydrate in oil but when spotted downhole it will contact water, hydrate and with oil forms a strong plug",
          "The pill is pumped to the loss zone with spacers ahead and behind to prevent it from contacting water based mud en route to the loss zone",
          "When the pill is finally spotted, it will contact water and will hydrate and seal the loss zone",
        ]}
      />
      <FillInTheBlanks
        question="Write about water/ organophilic clay plug"
        answer={[
          "An organophilic clay, which yields in oil based mud but not in water is mixed with water and is pumped as a pill to the loss zone",
          "On contact with oil mud downhole it will form a strong solid material",
          "The pill must be pumped with a spacer ahead and behind to prevent it from contracting the oil based muds en route to the loss zone",
        ]}
      />
      <MultipleInputQuestion
        question="What are the uses for lubricating materials"
        answer={[
          "Lubricating materials are used mainly to reduce friction between the wellbore and the drillstring",
          "This will in turn reduce torque and drag which is essential in highly deviated and horizontal wells",
        ]}
      />
      <FillInTheBlanks
        question={[
          "Shale stabilization is achieved by the",
          "contacting the",
          "section",
        ]}
        answer={["Prevention of water", "Open Shale"]}
      />
      <TrueOrFalse
        question="Complete shale stabilization can be obtained only from polymers"
        answer={false}
      />
      <OneLineQuestion
        question="Study the mathametical formula in page no 66/80 in pdf about how to estimate the volume of solids entering the system"
        answer=""
      />
      <OneLineQuestion
        question="What is drill string"
        answer="Drill string is used to describe the tubulars and accessories on which the drill bit is run to the bottom of borehole"
      />
      <MultipleInputQuestion
        question="What are components in Drill string"
        answer={[
          "Drill Pipe",
          "Drill Collars",
          "kelly",
          "Stabilisers",
          "Reamers",
        ]}
      />
      <FillInTheBlanks
        question={[
          "The drill collars and the other equipment which is made up just above the bit are collectively called the",
          "",
        ]}
        answer={["Bottom Hole Assembly"]}
      />
      <MultipleInputQuestion
        question="What are the functions of drill string"
        answer={[
          "Compatible enough to withstand all sought forces",
          "Forces include that due to operation, environment and own load",
          "Stiff enough to transmit rotation to bit",
          "Strong enough to withstand pressure due to circulating liquid",
          "Compatible kelly to transmit the rotation efficiently",
        ]}
      />

      <MultipleInputQuestion
        question="What are objectives of drill string"
        answer={[
          "It provides a fluid conduit from the rig surface to the bit",
          "It imparts rotary motion to the bit",
          "It allows weight to be set on the bit",
          "It lowers and raises the bit in the well",
          "It provides stability to the bottom hole assembly to minimize bottom hole vibration and jumping",
          "It allows formation fluid and pressure testing",
          "It permits through pipe formation",
        ]}
      />

      <FillInTheBlanks
        question={["", "is the major component of the drill string"]}
        answer={["Drill pipe"]}
      />

      <TrueOrFalse
        question="Outer diameter of the tool joint of drill pipe must be larger than the wall thickness of the main body of the drill pipe"
        answer={true}
      />
      <OneLineQuestion
        question="What is the pin of drill pip"
        answer="The male end of the connection is known as the pin"
      />
      <FillInTheBlanks
        question={[
          "The",
          "will reflect the weight of the drill pipe when suspend in air",
        ]}
        answer={["Weight of pipe"]}
      />
      <OneLineQuestion
        question="What is wet weight of drill pipe"
        answer="It is the weight of drill pipe when suspended in fluid"
      />
      <OneLineQuestion
        question="Study the mathametical formula in page no 77/80 in pdf about how to get wet weight of drill pipe"
        answer=""
      />
      <MultipleInputQuestion
        question="What can be reasons for failure of Drill string"
        answer={["Excessive high stress", "Corrosion"]}
      />
      <MultipleInputQuestion
        question="What are different types of stresses the drill string is exposed to"
        answer={["Tension", "Torque", "Cyclic Stress Fatigue"]}
      />
      <MultipleInputQuestion
        question="Explain about Tension stress in Drill string"
        answer={[
          "The weight of the suspended drill string exposes each joint of drill pipe to several thousands pounds of tensile load",
          "Extra tension may be exerted due to overpull when pulling out of hole",
        ]}
      />
      <OneLineQuestion
        question="Explain about Torque stress in Drill string"
        answer="During Drilling rotation is transmitted down the string, poor hole condition can increase the amount of torque or twisting force on each joint"
      />
      <FillInTheBlanks
        question="Explain about cyclic stress fatigue in Drill string"
        answer={[
          "In deviated holes, the wall of pipe is exposed to compressive and tensile forces at points of bending in the hole",
          "As the string is rotates each joint sustains a cycle of compressive and tensile forces",
          "This can result in fatigue in the wall of pipe",
          "Stresses are also induced by vibration, abrasive friction and bouncing the bit off the bottom",
        ]}
      />
      <MultipleInputQuestion
        question="What are the reasons for corrosion of a drill string in a water based mud"
        answer={["Dissolved gases", "Dissolved salts and acids"]}
      />
      <MultipleInputQuestion
        question="What are some examples of gases, salts, acids which causes corrosion in drill string"
        answer={[
          "Oxygen",
          "Carbon di oxide",
          "Dissolved salts",
          "Hydrogen sulphide",
          "organic acids",
        ]}
      />
      <FillInTheBlanks
        question="Explains the problems can happen due to oxygen and how it can be prevented"
        answer={[
          "Oxygen even in small amount can cause rusting and pitting which may lead to washouts and twist offs",
          "Oxygen can be removed from drilling fluids using a scavenger",
        ]}
      />
      <OneLineQuestion
        question="Explain the problems can happen due to carbon di oxide"
        answer="It can be introduced into the wellbore with the drilling fluid or from the formation and it forms carbonic acid which corrodes steel"
      />
      <MultipleInputQuestion
        question="What is the origin of dissolved salts"
        answer={[
          "Makeup water",
          "Formation fluid in flow",
          "Drilled formation",
          "Drilling fluid additives",
        ]}
      />
      <OneLineQuestion
        question="Explain the problems can happen due to Dissolved salts"
        answer="It increases the rate of corrosion due to increased conductivity through the presence of dissolved salts"
      />
      <OneLineQuestion
        question="Explain the origin of Hydrogen sulphide"
        answer="It can be present in the formations being drilled"
      />
      <FillInTheBlanks
        question="Explain the problems can happen due to hydrogen sulphide"
        answer={[
          "It causes Hydrogen Embrittlement or sulphide stress cracking",
          "Hydrogen is absorbed onto the surface of steel in the presence of a sulphide, if the local concentration is sufficient cracks can be formed leading rapidly to a brittle failure",
        ]}
      />
      <OneLineQuestion
        question="How to prevent the problems that can happen due to hydrogen sulphide"
        answer="Special scavengers can be circulated in the mud to remove H2S"
      />
      <OneLineQuestion
        question="Explain the problems can happen due to Organic acids"
        answer="They produce corrosion by lowering the pH removing protective films and providing hydrogen to increase the chances of hydrogen embrittlement occurring"
      />

      <OneLineQuestion
        question="What is drill string subs"
        answer="A short, threaded piece used to adapt parts of drilling string that cannot otherwise be screwed together because of difference in thread size or design"
      />

      <OneLineQuestion
        question="What is the use of swivel in drill string"
        answer="It provides connection for the rotary hose and provide passageway for the flow of drilling fluid into the drillstem"
      />
      <OneLineQuestion
        question="What is the use of kelly in drill string"
        answer="It has a broad passageway that permits the fluid to be circulated into the drill stem and up the annulus or vice versa"
      />
      <MultipleInputQuestion
        question="What are the kelly accessories"
        answer={["Kelly saver sub", "kelly cock"]}
      />
      <OneLineQuestion
        question="What is kelly saver sub"
        answer="It is a small sub connected to the bottom of the kelly to protect its threads form wear during the excessive tripping and drilling operations"
      />
      <OneLineQuestion
        question="Where is kelly cock installed"
        answer="It installed on top of the kelly or below the kelly saver sub"
      />
      <MultipleInputQuestion
        question="What are the uses of kelly cock"
        answer={[
          "When used above the kelly it acts as the back pressure valve protecting equipments above the kelly",
          "It can be used to shut off the drill pipe under pressure",
        ]}
      />
      <OneLineQuestion
        question="What is kelly bushing"
        answer="A device that when fitted to master bushing transmits torque to the kelly and simultaneously permits vertical movement of the kelly to make hole"
      />
      <MultipleInputQuestion
        question="What are different types of kelly bushing"
        answer={["Type HDP", "Type HDS", "Type MDS"]}
      />
      <OneLineQuestion
        question="What is master bushing"
        answer="A device that fits into the rotary table to accommodate the slips and drive the kelly bushing so that the rotating motion of the rotary table can be transmitted to the kelly"
      />
      <MultipleInputQuestion
        question="What are different types of master bushing"
        answer={["Type MSPC", "Type MPCH", "Type MBSS"]}
      />
      <OneLineQuestion
        question="What is drill collar"
        answer="The heavy thick walled tube steel used between the drill pipe and the bit in the drill stem to provide pendulum effect to the drill stem and to provide weight on bit"
      />
      <MultipleInputQuestion
        question="What are different types of Drill pipe joints"
        answer={[
          "IEU (Internal External Upset)",
          "EU (External upset)",
          "IF (Internal Flush)",
          "IU (Internal upset)",
        ]}
      />
      <OneLineQuestion
        question="What is IEU"
        answer="Tool joint is larger than the pipe such that the tool joint inner diameter is less than the drill pipe and the tool joint outer diameter is larger than drill pipe"
      />

      <OneLineQuestion
        question="What is EU"
        answer="Tool joint outer diameter is larger than drill pipe and inner diameter is same as that of drill pipe"
      />
      <OneLineQuestion
        question="What is IF"
        answer="Tool joint inner diameter is approximately same as that of drill pipe and the outer diameter is upset "
      />
      <OneLineQuestion
        question="What is IU"
        answer="Tool joint inner diameter is less than drill pipe and tool joint outer diameter is approximately same as that of drill pipe"
      />

      <SingleChoiceQuestion
        question="What is strongest type of drill pipe joints"
        choices={["IEU", "EU", "IF", "IU"]}
        answer={1}
      />

      <SingleChoiceQuestion
        question="What type has another name as Slim hole pipe"
        choices={["IEU", "EU", "IF", "IU"]}
        answer={4}
      />

      <MultipleInputQuestion
        question="What is difference between heavy weight drillpipe and drillpipe"
        answer={[
          "Tube wall is heavier",
          "Tool joints are longer",
          "Tube section has a large diameter at mid length to protect pipe from water",
        ]}
      />
      <MultipleInputQuestion
        question="What are functions of drill pipe"
        answer={[
          "A transition member to be run between the drill collars and drill pipe",
          "A flexible weight member to run on directional drilling",
          "A weight member on small rigs",
          "Drilling small diameter holes",
        ]}
      />
    </>
  );
};
