function smallestCommons(arr) {
    var result;
    var smallNum;
    if (arr[0] > arr[1]) {
        result = arr[0];
        bigNum = arr[0];
        smallNum = arr[1];
    }
    else {
        result = arr[1];
        bigNum = arr[1];
        smallNum = arr[0];
    }
    for (var i = smallNum; i <= bigNum; i++) {
        if (result % i !== 0) {
            i = smallNum-1;
            result += 1;
        }
    }
    return result;
}

smallestCommons([1,5]);


//Refactored Solution

function smallestCommons(arr) {
  var primeNumberContainer = {};
  var result = 1;
  arr.sort();
  var orderedArray = [];
  orderedArray[0] = arr[0];
  for (var z = 1; orderedArray[orderedArray.length-1] < arr[1]; z ++) {
    orderedArray[z] = orderedArray[z-1] + 1
  }
  for(var i = 0; i <= orderedArray.length-1; i++) {
    if(orderedArray[i] !== 1) {
      var primeNumsArray = findPrimeNumbers(orderedArray[i],[]);
      var tempObj = {};
      for (var y = 0; y <= primeNumsArray.length-1; y ++) {
        if (tempObj.hasOwnProperty(primeNumsArray[y])) {
          tempObj[primeNumsArray[y]] += 1;
        }
        else {
          tempObj[primeNumsArray[y]] = 1;
        }
      }
    }
    for (var key in tempObj) {
      if (!primeNumberContainer.hasOwnProperty(key)) {
        primeNumberContainer[key] = tempObj[key];
      }
      else {
        if (tempObj[key] > primeNumberContainer[key]) {
          primeNumberContainer[key] += tempObj[key] - primeNumberContainer[key];
        }
      }
    }
  }
  for (var num in primeNumberContainer) {
    result *= Math.pow(num, primeNumberContainer[num]);

  }
  return result;
}


function findPrimeNumbers(number, array) {
    var numbers = [2,3,4,5,6,7,8,9];
    for (var i = 0; i <= numbers.length-1; i++) {
        if (number % numbers[i] === 0) {
            array.push(numbers[i]);
            return findPrimeNumbers(number/numbers[i],array);
        }
        else if (number === numbers[i]) {
          array.push(number);
        }
    }
    if (number != 1) {
      array.push(number);
    }
    return array;
}


smallestCommons([1,13]);




// Input: array of two integers
// Output: integer

// Example:
// Input: smallestCommons([1,5]);
// Output: 60;

// 1,2,3,4,5
// 60/1 = 60
// 60/2 = 30
// 60/3 = 20
// 60/4 = 15
// 60/5 = 12

// Steps:
// 1. Start a loop between the two parameters given, starting from smallest number until largest number.
// 2. Start with the largest number in the array given. Divide every number in the array by that number. If all the numbers are evenly divisble by that number, return it. If not, increase that number by 1 and try again until you reach the correct answer.

//     So in this case, we check:
//      5/1 => pass
//      5/2 => fail

//      Increment largest number, 5, by 1. Now we are checking 6.
//      6/1 => pass
//      6/2 => pass
//      6/3 => pass
//      6/4 => fail

//      largestNum = 5
//      i = smallNum
//      largestNum/smallNum, if pass, incremenet smallNum; if fail, incremenet largestNum and repeat


