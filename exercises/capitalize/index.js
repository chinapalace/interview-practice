// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const wordsArr = str.split(' ');
  const capitalized = [];

  for (let word of wordsArr) {
    capitalized.push(word[0].toUpperCase() + word.slice(1))
  }
  return capitalized.join(' ');

}

module.exports = capitalize;










// let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;

// const wordsArr = str.split(' ');
//   const words = [];

//   for (let word of wordsArr) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');