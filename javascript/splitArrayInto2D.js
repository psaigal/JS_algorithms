// Question: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Input: array and string
//Output: 2D array

Example:
// Input: ["a", "b", "c", "d"], 2)
// Output: [["a", "b"], ["c", "d"]]

// Input: [0, 1, 2, 3, 4, 5], 3) 
// Output: [[0, 1, 2], [3, 4, 5]]

// Input: ([0, 1, 2, 3, 4, 5], 4)
// Output: [[0, 1, 2, 3], [4, 5]]


function chunkArrayInGroups(arr, size) {
  var result = [];
  inputLength = arr.length;
  while (arr.length > 0){
    if (arr.length >= size) {
      result.push(arr.splice(0,size));
    }
    else {
      result.push(arr);
      return result;
    }
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);