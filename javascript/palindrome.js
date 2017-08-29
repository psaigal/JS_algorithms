//Return true or false if a string is a palindrome. A palindrome is a string that is spelled the same way backwards and forwards. Spaces, punctuation, uppercase letters, and symbols must be removed.

//Input: string
//Output: boolean


// Example: racecar(odd numer string) 1. Take string racecar 2. Check if first
// and last letter match 3. Continue until you reach middle of string, if the
// string is an odd number of character 4. In this example, we would return
// true


// Example: miooim(even number string)
// 1. Take string miooim
// 2. Take string length/2. In this case 6/2 = 3
// 3. Check if first and last letter match
// 4. Continue until you reach middle of string, if the string is an odd number of character
// 5. In this example, we would return true



function palindrome(str) {
  var newStr = str.replace(/[,.()\-\_ ]+/g, "").trim().toLowerCase();
  var strArray = newStr.split("");
  var j = newStr.length-1;
  for (var i = 0; i <= newStr.length/2; i++) {
    var start = strArray[i];
    var end = strArray[j];
    if (start != end) {
      console.log(i + " i");
      return false;
    }
    j--;
  }
  return true;
}


palindrome("0_0 (: /-\ :) 0-0");


palindrome("eye");
