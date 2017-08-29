// Question: Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Input: array
// Output: array

// Example:
// Inp]ut: ([7, "ate", "", false, 9]) 
// Output: [7, "ate", 9]

function bouncer(arr) {
  return arr.filter(function(value){
    if(value !== false) {
      return value;
    }
  });
}
