// Description: For this challenge you will be manipulating characters in a
// string based off their positions in the alphabet.

// Q. Have the function LetterChanges(str) take the str parameter being passed
//    and modify it using the following algorithm. Replace every letter in the
//    string with the letter following it in the alphabet
//    (ie. c becomes d, z becomes a). Then capitalize every vowel in this new
//    string (a, e, i, o, u) and finally return this modified string.

// Examples
// Input: "hello*3"
// Output: Ifmmp*3

// Input: "fun times!"
// Output: gvO Ujnft!

const letterChanges = str => {
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const arr = str.toLowerCase().split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (arr[i] === alphabets[j]) {
        let value = alphabets[j !== 25 ? j + 1 : 0];

        for (let k = 0; k < vowels.length; k++) {
          if (value === vowels[k]) {
            value = value.toUpperCase();
            break;
          }
        }

        newArr.push(value);
        break;
      } else if (j === alphabets.length - 1) {
        newArr.push(arr[i]);
      }
    }
  }

  const newStr = newArr.join('');
  return newStr;
};

console.log(letterChanges('hello*3'));
