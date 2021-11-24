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
].map((s) => ` ${s} `);

const replaceWords = [
  ["values", "value"],
  ["differences", "difference"],
  ["do not", "cannot"],
  ["surroundings", "surrounding"],
  ["variations", "variation"],
  ["deviations", "deviation"],
  ["measurements", "measurement"],
  ["borehole", "wellbore"],
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
];
