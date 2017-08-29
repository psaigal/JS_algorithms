// Input: string
// Output: string

// Steps:
// 1. Put string into array
// 2. Take values of first and last letters and store in variables.
// 3. Loop through string until reach the middle
// 4. Return the the values in the array as a string


// SOLUTION 1
function reverseString(str) {
  var newStr = "";
  for (var i = str.length-1; i >= 0; i--) {
    newStr += str.slice(i,i+1);
  }
  return newStr;
}


// SOLUTION 2
function reverseString(str) {
  var arr = str.split("");
  var start = 0;
  var end = arr.length-1;
  while(start < (end/2)) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start ++;
    end --;
  }
  return arr.join("");
}



reverseString("hello");

