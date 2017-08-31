// In mathematics, the greatest common divisor (gcd) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. For example, the gcd of 8 and 12 is 4.

function greatestCommonDivisor(num1, num2) {
	if (num1 > num2) {
	  var counter = parseInt(num2/2);
	}
	else {
	  counter = parseInt(num1/2);
	}
	while (counter > 1) {
	  if ((num1 % counter === 0) && (num2 % counter === 0)) {
	    return counter;
	  }
	  else {
	    counter --;
	  }
	}
	return 1;
}

greatestCommonDivisor(600,136)