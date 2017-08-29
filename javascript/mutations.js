// Question: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Input: array
// Output: boolean

// Example
// Input: ["hello", "hey"]
// Output: false

// Input: ["Mary", "Army"]
// Output: true


function mutation(arr) {
  frequencyObj = {};
  if (arr.length === 1) {
    return true;
  }
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for (var j = 0; j <= arr[0].length-1; j++) {
    if (frequencyObj.hasOwnProperty(arr[0][j])) {
      frequencyObj[arr[0][j]] += 1
    }
    else {
      frequencyObj[arr[0][j]] = 1;
    }
  }
  for (var k = 0; k <= arr[1].length-1; k++) {
    if (frequencyObj[arr[1][k]] === undefined) {
      return false;
    }
  }
  return true;
}