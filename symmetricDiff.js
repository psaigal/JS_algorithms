// Question:Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

function sym(args) {
  // console.log(arguments.length);
  // console.log(arguments);
  var frequencyObject = {};
  var allArrays = [];
  var symDifference = [];
  for (var key in arguments) {
    allArrays.push(arguments[key]);
  }
  while (allArrays.length != 1) {
    for (var i = 0; i <= 1; i ++) {
      allArrays[i] = allArrays[i].filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
      });
      for (var y = 0; y <= (allArrays[i].length)-1; y ++) {
        if (!frequencyObject.hasOwnProperty(allArrays[i][y])) {
          frequencyObject[allArrays[i][y]]= 1;
        }
        else {
          frequencyObject[allArrays[i][y]]+= 1;
        }
      }
    }
    for (key in frequencyObject) {
      if (frequencyObject[key] === 1){
        symDifference.push(key);
      }
    }
    allArrays.splice(0, 2);
    allArrays.unshift(symDifference);
    frequencyObject = {};
    symDifference = [];
    if (allArrays.length === 1) {
      for (var x = 0; x <= (allArrays[0].length-1); x ++){
        allArrays[0][x] = parseInt(allArrays[0][x]);
      }
      return allArrays[0];
    }
  };
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])

// Input: two or more arrays (arrays will contain numbers)
// Output: array (with the symmetric difference of the provided arrays)

// Example
// A = {1, 2, 3},  B = {2, 3, 4} => the symmetric difference result is: C = {1, 4}
// Now compare C to the next argument, D = {2, 3}
// *****RESULT = {1, 2, 3, 4}

//Psuedocode
// 1. Create an array which contains the different array arguments (an array of arrays)
// 2. We want to start by comparing the differences/similarities between the first two arrays. We will need to get rid of duplicate numbers in each array
// 3. For example say the two arrays are: var 1 = [1,2,3] and var 2 = [4,2,6]
// 4. Lets create an empty object. The key will equal the number in the array and the value will equal the number of times that value appears. So we sort through these two arrays amd update the hash.
// frequencyObject= {1:1, 2:2, 3:1, 4:1, 6:1}
// 5. We then look at the frequency hash. For every key that has a value of 1, we take its key and push it into a new array. This new array will take the place of the previous two arrays.
//6. We will then compare the new array to the next array in line, until we reach the end
