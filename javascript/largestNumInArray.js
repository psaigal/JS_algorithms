// Question: Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Input: Array
//Output: Array

//Example:
// Input: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// Output: [27,5,39,1001]

function largestOfFour(arr) {
  var largestNum = 0;
  var result = [];
  for (var i = 0; i <= arr.length-1; i++) {
    for (var j = 0; j <= arr[i].length-1; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    result.push(largestNum);
    largestNum = 0;
  }
  return result;
}