// Question: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Input: Two arrays
// Output: Array

// Example:
// Input: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
// Output: ["pink wool"]

// Input: [1, 2, 3, 5], [1, 2, 3, 4, 5]
// Output: [4]

// Input: [1, "calf", 3, "piglet"], [1, "calf", 3, 4]
// Output: ["piglet,4"]

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i <= arr1.length-1; i++) {
    if(arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
    else {
      arr2.splice(arr2.indexOf(arr1[i]),1);
    }
  }
  return newArr.concat(arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

