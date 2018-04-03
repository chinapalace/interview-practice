// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  charMap = {}
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let max = 0;
  let result = '';
  for (let char in charMap) {
    if (charMap[char] > max) {
      result = char;
      max = charMap[char];
    }
  }
  return result;
}

module.exports = maxChar;












// function reverse(str) {
//   let reverse = '';

//   for (let char of str) {
//     reverse = char + reversed;
//   }
// }

// Promise.all([promise1, promise2]).then(responses => {
//   console.log(responses);
// })


// const chars = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//   chars[char] = chars[char] + 1 || 1;
// }
// console.log(chars);

// for (let char in chars) {
//   if (chars[char] > max) {
//     max = chars[char];
//     maxChar = char;
//   }
// }
// return maxChar;