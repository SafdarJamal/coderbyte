// Description: For this challenge you will be determining the largest word in
// a string.

// Q. Have the function LongestWord(sen) take the sen parameter being passed
//    and return the largest word in the string. If there are two or more words
//    that are the same length, return the first word from the string with that
//    length. Ignore punctuation and assume sen will not be empty.

// Examples
// Input: "fun&!! time"
// Output: time

// Input: "I love code"
// Output: love

const longestWord = sen => {
  sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  const arr = sen.split(' ');

  arr.sort((a, b) => b.length - a.length);

  return arr.shift();
};

console.log(longestWord('I love code'));
