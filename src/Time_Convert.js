// Description: For this challenge you will be determining the difference in
// hours and minutes between two given times.

// Q. Have the function TimeConvert(num) take the num parameter being passed
//    and return the number of hours and minutes the parameter converts to
//    (ie. if num = 63 then the output should be 1:3). Separate the number of
//    hours and minutes with a colon.

// Examples
// Input: 126
// Output: 2:6

// Input: 45
// Output: 0:45

const timeConvert = num => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  const result = `${hours}:${minutes}`;

  return result;
};

console.log(timeConvert(70));
