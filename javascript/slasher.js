// Question: Return the remaining elements of an array after chopping off n elements from the head. The head means the beginning of the array, or the zeroth index.

// Input: array
// Output: array

Example:
Input: ([1, 2, 3], 2)
Output: [3]

Input: ([1, 2, 3], 9)
Output: []

function slasher(arr, howMany) {
  if (howMany === 0) {
    return arr;
  }
  else {
    arr.splice(0,howMany);
    return arr;
  }
}
