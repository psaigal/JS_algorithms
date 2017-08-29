// Question: We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

// Input: Array of two nums
// Output: Number

// Example:
// Input: [1,4]
// Output: 10

// Input: [4,1]
// Output: 10

// Input: [5,10]
// Output: 45

// Solution 1:
function sumAll(arr) {
  var allNums = [];
  var result = 0;
  var big = Math.max(arr[0],arr[1]); 
  var small = Math.min(arr[0],arr[1]);
  for (var j = small; j <= big; j++) {
    allNums.push(j);
  }
  console.log(allNums);
  for(var i = 0; i <= allNums.length-1; i++) {
    result += allNums[i];
  }
  return result;
}


// Solution 2:
function sumAll(arr) {
  var allNums = [];
  var result = 0;
  var big = Math.max(arr[0],arr[1]); 
  var small = Math.min(arr[0],arr[1]);
  for (var j = small; j <= big; j++) {
    allNums.push(j);
  }
  return allNums.reduce(addNums);
}

function addNums(num1,num2) {
  return num1 + num2;
}