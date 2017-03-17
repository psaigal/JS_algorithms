// Question: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Input: array
// Output: array

// Example:
// Input: ([1, 2, 3, 1, 2, 3], 2, 3)
// Output: [1, 1]

// Input: ([3, 5, 1, 2, 2], 2, 3, 5)
// Output: [1]

// Input: ([2, 3, 2, 3], 2, 3)
// Output: []


function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var arr = args.slice(0,1)[0];
  var nums = args.slice(1,args.length);
  return arr.filter(function(value){
    return nums.indexOf(value) === -1;
  });
}