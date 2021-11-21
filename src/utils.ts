export const compareTwoStrings = (left: string, right: string) => {
  let lowerCaseLeft = left.trim().toLocaleLowerCase();
  let lowerCaseRight = right.trim().toLocaleLowerCase();

  ignoreWords.forEach((value) => {
    lowerCaseLeft = lowerCaseLeft.replaceAll(value, " ");
    lowerCaseRight = lowerCaseRight.replaceAll(value, " ");
  });

  replaceWords.forEach(([wordToReplace, replaceWithWord]) => {
    lowerCaseLeft = lowerCaseLeft.replaceAll(wordToReplace, replaceWithWord);
    lowerCaseRight = lowerCaseRight.replaceAll(wordToReplace, replaceWithWord);
  });

  if (lowerCaseLeft === lowerCaseRight) return true;

  console.log(
    `
${lowerCaseLeft}
${lowerCaseRight}
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
].map((s) => ` ${s} `);

const replaceWords = [
  ["values", "value"],
  ["differences", "difference"],
];
