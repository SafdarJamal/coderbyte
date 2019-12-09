// Description: For this challenge you will be reversing a string.

// Q. Have the function FirstReverse(str) take the str parameter being passed
//    and return the string in reversed order. For example: if the input string
//    is "Hello World and Coders" then your program should return the string
//    sredoC dna dlroW olleH.

// Examples
// Input: "I Love Code"
// Output: edoC evoL I

const firstReverse = str => {
  return str
    .split('')
    .reverse()
    .join('');
};

console.log(firstReverse('I Love Code'));
