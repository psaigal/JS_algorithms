// Input: string
// Output: string

// Steps:
// 1. Put string into array
// 2. Take values of first and last letters and store in variables.
// 3. Loop through string until reach the middle
// 4. Return the the values in the array as a string


function reverseString(str) {
  var strArray = str.split("");
  var j = str.length-1;
  for (var i = 0; i <= str.length/2; i++) {
    var start = str[i];
    var end = str[j];
    strArray[i] = end;
    strArray[j] = start;
    j --;
  }
  return strArray.join('');
}

reverseString("hello");