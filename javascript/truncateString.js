// Question: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Input: string
// Output: string

// Example:
// Input: "A-tisket a-tasket A green and yellow basket", 11
// Output: "A-tisket...""

// Input: "A-", 1
// Output: "A..."

// Input: "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2
// Output: "A-tisket a-tasket A green and yellow basket"



function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  else if(num <= 3) {
    var y = str.slice(0,num) + "...";
    return y;
  }
  else {
    var x = str.slice(0,num-3) + "...";
    return x;
  }
}
