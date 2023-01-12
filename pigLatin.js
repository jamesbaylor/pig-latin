const pigLatin = (str) => {
  let strToLower = str.toLowerCase();

  let firstVowelIndex = strToLower.indexOf(strToLower.match(/[aeiou]/i));
  let nonAlphabeticalCharactersAtTheEnd = [];
  while (str.match(/[^A-Za-z]$/g)) {
    nonAlphabeticalCharactersAtTheEnd.unshift(str.match(/[^A-Za-z]$/g)[0]);
    str = str.slice(0, -1);
  }

  let result =
    str.substr(firstVowelIndex) +
    str.substr(0, firstVowelIndex) +
    (firstVowelIndex == 0 ? "way" : "ay");

  if (isAllLower(str)) {
    result = result.toLowerCase();
  } else if (isAllUpper(str)) {
    result = result.toUpperCase();
  } else if (isCapitalized(str)) {
    result = capitalize(result);
  } 

  return result + nonAlphabeticalCharactersAtTheEnd.join('');
};

const isAllLower = (str) => {
  return str === str.toLowerCase();
};

const isAllUpper = (str) => {
  return str === str.toUpperCase();
};

const isCapitalized = (str) => {
  return str[0] === str[0].toUpperCase();
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

module.exports = pigLatin;
