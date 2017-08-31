// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.




function uniteUnique(arr) {
  var newArr = [];
  var hash = {};
  for (var key in arguments) {
    for (var i = 0; i <= arguments[key].length-1; i++) {
      if (!hash[arguments[key][i]]) {
        hash[arguments[key][i]] = 1;
      }
      else {
        hash[arguments[key][i]] += 1;
      }
    }
    for (var k in hash) {
      if (hash[k] > 1) {
        arguments[key].splice(arguments[key].indexOf(Number(k)), 1)
      }
    }
  newArr.push(arguments[key])
  }
  var merged = [].concat.apply([], newArr);
  return merged;
}


uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) 

// should return [1, 3, 2, [5], [4]]






