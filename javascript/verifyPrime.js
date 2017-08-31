// Question: Check if the number is a prime number

// Steps
// 1. Write a function that takes a number
// 2. Verify if that number is a prime number
// 3. Prime numbers are only divisble by 1 and themselves (like 7, 13, 31);
// 4. If the number

// // Input
// 1. 4
// 2. 3
// 3. 11
// 4. 1
// 5. 0
// 6. -2


// // Output
// 1. false
// 2. true
// 3. true
// 4. false
// 5. false
// 6. false


//SOLUTION 1
function isNumberPrime(number) {
  var numbers = [2,3,4,5,6,7,8,9];
  if (number <= 0 || number === 1 || number === 2 || number === 3 || number === 5 || number === 7) {
    return true;
  }
  else if (number <= 9) {
    return false;
  }
  else if (number > 9) {
    for(var i = 0; i <= numbers.length-1; i++) {
      if (number % numbers[i] === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  }
}

isNumberPrime(12);

//SOLUTION 2
function verifyPrime(num) {
  if (num === 1 || num === 2) {
    return true;
  }
  for (var j = 2; j <= num/2; j++) {
    if ((num % j === 0)) {
      return false;
    }
  }
  return true;
}







