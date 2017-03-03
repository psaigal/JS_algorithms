// Question: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// Question found on freecodecamp

function checkCashRegister(price, cash, cid) {
  var originalChange = cash - price;
  var change = cash - price;
  var result = [];
  var totalResult = addSums(cid);
  if (addSums(cid) === change) {
    return "Closed";
  }
  currencyValue = {"PENNY": 0.01, "NICKEL": 0.05, "DIME" : 0.10, "QUARTER": 0.25, "ONE" : 1.00, "FIVE": 5.00, "TEN": 10.00, "TWENTY": 20.00, "ONE HUNDRED":100.00};
  for (var i = (cid.length)-1; i >= 0; i --) {
    if (change > currencyValue[cid[i][0]]) {
      if (change >= cid[i][1] && cid[i][1] > 0) {
        change = change - cid[i][1];
        result.push(cid[i]);
      }
      else if (change < cid[i][1] && cid[i][1] > 0) {
        cid[i][1] = change - change % currencyValue[cid[i][0]];
        change = change % currencyValue[cid[i][0]];
        result.push(cid[i]);
      }
      if (change === 0) {
        return result;
      }
    }
  }
  if (addSums(result) != originalChange) {
    return "Insufficient Funds";
  }
}

function addSums(array) {
  var sum = 0;
  for (var i = 0; i <= (array.length)-1; i++) {
    sum = sum + array[i][1];
  }
  return sum;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// Input: Two integers(price and cash) and 2D array with key value pairs of currency as key and amount of currency available as value
// Output: 2D array(with the amount of change in highest to lowest order)

// Example
// INPUT:
// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
// OUTPUT:
// [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

//Psuedocode
// 1. Subtract purchase price from payment given. In our example, that would be $100 - $3.26 = $96.74
// 2. Create a new empty array and name it result. This is what we will return.
// 3. Now our change is $96.74. We store this value in a variable called change.
// 4. First check if change is less than the current currency value. If true, move on to next array. If false, go to next step.
// 5. Starting with the last array in the cid array, we look at two conditions.
//     -1. If change is greater than currency amount, take change - currency amount.
//     -2. If change is less than currency amount, take change and modulus(divide) it by currency value(20). So 96.74 % 20 = 16.73. If it equals 0, return it. Otherwise, this return value becomes the new change.
// 6. Continue on to the next array until you eventually have change = 0. At this point, you can return the result array.



