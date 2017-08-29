// Solution 1

function factorialize(num) {
  var result = num;
  if (num <= 1) {
    return 1;
  }
  for (var i = num-1; i >= 1;  i -= 1) {
    result = i * result;
  }
  return result;
}

// Solution 2

function factorialize(num) {
  if (num === 0) { //base case
    return 1;
  }
  return num * factorialize(num-1);
}


//Input:Integer
//Output:Integer

// Example: factorialize(5) => 120
// 5 * 4 = 20
// 20 * 3 = 60
// 60 * 2 = 120
// 120 * 1 = 120

// result * num-1 = result
// result * num-2 = result
// result * num- 3 = result
