//Given a number as input, return all of its prime numbers


function getPrimeNums(num) {
    var result = [];
    var j = 2;
    while (num > 1) {
      if (num % j === 0) {
        result.push(j);
        num = num/j;
        j = 2;
      }
      else {
        j++;
      }
      }
    }
  return result;
}