const pigLatin = require("./pigLatin");

const translateToPigLatinSentence = (str) => {
  const words = str.split(" ");
  const newWords = words.map((word) => pigLatin(word));
  return newWords.join(" ");
};

module.exports = translateToPigLatinSentence;
