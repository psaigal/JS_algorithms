// Question: Check if a string (first argument, str) ends with the given target string (second argument, target).

// Input: string
// Output: boolean

// Example:
// Input: "Bastian", "n"
// Output: true

// Input: "Connor", "n"
// Output: false

function confirmEnding(str, target) {
  str = str.replace(/\s/g, ''); //remove white space from string
  var targetLength = target.length;
  var start = (str.length) - (target.length);
  if (str.substring(start,str.length+1) === target) {
    return true;
  }
  return false;
}

confirmEnding("Open sesame", "same")

