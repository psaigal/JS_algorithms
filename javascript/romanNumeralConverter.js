// Question: Convert the given number into a roman numeral.

// Input: Number
// Output: String

// Example:
// Input: 2
// Output: II

// Input: 68
// Output: LXVIII

// Input: 649
// Output: DCXLIX

// Roman Numerals List
// I : 1
// V:  5
// VI: 6 
// X:  10
// XV: 15
// XX: 20
// L:  50
// LX: 60
// XC: 90
// XC1:91
// XCV:95
// C: 100
// D: 500
// M: 1000

// Psuedocode:
// 1. Create object with roman numeral characters
// 2. If the argument is 36, we go through the object and find the largest number that is less than or equal to 36.
// 3. In this case, we see "X" = 10
// 4. We take 36 and subtract 10 until we get to a number that less than 0. So if we get 36-(10*4), we get -4. So we subract 10 from 30 three times.
// 5. We store XXX in a variable called result.
// 6. Next we take our new number, 6. We find the next largest number that is less than or equal to 6. We get five. Add "V" to the result.
// 7. We repeat the same steps for the number 1. We have "I".
// 8. We return the result.



// 1. Create object with roman numeral characters
// 2. If the argument is 36, we go through the object and find the largest number that is less than or equal to 36.
// 3. In this case, we see "X" = 10
// 4. We take 36 and subtract 10 until we get to a number that less than 0. So if we get 36-(10*4), we get -4. So we subract 10 from 30 three times.
// 5. We store XXX in a variable called result.
// 6. Next we take our new number, 6. We find the next largest number that is less than or equal to 6. We get five. Add "V" to the result.
// 7. We repeat the same steps for the number 1. We have "I".
// 8. We return the result.


// Roman Numerals List
// I : 1
// V:  5
// VI: 6 
// X:  10
// XV: 15
// XX: 20
// L:  50
// LX: 60
// XC: 90
// XC1:91
// XCV:95
// C: 100
// D: 500
// M: 1000


//SOLUTION 1
function convertToRoman(num) {
  var result = "";
  var numStr = num.toString();
  var numberHash = [["M",1000], ["CM", 900], ["D",500], ["C",100], ["XC",90], ["L",50], ["XL",40], ["X",10], ["IX",9], ["V",5], ["IV",4], ["I",1]];
  while (numStr.length > 0) {
    var subStr = numStr.substring(1, numStr.length);
    var numToCheck = Number(numStr-subStr);
    while (numToCheck > 0) {
      for(var i = 0; i <= numberHash.length-1; i++) {
        if(numberHash[i][1] <= numToCheck) {
          result += numberHash[i][0];
          numToCheck = numToCheck - numberHash[i][1];
          break;
        }
      }
  }
    numStr = subStr;
  }
  return result;
}



//SOLUTION 2

function convertToRoman(num) {
  var result = "";
  var numberHash = [["M",1000], ["CM", 900], ["D",500], ["C",100], ["XC",90], ["L",50], ["XL",40], ["X",10], ["IX",9], ["V",5], ["IV",4], ["I",1]];
  for(var i = 0; i <= numberHash.length-1; i++) {
    while (numberHash[i][1] <= num) {
      result += numberHash[i][0];
      num = num - numberHash[i][1];
    }
  }
  return result;
}

