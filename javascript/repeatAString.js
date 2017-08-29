// Question: Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// Input: string
// Output: string

// Example:
// Input: ("*", 3) 
// Output: "***"

// Input: ("abc", -2)
// Output: ""

function repeatStringNumTimes(str, num) {
  var newStr = "";
  if(num <= 0) {
    return "";
  }
  else {
    var  i = 0;
    while(i < num) {
      newStr += str;
      i += 1;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);