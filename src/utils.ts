export const compareTwoStrings = ({
  correct,
  check,
}: {
  correct: string;
  check: string;
}) => {
  let lowerCaseCorrect = ` ${correct.trim().toLocaleLowerCase()} `;
  let lowerCaseCheck = ` ${check.trim().toLocaleLowerCase()} `;

  ignoreWords.forEach((value) => {
    lowerCaseCorrect = lowerCaseCorrect.replaceAll(value, " ");
    lowerCaseCheck = lowerCaseCheck.replaceAll(value, " ");
  });

  replaceWords.forEach(([wordToReplace, replaceWithWord]) => {
    lowerCaseCorrect = lowerCaseCorrect.replaceAll(
      ` ${wordToReplace} `,
      ` ${replaceWithWord} `
    );
    lowerCaseCheck = lowerCaseCheck.replaceAll(
      ` ${wordToReplace} `,
      ` ${replaceWithWord} `
    );
  });

  if (lowerCaseCorrect === lowerCaseCheck) return true;

  console.log(
    `
 Correct : ${lowerCaseCorrect}
 Check   : ${lowerCaseCheck}
`
  );

  return false;
};

const ignoreWords = [
  "the",
  "is",
  "at",
  "by",
  "to",
  "for",
  "of",
  "in",
  "on",
  "into",
  "a",
  "an",
  "be",
  "its",
  "it",
  "that",
  "any",
  "which",
  "but",
  "and",
  "has",
  "can",
  "across",
  "any",
  "very",
  "might",
  "against",
  "from",
  "all",
  "are",
  "and",
  "or",
  "those",
  "then",
  "will",
  "should",
  "through",
  "we",
].map((s) => ` ${s} `);

const replaceWords = [
  ["  ", " "],
  ["values", "value"],
  ["differences", "difference"],
  ["do not", "cannot"],
  ["surroundings", "surrounding"],
  ["variations", "variation"],
  ["deviations", "deviation"],
  ["measurements", "measurement"],
  ["borehole", "well"],
  ["formations", "formation"],
  ["installations", "installation"],
  ["sediments", "sediment"],
  ["resources", "resource"],
  ["organisms", "organism"],
  ["domes", "dome"],
  ["muds", "mud"],
  ["encountered", "found"],
  ["hydrocarbons", "hydrocarbon"],
  ["wont", "will not"],
  ["preventers", "preventer"],
  ["packers", "packer"],
  ["reduces", "reduce"],
  ["improves", "improve"],
  ["operations", "operation"],
  ["perforations", "perforation"],
  ["completions", "completion"],
  ["zones", "zone"],
  ["equipments", "equipment"],
  ["provides", "provide"],
  ["remains", "remain"],
  ["environment", "environments"],
  ["produced", "produce"],
  ["happens", "happen"],
  ["rocks", "rock"],
  ["valleys", "valley"],
  ["breakdown", "break down"],
  ["transfer", "transport"],
  ["forces", "force"],
  ["metamorphisms", "metamorphism"],
  ["crystallization", "crystallisation"],
  ["allows", "allow"],
  ["wells", "well"],
  ["movements", "movement"],
  ["continents", "continent"],
  ["plates", "plate"],
  ["currents", "current"],
  ["closes", "close"],
  ["required", "added"],
  ["larger", "large"],
  ["rams", "ram"],
  ["cuts", "cut"],
  ["methods", "method"],
  ["cuttings", "cutting"],
  ["descriptions", "description"],
  ["rocks", "rock"],
  ["records", "record"],
  ["reached", "reach"],
  ["reaches", "reach"],
  ["wellbore", "well"],
  ["moves", "move"],
  ["moving", "move"],
  ["pushes", "push"],
  ["towards", "toward"],
  ["dissolves", "dissolve"],
  ["formation pressure", "pore pressure"],
  ["oils", "oil"],
  ["engineers", "engineer"],
  ["fluids", "fluid"],
  ["changes", "change"]
];
